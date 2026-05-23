/**
 * @target MZ
 * @name UpdateMissableEvents
 * @plugindesc Removes events that lock player out of locations
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

const EMPTY_PAGE = {
  conditions: {
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
  },
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

var UpdateMissableEvents = UpdateMissableEvents || {};

UpdateMissableEvents.applyEventUpdates = function (lastLoadedMapId, ev) {
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

  const recruitLeaveCondition = ClearExplicitDrops.buildConditions("D");
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
        if (ev.pages.length >= 7) {
          ev.pages.splice(5, 1);
        }
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

    //joel

    //papineau
  }
  forceRecruitsToStay();

  function fixMaskShadeSpawns() {
    // make stumbling shade on f4 spawn immediately
    // instead of be triggered by old tape

    if (lastLoadedMapId == 451 && ev.id == 7) {
      ev.pages[0].conditions = ClearExplicitDrops.buildConditions();
    }
    // writhing shade --- needs to not erase itself
    // same with moaning shade
    if (
      (lastLoadedMapId == 380 && ev.id == 2) ||
      (lastLoadedMapId == 401 && ev.id == 6)
    ) {
      const eraseIndex = ev.pages[2].list.findIndex(
        (listEntry) => listEntry.code === 214,
      );
      if (eraseIndex !== -1) {
        ev.pages[2].list[eraseIndex] = {
          code: 355,
          indent: ev.pages[2].list[eraseIndex].indent,
          parameters: [
            `$gameSelfSwitches.setValue([${lastLoadedMapId}, ${ev.id}, 'D'], true)`,
          ],
        };
      }
      if (ev.pages.length < 5) {
        ev.pages.push({
          ...EMPTY_PAGE,
          conditions: ClearExplicitDrops.buildConditions("D"),
        });
      }
    }
  }
  fixMaskShadeSpawns();

  // make it so grasshopper doesnt leave after leighs quest
  function permaGrasshopper() {
    if (lastLoadedMapId == 7 && ev.id == 60) {
      if (ev.pages.length > 4) ev.pages.splice(3, 1);
    }
  }
  permaGrasshopper();

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

  // allows lyle to spawn in his apartment even if he is recruited
  // makes him always recruited after the second trade, even if he wasnt kissed
  function fixLyleRecruitMechanics() {
    //TODO: IMPLEMENT
  }

  // allows lyle to spawn in the fungal lair even if he is recruited
  function fixPhillippeRecruitMechanics() {
    //TODO: IMPLEMENT
  }

  // fixes apartment 13 events so walking in with rat baby gives you the disc instantly
  function fixApartment13Events() {
    //TODO: IMPLEMENT
  }

  // forces player to kill all hydra parts individually
  function fixHydraLogic() {
    //TODO: remove pages from their events that treat them as dead when 746 JeanneDead is true
    // add self switch to hydra body and replace the check for jeanne dead from it
  }

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
};
