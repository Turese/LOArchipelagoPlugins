/**
 * @target MZ
 * @name ConnectionStatus
 * @plugindesc client status display
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 *
 * displays client status in top left
 *
 **/

const TIMER_RETRY_SECONDS = 30;

let connectionTimerFrames = null;

let disconnectedMessage = "Not connected";

const initializeConnectionStatus = function () {
  function ConnectionStatus() {
    this.initialize();
  }

  ConnectionStatus.prototype = Object.create(Window_Base.prototype);
  ConnectionStatus.prototype.constructor = ConnectionStatus;

  ConnectionStatus.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(
      this,
      new Rectangle(0, 0, Graphics.width, 60),
    );
    this.contents.fontSize = 14;
    this.contents.padding = 0;
    this.opacity = 0; // no background window
  };

  ConnectionStatus.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    this.refresh();
    this.handleClick();
  };

  ConnectionStatus.prototype.refresh = function () {
    this.contents.clear();

    let text = "";

    if (client.authenticated) {
      this.changeTextColor("#6daa2c");
      const playerName = client.players.self.alias;
      text = `Connected as ${playerName}`;
    } else if (connecting) {
      this.changeTextColor("#d27d2c");
      text = "Connecting...";
    } else if (typeof connectionTimerFrames !== "number") {
      this.changeTextColor("#ac3232");
      text = `${disconnectedMessage} (click to connect)`;
    } else {
      // disconnected
      if (connectionTimerFrames > 0) {
        connectionTimerFrames--;
        if (connectionTimerFrames == 0) {
          connectionTimerFrames = null;
          LookOutsideAPClient.startAPClient();
        }
      }
      const sec = Math.ceil(connectionTimerFrames / 60);
      this.changeTextColor("#ac3232");
      text = `${disconnectedMessage} (retrying in ${sec}s)`;
    }

    this.drawText(text, 0, -12, Graphics.width - 50);
  };

  ConnectionStatus.prototype.handleClick = function () {
    if (!TouchInput.isTriggered()) return;

    const x = this.x;
    const y = this.y;

    const clickX = TouchInput.x;
    const clickY = TouchInput.y;

    const inBounds =
      clickX >= x &&
      clickX <= x + this.width &&
      clickY >= y &&
      clickY <= y + this.height;

    if (inBounds && !client.authenticated) {
      connectionTimerFrames = null;
      LookOutsideAPClient.startAPClient();
    }
  };

  const _Scene_Base_update = Scene_Base.prototype.update;

  // make it show on the overworld
  const _Scene_Map_createDisplayObjects =
    Scene_Map.prototype.createDisplayObjects;

  Scene_Map.prototype.createDisplayObjects = function () {
    _Scene_Map_createDisplayObjects.call(this);

    this._clientStatusWindow = new ConnectionStatus();
    this.addChild(this._clientStatusWindow);
  };

  // make it show on the battle screen
  const _Scene_Battle_createDisplayObjects =
    Scene_Battle.prototype.createDisplayObjects;

  Scene_Battle.prototype.createDisplayObjects = function () {
    _Scene_Battle_createDisplayObjects.call(this);

    this._clientStatusWindow = new ConnectionStatus();
    this.addChild(this._clientStatusWindow);
  };

  // make it show on the title screen
  const _Scene_Title_create = Scene_Title.prototype.create;
  Scene_Title.prototype.create = function () {
    _Scene_Title_create.call(this);

    this._clientStatusWindow = new ConnectionStatus();
    this.addChild(this._clientStatusWindow);
  };

  // make it show in pause menu
  const _Scene_Menu_create = Scene_Menu.prototype.create;
  Scene_Menu.prototype.create = function () {
    _Scene_Menu_create.call(this);

    this._clientStatusWindow = new ConnectionStatus();
    this.addChild(this._clientStatusWindow);
  };
};

initializeConnectionStatus();
