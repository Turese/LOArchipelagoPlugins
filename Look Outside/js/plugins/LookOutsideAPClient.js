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
 *
 * and shoutout to the KELP MAN for letting me look through all that special look outside code
 *
 **/

var LookOutsideAPClient = LookOutsideAPClient || {};

// set to true when actively logging in
let connecting;

// set to last loaded map id every map load
let lastLoadedMapId;

const client = new window.ArchipelagoModules.Client();

const DEFAULT_AP_ITEM_IMAGE = {
  tileId: 0,
  characterName: "GameCarts",
  direction: 4,
  pattern: 0,
  characterIndex: 3,
};

LookOutsideAPClient.applyOverrides = function () {
  // track most recently loaded mapid for the sake of overwriting events
  const _loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    lastLoadedMapId = mapId;
    _loadMapData.call(this, mapId);
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

    EventLogicUpdates.applyEventUpdates(this._mapId, ev);
    BackInTime.createClockTimeEvent(lastLoadedMapId, ev);

    return ev;
  };

  // update - extra images may be needed to be loaded when initializing the map
  const _createCharacters = Spriteset_Map.prototype.createCharacters;
  Spriteset_Map.prototype.createCharacters = function () {
    InsertAPItems.loadCurrentMapImages();
    _createCharacters.call(this);
  };

  const _onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    _onMapLoaded.call(this);
    LookOutsideAPClient.checkMapForEnding($gameMap.mapId());
  };

  // todo: find out why i need some things to happen in both setup and onload`
  const _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function (mapId) {
    BackInTime.createCalendarBackInTimeEvent(mapId);
    BlackoutLamp.createLampBlackoutEvent(mapId);
    EventLogicUpdates.applyIntroClears(mapId);
    MassEventUpdates.overrideAllPickups(mapId);

    _Game_Map_setup.call(this, mapId);
  };

  const _dataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad = function (object) {
    if (object === $dataMap) {
      MassEventUpdates.overrideAllPickups(lastLoadedMapId);
      EventLogicUpdates.applyIntroClears(lastLoadedMapId);
    }
    if (object === $dataEnemies) {
      EventLogicUpdates.clearAllEnemiesDrops();
    }
    if (object === $dataCommonEvents) {
      // this wont have the correct names, but will still clear the event out
      EventLogicUpdates.clearCommonEventDrops();
    }
    if (object === $dataTroops) {
      // this wont have the correct names, but will still clear the event out
      EventLogicUpdates.clearTroopsDrops();
    }
    if (object === $dataItems) {
      InsertAPItems.renameItems();
    }
    if (object === $dataWeapons) {
      InsertAPItems.renameWeapons();
      InsertAPItems.fixFuzzyLock();
    }
    if (object === $dataClasses) {
      InsertAPItems.updateClasses();
    }
    if (object === $dataSystem) {
      InsertAPItems.updateWeapontypes();
    }
    if (object === $dataSystem) {
      // increase gameVariables length
      while ($dataSystem.variables.length <= 1040) {
        $dataSystem.variables.push("");
      }
    }
    _dataManagerOnLoad.call(this, object);
  };

  // on load, attempt to connect to apclient
  const _extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function (contents) {
    LookOutsideAPClient.startAPClient();
    _extractSaveContents.call(this, contents);
  };

  // any of these could play for any game over, but
  // we can still fit some fun references
  const DEATH_LINK_PHRASES = [
    " looked outside.",
    " looked outside.",
    " looked outside.", // make the main one slightly more common
    " has broken every bone in their body!", // curse of broken bones
    " is dEAD", // glitch death,
    " has become a mass of wriggling limbs!", // mutation during true final ending
    "'s mask is cracked...", // indigo mask
    " is catatonic...", // monty's status
    " saw it... Did you?", // wounded neighbor quote
    " broke the promise.",
    " has transformed into something horrible.", //examining ben quote
    " is slain!", // enemy battle death message
    "'s party was defeated.", // player battle death message
    " was defeated.", // solo game over
    " has been remade.", // spine
    " has been given the ultimate smooch.", // visitor smooch mode
    " was tricked by a hat.", // toxic fred
    " drank too much black ooze.",
    " stepped into the sea of worms.", // marshall stage 2
    " isn't making it to the ritual.",
    " hugged the Fred Who Bites.",
  ];

  const _Scene_GameoverStart = Scene_Gameover.prototype.start;
  Scene_Gameover.prototype.start = function () {
    _Scene_GameoverStart.call(this);

    if (gettingDeathLink) {
      // don't send a death link if your gameover was triggered by one
      gettingDeathLink = false;
      return;
    }

    if (client.authenticated) {
      const playerName = client.players.self.alias;
      // random death phrase from the list
      const message =
        DEATH_LINK_PHRASES[
          Math.floor(Math.random() * DEATH_LINK_PHRASES.length)
        ];

      const phrase = `${playerName}${message}`;

      console.log("SENDING DEATH LINK: ", phrase);
      client.deathLink.sendDeathLink(playerName, phrase);
    }
  };
};

LookOutsideAPClient.initializeItemIndex = function () {
  if (!$gamePlayer.APItemsIndex) {
    $gamePlayer.APItemsIndex = 0;
  }
  return $gamePlayer.APItemsIndex;
};

LookOutsideAPClient.initializeSlotData = function (slotData) {
  if (!$gamePlayer) return;
  if (!slotData) return $gamePlayer.slotData;
  return ($gamePlayer.slotData = slotData);
};

LookOutsideAPClient.retrieveSlotData = async function () {
  return client.players.self.fetchSlotData();
};

// this happens whether or not a save file is loaded
LookOutsideAPClient.updateDeathLink = function (slotData) {
  if (slotData.death_link) {
    client.deathLink.enableDeathLink();
  } else client.deathLink.disableDeathLink();
};

// immediate save file changes according to slot data

LookOutsideAPClient.makeSlotDataChanges = function () {
  if (!$gamePlayer || !$gamePlayer.slotData) return;
  const slotData = $gamePlayer.slotData;
  if (slotData["rat_baby_name"])
    InsertAPItems.setRatBabyName(slotData["rat_baby_name"]);

  if (slotData["allow_killing_shopkeepers"])
    sSw(CAN_KILL_SHOPKEEPERS_SWITCH, true);
  else sSw(CAN_KILL_SHOPKEEPERS_SWITCH, false);
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
const TRAP_MAPPINGS = [
  { trapTextColor: 22, trapName: "Paper-Maché Crown" },
  { trapTextColor: 22, trapName: "Elixer" },
  { trapTextColor: 22, trapName: "Cheese Boy" },
  { trapTextColor: 22, trapName: "Jasper Roommate" },
  { trapTextColor: 15, trapName: "Ceres Disk" },
  { trapTextColor: 15, trapName: "Old Rusty Key" },
  { trapTextColor: 15, trapName: "Sybil's Journal" },
  { trapTextColor: 15, trapName: "Super Jumplad 2" },
  { trapTextColor: 4, trapName: "Old Checkerboard" },
  { trapTextColor: 15, trapName: "Apt. 43 Key" },
  { trapTextColor: 22, trapName: "Master Sword" },
];

LookOutsideAPClient.initializeLocationNames = async function () {
  locations = Object.values(LOCATION_ID_MAPPING);
  let locationMapping = {};
  if (!$gamePlayer.LOCATION_NAME_MAPPING)
    $gamePlayer.LOCATION_NAME_MAPPING = locationMapping;

  if (client?.authenticated)
    for (const l of locations) {
      await client.scout([l]).then((results) => {
        if (results.length > 0) {
          const item = results[0];

          let itemColor = 3;
          if (item.progression) itemColor = 15;
          else if (item.useful) itemColor = 22;
          else if (item.filler) itemColor = 4;
          else if (item.trap) itemColor = 18;
          let player;
          if (item.receiver.slot === item.sender.slot) player = null;
          else player = `${item.receiver}'s `;
          let mapping = { player, itemColor, name: item.name };
          if (item.trap) {
            const randIndex = Math.floor(
              Math.random() * Object.keys(TRAP_MAPPINGS).length,
            );
            mapping = { ...mapping, ...TRAP_MAPPINGS[randIndex], isTrap: true };
          }
          locationMapping[l] = mapping;
        }
      });
      $gamePlayer.LOCATION_NAME_MAPPING = locationMapping;
    }
};

LookOutsideAPClient.initializeLocationObject = function () {
  if (!$gamePlayer.reachedLocations) {
    $gamePlayer.reachedLocations = {};
  }
  return $gamePlayer.reachedLocations;
};

LookOutsideAPClient.initializeReachedEndings = function () {
  if (!$gamePlayer.reachedEndings) {
    $gamePlayer.reachedEndings = {};
  }
  return $gamePlayer.reachedEndings;
};

/*
endingIds:

ritual (any failed ritual)
perfectRitual (any ritual with 4 good offerings, not including screaming skies)
screamingSkies (run from E4)
mask (4 mask offerings)
xinAmon (3 good offerings and a guinea pig)
eternalFate (anything shy of xin-amon or failing to defeat xin-amon)
unity (read the note)
wordsOfPower (give in to the crossword queen)

*/

const ALL_ROOF_ENDINGS = [
  "ritual",
  "perfectRitual",
  "screamingSkies",
  "promise",
  "mask",
  "xinAmon",
  "eternalFate",
  "trueFinal",
];

const ALL_ENDINGS = [
  "ritual",
  "perfectRitual",
  "screamingSkies",
  "promise",
  "mask",
  "xinAmon",
  "eternalFate",
  "trueFinal",
  "unity",
  "wordsOfPower",
  "noGoingBack",
];

LookOutsideAPClient.checkMapForEnding = function (lastLoadedMapId) {
  if (!$gamePlayer) return; // no endings if player isnt playing
  let endingIds = [];
  if (lastLoadedMapId == 260) {
    // spaceapproach; the perfect ritual map before you meet the visitor
    endingIds = ["ritual", "perfectRitual"];
  } else if (lastLoadedMapId == 165) {
    endingIds = ["ritual", "perfectRitual", "promise"];
  } else if (lastLoadedMapId == 340) {
    endingIds = ["ritual", "perfectRitual", "trueFinal"];
  } else if (lastLoadedMapId == 176) {
    endingIds = ["xinAmon"];
  } else if (lastLoadedMapId == 170) {
    endingIds = ["ritual"];
  } else if (lastLoadedMapId == 172) {
    endingIds = ["noGoingBack"];
  } else if (lastLoadedMapId == 173) {
    endingIds = ["screamingSkies"];
  } else if (lastLoadedMapId == 175) {
    endingIds = ["eternalFate"];
  } else if (lastLoadedMapId == 171) {
    endingIds = ["unity"];
  } else if (lastLoadedMapId == 174) {
    endingIds = ["mask"];
  } else if (lastLoadedMapId == 431) {
    endingIds = ["wordsOfPower"];
  }
  if (endingIds.length) LookOutsideAPClient.saveEndingReached(endingIds);
};

// save information to the save file about which ending has been reached
LookOutsideAPClient.saveEndingReached = async function (endingIds) {
  const reachedEndings = LookOutsideAPClient.initializeReachedEndings();

  endingIds.forEach((endingId) => {
    if (!ALL_ENDINGS.find((ending) => ending == endingId))
      throw new Error("UNRECOGNIZED ENDING");
    reachedEndings[endingId] = true;
  });

  LookOutsideAPClient.checkGoal();

  if (!$gameSystem) return;
  const saveId = $gameSystem.savefileId();
  const saveName = DataManager.makeSavename(saveId);
  StorageManager.loadObject(saveName).then((saveContents) => {
    saveContents.player.reachedEndings = reachedEndings;
    StorageManager.saveObject(saveName, saveContents);
  });
};

LookOutsideAPClient.checkGoal = function () {
  const reachedEndings = LookOutsideAPClient.initializeReachedEndings();
  const slotData = LookOutsideAPClient.initializeSlotData();
  if (!slotData || !reachedEndings) return;
  const goal = slotData["goal"];
  if (goal == 0) {
    // any partial ritual ending
    if (reachedEndings["ritual"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 1) {
    // any perfect ritual ending
    if (reachedEndings["perfectRitual"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 3) {
    // promise
    if (reachedEndings["promise"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 4) {
    // mask
    if (reachedEndings["mask"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 5) {
    // xin-amon
    if (reachedEndings["xinAmon"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 6) {
    // unity
    if (reachedEndings["unity"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 7) {
    // true final
    if (reachedEndings["trueFinal"]) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 8) {
    // all roof
    if (ALL_ROOF_ENDINGS.every((ending) => reachedEndings[ending])) {
      LookOutsideAPClient.submitGoal();
    }
  }
  if (goal == 7) {
    // all
    if (ALL_ENDINGS.every((ending) => reachedEndings[ending])) {
      LookOutsideAPClient.submitGoal();
    }
  }
};

LookOutsideAPClient.submitGoal = function () {
  if (client.authenticated) client.goal();
};

LookOutsideAPClient.gameLoadedAPSetup = async function (slotData) {
  LookOutsideAPClient.initializeSlotData(slotData);
  LookOutsideAPClient.checkGoal();
  LookOutsideAPClient.makeSlotDataChanges();
  LookOutsideAPClient.initializeItemIndex();
  LookOutsideAPClient.reportLocations();
  await LookOutsideAPClient.initializeLocationNames();
  LookOutsideAPClient.updateItems();
  LookOutsideAPClient.updateDeathLink(slotData);
  EventLogicUpdates.clearTroopsDrops();
  EventLogicUpdates.clearCommonEventDrops();
};

const resetClient = async function () {
  if (client.authenticated) {
    client.socket.off("disconnected");
    client.socket.disconnect();
  }
  LookOutsideAPClient.startAPClient();
};

LookOutsideAPClient.startAPClient = async function (deathLink) {
  if (connecting) return;
  const slotName = ConfigManager.slotName || "";
  const roomId = ConfigManager.roomId || "";
  const password = ConfigManager.password || "";

  if (!slotName.length) {
    disconnectedMessage = "AP Client not connected: missing slot name.";
    connectionTimerFrames = null;
    return;
  }

  if (!roomId.length) {
    disconnectedMessage = "AP Client not connected: missing room id.";
    connectionTimerFrames = null;
    return;
  }

  let tags = [];

  if (deathLink) {
    tags = ["DeathLink"];
  }

  client.items.on("itemsReceived", (_m) => {
    LookOutsideAPClient.updateItems();
  });

  client.deathLink.on("deathReceived", (_m) => {
    if (client.deathLink.enabled) forceGameOver();
  });

  client.socket.on("disconnected", (_m) => {
    disconnectedMessage = "Disconnected from server";
    connectionTimerFrames = TIMER_RETRY_SECONDS * 60;
  });

  const args = {};

  if (password.length) {
    args.password = password;
  }

  if (!client.authenticated) {
    connecting = true;
    connectionTimerFrames = null;
    client
      .login(roomId, slotName, "Look Outside", args)
      .then((slotData) => {
        connecting = false;
        LookOutsideAPClient.gameLoadedAPSetup(slotData);
      })
      .catch((e) => {
        connecting = false;
        console.error(e);
        if ($gamePlayer && $gamePlayer.slotData) {
          LookOutsideAPClient.gameLoadedAPSetup($gamePlayer.slotData);
        }
        disconnectedMessage = e.message;
      });
  } else {
    if ($gamePlayer) {
      LookOutsideAPClient.retrieveSlotData().then((slotData) =>
        LookOutsideAPClient.gameLoadedAPSetup(slotData),
      );
    }
  }
};

LookOutsideAPClient.reportLocations = function () {
  const reachedLocations = LookOutsideAPClient.initializeLocationObject();
  if (client.authenticated)
    client.check(...Object.keys(reachedLocations).map(Number));
};

LookOutsideAPClient.setLocation = function (locationName) {
  const locationId = LOCATION_ID_MAPPING[locationName];
  if (!locationId) return;
  const reachedLocations = LookOutsideAPClient.initializeLocationObject();
  if (!reachedLocations[locationId]) {
    reachedLocations[locationId] = true;
  }
  if (IMPLIED_LOCATIONS[locationName]) {
    for (impliedLocation of IMPLIED_LOCATIONS[locationName]) {
      reachedLocations[LOCATION_ID_MAPPING[impliedLocation]] = true;
    }
  }
  LookOutsideAPClient.reportLocations();
};

LookOutsideAPClient.isLocationSet = function (locationName) {
  const reachedLocations = LookOutsideAPClient.initializeLocationObject();

  return !!reachedLocations[LOCATION_ID_MAPPING[locationName]];
};

LookOutsideAPClient.watchLocations = function () {
  _setSelfSwitchValue = Game_SelfSwitches.prototype.setValue;
  Game_SelfSwitches.prototype.setValue = function (key, value) {
    _setSelfSwitchValue.call(this, key, value);

    const [roomId, eventId, switchId] = key;

    if (SELF_SWITCH_LOCATIONS[roomId]) {
      if (SELF_SWITCH_LOCATIONS[roomId][eventId]) {
        const locationId = SELF_SWITCH_LOCATIONS[roomId][eventId][switchId];
        if (locationId)
          console.log("SETTING SELF SWITCH LOCATION: ", locationId);
        if (locationId) {
          LookOutsideAPClient.setLocation(locationId);
        }
      }
    }
  };

  _setSwitchValue = Game_Switches.prototype.setValue;
  Game_Switches.prototype.setValue = function (switchId, value) {
    _setSwitchValue.call(this, switchId, value);

    if (SWITCH_LOCATIONS[switchId]) {
      const locationId = SWITCH_LOCATIONS[switchId];
      if (locationId) console.log("SETTING SWITCH LOCATION: ", locationId);

      if (locationId && value) {
        // make sure the switch is set to true
        LookOutsideAPClient.setLocation(locationId);
      }
    }
  };

  _setVarValue = Game_Variables.prototype.setValue;
  Game_Variables.prototype.setValue = function (variableId, value) {
    _setVarValue.call(this, variableId, value);

    const variableMapping = VARIABLE_LOCATIONS[variableId];

    function checkVariableEntry(variableEntry, checkValue) {
      const { relation, value, location } = variableEntry;
      switch (relation) {
        case "=":
          if (value != checkValue) return;
          break;
        case ">":
          if (checkValue <= value) return;
          break;
        case "<":
          if (checkValue >= value) return;
          break;
        case ">=":
          if (checkValue < value) return;
          break;
        case "<=":
          if (checkValue > value) return;
          break;
        default:
          throw new Error("ERROR: CAN'T FIND RELATION ON SWITCH");
          return;
      }
      if (location) console.log("SETTING VAR LOCATION: ", location);
      LookOutsideAPClient.setLocation(location);
    }

    if (Array.isArray(variableMapping)) {
      variableMapping.forEach((m) =>
        checkVariableEntry(m, this.value(variableId)),
      );
    } else if (variableMapping) {
      checkVariableEntry(variableMapping, this.value(variableId));
    }
  };
};

LookOutsideAPClient.updateItems = function () {
  const items = client.items.received;
  const currIndex = LookOutsideAPClient.initializeItemIndex();
  for (let i = currIndex + 1; i < items.length; i++) {
    const itemId = items[i].id;
    if (i <= $gamePlayer.APItemsIndex) {
      console.warn(`Item ${i} already received, skipping.`);
      continue;
    }
    $gamePlayer.APItemsIndex = i;
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
      window.InsertAPItems.insertResourcePack(itemId - 5000);
    } else if (itemId < 7000) {
      window.InsertAPItems.insertTrap(itemId - 6000);
    } else {
      console.warn("ITEMTYPE NYI", itemId);
    }
  }
};

LookOutsideAPClient.isLocationTrap = function (apLocationName) {
  const locationId = LOCATION_ID_MAPPING[apLocationName];
  if (
    $gamePlayer &&
    $gamePlayer.LOCATION_NAME_MAPPING &&
    $gamePlayer.LOCATION_NAME_MAPPING[locationId]
  ) {
    if ($gamePlayer.LOCATION_NAME_MAPPING[locationId].isTrap) return true;
  }
  return false;
};

LookOutsideAPClient.getItemName = function (
  apLocationName,
  excludeBrackets = false,
  useTrapName = false,
) {
  const locationId = LOCATION_ID_MAPPING[apLocationName];

  let mapping;

  if ($gamePlayer && $gamePlayer.LOCATION_NAME_MAPPING)
    mapping = $gamePlayer.LOCATION_NAME_MAPPING[locationId];

  if (!mapping)
    mapping = { player: null, name: "Randomized Item", itemColor: 24 };

  const { player, name, itemColor, trapName, trapTextColor } = mapping;

  const nameToUse = useTrapName ? trapName : name;
  const colorToUse = useTrapName ? trapTextColor : itemColor;

  if (excludeBrackets) {
    return `${player && !useTrapName ? player + " " : ""}\\C[${colorToUse}]${nameToUse}\\C[0]`;
  }
  return `${player && !useTrapName ? player + " " : ""}\\C[${colorToUse}]{${nameToUse}}\\C[0]`;
};

LookOutsideAPClient.getItemImage = function (apLocationName) {
  // todo: actually get the item image
  return DEFAULT_AP_ITEM_IMAGE;
};

// used for deathlink; don't want to send death link on a death caused by someone else's
let gettingDeathLink;

LookOutsideAPClient.forceGameOver = function () {
  if ($gamePlayer && !(SceneManager._scene instanceof Scene_Title)) {
    gettingDeathLink = true;
    SceneManager.goto(Scene_Gameover);
  }
};

LookOutsideAPClient.applyOverrides();
LookOutsideAPClient.watchLocations();
