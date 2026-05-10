/**
 * @target MZ
 * @name ClearExplicitDrops
 * @plugindesc Clears item drops from the game
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var ClearExplicitDrops = ClearExplicitDrops || {};

ClearExplicitDrops.applyDatamapClears = function (lastLoadedMapId) {
  // clear out the starting video games from player's inventory
  function updateStartingVideoGames() {
    // filter out the explicit video game drops from the starting room
    // room 5 event 2
    if (lastLoadedMapId === 5) {
      const startingRoomEvent = $dataMap.events[2];
      if (startingRoomEvent) {
        const startingpage = startingRoomEvent.pages[0];
        const newList = startingpage.list.filter((listItem) => {
          if (listItem.code === 126)
            // remove the explicit drops of the 3 video games
            // the starting food and soap and toothpaste can stay
            return ![413, 417, 421].includes(listItem.parameters[0]);
          if (listItem.code === 122) return listItem.parameters[0] !== 41; // don't set video game count var=41 either
          return listItem.code !== 230; // remove the 60 frame waits for good measure
        });
        startingpage.list = newList;
      }
    }
  }
  updateStartingVideoGames();

  // this isnt really a drop but it goes here anyway. skips sybil's intro dialogue
  function updateStartingCutscene() {
    if (lastLoadedMapId === 5) {
      const introSkipScript = {
        code: 355,
        indent: 0,
        parameters: [
          "sSw(148, true); sSw(149, true); sVr(102, 1); sSw(103, 2); sSw(44, true); LookOutsideAPClient.openAPClient();",
        ],
      };
      const startingRoomEvent = $dataMap.events[2];
      startingRoomEvent.pages[0].list.push(introSkipScript);
    }
    if (lastLoadedMapId === 2) {
      const sybilEvent = $dataMap.events[12];
      const speakEventPage = sybilEvent.pages[1];
      if (gSw(103) < 3) {
        const newList = speakEventPage.list.filter(
          (listItem) => listItem.code !== 301 && listItem.code !== 221, // skip speaking to her the first time
        );
        speakEventPage.list = newList;
      }
    }
  }
  updateStartingCutscene();

  // remove the players arms at the start of the game. they get them back from ap
  function updateStartingArms() {
    if (lastLoadedMapId === 5) {
      const armScript = {
        code: 355,
        indent: 0,
        parameters: ["window.Unarmed.setArms(3);"],
      };
      const startingRoomEvent = $dataMap.events[2];
      startingRoomEvent.pages[0].list.push(armScript);
    }
  }
  updateStartingArms();

  // make it so killing lyle wont drop the darkroom key
  function clearShutterbugDrop() {
    //TODO: IMPLEMENT
  }

  // make it so killing taxidermy with audrey wont explicitly award rhino skin
  // other audrey drops...
  function clearAudreyDrops() {
    //TODO: IMPLEMENT
  }

  // remove rusty crown reward from rat king
  function clearRatKingDrops() {
    //TODO: IMPLEMENT
    // room 92 event 45 page 3
  }

  function updateAudreyRecruit() {
    // replace audrey recruit check with a state update
  }

  // remove all explicit rewards from all freds
  function clearFredRewards() {}

  // remove clown item drops from pierre interactions
  function clearPierreGifts() {
    //TODO: IMPLEMENT
  }

  // remove elixir prize and laundry prize
  function clearJeanneRewards() {
    //TODO: IMPLEMENT
  }

  // remove ring / grinning beast skill reward from finishing leighs quest
  function clearMartinNoteDrop() {
    //TODO: IMPLEMENT
  }

  // instead of setting and checking for variable 231, typewriter sets and checks self state A
  function updateTypewriterTrigger() {
    //TODO: IMPLEMENT
    // typewriter is room 118, event 5
  }

  // remove photo paper collection spots in lyles apartment
  function updatePhotoPaperTriggers() {
    //TODO: IMPLEMENT
  }

  // remove blank tape consumption in security room
  function updateCCTVTriggers() {
    //TODO: IMPLEMENT
  }
};

ClearExplicitDrops.applyEventClears = function (lastLoadedMapId, ev) {
  // replace the event message for getting screamatorium from the shelf with the actual drop
  function clearScreamitorumEvent() {
    if (lastLoadedMapId === 3 && ev.id === 88) {
      const screamatoriumEvent = ev;
      const filteredList = screamatoriumEvent.pages[0].list.filter(
        (listItem) => {
          if (listItem.code === 122) return listItem.parameters[0] !== 41; // don't set video game count var=41
          return listItem.code !== 126; // dont add screamatorium to inventory
        },
      );

      filteredList
        .filter(
          (listItem) =>
            listItem.code === 401 &&
            listItem.parameters[0].contains("Screamatorium"),
        )
        .forEach((listItem) => {
          listItem.parameters[0] = listItem.parameters[0].replace(
            "Screamatorium",
            LookOutsideAPClient.getItemName("APT_33_LIVING_ROOM_SCREAMATORIUM"),
          );
        });
      ev.pages[0].list = filteredList;
    }
  }
  clearScreamitorumEvent();

  function clearWoundedManKnifeEvent() {
    if (lastLoadedMapId === 24 && ev.id === 3) {
      const filteredList = ev.pages[1].list.filter(
        (listItem) => listItem.code !== 127, // dont add knife to inventory
      );

      const messageListItem = filteredList.filter(
        (listItem) =>
          listItem.code === 401 &&
          listItem.parameters[0].contains(
            "His hand still clutches that bloody knife.",
          ),
      );

      filteredList
        .filter(
          (listItem) =>
            listItem.code === 401 && listItem.parameters[0].contains("knife"),
        )
        .forEach((listItem, i) => {
          const replacement =
            i == 0
              ? `${LookOutsideAPClient.getItemName("APT_36_BATHROOM_WOUNDED_NEIGHBOR_KNIFE")}\\C[0]`
              : "thing";
          listItem.parameters[0] = listItem.parameters[0].replace(
            "knife",
            replacement,
          );
        });

      const choiceListItem = filteredList.find(
        (listItem) =>
          listItem.code === 102 &&
          listItem.parameters[0][0].contains("Take the knife."),
      );

      if (choiceListItem)
        choiceListItem.parameters[0][0] = choiceListItem.parameters[0][0] =
          "Take it.";

      ev.pages[1].list = filteredList;

      const confirmationListItem = filteredList.find(
        (listItem) =>
          listItem.code === 401 &&
          listItem.parameters[0].contains(
            "Find a \\C[03]{Kitchen Knife}\\C[0].",
          ),
      );

      if (confirmationListItem)
        confirmationListItem.parameters[0] =
          confirmationListItem.parameters[0].replace(
            "Find a \\C[03]{Kitchen Knife}\\C[0].",
            `Find ${LookOutsideAPClient.getItemName("APT_36_BATHROOM_WOUNDED_NEIGHBOR_KNIFE")}\\C[0].`,
          );
    }
  }
  clearWoundedManKnifeEvent();

  function clearTelescopeEvent() {
    if (lastLoadedMapId === 110 && ev.id === 7) {
      const darkTelescopeRoomPage = ev.pages[0];

      // remove the explicit deletion of void disc from inventory
      const filteredList = darkTelescopeRoomPage.list.filter(
        (listItem) => listItem.code !== 126 || listItem.parameters[0] !== 331, // remove the explicit removal of void disc
      );

      const negativeDiscGrantEventIndex = filteredList.findIndex(
        (listItem) => listItem.code === 126,
      );
      // instead of grant item, set custom check switch
      if (negativeDiscGrantEventIndex !== -1) {
        filteredList[negativeDiscGrantEventIndex] = {
          code: 121,
          indent: 2,
          parameters: [
            APT_31_TELESCOPE_DISC_EXPOSURE_SWITCH,
            APT_31_TELESCOPE_DISC_EXPOSURE_SWITCH,
            0,
          ],
        };
      }
      // display the randomized item earned
      const itemEarnedDisplay = filteredList.find(
        (listItem) =>
          listItem.code === 401 &&
          listItem.parameters[0].contains("Negative Disc"),
      );

      if (itemEarnedDisplay)
        itemEarnedDisplay.parameters[0] = `Get ${LookOutsideAPClient.getItemName("APT_31_TELESCOPE_DISC_EXPOSURE")}\\C[0].`;

      // gray out option after the check is finished
      // only one choice block in the event so i can check for just 102
      const choiceListItem = filteredList.find(
        (listItem) => listItem.code === 102,
      );

      if (choiceListItem)
        choiceListItem.parameters[0][0] = `<<[s[${APT_31_TELESCOPE_DISC_EXPOSURE_SWITCH}]]>>Put down void disc.`;

      // and the item for picking the option
      // gray out option after the check is finished
      const choiceSelectionItem = filteredList.find(
        (listItem) =>
          listItem.code === 402 &&
          listItem.parameters.length > 1 &&
          listItem.parameters[1].contains("void disc"),
      );

      if (choiceSelectionItem)
        choiceSelectionItem.parameters[1] = `<<[s[${APT_31_TELESCOPE_DISC_EXPOSURE_SWITCH}]]>>Put down void disc.`;

      ev.pages[0].list = filteredList;
    }
  }
  clearTelescopeEvent();

  function clearF3HallwayPlanterEvent() {
    if (lastLoadedMapId === 6 && ev.id === 13) {
      // the event usually disables itself by setting
      // self switch A when you do any interaction. I'll change it to setting B when
      // you get the drop, so you dont miss out
      ev.pages[0].list.find(
        (listItem) => listItem.code === 111, // if condition at start
      ).parameters[1] = "B";

      const keyAnnouncement = ev.pages[0].list.find(
        (listItem) =>
          listItem.code === 401 &&
          listItem.parameters[0].contains("Apartment 33 Key"),
      );
      if (keyAnnouncement)
        keyAnnouncement.parameters[0] = `Receive ${LookOutsideAPClient.getItemName("F3_PLANTER_KEY")}\\C[0].`;

      // change the item that sets the event self switch to A
      // this works because the success case is the very first one in the list
      // but is kind of hacky
      ev.pages[0].list.find((listItem) => listItem.code === 123).parameters[0] =
        "B";

      // filter out explicit apartment 33 key drop
      ev.pages[0].list = ev.pages[0].list.filter(
        (listItem) => listItem.code !== 126,
      );
    }
  }
  clearF3HallwayPlanterEvent();
};

ClearExplicitDrops.clearAllEnemiesDrops = function () {
  for (const enemy of $dataEnemies) {
    if (enemy) enemy.dropItems = [];
  }
};

let troopsUpdated = false;
let originalTroops;
// unlike other changes, troops is modified once and the copy
// is shared across save files
// i make a copy of the original troops on first modification
// so future modifications can start from a clean slate
ClearExplicitDrops.clearTroopsDrops = function () {
  if (!troopsUpdated) {
    originalTroops = JsonEx.makeDeepCopy($dataTroops);
  }

  function clearPierreGifts() {
    const pierreTroop = JsonEx.makeDeepCopy(originalTroops[19]);

    // first, remove explicit clown drawing gift
    let clownDrawingList = pierreTroop.pages[0].list.filter(
      (listItem) => listItem.code !== 126,
    );

    // then rename to randomized item
    clownDrawingList.find(
      (listItem) =>
        listItem.code === 401 &&
        listItem.parameters[0].contains("Clown Drawing"),
    ).parameters[0] =
      `Receive ${LookOutsideAPClient.getItemName("APT_38_PIERRE_CLOWN_DRAWING")}\\C[0].`;

    $dataTroops[19].pages[0].list = clownDrawingList;

    // remove clown wig gift (128 is an armors drop)
    let clownWigList = pierreTroop.pages[5].list.filter(
      (listItem) => listItem.code !== 128,
    );

    // then rename to randomized item
    clownWigList.find(
      (listItem) =>
        listItem.code === 401 &&
        listItem.parameters[0].contains("Clown Wig and Nose"),
    ).parameters[0] =
      `Receive ${LookOutsideAPClient.getItemName("APT_38_PIERRE_CLOWN_WIG")}\\C[0].`;

    $dataTroops[19].pages[5].list = clownWigList;
  }
  clearPierreGifts();

  troopsUpdated = true;
};

ClearExplicitDrops.clearCommonEventDrops = function () {
  // clear out game skill drops from common events
  // todo: don't call this if user unchecks randomizing game skills
  const gameSkillMapping = {};

  function clearGameSkills() {
    // filter out skill drops (code 318) from the game playing events (21->39)
    for (let i = 21; i <= 39; i++) {
      $dataCommonEvents[i].list = $dataCommonEvents[i].list.filter(
        (listItem) => listItem.code !== 318,
      );
    }
    // todo: alert the player to what they earned
  }
  clearGameSkills();
};
