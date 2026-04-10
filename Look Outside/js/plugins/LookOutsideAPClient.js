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
 * and shoutout to the KELP MAN for letting me look through all that special look outside code
 *
 * WIP
 * as of now, this isn't even a client; it makes no connection to ap servers.
 * work so far has been in adding ability to inject items into the game
 **/

var LookOutsideAPClient = LookOutsideAPClient || {};

const VALID_RECRUITS = {
  376: "Lyle",
  374: "Aster",
  33: "Joel",
  34: "Leigh",
  32: "Dan",
  35: "Hellen",
  366: "Rat Child",
  370: "Roaches",
  361: "Ernest",
  362: "Sophie",
  378: "Papineau",
  363: "Goths",
  371: "Morton",
  380: "Audrey",
  1352: "The Spider", // wrong id
  499: "Phillippe", // wrong id???
};

const VALID_SKILLS = {
  401: "Jump Attack",
  402: "Nitro Boost",
  403: "Combat Medic",
  404: "Screamer",
  405: "Numbness",
  406: "Croak Orders",
  407: "Hurt Me Plenty",
  408: "Octostrike",
  409: "Meteor Strike",
  410: "Painful Stab",
  411: "Aim The Killshot",
  412: "Cash Sock",
  413: "Blood Madness",
  414: "Long Haul Flow",
  415: "Running Tackle",
  416: "Dungeon Dance",
  417: "Garrison",
  418: "Risk Taker",
  419: "Confusing Word",
};

const DEFAULT_AP_ITEM_IMAGE = {
  tileId: 0,
  characterName: "GameCarts",
  direction: 4,
  pattern: 0,
  characterIndex: 3,
};

function getAPItemPickupPage(
  itemName = AP_ITEM,
  itemImage = DEFAULT_AP_ITEM_IMAGE,
) {
  return {
    conditions: {
      actorId: 1,
      actorValid: false,
      itemId: 1,
      itemValid: false,
      selfSwitchCh: "A",
      selfSwitchValid: false,
      switch1Id: 1,
      switch1Valid: false,
      switch2Id: 1,
      switch2Valid: false,
      variableId: 1,
      variableValid: false,
      variableValue: 0,
    },
    directionFix: true,
    image: itemImage,
    list: [
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: [`There is an ${itemName} here.`],
      },
      {
        code: 102,
        indent: 0,
        parameters: [["Take it.", "Leave it."], -1, 0, 2, 0],
      },
      {
        code: 402,
        indent: 0,
        parameters: [0, "Take it."],
      },
      {
        code: 101,
        indent: 1,
        parameters: ["", 0, 0, 1, ""],
      },
      {
        code: 401,
        indent: 1,
        parameters: [`Find \\C[03]{${itemName}}\\C[0].`],
      },
      {
        code: 123,
        indent: 1,
        parameters: ["A", 0],
      },
      {
        code: 0,
        indent: 1,
        parameters: [],
      },
      {
        code: 402,
        indent: 0,
        parameters: [1, "Leave it."],
      },
      {
        code: 0,
        indent: 1,
        parameters: [],
      },
      {
        code: 404,
        indent: 0,
        parameters: [],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ],
    moveFrequency: 3,
    moveRoute: {
      list: [
        {
          code: 0,
          parameters: [],
        },
      ],
      repeat: true,
      skippable: false,
      wait: false,
    },
    moveSpeed: 3,
    moveType: 0,
    priorityType: 1,
    stepAnime: false,
    through: false,
    trigger: 0,
    walkAnime: true,
  };
}

const IMG_OVERRIDE = new Set(["img/characters/GameCarts.png"]);

const MAP_OVERWORLD_ITEM_OVERRIDES = {
  3: { 99: "APT_33_LIVINGROOM_CASH" },
  4: { 23: "APT_33_BATHROOM_FIRST_AID_KIT" },
};

LookOutsideAPClient.helperTools = function () {
  let lastLoadedMapId;
  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    lastLoadedMapId = mapId;
    loadMapData.call(this, mapId);
  };
  // adds an item to player inventory
  // item ids are listed in Items.json
  // @type itemClass {'item' | 'armor' | 'weapon'}
  const insertItem = function (id, itemClass) {
    try {
      // check if save file loaded
      let item;
      if (itemClass === "armor") item = $dataArmors[id];
      else if (itemClass === "weapon") item = $dataWeapons[id];
      else if (itemClass === "item") item = $dataItems[id];
      else throw new Error(`Unrecognized item class ${itemClass}`);
      $gameParty.gainItem(item, 1);
      console.log(`Item granted: ${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  // grants one of the 19 game skills
  const insertSkill = function (id) {
    // sanity check in case we try to grant one of the non-game skills
    if (!VALID_SKILLS[id]) throw new Error(`Skill ID out of range: ${id}`);
    try {
      // use actorid=1 since all game skills are Sam skills
      $gameActors.actor(1).learnSkill(id);
      console.log(`Skill learned: ${VALID_SKILLS[id]}`);
    } catch (e) {
      console.error(e);
    }
  };

  // sends a recruit to the apartment
  const insertRecruit = function (id, custom) {
    try {
      if (false) throw new Error(`Invalid recruit id: ${id}`);
      // $gameVariable 633 refers to Phillippe's growth stage, {todo: whats the minimum for exploring} + means he's ready to adventure
      if (id == 499) {
        if (gVr(633) <= 24) sVr(633, 24); // philGrowth to max
        sSw(319, true); // phillippeRecovered = on
        // force him to his fungus form
        // however, he appears in the overworld in his moth form, so we need to manually update his portraits
      }
      // handle rat baby's growth stages
      else if (id == 366) {
      }
      // handle checking whether sophie moved back in with her mother
      else if (id == 362) {
      } else if ((id = 380)) {
        // audrey has no skills when forced into the party
      } else if ((id = 34)) {
        // when leigh is recruited, game manually grants grinning beast
        $gameActors.actor(5).learnSkill(65);
      }
      sSw(id, true);
      if (gVr(633) <= 24) sVr(633, 24);
      sVr(37, gVr(37) + 1); // adds 1 to # of people in apartment counter
      console.log(`Recruit added: ${VALID_RECRUITS[id]}`);
    } catch (e) {
      console.error(e);
    }
  };

  // requires the unarmed and dangerous mod to work
  // $gameVariable 187 controls Sam's arms
  // 0 = both arms intact
  // 1 = right missing
  // 2 = left missing
  // 3 = both missing (custom mod value)
  // @type position {'left' | 'right'}
  const insertArm = function (position) {
    try {
      const hasUnarmedAndDangerous =
        PluginManager._scripts.includes("Zeropal_Unarmed");
      if (!hasUnarmedAndDangerous)
        throw new Error("Error: Prerequisite arm modifier mod not detected");
      const armStatus = gVr(187);
      if (armStatus == 3) {
        sVr(187, position == "left" ? 1 : 2);
      } else if (
        (armStatus == 2 && position == "left") ||
        (armStatus == 1 && position == "right")
      ) {
        sVr(187, 0);
      }
      $gameParty.leader().setCharacterImage("Chara_Player", 0);
      $gamePlayer.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  // returns list of defeated enemies, items picked up,
  const reportFulfilledChecks = function () {
    // reportDefeatedEnemies
    // reportPickedUpItems
    // reportRecruitsMade
  };

  window.LookOutsideAPClientHelperTools = {
    insertItem,
    insertSkill,
    insertRecruit,
    insertArm,
    reportFulfilledChecks,
  };

  // use custom image overrides for mod images
  const overWriteImgLoading = function () {
    const _startLoading = Bitmap.prototype._startLoading;
    Bitmap.prototype._startLoading = function () {
      if (IMG_OVERRIDE.has(this._url)) {
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
  };

  const getItemName = function (apLocationName) {
    // todo: actually get the item name
    return apLocationName;
  };

  const getItemImage = function (apLocationName) {
    // todo: actually get the item image
    return DEFAULT_AP_ITEM_IMAGE;
  };

  const overrideMapEvents = function () {
    const createCharacters = Spriteset_Map.prototype.createCharacters;
    Spriteset_Map.prototype.createCharacters = function () {
      if (MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId]) {
        const characterImagesToLoad = new Set(
          Object.values(MAP_OVERWORLD_ITEM_OVERRIDES).map(
            (apLocationName) => getItemImage(apLocationName).characterName,
          ),
        );
        // todo: check if somethings already loaded before i try to reload
        for (const characterImage of characterImagesToLoad) {
          ImageManager.loadCharacter(characterImage);
        }
      }
      createCharacters.call(this);
    };
    const onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function () {
      overrideOverworldPickups();
      onMapLoaded.call(this);
    };
  };

  const overrideOverworldPickups = function () {
    console.log(lastLoadedMapId);
    const eventsToOverride = MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId];
    console.log(eventsToOverride);
    if (!eventsToOverride) return;
    Object.keys(eventsToOverride).forEach((eventId) => {
      const event = $dataMap.events[eventId];
      console.log($dataMap.events[eventId], eventId);
      event.pages[0] = getAPItemPickupPage(
        getItemName(eventsToOverride[eventId]),
        getItemImage(eventsToOverride[eventId]),
      );
    });
  };

  overWriteImgLoading();
  overrideMapEvents();
};

LookOutsideAPClient.helperTools();

LookOutsideAPClient.applyChanges = function () {
  const scripts = ["Zeropal_Go_Home"];

  // load helper scripts
  loadScript = function (filename) {
    const url = "js/plugins/" + Utils.encodeURI(filename) + ".js";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.async = false;
    script.defer = true;
    script._url = url;
    document.body.appendChild(script);
  };
  scripts.forEach((script) => {
    loadScript(script);
  });
};

LookOutsideAPClient.applyChanges();
