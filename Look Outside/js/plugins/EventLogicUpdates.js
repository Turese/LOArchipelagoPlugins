/**
 * @target MZ
 * @name EventLogicUpdates
 * @plugindesc Clears item drops from the game
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var EventLogicUpdates = EventLogicUpdates || {};

EventLogicUpdates.buildConditions = function (
  selfSwitch,
  switch1,
  switch2,
  variable,
  variableValue,
) {
  let conditions = {
    actorId: 1,
    actorValid: false,
    itemId: 1,
    itemValid: false,
    selfSwitchCh: "A",
    selfSwitchValid: false,
    switch1Id: 1,
    switch1Valid: false,
    switch2Id: 1,
    switch2Valid: false,
    variableId: 1,
    variableValid: false,
    variableValue: 0,
  };
  if (selfSwitch) {
    conditions = {
      ...conditions,
      selfSwitchCh: selfSwitch,
      selfSwitchValid: true,
    };
  }
  if (switch1) {
    conditions = {
      ...conditions,
      switch1Id: switch1,
      switch1Valid: true,
    };
  }
  if (switch2) {
    conditions = {
      ...conditions,
      switch2Id: switch2,
      switch2Valid: true,
    };
  }
  if (variable && variableValue) {
    conditions = {
      ...conditions,
      variableId: variable,
      variableValue: variableValue,
      variableValid: true,
    };
  }
  return conditions;
};

const EMPTY_PAGE = {
  conditions: EventLogicUpdates.buildConditions(),
  directionFix: true,
  image: {
    characterIndex: 0,
    characterName: "",
    direction: 2,
    pattern: 0,
    tileId: 0,
  },
  list: [
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ],
  moveFrequency: 3,
  moveRoute: {
    list: [
      {
        code: 0,
        parameters: [],
      },
    ],
    repeat: true,
    skippable: false,
    wait: false,
  },
  moveSpeed: 3,
  moveType: 0,
  priorityType: 0,
  stepAnime: false,
  through: false,
  trigger: 0,
  walkAnime: true,
};

const SECRET_DOOR_LIST = [
  {
    code: 122,
    indent: 0,
    parameters: [1, 1, 0, 3, 7, 1, 0],
  },
  {
    code: 111,
    indent: 0,
    parameters: [1, 1, 0, 1, 0],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: [
      "There is a door here. You can barely make it out in the dark.",
    ],
  },
  {
    code: 102,
    indent: 1,
    parameters: [["Open it.", "Leave it."], 1, 0, 2, 0],
  },
  {
    code: 402,
    indent: 1,
    parameters: [0, "Open it."],
  },
  {
    code: 122,
    indent: 2,
    parameters: [2, 2, 0, 4, "chkKey();"],
  },
  {
    code: 111,
    indent: 2,
    parameters: [1, 2, 0, 5, 0],
  },
  {
    code: 101,
    indent: 3,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 3,
    parameters: ["As you put your hand on the handle, you feel your blood"],
  },
  {
    code: 401,
    indent: 3,
    parameters: ["freeze in your veins."],
  },
  {
    code: 401,
    indent: 3,
    parameters: ["Your every survival instinct screams at you not to open it."],
  },
  {
    code: 102,
    indent: 3,
    parameters: [["Leave it.", "Open it."], 1, 0, 2, 0],
  },
  {
    code: 402,
    indent: 3,
    parameters: [0, "Leave it."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 402,
    indent: 3,
    parameters: [1, "Open it."],
  },
  {
    code: 122,
    indent: 4,
    parameters: [160, 160, 3, 0, 2],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["You open the door."],
  },
  {
    code: 201,
    indent: 4,
    parameters: [0, 324, 11, 30, 0, 0],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 404,
    indent: 3,
    parameters: [],
  },
  {
    code: 0,
    indent: 3,
    parameters: [],
  },
  {
    code: 411,
    indent: 2,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [1, 2, 0, 0, 0],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["It won't open."],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["There are five dark stains on the door."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [1, 2, 0, 1, 0],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["It won't open."],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["There are four dark stains on the door."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [1, 2, 0, 2, 0],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["It won't open."],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["There are three dark stains on the door."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [1, 2, 0, 3, 0],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["It won't open."],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["There are two dark stains on the door."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [1, 2, 0, 4, 0],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["It won't open."],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["There is a dark stain on the door."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [0, 610, 1],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["One dark stain resembles the number 3."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [0, 611, 1],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["One dark stain resembles the number 2."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [0, 612, 1],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["One dark stain resembles the number 1."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [0, 613, 1],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["One dark stain resembles the letter G."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 111,
    indent: 3,
    parameters: [0, 614, 1],
  },
  {
    code: 101,
    indent: 4,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 4,
    parameters: ["One dark stain resembles the letter B."],
  },
  {
    code: 0,
    indent: 4,
    parameters: [],
  },
  {
    code: 412,
    indent: 3,
    parameters: [],
  },
  {
    code: 0,
    indent: 3,
    parameters: [],
  },
  {
    code: 412,
    indent: 2,
    parameters: [],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [1, "Leave it."],
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
    code: 412,
    indent: 0,
    parameters: [],
  },
  {
    code: 0,
    indent: 0,
    parameters: [],
  },
];
const RETURN_TICKLE_LIST = [
  {
    code: 111,
    indent: 0,
    parameters: [0, 672, 0],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["Return Tickle to the pipe?"],
  },
  {
    code: 102,
    indent: 1,
    parameters: [["Yes.", "No."], 1, 1, 2, 0],
  },
  {
    code: 402,
    indent: 1,
    parameters: [0, "Yes."],
  },
  {
    code: 121,
    indent: 2,
    parameters: [661, 661, 1],
  },
  {
    code: 121,
    indent: 2,
    parameters: [672, 672, 1],
  },
  {
    code: 122,
    indent: 2,
    parameters: [523, 523, 2, 0, 1],
  },
  {
    code: 313,
    indent: 2,
    parameters: [0, 1, 1, 164],
  },
  {
    code: 101,
    indent: 2,
    parameters: ["Portrait_Misc", 7, 0, 2, "Tickle"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["It's been good, buddy! See you again soon!"],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [1, "No."],
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
    code: 412,
    indent: 0,
    parameters: [],
  },
  {
    code: 123,
    indent: 0,
    parameters: ["A", 1],
  },
  {
    code: 0,
    indent: 0,
    parameters: [],
  },
];
const AWAKENED_SYBIL_DOOR_LIST = [
  {
    code: 101,
    indent: 0,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 0,
    parameters: ["Sybil has been awakened. Enter meat world?"],
  },
  {
    code: 102,
    indent: 0,
    parameters: [["Go to Sybil's apartment.", "Go to meat world."], 1, 0, 2, 0],
  },
  {
    code: 402,
    indent: 0,
    parameters: [0, "Go to Sybil's apartment."],
  },
  {
    code: 250,
    indent: 1,
    parameters: [
      {
        name: "DoorOpenCreaky",
        volume: 90,
        pitch: 100,
        pan: 0,
      },
    ],
  },
  {
    code: 230,
    indent: 1,
    parameters: [10],
  },
  {
    code: 205,
    indent: 1,
    parameters: [
      19,
      {
        list: [
          {
            code: 39,
            indent: null,
          },
          {
            code: 0,
          },
        ],
        repeat: false,
        skippable: false,
        wait: true,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 39,
        indent: null,
      },
    ],
  },
  {
    code: 205,
    indent: 1,
    parameters: [
      0,
      {
        list: [
          {
            code: 36,
            indent: null,
          },
          {
            code: 17,
            indent: null,
          },
          {
            code: 15,
            parameters: [5],
            indent: null,
          },
          {
            code: 18,
            indent: null,
          },
          {
            code: 15,
            parameters: [5],
            indent: null,
          },
          {
            code: 0,
          },
        ],
        repeat: false,
        skippable: false,
        wait: true,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 36,
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 17,
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 15,
        parameters: [5],
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 18,
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 15,
        parameters: [5],
        indent: null,
      },
    ],
  },
  {
    code: 201,
    indent: 1,
    parameters: [0, 364, 14, 17, 0, 0],
  },
  {
    code: 0,
    indent: 1,
    parameters: [],
  },
  {
    code: 402,
    indent: 0,
    parameters: [1, "Go to meat world."],
  },
  {
    code: 250,
    indent: 1,
    parameters: [
      {
        name: "DoorOpenCreaky",
        volume: 90,
        pitch: 100,
        pan: 0,
      },
    ],
  },
  {
    code: 230,
    indent: 1,
    parameters: [10],
  },
  {
    code: 205,
    indent: 1,
    parameters: [
      19,
      {
        list: [
          {
            code: 39,
            indent: null,
          },
          {
            code: 0,
          },
        ],
        repeat: false,
        skippable: false,
        wait: true,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 39,
        indent: null,
      },
    ],
  },
  {
    code: 205,
    indent: 1,
    parameters: [
      0,
      {
        list: [
          {
            code: 36,
            indent: null,
          },
          {
            code: 17,
            indent: null,
          },
          {
            code: 15,
            parameters: [5],
            indent: null,
          },
          {
            code: 18,
            indent: null,
          },
          {
            code: 15,
            parameters: [5],
            indent: null,
          },
          {
            code: 0,
          },
        ],
        repeat: false,
        skippable: false,
        wait: true,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 36,
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 17,
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 15,
        parameters: [5],
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 18,
        indent: null,
      },
    ],
  },
  {
    code: 505,
    indent: 1,
    parameters: [
      {
        code: 15,
        parameters: [5],
        indent: null,
      },
    ],
  },
  {
    code: 201,
    indent: 1,
    parameters: [0, 367, 25, 43, 0, 0],
  },
  {
    code: 117,
    indent: 1,
    parameters: [259],
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
    code: 0,
    indent: 0,
    parameters: [],
  },
];

EventLogicUpdates.initializeAPVariables = function () {
  // gotsupplies = true; prevents fungus guys from giving you supplies at the entrance to the lair
  sSw(493, true);

  // foughtwoundedman = true; allows players to enter vincents apartment right away
  sSw(94, true);

  // starting arms are 0
  window.Unarmed.setArms(3);

  // we use these for difficulty normalization
  sSw(TRUE_SWITCH_ID, true);
  sSw(FALSE_SWITCH_ID, false);

  // this self switch ensures stairwell door never allows early papineau
  $gameSelfSwitches.setValue([27, 8, "B"], true);
  $gameSelfSwitches.setValue([27, 7, "B"], true);

  // set number of freds to 10 here so player doesnt have to speak to faceless
  sVr(306, 10);

  // acts like the player already bought out the gamer's stock
  // prevents him from hassling the player when they enter the encounter with
  // his games already in hand
  sSw(142, true);
  sSw(143, true);
  sSw(144, true);
  sSw(145, true);

  // same with gun trader
  sSw(294, true);
  sSw(295, true);
  sSw(296, true);
  sSw(297, true);

  // we want rat baby/joel's quest to be finished so it doesn't modify his held item
  // for some reason, rat baby array is's initialized to len(41), so we'll do that too

  const interactionArray = Array(41).fill(0);
  interactionArray[4] = 4; // finished with joel's interactions

  sVr(397, interactionArray);

  sVr(898, 10); // choose violence - allows player to get true final

  // re-setup door encounters with slot data
  setupDoorEncounters();
  $gamePlayer.introFinished = true;

  LookOutsideAPClient.gameLoadedAPSetup();
};

EventLogicUpdates.applyIntroClears = function (lastLoadedMapId) {
  // clear out the starting video games from player's inventory
  function updateStartingDrops() {
    // filter out the explicit video game drops from the starting room
    // room 5 event 2
    if (lastLoadedMapId === 5) {
      const startingRoomEvent = $dataMap.events[2];
      if (startingRoomEvent) {
        const startingpage = startingRoomEvent.pages[0];
        const newList = startingpage.list.filter((listItem) => {
          if (listItem.code === ITEM_CODE)
            // remove the explicit drops of the 3 video games
            // the starting food and soap and toothpaste can stay
            return ![413, 417, 421].includes(listItem.parameters[0]);
          if (listItem.code === SET_VAR_CODE)
            return listItem.parameters[0] !== 41; // don't set video game count var=41 either
          return listItem.code !== 230; // remove the 60 frame waits for good measure
        });
        startingpage.list = newList;
        startingpage.list.push({
          code: 355,
          indent: 1,
          parameters: ["EventLogicUpdates.initializeAPVariables();"],
        });
      }
    }
  }
  updateStartingDrops();

  // this isnt really a drop but it goes here anyway. skips sybil's intro dialogue
  function updateStartingCutscene() {
    if (lastLoadedMapId === 5) {
      const introSkipScript = {
        code: 355,
        indent: 0,
        parameters: [
          "sSw(148, true); sSw(149, true); sVr(102, 1); sSw(103, 2); sSw(44, true); LookOutsideAPClient.startAPClient();",
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
};

// if an event has a basic item drop + get message structure
// we can do it easily here

const CASH_CODE = 125;
const ITEM_CODE = 126;
const WEAPON_CODE = 127;
const ARMOR_CODE = 128;
const SET_SWITCH_CODE = 121;
const SET_VAR_CODE = 122;
const SKILL_CODE = 318;
const MESSAGE_CODE = 401;

//codes:
//126 = item drop
//127 = weapon
//128 = armor
EventLogicUpdates.itemDropClear = function (originalList, code) {
  return originalList.filter((listItem) => listItem.code !== code);
};

EventLogicUpdates.itemDropReplaceScript = function (
  originalList,
  code,
  script,
  secondaryCondition,
) {
  for (let i = 0; i < originalList.length; i++) {
    const listItem = originalList[i];
    if (
      listItem.code == code &&
      (secondaryCondition ? secondaryCondition(listItem) : true)
    ) {
      originalList[i] = {
        code: 355,
        indent: originalList[i].indent,
        parameters: [script],
      };
    }
  }
};

EventLogicUpdates.deleteMessage = function (originalList, keyWord) {
  return originalList.filter(
    (listItem) =>
      !(
        listItem.code == MESSAGE_CODE &&
        listItem.parameters[0].includes(keyWord)
      ),
  );
};

EventLogicUpdates.getMessage = function (
  itemId,
  introword = "Find",
  suffix = ".",
) {
  return `${introword} ${LookOutsideAPClient.getItemName(itemId)}${suffix}`;
};

EventLogicUpdates.messageReplacement = function (
  originalList,
  keyWord,
  itemId,
  introword,
  suffix,
) {
  const newList = JsonEx.makeDeepCopy(originalList);

  newList.forEach((listItem) => {
    if (listItem.code == 401 && listItem.parameters[0].includes(keyWord)) {
      listItem.parameters[0] = EventLogicUpdates.getMessage(
        itemId,
        introword,
        suffix,
      );
    }
  });

  return newList;
};

EventLogicUpdates.doorEncounterPicker = function (ev) {
  DoorHelpers.setRemainingEncounterVars();
  ev.pages[0].conditions = EventLogicUpdates.buildConditions();
  ev.pages[0].list = DoorHelpers.buildEncounterPickerEventPage();
  ev.pages[0].directionFix = true;
};

EventLogicUpdates.doorCombatChecker = function (ev) {
  // 601 - the if condition if the player won the previous encounter
  const winEncounterIndex = ev.pages[1].list.findIndex(
    (listItem) => listItem.code == 601,
  );
  // this can run on dataMap multiple times, so we need to
  // ensure we don't add multiple calls
  const processVictory = ev.pages[1].list.find(
    (listItem) =>
      listItem.code == 355 &&
      listItem.parameters[0] == "DoorHelpers.processDoorVictory();",
  );
  if (winEncounterIndex !== -1 && !processVictory) {
    ev.pages[1].list.splice(winEncounterIndex + 1, 0, {
      code: 355,
      indent: ev.pages[1].list[winEncounterIndex].indent + 1,
      parameters: ["DoorHelpers.processDoorVictory();"],
    });
  }
};

EventLogicUpdates.fixWoundedManDoor = function (ev) {
  ev.pages[1].conditions = ev.pages[0].conditions;
  // set the page that lets you in to the bathroom unarmed on hardmode to always hit
};

// screw the elevator game, just let me go to 4
EventLogicUpdates.fixElevatorButtons = function (ev) {
  // at the start of the event, set the elevator game to be finished.
  // make sure you only add the elevator function set once
  ev.pages[1].list[0] = {
    code: 355,
    indent: 1,
    parameters: ["sVr(1, 0), sVr(817, 4)"],
  };
};

// update page 2 of the apt 21 key event to trigger grinning beast if you walk over it
EventLogicUpdates.leighRematch = function (ev) {
  ev.pages[1].list = [
    {
      code: 111,
      indent: 0,
      parameters: [0, 119, 1],
    },
    {
      code: 355, // Script command
      indent: 1,
      // 84: floor2slowdown (set on the room after youve escaped)
      // 81: floor2spook  // triggered by floor in first room; makes the door make a noise
      // 82: floor2spookspawn // triggered by floor in first room; spawns the grinning beast
      // 83: floor2done // despawns grinning beast
      // 1050: grinningbeastprime // triggered by floor in second room
      // 1105: leighpreventfight (if player is actively opening door)
      // reset sfx on grinning beast spawn
      // reset sfx for grinning beast door
      // reset animation for grabby hands
      // reset chase sequence for room 1 beast
      parameters: [
        "sSw(84, false), sSw(83, false); sSw(82, false); sSw(81, false); sSw(1050,false); sSw(1105, false); $gameSelfSwitches.setValue([8, 10, 'A'], false); $gameSelfSwitches.setValue([8, 4, 'A'], false); $gameSelfSwitches.setValue([8, 4, 'B'], false); $gameSelfSwitches.setValue([8, 46, 'A'], false); $gameSelfSwitches.setValue([8, 46, 'B'], false); $gameSelfSwitches.setValue([8, 14, 'B'], false); $gameSelfSwitches.setValue([8, 14, 'A'], false);",
      ],
    },
    {
      code: 201,
      indent: 1,
      parameters: [0, 8, 31, 8, 0, 2],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 412,
      indent: 0,
      parameters: [],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];

  ev.pages[1].trigger = 1;
};

EventLogicUpdates.clearLeighQuest = function (ev) {
  // clear martin's ring
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ARMOR_CODE,
  );
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    SKILL_CODE,
  ); // clear skill grants
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "Martin's Ring",
    "LEIGH_APARTMENT_READ_NOTE",
  );
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "much more dangerous",
    "LEIGH_APARTMENT_READ_NOTE",
  );
};

// make it so grasshopper doesnt leave after leighs quest
EventLogicUpdates.permaGrasshopper = function (ev) {
  if (ev.pages.length > 4) ev.pages.splice(3, 1);
};

// removes the switch setters that set 119 = false when walking east after fighting the beast
EventLogicUpdates.leighWillWait = function (ev) {
  ev.pages[0].list = ev.pages[0].list.filter(
    (listEntry) => listEntry.code !== SET_SWITCH_CODE,
  );
};

EventLogicUpdates.forceLeighToStay = function (ev) {
  ev.pages[2].conditions = EventLogicUpdates.buildConditions("D");
};

EventLogicUpdates.updateLyleEvent = function (ev) {
  // keep him there even when he's recruited by making the page condition impossible
  ev.pages[6].conditions = EventLogicUpdates.buildConditions("D");

  // clear out dark room key drop from killing him
  for (let i = 0; i <= 2; i++) {
    ev.pages[i].list = ev.pages[i].list.filter(
      (listItem) => listItem.code !== ITEM_CODE && listItem.code !== 401,
    );
  }
};

EventLogicUpdates.forceAsterToStay = function (ev) {
  // he cant leave until he is recruited because he's needed for offerings
  ev.pages[4].conditions = {
    ...ev.pages[4].conditions,
    ...{ selfSwitchCh: "D", selfSwitchValid: true },
  };
};

EventLogicUpdates.forceAudreyToStay = function (ev) {
  ev.pages[5].conditions = {
    // same as aster, she needs to be reachable at all times
    ...ev.pages[5].conditions,
    ...{ selfSwitchCh: "D", selfSwitchValid: true },
  };
};

EventLogicUpdates.updateAudreyEvents = function (ev) {
  // page that sets audrey events
  // also disabled on recruit
  if (ev.pages.length >= 2) {
    ev.pages.splice(1, 1);
  }
};

EventLogicUpdates.updateAudreyPose = function (ev) {
  // page that sets audrey pose when player gets close
  // also disabled on recruit
  if (ev.pages.length >= 2) {
    ev.pages.splice(1, 1);
  }
};

EventLogicUpdates.makeSpiderLeave = function (ev) {
  if (ev.pages.length < 2) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("A"),
    });
  }
};

EventLogicUpdates.forcePapineauToStay = function (ev) {
  if (ev.pages.length > 4) {
    ev.pages.splice(2, 1); // remove page that checks for recruited papineau
    // switch 783 (removePapineau) can be used instead
  }
};

EventLogicUpdates.forceInstantStumblingShadeSpawn = function (ev) {
  ev.pages[0].conditions = EventLogicUpdates.buildConditions();
};

EventLogicUpdates.updateShadeDefeatConditions = function (ev) {
  const eraseIndex = ev.pages[2].list.findIndex(
    (listEntry) => listEntry.code === 214,
  );
  if (eraseIndex !== -1) {
    ev.pages[2].list[eraseIndex] = {
      code: 355,
      indent: ev.pages[2].list[eraseIndex].indent,
      parameters: [
        `$gameSelfSwitches.setValue([${lastLoadedMapId}, ${ev.id}, 'D'], true);`,
      ],
    };
  }
  if (ev.pages.length < 5) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("D"),
    });
  }
};

EventLogicUpdates.updateCrawlingShadeDefeatConditions = function (ev) {
  ev.pages[0].list = EMPTY_PAGE.list;
  updateShadeDefeatConditions(ev);
};

EventLogicUpdates.updateJoelPages = function (ev) {
  ev.pages = ToothHelpers.JoelPages;
};

EventLogicUpdates.updateMadisonPages = function (ev) {
  ev.pages = ToothHelpers.MadisonPages;
};

EventLogicUpdates.updateDay5ClintPages = function (ev) {
  // day5 clint
  // he has less complicated logic since
  // his day 5 form is a different event than his day 2-4 form
  if (ev.pages.length == 5) {
    ev.pages.splice(3, 1); // clear page that checks 'killedClint'
    // todo: set his indoor spawn to depend on the day
  }
};

EventLogicUpdates.updateDay9JoelPages = function (ev) {
  if (ev.pages.length == 7) {
    // joel
    ev.pages.splice(5, 2); // clear last2 pages that check 'removeJoel' and 'recruitedJoel'
    ev.pages.splice(3, 1); // clear page that checks 'killedJoel'
  }
};

EventLogicUpdates.updateDay9BenPages = function (ev) {
  if (ev.pages.length == 3) {
    // mound of teeth and gums
    ev.pages.splice(1, 1); // clear page that checks 'killedBen'
  }
};

EventLogicUpdates.updateDay9MadisonPages = function (ev) {
  if (ev.pages.length == 5) {
    // madison
    ev.pages.splice(3, 1); // clear page that checks 'killedMadison'
  }
};

EventLogicUpdates.updateDay9ClintPages = function (ev) {
  if (ev.pages.length == 5) {
    // clint
    ev.pages.splice(3, 1); // clear page that checks 'killedClint'
  }
};

EventLogicUpdates.unblockEugeneBookcase = function (ev) {
  // don't block bookcase when eugene is posessed by nestor

  // remove page 2 of bookcase event (room 332, event 3)

  if (ev.pages.length > 1) {
    ev.pages.splice(1, 1);
  }
};

// removes event page with Lyle blocking the door after Sam opens his eyes while kissing, which makes it gay
// also lets player go in when lyle is developing the photo
EventLogicUpdates.removeLyleDoorBlocker = function (ev) {
  if (ev.pages.length > 2) {
    ev.pages.splice(2, 2);
  }
};

// replace the event message for getting screamatorium from the shelf with the actual drop
EventLogicUpdates.clearScreamatoriumEvent = function (ev) {
  // filter out the set var that sets video game count (var 41)
  let filteredList = ev.pages[0].list.filter(
    (listItem) =>
      !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 41),
  );
  filteredList = EventLogicUpdates.itemDropClear(filteredList, ITEM_CODE);

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
};

EventLogicUpdates.clearWoundedManKnifeEvent = function (ev) {
  // dont add knife to inventory
  const filteredList = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    WEAPON_CODE,
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
      listItem.parameters[0].contains("Find a \\C[03]{Kitchen Knife}\\C[0]."),
  );

  if (confirmationListItem)
    confirmationListItem.parameters[0] =
      confirmationListItem.parameters[0] = `Find ${LookOutsideAPClient.getItemName("APT_36_BATHROOM_WOUNDED_NEIGHBOR_KNIFE")}\\C[0].`;
};

EventLogicUpdates.clearTelescopeEvent = function (ev) {
  const darkTelescopeRoomPage = ev.pages[0];

  // remove the explicit deletion of void disc from inventory
  const filteredList = darkTelescopeRoomPage.list.filter(
    (listItem) => listItem.code !== ITEM_CODE || listItem.parameters[0] !== 331, // remove the explicit removal of void disc
  );

  const negativeDiscGrantEventIndex = filteredList.findIndex(
    (listItem) => listItem.code === ITEM_CODE,
  );
  // instead of grant item, set custom check switch
  if (negativeDiscGrantEventIndex !== -1) {
    filteredList[negativeDiscGrantEventIndex] = {
      code: SET_SWITCH_CODE,
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
      listItem.code === 401 && listItem.parameters[0].contains("Negative Disc"),
  );

  if (itemEarnedDisplay)
    itemEarnedDisplay.parameters[0] = `Get ${LookOutsideAPClient.getItemName("APT_31_TELESCOPE_DISC_EXPOSURE")}.`;

  // gray out option after the check is finished
  // only one choice block in the event so i can check for just 102
  const choiceListItem = filteredList.find((listItem) => listItem.code === 102);

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
};

EventLogicUpdates.clearGuineaPigChairEvent = function (ev) {
  // panopticon / chair event
  // dont take or give back guinea pig
  ev.pages.forEach(
    (page) =>
      (page.list = EventLogicUpdates.itemDropClear(page.list, ITEM_CODE)),
  );
};

EventLogicUpdates.clearSecurityTapeEvent = function (ev) {
  // vhs event

  // dont take players tape when recording
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );

  // on page 0, dont allow player to record unless it's the correct feed

  ev.pages[0].list.forEach((listItem) => {
    // the game prompts the player twice
    // since they can also record over a cctv
    if (listItem.code === 102 && listItem.parameters[0][0].includes("Yes."))
      listItem.parameters[0][0] = `<<[!v[158]=8]>>Yes.`;
  });

  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    ITEM_CODE,
  );
  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "CCTV Recording",
    "SECURITY_CORRECT_RECORDING",
    "Get",
  );

  // change the self switch b set to c and disable the event
  const selfSwitchIndex = ev.pages[2].list.findIndex(
    (listItem) => listItem.code == 123,
  );

  if (selfSwitchIndex !== -1) {
    ev.pages[2].list[selfSwitchIndex] = {
      code: 355,
      indent: ev.pages[2].list[selfSwitchIndex].indent,
      parameters: ['$gameSelfSwitches.setValue([78, 3, "C"], true);'],
    };
  }

  if (ev.pages.length < 4) {
    ev.pages.push({
      ...ev.pages[2],
      list: EMPTY_PAGE.list,
      conditions: EventLogicUpdates.buildConditions("C"),
    });
  }
};

EventLogicUpdates.clearProjectorEvent = function (ev) {
  // page 1 is projector head down / turned off
  let projectorList = ev.pages[1].list;

  // replace the exposed paper grant with switch set
  const getPhotoPaperIndex = projectorList.findIndex(
    (listItem) => listItem.code == ITEM_CODE && listItem.parameters[0] == 339,
  );
  if (getPhotoPaperIndex !== -1) {
    projectorList.splice(getPhotoPaperIndex, 1, {
      code: 355,
      indent: projectorList[getPhotoPaperIndex].indent,
      parameters: [`sSw(${APT_37_PROJECTOR_ROOM_PHOTO_SWITCH}, true);`],
    });
  }
  // clear out the part where it takes your photo paper
  projectorList = EventLogicUpdates.itemDropClear(projectorList, ITEM_CODE);

  // make sure we dont update what's on the photograph when doing this
  projectorList = projectorList.filter(
    (listItem) =>
      !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 245),
  );

  // the first instance should be when player placed photo paper
  projectorList.find(
    (listItem) =>
      listItem.code === 102 &&
      listItem.parameters[0][0].includes("Switch it on."),
  ).parameters[0][0] = `<<[!v[256]=12]>>Switch it on.`;

  //v[256] = 12 means the projector socket has the negative disc
  projectorList = EventLogicUpdates.messageReplacement(
    projectorList,
    "Exposed Paper",
    "APT_37_PROJECTOR_ROOM_PHOTO",
    "Get",
  );
  ev.pages[1].list = projectorList;
};

EventLogicUpdates.clearF3HallwayPlanterEvent = function (ev) {
  // the event usually disables itself by setting
  // self switch A when you do any interaction. I'll change it to setting B when
  // you get the drop, so you dont miss out
  ev.pages[0].list.find(
    (listItem) => listItem.code === 111, // if condition at start
  ).parameters[1] = "B";

  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "Apartment 33 Key",
    "F3_PLANTER_KEY",
  );

  // change the item that sets the event self switch to A
  // this works because the success case is the very first one in the list
  // but is kind of hacky
  ev.pages[0].list.find((listItem) => listItem.code === 123).parameters[0] =
    "B";

  // filter out explicit apartment 33 key drop
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
};

EventLogicUpdates.clearF3HallwayVendingMachineEvent = function (ev) {
  ev.pages[1].list = ShopHelpers.getF3VendingMachineList();
};

EventLogicUpdates.clearCoffeeMachineEvent = function (ev) {
  if (ev.pages.length < 2) {
    const coffeeGrantIndex = ev.pages[0].list.findIndex(
      (listItem) => listItem.code == ITEM_CODE && listItem.parameters[0] == 41,
    );
    if (coffeeGrantIndex) {
      ev.pages[0].list.splice(
        coffeeGrantIndex,
        1,
        ...ShopHelpers.getCoffeeMachineMessage(),
      );
    }

    // adds new noninteractable page for when player
    // has already bought coffee
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("A"),
      image: ev.pages[0].image,
    });
  }
};

EventLogicUpdates.clearElevatorFreakEvent = function (ev) {
  // the elevator access switch is also used to tell whether the freak is dead; lets change it to a self switch
  victorySwitchIdx = ev.pages[0].list.findIndex(
    (listItem) => listItem.code == SET_SWITCH_CODE,
  );
  if (victorySwitchIdx !== -1) {
    ev.pages[0].list[victorySwitchIdx] = {
      code: 355,
      indent: 0,
      parameters: ["$gameSelfSwitches.setValue([74, 3, 'A'], true)"],
    };
    ev.pages[1].conditions = EventLogicUpdates.buildConditions("A");
  }
  // also clear out the power outage effect; player should trigger this manually
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    SET_VAR_CODE,
  );
};

EventLogicUpdates.clearRatKingCrown = function (ev) {
  // clear out rusty crown drop
  ev.pages[2].list = ev.pages[2].list.filter(
    (pageItem) => pageItem.code !== ARMOR_CODE,
  );

  // change message for both bow and non bow cases

  const rustyCrownAnnouncement = ev.pages[2].list.find(
    (listItem) =>
      listItem.code === 401 && listItem.parameters[0].contains("Rusty Crown"),
  );
  if (rustyCrownAnnouncement)
    rustyCrownAnnouncement.parameters[0] = `You receive ${LookOutsideAPClient.getItemName("F1_RAT_KING_COMBAT_VICTORY")}.`;

  const crownDustAnnouncement = ev.pages[2].list.find(
    (listItem) =>
      listItem.code === 401 && listItem.parameters[0].contains("turns to dust"),
  );
  if (crownDustAnnouncement)
    crownDustAnnouncement.parameters[0] = `The Rat King's crown turns to ${LookOutsideAPClient.getItemName("F1_RAT_KING_COMBAT_VICTORY")} in your hands.`;
};

EventLogicUpdates.clearAntoinesKey = function (ev) {
  // only one of these pages may actually be hit but im clearing both jic
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    ITEM_CODE,
  );
  ev.pages[0].list ==
    EventLogicUpdates.deleteMessage(ev.pages[0].list, "Antoine");
  ev.pages[1].list ==
    EventLogicUpdates.deleteMessage(ev.pages[1].list, "Antoine");
};

EventLogicUpdates.clearClydesKey = function (ev) {
  // only one of these pages may actually be hit but im clearing both jic
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    ITEM_CODE,
  );
  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    ITEM_CODE,
  );

  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    MESSAGE_CODE,
  );
  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    MESSAGE_CODE,
  );
};

EventLogicUpdates.clearJennifersKey = function (ev) {
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    ITEM_CODE,
  );
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    MESSAGE_CODE,
  );
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    MESSAGE_CODE,
  );
};

EventLogicUpdates.clearAugustesKey = function (ev) {
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    ITEM_CODE,
  );
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    MESSAGE_CODE,
  );
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    MESSAGE_CODE,
  );
};

EventLogicUpdates.clearGlitchElixirDrops = function (ev) {
  const filteredList = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );

  const messageIndex = filteredList.findIndex(
    (listItem) =>
      listItem.code === 401 && listItem.parameters[0].contains("Elixir"),
  );
  if (messageIndex !== -1) {
    filteredList[messageIndex].parameters[0] =
      `You ha v e rec ei v ed ${LookOutsideAPClient.getItemName("GLITCH_W_GLITCH_ELIXIR")}.`;
  }
  ev.pages[0].list = filteredList;
};

EventLogicUpdates.clearAmbroseDrops = function (ev) {
  let filteredList = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  ); // ambrose parts
  filteredList = EventLogicUpdates.itemDropClear(filteredList, ARMOR_CODE); // ambroses pipe

  const messageIndex = filteredList.findIndex(
    (listItem) =>
      listItem.code === 401 &&
      listItem.parameters[0].contains("AAAAAAAAAAAAAAAAAAAAAAAAAMBROS"),
  );
  if (messageIndex !== -1) {
    filteredList[messageIndex].parameters[0] =
      `You \C[5]fi\C[20]nd ${LookOutsideAPClient.getItemName("GLITCH_SW_AMBROSE")}.`;
  }
  ev.pages[0].list = filteredList;
};

// removes both loose manuscript drop and the message telling player they got it
EventLogicUpdates.clearTypewritherDrop = function (ev) {
  // item drops on first 2 pages
  for (let i = 0; i <= 1; i++) {
    ev.pages[i].list = ev.pages[i].list.filter(
      (listItem) => ![ITEM_CODE, 101, 401].includes(listItem.code),
    );
  }
};

// instead of setting and checking for variable 231, typewriter sets and checks self state A
EventLogicUpdates.clearManuscriptCompletion = function (ev) {
  // remove where it sets the manuscriptfull switch
  const completeManuscriptIndex = ev.pages[0].list.findIndex(
    (listItem) => listItem.code == SET_SWITCH_CODE,
  );
  if (completeManuscriptIndex !== -1) {
    ev.pages[0].list[completeManuscriptIndex] = {
      code: 355,
      indent: ev.pages[0].list[completeManuscriptIndex].indent,
      parameters: ["$gameSelfSwitches.setValue([118, 5, 'A'], true)"],
    };
  }

  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "You add the sheet to the incomplete manuscript.",
    "APT_27_COMPLETE_MANUSCRIPT",
    "This must be Jeanne's",
  );

  ev.pages[1].conditions = EventLogicUpdates.buildConditions("A");
};

EventLogicUpdates.clearCribDrop = function (ev) {
  // find where it sets the switch ratChasePrime
  const ratChaseTriggerIndex = ev.pages[0].list.findIndex(
    (listItem) => listItem.code == SET_SWITCH_CODE,
  );

  if (ratChaseTriggerIndex !== -1) {
    ev.pages[0].list.splice(
      ratChaseTriggerIndex,
      1,
      ...[
        {
          code: 355,
          indent: 1,
          parameters: ["$gameSelfSwitches.setValue([101, 5, 'A'], true);"],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: [
            `Find ${LookOutsideAPClient.getItemName("RAT_APT_RAT_BABY_THING")}.`,
          ],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 2, ""],
        },
      ],
    );
  }

  ev.pages[2].conditions = EventLogicUpdates.buildConditions("A");
};

EventLogicUpdates.clearJeanneLaundry = function (ev) {
  // dont add laundry to inventory
  let filteredList = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  filteredList = EventLogicUpdates.messageReplacement(
    filteredList,
    "Jeanne's clothes",
    "LAUNDRY_JEANNES_LAUNDRY",
    "This must be Jeanne's",
    ". Take it?",
  );

  ev.pages[0].list = filteredList;
};

// all the basement key drops
// only check if player already has basement key
// so we need them to check a custom switch instead
EventLogicUpdates.fixBasementKeyConditions = function (ev) {
  ev.pages[1].conditions = EventLogicUpdates.buildConditions(
    null,
    LL_BASEMENT_KEY_SWITCH,
  );
};

EventLogicUpdates.clearLandlordCache = function (ev) {
  // remove dollar coin item drop

  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "Dollar Coin",
    "LL_DINING_SECRET_CACHE",
  );
};

EventLogicUpdates.clearLandlordDigSpot = function (ev) {
  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    ITEM_CODE,
  );
  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "Ammo Crate",
    "LL_BATTLEFIELD_DIG_SPOT",
    "You found",
  );
};

EventLogicUpdates.clearErnestCheeseStash = function (ev) {
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "Cheese",
    "ERNEST_CHEESE",
  );
};

EventLogicUpdates.clearRoachQuestPrize = function (ev) {
  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    ARMOR_CODE,
  );

  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "Official Sash",
    "APT_33_ROACH_QUEST",
  );

  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "Papier",
    "APT_33_ROACH_QUEST",
  );
};

EventLogicUpdates.clearSadipedePrize = function (ev) {
  ev.pages[3].list = EventLogicUpdates.itemDropClear(
    ev.pages[3].list,
    ITEM_CODE,
  );

  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "is now following you around",
    "F4_SADIPEDE_COMBAT_LOSS",
  );
};

EventLogicUpdates.updateDarkRoomPhotoDevelopmentEvent = function (ev) {
  // add a new "finished" state
  if (ev.pages.length < 2) {
    ev.pages.push({
      ...EMPTY_PAGE,
      image: ev.pages[0].image,
      conditions: EventLogicUpdates.buildConditions("A"),
    });
  }

  // set switch to true when getting photograph successfully
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[0].list,
    ITEM_CODE,
    "$gameSelfSwitches.setValue([112, 13, 'A'], true)",
    (listItem) => listItem.parameters[0] == 340,
  );

  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "Photograph",
    "APT_21_DARK_ROOM_PHOTO",
    "Get",
  );
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
};

EventLogicUpdates.updateDarkRoomKey = function (ev) {
  // the key in the darkroom vanishes when lyle is recruited
  if (ev.id == 14 && ev.pages.length >= 2) ev.pages.splice(2, 1);
};

EventLogicUpdates.updateDarkRoomPhotoPaper = function (ev) {
  // turn the photo paper into a regular drop
  ev.pages.push({
    ...EMPTY_PAGE,
    conditions: EventLogicUpdates.buildConditions("A"),
  });
};

EventLogicUpdates.clearRaftaLetter = function (ev) {
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    ITEM_CODE,
  );
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "Love Letter",
    "F1_LETTER_FROM_RAFTA",
  );
};

EventLogicUpdates.clearOozeMachine = function (ev) {
  // blank conditions; remove danger req
  ev.pages[0].conditions = EventLogicUpdates.buildConditions();

  ev.pages[0].list = ShopHelpers.getOozeMachineList();
};

EventLogicUpdates.clearFaceTakerDrops = function (ev) {
  ev.pages.forEach((page) => {
    // canvas carry bag and torn off face
    page.list = EventLogicUpdates.itemDropClear(page.list, ITEM_CODE);
    page.list = EventLogicUpdates.itemDropClear(page.list, MESSAGE_CODE);
  });
};

EventLogicUpdates.clearToxicFredDrop = function (ev) {
  // toxic fred/paintlings/hat stained key drops
  ev.pages.forEach((page) => {
    page.list = EventLogicUpdates.itemDropClear(page.list, ITEM_CODE);
    // some drops have different capitalization
    page.list = EventLogicUpdates.deleteMessage(page.list, "Stained key");
  });
};

EventLogicUpdates.clearTrueFredStateReset = function (ev) {
  // true fred; his state gets reset when you kill him
  ev.pages.forEach((page) => {
    // dont let his state get set to 99
    page.list = page.list.filter(
      (listItem) =>
        !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 300),
    );
  });
};

EventLogicUpdates.clearKOTDDrop = function (ev) {
  // clear all-seeing-8-ball drop
  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    ITEM_CODE,
  );
  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "All-Seeing",
    "GF_KOTD_COMBAT_VICTORY",
    "Get",
  );
};

EventLogicUpdates.clearPhilDelusionDrops = function (ev, index) {
  ev.pages[index].list = EventLogicUpdates.itemDropClear(
    ev.pages[index].list,
    ITEM_CODE,
  );
  ev.pages[index].list = EventLogicUpdates.messageReplacement(
    ev.pages[index].list,
    "Phillippe's Remains",
    "FUNGUS_PHILLIPPE_COMBAT_VICTORY",
    "Receive",
  );
};

EventLogicUpdates.clearPhilDelusionDropsOutside = function (ev) {
  EventLogicUpdates.clearPhilDelusionDrops(ev, 1);
};

EventLogicUpdates.clearPhilDelusionDropsSporeMother = function (ev) {
  EventLogicUpdates.clearPhilDelusionDrops(ev, 0);
};

// allows fungus people to be rescued after spore mother is killed
EventLogicUpdates.rescueFightsAfterSporeMother = function (ev) {
  // triggers for phillippe/rodrigue rescue fight
  if (ev.pages.length > 1) ev.pages.splice(1, 1);
};

// shows the rescuable fungus people even after the spore mother is killed
EventLogicUpdates.trappedVisualsAfterSporeMother = function (ev) {
  if (ev.pages.length > 2) ev.pages.splice(2, 1);
};

EventLogicUpdates.updateLaughingMoldEvent = function (ev) {
  // make laughing mold nonmissable
  const conditions = ev.pages[8].conditions;
  ev.pages[8] = {
    ...ev.pages[5],
    conditions,
  };
  if (ev.pages.length < 11) {
    // push finished states to the front
    ev.pages.push(ev.pages[6]);
    ev.pages.push(ev.pages[7]);
  }
};

EventLogicUpdates.fixRoxieRoomItemDoubleEntry = function (ev) {
  // two of the items in roxie's room in the sewers have two separate pages
  // since theyre different items on hard mode
  // we will delete the second entries
  if (ev.pages.length > 2) {
    ev.pages.splice(1, 1);
  }
};

EventLogicUpdates.clearGrateLever = function (ev) {
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    111, // = set switch
  );
};

EventLogicUpdates.returnTickle = function (ev) {
  ev.pages[1].list = RETURN_TICKLE_LIST;
  ev.pages[1].conditions = EventLogicUpdates.buildConditions("A", 661);
  ev.pages[1].trigger = ev.pages[0].trigger;
};

EventLogicUpdates.updateAudreyLootDeadPage = function (
  page,
  locationId,
  script,
) {
  page.trigger = 0;
  page.list = [
    {
      code: 111,
      indent: 0,
      parameters: [4, 22, 0],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 13, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["Audrey looks through the corpse\\..\\..\\.."],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 13, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        `She has found ${LookOutsideAPClient.getItemName(locationId)}.`,
      ],
    },
    script
      ? {
          code: 355,
          indent: 1,
          parameters: [script],
        }
      : {
          code: 123,
          indent: 1,
          parameters: ["D", 0],
        },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 412,
      indent: 0,
      parameters: [],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];
};

EventLogicUpdates.clearAudreyHellrideDrop = function (ev) {
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[3].list,
    ARMOR_CODE,
    `$gameSelfSwitches.setValue([86, 14, 'C'], true)`,
  );
  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "Demon Plating",
    "B_CAR_HELLRIDE_AUDREY_LOOT",
    "She has found",
  );
  const deadPage = ev.pages[4];
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "B_CAR_HELLRIDE_AUDREY_LOOT",
    `$gameSelfSwitches.setValue([86, 14, 'C'], true)`,
  );
  if (ev.pages.length < 6) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("C"),
      image: deadPage.image,
    });
  }
};

EventLogicUpdates.clearAudreyCopCarDrop = function (ev) {
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[3].list,
    ARMOR_CODE,
    `$gameSelfSwitches.setValue([86, 58, 'C'], true)`,
  );
  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "Chrome Finish",
    "B_CAR_COP_CAR_AUDREY_LOOT",
    "She has found",
  );
  const deadPage = ev.pages[5];
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "B_CAR_COP_CAR_AUDREY_LOOT",
    `$gameSelfSwitches.setValue([86, 58, 'C'], true)`,
  );
  if (ev.pages.length < 7) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("C"),
      image: deadPage.image,
    });
  }
};

EventLogicUpdates.clearAudreyTankDrop = function (ev) {
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[2].list,
    ARMOR_CODE,
    `$gameSelfSwitches.setValue([233, 11, 'C'], true)`,
  );
  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "Cope Cage",
    "LL_MEMORIAL_TANK_AUDREY_LOOT",
    "She has found",
  );
  const deadPage = ev.pages[4];
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "LL_MEMORIAL_TANK_AUDREY_LOOT",
    `$gameSelfSwitches.setValue([233, 11, 'C'], true)`,
  );
  if (ev.pages.length < 6) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("C"),
      image: deadPage.image,
    });
  }
};

EventLogicUpdates.clearAudreyAPCDrop = function (ev) {
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[3].list,
    ARMOR_CODE,
    `sSw(${LL_BATTLEFIELD_APC_AUDREY_LOOT_SWITCH}, true)`,
  );
  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "Tank Tracks",
    "LL_BATTLEFIELD_APC_AUDREY_LOOT",
    "She has found",
  );

  const deadPage = ev.pages[5];
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "LL_BATTLEFIELD_APC_AUDREY_LOOT",
    `sSw(${LL_BATTLEFIELD_APC_AUDREY_LOOT_SWITCH}, true);`,
  );
  if (ev.pages.length < 7) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions(
        undefined,
        LL_BATTLEFIELD_APC_AUDREY_LOOT_SWITCH,
      ),
      image: deadPage.image,
    });
  }
};

// this ones weird because the battle trigger and the dead body are 2 different events
EventLogicUpdates.clearAudreyTrenchDiggerBattleDrop = function (ev) {
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[1].list,
    ARMOR_CODE,
    `$gameSelfSwitches.setValue([130, 2, 'D'], true);`,
  );
  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Tank Guns",
    "LL_TRENCH_DIGGER_AUDREY_LOOT",
    "She has found",
  );
};

EventLogicUpdates.clearAudreyTrenchDiggerOverworldDrop = function (ev) {
  const deadPage = ev.pages[6];
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "LL_TRENCH_DIGGER_AUDREY_LOOT",
  );
  if (ev.pages.length < 8) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("D"),
      image: deadPage.image,
    });
  }
};

EventLogicUpdates.clearAudreyShrimpKnightDrop = function (ev) {
  for (let i = 0; i < 2; i++) {
    EventLogicUpdates.itemDropReplaceScript(
      ev.pages[i].list,
      ARMOR_CODE,
      "$gameSelfSwitches.setValue([152, 6, 'D'], true)",
    );
    ev.pages[i].list = EventLogicUpdates.messageReplacement(
      ev.pages[i].list,
      "Jousting Lance",
      "APT_28_SHRIMP_KNIGHT_AUDREY_LOOT",
      "She has found",
    );
    const deadPage = ev.pages[3];
    EventLogicUpdates.updateAudreyLootDeadPage(
      deadPage,
      "APT_28_SHRIMP_KNIGHT_AUDREY_LOOT",
    );
    if (ev.pages.length < 5) {
      ev.pages.push({
        ...EMPTY_PAGE,
        conditions: EventLogicUpdates.buildConditions("D"),
        image: deadPage.image,
      });
    }
  }
};

EventLogicUpdates.clearAudreySporeGuardianDrop = function (ev) {
  for (let i = 0; i < 2; i++) {
    EventLogicUpdates.itemDropReplaceScript(
      ev.pages[i].list,
      ARMOR_CODE,
      "$gameSelfSwitches.setValue([127, 3, 'D'], true)",
    );
    ev.pages[i].list = EventLogicUpdates.messageReplacement(
      ev.pages[i].list,
      "Fungus Fibers",
      "FUNGUS_SPORE_GUARDIAN_AUDREY_LOOT",
      "She has found",
    );
  }
  // theres no dead image for spore guardian, so we use regular image
  const prevPage = ev.pages[2];
  const deadPage = ev.pages[3];
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "FUNGUS_SPORE_GUARDIAN_AUDREY_LOOT",
    `sSw(${FUNGUS_SPORE_GUARDIAN_AUDREY_LOOT_SWITCH}, true);`,
  );
  deadPage.image = prevPage.image;
  // override the page that checks if spore mother is dead because we want to remove that condition anyway
  ev.pages[4] = {
    ...EMPTY_PAGE,
    conditions: EventLogicUpdates.buildConditions(
      undefined,
      FUNGUS_SPORE_GUARDIAN_AUDREY_LOOT_SWITCH,
    ),
    image: deadPage.image,
  };
  deadPage.image = prevPage.image;
};

EventLogicUpdates.clearAudreySwatBattleDrop = function (ev) {
  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[1].list,
    ARMOR_CODE,
    `$gameSelfSwitches.setValue([86, 42, 'D'], true);`,
  );
  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Chobham Armor",
    "B_CAR_SWAT_VAN_AUDREY_LOOT",
    "She has found",
  );
};

EventLogicUpdates.clearAudreySwatOverworldDrop = function (ev) {
  const deadPage = ev.pages[3];
  if (ev.pages.length < 5) {
    ev.pages.push({
      ...EMPTY_PAGE,
      conditions: EventLogicUpdates.buildConditions("D"),
      image: deadPage.image,
    });
  }
  EventLogicUpdates.updateAudreyLootDeadPage(
    deadPage,
    "B_CAR_SWAT_VAN_AUDREY_LOOT",
  );
};

EventLogicUpdates.clearAudreyTaxidermyDrop = function (ev) {
  for (let i = 1; i < 3; i++) {
    EventLogicUpdates.itemDropReplaceScript(
      ev.pages[i].list,
      ARMOR_CODE,
      "$gameSelfSwitches.setValue([270, 6, 'D'], true)",
    );
    ev.pages[i].list = EventLogicUpdates.messageReplacement(
      ev.pages[i].list,
      "Leather Skin",
      "APT_30_TAXIDERMY_AUDREY_LOOT",
      "She has found",
    );
    const deadPage = ev.pages[4];
    EventLogicUpdates.updateAudreyLootDeadPage(
      deadPage,
      "APT_30_TAXIDERMY_AUDREY_LOOT",
    );
    if (ev.pages.length < 6) {
      ev.pages.push({
        ...EMPTY_PAGE,
        conditions: EventLogicUpdates.buildConditions("D"),
        image: deadPage.image,
      });
    }
  }
};

EventLogicUpdates.clearBlackoutIrisKey = function (ev) {
  ev.pages[3].list = EventLogicUpdates.itemDropClear(
    ev.pages[3].list,
    ITEM_CODE,
  );
  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "Iris Key",
    "B_CAR_HOLE_IRIS_KEY",
    "You find",
  );
};

EventLogicUpdates.clearRatFreakGift = function (ev) {
  ev.pages[3].list = EventLogicUpdates.itemDropClear(
    ev.pages[3].list,
    WEAPON_CODE,
  );
  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "Rat Claws",
    "APT_11_RAT_FREAK_GIFT",
    "You receive",
  );
};

EventLogicUpdates.clearBurritoRatGift = function (ev) {
  ev.pages[3].list = EventLogicUpdates.itemDropClear(
    ev.pages[3].list,
    ITEM_CODE,
  );
  ev.pages[3].list = EventLogicUpdates.messageReplacement(
    ev.pages[3].list,
    "Burrito",
    "RAT_LAIR_GIANT_RAT_BURRITO",
    "Receive",
  );
};

EventLogicUpdates.clearHellenQuestPrizes = function (ev) {
  ev.pages[2].list = EventLogicUpdates.itemDropClear(
    ev.pages[2].list,
    WEAPON_CODE,
  );
  ev.pages[2].list = EventLogicUpdates.messageReplacement(
    ev.pages[2].list,
    "Hellen's Shears",
    "APT_18_HELLEN_QUEST_SHEARS",
    "Receive",
  );
};

EventLogicUpdates.clearSecretDoorLockout = function (ev) {
  ev.pages[2].list = SECRET_DOOR_LIST;
  if (ev.pages.length > 5) {
    ev.pages.splice(3, 1);
    // remove page that says there was never a door
  }
};
EventLogicUpdates.clearSybilRedKey = function (ev) {
  if (lastLoadedMapId === 367 && ev.id === 1) {
    ev.pages[1].list = EventLogicUpdates.itemDropClear(
      ev.pages[1].list,
      ITEM_CODE,
    );
    ev.pages[1].list = EventLogicUpdates.messageReplacement(
      ev.pages[1].list,
      "Small Red Key",
      "MEAT_SYBIL_COMBAT_VICTORY",
    );
  }
};

// allow eugene to live after nestor is killed if killable shopkeepers is false
EventLogicUpdates.clearEugeneDeath = function (ev) {
  if (ev.pages.length < 9) {
    // make the deadpage need both nestor AND eugene to be dead
    const killedEugene = 168;
    ev.pages[7].conditions = EventLogicUpdates.buildConditions(
      undefined,
      killedEugene,
      449,
      434,
      5,
    );

    // add a page where only nestor is dead
    ev.pages.splice(7, 0, {
      ...ev.pages[1],
      conditions: EventLogicUpdates.buildConditions(
        undefined,
        449,
        undefined,
        undefined,
        434,
        5,
      ),
    });

    ev.pages.forEach((page) => {
      EventLogicUpdates.itemDropReplaceScript(
        page.list,
        SET_SWITCH_CODE,
        `sSw(${killedEugene},gSw(${CAN_KILL_SHOPKEEPERS_SWITCH}));`,
        (listItem) => listItem.parameters[0] == killedEugene,
      );
    });
  }
};

// dont increase game count when you buy it
// set the name variable to the custom apitem name
EventLogicUpdates.clearReptileFootball = function (ev) {
  ev.pages[0].list = ev.pages[0].list.filter(
    (listItem) =>
      !(listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 41),
  );

  EventLogicUpdates.itemDropReplaceScript(
    ev.pages[0].list,
    SET_VAR_CODE,
    `sVr(486,"${LookOutsideAPClient.getItemName(
      "APT_24_REPTILE_FOOTBALL",
      true,
      false,
      true,
    )}");`,
    (listItem) => listItem.parameters[0] == 486,
  );

  ev.pages[0].list.find(
    (listItem) =>
      listItem.code == SET_VAR_CODE && listItem.parameters[0] == 480,
  ).parameters[4] = "!";
};

EventLogicUpdates.clearMuttPages = function (
  ev,
  deleteCode,
  identifyString,
  getString,
  itemId,
  altIdentifyString,
  startIndex = 0, // we need this because the trophy has a leading empty page /sob
) {
  for (let i = startIndex; i <= startIndex + 1; i++) {
    ev.pages[i].list = EventLogicUpdates.itemDropClear(
      ev.pages[i].list,
      deleteCode,
    );

    const descriptionIndex = ev.pages[i].list;
    ev.pages[i].list = EventLogicUpdates.messageReplacement(
      ev.pages[i].list,
      identifyString,
      itemId,
      "A",
    );

    // in some cases, Mutt uses a different identifying string
    if (altIdentifyString) {
      ev.pages[i].list = EventLogicUpdates.messageReplacement(
        ev.pages[i].list,
        altIdentifyString,
        itemId,
        "A",
      );
    }

    ev.pages[i].list = EventLogicUpdates.messageReplacement(
      ev.pages[i].list,
      getString,
      itemId,
      "Get",
    );

    // this is a cheap way of clearing out all lines of dialogue besides what we use for purchasing
    // and what we use to identify the item

    const itemName = LookOutsideAPClient.getItemName(itemId);

    //todo: find a better way
    ev.pages[i].list = ev.pages[i].list.filter(
      (listItem) =>
        listItem.code !== 401 ||
        ["yours for", "You don't have enough money", itemName].find(
          (target) =>
            listItem.parameters[0].includes(target) ||
            (altIdentifyString &&
              listItem.parameters[0].includes(altIdentifyString)),
        ),
    );

    // never update cafe purchases; we should always pay base price
    ev.pages[i].list = ev.pages[i].list.filter(
      (pageItem) =>
        !(pageItem.code == SET_VAR_CODE && pageItem.parameters[0] == 197),
    );
  }
};

EventLogicUpdates.clearMuttTrophy = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ITEM_CODE,
    "A trophy",
    "Trophy",
    "MUTT_TROPHY",
    undefined,
    1,
  );
};
EventLogicUpdates.clearMuttChampionsBelt = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A champion's belt",
    "Champion's Belt",
    "MUTT_CHAMPIONS_BELT",
  );
};
EventLogicUpdates.clearMuttChainsaw = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    WEAPON_CODE,
    "A chainsaw",
    "Chainsaw",
    "MUTT_CHAINSAW",
  );
};
EventLogicUpdates.clearMuttCattleprod = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    WEAPON_CODE,
    "A cattle prod spear",
    "Cattle Prod Spear",
    "MUTT_CATTLE_PROD",
  );
};
EventLogicUpdates.clearMuttLockpicks = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ITEM_CODE,
    "Set of lockpicks",
    "Lockpicks",
    "MUTT_LOCKPICKS",
  );
};
EventLogicUpdates.clearMuttTrainingBelt = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A Training Belt",
    "Training Belt",
    "MUTT_TRAINING_BELT",
    "A special belt",
  );
};
EventLogicUpdates.clearMuttPickelhaube = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A Pickelhaube",
    "Pickelhaube",
    "MUTT_PICKELHAUBE",
    "A highly decorated",
  );
};
EventLogicUpdates.clearMuttStunBaton = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    WEAPON_CODE,
    "A Stun Baton",
    "Stun Baton",
    "MUTT_STUN_BATON",
    "Battery-powered",
  );
};
EventLogicUpdates.clearMuttTraumaKit = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A trauma kit",
    "Trauma Kit",
    "MUTT_TRAUMA_KIT",
  );
};
EventLogicUpdates.clearMuttVenomDagger = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A Venom Dagger",
    "Venom Dagger",
    "MUTT_DAGGER",
    "A dagger coated",
  );
};
EventLogicUpdates.clearMuttCrossbow = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A crossbow",
    "Crossbow",
    "MUTT_CROSSBOW",
  );
};

EventLogicUpdates.clearMuttCoffeeMachine = function (ev) {
  // doing this here since this is the only case where the item name is capitalized
  // differently between pages
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "{Coffee machine}",
    "MUTT_COFFEE_MACHINE",
    "Get",
  );
  EventLogicUpdates.clearMuttPages(
    ev,
    ITEM_CODE,
    "A coffee machine",
    "Coffee Machine",
    "MUTT_COFFEE_MACHINE",
  );
};
EventLogicUpdates.clearMuttComfortBelt = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A Comfort Belt",
    "Comfort Belt",
    "MUTT_COMFORT_BELT",
    "A comfortable belt",
  );
};
EventLogicUpdates.clearMuttBreastplate = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ARMOR_CODE,
    "A Breastplate",
    "Breastplate",
    "MUTT_BREASTPLATE",
    "A medieval breastplate",
  );
};
EventLogicUpdates.clearMuttVideoGame = function (ev) {
  EventLogicUpdates.clearMuttPages(
    ev,
    ITEM_CODE,
    "A Game Cartridge",
    "Crossword Challenge}",
    "MUTT_CROSSWORD_CHALLENGE",
    "crossword video game",
  );

  // clear out video game count setting
  ev.pages[1].list = ev.pages[1].list.filter(
    (listItem) =>
      !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 41),
  );
  ev.pages[0].list = ev.pages[0].list.filter(
    (listItem) =>
      !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 41),
  );
};

EventLogicUpdates.clearLLEastCache = function (ev) {
  ev.pages[0].list = EventLogicUpdates.messageReplacement(
    ev.pages[0].list,
    "$50",
    "LL_EAST_CACHE",
  );
  // the event doesnt actually drop cash, it just says it does
  // so this is just in case it gets fixed in the future
  ev.pages[0].list = EventLogicUpdates.itemDropClear(
    ev.pages[0].list,
    CASH_CODE,
  );
};

EventLogicUpdates.clearWrongPaintingGrabEvent = function (ev) {};

EventLogicUpdates.clearRightPaintingGrabEvent = function (ev) {};

EventLogicUpdates.updateSybilAwakenedDoorPage = function (ev) {
  if (ev.pages.length < 4) {
    const newPage = JsonEx.makeDeepCopy(ev.pages[2]);
    newPage.conditions = EventLogicUpdates.buildConditions(undefined, 970); // if sybilPromise is on
    newPage.list = AWAKENED_SYBIL_DOOR_LIST;
    ev.pages.push(newPage);
  }
};

EventLogicUpdates.clearWilhelminaDrop = function (ev) {
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    WEAPON_CODE,
  );
  ev.pages[1].list = EventLogicUpdates.itemDropClear(
    ev.pages[1].list,
    ARMOR_CODE,
  );

  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Spellsword",
    "CW_WILHEMINA_VICTORY",
  );

  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Spear of the Word",
    "CW_WILHEMINA_VICTORY",
  );

  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Wordsmith's Hammer",
    "CW_WILHEMINA_VICTORY",
  );

  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Babylon Typewriter",
    "CW_WILHEMINA_VICTORY",
  );

  ev.pages[1].list = EventLogicUpdates.messageReplacement(
    ev.pages[1].list,
    "Tome of Words",
    "CW_WILHEMINA_VICTORY",
  );
};

EventLogicUpdates.blockPlanetariumDoor = function (ev) {
  if (ev.pages.length < 3) {
    ev.pages.push({
      ...ev.pages[1],
      conditions: EventLogicUpdates.buildConditions("A", 975),
    });
  }
  ev.pages[1].list = [
    {
      code: 250,
      indent: 0,
      parameters: [
        {
          name: "Door_CantOpen",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: [
        "It still won't open. She's still alive. \\C[20]She's watching.",
      ],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];
};

EventLogicUpdates.blockIncorrectPainting = function (ev) {
  // take it is always disabled
  ev.pages[0].list.find(
    (listItem) =>
      listItem.code == 102 && listItem.parameters[0][1].includes("Take it."),
  ).parameters[0][1] = `<<[s[${TRUE_SWITCH_ID}]]>>Take it.`;
};

EventLogicUpdates.clearCorrectPaintingDrop = function (ev) {
  const originalList = ev.pages[0].list;
  for (let i = 0; i < originalList.length; i++) {
    const listItem = originalList[i];
    if (listItem.code == ITEM_CODE) {
      originalList.splice(
        i,
        1,
        ...[
          {
            code: 101,
            indent: 4,
            parameters: ["", 0, 0, 2, ""],
          },
          {
            code: 401,
            indent: 4,
            parameters: [
              `Get ${LookOutsideAPClient.getItemName("FRED_DARK_ROOM_CORRECT_PAINTING")}.`,
            ],
          },
        ],
      );
    }
  }
};

EventLogicUpdates.gunTraderInitList = function (ev) {
  ShopHelpers.gunTraderInitList(ev);
};

EventLogicUpdates.gamerInitList = function (ev) {
  ShopHelpers.gamerInitList(ev);
};

EventLogicUpdates.strangeTraderInitList = function (ev) {
  ShopHelpers.strangeTraderInitList(ev);
};

const EVENT_UPDATE_TABLE = {
  2: {
    5: BlackoutLamp.createLampBlackoutEvent,
    16: BackInTime.createCalendarBackInTimeEvent,
  },
  3: {
    12: BackInTime.createClockTimeEvent,
    9: EventLogicUpdates.doorCombatChecker,
    17: EventLogicUpdates.doorEncounterPicker,
    52: EventLogicUpdates.gunTraderInitList,
    56: EventLogicUpdates.gamerInitList,
    88: EventLogicUpdates.clearScreamatoriumEvent,
    121: EventLogicUpdates.clearRoachQuestPrize,
    133: EventLogicUpdates.strangeTraderInitList,
  },
  23: { 40: EventLogicUpdates.fixWoundedManDoor },
  24: { 3: EventLogicUpdates.clearWoundedManKnifeEvent },
  74: {
    2: EventLogicUpdates.fixElevatorButtons,
    3: EventLogicUpdates.clearElevatorFreakEvent,
  },
  6: {
    3: EventLogicUpdates.updateSybilAwakenedDoorPage,
    13: EventLogicUpdates.clearF3HallwayPlanterEvent,
    25: EventLogicUpdates.clearF3HallwayVendingMachineEvent,
  },
  7: {
    1: EventLogicUpdates.leighRematch,
    14: EventLogicUpdates.forceAsterToStay,
    60: EventLogicUpdates.permaGrasshopper,
  },
  434: { 1: EventLogicUpdates.clearLeighQuest },
  186: {
    2: EventLogicUpdates.leighWillWait,
    3: EventLogicUpdates.leighWillWait,
    5: EventLogicUpdates.leighWillWait,
  },
  92: {
    45: EventLogicUpdates.clearRatKingCrown,
    111: EventLogicUpdates.forceAudreyToStay,
    113: EventLogicUpdates.updateAudreyEvents,
    114: EventLogicUpdates.updateAudreyPose,
  },
  93: {
    3: EventLogicUpdates.forceLeighToStay,
  },
  9: {
    13: EventLogicUpdates.removeLyleDoorBlocker,
    14: EventLogicUpdates.updateLyleEvent,
  },
  326: {
    4: EventLogicUpdates.makeSpiderLeave,
  },
  60: {
    9: EventLogicUpdates.forcePapineauToStay,
  },
  451: { 7: EventLogicUpdates.forceInstantStumblingShadeSpawn },
  325: {
    5: EventLogicUpdates.updateCrawlingShadeDefeatConditions,
  },
  380: {
    2: EventLogicUpdates.updateShadeDefeatConditions, // writhing shade
  },
  401: {
    6: EventLogicUpdates.updateShadeDefeatConditions, // moaning shade
  },
  32: {
    7: EventLogicUpdates.updateJoelPages,
  },
  34: {
    20: EventLogicUpdates.updateMadisonPages,
  },
  31: {
    35: EventLogicUpdates.updateDay5ClintPages,
  },
  435: {
    1: EventLogicUpdates.updateDay9ClintPages,
    2: EventLogicUpdates.updateDay9JoelPages,
    3: EventLogicUpdates.updateDay9MadisonPages,
    4: EventLogicUpdates.updateDay9BenPages,
  },
  332: { 3: EventLogicUpdates.unblockEugeneBookcase },
  110: { 7: EventLogicUpdates.clearTelescopeEvent },
  78: {
    31: EventLogicUpdates.clearGuineaPigChairEvent,
    3: EventLogicUpdates.clearSecurityTapeEvent,
  },
  38: {
    8: EventLogicUpdates.clearProjectorEvent,
  },
  47: {
    43: EventLogicUpdates.clearCoffeeMachineEvent,
  },
  273: {
    11: EventLogicUpdates.clearAntoinesKey,
  },
  208: {
    24: EventLogicUpdates.clearLLEastCache,
  },
  299: {
    12: EventLogicUpdates.clearClydesKey,
  },
  300: {
    6: EventLogicUpdates.clearJennifersKey,
  },
  301: {
    5: EventLogicUpdates.clearAugustesKey,
  },
  441: {
    7: EventLogicUpdates.clearGlitchElixirDrops,
  },
  442: {
    9: EventLogicUpdates.clearAmbroseDrops,
  },
  115: {
    2: EventLogicUpdates.clearTypewritherDrop,
  },
  118: {
    5: EventLogicUpdates.clearManuscriptCompletion,
  },
  101: { 5: EventLogicUpdates.clearCribDrop },
  69: { 56: EventLogicUpdates.clearJeanneLaundry },
  180: {
    15: EventLogicUpdates.clearLandlordCache,
  },
  184: {
    1: EventLogicUpdates.fixBasementKeyConditions,
  },
  204: {
    22: EventLogicUpdates.fixBasementKeyConditions,
  },
  206: {
    13: EventLogicUpdates.fixBasementKeyConditions,
  },
  207: {
    22: EventLogicUpdates.clearAudreyAPCDrop,
    26: EventLogicUpdates.clearLandlordDigSpot,
  },
  233: {
    11: EventLogicUpdates.clearAudreyTankDrop,
  },
  130: {
    2: EventLogicUpdates.clearAudreyTrenchDiggerOverworldDrop,
    9: EventLogicUpdates.clearAudreyTrenchDiggerBattleDrop,
    11: EventLogicUpdates.fixBasementKeyConditions,
  },
  309: {
    19: EventLogicUpdates.clearErnestCheeseStash,
  },
  457: {
    1: EventLogicUpdates.clearSadipedePrize,
  },
  112: {
    13: EventLogicUpdates.updateDarkRoomPhotoDevelopmentEvent,
    14: EventLogicUpdates.updateDarkRoomKey,
    16: EventLogicUpdates.updateDarkRoomPhotoPaper,
  },
  94: {
    9: EventLogicUpdates.clearRaftaLetter,
  },
  96: {
    12: EventLogicUpdates.clearFaceTakerDrops,
  },
  50: {
    12: EventLogicUpdates.clearOozeMachine,
  },
  217: {
    7: EventLogicUpdates.clearToxicFredDrop,
    8: EventLogicUpdates.clearToxicFredDrop,
  },
  97: {
    1: EventLogicUpdates.clearCorrectPaintingDrop,
    5: EventLogicUpdates.blockIncorrectPainting,
    10: EventLogicUpdates.blockIncorrectPainting,
    11: EventLogicUpdates.blockIncorrectPainting,
    12: EventLogicUpdates.blockIncorrectPainting,
    13: EventLogicUpdates.blockIncorrectPainting,
    14: EventLogicUpdates.blockIncorrectPainting,
    15: EventLogicUpdates.blockIncorrectPainting,
    16: EventLogicUpdates.blockIncorrectPainting,
    17: EventLogicUpdates.blockIncorrectPainting,
    18: EventLogicUpdates.blockIncorrectPainting,
    19: EventLogicUpdates.blockIncorrectPainting,
    20: EventLogicUpdates.blockIncorrectPainting,
    21: EventLogicUpdates.blockIncorrectPainting,
    22: EventLogicUpdates.blockIncorrectPainting,
  },
  236: {
    16: EventLogicUpdates.clearToxicFredDrop,
    18: EventLogicUpdates.clearToxicFredDrop,
    19: EventLogicUpdates.clearToxicFredDrop,
  },
  42: {
    6: EventLogicUpdates.clearToxicFredDrop,
  },
  237: {
    14: EventLogicUpdates.clearToxicFredDrop,
  },
  119: { 13: EventLogicUpdates.clearToxicFredDrop },
  239: { 6: EventLogicUpdates.clearTrueFredStateReset },
  460: { 15: EventLogicUpdates.clearKOTDDrop },
  187: {
    26: EventLogicUpdates.updateLaughingMoldEvent,
    3: EventLogicUpdates.trappedVisualsAfterSporeMother,
    5: EventLogicUpdates.trappedVisualsAfterSporeMother,
    6: EventLogicUpdates.trappedVisualsAfterSporeMother,
    21: EventLogicUpdates.trappedVisualsAfterSporeMother,
    23: EventLogicUpdates.trappedVisualsAfterSporeMother,
    19: EventLogicUpdates.trappedVisualsAfterSporeMother,
    14: EventLogicUpdates.trappedVisualsAfterSporeMother,
    15: EventLogicUpdates.rescueFightsAfterSporeMother,
    16: EventLogicUpdates.rescueFightsAfterSporeMother,
    7: EventLogicUpdates.rescueFightsAfterSporeMother,
    22: EventLogicUpdates.rescueFightsAfterSporeMother,
  },
  188: {
    2: EventLogicUpdates.clearPhilDelusionDropsOutside,
    5: EventLogicUpdates.rescueFightsAfterSporeMother,
    6: EventLogicUpdates.rescueFightsAfterSporeMother,
    13: EventLogicUpdates.rescueFightsAfterSporeMother,
    14: EventLogicUpdates.rescueFightsAfterSporeMother,
    3: EventLogicUpdates.trappedVisualsAfterSporeMother,
    9: EventLogicUpdates.trappedVisualsAfterSporeMother,
    10: EventLogicUpdates.trappedVisualsAfterSporeMother,
    11: EventLogicUpdates.trappedVisualsAfterSporeMother,
    12: EventLogicUpdates.trappedVisualsAfterSporeMother,
  },
  127: {
    2: EventLogicUpdates.clearPhilDelusionDropsSporeMother,
    3: EventLogicUpdates.clearAudreySporeGuardianDrop,
    24: EventLogicUpdates.clearAudreySporeGuardianDrop,
    26: EventLogicUpdates.clearAudreySporeGuardianDrop,
  },
  259: {
    3: EventLogicUpdates.fixRoxieRoomItemDoubleEntry,
    17: EventLogicUpdates.fixRoxieRoomItemDoubleEntry,
  },
  256: {
    3: EventLogicUpdates.clearGrateLever,
  },
  189: {
    18: EventLogicUpdates.returnTickle,
  },
  86: {
    14: EventLogicUpdates.clearAudreyHellrideDrop,
    58: EventLogicUpdates.clearAudreyCopCarDrop,
    101: EventLogicUpdates.clearAudreySwatBattleDrop,
    42: EventLogicUpdates.clearAudreySwatOverworldDrop,
    106: EventLogicUpdates.clearBlackoutIrisKey,
  },
  152: { 6: EventLogicUpdates.clearAudreyShrimpKnightDrop },
  270: {
    6: EventLogicUpdates.clearAudreyTaxidermyDrop,
  },
  106: { 11: EventLogicUpdates.clearRatFreakGift },
  289: { 6: EventLogicUpdates.clearBurritoRatGift },
  433: { 9: EventLogicUpdates.clearHellenQuestPrizes },
  30: { 6: EventLogicUpdates.clearSecretDoorLockout },
  367: { 1: EventLogicUpdates.clearSybilRedKey },
  132: {
    2: EventLogicUpdates.clearEugeneDeath,
    47: EventLogicUpdates.clearReptileFootball,
  },
  56: {
    4: EventLogicUpdates.clearMuttStunBaton,
    10: EventLogicUpdates.clearMuttTraumaKit,
    11: EventLogicUpdates.clearMuttBreastplate,
    12: EventLogicUpdates.clearMuttPickelhaube,
    13: EventLogicUpdates.clearMuttVenomDagger,
    14: EventLogicUpdates.clearMuttTrainingBelt,
    15: EventLogicUpdates.clearMuttCrossbow,
    16: EventLogicUpdates.clearMuttLockpicks,
    17: EventLogicUpdates.clearMuttCoffeeMachine,
    18: EventLogicUpdates.clearMuttCattleprod,
    21: EventLogicUpdates.clearMuttComfortBelt,
    22: EventLogicUpdates.clearMuttChainsaw,
    23: EventLogicUpdates.clearMuttChampionsBelt,
    24: EventLogicUpdates.clearMuttVideoGame,
    25: EventLogicUpdates.clearMuttTrophy,
  },
  28: {
    12: GoalChecker.insertGoalCheckerEvent,
  },
  169: {
    2: EventLogicUpdates.clearWilhelminaDrop,
  },
  345: {
    30: EventLogicUpdates.blockPlanetariumDoor,
  },
};

const originalEventPages = {};

EventLogicUpdates.applyEventUpdates = function (lastLoadedMapId, ev) {
  if (
    EVENT_UPDATE_TABLE[lastLoadedMapId] &&
    EVENT_UPDATE_TABLE[lastLoadedMapId][ev.id]
  ) {
    // store a copy of the ev pages to update fresh every time
    if (!originalEventPages[lastLoadedMapId]) {
      originalEventPages[lastLoadedMapId] = {};
    }
    if (!originalEventPages[lastLoadedMapId][ev.id]) {
      originalEventPages[lastLoadedMapId][ev.id] = JsonEx.makeDeepCopy(
        ev.pages,
      );
    }
    ev.pages = JsonEx.makeDeepCopy(originalEventPages[lastLoadedMapId][ev.id]);
    EVENT_UPDATE_TABLE[lastLoadedMapId][ev.id](ev);
    return;
  }
};

EventLogicUpdates.clearAllEnemiesDrops = function () {
  for (const enemy of $dataEnemies) {
    if (enemy) {
      enemy.dropItems = [];
      enemy.gold = 0;
    }
  }
};

let troopsUpdated = false;
let originalTroops;
// unlike other changes, troops is modified once and the copy
// is shared across save files
// i make a copy of the original troops on first modification
// so future modifications can start from a clean slate
EventLogicUpdates.clearTroopsDrops = function () {
  if (!troopsUpdated) {
    originalTroops = JsonEx.makeDeepCopy($dataTroops);
    troopsUpdated = true;
  }

  EventLogicUpdates.clearDoorEncounterDrops();

  // deleting the message entirely so we can have the gift show up after battle
  function clearLaughingMoldGift() {
    let laughingMoldTroop = JsonEx.makeDeepCopy(
      originalTroops[209].pages[0].list,
    );

    laughingMoldTroop = EventLogicUpdates.itemDropClear(
      laughingMoldTroop,
      ITEM_CODE,
    );

    laughingMoldTroop = EventLogicUpdates.deleteMessage(
      laughingMoldTroop,
      "Elixir",
    );

    $dataTroops[209].pages[0].list = laughingMoldTroop;
  }
  clearLaughingMoldGift();

  function clearDarrylGift() {
    let darrylTroop = JsonEx.makeDeepCopy(originalTroops[615].pages[7].list);

    darrylTroop = EventLogicUpdates.itemDropClear(darrylTroop, WEAPON_CODE);

    darrylTroop = EventLogicUpdates.messageReplacement(
      darrylTroop,
      "Antenniform Legs",
      "B_CAR_DARRYL_COMBAT_VICTORY",
      "Receive",
    );
    $dataTroops[615].pages[7].list = darrylTroop;
  }
  clearDarrylGift();

  function clearMadPie() {
    let screamingPizzaList = JsonEx.makeDeepCopy(
      originalTroops[249].pages[1].list,
    );

    screamingPizzaList = EventLogicUpdates.itemDropClear(
      screamingPizzaList,
      ITEM_CODE,
    );

    screamingPizzaList = EventLogicUpdates.deleteMessage(
      screamingPizzaList,
      "Screaming Pizza",
    );

    $dataTroops[249].pages[1].list = screamingPizzaList;
  }
  clearMadPie();

  function clearPierreGifts() {
    const pierreTroop = JsonEx.makeDeepCopy(originalTroops[19]);

    // first, remove explicit clown drawing gift
    let clownDrawingList = EventLogicUpdates.itemDropClear(
      pierreTroop.pages[0].list,
      ITEM_CODE,
    );

    // then rename to randomized item

    clownDrawingList = EventLogicUpdates.messageReplacement(
      clownDrawingList,
      "Clown Drawing",
      "APT_38_PIERRE_CLOWN_DRAWING",
      "Receive",
    );

    $dataTroops[19].pages[0].list = clownDrawingList;

    // remove clown wig gift
    let clownWigList = EventLogicUpdates.itemDropClear(
      pierreTroop.pages[5].list,
      ARMOR_CODE,
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
    let maskedShadowTroop = JsonEx.makeDeepCopy(originalTroops[18]);

    let maskedShadowTroopList = maskedShadowTroop.pages[0].list;

    maskedShadowTroopList = EventLogicUpdates.itemDropClear(
      maskedShadowTroopList,
      ITEM_CODE,
    );

    maskedShadowTroopList = EventLogicUpdates.messageReplacement(
      maskedShadowTroopList,
      "a tongue",
      "MASKED_SHADOW_TONGUE",
      "and appears to be... a",
    );

    maskedShadowTroopList = EventLogicUpdates.messageReplacement(
      maskedShadowTroopList,
      "{Tongue}",
      "MASKED_SHADOW_TONGUE",
      "You receive a",
    );

    // dont want player to refuse it, so i'll set 'refuse it' to be grayed
    // out on a condition guaranteed to be true (current shadow interaction = 5 i.e. this one)
    maskedShadowTroopList.find(
      (listItem) =>
        listItem.code === 102 && listItem.parameters[0][0].contains("Take it."),
    ).parameters[0][1] = `<<[v[150]=5]>>Refuse it`;

    // remove the explicit recruit check variable setting
    maskedShadowTroopList = maskedShadowTroopList.filter(
      (listItem) =>
        !(listItem.code == SET_SWITCH_CODE && listItem.parameters[0] === 27),
    );

    // set chosen gift to always be 1 to make it
    // easier to overwrite that event as well
    const shadowGiftPickingIndex = maskedShadowTroopList.findIndex(
      (listItem) =>
        listItem.code === SET_VAR_CODE && listItem.parameters[0] === 155,
    );

    if (shadowGiftPickingIndex !== -1)
      maskedShadowTroopList[shadowGiftPickingIndex] = {
        code: 355,
        indent: 1,
        parameters: ["sVr(155, 1);"],
      };

    $dataTroops[18].pages[0].list = maskedShadowTroopList;

    // for good measure im removing the code that makes shadow stop coming around when you attack it
    $dataTroops[18].pages[1].list = maskedShadowTroop.pages[1].list.filter(
      (listItem) => listItem.code !== SET_SWITCH_CODE,
    );
  }
  clearMaskedShadowEncounters();

  // clear both the gun sale and the recruitment itself
  function clearLeighRecruitmentEvent() {
    let leighTroopList = JsonEx.makeDeepCopy(originalTroops[34].pages[0]).list;

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

    leighTroopList = leighTroopList.filter(
      (listEntry) =>
        !(listEntry.code == SET_VAR_CODE && listEntry.parameters[0] == 37),
    ); // dont set num people in apartment

    // make the recruit option hit self switch instead, and then end there.
    const leighRecruitIndex = leighTroopList.findIndex(
      (listEntry) =>
        listEntry.code == SET_SWITCH_CODE && listEntry.parameters[0] == 34,
    );
    if (leighRecruitIndex !== -1)
      leighTroopList[leighRecruitIndex] = {
        code: 355,
        indent: 1,
        parameters: [
          "$gameSelfSwitches.setValue([93, 3, 'D'], true); BattleManager.abort(); this.command115();",
        ],
      };
    $dataTroops[34].pages[0].list = leighTroopList;
  }
  clearLeighRecruitmentEvent();

  function clearJoelRecruitmentEvent() {
    const joelTroopList = JsonEx.makeDeepCopy(originalTroops[26].pages[0]).list;

    // no matter what you do, joel super loves you forever
    // set all joel dispo updates to set it to way over maximum
    EventLogicUpdates.itemDropReplaceScript(
      joelTroopList,
      SET_VAR_CODE,
      "sVr(106,99);",
      (listItem) => listItem.parameters[0] == 106,
    );

    // when recruiting, the sybilmajorstory is the very first that's set, so we can use that
    // to bypass the recruiting process
    const joelRecruitIndex = joelTroopList.findIndex(
      (listEntry) =>
        listEntry.code == 355 &&
        listEntry.parameters[0] == "setSybilMajorStory(52);",
    );
    if (joelRecruitIndex !== -1)
      joelTroopList[joelRecruitIndex].parameters[0] =
        "sSw(784, true); BattleManager.abort(); this.command115();";

    $dataTroops[26].pages[0].list = joelTroopList;

    // after you give him fuzzy, he gives you something
    let joelFuzzyTroopList = JsonEx.makeDeepCopy(
      originalTroops[26].pages[1],
    ).list;

    joelFuzzyTroopList = EventLogicUpdates.itemDropClear(
      joelFuzzyTroopList,
      ITEM_CODE,
    );

    joelFuzzyTroopList = EventLogicUpdates.messageReplacement(
      joelFuzzyTroopList,
      "Door Knob",
      "APT_32_BATHROOM_DOOR_KNOB",
      "You receive a",
    );
    $dataTroops[26].pages[1].list = joelFuzzyTroopList;
  }
  clearJoelRecruitmentEvent();

  function clearRoachesRecruitmentEvent() {
    const roachTroopList = JsonEx.makeDeepCopy(originalTroops[279]).pages[0]
      .list;

    // clear out the part that sets roaches as a recruit;
    // we can already use roach event >= 40 as the location check
    $dataTroops[279].pages[0].list = roachTroopList.filter(
      (listEntry) =>
        !(listEntry.code == SET_SWITCH_CODE && listEntry.parameters[0] == 249),
    );
  }
  clearRoachesRecruitmentEvent();

  function clearAsterRecruitmentEvent() {
    const asterTroopList = JsonEx.makeDeepCopy(originalTroops[121]).pages[0]
      .list;

    // when recruiting, the sybilmajorstory is the very first that's set, so we can use that
    // to bypass the recruiting process
    const asterRecruitIndex = asterTroopList.findIndex(
      (listEntry) =>
        listEntry.code == 355 &&
        listEntry.parameters[0] == "setSybilMajorStory(51);",
    );
    if (asterRecruitIndex !== -1)
      asterTroopList[asterRecruitIndex].parameters[0] =
        "$gameSelfSwitches.setValue([7, 14, 'D'], true); BattleManager.abort(); this.command115();";
    $dataTroops[121].pages[0].list = asterTroopList;
  }
  clearAsterRecruitmentEvent();

  function clearSpiderRecruitmentEvent() {
    const spiderInterviewList = JsonEx.makeDeepCopy(
      originalTroops[359].pages[1].list,
    );

    // find where pity is initialized to 0 and set it to 99
    spiderInterviewList.find(
      (listItem) =>
        listItem.code == SET_VAR_CODE && listItem.parameters[0] == 787,
    ).parameters[4] = 99;

    $dataTroops[359].pages[1].list = spiderInterviewList;

    const spiderRecruitList = JsonEx.makeDeepCopy(
      originalTroops[359].pages[5].list,
    );

    const spiderRecruitIndex = spiderRecruitList.findIndex(
      (listItem) =>
        listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 375,
    );

    if (spiderRecruitIndex !== -1) {
      spiderRecruitList[spiderRecruitIndex] = {
        code: 355,
        indent: 0,
        parameters: [
          `$gameSelfSwitches.setValue([326, 4, 'A'], true); BattleManager.abort(); this.command115();`,
        ],
      };
    }

    $dataTroops[359].pages[5].list = spiderRecruitList;
  }
  clearSpiderRecruitmentEvent();

  function clearPapineauRecruitmentEvent() {
    const papineauTroopList = JsonEx.makeDeepCopy(
      originalTroops[22].pages[0],
    ).list;

    const papineauRecruitIndex = papineauTroopList.findIndex(
      (listItem) =>
        listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 378,
    );

    if (papineauRecruitIndex !== -1) {
      papineauTroopList[papineauRecruitIndex] = {
        code: 355,
        indent: papineauTroopList[papineauRecruitIndex].indent,
        parameters: [
          `sSw(783, true); BattleManager.abort(); this.command115();`,
        ],
      };
    }
    $dataTroops[22].pages[0].list = papineauTroopList;
  }
  clearPapineauRecruitmentEvent();

  function clearPhillippeRecruitmentEvent() {
    const phillippeTroopList = JsonEx.makeDeepCopy(
      originalTroops[350].pages[1].list,
    );
    // dont let the player bring him along

    const rootIndex = phillippeTroopList.findIndex(
      (listItem) => listItem.code == 118 && listItem.parameters[0] == "root",
    );

    if (rootIndex !== -1) {
      const rootIndent = phillippeTroopList[rootIndex].indent;
      phillippeTroopList.splice(
        rootIndex,
        0,
        ...[
          {
            code: 101,
            indent: rootIndent,
            parameters: ["Portrait_NPCs", 3, 0, 2, "Phillippe"],
          },
          {
            code: 401,
            indent: rootIndent,
            parameters: ["I'll wait at the exit. Please be careful..."],
          },
          {
            code: 119,
            indent: rootIndent,
            parameters: ["leave"],
          },
        ],
      );
    }

    $dataTroops[350].pages[1].list = phillippeTroopList;
  }
  clearPhillippeRecruitmentEvent();

  function clearFungusMimicGifts() {
    let jeanPierreGiftList = JsonEx.makeDeepCopy(
      originalTroops[347].pages[1].list,
    );

    jeanPierreGiftList = EventLogicUpdates.itemDropClear(
      jeanPierreGiftList,
      WEAPON_CODE,
    );
    jeanPierreGiftList = EventLogicUpdates.messageReplacement(
      jeanPierreGiftList,
      "Greatsword",
      "FUNGUS_JEAN_P_RESCUE_COMBAT_VICTORY",
      "Receive",
    );

    $dataTroops[347].pages[1].list = jeanPierreGiftList;

    let sylvainGiftList = JsonEx.makeDeepCopy(
      originalTroops[348].pages[1].list,
    );

    sylvainGiftList = EventLogicUpdates.itemDropClear(
      sylvainGiftList,
      ARMOR_CODE,
    );
    sylvainGiftList = EventLogicUpdates.messageReplacement(
      sylvainGiftList,
      "Elegant Cap",
      "FUNGUS_SYLVAIN_RESCUE_COMBAT_VICTORY",
      "Receive",
    );

    $dataTroops[348].pages[1].list = sylvainGiftList;

    let claireGiftList = JsonEx.makeDeepCopy(originalTroops[349].pages[1].list);

    claireGiftList = EventLogicUpdates.itemDropClear(
      claireGiftList,
      ARMOR_CODE,
    );
    claireGiftList = EventLogicUpdates.messageReplacement(
      claireGiftList,
      "Ornate Breastplate",
      "FUNGUS_CLAIRE_RESCUE_COMBAT_VICTORY",
      "Receive",
    );

    $dataTroops[349].pages[1].list = claireGiftList;
  }
  clearFungusMimicGifts();

  function clearJeannePrizeEvent() {
    // clear out elixir prize
    // clear out 50 dollar prize
    // make sure we dont clear out the laundry removal
    let jeanneTroopList = JsonEx.makeDeepCopy(
      originalTroops[479],
    ).pages[0].list.filter(
      (listItem) =>
        listItem.code !== 125 ||
        !(listItem.code === ITEM_CODE && listItem.parameters[0] == 16),
    );

    // the elixir prize for killing all the hydras
    jeanneTroopList = EventLogicUpdates.messageReplacement(
      jeanneTroopList,
      "Elixir",
      "APT_20_HYDRA_HEADS",
    );

    // the 50 dollar prize for returning laundry
    jeanneTroopList = EventLogicUpdates.messageReplacement(
      jeanneTroopList,
      "$50!",
      "APT_20_HYDRA_LAUNDRY",
    );

    $dataTroops[479].pages[0].list = jeanneTroopList;
  }
  clearJeannePrizeEvent();

  function fixNestorLetterLogic() {
    let nestorTroopList = JsonEx.makeDeepCopy(originalTroops[40].pages[0].list);
    // dont allow player to hand over letter before rafta has written it
    nestorTroopList.find(
      (listItem) =>
        listItem.code === 102 &&
        listItem.parameters[0][0] == "Hand over love letter.",
    ).parameters[0][0] = `<<[!v[282]=3]>>Hand over love letter.`;

    const turnInLetterIndex = nestorTroopList.findIndex(
      (listItem) => listItem.code === ITEM_CODE,
    );
    // make nestor go to rafta even if you dont make a good case
    // filter out all places where we set nestorstate and then force state = 10 (he goes to rafta)
    nestorTroopList = nestorTroopList.filter(
      (listItem) =>
        !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 281),
    );
    if (turnInLetterIndex) {
      nestorTroopList.splice(turnInLetterIndex, 0, {
        code: 355,
        indent: nestorTroopList[turnInLetterIndex].indent,
        parameters: ["sVr(281, 10);"],
      });
    }

    $dataTroops[40].pages[0].list = nestorTroopList;
  }

  fixNestorLetterLogic();

  function clearScoutDrop() {
    let scoutTroopList = JsonEx.makeDeepCopy(originalTroops[295].pages[0].list);

    scoutTroopList = EventLogicUpdates.itemDropClear(scoutTroopList, ITEM_CODE);
    scoutTroopList = EventLogicUpdates.messageReplacement(
      scoutTroopList,
      "Radio",
      "LL_DINING_RADIO",
      "Receive",
    );
    $dataTroops[295].pages[0].list = scoutTroopList;
  }
  clearScoutDrop();

  function clearSapperDrop() {
    let sapperTroopList = JsonEx.makeDeepCopy(
      originalTroops[293].pages[0].list,
    );

    // dont delete the sapper trade, but do delete the initial 2 sapper gift
    sapperTroopList = sapperTroopList.filter(
      (listItem) =>
        !(listItem.code === ITEM_CODE && listItem.parameters[3] == 2),
    );

    sapperTroopList = EventLogicUpdates.messageReplacement(
      sapperTroopList,
      "give you two of these",
      "LL_SAPPER_GIFT_FROM_SAPPER",
    );

    $dataTroops[293].pages[0].list = sapperTroopList;
  }
  clearSapperDrop();

  function clearMinesweeperDrop() {
    let minesweeperTroopList = JsonEx.makeDeepCopy(
      originalTroops[294].pages[0].list,
    );

    // metal detector and tame landmine drops
    minesweeperTroopList = EventLogicUpdates.itemDropClear(
      minesweeperTroopList,
      WEAPON_CODE,
    );
    // dont reset tame landmine damage
    minesweeperTroopList = minesweeperTroopList.filter(
      (listItem) =>
        !(listItem.code !== SET_VAR_CODE && listItem.parameters[0] == 351),
    );
    minesweeperTroopList = EventLogicUpdates.itemDropClear(
      minesweeperTroopList,
      ITEM_CODE,
    );

    minesweeperTroopList = EventLogicUpdates.messageReplacement(
      minesweeperTroopList,
      "Metal Detector",
      "LL_MINESWEEPER_GIFT",
    );

    minesweeperTroopList = EventLogicUpdates.messageReplacement(
      minesweeperTroopList,
      "Tame Landmine",
      "LL_MINESWEEPER_12_MINE_PRIZE",
    );

    $dataTroops[294].pages[0].list = minesweeperTroopList;
  }
  clearMinesweeperDrop();

  function clearJasperGifts() {
    let jasperTroopList = JsonEx.makeDeepCopy(
      originalTroops[124].pages[0].list,
    );

    // remove only choice drops
    jasperTroopList = jasperTroopList.filter(
      (listItem) =>
        !(listItem.code === ITEM_CODE && listItem.parameters[0] == 384) && // jaspers key
        !(listItem.code === ITEM_CODE && listItem.parameters[0] == 314) && // roof access key
        !(listItem.code === ITEM_CODE && listItem.parameters[0] == 23), // dark robes
    );

    // do telescope separately because it needs a special switch
    const telescopeIndex = jasperTroopList.findIndex(
      (listItem) => listItem.code === 126 && listItem.parameters[0] == 387,
    );
    if (telescopeIndex !== -1) {
      jasperTroopList.splice(telescopeIndex, 1, {
        code: 355,
        indent: jasperTroopList[telescopeIndex].indent,
        parameters: [`sSw(${GF_OFFICE_JASPER_FIX_TELESCOPE_SWITCH}, true)`],
      });
    }

    jasperTroopList = EventLogicUpdates.messageReplacement(
      jasperTroopList,
      "Roof Access Key",
      "GF_OFFICE_JASPER_GIFT_OFFERING",
    );
    jasperTroopList = EventLogicUpdates.messageReplacement(
      jasperTroopList,
      "Stained Key",
      "GF_OFFICE_JASPERS_KEY",
    );
    jasperTroopList = EventLogicUpdates.messageReplacement(
      jasperTroopList,
      "Telescope",
      "GF_OFFICE_JASPER_FIX_TELESCOPE",
    );
    $dataTroops[124].pages[0].list = jasperTroopList;
  }
  clearJasperGifts();

  function clearFakeFredGifts() {
    let faceTakerTroopList = JsonEx.makeDeepCopy(
      originalTroops[327].pages[0].list,
    );

    // dont set the deadfred count when you speak to him first because
    // you could undo progress
    faceTakerTroopList = faceTakerTroopList.filter(
      (listItem) =>
        !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 306),
    );

    // clear all item drops
    faceTakerTroopList = EventLogicUpdates.itemDropClear(
      faceTakerTroopList,
      ITEM_CODE,
    );
    // clear armor drop
    faceTakerTroopList = EventLogicUpdates.itemDropClear(
      faceTakerTroopList,
      ARMOR_CODE,
    );

    faceTakerTroopList = EventLogicUpdates.deleteMessage(
      faceTakerTroopList,
      "Paint Palette",
    );
    faceTakerTroopList = EventLogicUpdates.deleteMessage(
      faceTakerTroopList,
      "Canvas Carry Bag",
    );
    faceTakerTroopList = EventLogicUpdates.deleteMessage(
      faceTakerTroopList,
      "Turpentine",
    );
    faceTakerTroopList = EventLogicUpdates.deleteMessage(
      faceTakerTroopList,
      "First Aid Kit",
    );

    $dataTroops[327].pages[0].list = faceTakerTroopList;
  }
  clearFakeFredGifts();

  function updateToxicFredEncounter() {
    const soldRageQuote =
      "\\C[5]\\{\\{\\{You\\.\\. FUCKING\\.\\.\\C[10] \\{\\{\\{S\\.O\\.L\\.D\\}\\}\\}\\.\\.\\C[5]  me?!?!";
    const randoRageList = [
      {
        code: 101,
        indent: 4,
        parameters: ["", 0, 0, 2, "Frederic"],
      },
      {
        code: 401,
        indent: 4,
        parameters: ["\\C[5]\\{\\{\\{You\\.\\. FUCKING\\.\\.\\"],
      },
      {
        code: 401,
        indent: 4,
        parameters: [
          "\\{\\{\\{\\C[10] \\{\\{\\{RANDOMIZED\\}\\}\\}\\.\\.\\C[5]  me?!?!",
        ],
      },
    ];

    let toxicTroopList = JsonEx.makeDeepCopy(originalTroops[332].pages[0].list);

    const soldIntroRageIndex = toxicTroopList.findIndex(
      (listItem) =>
        listItem.code == 401 && listItem.parameters[0] == soldRageQuote,
    );
    if (soldIntroRageIndex !== -1) {
      toxicTroopList.splice(soldIntroRageIndex, 1, ...randoRageList);
    }

    toxicTroopList.forEach((listItem) => {
      if (listItem.code == 401 && listItem.parameters[0].includes("sell"))
        listItem.parameters[0] = listItem.parameters[0].replace(
          "sell",
          "randomize",
        );
    });

    toxicTroopList.find(
      (listItem) =>
        listItem.code == 102 &&
        listItem.parameters[0][1] == "What do you mean? Sold you?",
    ).parameters[0][1] = "What do you mean? Randomized?";

    $dataTroops[332].pages[0].list = toxicTroopList;

    let toxicTroopList2 = JsonEx.makeDeepCopy(
      originalTroops[332].pages[1].list,
    );

    let page2RageIndex = toxicTroopList2.findIndex(
      (listItem) =>
        listItem.code == 401 && listItem.parameters[0].includes("SELLING"),
    );

    if (page2RageIndex !== -1)
      toxicTroopList2[page2RageIndex].parameters[0] = toxicTroopList2[
        page2RageIndex
      ].parameters[0] =
        "I'm going to do\\C[10] THIS\\C[0] to you. For\\C[10] RANDOMIZING\\C[0] me. You little \\C[10]SHIT.";

    $dataTroops[332].pages[1].list = toxicTroopList2;
  }
  updateToxicFredEncounter();

  function clearFinalFredGifts() {
    // main fred is done in his gift clear, the rest are here
    let tumorList = JsonEx.makeDeepCopy(originalTroops[328].pages[0].list);

    //clear tumorlumps
    EventLogicUpdates.itemDropClear(tumorList, ITEM_CODE);
    EventLogicUpdates.deleteMessage(tumorList, "Tumor Lumps");

    $dataTroops[328].pages[0].list = tumorList;

    // wiggly moves into your house
    // overnight, so we'll block his gift there

    let fredBiteList = JsonEx.makeDeepCopy(originalTroops[330].pages[0].list);

    // clear rage armor (armor) drop
    EventLogicUpdates.itemDropClear(fredBiteList, ARMOR_CODE);
    EventLogicUpdates.deleteMessage(fredBiteList, "Rage Armor");

    $dataTroops[330].pages[0].list = fredBiteList;

    let angelFredList = JsonEx.makeDeepCopy(originalTroops[331].pages[0].list);

    // clear strange feather (armor) drop
    EventLogicUpdates.itemDropClear(angelFredList, ARMOR_CODE);
    // it gets no announcement, so no deleteMessage call needed

    // keeping angel fred's cash bribe intact because it's funny

    $dataTroops[331].pages[0].list = angelFredList;

    // toxic gift doesnt work since it requires hat trick
    // and not a cowboy hat is not in the pool; skipping the clear for him

    let scaredList = JsonEx.makeDeepCopy(originalTroops[333].pages[0].list);

    // clear cowardly boots (armor) drop
    EventLogicUpdates.itemDropClear(scaredList, ARMOR_CODE);
    EventLogicUpdates.deleteMessage(scaredList, "Cowardly Boots");

    $dataTroops[333].pages[0].list = scaredList;

    let brightList = JsonEx.makeDeepCopy(originalTroops[334].pages[0].list);

    //clear medic-in-a-jar
    EventLogicUpdates.itemDropClear(brightList, ITEM_CODE);
    EventLogicUpdates.deleteMessage(brightList, "Medic-in-a-jar");

    $dataTroops[334].pages[0].list = brightList;

    // skipping shadow fred; he gives nothing

    // keeping main fred's duplications open
  }
  clearFinalFredGifts();

  function dontStockStuart() {
    let stuartList = JsonEx.makeDeepCopy(originalTroops[604].pages[0].list);

    // remove the script that fills his shop with audrey gear after he meets audrey
    stuartList = EventLogicUpdates.itemDropClear(stuartList, 355);
    $dataTroops[604].pages[0].list = stuartList;
  }
  dontStockStuart();

  // you can only buy 1 key and also it's a
  function clearKaeleyTalk() {
    let kaeleyList = JsonEx.makeDeepCopy(originalTroops[78].pages[0].list);

    // update her rules speech
    kaeleyList.forEach((listItem) => {
      if (
        listItem.code == 401 &&
        listItem.parameters[0].includes("Third rule is")
      ) {
        listItem.parameters[0] =
          "Third rule is okay to lock\\.-ck\\.-ck pick this time!\\.\\. Special rule";
      }
      if (listItem.code == 401 && listItem.parameters[0].includes("too easy")) {
        listItem.parameters[0] = "for randomizer only!";
      }
    });

    const choiceListItem = kaeleyList.find(
      (listItem) =>
        listItem.code === 102 &&
        listItem.parameters[0].length == 5 &&
        listItem.parameters[0][2] == "I want to buy a key.",
    );

    if (choiceListItem) {
      choiceListItem.parameters[0][2] = `<<[s[${APT_38_KAELEY_PURCHASE_SWITCH}]]>>I want to buy a key.`;
    }

    EventLogicUpdates.itemDropReplaceScript(
      kaeleyList,
      ITEM_CODE,
      `sSw(${APT_38_KAELEY_PURCHASE_SWITCH}, true);`,
    );

    kaeleyList = EventLogicUpdates.messageReplacement(
      kaeleyList,
      "Here, for you!",
      "APT_38_KAELEY_PURCHASE",
      "Here,",
      " for you! Another?",
    );

    kaeleyList
      .filter(
        (listItem) =>
          listItem.code === 102 &&
          listItem.parameters.length == 5 &&
          listItem.parameters[0][0].includes(">>Yes."),
      )
      .forEach(
        (loopChoiceListItem) =>
          (loopChoiceListItem.parameters[0][0] = `<<[s[${APT_38_KAELEY_PURCHASE_SWITCH}]]>>Yes.`),
      );

    $dataTroops[78].pages[0].list = kaeleyList;
  }
  clearKaeleyTalk();

  function updateSpiderHuskEvent() {
    let huskList = JsonEx.makeDeepCopy(originalTroops[655].pages[0].list);

    // the greeting that spider husk gives when you talk again
    const secondGreetingIndex = huskList.findIndex(
      (listItem) =>
        listItem.code === 401 && listItem.parameters[0].includes("Hi again."),
    );
    if (secondGreetingIndex !== -1) {
      huskList.splice(secondGreetingIndex + 1, 0, {
        code: 355,
        indent: huskList[secondGreetingIndex].indent,
        parameters: [
          "if (gVr(874) >= 2 && gVr(874) < 10) sVr(874, 1);", // if you messed up, start over
        ],
      });
    }

    huskList = EventLogicUpdates.itemDropClear(huskList, ARMOR_CODE);
    huskList = EventLogicUpdates.messageReplacement(
      huskList,
      "Beating Heart",
      "MUTT_SPIDER_HUSK_HEART",
    );

    $dataTroops[655].pages[0].list = huskList;
  }
  updateSpiderHuskEvent();

  function clearBenPlayPrizes() {
    let benList = JsonEx.makeDeepCopy(originalTroops[27].pages[0].list);

    // clear out video game, candy, and necklace gifts
    benList = EventLogicUpdates.itemDropClear(benList, ITEM_CODE);
    benList = EventLogicUpdates.itemDropClear(benList, ARMOR_CODE);

    // dont increment video game count
    benList = benList.filter(
      (listItem) =>
        !(listItem.code == SET_VAR_CODE && listItem.parameters[0] == 41),
    );

    benList = EventLogicUpdates.deleteMessage(
      benList,
      "He lets you borrow one of his favorite video games",
    );
    benList = EventLogicUpdates.deleteMessage(benList, "Kill to Shoot");
    benList = EventLogicUpdates.deleteMessage(benList, "Kill To Shoot");
    benList = EventLogicUpdates.deleteMessage(benList, "as you take it.");

    benList = EventLogicUpdates.deleteMessage(benList, "Teeth Pendant");

    // every play gets the last gift, so i message replace that one
    benList = EventLogicUpdates.messageReplacement(
      benList,
      "Chocky Bar",
      "APT_32_CHILD_BEDROOM_BEN_PLAY",
      "Receive",
    );

    $dataTroops[27].pages[0].list = benList;
  }
  clearBenPlayPrizes();

  function clearZacharyChewToy() {
    let zachList = JsonEx.makeDeepCopy(originalTroops[540].pages[0].list);

    //replace dialogue condition to not check for chew toy item
    zachList.find(
      (listItem) => listItem.code === 102 && listItem.parameters[0].length == 6,
    ).parameters[0][3] =
      `(([s[${SEWER_NE_CHEW_TOY_SWITCH}]]))How do I show her I'm a friend?`;

    // clear out chew toy
    EventLogicUpdates.itemDropReplaceScript(
      zachList,
      ITEM_CODE,
      `sSw(${SEWER_NE_CHEW_TOY_SWITCH}, true);`,
    );
    zachList = EventLogicUpdates.messageReplacement(
      zachList,
      "Chew Toy",
      "SEWER_NE_CHEW_TOY",
      "Receive",
    );

    $dataTroops[540].pages[0].list = zachList;
  }
  clearZacharyChewToy();

  function clearDavidRewards() {
    let davidList = JsonEx.makeDeepCopy(originalTroops[532].pages[0].list);

    davidList = EventLogicUpdates.itemDropClear(davidList, ITEM_CODE);
    davidList = EventLogicUpdates.deleteMessage(davidList, "Bandages");
    davidList = EventLogicUpdates.messageReplacement(
      davidList,
      "Elixir",
      "SEWER_DAVID_GIFT",
      "Receive",
    );

    $dataTroops[532].pages[0].list = davidList;
  }
  clearDavidRewards();

  function clearComatusGifts() {
    let comatusSwordList = JsonEx.makeDeepCopy(
      originalTroops[207].pages[12].list,
    );

    comatusSwordList = EventLogicUpdates.itemDropClear(
      comatusSwordList,
      WEAPON_CODE,
    );
    comatusSwordList = EventLogicUpdates.messageReplacement(
      comatusSwordList,
      "Whisperblade",
      "FUNGUS_COMATUS_COMBAT_VICTORY",
      "Receive",
    );

    $dataTroops[207].pages[12].list = comatusSwordList;

    let tadasanaList = JsonEx.makeDeepCopy(originalTroops[207].pages[0].list);

    tadasanaList = EventLogicUpdates.itemDropClear(tadasanaList, SKILL_CODE); // the skill grant item code
    tadasanaList = EventLogicUpdates.messageReplacement(
      tadasanaList,
      "Tadasana",
      "BOILER_ROOM_COMATUS_YOGA",
    );

    $dataTroops[207].pages[0].list = tadasanaList;
  }
  clearComatusGifts();

  // killing betrayed hellen gets you a drop
  function clearEnragedHellenDrops() {
    let enragedHellenList = JsonEx.makeDeepCopy(
      originalTroops[623].pages[7].list,
    );

    enragedHellenList = EventLogicUpdates.itemDropClear(
      enragedHellenList,
      WEAPON_CODE,
    );
    enragedHellenList = EventLogicUpdates.messageReplacement(
      enragedHellenList,
      "Gardening Shears",
      "APT_18_HELLEN_QUEST_BETRAY",
      "Receive",
    );

    $dataTroops[623].pages[7].list = enragedHellenList;
  }
  clearEnragedHellenDrops();

  function updateRatHoleShop() {
    let ratHoleList = JsonEx.makeDeepCopy(originalTroops[113].pages[0].list);

    let tradeSequenceStartIndex = ratHoleList.findIndex(
      (listItem) => listItem.code === 102 && listItem.parameters[0].length == 6,
    );
    let tradeSequenceEndIndex = ratHoleList.findIndex(
      (listItem) =>
        listItem.code === 118 && listItem.parameters[0] == "posttrade",
    );
    ratHoleList.splice(
      tradeSequenceStartIndex,
      tradeSequenceEndIndex - tradeSequenceStartIndex + 1,
      ...ShopHelpers.getRatHoleTradeList(),
    );

    $dataTroops[113].pages[0].list = ratHoleList;
  }
  updateRatHoleShop();

  function updateEmmanuelShop() {
    let emmanuelTroopList = JsonEx.makeDeepCopy(
      originalTroops[227].pages[0].list,
    );

    // need to specify because this conversation has multiple 6-choice choice blocks
    let tradeSequenceStartIndex = emmanuelTroopList.findIndex(
      (listItem) =>
        listItem.code === 102 &&
        listItem.parameters[0].length == 6 &&
        listItem.parameters[0][0].includes("Nail Bomb"),
    );
    // theres no end of trade sequence label, so we use the last option instead
    let tradeSequenceEndIndex = emmanuelTroopList.findIndex(
      (listItem) =>
        listItem.code === 402 &&
        listItem.parameters[0] == 5 &&
        listItem.parameters[1] == "Never mind.",
    );
    emmanuelTroopList.splice(
      tradeSequenceStartIndex,
      tradeSequenceEndIndex - tradeSequenceStartIndex + 1,
      ...ShopHelpers.getEmmanuelTradeList(),
    );

    $dataTroops[227].pages[0].list = emmanuelTroopList;
  }
  updateEmmanuelShop();

  function updateTickleShopGift() {
    let tickleTroopList = JsonEx.makeDeepCopy(
      originalTroops[415].pages[0].list,
    );

    tickleTroopList = EventLogicUpdates.itemDropClear(
      tickleTroopList,
      ITEM_CODE,
    );
    tickleTroopList = EventLogicUpdates.messageReplacement(
      tickleTroopList,
      "You receive 5x",
      "SEWER_N_TICKLES_GIFT",
      "You receive",
    );
    tickleTroopList = EventLogicUpdates.messageReplacement(
      tickleTroopList,
      "Tickle's Gift",
      "SEWER_N_TICKLES_DRAWING",
      "You receive",
    );
    let tradeSequenceStartIndex = tickleTroopList.findIndex(
      (listItem) =>
        listItem.code === 102 &&
        listItem.parameters[0].length == 6 &&
        listItem.parameters[0][0].includes("Bloodclot Bomb"),
    );
    // theres no end of trade sequence label, so we use the last option instead
    let tradeSequenceEndIndex = tickleTroopList.findIndex(
      (listItem) =>
        listItem.code === 402 &&
        listItem.parameters[0] == 5 &&
        listItem.parameters[1] == "Never mind.",
    );
    tickleTroopList.splice(
      tradeSequenceStartIndex,
      tradeSequenceEndIndex - tradeSequenceStartIndex + 1,
      ...ShopHelpers.getTickleTradeList(),
    );

    $dataTroops[415].pages[0].list = tickleTroopList;
  }
  updateTickleShopGift();

  function updateKevinShop() {
    let kevinList = JsonEx.makeDeepCopy(originalTroops[560].pages[0].list);

    let tradeSequenceStartIndex = kevinList.findIndex(
      (listItem) =>
        listItem.code === 102 &&
        listItem.parameters[0].length == 6 &&
        listItem.parameters[0][0].includes("Worm Juice"),
    );

    let tradeSequenceEndIndex = kevinList.findIndex(
      (listItem) =>
        listItem.code === 118 && listItem.parameters[0] == "posttrade",
    );
    kevinList.splice(
      tradeSequenceStartIndex,
      tradeSequenceEndIndex - tradeSequenceStartIndex + 1,
      ...ShopHelpers.getKevinTradeList(),
    );

    $dataTroops[560].pages[0].list = kevinList;
  }

  updateKevinShop();

  function clearLyleTrades() {
    let lyleList = JsonEx.makeDeepCopy(originalTroops[145].pages[0].list);

    // clear out all photo papers
    lyleList = EventLogicUpdates.itemDropClear(lyleList, ITEM_CODE);

    // make it always the correct photo case
    lyleList.find(
      (listItem) => listItem.code === 111 && listItem.parameters[1] == 245,
    ).parameters = [1, 245, 1, 245, 0];

    lyleList = EventLogicUpdates.messageReplacement(
      lyleList,
      "Photograph",
      "APT_21_SECOND_KISS_GIFT",
    );

    lyleList = EventLogicUpdates.messageReplacement(
      lyleList,
      "Photo Paper",
      "APT_21_FIRST_KISS_GIFT",
    );

    lyleList = lyleList.filter(
      (listItem) =>
        !(listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 476),
    ); // remove the switch that makes lyle primed to join

    $dataTroops[145].pages[0].list = lyleList;
  }
  clearLyleTrades();

  // use the player options to decide if the player can kill shopkeepers or not
  function setKillableShopkeepers() {
    let godMuttList = JsonEx.makeDeepCopy(originalTroops[157].pages[0].list);

    godMuttList.find(
      (listItem) =>
        listItem.code == 102 &&
        listItem.parameters[0].length == 3 &&
        listItem.parameters[0][1].includes("attack"),
    ).parameters[0][1] = `<<[!s[${CAN_KILL_SHOPKEEPERS_SWITCH}]]>>(Attack!)`;

    $dataTroops[157].pages[0].list = godMuttList;

    let eugeneList = JsonEx.makeDeepCopy(originalTroops[117].pages[0].list);

    eugeneList.find(
      (listItem) =>
        listItem.code == 102 &&
        listItem.parameters[0].length == 4 &&
        listItem.parameters[0][2].includes("Attack"),
    ).parameters[0][2] = `<<[!s[${CAN_KILL_SHOPKEEPERS_SWITCH}]]>>(Attack!)`;

    $dataTroops[117].pages[0].list = eugeneList;
  }
  setKillableShopkeepers();

  function clearErnestRecruit() {
    let ernestList = JsonEx.makeDeepCopy(originalTroops[520].pages[0].list);

    EventLogicUpdates.itemDropReplaceScript(
      ernestList,
      SET_SWITCH_CODE,
      "sSw(796, true); BattleManager.abort(); this.command115();",
      (listItem) => listItem.parameters[0] == 361,
    );

    $dataTroops[520].pages[0].list = ernestList;
  }
  clearErnestRecruit();

  function clearSpineGift() {
    let spineList = JsonEx.makeDeepCopy(originalTroops[167].pages[0].list);

    $dataTroops[167].pages[0].list = spineList;

    spineList = EventLogicUpdates.itemDropClear(spineList, WEAPON_CODE);

    spineList = EventLogicUpdates.messageReplacement(
      spineList,
      "Spine Dagger",
      "APT_33_MEAT_SPINE_GIFT",
      "Receive",
    );
    $dataTroops[167].pages[0].list = spineList;
  }
  clearSpineGift();

  function clearVendingMachineDeputization() {
    let muttShopList = JsonEx.makeDeepCopy(originalTroops[155].pages[0].list);

    // clear vending machine key item drop
    muttShopList = EventLogicUpdates.itemDropClear(muttShopList, ITEM_CODE);

    // dont increase the special offer price
    muttShopList = muttShopList.filter(
      (pageItem) =>
        !(pageItem.code == SET_VAR_CODE && pageItem.parameters[0] == 197),
    );

    muttShopList = EventLogicUpdates.messageReplacement(
      muttShopList,
      "Vending Machine Key",
      "MUTT_VENDING_MACHINE_KEY",
      "Receive",
    );
    $dataTroops[155].pages[0].list = muttShopList;
  }
  clearVendingMachineDeputization();
};

EventLogicUpdates.clearDoorEncounterDrops = function () {
  function clearPierreDoorMail() {
    let pierreTroopList = JsonEx.makeDeepCopy(originalTroops[80].pages[0].list);

    // replace mail drop
    pierreTroopList = EventLogicUpdates.messageReplacement(
      pierreTroopList,
      "Old Mail",
      "DOOR_PIERRE_GIFT",
      "Receive",
    );
    pierreTroopList = EventLogicUpdates.itemDropClear(
      pierreTroopList,
      ITEM_CODE,
    );
    $dataTroops[80].pages[0].list = pierreTroopList;
  }
  clearPierreDoorMail();

  function clearGenericDoorRecruit(index) {
    const recruitTroopList = JsonEx.makeDeepCopy(
      originalTroops[index].pages[0].list,
    );

    // the first thing recruiting does is add 1 to the people in apt count; overwrite this part
    const addRecruitCountIndex = recruitTroopList.findIndex(
      (listItem) =>
        listItem.code == SET_VAR_CODE && listItem.parameters[0] == 37,
    );
    if (addRecruitCountIndex !== -1)
      recruitTroopList[addRecruitCountIndex] = {
        code: 355,
        indent: recruitTroopList[addRecruitCountIndex].indent,
        parameters: [
          "sSw(24, false); DoorHelpers.processDoorRecruit(); BattleManager.abort(); this.command115();",
        ],
      };
    $dataTroops[index].pages[0].list = recruitTroopList;
  }

  function clearSophieDoorRecruit() {
    clearGenericDoorRecruit(63);
  }
  clearSophieDoorRecruit();
  function clearHellenDoorRecruit() {
    clearGenericDoorRecruit(58);
  }
  clearHellenDoorRecruit();
  function clearDanDoorRecruit() {
    clearGenericDoorRecruit(56);
  }
  clearDanDoorRecruit();

  // xaria and montgomery are different; the code sets either goth state or their recruit switch,
  // and has multiple dialogue options
  function clearXariaMontgomeryDoorRecruit() {
    const gothTroopList = JsonEx.makeDeepCopy(originalTroops[60].pages[0].list);

    for (let i = 0; i < gothTroopList.length; i++) {
      const listItem = gothTroopList[i];
      // adding them to apt
      if (listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 363) {
        gothTroopList[i] = {
          code: 355,
          indent: listItem.indent,
          parameters: [
            "sSw(24, false); DoorHelpers.processDoorRecruit(); BattleManager.abort(); this.command115();",
          ],
        };
      }
      // sets gothState
      if (listItem.code == SET_VAR_CODE && listItem.parameters[0] == 298) {
        gothTroopList[i] = {
          code: 355,
          indent: listItem.indent,
          parameters: [
            "sSw(24, false); DoorHelpers.processDoorRecruit(); BattleManager.abort(); this.command115();",
          ],
        };
      }
    }

    $dataTroops[60].pages[0].list = gothTroopList;
  }
  clearXariaMontgomeryDoorRecruit();

  // have to do this with her main apt and door encounter both
  function clearHarrietReunited() {
    for (const index of [33, 59]) {
      let harrietTroopList = JsonEx.makeDeepCopy(
        originalTroops[index].pages[0].list,
      );

      // remove all the healing item grants
      harrietTroopList = EventLogicUpdates.itemDropClear(
        harrietTroopList,
        ITEM_CODE,
      );

      // replace grant message
      harrietTroopList = EventLogicUpdates.messageReplacement(
        harrietTroopList,
        "Elixir",
        "DOOR_HARRIET_REUNITE",
        "Receive",
      );

      $dataTroops[index].pages[0].list = harrietTroopList;
    }
  }
  clearHarrietReunited();

  function clearPizzaDelivery() {
    let pizzaList = JsonEx.makeDeepCopy(originalTroops[49].pages[0].list);

    pizzaList = EventLogicUpdates.messageReplacement(
      pizzaList,
      "Hi, yeah",
      "DOOR_PIZZA",
      "Hi, yeah. You order a",
      "?",
    );

    pizzaList = EventLogicUpdates.messageReplacement(
      pizzaList,
      "Delivery guy.",
      "DOOR_PIZZA",
      "Delivery guy. You order a",
      "?",
    );

    pizzaList = EventLogicUpdates.messageReplacement(
      pizzaList,
      "I got a",
      "DOOR_PIZZA",
      "I got a",
    );

    pizzaList = EventLogicUpdates.messageReplacement(
      pizzaList,
      "Get ",
      "DOOR_PIZZA",
      "Get",
    );

    // buying pizza
    // the pizza is rewarded in a script
    EventLogicUpdates.itemDropReplaceScript(
      pizzaList,
      355,
      "DoorHelpers.processDoorEvent();",
      (listItem) => listItem.parameters[0].includes("$gameParty.gainItem"),
    );

    // make sure pizza tip location is only hit in situations where pizza dispo goes UP (tipping)
    EventLogicUpdates.itemDropReplaceScript(
      pizzaList,
      SET_VAR_CODE,
      "DoorHelpers.processDoorEvent(1);",
      (listItem) =>
        listItem.parameters[0] == 290 && listItem.parameters[2] == 1,
    );

    $dataTroops[49].pages[0].list = pizzaList;
  }
  clearPizzaDelivery();

  function clearFatherAndrew() {
    let andrewList = JsonEx.makeDeepCopy(originalTroops[64].pages[0].list);

    // remove all food and medicine drops
    EventLogicUpdates.itemDropReplaceScript(
      andrewList,
      ITEM_CODE,
      "DoorHelpers.processDoorEvent();",
    );

    andrewList = EventLogicUpdates.messageReplacement(
      andrewList,
      "Bandages",
      "DOOR_FATHER_ANDREW_GIFT",
      "",
    );

    andrewList = EventLogicUpdates.messageReplacement(
      andrewList,
      "Frozen Veggies",
      "DOOR_FATHER_ANDREW_GIFT",
      "",
    );

    //it's dangerous to splice a list while iterating through it but
    for (let i = 0; i < andrewList.length; i++) {
      // all cash event codes are for donating money
      let listItem = andrewList[i];
      if (listItem.code == CASH_CODE) {
        andrewList.splice(i + 1, 0, {
          code: 355,
          indent: andrewList[i].indent,
          parameters: ["DoorHelpers.processDoorEvent(1);"],
        });
      }
    }

    $dataTroops[64].pages[0].list = andrewList;
  }
  clearFatherAndrew();

  function clearNobodyItem() {
    let nobodyList = JsonEx.makeDeepCopy(originalTroops[71].pages[0].list);

    nobodyList = EventLogicUpdates.messageReplacement(
      nobodyList,
      "You pick up a",
      "DOOR_FREE_ITEM",
      "You pick up a",
      "!",
    );

    // replace 117 (common event call) to randomItemGet
    EventLogicUpdates.itemDropReplaceScript(
      nobodyList,
      117,
      "DoorHelpers.processDoorEvent();",
    );

    $dataTroops[71].pages[0].list = nobodyList;
  }
  clearNobodyItem();

  function clearWilliamPrizes() {
    let williamList = JsonEx.makeDeepCopy(originalTroops[61].pages[0].list);

    williamList = EventLogicUpdates.itemDropClear(williamList, CASH_CODE);

    // replace grant message
    williamList = EventLogicUpdates.messageReplacement(
      williamList,
      "Here... ",
      "DOOR_WILLIAM_PRIZE_1",
      "Here... let me give you",
      " for the help.",
    );

    // replace grant message
    williamList = EventLogicUpdates.messageReplacement(
      williamList,
      "saved my life",
      "DOOR_WILLIAM_PRIZE_2",
      `You might've saved my life. Let me give you \n${LookOutsideAPClient.getItemName("DOOR_WILLIAM_PRIZE_1")} and`,
      "\nfor the help.",
    );

    // william gives cash, so we need to replace that

    $dataTroops[61].pages[0].list = williamList;
  }
  clearWilliamPrizes();
};

let commonEventsUpdated = false;
let originalCommonEvents;
EventLogicUpdates.clearCommonEventDrops = function () {
  if (!commonEventsUpdated) {
    originalCommonEvents = JsonEx.makeDeepCopy($dataCommonEvents);
    commonEventsUpdated = true;
  }

  // clear out game skill drops from common events
  function clearGameSkills() {
    // filter out skill drops (code 318) from the game playing events (21->39)

    const gameToSkill = {
      21: 413, // wake the blood knight : blood madness
      22: 410, // wizards hell : painful stab
      23: 401, // superjumplad : jump attack
      24: 405, // jumplad 3 : numbness
      25: 418, // catafalque : risk taker
      26: 412, // honko : cash sock
      27: 402, // madwheels : nitro boost
      28: 416, // wraithscourge : dungeon dance
      29: 409, // massacre princess : meteor strike
      30: 411, // kill to shoot : aim the killshot
      31: 403, // myrmidon : combat medic
      32: 417, // myrmidon xii : garrison
      33: 404, // screamatorium : screamer
      34: 406, // frogit about it : croak orders
      35: 407, // blood ghoul orgy : hurt me plenty
      36: 408, // octocook : octostrike
      37: 414, // space truckerz : long haul flow
      38: 415, // reptile football : running tackle
      39: 419, // crossword challenge : confusing word
    };

    for (let i = 21; i <= 39; i++) {
      $dataCommonEvents[i].list = originalCommonEvents[i].list.filter(
        (listItem) => listItem.code !== SKILL_CODE,
      );

      if (
        $gamePlayer &&
        $gamePlayer.slotData &&
        $gamePlayer.slotData["include_game_skills"] == 0
      ) {
        // doing this makes it so the skill awarded even if you play this
        // in meat apt 33, but whatever
        if ($dataCommonEvents[i].list[0].code !== 355) {
          $dataCommonEvents[i].list = [
            {
              code: 355,
              indent: 0,
              parameters: [`InsertAPItems.insertSkill(${gameToSkill[i]});`],
            },
            ...$dataCommonEvents[i].list,
          ];
        }
      }
      // todo: alert the player to what they earned
    }
  }
  clearGameSkills();

  function clearCandyMachine() {
    $dataCommonEvents[219].list = ShopHelpers.getCandyMachineList();
  }
  clearCandyMachine();

  function clearNewDayEvent() {
    let newDayList = JsonEx.makeDeepCopy(originalCommonEvents[6].list);

    // set the checks for the individual nestor parts to always treat them as alive and advance their infection state
    newDayList
      .filter(
        (listItem) =>
          listItem.code === 111 &&
          [448, 449, 450, 451].includes(listItem.parameters[1]),
      )
      .forEach((listItem) => (listItem.parameters[1] = FALSE_SWITCH_ID));

    // always skip the check for if rat child can grow up
    newDayList
      .filter(
        (listItem) => listItem.code === 111 && listItem.parameters[1] == 1167,
      )
      .forEach((listItem) => (listItem.parameters[1] = TRUE_SWITCH_ID));
    $dataCommonEvents[6].list = newDayList;
  }
  clearNewDayEvent();

  function clearSleepEvent() {
    // clear wiggly fred moving into fridge
    $dataCommonEvents[9].list = JsonEx.makeDeepCopy(
      originalCommonEvents[9].list,
    ).filter(
      (listItem) =>
        !(listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 539),
    );
  }

  clearSleepEvent();

  // fix up explicit recruitments phillippe's remains and the rat baby thing home
  function clearReturnHomePhillippeRatbaby() {
    const returnHomeEventList = JsonEx.makeDeepCopy(
      originalCommonEvents[3].list,
    );

    const ratBabyInCheckIndex = returnHomeEventList.findIndex(
      (listItem) => listItem.code == 111 && listItem.parameters[1] == 365,
    );
    if (ratBabyInCheckIndex !== -1) {
      returnHomeEventList[ratBabyInCheckIndex].parameters[1] =
        APT_33_RECRUIT_RAT_BABY_SWITCH;

      const startClearIndex = ratBabyInCheckIndex + 1;

      // the last item of the rat baby event grants the achievement
      // use this index to know its bounds
      const endClearIndex = returnHomeEventList.findIndex(
        (listItem) =>
          listItem.code == 355 &&
          listItem.parameters[0].includes("Recruit_Rat"),
      );

      if (endClearIndex !== -1) {
        const newRatBabyListBlock = [
          {
            code: 355,
            indent: 4,
            parameters: [`sSw(${APT_33_RECRUIT_RAT_BABY_SWITCH}, true);`],
          },
          {
            code: 101,
            indent: 4,
            parameters: ["", 0, 0, 2, ""],
          },
          {
            code: 401,
            indent: 4,
            parameters: [
              "The little rat thing hops out of your bags and scampers off",
            ],
          },
          {
            code: 401,
            indent: 4,
            parameters: ["into your home."],
          },
          {
            code: ITEM_CODE,
            indent: 4,
            parameters: [5, 1, 0, 1],
          },
        ];

        returnHomeEventList.splice(
          startClearIndex,
          endClearIndex - startClearIndex,
          ...newRatBabyListBlock,
        );
        $dataCommonEvents[3].list = returnHomeEventList;
      }
    }

    const philHomeCheckIndex = returnHomeEventList.findIndex(
      (listItem) => listItem.code == 111 && listItem.parameters[1] == 499,
    );
    if (philHomeCheckIndex !== -1)
      returnHomeEventList[philHomeCheckIndex].parameters[1] =
        APT_33_RECRUIT_PHILLIPPE_SWITCH;

    const philHomeSetIndex = returnHomeEventList.findIndex(
      (listItem) =>
        listItem.code == SET_SWITCH_CODE && listItem.parameters[0] == 499,
    );
    if (philHomeSetIndex !== -1) {
      // code 121 includes switch on first and second index
      returnHomeEventList[philHomeSetIndex].parameters[0] =
        APT_33_RECRUIT_PHILLIPPE_SWITCH;
      returnHomeEventList[philHomeSetIndex].parameters[1] =
        APT_33_RECRUIT_PHILLIPPE_SWITCH;
    }
  }
  clearReturnHomePhillippeRatbaby();

  function clearAudreyShop() {
    $dataCommonEvents[216].list = ShopHelpers.getAudreyVendingMachineList();
  }
  clearAudreyShop();

  function clearAudreyGiftsRecruit() {
    let audreyEventList = JsonEx.makeDeepCopy(originalCommonEvents[217].list);

    // like aster, we can use the sybil story script to find where her recruitment code starts
    const audreyRecruitIndex = audreyEventList.findIndex(
      (listEntry) =>
        listEntry.code == 355 &&
        listEntry.parameters[0] == "setSybilMajorStory(64);",
    );
    if (audreyRecruitIndex !== -1)
      audreyEventList[audreyRecruitIndex].parameters[0] =
        "$gameSelfSwitches.setValue([92, 111, 'D'], true); this.command115();";

    audreyEventList.find(
      (listItem) =>
        listItem.code == 102 &&
        listItem.parameters[0][5] == "(([s[380]]))Need a place to stay?",
    ).parameters[0][5] = "(([v[755]<10]))Need a place to stay?";

    // clear out energy drink drop
    audreyEventList = EventLogicUpdates.itemDropClear(
      audreyEventList,
      ITEM_CODE,
    );
    audreyEventList = EventLogicUpdates.messageReplacement(
      audreyEventList,
      "Energy Drink",
      "F1_AUDREY_RESTOCK",
    );

    $dataCommonEvents[217].list = audreyEventList;
  }
  clearAudreyGiftsRecruit();

  function clearCarPrizeEvent() {
    let carEventList = JsonEx.makeDeepCopy(originalCommonEvents[60].list);
    // clear out shotgun/ammo drop and announcement
    carEventList = EventLogicUpdates.itemDropClear(carEventList, ITEM_CODE);
    carEventList = EventLogicUpdates.itemDropClear(carEventList, ARMOR_CODE);

    // delete item description
    carEventList = EventLogicUpdates.deleteMessage(
      carEventList,
      "a shotgun and ammo inside",
    );

    // clear out announcement
    $dataCommonEvents[60].list = EventLogicUpdates.messageReplacement(
      carEventList,
      "Shotgun",
      "B_CAR_TRUNK",
    );
  }
  clearCarPrizeEvent();

  // since incorrect and correct photos are different items,
  // set the photo index here
  function updateAsterOfferings() {
    const asterOfferingAcceptEventList = JsonEx.makeDeepCopy(
      originalCommonEvents[264].list,
    );
    // add a condition for incorrect photograph - item 365
    // update condition for correct photograph - item 340

    const regularPhotoCheckIndex = asterOfferingAcceptEventList.findIndex(
      (listItem) => listItem.code == "111" && listItem.parameters[3] == 340,
    );

    if (regularPhotoCheckIndex != -1) {
      // update case for correct photograph
      asterOfferingAcceptEventList.splice(regularPhotoCheckIndex, 0, {
        code: 355,
        indent: asterOfferingAcceptEventList[regularPhotoCheckIndex].indent + 1,
        parameters: ["sVr(245, 12);"], // ensures that the photograph is of the visitor
      });

      // add case for 365
      asterOfferingAcceptEventList.splice(
        regularPhotoCheckIndex - 1,
        0,
        ...[
          {
            code: 111,
            indent: 0,
            parameters: [1, 42, 0, 365, 0],
            collapsed: true,
          },

          {
            code: 355,
            indent: 1,
            parameters: ["sVr(245, 0);"], // photo of nothing
          },
          {
            code: 101,
            indent: 1,
            parameters: ["Portrait_Cultists", 0, 0, 2, "Aster"],
          },
          {
            code: 401,
            indent: 1,
            parameters: ["A photo envelope... does this hold the image of the"],
          },
          {
            code: 401,
            indent: 1,
            parameters: ["Visitor? Very well. \\C[03]We will take this."],
          },
          {
            code: 122,
            indent: 1,
            parameters: [36, 36, 1, 0, 1],
          },
          {
            code: 122,
            indent: 1,
            parameters: [593, 593, 0, 0, 365],
          },
          {
            code: 121,
            indent: 1,
            parameters: [213, 213, 0],
          },
          {
            code: ITEM_CODE,
            indent: 1,
            parameters: [365, 1, 0, 1],
          },
          {
            code: 121,
            indent: 1,
            parameters: [39, 39, 0],
          },
          {
            code: 0,
            indent: 1,
            parameters: [],
          },
          {
            code: 412,
            indent: 0,
            parameters: [],
          },
        ],
      );
    }

    $dataCommonEvents[264].list = asterOfferingAcceptEventList;

    const asterOfferingReturnEventList = JsonEx.makeDeepCopy(
      originalCommonEvents[265].list,
    );

    asterOfferingReturnEventList.splice(
      1,
      0,
      ...[
        {
          code: 111,
          indent: 0,
          parameters: [1, 593, 0, 365, 0],
        },
        {
          code: 121,
          indent: 1,
          parameters: [213, 213, 1],
        },
        {
          code: 122,
          indent: 1,
          parameters: [36, 36, 2, 0, 1],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 2, 0, 1, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: ["You receive \\C[3]{Incorrect Photograph}\\C[0]."],
        },
        {
          code: 0,
          indent: 1,
          parameters: [],
        },
      ],
    );

    $dataCommonEvents[265].list = asterOfferingReturnEventList;
  }
  updateAsterOfferings();

  function lockpicksNeverBreak() {
    let simpleLocks = JsonEx.makeDeepCopy(originalCommonEvents[184].list);

    // each use has a 15% chance to break the picks
    // but we can just set it so we're always above that 15%

    EventLogicUpdates.itemDropReplaceScript(
      simpleLocks,
      SET_VAR_CODE,
      "sVr(4, 99);",
      (listItem) => listItem.parameters[0] == 4,
    );

    $dataCommonEvents[184].list = simpleLocks;
  }
  lockpicksNeverBreak();

  function kaeleyLovesLockpicks() {
    $dataCommonEvents[262].list = [
      {
        code: 111,
        indent: 0,
        parameters: [0, 940, 0],
      },
      {
        code: 111,
        indent: 1,
        parameters: [0, 939, 1],
      },
      {
        code: 111,
        indent: 2,
        parameters: [1, 946, 0, 0, 0],
      },
      {
        code: 122,
        indent: 3,
        parameters: [946, 946, 0, 0, 1],
      },
      {
        code: 101,
        indent: 3,
        parameters: ["Portrait_Misc", 30, 0, 2, "Kaeley"],
      },
      {
        code: 401,
        indent: 3,
        parameters: ["That's ok-\\.k-\\.kay! This time can be picking game!"],
      },
      {
        code: 0,
        indent: 3,
        parameters: [],
      },
      {
        code: 412,
        indent: 2,
        parameters: [],
      },
      {
        code: 0,
        indent: 2,
        parameters: [],
      },
      {
        code: 412,
        indent: 1,
        parameters: [],
      },
      {
        code: 0,
        indent: 1,
        parameters: [],
      },
      {
        code: 412,
        indent: 0,
        parameters: [],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];
  }
  kaeleyLovesLockpicks();

  // eugene shop purchases; make them work for AP items
  function updateBuyItemTable() {
    let buyItemTable = JsonEx.makeDeepCopy(originalCommonEvents[46].list);

    // if 480 (itemamount) is -1, grant 0 items on purchase, and use preexisting name and description

    // the first item is the script
    buyItemTable[0] = {
      code: 355,
      indent: 0,
      parameters: ["EventLogicUpdates.buyItemTableScript();"],
    };

    buyItemTable = buyItemTable.filter((listItem) => listItem.code != 655);

    $dataCommonEvents[46].list = buyItemTable;
  }
  updateBuyItemTable();

  function updateMortonRecruitEvent() {
    let mortonTrading = JsonEx.makeDeepCopy(originalCommonEvents[214].list);

    mortonTrading.find(
      (listItem) => listItem.code === 111 && listItem.parameters[1] == 410,
    ).parameters[3] = 99; // set recruit condition to never pass

    $dataCommonEvents[214].list = mortonTrading;
  }
  updateMortonRecruitEvent();

  function updateMortonPrizes() {
    $dataCommonEvents[110].list = ShopHelpers.getGiveJunkRewardsList();
  }
  updateMortonPrizes();

  function nestorAlsoRestocks() {
    let nestorEugeneRestock = JsonEx.makeDeepCopy(
      originalCommonEvents[89].list,
    );

    // finds the check for if infestation > 3
    // and sets it to 99
    nestorEugeneRestock.find(
      (listItem) => listItem.code === 111 && listItem.parameters[1] == 434,
    ).parameters[3] = 99;

    $dataCommonEvents[89].list = nestorEugeneRestock;
  }
  nestorAlsoRestocks();

  function clearResetPaintings() {
    let paintingsList = JsonEx.makeDeepCopy(originalCommonEvents[43].list);

    // clear painting exchange
    paintingsList = EventLogicUpdates.itemDropClear(paintingsList, ITEM_CODE);

    $dataCommonEvents[43].list = paintingsList;
  }
  clearResetPaintings();
};

EventLogicUpdates.buyItemTableScript = () => {
  // set price like normal
  if (gVr(941) == 0) {
    sVr(941, 1);
  }
  if (gVr(483) == 0) {
    sVr(483, gVr(481).price);
  }
  sVr(483, gVr(483) * gVr(941));

  if (gVr(480) != "!") {
    if (gVr(486) == "") {
      sVr(486, gVr(481).name);
    }
    if (gVr(482) == "") {
      sVr(482, gVr(481).description);
    }

    if (gVr(480) == 0) {
      sVr(480, 1);
    }
    if (gVr(480) > 1) {
      sVr(486, "x" + gVr(480) + " " + gVr(486));
      sVr(483, gVr(483) * gVr(480));
    }
  } else {
    sVr(480, 0);
    sVr(482, "---");
  }
};

// manage what dinner talks are allowed
const oldIsTalkAllowed = isTalkAllowed;

isTalkAllowed = function () {
  const evIndex = gVr(514);
  if (evIndex == 360) return false; // wiggly fred gives the player his ring
  return oldIsTalkAllowed();
};
