/**
 * @target MZ
 * @name MainMenuAPOptions
 * @plugindesc New option in main menu to input AP room, player, password
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var MainMenuAPOptions = MainMenuAPOptions || {};

MainMenuAPOptions.applyChanges = function () {
  Window_TitleCommand.prototype.makeCommandList = function () {
    const continueEnabled = this.isContinueEnabled();
    this.addCommand(TextManager.newGame, "newGame");
    this.addCommand(TextManager.continue_, "continue", continueEnabled);
    this.addCommand("Archipelago", "archipelago");
    this.addCommand(TextManager.options, "options");
    this.addCommand("Quit Game", "quit");
  };

  const _addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
  Window_MenuCommand.prototype.addOriginalCommands = function () {
    _addOriginalCommands.call(this);
    this.addCommand("Archipelago", "archipelago");
  };

  const _createCommandWindow = Scene_Title.prototype.createCommandWindow;
  Scene_Title.prototype.createCommandWindow = function () {
    _createCommandWindow.call(this);

    this._commandWindow.setHandler(
      "archipelago",
      this.commandArchipelago.bind(this),
    );
  };

  const _sceneMenucreateCommandWindow =
    Scene_Menu.prototype.createCommandWindow;
  Scene_Menu.prototype.createCommandWindow = function () {
    _sceneMenucreateCommandWindow.call(this);
    this._commandWindow.setHandler(
      "archipelago",
      this.commandArchipelago.bind(this),
    );
  };

  // we need a period in the allowed characters for the server domain
  // adding a period permanently to the characterset shouldnt be too intrusive
  // since latin1 already has a space
  Window_NameInput.LATIN2[Window_NameInput.LATIN2.findIndex((c) => c === " ")] =
    ".";

  // use brand new dimensions to fit the new AP option
  Scene_Title.prototype.commandWindowRect = function () {
    const offsetX = $dataSystem.titleCommandWindow.offsetX;
    const offsetY = $dataSystem.titleCommandWindow.offsetY;
    const ww = this.mainCommandWidth();
    const wh = this.calcWindowHeight(5, true);
    const wx = (Graphics.boxWidth - ww) / 2 + offsetX;
    const wy = Graphics.boxHeight - wh - 312 + offsetY;
    return new Rectangle(wx, wy, ww, wh);
  };

  Scene_Title.prototype.commandArchipelago = function () {
    SceneManager.push(APOptionsScene);
  };

  Scene_Menu.prototype.commandArchipelago = function () {
    SceneManager.push(APOptionsScene);
  };

  const _applyData = ConfigManager.applyData;
  ConfigManager.applyData = function (config) {
    _applyData.call(this, config);
    this.slotName = config.slotName || "";
    this.roomId = config.roomId || "";
    this.password = config.password || "";
  };

  const _makeData = ConfigManager.makeData;
  ConfigManager.makeData = function () {
    const config = _makeData.call(this);
    config.slotName = this.slotName || "";
    config.roomId = this.roomId || "archipelago.gg:";
    config.password = this.password || "";
    return config;
  };

  function APOptionsScene() {
    this.initialize(...arguments);
  }

  APOptionsScene.prototype = Object.create(Scene_MenuBase.prototype);
  APOptionsScene.prototype.constructor = APOptionsScene;

  APOptionsScene.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
  };

  APOptionsScene.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
  };

  APOptionsScene.prototype.terminate = function () {
    Scene_MenuBase.prototype.terminate.call(this);
    ConfigManager.save();
  };

  APOptionsScene.prototype.createCommandWindow = function () {
    const rect = this.optionsWindowRect();
    this._commandWindow = new Window_Command(rect);

    // Provide the command list for this command window
    this._commandWindow.makeCommandList = function () {
      this.addCommand("Slot name", "slotName");
      this.addCommand("Server", "roomId");
      this.addCommand("Password", "password");
      this.addCommand("Cancel", "cancel");
    };

    // Show current saved values to the right in dim/greyed text
    this._commandWindow.itemTextAlign = function () {
      return "left";
    };
    this._commandWindow.drawItem = function (index) {
      const rect = this.itemLineRect(index);
      const name = this.commandName(index);
      this.drawText(name, rect.x, rect.y, rect.width, "left");
      const symbol = this.commandSymbol(index);
      const value = String(ConfigManager[symbol] || "");
      this.changePaintOpacity(false);
      if (symbol === "password" && value.length) {
        this.drawText(
          "●".repeat(value.length),
          rect.x,
          rect.y,
          rect.width,
          "right",
        );
      } else this.drawText(value, rect.x, rect.y, rect.width, "right");
      this.changePaintOpacity(this.isCommandEnabled(index));
    };

    this._commandWindow.setHandler("slotName", () => {
      this.openNameScene("slotName", "Enter AP slot name.", 16);
    });
    this._commandWindow.setHandler("roomId", () => {
      this.openNameScene("roomId", "Enter AP room ID.", 30);
    });
    this._commandWindow.setHandler("password", () => {
      this.openNameScene(
        "password",
        "Enter AP room password (leave empty if none).",
        12,
      );
    });

    this._commandWindow.setHandler("cancel", this.popScene.bind(this));
    this._commandWindow.refresh();
    this.addWindow(this._commandWindow);
  };

  APOptionsScene.prototype.optionsWindowRect = function () {
    const ww = 600;
    const wh = this.calcWindowHeight(4, true);
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = (Graphics.boxHeight - wh) / 2;
    return new Rectangle(wx, wy, ww, wh);
  };

  APOptionsScene.prototype.maxCommands = function () {
    return 4;
  };

  APOptionsScene.prototype.maxVisibleCommands = function () {
    return 4;
  };

  APOptionsScene.prototype.openNameScene = function (key, prompt, maxLength) {
    SceneManager.push(APNameScene);
    SceneManager.prepareNextScene(key, maxLength, prompt);
  };

  // Lightweight name input scene that saves into ConfigManager[key]
  function APNameScene() {
    this.initialize(...arguments);
  }

  APNameScene.prototype = Object.create(Scene_MenuBase.prototype);
  APNameScene.prototype.constructor = APNameScene;

  APNameScene.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
  };

  APNameScene.prototype.prepare = function (key, maxLength, prompt) {
    this._key = key;
    this._maxLength = maxLength;
    this._prompt = prompt;
  };

  APNameScene.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this._actor = {
      name: () => ConfigManager[this._key] || "",
      faceName: () => "",
      faceIndex: () => 0,
      setName: (name) => {
        ConfigManager[this._key] = name;
      },
    };
    this.createEditWindow();
    this.createInputWindow();
  };

  APNameScene.prototype.start = function () {
    Scene_MenuBase.prototype.start.call(this);
    this._editWindow.refresh();
  };

  // allow empty submissions
  APNameScene.prototype.isOkEnabled = function () {
    return true;
  };

  APNameScene.prototype.createEditWindow = function () {
    const rect = this.editWindowRect();
    this._editWindow = new Window_NameEdit(rect);
    this._editWindow.setup(this._actor, this._maxLength);
    this.addWindow(this._editWindow);
  };

  APNameScene.prototype.editWindowRect = function () {
    const inputWindowHeight = this.calcWindowHeight(9, true);
    const padding = $gameSystem.windowPadding();
    const ww = 600;
    const wh = ImageManager.faceHeight + padding * 2;
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = (Graphics.boxHeight - (wh + inputWindowHeight + 8)) / 2;
    return new Rectangle(wx, wy, ww, wh);
  };

  APNameScene.prototype.createInputWindow = function () {
    const rect = this.inputWindowRect();
    this._inputWindow = new Window_NameInput(rect);
    this._inputWindow.setEditWindow(this._editWindow);
    this._inputWindow.setHandler("ok", this.onInputOk.bind(this));
    this._inputWindow.setHandler("cancel", this.onInputCancel.bind(this));
    this.addWindow(this._inputWindow);
  };

  APNameScene.prototype.inputWindowRect = function () {
    const wx = this._editWindow.x;
    const wy = this._editWindow.y + this._editWindow.height + 8;
    const ww = this._editWindow.width;
    const wh = this.calcWindowHeight(9, true);
    return new Rectangle(wx, wy, ww, wh);
  };

  const _onNameOk = Window_NameInput.prototype.onNameOk;
  Window_NameInput.prototype.onNameOk = function () {
    if (SceneManager._scene instanceof APNameScene) {
      this.playOkSound();
      this.callOkHandler();
    } else {
      _onNameOk.call(this);
    }
  };

  APNameScene.prototype.onInputOk = function () {
    this._actor.setName(this._editWindow.name());
    ConfigManager.save();
    this.popScene();
  };

  APNameScene.prototype.onInputCancel = function () {
    this.popScene();
  };

  const _processHandling = Window_NameInput.prototype.processHandling;
  Window_NameInput.prototype.processHandling = function () {
    if (
      SceneManager._scene instanceof APNameScene &&
      Input.isTriggered("cancel")
    ) {
      this._editWindow.restoreDefault();
      this.playBuzzerSound();
      this.callOkHandler();
    } else _processHandling.call(this);
  };
};

MainMenuAPOptions.applyChanges();
