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

LookOutsideAPClient.applyChanges = function () {
  // track most recently loaded mapid for the sake of overwriting events
  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    lastLoadedMapId = mapId;
    loadMapData.call(this, mapId);
  };

  const scripts = ["GoHome", "BackInTime", "Unarmed", "InsertAPItems"];

  // load helper scripts
  scripts.forEach((filename) => {
    const url = "js/plugins/APUtils" + Utils.encodeURI(filename) + ".js";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.async = false;
    script.defer = true;
    script._url = url;
    document.body.appendChild(script);
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
    if (shouldOverrideImage(url)) {
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

  // all event overrides go here
  const _onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    BackInTime.createCalendarBackInTimeEvent();

    InsertAPItems.overrideOverworldPickups();

    _onMapLoaded.call(this);
  };
};

LookOutsideAPClient.applyChanges();
