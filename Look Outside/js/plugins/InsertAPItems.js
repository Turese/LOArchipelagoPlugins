/**
 * @target MZ
 * @name InsertAPItems
 * @plugindesc Insert AP Items: Insert any item to players inventory by AP ID
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var InsertAPItems = InsertAPItems || {};

// adds an item to player inventory
// item ids are listed in Items.json
// @type itemClass {'item' | 'armor' | 'weapon'}
InsertAPItems.insertItem = function (id, itemClass, amount = 1) {
  try {
    // check if save file loaded
    let item;
    if (itemClass === "armor") item = $dataArmors[id];
    else if (itemClass === "weapon") item = $dataWeapons[id];
    else if (itemClass === "item") item = $dataItems[id];
    else throw new Error(`Unrecognized item class ${itemClass}`);

    if (itemClass === "item" && id >= 411 && id <= 429) {
      // this id range is all the video games. add 1 to the video game count
      sVr(41, gVr(41) + 1);
    }
    if (itemClass === item && id == 346) {
      // progressive loose manuscript. second add should complete it
      //
    }
    $gameParty.gainItem(item, amount);
    console.log(`Item granted: ${id}`);
  } catch (e) {
    console.error(e);
  }
};

InsertAPItems.insertSkill = function (id) {
  // sanity check in case we try to grant one of the non-game skills
  try {
    // use actorid=1 since all game skills are Sam skills
    if (id === 103) {
      //leigh learns unleashed beast
      $gameActors.actor(5).learnSkill(id);
    } // rest of the current skills in the pool are for sam
    else $gameActors.actor(1).learnSkill(id);
  } catch (e) {
    console.error(e);
  }
};

InsertAPItems.insertRecruit = function (name) {
  if (name === "Aster") {
    sSw(374, true);
  }
  if (name === "Sophie") {
    sSw(362, true);
    // she comes with variable marbles depending on difficulty
    // but im doing normal mode 12 for now
    InsertAPItems.insertItem(203, "item", 12); // marbles
    InsertAPItems.insertItem(661, "item", 3); // steel marbles
  }
  if (name === "Phillippe") {
    sSw(319, true); // phillippeRecovered = on
    if (gVr(633) <= 24) sVr(633, 24); // philGrowth to max
    // replaces dust cloud with spore cloud
    const philActor = $gameActors.actor(26);
    philActor.forgetSkill(651);
    philActor.learnSkill(652);
    philActor.setFaceImage("Philippe", 0); // yes it's supposed to be spelled like that
    philActor.setCharacterImage("Chara_FungusLair", 6);
    // do i need to turn 491 (phildelusion) on????
  }
  if (name === "Audrey") {
    sSw(380, true);
    audreyActor = $gameActors.actor(22);
    audreyActor.setFaceImage("Portrait_Misc", 13);
    audreyActor.setCharacterImage("!VendingMachines", 6);
    audreyActor.setClass(22, true); // shes a machine
  }
  if (name === "Rat Baby") {
    if (!gSw(365)) {
      sSw(290, true); // ratFollows (it's big enough to join the party)
      // 366 ratbabygrown???
      sSw(365, true); // ratBabyIn (recruited)
    } else {
      sSw(1167); // ratChildBig
      // TODO: THIS ALSO COMES WITH STAT BOOSTS
    }
  }
  if (name === "Leigh") {
    sSw(34, true);
    // she needs to manually acquire the grinning beast skill
    $gameActors.actor(5).learnSkill(65);
    setSybilMajorStory(53);
  }
  if (name === "Hellen") {
    sSw(35, true);
  }
  if (name === "Lyle") {
    sSw(376, true);
  }
  if (name === "Joel") {
    sSw(33, true);
  }
  if (name === "Ernest") {
    sSw(361, true);
  }
  if (name === "Morton") {
    sSw(371, true);
  }
  if (name === "Dan") {
    sSw(32, true);
  }
  if (name === "Shadow") {
    sSw(27, true);
  }
  if (name === "Wiggly Fred") {
    sSw(539, true);
  }
  if (name === "Roaches") {
    sSw(249, true);
  }
  if (name === "Papineau") {
    sSw(378, true);
    InsertAPItems.insertItem(284, "item", 1); // Papineau's lunch
  }
  if (name === "Xaria and Montgomery") {
    sSw(363, true);
  }
  if (name === "Spider") {
    sSw(375, true);
  }
  sVr(37, gVr(37) + 1); // adds 1 to # of people in apartment counter
};

InsertAPItems.insertMiscItem = function (itemId) {
  switch (itemId) {
    case 1:
      InsertAPItems.insertRecruit("Aster");
      break;
    case 2:
      InsertAPItems.insertRecruit("Audrey");
      break;
    case 3:
      InsertAPItems.insertRecruit("Joel");
      break;
    case 4:
      InsertAPItems.insertRecruit("Leigh");
      break;
    case 5:
      InsertAPItems.insertRecruit("Lyle");
      break;
    case 6:
      InsertAPItems.insertRecruit("Xaria and Montgomery");
      break;
    case 7:
      InsertAPItems.insertRecruit("Morton");
      break;
    case 8:
      InsertAPItems.insertRecruit("Rat Baby");
      break;
    case 9:
      InsertAPItems.insertRecruit("Spider");
      break;
    case 10:
      InsertAPItems.insertRecruit("Hellen");
      break;
    case 11:
      InsertAPItems.insertRecruit("Dan");
      break;
    case 12:
      InsertAPItems.insertRecruit("Ernest");
      break;
    case 13:
      InsertAPItems.insertRecruit("Roaches");
      break;
    case 14:
      InsertAPItems.insertRecruit("Sophie");
      break;
    case 15:
      InsertAPItems.insertRecruit("Phillippe");
      break;
    case 16:
      InsertAPItems.insertRecruit("Papineau");
      break;
    case 17:
      InsertAPItems.insertRecruit("Shadow");
      break;
    case 18:
      InsertAPItems.insertRecruit("Wiggly Fred");
      break;
    case 19:
      InsertAPItems.insertArm("left");
      break;
    case 20:
      InsertAPItems.insertArm("right");
      break;
    case 21:
      sSw(238, true); // foundCraftingKit
      break;
    case 22:
      sSw(237, true); // crosswordPuzzles
      break;
    case 23:
      sSw(115, true); // unlockedElevator
      break;
    case 24:
      sSw(456, true); // floodedMazeGateOpen
      break;
    default:
      console.warn(`Unrecognized misc item id: ${itemId}, no item granted`);
  }
};

InsertAPItems.insertMoney = function (amount) {
  $gameParty.gainGold(amount);
};

InsertAPItems.insertResourcePack = function (itemId) {
  switch (itemId) {
    case 1: // ambrose
      InsertAPItems.insertItem(121, "item");
      InsertAPItems.insertItem(122, "item");
      InsertAPItems.insertItem(123, "item");
      InsertAPItems.insertItem(124, "item");
      InsertAPItems.insertItem(125, "item");
      InsertAPItems.insertItem(144, "item");
      InsertAPItems.insertItem(171, "item");
      InsertAPItems.insertItem(206, "item");
      InsertAPItems.insertItem(205, "item");
      InsertAPItems.insertItem(207, "item");
      InsertAPItems.insertItem(209, "item");
      InsertAPItems.insertItem(278, "item");
      InsertAPItems.insertItem(297, "armor");
      break;
    case 2: // 99x glitch elixir
      InsertAPItems.insertItem(118, "item", 99);
      break;
    case 3: // 20 dollars, 1x quarter, 2x pennies
      InsertAPItems.insertMoney(20);
      InsertAPItems.insertItem(107, "item", 1);
      InsertAPItems.insertItem(110, "item", 2);
      break;
    case 4: // 50 dollars, 3x quarter, 2x nickel
      InsertAPItems.insertMoney(50);
      InsertAPItems.insertItem(107, "item", 3);
      InsertAPItems.insertItem(109, "item", 2);
      break;
    case 5: // 40 dollars, 2x dollar coin, 3x quarter, 2x dime
      InsertAPItems.insertMoney(40);
      InsertAPItems.insertItem(106, "item", 2);
      InsertAPItems.insertItem(107, "item", 3);
      InsertAPItems.insertItem(108, "item", 2);
      break;
    case 6: // 40 dollars, 2x quarter, 3x dime, 2x penny
      InsertAPItems.insertMoney(40);
      InsertAPItems.insertItem(107, "item", 2);
      InsertAPItems.insertItem(108, "item", 3);
      InsertAPItems.insertItem(110, "item", 2);
      break;
    case 7: // 50 dollars, 3x quarter, 2x dime, 2x penny
      InsertAPItems.insertMoney(50);
      InsertAPItems.insertItem(107, "item", 3);
      InsertAPItems.insertItem(108, "item", 2);
      InsertAPItems.insertItem(110, "item", 2);
      break;
    case 8: // 2x quarters, 2x nickels,
      InsertAPItems.insertItem(107, "item", 2);
      InsertAPItems.insertItem(109, "item", 2);
      break;
    case 9: // 20 dollars, 2x nickel, 3x penny, 1x quarter
      InsertAPItems.insertMoney(20);
      InsertAPItems.insertItem(107, "item", 1);
      InsertAPItems.insertItem(109, "item", 2);
      InsertAPItems.insertItem(110, "item", 3);
      break;
    case 10: // 40 dollars, 1x nickel, 3x quarters
      InsertAPItems.insertMoney(40);
      InsertAPItems.insertItem(109, "item", 1);
      InsertAPItems.insertItem(107, "item", 3);
      break;
    case 11: // 20 dollars, 1x quarter, 2x penny
      InsertAPItems.insertMoney(20);
      InsertAPItems.insertItem(107, "item", 1);
      InsertAPItems.insertItem(110, "item", 2);
      break;
    case 12: // 40 dollars, 1x two dollar coin, 2x penny
      InsertAPItems.insertMoney(40);
      InsertAPItems.insertItem(105, "item", 1);
      InsertAPItems.insertItem(110, "item", 2);
      break;
    case 13: // 50 dollars, 2x dollar coin, 3x quarter, 1x dime
      InsertAPItems.insertMoney(50);
      InsertAPItems.insertItem(106, "item", 2);
      InsertAPItems.insertItem(107, "item", 3);
      InsertAPItems.insertItem(108, "item", 1);
      break;
    case 14: // 80 dollars
      InsertAPItems.insertMoney(80);
      break;
    case 15: // 40 dollars, 1x dollar coin, 2x quarter, 2x dime, 1x two dollar coin
      InsertAPItems.insertMoney(40);
      InsertAPItems.insertItem(105, "item", 1);
      InsertAPItems.insertItem(106, "item", 1);
      InsertAPItems.insertItem(107, "item", 2);
      InsertAPItems.insertItem(108, "item", 2);
      break;
    case 16: // 3x quarters
      InsertAPItems.insertItem(107, "item", 3);
      break;
    case 17: // 3x dollar coin
      InsertAPItems.insertItem(106, "item", 3);
      break;
    case 18: // 10 dollars
      InsertAPItems.insertMoney(10);
      break;
    case 19: // 50 dollars
      InsertAPItems.insertMoney(50);
      break;
    case 20: // 100 dollars
      InsertAPItems.insertMoney(100);
      break;
    case 21: // 200 dollars
      InsertAPItems.insertMoney(200);
      break;
    case 22: // 500 dollars
      InsertAPItems.insertMoney(500);
      break;
    case 23: // 20 marbles
      InsertAPItems.insertItem(203, "item", 20);
      break;
    case 24: // rare marble pack
      InsertAPItems.insertItem(661, "item", 5); // steel marbles
      InsertAPItems.insertItem(662, "item", 3); // silver marbles
      InsertAPItems.insertItem(663, "item", 2); // bouncing marbles
      InsertAPItems.insertItem(664, "item", 2); // bumblebee marbles

      InsertAPItems.insertItem(678, "item", 1); // golden marble
      InsertAPItems.insertItem(679, "item", 1); // death marble
      InsertAPItems.insertItem(679, "item", 1); // death marble
      InsertAPItems.insertItem(680, "item", 1); // cupid marble
      InsertAPItems.insertItem(681, "item", 1); // void marble
      InsertAPItems.insertItem(682, "item", 1); // rainbow marble
      break;
    case 25: // 3x pistol bullets
      InsertAPItems.insertItem(180, "item", 3);
      break;
    case 26: // 5x pistol bullets
      InsertAPItems.insertItem(180, "item", 5);
      break;
    case 27: // 10x pistol bullets
      InsertAPItems.insertItem(180, "item", 10);
      break;
    case 28: // 3x Rifle Bullets
      InsertAPItems.insertItem(183, "item", 10);
      break;
    case 29: // 5x Rifle Bullets
      InsertAPItems.insertItem(183, "item", 5);
      break;
    case 30: // 10x Rifle Bullets
      InsertAPItems.insertItem(183, "item", 10);
      break;
    case 31: // 3x SMG Bullets
      InsertAPItems.insertItem(182, "item", 3);
      break;
    case 32: // 5x SMG Bullets
      InsertAPItems.insertItem(182, "item", 5);
      break;
    case 33: // 10x SMG Bullets
      InsertAPItems.insertItem(182, "item", 10);
      break;
    case 34: // 3x Magnum Bullets
      InsertAPItems.insertItem(181, "item", 3);
      break;
    case 35: // 5x Magnum Bullets
      InsertAPItems.insertItem(181, "item", 5);
      break;
    case 36: // 10x Magnum Bullets
      InsertAPItems.insertItem(181, "item", 10);
      break;
    case 37: // 3x Shotgun Bullets
      InsertAPItems.insertItem(184, "item", 3);
      break;
    case 38: // 5x Shotgun Bullets
      InsertAPItems.insertItem(184, "item", 5);
      break;
    case 39: // 10x Shotgun Bullets
      InsertAPItems.insertItem(184, "item", 10);
      break;
    case 40: // apt 30 fridge:
      // normal/cursed: 2x chicken, 1x stew, 1x noodles
      InsertAPItems.insertItem(229, "item", 2);
      InsertAPItems.insertItem(220, "item", 1);
      InsertAPItems.insertItem(219, "item", 1);
      break;
    case 41: // apt 31 fridge:
      // normal/cursed: 1x tomato, 1x stew
      InsertAPItems.insertItem(224, "item", 1);
      InsertAPItems.insertItem(220, "item", 1);
      break;
    case 42: // apt 32 fridge:
      // all difficulties: 1x chicken, 1x bread, 2x eggs, noodles x1
      InsertAPItems.insertItem(229, "item", 1);
      InsertAPItems.insertItem(227, "item", 1);
      InsertAPItems.insertItem(231, "item", 2);
      InsertAPItems.insertItem(219, "item", 1);
      break;
    case 43: // apt 34 fridge:
      // normal/cursed: 1x pork, 1x beans
      InsertAPItems.insertItem(228, "item", 1);
      InsertAPItems.insertItem(221, "item", 1);
      break;
    case 44: // apt 35 fridge:
      // all difficulties: 1x chicken, 1x bread, 2x eggs, 1x noodles
      InsertAPItems.insertItem(229, "item", 1);
      InsertAPItems.insertItem(227, "item", 1);
      InsertAPItems.insertItem(231, "item", 2);
      InsertAPItems.insertItem(219, "item", 1);
      break;
    case 45: // apt 37 fridge:
      // all difficulties: 1x bread, 1x beef, 1x eggs
      InsertAPItems.insertItem(227, "item", 1);
      InsertAPItems.insertItem(230, "item", 1);
      InsertAPItems.insertItem(231, "item", 1);
      break;
    case 46: // apt 38 fridge:
      // all difficulties: 1 pizza bites, 1x pizza, 2x tv dinner
      InsertAPItems.insertItem(214, "item", 1);
      InsertAPItems.insertItem(213, "item", 1);
      InsertAPItems.insertItem(212, "item", 2);
      break;
    case 47: // apt 20 fridge:
      // all difficulties: 1x chicken, 1x bread, 2x tomato, 1x noodles
      InsertAPItems.insertItem(229, "item", 1);
      InsertAPItems.insertItem(227, "item", 1);
      InsertAPItems.insertItem(224, "item", 2);
      InsertAPItems.insertItem(219, "item", 1);
      break;
    case 48: // apt 21 fridge:
      // explorer/normal: 1x tv dinner, 3x leftovers, 2x rotten leftovers, 1x egg salad sandwich
      InsertAPItems.insertItem(212, "item", 1);
      InsertAPItems.insertItem(50, "item", 3);
      InsertAPItems.insertItem(49, "item", 2);
      InsertAPItems.insertItem(52, "item", 1);
      break;
    case 49: // apt 22 fridge:
      // all difficulties: 2x eggs, 2x bread, 2x rice
      InsertAPItems.insertItem(231, "item", 2);
      InsertAPItems.insertItem(227, "item", 2);
      InsertAPItems.insertItem(222, "item", 2);
      break;
    case 50: // apt 24 fridge:
      // all difficulties: 1x stew, 1x eggs, 1x beans
      InsertAPItems.insertItem(220, "item", 1);
      InsertAPItems.insertItem(231, "item", 1);
      InsertAPItems.insertItem(221, "item", 1);
      break;
    case 51: // apt 25 fridge:
      // all difficulties: 2x pizza bites, 2x tv dinner
      InsertAPItems.insertItem(214, "item", 2);
      InsertAPItems.insertItem(212, "item", 2);
      break;
    case 52: // apt 27 fridge:
      // normal mode: 1x pork, 1x tomato, 1x rice
      InsertAPItems.insertItem(228, "item", 1);
      InsertAPItems.insertItem(224, "item", 1);
      InsertAPItems.insertItem(222, "item", 1);
      break;
    case 53: // rat apartment fridge
      // all difficulties: 2x fish, 1x veggies, 1x tomato, 1x pork
      InsertAPItems.insertItem(216, "item", 2);
      InsertAPItems.insertItem(215, "item", 1);
      InsertAPItems.insertItem(224, "item", 1);
      InsertAPItems.insertItem(228, "item", 1);
      break;
    case 54: // apt 18 fridge
      // all difficulties: 2x tv dinner, 3x pork
      InsertAPItems.insertItem(212, "item", 2);
      InsertAPItems.insertItem(228, "item", 3);
      break;
    case 55: // mutt fridge 1
      // all difficulties: 1x bread, 1x beef, 1x eggs
      InsertAPItems.insertItem(227, "item", 1);
      InsertAPItems.insertItem(230, "item", 1);
      InsertAPItems.insertItem(231, "item", 1);
      break;
    case 56: // mutt fridge 2
      // all difficulties: 3x beans
      InsertAPItems.insertItem(221, "item", 3);
      break;
    case 57: // mutt fridge 3
      // all difficulties: 4x fish
      InsertAPItems.insertItem(216, "item", 4);
      break;
    case 58: // landlord fridge
      // all difficulties: 1x bread, 2x beef, 2x fish, 1x eggs
      InsertAPItems.insertItem(227, "item", 1);
      InsertAPItems.insertItem(230, "item", 2);
      InsertAPItems.insertItem(216, "item", 2);
      InsertAPItems.insertItem(231, "item", 1);
      break;
    case 59: // b1 fridge
      // all difficulties: 2x veggies, 2x potatoes, 1x rice
      InsertAPItems.insertItem(215, "item", 2);
      InsertAPItems.insertItem(223, "item", 2);
      InsertAPItems.insertItem(222, "item", 1);
      break;
    case 60: // b2 fridge
      // all difficulties: 2x pizza, 2x pizza bites, 1x noodles
      InsertAPItems.insertItem(213, "item", 2);
      InsertAPItems.insertItem(214, "item", 2);
      InsertAPItems.insertItem(219, "item", 1);
      break;
    case 61: // sewer fridge
      // explorer/normal: 2x pizza, 3x tv dinner, 2x pizza bites
      InsertAPItems.insertItem(213, "item", 2);
      InsertAPItems.insertItem(212, "item", 3);
      InsertAPItems.insertItem(214, "item", 2);
      break;
    case 62: // 5x junk
      InsertAPItems.insertItem(177, "item", 5);
      break;
    default:
      console.warn(`Unrecognized pack item id: ${itemId}, no item granted`);
  }
};

InsertAPItems.insertTrap = function (itemId) {
  switch (itemId) {
    case 1: // hunger
      sVr(24, Math.min(gVr(24), 0));
      $gameTemp.reserveCommonEvent(14);
      break;
    case 2: // exhausted
      sVr(23, Math.min(gVr(23), 0));
      $gameTemp.reserveCommonEvent(14);
      break;
    case 3: // lonely
      sVr(21, Math.min(gVr(21), 0));
      $gameTemp.reserveCommonEvent(14);
      break;
    case 4: // smelly
      sVr(25, Math.min(gVr(25), 0));
      $gameTemp.reserveCommonEvent(14);
      break;
    case 5: // depression
      sVr(26, Math.min(gVr(26), 0));
      $gameTemp.reserveCommonEvent(14);
      break;
    case 6: // anxiety
      sVr(22, Math.min(gVr(22), 0));
      $gameTemp.reserveCommonEvent(14);
      break;
    case 7: // bad breath
      sVr(117, Math.max(gVr(117), 9));
      break;
    case 8: // max danger
      sVr(112, Math.max(gVr(112), 480));
      break;
    default:
      console.warn(`Unrecognized trap item id: ${itemId}, no item granted`);
  }
};

// requires the unarmed and dangerous mod to work
// $gameVariable 187 controls Sam's arms
// 0 = both arms intact
// 1 = right missing
// 2 = left missing
// 3 = both missing (custom mod value)
// @type position {'left' | 'right'}
InsertAPItems.insertArm = function (position) {
  try {
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

InsertAPItems.loadCurrentMapImages = function () {
  console.log(
    "has custom image: ",
    !!MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId],
  );
  if (MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId]) {
    ImageManager.loadCharacter(DEFAULT_AP_ITEM_IMAGE.characterName);
    /*const characterImagesToLoad = new Set();
    // todo: check if somethings already loaded before i try to reload
    // todo: more than 1 character image
    for (const characterImage of characterImagesToLoad) {
      ImageManager.loadCharacter(characterImage);
    }*/
  }
};

InsertAPItems.shouldOverrideImage = function (url) {
  return url == "img/characters/GameCarts.png";
};
