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
  // remove photo paper consumption in the telescope room
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
};

ClearExplicitDrops.clearAllEnemiesDrops = function () {
  for (const enemy of $dataEnemies) {
    if (enemy) enemy.dropItems = [];
  }
};
