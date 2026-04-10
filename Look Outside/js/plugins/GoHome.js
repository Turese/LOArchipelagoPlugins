/**
 * @target MZ
 * @name GoHome
 * @plugindesc Menu option that sends you back to Apartment 33
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var GoHome = GoHome || {};

GoHome.applyChanges = function () {
  const APARTMENT_33_MAPIDS = [2, 3, 4];

  const addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;

  Window_MenuCommand.prototype.addOriginalCommands = function () {
    addOriginalCommands.call(this);
    this.addCommand(
      "Go Home",
      "gohome",
      !APARTMENT_33_MAPIDS.includes($gameMap.mapId()),
    );
  };

  const createCommandWindow = Scene_Menu.prototype.createCommandWindow;

  Scene_Menu.prototype.createCommandWindow = function () {
    createCommandWindow.call(this);
    this._commandWindow.setHandler("gohome", this.commandGoHome.bind(this));
  };

  Scene_Menu.prototype.commandGoHome = function () {
    // clear weather effect
    $gameScreen.changeWeather("none", 0, 0);
    // fadeout bgm 1 second
    AudioManager.fadeOutBgm(1);

    sSw(1107, false) // InMeatWorld = OFF
    sSw(348, false) // InLandlordApt = OFF
    // takes you to map 6 (f3 hall) at x=51,y=7 (frontdoor placemat)
    // position 8 (facing up) transition 0 (fade to black)
    $gamePlayer.reserveTransfer(6, 51, 7, 8, 0);
    // unpauses
    SceneManager.pop();
  };
};

GoHome.applyChanges();
