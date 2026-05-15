/**
 * @target MZ
 * @name NormalizeDifficulty
 * @plugindesc Make the same locations available in all difficulties
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

const TRUE_SWITCH_ID = 1399;
const FALSE_SWITCH_ID = 1400;

var NormalizeDifficulty = NormalizeDifficulty || {};

NormalizeDifficulty.applyChanges = function () {
  // track this to know what mapid to overwrite events for
  let mostRecentMapId;

  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    mostRecentMapId = mapId;
    loadMapData.call(this, mapId);
  };

  // used in this plugin to decide what setting to normalize to
  const TO_EASYMODE = 1;
  const TO_HARDMODE = 2;

  // in-game difficulty variable ids
  const HARDMODE = 8;
  const EASYMODE = 13;

  // todo: this focuses on fights with extra events or unique spawns
  // ive skipped the rat encounters on floor 1 where hardmode adds more rats
  // forcing hardmode checks on these fights will also increase the hp and other stats of most
  // but i'll leave in the easymode debuffs to possibly counteract them
  const TROOPS_WITH_HARDMODE_EXTRAS = [
    20, // Wounded neighbor
    30, // Toothlings => rotten tooth
    31, // Teratoma, hardmode adds rotten tooth
    79, // Include wiggle eye in the encounter
    164, // stretchface with lil stretchy
    166, // confusion with crawlcorpse and screaming skull
    275, // surgeon - hardmode adds more soldiers
    281, // trench digger has sidekicks on hard mode
    283, // hardmode transforms soldier into commando
    284, // hardmode transforms soldier into commando
    286, // hardmode transforms soldier into commando
    426, // hardmode adds bottines to the fight
    427, // hardmode adds bottines to the fight
    428, // hardmode adds bottines to the fight
    429, // hardmode adds manchon to the fight
    433, // argot; hardmode adds tonsil and papillae
    434, // pompom; hardmode adds tuque and bottines
    439, // needles; hardmode adds mannikin
    440, // scissors; hardmode adds mannikin
    441, // taxidermy; hardmode adds extra heads
    444, // limbs; hardmode adds hideface
    445, // tiger; hardmode adds hideface
    465, // antoine; hardmode adds esther and noah
    466, // clyde; hardmode adds all his children and especially angel
    469, // steve; hardmode adds steve jr
  ];

  // make all events conform to a difficulty no matter which one was selected

  // make all easymode-only events always appear
  function forceEasyModeEvents(dataMap) {
    if (!dataMap) return;
    dataMap.events.forEach((evt) => {
      if (!evt) return;
      if (!evt.pages) return;
      evt.pages.forEach((page) => {
        const conditions = page.conditions;

        if (conditions.switch1Valid) {
          if (page.conditions.switch1Id === EASYMODE)
            page.conditions.switch1Id = TRUE_SWITCH_ID;
        }
        if (conditions.switch2Valid) {
          if (page.conditions.switch2Id === EASYMODE)
            page.conditions.switch2Id = TRUE_SWITCH_ID;
        }
      });
    });
  }

  // make all easymode-only events always appear
  function forceHardModeEvents(dataMap) {
    if (!dataMap) return;
    dataMap.events.forEach((evt) => {
      if (!evt) return;
      if (!evt.pages) return;
      evt.pages.forEach((page) => {
        const conditions = page.conditions;

        if (conditions.switch1Valid) {
          if (page.conditions.switch1Id === HARDMODE)
            page.conditions.switch1Id = TRUE_SWITCH_ID;
        }
        if (conditions.switch2Valid) {
          if (page.conditions.switch2Id === HARDMODE)
            page.conditions.switch2Id = TRUE_SWITCH_ID;
        }
      });
    });
  }

  // allows fridges to randomly attack you like on hardmode
  function forceHardmodeFridgeFightLogic(commonEvents) {
    commonEvents[286].list.forEach((listEntry) => {
      if (listEntry.code === 111) {
        // if statement check command
        if (
          listEntry.parameters[0] === 0 &&
          listEntry.parameters[1] === HARDMODE
        ) {
          // index 0 - check switches, 1 - switch id
          listEntry.parameters[1] = TRUE_SWITCH_ID;
        }
      }
    });
  }

  //
  function addHardmodeSpawnsToTroops(troops) {
    if (!troops) return;
    TROOPS_WITH_HARDMODE_EXTRAS.forEach((troopId) => {
      const troop = troops[troopId];
      troop.pages.forEach((page) => {
        if (page.conditions.switchId === HARDMODE)
          page.conditions.switchId = TRUE_SWITCH_ID;
        page.list.forEach((listEntry) => {
          if (listEntry.code === 111) {
            // if statement check command
            if (
              listEntry.parameters[0] === 0 &&
              listEntry.parameters[1] === HARDMODE
            ) {
              // index 0 - check switches, 1 - switch id
              listEntry.parameters[1] = TRUE_SWITCH_ID;
            }
          }
        });
      });
    });
  }

  function forceHardModeBeastChaseItems(ev, lastLoadedMapId) {
    if (lastLoadedMapId == 8) {
      if (ev.id == 61) {
        // checks switch 1049; if you defeated hardmode grinning beast
        // switching it to 81; if you faced the beast at all
        ev.pages[0].conditions.switch1Id = 81;
      }
    }

    // make grinning beast gun always drop (on hard mode it only drops when you dont fight)
    // and the first page of bullets always visible (hardmode gets a special page)
    if (lastLoadedMapId == 7) {
      if (ev.id == 31 || ev.id == 30) {
        if (ev.pages.length > 2) ev.pages.splice(2, 3);
      }
    }
  }

  // always enable saves, even in places like the roof and rat hell
  DataManager.isSaveEnabled = function () {
    return true;
  };

  // shoutout to LaughingLeader's alwaysAutosave mod
  // for the pointers as to which functions to override
  Window_MenuCommand.prototype.isSaveEnabled = () => DataManager.isSaveEnabled;

  Window_MenuCommand.prototype.addSaveCommand = function () {
    if (this.needsCommand("save")) {
      this.addCommand(TextManager.save, "save", true);
    }
  };
  const _onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    _onMapLoaded.call(this);
  };

  const _dataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad = function (object) {
    _dataManagerOnLoad.call(this, object);
    if (object === $dataMap) {
      forceEasyModeEvents(object);
      forceHardModeEvents(object);
    }
    if (object === $dataTroops) {
      addHardmodeSpawnsToTroops(object);
    }
    if (object === $dataCommonEvents) {
      forceHardmodeFridgeFightLogic(object);
    }
  };

  const _Game_Event_event = Game_Event.prototype.event;
  Game_Event.prototype.event = function () {
    const ev = _Game_Event_event.call(this);

    if (!ev) return ev;

    forceHardModeBeastChaseItems(ev, lastLoadedMapId);

    return ev;
  };
};

NormalizeDifficulty.applyChanges();
