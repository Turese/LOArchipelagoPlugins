/** 
 * @target MZ
 * @name Zeropal_Go_Home
 * @plugindesc Menu option that sends you back to apartment 33
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 * 
 * WIP
 * as of now, this successfully teleports you into apt 33 entrance
 * and drains your danger bar
 * but your party continues to follow you around
 */

var GoHome = GoHome || {};

const APARTMENT_33_MAPIDS = [2, 3, 4];

GoHome.applyChanges = function() {

    // Add go home
    const addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
    
    Window_MenuCommand.prototype.addOriginalCommands = function() {
        addOriginalCommands.call(this);
        this.addCommand('Go Home', 'gohome', !APARTMENT_33_MAPIDS.includes($gameMap.mapId()));
    };

    const createCommandWindow = Scene_Menu.prototype.createCommandWindow;

    Scene_Menu.prototype.createCommandWindow = function () {
        createCommandWindow.call(this);

        this._commandWindow.setHandler(
            'gohome',
            this.commandGoHome.bind(this)
        )
    }

    Scene_Menu.prototype.commandGoHome = function () {
        // commonevent that drains your danger meter and awards exp
        $gameTemp.reserveCommonEvent(3);
        // takes you to map 3 (livingroom) at x=8,y=16 (frontdoor) position 8 (facing up) transition 0 (fade to black)
        $gamePlayer.reserveTransfer(3, 8, 16, 8, 0);
        // unpauses
        SceneManager.pop();
                                
    };

    

}

GoHome.applyChanges();