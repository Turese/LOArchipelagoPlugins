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

ClearExplicitDrops.applyChanges = function () {
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

ClearExplicitDrops.applyChanges();
