/**
 * @target MZ
 * @name DoorHelpers
 * @plugindesc Helper functions for tracking door encounter locations
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

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
};

const DOOR_CURSED = {
  249: "Mad Pie",
  250: "Fly Man",
  251: "Butcher",
  252: "Gun Freak",
  253: "Brute",
  254: "Syringes",
  256: "Same Ol' Dan",
  257: "Corrupted Cook",
  258: "Maniac",
  259: "Strange Lady",
  260: "Limb Thief",
  261: "Cursed William",
  263: "Trickster",
  264: "Warped Priest",
  271: "Hallway Mimic",
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
  59: "DOOR_HARRIET_COMBAT_VICTORY",
  60: "DOOR_GOTHS_COMBAT_VICTORY",
  61: "DOOR_WILLIAM_COMBAT_VICTORY",
  64: "DOOR_FATHER_ANDREW_COMBAT_VICTORY",
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
  263: ["DOOR_BEFRIEND_TRICKSTER"], // won't be used, but including here for the playerFinishedEncounter check
  59: ["DOOR_HARRIET_REUNITE"], // won't be used, but including here for the playerFinishedEncounter check
  49: ["DOOR_PIZZA", "DOOR_PIZZA_TIP"],
  71: ["DOOR_FREE_ITEM"],
  61: ["DOOR_WILLIAM_PRIZE_1", "DOOR_WILLIAM_PRIZE_2"], // won't be used, but including here for the playerFinishedEncounter check
  55: ["DOOR_GAMER_KATANA"],
  57: ["DOOR_HOBBS_PRIZE"], // won't be used, but including here for the playerFinishedEncounter check
  64: [
    "DOOR_FATHER_ANDREW_GIFT",
    "DOOR_FATHER_ANDREW_DONATION",
    "DOOR_FATHER_ANDREW_BLESSING",
  ],
  70: ["DOOR_HUMPHREY_DEAL"], // won't be used, but including here for the playerFinishedEncounter check
  251: ["DOOR_BUTCHER_ITEM"] // won't be used
};

var DoorHelpers = DoorHelpers || {};

// checks if the player has finished everything they needed to do with an encounter
DoorHelpers.playerNeedsEncounter = function (encounterId) {
  // player should always have access to the merchants
  if (PERMA_ALLOWED_IDS.has(encounterId)) return true;
  if ($gamePlayer) return true;
  const slotData = $gamePlayer.slotData;
  // if (!slotdata.randomize_door_encounters) return false;
  const combatToCheck = slotData.friendly_fire
    ? DOOR_ENCOUNTER_VICTORY_MAPPING
    : DOOR_REGULAR_ENCOUNTER_VICTORY_MAPPING;

  const encounterCombatVictory = combatToCheck[encounterId];

  if (encounterCombatVictory) {
    if (!LookOutsideAPClient.isLocationSet(encounterCombatVictory))
      return true;
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
  LookOutsideAPClient.setLocation(locationId);
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
  LookOutsideAPClient.setLocation(locationId);
  // gives a check after defeating the current door encounter
};

// special event prizes
DoorHelpers.processDoorEvent = function (index = 0) {
  const currentTroop = gVr(51);
  const doorEvents = DOOR_ENCOUNTER_EVENT_MAPPING[currentTroop];
  console.log(doorEvents, index);

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

  LookOutsideAPClient.setLocation(doorEvents[index]);
};


