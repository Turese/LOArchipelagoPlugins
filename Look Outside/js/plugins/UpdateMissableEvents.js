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

UpdateMissableEvents.applyChanges = function (lastLoadedMapId, ev) {
  function fixWoundedManDoor() {
    if (lastLoadedMapId === 23 && ev.id === 40) {
      ev.pages[1].conditions = ev.pages[0].conditions;
      // set the page that lets you in to the bathroom unarmed on hardmode to always hit
    }
  }
  fixWoundedManDoor();

  // remove leighs gun sale from hardmode dialogue
  function fixLeighGunSale() {
    //TODO: IMPLEMENT
  }

  // make it so you can refight grinning beast until you kill it
  function leighRematch() {
    //TODO: IMPLEMENT
    // update page 2 of the apt 21 key event to trigger grinning beast if you walk over it,
    // make a new page 3 empty state
  }

  // make it so grasshopper doesnt leave after leighs quest
  function permaGrasshopper() {
    // remove page 4 of its event on floor 2 (7) event 60
    //TODO: IMPLEMENT
  }

  // add separate phase 2 forms of the tooth family
  // for members whose phase 2 shares an event with their phase 1 (joel, madison)
  function addPhase2ToothFamily() {
    //TODO: IMPLEMENT
  }

  // allows each tooth family phase to spawn even if theyve been killed in another form
  function fixToothFamilySpawnTriggers() {
    //TODO: IMPLEMENT
  }

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

  // allows Aster to spawn in the f2 hallway even if he is recruited
  function fixAsterRecruitMechanics() {
    //TODO: IMPLEMENT
    //update page 5 of his event on floor 2 (7) event 14
    //since we need a separate switch to check recruiting him, replace that page's switch check with the new one
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

UpdateMissableEvents.applyChanges();
