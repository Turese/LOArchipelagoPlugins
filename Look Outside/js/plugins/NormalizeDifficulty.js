/**
 * @target MZ
 * @name NormalizeDifficulty
 * @plugindesc Make the same locations available in all difficulties
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var NormalizeDifficulty = NormalizeDifficulty || {};

// instances where a certain difficulty being on results in an item appearing
// in these instances, the difficulty condition is to be set to the always true switch

// format: {mapid: [eventid1, eventid2]}
// all of these will check every single page
const MAP_OVERWORLD_DIFFICULTY_POSITIVE_OVERRIDES = {
  60: [
    21, // GF_MACKINAW_JACKET
    22, // GF_ARROWED_SASH
  ],
  92: [1, 2, 3, 4, 6, 7], // floor 1 hardmode = transitions
  97: [7], // FRED_DARK_ROOM_BEER_2
  109: [8], // APT_31_BEDROOM_TONIC
  111: [9], // APT_31_BATHROOM_DCLOGGER_2
  31: [
    21, // APT_32_KITCHEN_VINEGAR_2
    30, // APT_32_ENTRY_HOODIE
    31, // APT_32_ENTRY_BANDAGES
    33, // APT_32_KITCHEN_TOOTH_FAIRY_COMBAT_VICTORY
  ],
  69: [9], // LAUNDRY_KLYSOX_1
  32: [8], // APT_32_BATHROOM_TONIC
  35: [17], // APT_37_TABLE_PLATE_2
  352: [21], // APT_37_LOCKED_ROOM_TONIC
  353: [
    15, // APT_38_PLATE_1
    23, // APT_38_PLATE_2
  ],
  7: [
    32, // F2_PISTOL_BULLETS_2
  ],
  10: [
    6, // APT_21_BEDROOM_BEEF_6
    9, // APT_21_BEDROOM_BEEF_3
  ],
  105: [
    10, // APT_12_PISTOL_BULLETS_2
    12, // APT_12_SHOTGUN_SHELLS_2
  ],
  293: [23], // APT_18_SKITTERBUSH_COMBAT_VICTORY
  297: [30], // APT_18_SE_SKITTERBUSH_COMBAT_VICTORY
  375: [13], // APT_18_SW_SKITTERBUSH_COMBAT_VICTORY
  98: [5], // AURELIUS_FIRST_AID_KIT
  101: [
    16, // RAT_APT_BABY_ROOM_RATS_COMBAT_VICTORY
    19, // RAT_APT_BABY_ROOM_RATS_COMBAT_VICTORY
  ],
  102: [
    10, // RAT_APT_BEDROOM_TRENCH_COAT
    13, // RAT_APT_BEDROOM_DENIM_JACKET !!! THIS ONE CHECKS NORMAL MODE
    14, // RAT_APT_BEDROOM_HOODIE
  ],
  103: [12], // RAT_APT_BATHROOM_TONIC
  96: [7], // FRED_ENTRYWAY_MACHETE
  8: [49, 50, 1, 2, 3], // hardmode beast chase phase 1
  372: [10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], // eye animations in beast chase hardmode and 10 = door only exists in hardmode
  302: [16], // B1_BATHROOM_URANUS_DISC
  207: [
    23, // LL_BATTLEFIELD_RIDER_2_COMBAT_VICTORY
    24, // LL_BATTLEFIELD_RIDER_1_COMBAT_VICTORY
  ],
  184: [11, 12, 13], // LL_ROCKET_LAUNCHER_COMBAT_VICTORY
  122: [19, 21], // APT_34_LONG_BEDROOM_MANTEAU_COMBAT_VICTORY
  48: [3], // door to steve room in sewer with lock
  299: [4], // locked bathroomdoor in b1
  119: [5], // FRED_TOXIC_ROOM_TONIC
  85: [
    23, // BOILER_STORAGE_KLYSOX_3
    21, // BOILER_STORAGE_D_CLOGGER_3
    19, // BOILER_STORAGE_DUCT_TAPE_3
  ],
};

// instances where a certain difficulty being on results in an item not appearing
// in these instances, the page condition is to be set to always false

// format: {mapid: {eventid: pageid}}
// if multiple pages {mapid: {eventid: [pageid1, pageid2]}}
const MAP_OVERWORLD_DIFFICULTY_NEGATIVE_OVERRIDES = {
  7: {
    30: [2, 3], // F2_PISTOL
    31: [2, 3], // F2_PISTOL_BULLETS_1
  },
  30: {
    10: 2, // STAIRWELL_POOL_CUE
  },
  97: {
    6: 2, // FRED_DARK_ROOM_TURPENTINE
  },
  292: {
    14: 2, // RAT_LAIR_GUARDED_CHEESE_3
    12: 2, // RAT_LAIR_GUARDED_CHEESE_4
  },
  79: {
    9: 2, // B_STEVE_JUNK_4
  },
  77: {
    3: 2, // SECURITY_STORAGE_GRENADE_2
  },
  69: {
    7: 2, // LAUNDRY_KLYSOX_3
  },
  85: {
    22: 2, // BOILER_STORAGE_VINEGAR_1
    11: 1, // BOILER_STORAGE_D_CLOGGER_2
    9: 1, // BOILER_STORAGE_KLYSOX_1
    8: 1, // BOILER_STORAGE_GASOLINE_1
    6: 2, // BOILER_STORAGE_DUCT_TAPE_1
  },
  258: {
    12: 2, // SEWER_SW_MOLOTOV_2
  },
  84: {
    10: 1, // BOILER_NORTH_JUNK_1
  },
  239: {
    2: 1, // TRUE_FRED_CLOSET_TURPENTINE_2
  },
  233: {
    8: 2, // LL_MEMORIAL_GRENADE
    10: 2, // LL_MEMORIAL_AMMO_CRATE_1
  },
  332: {
    9: 1, // APT_24_BEDROOM_CHOCKY_BAR_1
  },
  259: {
    3: 1, // SEWER_SE_SUPER_EXPLOSIVE
    17: 1, // SEWER_SE_FIREBOMB
  },
  58: {
    4: 2, // MUTT_BATHROOM_URANUS_DISC
  },
};

NormalizeDifficulty.applyChanges = function () {
  // track this to know what mapid to overwrite events for
  let mostRecentMapId;

  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    mostRecentMapId = mapId;
    loadMapData.call(this, mapId);
  };

  // in-game difficulty variable ids
  const HARDMODE = 8;
  const EASYMODE = 13;
  const NORMALMODE = 31;

  const allModeSwitches = [HARDMODE, EASYMODE, NORMALMODE];

  function forceDifficultyNegativeItem(ev, lastLoadedMapId) {
    const mapDifficultyNegativeEvents = MAP_OVERWORLD_DIFFICULTY_POSITIVE_OVERRIDES[lastLoadedMapId];
    if (!mapDifficultyNegativeEvents) return;
    const eventPageIds = mapDifficultyNegativeEvents[ev.id];
    if (!eventPageIdMapping) return; // i can get away with this for now because none of these checks occur on page 0 which is falsy
    const eventPageIdArray  = Array.isArray(eventPageIdMapping) ? eventPageIdMapping : [eventPageIdMapping]; 

    // force the page always false
    eventPageIdArray.forEach((pageId) => {
      if (ev.pages[pageId]) {
        if (allModeSwitches.includes(ev.pages[pageId].conditions.switch1Id)) {
          ev.pages[pageId].conditions.switch1Id = FALSE_SWITCH_ID;
        }
        if (allModeSwitches.includes(ev.pages[pageId].conditions.switch2Id)) {
          ev.pages[pageId].conditions.switch2Id = FALSE_SWITCH_ID;
        }
      }
    });
  }

  function forceDataMapDifficultyPositiveItems(dataMap) {
    const eventIdArray = MAP_OVERWORLD_DIFFICULTY_POSITIVE_OVERRIDES[dataMap.mapId];
    
    // force the page always true
    eventIdArray.forEach((eventId) => {
      ev = dataMap.events[eventId];
      // checking every page --- this is a little redundant but it's only about 1 or 2 redundant pages per event
      ev.pages.forEach(page => {
        if (allModeSwitches.includes(page.conditions.switch1Id)) {
          page.conditions.switch1Id = TRUE_SWITCH_ID;
        }
        if (allModeSwitches.includes(page.conditions.switch2Id)) {
          page.conditions.switch2Id = TRUE_SWITCH_ID;
        }
      });
    });

  }

  // always enable saves, even in places like the roof and rat hell
  DataManager.isSaveEnabled = function () {
    return true;
  };

  // shoutout to LaughingLeader's alwaysAutosave mod
  // for the pointers as to which functions to override
  Window_MenuCommand.prototype.isSaveEnabled = DataManager.isSaveEnabled;

  Window_MenuCommand.prototype.addSaveCommand = function () {
    if (this.needsCommand("save")) {
      this.addCommand(TextManager.save, "save", true);
    }
  };

  const _dataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad = function (object) {
    _dataManagerOnLoad.call(this, object);
    if (object === $dataMap) {
      forceDataMapDifficultyPositiveItems(object);
    }
  };

  const _Game_Event_event = Game_Event.prototype.event;
  Game_Event.prototype.event = function () {
    const ev = _Game_Event_event.call(this);

    if (!ev) return ev;

    forceDifficultyNegativeItem(ev, lastLoadedMapId);

    return ev;
  };
};

NormalizeDifficulty.applyChanges();
