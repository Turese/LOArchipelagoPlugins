/**
 * @target MZ
 * @name UpdateMissableEvents
 * @plugindesc Removes events that lock player out of locations
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

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

  // remove leighs gun sale from hardmode dialogue
  function fixLeighGunSale() {
    //TODO: IMPLEMENT
  }

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

  const recruitLeaveCondition = {
    actorId: 1,
    actorValid: false,
    itemId: 1,
    itemValid: false,
    selfSwitchCh: "D",
    selfSwitchValid: true,
    switch1Id: 1,
    switch1Valid: false,
    switch2Id: 1,
    switch2Valid: false,
    variableId: 1,
    variableValid: false,
    variableValue: 0,
  };
  // for overworld recruits; the switch that makes them leave their spots
  // if recruited is replaced with self switch D
  function forceRecruitsToStay() {
    //leigh
    if (lastLoadedMapId == 93 && ev.id == 3) {
      ev.pages[2].conditions = recruitLeaveCondition;
    }

    //lyle
    if (lastLoadedMapId == 9 && ev.id == 14) {
      ev.pages[6].conditions = recruitLeaveCondition;
    }

    //aster
    if (lastLoadedMapId == 7 && ev.id == 14) {
      ev.pages[4].conditions = recruitLeaveCondition;
    }

    //joel

    //papineau
  }
  forceRecruitsToStay();

  // make it so grasshopper doesnt leave after leighs quest
  function permaGrasshopper() {
    // remove page 4 of its event on floor 2 (7) event 60
    //TODO: IMPLEMENT
  }

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

  // audreys disposition requirements are met instantly if you give the key
  // gives her infinite advice cans
  // updates her to spawn even if recruited
  function fixAudreyRecruitMechanics() {
    //TODO: IMPLEMENT
    // room 92 event 111 page 6
    // replace with custom flag check
  }

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
