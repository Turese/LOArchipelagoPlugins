/**
 * @target MZ
 * @name LookOutsideAPClient
 * @plugindesc Archipelago Client for Look Outside
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 *
 * special thanks to Donais04 and the Silver Daze team for paving the way
 * to
 * and shoutout to the KELP MAN for letting me look through all that special look outside code
 *
 * WIP
 * as of now, this isn't even a client; it makes no connection to ap servers.
 * work so far has been in adding ability to inject items into the game
 **/

var LookOutsideAPClient = LookOutsideAPClient || {};

let lastLoadedMapId;

LookOutsideAPClient.applyOverrides = function () {
  // track most recently loaded mapid for the sake of overwriting events
  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    lastLoadedMapId = mapId;
    loadMapData.call(this, mapId);
  };

  const scripts = {
    "GoHome": GoHome,
    "BackInTime": BackInTime,
    "Unarmed": Unarmed,
    "InsertAPItems": InsertAPItems,
    "MainMenuAPOptions": MainMenuAPOptions,
    "NormalizeDifficulty": NormalizeDifficulty,
    "UpdateMissableEvents": UpdateMissableEvents,
    "ClearExplicitDrops": ClearExplicitDrops,
    "ReportLocations": ReportLocations,
  };

  // verify required helper scripts before continuing
  Object.entries(scripts).forEach(([scriptName, script]) => {
    assert(script, `Missing dependency: ${scriptName}.js`);
  });

  // check other mods' custom images all together
  const shouldOverrideImage = function (url) {
    if (Unarmed.shouldOverrideImage(url)) return true;
    if (InsertAPItems.shouldOverrideImage(url)) return true;
    return false;
  };

  // use custom image overrides for mod images to bypass encryption
  const _startLoading = Bitmap.prototype._startLoading;
  Bitmap.prototype._startLoading = function () {
    if (shouldOverrideImage(this._url)) {
      this._image = new Image();
      this._image.onload = this._onLoad.bind(this);
      this._image.onerror = this._onError.bind(this);
      this._destroyCanvas();
      this._loadingState = "loading";
      this._image.src = this._url;
      if (this._image.width > 0) {
        this._image.onload = null;
        this._onLoad();
      }
    } else _startLoading.call(this);
  };

  // update - extra images may be needed to be loaded when initializing the map
  const _createCharacters = Spriteset_Map.prototype.createCharacters;
  Spriteset_Map.prototype.createCharacters = function () {
    InsertAPItems.loadCurrentMapImages();
    _createCharacters.call(this);
  };

  const _dataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad = function (object) {
    _dataManagerOnLoad.call(this, object);
    if (object === $dataMap) {
      BackInTime.createCalendarBackInTimeEvent();
      InsertAPItems.overrideOverworldPickups();
    }
    if (object === $dataTroops) {
      // update troops
    }
    if (object === $dataCommonEvents) {
      // update common events
    }
  };
};

LookOutsideAPClient.ConnectClient = function () {
  const slotName = ConfigManager.slotName || "";
  const roomId = ConfigManager.roomId || "";
  const password = ConfigManager.password || "";
};

LookOutsideAPClient.applyOverrides();

LookOutsideAPClient.ConnectClient();
