/**
 * @target MZ
 * @name LookOutsideAPClient
 * @plugindesc Archipelago Client for Look Outside
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 *
 * special thanks to Donais04 and the Silver Daze team for paving the way
 * to
 * and shoutout to the KELP MAN for letting me look through all that special look outside code
 *
 * WIP
 * as of now, this isn't even a client; it makes no connection to ap servers.
 * work so far has been in adding ability to inject items into the game
 **/

var LookOutsideAPClient = LookOutsideAPClient || {};

let lastLoadedMapId;

let client;

const DEFAULT_AP_ITEM_IMAGE = {
  tileId: 0,
  characterName: "GameCarts",
  direction: 4,
  pattern: 0,
  characterIndex: 3,
};

LookOutsideAPClient.applyOverrides = function () {
  // track most recently loaded mapid for the sake of overwriting events
  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    lastLoadedMapId = mapId;
    loadMapData.call(this, mapId);
  };

  // check other mods' custom images all together
  const shouldOverrideImage = function (url) {
    if (Unarmed.shouldOverrideImage(url)) return true;
    if (InsertAPItems.shouldOverrideImage(url)) return true;
    return false;
  };

  // use custom image overrides for mod images to bypass encryption
  const _startLoading = Bitmap.prototype._startLoading;
  Bitmap.prototype._startLoading = function () {
    if (shouldOverrideImage(this._url)) {
      this._image = new Image();
      this._image.onload = this._onLoad.bind(this);
      this._image.onerror = this._onError.bind(this);
      this._destroyCanvas();
      this._loadingState = "loading";
      this._image.src = this._url;
      if (this._image.width > 0) {
        this._image.onload = null;
        this._onLoad();
      }
    } else _startLoading.call(this);
  };

  const _Game_Event_event = Game_Event.prototype.event;
  Game_Event.prototype.event = function () {
    const ev = _Game_Event_event.call(this);

    if (!ev) return ev;

    ClearExplicitDrops.applyEventClears(this._mapId, ev);
    UpdateMissableEvents.applyChanges(this._mapId, ev);

    return ev;
  };

  // update - extra images may be needed to be loaded when initializing the map
  const _createCharacters = Spriteset_Map.prototype.createCharacters;
  Spriteset_Map.prototype.createCharacters = function () {
    InsertAPItems.loadCurrentMapImages();
    _createCharacters.call(this);
  };

  const _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function (mapId) {
    BackInTime.createCalendarBackInTimeEvent(lastLoadedMapId);
    UpdateEventContent.overrideOverworldPickups(lastLoadedMapId);
    ClearExplicitDrops.applyDatamapClears(lastLoadedMapId);

    _Game_Map_setup.call(this, mapId);
  };

  const _dataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad = function (object) {
    if (object === $dataMap) {
      BackInTime.createCalendarBackInTimeEvent(lastLoadedMapId);
      UpdateEventContent.overrideOverworldPickups(lastLoadedMapId);
      ClearExplicitDrops.applyDatamapClears(lastLoadedMapId);
    }
    if (object === $dataEnemies) {
      ClearExplicitDrops.clearAllEnemiesDrops();
    }
    if (object === $dataCommonEvents) {
      // update common events
    }
    _dataManagerOnLoad.call(this, object);
  };

  // on load, attempt to connect to apclient
  const _extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function (contents) {
    LookOutsideAPClient.openAPClient();

    _extractSaveContents.call(this, contents);
  };
};

LookOutsideAPClient.initializeItemIndex = function () {
  if (!$gamePlayer.APItemsIndex) {
    $gamePlayer.APItemsIndex = 0;
  }
  return $gamePlayer.APItemsIndex;
};

// the games colors for reference:
/*
0 '#deeed6'
 1 '#cbdbfc'
 2 '#9badb7'
 3 '#5fcde4'
 4 '#6dc2ca'
 5 '#eec39a'
 6 '#6daa2c'
 7 '#8595a1'
 8 '#d2aa99'
 9 '#597dce'
 10 '#d04648'
 11 '#6daa2c'
 12 '#306082'
 13 '#8595a1'
 14 '#dad45e'
 15 '#d77bba'
 16 '#6dc2ca'
 17 '#4b692f'
 18 '#ac3232'
 19 '#8f563b'
 20 '#d27d2c'
 21 '#dad45e'
 22 '#597dce'
 23 '#639bff'
 24 '#99e550'
 25 '#d27d2c'
 26 '#8595a1'
 27 '#d27d2c'
 28 '#37946e'
 29 '#6dc2ca'
 30 '#757161'
 31 '#8595a1'

*/

LookOutsideAPClient.initializeLocationNames = function () {
  locations = Object.values(LOCATION_ID_MAPPING);
  let locationMapping = {};

  if (client?.authenticated)
    for (const l of locations) {
      client.scout([l]).then((results) => {
        if (results.length > 0) {
          const item = results[0];
          let itemColor = 3;
          if (item.progression) itemColor = 15;
          else if (item.useful) itemColor = 22;
          else if (item.trap) itemColor = 10;
          else if (item.filler) itemColor = 4;
          let player;
          if (item.receiver.slot === item.sender.slot) player = "";
          else player = `${item.receiver}'s `;
          locationMapping[l] = `${player}\\C[${itemColor}]${item.name}\\C[0]`;
        }
      });
    }
  $gamePlayer.LOCATION_NAME_MAPPING = locationMapping;
};

LookOutsideAPClient.initializeLocationObject = function () {
  if (!$gamePlayer.reachedLocations) {
    $gamePlayer.reachedLocations = {};
  }
  return $gamePlayer.reachedLocations;
};

LookOutsideAPClient.openAPClient = function () {
  const slotName = ConfigManager.slotName || "";
  const roomId = ConfigManager.roomId || "";
  const password = ConfigManager.password || "";

  if (!client) {
    client = new window.ArchipelagoModules.Client();
  }

  if (!slotName.length) {
    console.warn("AP Client not connected: missing slot name.");
    return;
  }

  client.messages.on("message", (content) => {
    console.log(content);
  });

  client.items.on("itemsReceived", () => {
    console.log('Item received from AP Server:', client.items.received[client.items.received.length - 1]);
    LookOutsideAPClient.updateItems();
  });

  const args = { items: 0b111 };

  if (password.length) {
    args.password = password;
  }

  if (roomId && !client.authenticated) {
    client
      .login(roomId, slotName, "Look Outside", args)
      .then(() => {
        console.log("Connected to AP Server!");
        LookOutsideAPClient.initializeItemIndex();
        LookOutsideAPClient.initializeLocationObject();
        LookOutsideAPClient.initializeLocationNames();
        LookOutsideAPClient.updateItems();
      })
      .catch(console.error);
  } else {
    LookOutsideAPClient.initializeItemIndex();
    LookOutsideAPClient.initializeLocationObject();
    LookOutsideAPClient.initializeLocationNames();
    LookOutsideAPClient.updateItems();
  }
};

LookOutsideAPClient.watchLocations = function () {
  setLocation = function (locationId) {
    const reachedLocations = LookOutsideAPClient.initializeLocationObject();
    if (!reachedLocations[locationId]) {
      reachedLocations[locationId] = true;
    }
    try {
      let socket = client.check(...Object.keys(reachedLocations).map(Number));
      console.log("Checked location: ", locationId, socket);
    } catch (error) {
      console.error("Error checking locations:", error);
    }
  };

  _setSelfSwitchValue = Game_SelfSwitches.prototype.setValue;
  Game_SelfSwitches.prototype.setValue = function (key, value) {
    _setSelfSwitchValue.call(this, key, value);

    const [roomId, eventId, switchId] = key;

    if (SELF_SWITCH_LOCATIONS[roomId]) {
      if (SELF_SWITCH_LOCATIONS[roomId][eventId]) {
        console.log("sending location: ", roomId, eventId, switchId);
        const locationId = SELF_SWITCH_LOCATIONS[roomId][eventId][switchId];
        console.log("sending location: ", locationId);
        if (locationId) {
          setLocation(LOCATION_ID_MAPPING[locationId]);
        }
      }
    }
  };

  _setSwitchValue = Game_Switches.prototype.setValue;
  Game_Switches.prototype.setValue = function (switchId, value) {
    _setSwitchValue.call(this, switchId, value);

    if (SWITCH_LOCATIONS[switchId]) {
      const locationId = SWITCH_LOCATIONS[switchId];
      console.log("sending location: ", locationId);
      if (locationId) setLocation(LOCATION_ID_MAPPING[locationId]);
    }
  };

  _setVarValue = Game_Variables.prototype.setValue;
  Game_Variables.prototype.setValue = function (variableId, value) {
    _setVarValue.call(this, variableId, value);

    const variableEntry = VARIABLE_LOCATIONS[variableId];

    if (variableEntry) {
      const { relation, value, location } = variableEntry;
      switch (relation) {
        case "=":
          if (value != this.value(variableId)) return;
          break;
        case ">":
          if (this.value(variableId) <= value) return;
          break;
        case "<":
          if (this.value(variableId) >= value) return;
          break;
        case ">=":
          if (this.value(variableId) < value) return;
          break;
        case "<=":
          if (this.value(variableId) > value) return;
          break;
        default:
          return;
      }
      const locationId = LOCATION_ID_MAPPING[location];
      console.log("sending location: ", locationId);
      setLocation(locationId);
    }
  };
};

LookOutsideAPClient.updateItems = function () {
  const items = client.items.received;
  const currIndex = LookOutsideAPClient.initializeItemIndex();
  console.log("CURRENT ITEM INDEX: ", currIndex);
  for (let i = currIndex; i < items.length; i++) {
    console.log(items[i]);
    const itemId = items[i].id;
    if (itemId < 1000) {
      window.InsertAPItems.insertItem(itemId, "item");
    } else if (itemId < 2000) {
      window.InsertAPItems.insertItem(itemId - 1000, "weapon");
    } else if (itemId < 3000) {
      window.InsertAPItems.insertItem(itemId - 2000, "armor");
    } else if (itemId < 4000) {
      window.InsertAPItems.insertSkill(itemId - 3000);
    } else if (itemId < 5000) {
      window.InsertAPItems.insertMiscItem(itemId - 4000);
    } else if (itemId < 6000) {
      window.InsertAPItems.insertMiscItem(itemId - 5000);
      // todo: this will be resource packs eventually
    } else {
      console.warn("ITEMTYPE NYI", itemId);
    }
  }
  $gamePlayer.APItemsIndex = items.length - 1;
};

LookOutsideAPClient.getItemName = function (apLocationName) {
  // todo: actually get the item name
  console.log(LOCATION_ID_MAPPING);
  const locationId = LOCATION_ID_MAPPING[apLocationName];
  const name = $gamePlayer.LOCATION_NAME_MAPPING
    ? $gamePlayer.LOCATION_NAME_MAPPING[locationId]
    : null;
  console.log("GETTING NAME: ", apLocationName, locationId, name);

  return name || "\\C[24]Randomized Item\\C[0]";
};

LookOutsideAPClient.getItemImage = function (apLocationName) {
  // todo: actually get the item image
  return DEFAULT_AP_ITEM_IMAGE;
};

LookOutsideAPClient.applyOverrides();

LookOutsideAPClient.watchLocations();
