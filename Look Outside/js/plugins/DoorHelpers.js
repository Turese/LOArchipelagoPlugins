/**
 * @target MZ
 * @name DoorHelpers
 * @plugindesc Helper functions for tracking door encounter locations
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

Game_Variables.prototype.setValue = function (variableId, value) {
  // new upper limit
  if (variableId <= 2029 && variableId >= 0) {
    this._data[variableId] = value;
    this.onChange();
  }
};

const REMAINING_DOOR_TRADERS_VAR = 2021;
const REMAINING_DOOR_RARE_TRADERS_VAR = 2022;
const REMAINING_DOOR_RECRUITS_VAR = 2023;
const REMAINING_DOOR_GENERAL_VAR = 2024;

const REMAINING_DOOR_CURSED_GENERAL_VAR = 2025;
const REMAINING_DOOR_CURSED_TRADERS_VAR = 2026;
const REMAINING_DOOR_CURSED_RECRUITS_VAR = 2027;

const REMAINING_REGULAR_VAR = 2028;
const REMAINING_CURSED_VAR = 2029;

const DOOR_TRADERS = {
  50: "General Trader",
  51: "Food Trader",
  52: "Gun Trader",
  53: "Sports Trader",
  54: "Nurse",
  55: "Gamer",
};

const DOOR_RARE_TRADERS = {
  47: "Mystery Trader",
  48: "Curio Trader",
  70: "Humphrey",
  72: "Craftsman",
};

const DOOR_RECRUIT = {
  56: "Creep",
  58: "Maniac",
  60: "Goth Trouble",
  63: "Little Menace",
};

const DOOR_GENERAL = {
  49: "Pizza Delivery",
  57: "Cook",
  59: "Harriet",
  61: "William",
  64: "Father Andrew",
  68: "Morton",
  71: "Nobody",
  73: "Kind-Faced Man",
  80: "Pierre",
};

const DOOR_CURSED_GENERAL = {
  249: "Mad Pie",
  250: "Fly Man",
  257: "Corrupted Cook",
  259: "Strange Lady",
  261: "Cursed William",
  264: "Warped Priest",
  271: "Hallway Mimic",
};

const DOOR_CURSED_TRADERS = {
  251: "Butcher",
  252: "Gun Freak",
  253: "Brute",
  254: "Syringes",
};

const DOOR_CURSED_RECRUITS = {
  256: "Same Ol' Dan",
  258: "Maniac",
  260: "Limb Thief",
  263: "Trickster",
  268: "Cursed Morton",
};

const ALL_DOOR_ENCOUNTERS = {
  ...DOOR_TRADERS,
  ...DOOR_RARE_TRADERS,
  ...DOOR_RECRUIT,
  ...DOOR_GENERAL,
  ...DOOR_CURSED_GENERAL,
  ...DOOR_CURSED_TRADERS,
  ...DOOR_CURSED_RECRUITS,
};

// 57 is hobbs; i'll always let player increase cooking skill
const PERMA_ALLOWED_IDS = new Set([
  ...Object.keys(DOOR_TRADERS),
  ...Object.keys(DOOR_RARE_TRADERS),
  57,
]);

const FRIENDLY_FIRE_VICTORY_MAPPING = {
  47: "DOOR_MYSTERY_TRADER_COMBAT_VICTORY",
  48: "DOOR_CURIO_COMBAT_VICTORY",
  49: "DOOR_PIZZA_GUY_COMBAT_VICTORY",
  50: "DOOR_GENERAL_TRADER_COMBAT_VICTORY",
  51: "DOOR_FOOD_TRADER_COMBAT_VICTORY",
  52: "DOOR_GUN_TRADER_COMBAT_VICTORY",
  53: "DOOR_TOUGH_GUY_COMBAT_VICTORY",
  54: "DOOR_NURSE_COMBAT_VICTORY",
  55: "DOOR_GAMER_COMBAT_VICTORY",
  56: "DOOR_DAN_COMBAT_VICTORY",
  57: "DOOR_HOBBS_COMBAT_VICTORY",
  58: "DOOR_HELLEN_COMBAT_VICTORY",
  60: "DOOR_GOTHS_COMBAT_VICTORY",
  61: "DOOR_WILLIAM_COMBAT_VICTORY",
  64: "DOOR_FATHER_ANDREW_COMBAT_VICTORY",
  68: "DOOR_MORTON_COMBAT_VICTORY",
  73: "DOOR_KIND_COMBAT_VICTORY",
  72: "SEBASTIAN_COMBAT_VICTORY",
  251: "DOOR_BUTCHER_COMBAT_VICTORY",
  263: "DOOR_TRICKSTER_COMBAT_VICTORY",
};

const DOOR_REGULAR_ENCOUNTER_VICTORY_MAPPING = {
  249: "DOOR_MAD_PIE_COMBAT_VICTORY", // this also procs if you kill the pizzaman; how to differentiate?
  250: "DOOR_FLY_MAN_COMBAT_VICTORY",
  252: "DOOR_GUN_TRADER_CURSED_COMBAT_VICTORY",
  253: "DOOR_BRUTE_COMBAT_VICTORY",
  254: "DOOR_SYRINGE_COMBAT_VICTORY",

  256: "DOOR_DAN_CURSED_COMBAT_VICTORY",
  257: "DOOR_HOBBS_CURSED_COMBAT_VICTORY",
  258: "DOOR_HELLEN_CURSED_COMBAT_VICTORY",
  259: "DOOR_HARRIET_CURSED_COMBAT_VICTORY",
  260: "DOOR_LIMB_THIEF_COMBAT_VICTORY",
  261: "DOOR_WILLIAM_CURSED_COMBAT_VICTORY",
  264: "DOOR_WARPED_PRIEST_COMBAT_VICTORY",
  268: "DOOR_MORTON_CURSED_COMBAT_VICTORY",
  271: "DOOR_HALLWAY_MIMIC_COMBAT_VICTORY",
};

const DOOR_ENCOUNTER_VICTORY_MAPPING = {
  ...FRIENDLY_FIRE_VICTORY_MAPPING,
  ...DOOR_REGULAR_ENCOUNTER_VICTORY_MAPPING,
};

const DOOR_ENCOUNTER_RECRUIT_MAPPING = {
  56: "DOOR_RECRUIT_DAN",
  58: "DOOR_RECRUIT_HELLEN",
  60: "DOOR_RECRUIT_GOTHS",
  63: "DOOR_RECRUIT_SOPHIE",
  73: "DOOR_RECRUIT_KIND", // won't be used, but including here for the playerFinishedEncounter check
  68: "DOOR_RECRUIT_MORTON", // won't be used, but including here for the playerFinishedEncounter check
};

const DOOR_ENCOUNTER_EVENT_MAPPING = {
  68: [
    "DOOR_MORTON_3_JUNK",
    "DOOR_MORTON_6_JUNK",
    "DOOR_MORTON_9_JUNK",
    "DOOR_MORTON_12_JUNK",
    "DOOR_MORTON_18_JUNK",
    "DOOR_MORTON_21_JUNK",
  ],
  263: ["DOOR_BEFRIEND_TRICKSTER"], // won't be used, but including here for the playerFinishedEncounter check
  59: ["DOOR_HARRIET_REUNITE"], // won't be used, but including here for the playerFinishedEncounter check
  49: ["DOOR_PIZZA", "DOOR_PIZZA_TIP"],
  71: ["DOOR_FREE_ITEM"],
  61: ["DOOR_WILLIAM_PRIZE_1", "DOOR_WILLIAM_PRIZE_2"], // won't be used, but including here for the playerFinishedEncounter check
  57: ["DOOR_HOBBS_PRIZE"], // won't be used, but including here for the playerFinishedEncounter check
  64: [
    "DOOR_FATHER_ANDREW_GIFT",
    "DOOR_FATHER_ANDREW_DONATION",
    "DOOR_FATHER_ANDREW_BLESSING",
  ], // won't be used, but including here for the playerFinishedEncounter check
  70: ["DOOR_HUMPHREY_DEAL"], // won't be used, but including here for the playerFinishedEncounter check
  251: ["DOOR_BUTCHER_ITEM"], // won't be used
};

var DoorHelpers = DoorHelpers || {};

// checks if the player has finished everything they needed to do with an encounter
DoorHelpers.playerNeedsEncounter = function (encounterId) {
  // player should always have access to the merchants
  if (PERMA_ALLOWED_IDS.has(encounterId)) return true;
  if (!$gamePlayer) return true;
  const slotData = $gamePlayer.slotData;
  if (!slotData) return true;

  //if (!slotData.randomize_door_encounters) return false;
  const combatToCheck = slotData.friendly_fire
    ? DOOR_ENCOUNTER_VICTORY_MAPPING
    : DOOR_REGULAR_ENCOUNTER_VICTORY_MAPPING;

  const encounterCombatVictory = combatToCheck[encounterId];

  if (encounterCombatVictory) {
    if (!LookOutsideAPClient.isLocationSet(encounterCombatVictory)) return true;
  }

  const encounterRecruit = DOOR_ENCOUNTER_RECRUIT_MAPPING[encounterId];

  if (encounterRecruit) {
    if (!LookOutsideAPClient.isLocationSet(encounterRecruit)) return true;
  }

  const encounterEvents = DOOR_ENCOUNTER_EVENT_MAPPING[encounterId];

  if (encounterEvents) {
    if (
      !encounterEvents.every((event) =>
        LookOutsideAPClient.isLocationSet(event),
      )
    )
      return true;
  }

  return false;
};

DoorHelpers.processDoorVictory = function () {
  const currentCombatVictory = gVr(51);
  const locationId = DOOR_ENCOUNTER_VICTORY_MAPPING[currentCombatVictory];

  if (!locationId) {
    console.warn(
      `--ERROR-- Unrecognized door encounter combat victory: ${currentCombatVictory}`,
    );
    return;
  }
  if (LookOutsideAPClient.shouldSendMessageForLocation(locationId))
    $gameMessage.add(EventLogicUpdates.getMessage(locationId));
  LookOutsideAPClient.setLocation(locationId);
  // resetup door encounters based on what player needs checks for
  setupDoorEncounters();
  // gives a check after defeating the current door encounter
};

// recruits
DoorHelpers.processDoorRecruit = function () {
  const currentRecruit = gVr(51);
  const locationId = DOOR_ENCOUNTER_RECRUIT_MAPPING[currentRecruit];

  if (!locationId) {
    console.warn(
      `--ERROR-- Unrecognized door encounter recruit: ${currentCombatVictory}`,
    );
    return;
  }
  if (LookOutsideAPClient.shouldSendMessageForLocation(locationId))
    $gameMessage.add(EventLogicUpdates.getMessage(locationId));

  LookOutsideAPClient.setLocation(locationId);
  // resetup door encounters based on what player needs checks for
  setupDoorEncounters();
  // gives a check after defeating the current door encounter
};

// special event prizes
DoorHelpers.processDoorEvent = function (index = 0) {
  const currentTroop = gVr(51);
  const doorEvents = DOOR_ENCOUNTER_EVENT_MAPPING[currentTroop];

  if (!doorEvents) {
    console.warn(
      `--ERROR-- Unrecognized door encounter event location: ${currentTroop}`,
    );
    return;
  }

  if (doorEvents.length <= index) {
    console.warn(
      `--ERROR-- Unrecognized ${currentTroop} encounter index: ${index}`,
    );
    return;
  }
  if (LookOutsideAPClient.shouldSendMessageForLocation(doorEvents[index]))
    $gameMessage.add(EventLogicUpdates.getMessage(doorEvents[index]));

  LookOutsideAPClient.setLocation(doorEvents[index]);
  // resetup door encounters based on what player needs checks for
  setupDoorEncounters();
};

DoorHelpers.buildEncounterOptions = function (encounterArray) {
  const createOption = (option, index) => {
    return [
      {
        code: 402,
        indent: 2,
        parameters: [index, ALL_DOOR_ENCOUNTERS[option]],
      },
      {
        code: 122,
        indent: 3,
        parameters: [51, 51, 0, 0, option],
      },
      {
        code: 0,
        indent: 3,
        parameters: [],
      },
    ];
  };

  return [
    {
      code: 102,
      indent: 2,
      parameters: [
        encounterArray.map((option) => ALL_DOOR_ENCOUNTERS[option]),
        -1,
        -1,
        2,
        0,
      ],
    },
    ...encounterArray.flatMap((option, index) => createOption(option, index)),
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
  ];
};

DoorHelpers.setRemainingEncounterVars = function () {
  const remainingDoorTraders = Object.keys(DOOR_TRADERS).filter((id) =>
    DoorHelpers.playerNeedsEncounter(id),
  ).length;

  const remainingDoorRareTraders = Object.keys(DOOR_RARE_TRADERS).filter((id) =>
    DoorHelpers.playerNeedsEncounter(id),
  ).length;

  const remainingDoorRecruits = Object.keys(DOOR_RECRUIT).filter((id) =>
    DoorHelpers.playerNeedsEncounter(id),
  ).length;

  const pierreDoorAvailable = gVr(617) == 5;

  const remainingDoorGeneral =
    Object.keys(DOOR_GENERAL).filter((id) =>
      DoorHelpers.playerNeedsEncounter(id),
    ).length + (pierreDoorAvailable ? 1 : 0);

  const remainingDoorCursedGeneral = Object.keys(DOOR_CURSED_GENERAL).filter(
    (id) => DoorHelpers.playerNeedsEncounter(id),
  ).length;

  const remainingDoorCursedRecruits = Object.keys(DOOR_CURSED_RECRUITS).filter(
    (id) => DoorHelpers.playerNeedsEncounter(id),
  ).length;

  const remainingDoorCursedTraders = Object.keys(DOOR_CURSED_TRADERS).filter(
    (id) => DoorHelpers.playerNeedsEncounter(id),
  ).length;

  sVr(REMAINING_DOOR_TRADERS_VAR, remainingDoorTraders);
  sVr(REMAINING_DOOR_RARE_TRADERS_VAR, remainingDoorRareTraders);
  sVr(REMAINING_DOOR_RECRUITS_VAR, remainingDoorRecruits);
  sVr(REMAINING_DOOR_GENERAL_VAR, remainingDoorGeneral);
  sVr(REMAINING_DOOR_CURSED_GENERAL_VAR, remainingDoorCursedGeneral);
  sVr(REMAINING_DOOR_CURSED_TRADERS_VAR, remainingDoorCursedTraders);
  sVr(REMAINING_DOOR_CURSED_RECRUITS_VAR, remainingDoorCursedRecruits);

  sVr(
    REMAINING_REGULAR_VAR,
    remainingDoorTraders +
      remainingDoorRareTraders +
      remainingDoorRecruits +
      remainingDoorGeneral,
  );
  sVr(
    REMAINING_CURSED_VAR,
    remainingDoorCursedGeneral +
      remainingDoorCursedTraders +
      remainingDoorCursedRecruits,
  );
};

DoorHelpers.buildEncounterPickerEventPage = function () {
  const remainingDoorTraderArray = Object.keys(DOOR_TRADERS).filter((id) =>
    DoorHelpers.playerNeedsEncounter(id),
  );

  const remainingDoorRareTraderArray = Object.keys(DOOR_RARE_TRADERS).filter(
    (id) => DoorHelpers.playerNeedsEncounter(id),
  );

  const remainingDoorRecruitArray = Object.keys(DOOR_RECRUIT).filter((id) =>
    DoorHelpers.playerNeedsEncounter(id),
  );

  const remainingDoorGeneralArray = Object.keys(DOOR_GENERAL).filter((id) =>
    DoorHelpers.playerNeedsEncounter(id),
  );

  if (gVr(617) == 5) {
    remainingDoorGeneralArray.push(80);
  }

  const remainingDoorCursedGeneralArray = Object.keys(
    DOOR_CURSED_GENERAL,
  ).filter((id) => DoorHelpers.playerNeedsEncounter(id));

  const remainingDoorCursedRecruitArray = Object.keys(
    DOOR_CURSED_RECRUITS,
  ).filter((id) => DoorHelpers.playerNeedsEncounter(id));

  const remainingDoorCursedTraderArray = Object.keys(
    DOOR_CURSED_TRADERS,
  ).filter((id) => DoorHelpers.playerNeedsEncounter(id));

  return [
    {
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["Summon a door encounter?"],
    },
    {
      code: 102,
      indent: 0,
      parameters: [
        [
          `<<[v[${REMAINING_REGULAR_VAR}]=0]>>Normal encounter.`,
          `<<[v[${REMAINING_CURSED_VAR}]=0]>>Cursed encounter.`,
          "No.",
        ],
        2,
        2,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 0,
      parameters: [0, `<<[v[${REMAINING_REGULAR_VAR}]=0]>>Normal encounter.`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `<<[v[${REMAINING_DOOR_TRADERS_VAR}]=0]>>Traders.`,
          `<<[v[${REMAINING_DOOR_RARE_TRADERS_VAR}]=0]>>Rare Traders.`,
          `<<[v[${REMAINING_DOOR_RECRUITS_VAR}]=0]>>Recruits.`,
          `<<[v[${REMAINING_DOOR_GENERAL_VAR}]=0]>>General.`,
          "Never mind.",
        ],
        4,
        4,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, `<<[v[${REMAINING_DOOR_TRADERS_VAR}]=0]>>Traders.`],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorTraderArray),
    {
      code: 402,
      indent: 1,
      parameters: [
        1,
        `<<[v[${REMAINING_DOOR_RARE_TRADERS_VAR}]=0]>>Rare Traders.`,
      ],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorRareTraderArray),
    {
      code: 402,
      indent: 1,
      parameters: [2, `<<[v[${REMAINING_DOOR_RECRUITS_VAR}]=0]>>Recruits.`],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorRecruitArray),
    {
      code: 402,
      indent: 1,
      parameters: [3, `<<[v[${REMAINING_DOOR_GENERAL_VAR}]=0]>>General.`],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorGeneralArray),
    {
      code: 402,
      indent: 1,
      parameters: [4, "Never mind."],
    },
    {
      code: 115,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 404,
      indent: 1,
      parameters: [],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 402,
      indent: 0,
      parameters: [1, `<<[v[${REMAINING_CURSED_VAR}]=0]>>Cursed encounter.`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `<<[v[${REMAINING_DOOR_CURSED_TRADERS_VAR}]=0]>>Cursed Traders.`,
          `<<[v[${REMAINING_DOOR_CURSED_GENERAL_VAR}]=0]>>Cursed General.`,
          `<<[v[${REMAINING_DOOR_CURSED_RECRUITS_VAR}]=0]>>Cursed Recruits.`,
          "Never mind.",
        ],
        3,
        3,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 1,
      parameters: [
        0,
        `<<[v[${REMAINING_DOOR_CURSED_TRADERS_VAR}]=0]>>Cursed Traders.`,
      ],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorCursedTraderArray),
    {
      code: 402,
      indent: 1,
      parameters: [
        1,
        `<<[v[${REMAINING_DOOR_CURSED_GENERAL_VAR}]=0]>>Cursed General.`,
      ],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorCursedGeneralArray),
    {
      code: 402,
      indent: 1,
      parameters: [
        2,
        `<<[v[${REMAINING_DOOR_CURSED_RECRUITS_VAR}]=0]>>Cursed Recruits.`,
      ],
    },
    ...DoorHelpers.buildEncounterOptions(remainingDoorCursedRecruitArray),
    {
      code: 402,
      indent: 1,
      parameters: [3, "Never mind."],
    },
    {
      code: 115,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 404,
      indent: 1,
      parameters: [],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 402,
      indent: 0,
      parameters: [2, "I'm good."],
    },
    {
      code: 115,
      indent: 1,
      parameters: [],
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
      code: 121,
      indent: 0,
      parameters: [24, 24, 0],
    },
    {
      code: 117,
      indent: 0,
      parameters: [7],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];
};

// override the setup function from bunchastuff
setupDoorEncounters = function () {
  // the way cursed encounters are set up is a little weird
  // where we add 200 to the regular encounter id
  // so im setting it up this way

  sVr(
    164,
    shuffleArray(
      [50, 51, 52, 53, 54, 55].filter(
        (id) =>
          DoorHelpers.playerNeedsEncounter(id) ||
          DoorHelpers.playerNeedsEncounter(id + 200),
      ),
    ),
  );
  sVr(
    165,
    shuffleArray([49, 57, 59, 61, 64, 68, 71, 73]).filter(
      (id) =>
        DoorHelpers.playerNeedsEncounter(id) ||
        DoorHelpers.playerNeedsEncounter(id + 200),
    ),
  );
  sVr(
    166,
    shuffleArray(
      [56, 58, 60, 63].filter(
        (id) =>
          DoorHelpers.playerNeedsEncounter(id) ||
          DoorHelpers.playerNeedsEncounter(id + 200),
      ),
    ),
  );
  sVr(
    170,
    shuffleArray(
      [56, 58, 60, 63].filter(
        (id) =>
          DoorHelpers.playerNeedsEncounter(id) ||
          DoorHelpers.playerNeedsEncounter(id + 200),
      ),
    ),
  );

  arr = [47, 48, 70, 72]; ///47-Mystery Trader ,48-Curio ,70-Humphrey, 72-Craftsman
  arr = shuffleArray(arr);
  sVr(170, arr);
  sVr(
    167,
    [
      0, 1, 0, 1, 2, 3, 1, 0, 1, 2, 0, 1, 0, 1, 2, 3, 1, 0, 1, 2, 0, 1, 0, 1, 2,
      3, 1, 0, 1, 2, 0, 1, 0, 1, 2, 3, 1, 0, 1, 2, 0, 1, 0, 1, 2, 3, 1, 0, 1, 2,
      0, 1, 0, 1, 2, 3, 1, 0, 1, 2, 0, 1, 0, 1, 2,
    ],
  );

  sVr(
    168,
    [47, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 68, 71],
  );
};
