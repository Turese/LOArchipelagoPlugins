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
          confirmationListItem.parameters[0] = `Find ${LookOutsideAPClient.getItemName("APT_36_BATHROOM_WOUNDED_NEIGHBOR_KNIFE")}\\C[0].`;
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
        itemEarnedDisplay.parameters[0] = `Get ${LookOutsideAPClient.getItemName("APT_31_TELESCOPE_DISC_EXPOSURE")}.`;

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
        keyAnnouncement.parameters[0] = `Receive ${LookOutsideAPClient.getItemName("F3_PLANTER_KEY")}.`;

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

  function clearElevatorFreakEvent() {
    // the elevator access switch is also used to tell whether the freak is dead; lets change it to a self switch
    if (lastLoadedMapId === 74 && ev.id === 3) {
      victorySwitchIdx = ev.pages[0].list.findIndex(
        (listItem) => listItem.code == 121,
      );
      if (victorySwitchIdx !== -1) {
        ev.pages[0].list[victorySwitchIdx] = {
          code: 355,
          indent: 0,
          parameters: ["$gameSelfSwitches.setValue([74, 3, 'A'], true)"],
        };
        ev.pages[1].conditions = {
          actorId: 1,
          actorValid: false,
          itemId: 1,
          itemValid: false,
          selfSwitchCh: "A",
          selfSwitchValid: true,
          switch1Id: 1,
          switch1Valid: false,
          switch2Id: 1,
          switch2Valid: false,
          variableId: 1,
          variableValid: false,
          variableValue: 0,
        };
      }
      // also clear out the power outage effect; player should trigger this manually
      ev.pages[0].list = ev.pages[0].list.filter(
        (listItem) => !(listItem.code == 122 && parameters[0] == 736),
      );
    }
  }
  clearElevatorFreakEvent();

  function clearRatKingCrown() {
    if (lastLoadedMapId === 92 && ev.id === 45) {
      // clear out rusty crown drop
      ev.pages[2].list = ev.pages[2].list.filter(
        (pageItem) => pageItem.code !== 128,
      );

      // change message for both bow and non bow cases

      const rustyCrownAnnouncement = ev.pages[2].list.find(
        (listItem) =>
          listItem.code === 401 &&
          listItem.parameters[0].contains("Rusty Crown"),
      );
      if (rustyCrownAnnouncement)
        rustyCrownAnnouncement.parameters[0] = `You receive ${LookOutsideAPClient.getItemName("F1_RAT_KING_COMBAT_VICTORY")}.`;

      const crownDustAnnouncement = ev.pages[2].list.find(
        (listItem) =>
          listItem.code === 401 &&
          listItem.parameters[0].contains("turns to dust"),
      );
      if (crownDustAnnouncement)
        crownDustAnnouncement.parameters[0] = `The Rat King's crown turns to ${LookOutsideAPClient.getItemName("F1_RAT_KING_COMBAT_VICTORY")} in your hands.`;
    }
  }
  clearRatKingCrown();

  function clearBasementKeyDrops() {
    // clear out the key prize from antoine
    // and from the arthropods from B1
  }
  clearBasementKeyDrops();
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
      `Receive ${LookOutsideAPClient.getItemName("APT_38_PIERRE_CLOWN_DRAWING")}.`;

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
      `Receive ${LookOutsideAPClient.getItemName("APT_38_PIERRE_CLOWN_WIG")}.`;

    $dataTroops[19].pages[5].list = clownWigList;
  }
  clearPierreGifts();

  // clears out the masked shadow tongue gift and recruit
  // hallway gift is different
  function clearMaskedShadowEncounters() {
    const maskedShadowTroop = JsonEx.makeDeepCopy(originalTroops[18]);

    const removedTongueGiftList = maskedShadowTroop.pages[0].list.filter(
      (page) => page.code !== 126,
    );

    removedTongueGiftList.find(
      (listItem) =>
        listItem.code === 401 && listItem.parameters[0].contains("a tongue"),
    ).parameters[0] =
      `and appears to be... a ${LookOutsideAPClient.getItemName("MASKED_SHADOW_TONGUE")}.`;

    removedTongueGiftList.find(
      (listItem) =>
        listItem.code === 401 && listItem.parameters[0].contains("Tongue"),
    ).parameters[0] =
      `You receive a ${LookOutsideAPClient.getItemName("MASKED_SHADOW_TONGUE")}.`;

    // dont want player to refuse it, so i'll set 'refuse it' to be grayed
    // out on a condition guaranteed to be true (current shadow interaction = 5 i.e. this one)
    removedTongueGiftList.find(
      (listItem) =>
        listItem.code === 102 && listItem.parameters[0][0].contains("Take it."),
    ).parameters[0][1] = `<<[v[150]=5]>>Refuse it`;

    // remove the explicit recruit check variable setting
    removedShadowRecruitList = removedTongueGiftList.filter(
      (listItem) => !(listItem.code == 121 && listItem.parameters[0] === 27),
    );

    // set chosen gift to always be 1 to make it
    // easier to overwrite that event as well
    const shadowGiftPickingIndex = removedShadowRecruitList.findIndex(
      (listItem) => listItem.code === 122 && listItem.parameters[0] === 155,
    );

    ((removedShadowRecruitList[shadowGiftPickingIndex] = {
      code: 355,
      indent: 1,
      parameters: ["sVr(155, 1);"],
    }),
      ($dataTroops[18].pages[0].list = removedShadowRecruitList));
    // for good measure im removing the code that makes shadow stop coming around when you attack it
    $dataTroops[18].pages[1].list = maskedShadowTroop.pages[1].list.filter(
      (listItem) => listItem.code !== 121,
    );
  }
  clearMaskedShadowEncounters();

  // clear both the gun sale and the recruitment itself
  function clearLeighRecruitmentEvent() {
    const leighTroopList = JsonEx.makeDeepCopy(originalTroops[34]).pages[0]
      .list;

    // make us never hit gun dialogue
    const checkHardModeIndex = leighTroopList.findIndex(
      (listEntry) => listEntry.code == 111 && listEntry.parameters[1] == 8,
    );
    if (checkHardModeIndex !== -1)
      leighTroopList[checkHardModeIndex] = {
        code: 111,
        indent: 1,
        parameters: [0, FALSE_SWITCH_ID, 0],
      };

    const leighRecruitIndex = leighTroopList.findIndex(
      (listEntry) => listEntry.code == 121 && listEntry.parameters[0] == 34,
    );
    if (leighRecruitIndex !== -1)
      leighTroopList[leighRecruitIndex] = {
        code: 355,
        indent: 1,
        parameters: [
          "$gameSelfSwitches.setValue([93, 3, 'D'], true); BattleManager.abort();",
        ],
      };
    $dataTroops[34].pages[0].list = leighTroopList;
  }
  clearLeighRecruitmentEvent();

  // make the recruit option hit self switch instead, and then end there.

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
