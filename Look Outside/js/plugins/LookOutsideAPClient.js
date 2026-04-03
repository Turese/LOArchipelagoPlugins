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

LookOutsideAPClient.helperTools = function () {
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
        if (gVr(633) <= 24) sVr(633, 24);
        // force him to his fungus form
        $gameTemp.reserveCommonEvent(322);
        // however, he appears in the overworld in his moth form, so we need to manually update his portraits
      }
      // handle rat baby's growth stages
      else if (id == 366) {
      }
      // handle checking whether sophie moved back in with her mother
      else if (id == 362) {
      }
      else if (id = 380) {
        // audrey has no skills when forced into the party
      } else if (id = 34) {
        // leigh has no skills when forced into the party
      }
      sSw(id, true);
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
};

LookOutsideAPClient.helperTools();

LookOutsideAPClient.applyChanges = function () {};

LookOutsideAPClient.applyChanges();
