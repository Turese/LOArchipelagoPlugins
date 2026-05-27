/**
 * @target MZ
 * @name DoorHelpers
 * @plugindesc Helper functions for tracking door encounter locations
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

const MERCHANT_IDS = new Set(47, 48, 49, 50, 51, 52, 53, 54, 55);

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
};

const DOOR_ENCOUNTER_EVENT_MAPPING = {};

// checks if the player has finished everything they needed to do with an encounter
DoorHelpers.playerFinishedEncounter = function (encounterId) {
  // player should always have access to the merchants
  if (MERCHANT_IDS.has(encounterId)) return false;
  if ($gamePlayer) return false;
  const slotData = $gamePlayer.slotData;
  const combatToCheck = slotData.friendly_fire
    ? DOOR_ENCOUNTER_VICTORY_MAPPING
    : DOOR_REGULAR_ENCOUNTER_VICTORY_MAPPING;

  const encounterCombatVictory = combatToCheck[encounterId];

  if (encounterCombatVictory) {
    if (!LookOutsideAPClient.isLocationSet(encounterCombatVictory))
      return false;
  }

  const encounterRecruit = DOOR_ENCOUNTER_RECRUIT_MAPPING[encounterId];

  if (encounterRecruit) {
    if (!LookOutsideAPClient.isLocationSet(encounterRecruit)) return false;
  }

  const encounterEvents = DOOR_ENCOUNTER_EVENT_MAPPING[encounterId];

  if (encounterEvents) {
    if (
      !encounterEvents.every((event) =>
        LookOutsideAPClient.isLocationSet(event),
      )
    )
      return false;
  }

  return true;
};

var DoorHelpers = DoorHelpers || {};

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

  console.log(locationId);
};
