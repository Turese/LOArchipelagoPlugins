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

EventLogicUpdates.buildConditions = function (selfSwitch, switch1) {
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
  return conditions;
};

const EMPTY_PAGE = {
  conditions: EventLogicUpdates.buildConditions(),
  directionFix: false,
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
          if (listItem.code === 126)
            // remove the explicit drops of the 3 video games
            // the starting food and soap and toothpaste can stay
            return ![413, 417, 421].includes(listItem.parameters[0]);
          if (listItem.code === 122) return listItem.parameters[0] !== 41; // don't set video game count var=41 either
          return listItem.code !== 230; // remove the 60 frame waits for good measure
        });
        startingpage.list = newList;
        startingpage.list.push({
          code: 355,
          indent: 1,
          // foughtwoundedman = true; allows hallway encounters
          // self switch ensures stairwell door never allows early papineau
          // and also sets number of freds to 10 here so player doesnt have to speak to faceless
          parameters: [
            `sSw(94, true); $gameSelfSwitches.setValue([27, 8, 'B'], true); $gameSelfSwitches.setValue([27, 7, 'B'], true); sSw(${TRUE_SWITCH_ID}, true);
    sSw(${FALSE_SWITCH_ID}, false); sVr(306, 10);`,
          ],
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
};

// if an event has a basic item drop + get message structure
// we can do it easily here

//codes:
//126 = item drop
//127 = weapon
//128 = armor
EventLogicUpdates.itemDropClear = function (originalList, code) {
  return originalList.filter((listItem) => listItem.code !== code);
};

EventLogicUpdates.deleteMessage = function (originalList, keyWord) {
  return originalList.filter(
    (listItem) =>
      !(listItem.code == 401 && listItem.parameters[0].includes(keyWord)),
  );
};

EventLogicUpdates.messageReplacement = function (
  originalList,
  keyWord,
  itemId,
  introword = "Find",
) {
  const newList = JsonEx.makeDeepCopy(originalList);
  const itemGetMessageIndex = newList.findIndex(
    (listItem) =>
      listItem.code == 401 && listItem.parameters[0].includes(keyWord),
  );
  if (itemGetMessageIndex !== -1) {
    newList[itemGetMessageIndex].parameters[0] =
      `${introword} ${LookOutsideAPClient.getItemName(itemId)}.`;
  }
  return newList;
};

EventLogicUpdates.applyEventUpdates = function (lastLoadedMapId, ev) {
  function fixWoundedManDoor() {
    if (lastLoadedMapId === 23 && ev.id === 40) {
      ev.pages[1].conditions = ev.pages[0].conditions;
      // set the page that lets you in to the bathroom unarmed on hardmode to always hit
    }
  }
  fixWoundedManDoor();

  // screw the elevator game, just let me go to 4
  function fixElevatorButtons() {
    if (lastLoadedMapId === 74 && ev.id === 2) {
      // at the start of the event, set the elevator game to be finished.
      // make sure you only add the elevator function set once
      ev.pages[1].list[0] = {
        code: 355,
        indent: 1,
        parameters: ["sVr(1, 0), sVr(817, 4)"],
      };
    }
  }
  fixElevatorButtons();

  // update page 2 of the apt 21 key event to trigger grinning beast if you walk over it
  function leighRematch() {
    if (lastLoadedMapId === 7 && ev.id === 1) {
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
    }
  }
  leighRematch();

  function clearLeighQuest() {
    if (lastLoadedMapId == 434 && ev.id == 1) {
      // clear martin's ring
      ev.pages[0].list = EventLogicUpdates.itemDropClear(ev.pages[0].list, 128);
      ev.pages[0].list = EventLogicUpdates.itemDropClear(ev.pages[0].list, 318); // clear skill grants
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
    }
  }
  clearLeighQuest();

  // make it so grasshopper doesnt leave after leighs quest
  function permaGrasshopper() {
    if (lastLoadedMapId == 7 && ev.id == 60) {
      if (ev.pages.length > 4) ev.pages.splice(3, 1);
    }
  }
  permaGrasshopper();

  // removes the switch setters that set 119 = false when walking east after fighting the beast
  function leighWillWait() {
    if (lastLoadedMapId == 186) {
      if (ev.id == 5 || ev.id == 3 || ev.id == 2) {
        ev.pages[0].list = ev.pages[0].list.filter(
          (listEntry) => listEntry.code !== 121,
        );
      }
    }
  }
  leighWillWait();

  const recruitLeaveCondition = EventLogicUpdates.buildConditions("D");
  // for overworld recruits; the switch that makes them leave their spots
  // if recruited is replaced with self switch D
  function forceRecruitsToStay() {
    // leigh
    if (lastLoadedMapId == 93 && ev.id == 3) {
      ev.pages[2].conditions = recruitLeaveCondition;
    }

    // lyle
    if (lastLoadedMapId == 9 && ev.id == 14) {
      ev.pages[6].conditions = recruitLeaveCondition;
    }

    // aster
    if (lastLoadedMapId == 7 && ev.id == 14) {
      // he cant leave until he is recruited because he's needed for offerings
      ev.pages[4].conditions = {
        ...ev.pages[4].conditions,
        ...{ selfSwitchCh: "D", selfSwitchValid: true },
      };
    }

    // audrey
    if (lastLoadedMapId == 92) {
      if (ev.id == 111) {
        ev.pages[5].conditions = {
          // same as aster, she needs to be reachable at all times
          ...ev.pages[5].conditions,
          ...{ selfSwitchCh: "D", selfSwitchValid: true },
        };
      }
      if (ev.id == 113) {
        // page that sets audrey events
        // also disabled on recruit
        if (ev.pages.length >= 2) {
          ev.pages.splice(1, 1);
        }
      }
      if (ev.id == 114) {
        // page that sets audrey pose when player gets close
        // also disabled on recruit
        if (ev.pages.length >= 2) {
          ev.pages.splice(1, 1);
        }
      }
    }

    // spider
    // make spider leave after player recruits it
    if (lastLoadedMapId == 326 && ev.id == 4) {
      if (ev.pages.length < 2) {
        ev.pages.push({
          ...EMPTY_PAGE,
          conditions: EventLogicUpdates.buildConditions("A"),
        });
      }
    }

    //joel

    //papineau
  }
  forceRecruitsToStay();

  function fixMaskShadeSpawns() {
    // make stumbling shade on f4 spawn immediately
    // instead of be triggered by old tape

    if (lastLoadedMapId == 451 && ev.id == 7) {
      ev.pages[0].conditions = EventLogicUpdates.buildConditions();
    }
    // crawling shade sets its own self switch to D right away for no reason
    if (lastLoadedMapId == 325 && ev.id == 5) {
      ev.pages[0].list = EMPTY_PAGE.list;
    }
    // writhing shade --- needs to not erase itself
    // same with moaning shade
    // and crawling shade from spider's stairs
    if (
      (lastLoadedMapId == 380 && ev.id == 2) ||
      (lastLoadedMapId == 401 && ev.id == 6) ||
      (lastLoadedMapId == 325 && ev.id == 5)
    ) {
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
    }
  }
  fixMaskShadeSpawns();

  // allows each tooth family phase to spawn even if theyve been killed in another form
  function fixToothFamilySpawnTriggers() {
    if (lastLoadedMapId == 32 && ev.id == 7) {
      ev.pages = ToothHelpers.JoelPages;
    }

    if (lastLoadedMapId == 34 && ev.id == 20) {
      ev.pages = ToothHelpers.MadisonPages;
    }

    // day5 clint
    // he has less complicated logic since
    // his day 5 form is a different event than his day 2-4 form
    if (lastLoadedMapId == 31 && ev.id == 35 && ev.pages.length == 5) {
      ev.pages.splice(3, 1); // clear page that checks 'killedClint'
      // todo: set his indoor spawn to depend on the day
    }

    if (lastLoadedMapId == 435) {
      if (ev.id == 2 && ev.pages.length == 7) {
        // joel
        ev.pages.splice(5, 2); // clear last2 pages that check 'removeJoel' and 'recruitedJoel'
        ev.pages.splice(3, 1); // clear page that checks 'killedJoel'
      }
      if (ev.id == 4 && ev.pages.length == 3) {
        // mound of teeth and gums
        ev.pages.splice(1, 1); // clear page that checks 'killedBen'
      }
      if (ev.id == 3 && ev.pages.length == 5) {
        // madison
        ev.pages.splice(3, 1); // clear page that checks 'killedMadison'
      }
      if (ev.id === 1 && ev.pages.length == 5) {
        // clint
        ev.pages.splice(3, 1); // clear page that checks 'killedClint'
      }
    }
  }
  fixToothFamilySpawnTriggers();

  // allows wiggly fred to spawn in the fred apt even if he lives in your fridge
  function fixWigglyFredRecruitMechanics() {}

  // forced piranha guy to never despawn
  // forces piranhas to always spawn even if piranha guy is dead
  function fixPiranhaLogic() {
    // todo: delete page four on piranhaman event page room 133 evt 10
    // add action that forces piranhasactive to become true no matter what when exiting twilight closet: room 135 event 7
  }

  // don't block bookcase when eugene is posessed by nestor
  function unblockEugeneBookcase() {
    // remove page 2 of bookcase event (room 332, event 3)
  }

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

  function clearSecurityEvent() {
    if (lastLoadedMapId == 78) {
      if (ev.id == 31) {
        // panopticon / chair event
        // dont take or give back guinea pig
        ev.pages.forEach(
          (page) =>
            (page.list = EventLogicUpdates.itemDropClear(page.list, 126)),
        );
      }
      if (ev.id == 3) {
        // vhs event

        // dont take players tape when recording
        ev.pages[0].list = EventLogicUpdates.itemDropClear(
          ev.pages[0].list,
          126,
        );

        // on page 0, dont allow player to record unless it's the correct feed

        ev.pages[0].list.forEach((listItem) => {
          // the game prompts the player twice
          // since they can also record over a cctv
          if (
            listItem.code === 102 &&
            listItem.parameters[0][0].includes("Yes.")
          )
            listItem.parameters[0][0] = `<<[!v[158]=8]>>Yes.`;
        });

        ev.pages[2].list = EventLogicUpdates.itemDropClear(
          ev.pages[2].list,
          126,
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
        console.log(ev.pages);
      }
    }
  }
  clearSecurityEvent();

  function clearProjectorEvent() {
    if (lastLoadedMapId === 38 && ev.id === 8) {
      // page 1 is projector head down / turned off
      let projectorList = ev.pages[1].list;

      // replace the exposed paper grant with switch set
      const getPhotoPaperIndex = projectorList.findIndex(
        (listItem) => listItem.code == 126 && listItem.parameters[0] == 339,
      );
      if (getPhotoPaperIndex !== -1) {
        projectorList.splice(getPhotoPaperIndex, 1, {
          code: 355,
          indent: projectorList[getPhotoPaperIndex].indent,
          parameters: [`sSw(${APT_37_PROJECTOR_ROOM_PHOTO_SWITCH}, true);`],
        });
      }
      // clear out the part where it takes your photo paper
      projectorList = EventLogicUpdates.itemDropClear(projectorList, 126);

      // make sure we dont update what's on the photograph when doing this
      projectorList = projectorList.filter(
        (listItem) => !(listItem.code == 122 && listItem.parameters[0] == 245),
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
    }
  }
  clearProjectorEvent();

  function clearF3HallwayPlanterEvent() {
    if (lastLoadedMapId === 6 && ev.id === 13) {
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
      ev.pages[0].list = ev.pages[0].list.filter(
        (listItem) => listItem.code !== 126,
      );
    }
  }
  clearF3HallwayPlanterEvent();

  function clearF3HallwayVendingMachineEvent() {
    if (lastLoadedMapId === 6 && ev.id === 25) {
      // theres too many things to change here so im
      // just recreating the page
      const cardTrickName = LookOutsideAPClient.getItemName(
        "F3_PLAYING_CARD",
        true,
      );
      const cheezName = LookOutsideAPClient.getItemName(
        "F3_VENDING_MACHINE_CHEESE",
        true,
      );
      const chipsName = LookOutsideAPClient.getItemName(
        "F3_VENDING_MACHINE_CHIPS",
        true,
      );
      const spicyChipsName = LookOutsideAPClient.getItemName(
        "F3_VENDING_MACHINE_SPICY",
        true,
      );
      const gummiBearName = LookOutsideAPClient.getItemName(
        "F3_VENDING_MACHINE_GUMMI_BEARS",
        true,
      );
      const onionOsName = LookOutsideAPClient.getItemName(
        "F3_VENDING_MACHINE_ONIONOS",
        true,
      );

      ev.pages[1].list = ShopHelpers.getF3VendingMachineList(
        cardTrickName,
        cheezName,
        chipsName,
        spicyChipsName,
        gummiBearName,
        onionOsName,
      );
    }
  }
  clearF3HallwayVendingMachineEvent();

  function clearCoffeeMachineEvent() {
    if (lastLoadedMapId === 47 && ev.id === 43) {
      if (ev.pages.length < 2) {
        const coffeeGrantIndex = ev.pages[0].list.findIndex(
          (listItem) => listItem.code == 126 && listItem.parameters[0] == 41,
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
    }
  }
  clearCoffeeMachineEvent();

  function clearCandyMachine() {
    $dataCommonEvents[219].list = ShopHelpers.getCandyMachineList();
  }
  clearCandyMachine();

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
        ev.pages[1].conditions = EventLogicUpdates.buildConditions("A");
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

  function clearglitchElixirDrops() {
    if (lastLoadedMapId === 441 && ev.id === 7) {
      const filteredList = EventLogicUpdates.itemDropClear(
        ev.pages[0].list,
        126,
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
    }
  }
  clearglitchElixirDrops();

  function clearAmbroseDrops() {
    if (lastLoadedMapId === 442 && ev.id === 9) {
      const filteredList = ev.pages[0].list.filter(
        (listItem) => listItem.code !== 126, // dont add ambrose bits to inventory
      );

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
    }
  }
  clearAmbroseDrops();

  // removes both loose manuscript drop and the message telling player they got it
  function clearTypewritherDrop() {
    if (lastLoadedMapId === 115 && ev.id === 2) {
      // item drops on first 2 pages
      for (let i = 0; i <= 1; i++) {
        ev.pages[i].list = ev.pages[i].list.filter(
          (listItem) => ![126, 101, 401].includes(listItem.code),
        );
      }
    }
  }
  clearTypewritherDrop();

  // instead of setting and checking for variable 231, typewriter sets and checks self state A
  function clearManuscriptCompletion() {
    if (lastLoadedMapId === 118 && ev.id === 5) {
      // remove where it sets the manuscriptfull switch
      const completeManuscriptIndex = ev.pages[0].list.findIndex(
        (listItem) => listItem.code == 121,
      );
      if (completeManuscriptIndex !== -1) {
        ev.pages[0].list[completeManuscriptIndex] = {
          code: 355,
          indent: 0,
          parameters: ["$gameSelfSwitches.setValue([118, 5, 'A'], true)"],
        };
      }

      const completeManuscriptMessageIdx = ev.pages[0].list.findIndex(
        (listItem) =>
          listItem.code == 401 &&
          listItem.parameters[0] ==
            "You add the sheet to the incomplete manuscript.",
      );
      if (completeManuscriptMessageIdx !== -1) {
        ev.pages[0].list[completeManuscriptMessageIdx].parameters[0] =
          `Find ${LookOutsideAPClient.getItemName("APT_27_COMPLETE_MANUSCRIPT")}.`;
      }

      ev.pages[1].conditions = EventLogicUpdates.buildConditions("A");
    }
  }
  clearManuscriptCompletion();

  function clearCribDrop() {
    if (lastLoadedMapId === 101 && ev.id === 5) {
      // find where it sets the switch ratChasePrime
      const ratChaseTriggerIndex = ev.pages[0].list.findIndex(
        (listItem) => listItem.code == 121,
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
    }
  }
  clearCribDrop();

  // make it so killing lyle wont drop the darkroom key
  // remove both item grant and alert message
  function clearShutterbugDrop() {
    if (lastLoadedMapId === 9 && ev.id === 14) {
      // all first 3 event states have the drop
      for (let i = 0; i <= 2; i++) {
        ev.pages[i].list = ev.pages[i].list.filter(
          (listItem) => listItem.code !== 126 && listItem.code !== 401,
        );
      }
    }
  }
  clearShutterbugDrop();

  function clearJeanneLaundry() {
    if (lastLoadedMapId === 69 && ev.id === 65) {
      const filteredList = ev.pages[0].list.filter((listItem) => {
        return listItem.code !== 126; // dont add laundry to inventory
      });

      filteredList
        .filter(
          (listItem) =>
            listItem.code === 401 &&
            listItem.parameters[0].contains("Jeanne's clothes."),
        )
        .forEach((listItem) => {
          listItem.parameters[0] = listItem.parameters[0].replace(
            "Jeanne's clothes",
            LookOutsideAPClient.getItemName("LAUNDRY_JEANNES_LAUNDRY"),
          );
        });
      ev.pages[0].list = filteredList;
    }
  }
  clearJeanneLaundry();

  function clearLandlordCache() {
    if (lastLoadedMapId === 180 && ev.id === 15) {
      // remove dollar coin item drop

      ev.pages[0].list = EventLogicUpdates.itemDropClear(ev.pages[0].list, 126);
      ev.pages[0].list = EventLogicUpdates.messageReplacement(
        ev.pages[0].list,
        "Dollar Coin",
        "LL_SECRET_DINING_CACHE",
      );
    }
  }
  clearLandlordCache();

  function clearLandlordDigSpot() {}
  clearLandlordDigSpot();
  // all the basement key drops
  // only check if player already has basement key
  // so we need them to check a custom switch instead
  function fixBasementKeyConditions() {
    if (
      (lastLoadedMapId == 184 && ev.id == 1) ||
      (lastLoadedMapId == 204 && ev.id == 22) ||
      (lastLoadedMapId == 206 && ev.id == 13) ||
      (lastLoadedMapId == 130 && ev.id == 11)
    ) {
      ev.pages[1].conditions = EventLogicUpdates.buildConditions(
        null,
        LL_BASEMENT_KEY_SWITCH,
      );
    }
  }
  fixBasementKeyConditions();

  function clearErnestCheeseStash() {
    if (lastLoadedMapId === 309 && ev.id === 19) {
      ev.pages[0].list = EventLogicUpdates.itemDropClear(ev.pages[0].list, 126);
      ev.pages[0].list = EventLogicUpdates.messageReplacement(
        ev.pages[0].list,
        "Cheese",
        "ERNEST_CHEESE",
      );
    }
  }
  clearErnestCheeseStash();

  function clearRoachQuestPrize() {
    if (lastLoadedMapId === 3 && ev.id === 121) {
      ev.pages[2].list = EventLogicUpdates.itemDropClear(ev.pages[2].list, 128);

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
    }
  }
  clearRoachQuestPrize();

  function clearSadipedePrize() {
    if (lastLoadedMapId === 457 && ev.id === 1) {
      ev.pages[3].list = EventLogicUpdates.itemDropClear(ev.pages[3].list, 126);

      ev.pages[3].list = EventLogicUpdates.messageReplacement(
        ev.pages[3].list,
        "is now following you around",
        "F4_SADIPEDE_COMBAT_LOSS",
      );
    }
  }
  clearSadipedePrize();

  // the key in the darkroom vanishes when lyle is recruited
  function fixDarkRoomItem() {
    if (lastLoadedMapId == 112 && ev.id == 14) {
      if (ev.pages.length >= 2) {
        ev.pages.splice(1, 1);
      }
    }
  }
  fixDarkRoomItem();

  function clearRaftaLetter() {
    if (lastLoadedMapId === 94 && ev.id === 9) {
      ev.pages[0].list = EventLogicUpdates.itemDropClear(ev.pages[0].list, 126);
      ev.pages[0].list = EventLogicUpdates.messageReplacement(
        ev.pages[0].list,
        "Love Letter",
        "F1_LETTER_FROM_RAFTA",
      );
    }
  }
  clearRaftaLetter();

  function clearOozeMachine() {
    if (lastLoadedMapId === 50 && ev.id === 12) {
      // blank conditions; remove danger req
      ev.pages[0].conditions = EventLogicUpdates.buildConditions();

      ev.pages[0].list = ShopHelpers.getOozeMachineList();
    }
  }
  clearOozeMachine();

  function clearDeadFredDrops() {
    // facetaker
    if (lastLoadedMapId == 96 && ev.id == 12) {
      ev.pages.forEach((page) => {
        // canvas carry bag and torn off face
        page.list = EventLogicUpdates.itemDropClear(page.list, 126);
        page.list ==
          EventLogicUpdates.deleteMessage(page.list, "Canvas Carry Bag");
        page.list == EventLogicUpdates.deleteMessage(page.list, "Face");
      });
    }
    // toxic fred/paintlings/hat stained key drops
    if (
      (lastLoadedMapId == 217 && ev.id == 8) ||
      (lastLoadedMapId == 217 && ev.id == 7) ||
      (lastLoadedMapId == 236 && ev.id == 16) ||
      (lastLoadedMapId == 236 && ev.id == 18) ||
      (lastLoadedMapId == 236 && ev.id == 19) ||
      (lastLoadedMapId == 42 && ev.id == 6) ||
      (lastLoadedMapId == 237 && ev.id == 14) ||
      (lastLoadedMapId == 119 && ev.id == 13)
    ) {
      ev.pages.forEach((page) => {
        page.list = EventLogicUpdates.itemDropClear(page.list, 126);
        // some drops have different capitalization
        page.list = EventLogicUpdates.deleteMessage(page.list, "Stained key");
      });
    }
    // true fred; his state gets reset when you kill him
    if (lastLoadedMapId == 239 && ev.id == 6) {
      ev.pages.forEach((page) => {
        // dont let his state get set to 99
        page.list = page.list.filter(
          (listItem) =>
            !(listItem.code == 122 && listItem.parameters[0] == 300),
        );
      });
    }
  }
  clearDeadFredDrops();

  function fixRoxieRoomItemDoubleEntry() {
    // two of the items in roxie's room in the sewers have two separate pages
    // since theyre different items on hard mode
    // we will delete the second entries
    if (lastLoadedMapId == 259 && (ev.id == 3 || ev.id == 17)) {
      if (ev.pages.length > 2) {
        ev.pages.splice(1, 1);
      }
    }
  }
  fixRoxieRoomItemDoubleEntry();

  function clearGrateLever() {
    if (lastLoadedMapId == 256 && ev.id == 3) {
      ev.pages[1].list = EventLogicUpdates.itemDropClear(
        ev.pages[1].list,
        111, // = set switch
      );
    }
  }
  clearGrateLever();

  function returnTickle() {}
  returnTickle();

  function clearAudreyBossDrops() {}
  clearAudreyBossDrops();

  function fixLaughingMoldSpawn() {}
  fixLaughingMoldSpawn();

  function clearBlackoutIrisKey() {}
  clearBlackoutIrisKey();

  function clearRatFreakGift() {}
  clearRatFreakGift();

  function clearBurritoRatGift() {}
  clearBurritoRatGift();

  function clearComatusYoga() {}
  clearComatusYoga();

  function clearHellenQuestPrizes() {}
  clearHellenQuestPrizes();

  function clearSecretDoorLockout() {
    if (lastLoadedMapId === 30 && ev.id === 6) {
      ev.pages[2].list = SECRET_DOOR_LIST;
      if (ev.pages.length > 5) {
        ev.pages.splice(3, 1);
        // remove page that says there was never a door
      }
    }
  }
  clearSecretDoorLockout();
};

EventLogicUpdates.clearAllEnemiesDrops = function () {
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
EventLogicUpdates.clearTroopsDrops = function () {
  if (!troopsUpdated) {
    originalTroops = JsonEx.makeDeepCopy($dataTroops);
    troopsUpdated = true;
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
    let maskedShadowTroop = JsonEx.makeDeepCopy(originalTroops[18]);

    let maskedShadowTroopList = maskedShadowTroop.pages[0].list;

    maskedShadowTroopList = maskedShadowTroopList.filter(
      (page) => page.code !== 126,
    );

    maskedShadowTroopList.find(
      (listItem) =>
        listItem.code === 401 && listItem.parameters[0].contains("a tongue"),
    ).parameters[0] =
      `and appears to be... a ${LookOutsideAPClient.getItemName("MASKED_SHADOW_TONGUE")}.`;

    maskedShadowTroopList.find(
      (listItem) =>
        listItem.code === 401 && listItem.parameters[0].contains("Tongue"),
    ).parameters[0] =
      `You receive a ${LookOutsideAPClient.getItemName("MASKED_SHADOW_TONGUE")}.`;

    // dont want player to refuse it, so i'll set 'refuse it' to be grayed
    // out on a condition guaranteed to be true (current shadow interaction = 5 i.e. this one)
    maskedShadowTroopList.find(
      (listItem) =>
        listItem.code === 102 && listItem.parameters[0][0].contains("Take it."),
    ).parameters[0][1] = `<<[v[150]=5]>>Refuse it`;

    // remove the explicit recruit check variable setting
    maskedShadowTroopList = maskedShadowTroopList.filter(
      (listItem) => !(listItem.code == 121 && listItem.parameters[0] === 27),
    );

    // set chosen gift to always be 1 to make it
    // easier to overwrite that event as well
    const shadowGiftPickingIndex = maskedShadowTroopList.findIndex(
      (listItem) => listItem.code === 122 && listItem.parameters[0] === 155,
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

    // make the recruit option hit self switch instead, and then end there.
    const leighRecruitIndex = leighTroopList.findIndex(
      (listEntry) => listEntry.code == 121 && listEntry.parameters[0] == 34,
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

  function clearJoelRecruitmentEvent() {}
  clearJoelRecruitmentEvent();

  function clearRoachesRecruitmentEvent() {
    const roachTroopList = JsonEx.makeDeepCopy(originalTroops[279]).pages[0]
      .list;

    // clear out the part that sets roaches as a recruit;
    // we can already use roach event >= 40 as the location check
    $dataTroops[279].pages[0].list = roachTroopList.filter(
      (listEntry) => !(listEntry.code == 121 && listEntry.parameters[0] == 249),
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
      (listItem) => listItem.code == 122 && listItem.parameters[0] == 787,
    ).parameters[4] = 99;

    $dataTroops[359].pages[1].list = spiderInterviewList;

    const spiderRecruitList = JsonEx.makeDeepCopy(
      originalTroops[359].pages[5].list,
    );

    const spiderRecruitIndex = spiderRecruitList.findIndex(
      (listItem) => listItem.code == 121 && listItem.parameters[0] == 375,
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

  function clearPapineauRecruitmentEvent() {}
  clearPapineauRecruitmentEvent();

  function clearJeannePrizeEvent() {
    // clear out elixir prize
    // clear out 50 dollar prize
    // make sure we dont clear out the laundry removal
    let jeanneTroopList = JsonEx.makeDeepCopy(
      originalTroops[479],
    ).pages[0].list.filter(
      (listItem) =>
        listItem.code !== 125 ||
        !(listItem.code === 126 && listItem.parameters[0] == 16),
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
      (listItem) => listItem.code === 126,
    );
    // make nestor go to rafta even if you dont make a good case
    // filter out all places where we set nestorstate and then force state = 10 (he goes to rafta)
    nestorTroopList = nestorTroopList.filter(
      (listItem) => !(listItem.code == 122 && listItem.parameters[0] == 281),
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

  function clearSapperDrop() {
    let sapperTroopList = JsonEx.makeDeepCopy(
      originalTroops[293].pages[0].list,
    );

    // dont delete the sapper trade, but do delete the initial 2 sapper gift
    sapperTroopList = sapperTroopList.filter(
      (listItem) => listItem.code !== 126 && listItem.parameters[3] == 2,
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
      127,
    );
    minesweeperTroopList = EventLogicUpdates.itemDropClear(
      minesweeperTroopList,
      126,
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
        !(listItem.code === 126 && listItem.parameters[0] == 384) && // jaspers key
        !(listItem.code === 126 && listItem.parameters[0] == 314) && // roof access key
        !(listItem.code === 128 && listItem.parameters[0] == 23), // dark robes
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
      (listItem) => !(listItem.code == 122 && listItem.parameters[0] == 306),
    );

    // clear all item drops
    faceTakerTroopList = EventLogicUpdates.itemDropClear(
      faceTakerTroopList,
      126,
    );
    // clear armor drop
    faceTakerTroopList = EventLogicUpdates.itemDropClear(
      faceTakerTroopList,
      128,
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
    EventLogicUpdates.itemDropClear(tumorList, 126);
    EventLogicUpdates.deleteMessage(tumorList, "Tumor Lumps");

    $dataTroops[328].pages[0].list = tumorList;

    // wiggly moves into your house
    // overnight, so we'll block his gift there

    let fredBiteList = JsonEx.makeDeepCopy(originalTroops[330].pages[0].list);

    // clear rage armor (armor) drop
    EventLogicUpdates.itemDropClear(fredBiteList, 128);
    EventLogicUpdates.deleteMessage(fredBiteList, "Rage Armor");

    $dataTroops[330].pages[0].list = fredBiteList;

    let angelFredList = JsonEx.makeDeepCopy(originalTroops[331].pages[0].list);

    // clear strange feather (armor) drop
    EventLogicUpdates.itemDropClear(angelFredList, 128);
    // it gets no announcement, so no deleteMessage call needed

    // keeping angel fred's cash bribe intact because it's funny

    $dataTroops[331].pages[0].list = angelFredList;

    // toxic gift doesnt work since it requires hat trick
    // and not a cowboy hat is not in the pool; skipping the clear for him

    let scaredList = JsonEx.makeDeepCopy(originalTroops[333].pages[0].list);

    // clear cowardly boots (armor) drop
    EventLogicUpdates.itemDropClear(scaredList, 128);
    EventLogicUpdates.deleteMessage(scaredList, "Cowardly Boots");

    $dataTroops[333].pages[0].list = scaredList;

    let brightList = JsonEx.makeDeepCopy(originalTroops[334].pages[0].list);

    //clear medic-in-a-jar
    EventLogicUpdates.itemDropClear(brightList, 126);
    EventLogicUpdates.deleteMessage(brightList, "Medic-in-a-jar");

    $dataTroops[334].pages[0].list = brightList;

    // skipping shadow fred; he gives nothing

    // keeping main fred's duplications open
  }
  clearFinalFredGifts();

  function updateSpiderHuskEvent() {}
  updateSpiderHuskEvent();

  function clearTickleShop() {}
  clearTickleShop();

  function clearEmmanuelShop() {}
  clearEmmanuelShop();

  function clearKevinShop() {}
  clearKevinShop();

  function clearLyleTrades() {}
  clearLyleTrades();

  function clearBenPlayPrizes() {}
  clearBenPlayPrizes();
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
        (listItem) => listItem.code !== 318,
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

  function clearNewDayEvent() {
    // clear rat baby growth spurt
  }
  clearNewDayEvent();

  function clearSleepEvent() {
    // clear wiggly fred moving into fridge
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
            code: 126,
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
      (listItem) => listItem.code == 121 && listItem.parameters[0] == 499,
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
    audreyEventList = EventLogicUpdates.itemDropClear(audreyEventList, 126);
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
    carEventList = EventLogicUpdates.itemDropClear(carEventList, 126);
    carEventList = EventLogicUpdates.itemDropClear(carEventList, 128);

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
            code: 126,
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
};
