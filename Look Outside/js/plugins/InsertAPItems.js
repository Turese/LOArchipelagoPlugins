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
    $gameParty.gainItem(item, amount);
    console.log(`Item granted: ${id}`);
  } catch (e) {
    console.error(e);
  }
};

InsertAPItems.insertSkill = function (id) {
  // sanity check in case we try to grant one of the non-game skills
  if (!VALID_SKILLS[id])
    throw new Error(`Skill ID out of range: ${id}, skill nyi`);
  try {
    // use actorid=1 since all game skills are Sam skills
    $gameActors.actor(1).learnSkill(id);
    console.log(`Skill learned: ${VALID_SKILLS[id]}`);
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
    philActor.setCharacterImage("Chara_FungusLair", 6)
    // do i need to turn 491 (phildelusion) on????
  }
  if (name === "Audrey") {
    sSw(380, true);
    audreyActor = $gameActors.actor(22);
    audreyActor.setFaceImage("Portrait_Misc", 13);
    audreyActor.setCharacterImage("!VendingMachines", 6)
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
      sSw(238, true) // foundCraftingKit
      break;
    case 22:
      sSw(237, true) // crosswordPuzzles
      break;
    case 23:
      sSw(115, true) // unlockedElevator
      break;
    case 24:
      sSw(456, true) // floodedMazeGateOpen
      break;
    default:
      console.warn(`Unrecognized misc item id: ${itemId}, no item granted`);
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
  if (MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId]) {
    const characterImagesToLoad = new Set(
      Object.values(MAP_OVERWORLD_ITEM_OVERRIDES).map(
        (apLocationName) =>
          LookOutsideAPClient.getItemImage(apLocationName).characterName,
      ),
    );
    // todo: check if somethings already loaded before i try to reload
    for (const characterImage of characterImagesToLoad) {
      ImageManager.loadCharacter(characterImage);
    }
  }
};

InsertAPItems.shouldOverrideImage = function (url) {
  return url == "img/characters/GameCarts.png";
};
