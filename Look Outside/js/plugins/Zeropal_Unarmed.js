/**
 * @target MZ
 * @name Zeropal_Unarmed
 * @plugindesc Unarmed and Dangerous: Play a Sam with no arms!
 * @authors Zeropalite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

const LIVINGROOM_MAP_ID = 3;
const LIVINGROOM_WAKEUP_EVENT_ID = 18;
const WAKEUP_NO_ARMS_COUCH = [
  {
    conditions: {
      actorId: 1,
      actorValid: false,
      itemId: 1,
      itemValid: false,
      selfSwitchCh: "A",
      selfSwitchValid: false,
      switch1Id: 19,
      switch1Valid: true,
      switch2Id: 1,
      switch2Valid: false,
      variableId: 187,
      variableValid: true,
      variableValue: 3,
    },
    directionFix: false,
    image: {
      tileId: 0,
      characterName: "$Chara_PlayerWakeup_MissingBoth",
      direction: 2,
      pattern: 0,
      characterIndex: 0,
    },
    list: [
      {
        code: 111,
        indent: 0,
        parameters: [0, 19, 0],
      },
      {
        code: 122,
        indent: 1,
        parameters: [214, 214, 0, 0, 255],
      },
      {
        code: 203,
        indent: 1,
        parameters: [0, 0, 11, 8, 0],
      },
      {
        code: 211,
        indent: 1,
        parameters: [0],
      },
      {
        code: 222,
        indent: 1,
        parameters: [],
      },
      {
        code: 230,
        indent: 1,
        parameters: [30],
      },
      {
        code: 205,
        indent: 1,
        parameters: [
          0,
          {
            list: [
              {
                code: 16,
                indent: null,
              },
              {
                code: 15,
                parameters: [10],
                indent: null,
              },
              {
                code: 17,
                indent: null,
              },
              {
                code: 15,
                parameters: [10],
                indent: null,
              },
              {
                code: 18,
                indent: null,
              },
              {
                code: 15,
                parameters: [60],
                indent: null,
              },
              {
                code: 16,
                indent: null,
              },
              {
                code: 15,
                parameters: [10],
                indent: null,
              },
              {
                code: 18,
                indent: null,
              },
              {
                code: 15,
                parameters: [30],
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [10],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 17,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [10],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 18,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [60],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [10],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 18,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [30],
            indent: null,
          },
        ],
      },
      {
        code: 205,
        indent: 1,
        parameters: [
          0,
          {
            list: [
              {
                code: 15,
                parameters: [30],
                indent: null,
              },
              {
                code: 19,
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [30],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 19,
            indent: null,
          },
        ],
      },
      {
        code: 121,
        indent: 1,
        parameters: [402, 402, 0],
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
    ],
    moveFrequency: 5,
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
    moveSpeed: 6,
    moveType: 0,
    priorityType: 2,
    stepAnime: false,
    through: false,
    trigger: 3,
    walkAnime: false,
  },
  {
    conditions: {
      actorId: 1,
      actorValid: false,
      itemId: 1,
      itemValid: false,
      selfSwitchCh: "A",
      selfSwitchValid: false,
      switch1Id: 402,
      switch1Valid: true,
      switch2Id: 1,
      switch2Valid: false,
      variableId: 187,
      variableValid: true,
      variableValue: 3,
    },
    directionFix: false,
    image: {
      tileId: 0,
      characterName: "$Chara_PlayerWakeup_MissingBoth",
      direction: 2,
      pattern: 1,
      characterIndex: 0,
    },
    list: [
      {
        code: 205,
        indent: 0,
        parameters: [
          0,
          {
            list: [
              {
                code: 16,
                indent: null,
              },
              {
                code: 15,
                parameters: [15],
                indent: null,
              },
              {
                code: 17,
                indent: null,
              },
              {
                code: 15,
                parameters: [15],
                indent: null,
              },
              {
                code: 18,
                indent: null,
              },
              {
                code: 15,
                parameters: [60],
                indent: null,
              },
              {
                code: 19,
                indent: null,
              },
              {
                code: 15,
                parameters: [20],
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [15],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 17,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [15],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 18,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [60],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 19,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [20],
            indent: null,
          },
        ],
      },
      {
        code: 205,
        indent: 0,
        parameters: [
          -1,
          {
            list: [
              {
                code: 3,
                indent: null,
              },
              {
                code: 19,
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 3,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 19,
            indent: null,
          },
        ],
      },
      {
        code: 122,
        indent: 0,
        parameters: [214, 214, 0, 0, 255],
      },
      {
        code: 121,
        indent: 0,
        parameters: [20, 20, 0],
      },
      {
        code: 121,
        indent: 0,
        parameters: [18, 18, 1],
      },
      {
        code: 121,
        indent: 0,
        parameters: [402, 402, 1],
      },
      {
        code: 211,
        indent: 0,
        parameters: [1],
      },
      {
        code: 203,
        indent: 0,
        parameters: [0, 0, 0, 12, 0],
      },
      {
        code: 205,
        indent: 0,
        parameters: [
          0,
          {
            list: [
              {
                code: 16,
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: false,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ],
    moveFrequency: 5,
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
    moveSpeed: 6,
    moveType: 0,
    priorityType: 2,
    stepAnime: false,
    through: false,
    trigger: 3,
    walkAnime: false,
  },
];

const BEDROOM_MAP_ID = 2;
const BED_WAKEUP_EVENT_ID = 22;
const WAKEUP_NO_ARMS_BED = [
  {
    conditions: {
      actorId: 1,
      actorValid: false,
      itemId: 1,
      itemValid: false,
      selfSwitchCh: "A",
      selfSwitchValid: false,
      switch1Id: 19,
      switch1Valid: true,
      switch2Id: 1,
      switch2Valid: false,
      variableId: 187,
      variableValid: true,
      variableValue: 3,
    },
    directionFix: false,
    image: {
      tileId: 0,
      characterName: "$Chara_PlayerWakeup_MissingBoth",
      direction: 2,
      pattern: 0,
      characterIndex: 0,
    },
    list: [
      {
        code: 111,
        indent: 0,
        parameters: [0, 19, 0],
        collapsed: true,
      },
      {
        code: 122,
        indent: 1,
        parameters: [214, 214, 0, 0, 255],
      },
      {
        code: 203,
        indent: 1,
        parameters: [0, 0, 4, 9, 0],
      },
      {
        code: 211,
        indent: 1,
        parameters: [0],
      },
      {
        code: 222,
        indent: 1,
        parameters: [],
      },
      {
        code: 230,
        indent: 1,
        parameters: [30],
      },
      {
        code: 205,
        indent: 1,
        parameters: [
          0,
          {
            list: [
              {
                code: 16,
                indent: null,
              },
              {
                code: 15,
                parameters: [10],
                indent: null,
              },
              {
                code: 17,
                indent: null,
              },
              {
                code: 15,
                parameters: [10],
                indent: null,
              },
              {
                code: 18,
                indent: null,
              },
              {
                code: 15,
                parameters: [60],
                indent: null,
              },
              {
                code: 16,
                indent: null,
              },
              {
                code: 15,
                parameters: [10],
                indent: null,
              },
              {
                code: 18,
                indent: null,
              },
              {
                code: 15,
                parameters: [30],
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [10],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 17,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [10],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 18,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [60],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [10],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 18,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [30],
            indent: null,
          },
        ],
      },
      {
        code: 111,
        indent: 1,
        parameters: [1, 103, 0, 2, 4],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 2, 1, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You have an urge to \\C[06]look outside\\C[00] your window.",
        ],
      },
      {
        code: 0,
        indent: 2,
        parameters: [],
      },
      {
        code: 412,
        indent: 1,
        parameters: [],
      },
      {
        code: 205,
        indent: 1,
        parameters: [
          0,
          {
            list: [
              {
                code: 15,
                parameters: [30],
                indent: null,
              },
              {
                code: 19,
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 15,
            parameters: [30],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 1,
        parameters: [
          {
            code: 19,
            indent: null,
          },
        ],
      },
      {
        code: 121,
        indent: 1,
        parameters: [402, 402, 0],
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
    ],
    moveFrequency: 5,
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
    moveSpeed: 6,
    moveType: 0,
    priorityType: 1,
    stepAnime: false,
    through: false,
    trigger: 3,
    walkAnime: false,
  },
  {
    conditions: {
      actorId: 1,
      actorValid: false,
      itemId: 1,
      itemValid: false,
      selfSwitchCh: "A",
      selfSwitchValid: false,
      switch1Id: 402,
      switch1Valid: true,
      switch2Id: 1,
      switch2Valid: false,
      variableId: 187,
      variableValid: true,
      variableValue: 3,
    },
    directionFix: false,
    image: {
      tileId: 0,
      characterName: "$Chara_PlayerWakeup_MissingBoth",
      direction: 2,
      pattern: 1,
      characterIndex: 0,
    },
    list: [
      {
        code: 122,
        indent: 0,
        parameters: [214, 214, 0, 0, 255],
      },
      {
        code: 205,
        indent: 0,
        parameters: [
          0,
          {
            list: [
              {
                code: 16,
                indent: null,
              },
              {
                code: 15,
                parameters: [15],
                indent: null,
              },
              {
                code: 17,
                indent: null,
              },
              {
                code: 15,
                parameters: [15],
                indent: null,
              },
              {
                code: 18,
                indent: null,
              },
              {
                code: 15,
                parameters: [60],
                indent: null,
              },
              {
                code: 19,
                indent: null,
              },
              {
                code: 15,
                parameters: [20],
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [15],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 17,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [15],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 18,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [60],
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 19,
            indent: null,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 15,
            parameters: [20],
            indent: null,
          },
        ],
      },
      {
        code: 205,
        indent: 0,
        parameters: [
          -1,
          {
            list: [
              {
                code: 19,
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: true,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 19,
            indent: null,
          },
        ],
      },
      {
        code: 122,
        indent: 0,
        parameters: [214, 214, 0, 0, 255],
      },
      {
        code: 121,
        indent: 0,
        parameters: [20, 20, 0],
      },
      {
        code: 121,
        indent: 0,
        parameters: [18, 18, 1],
      },
      {
        code: 121,
        indent: 0,
        parameters: [402, 402, 1],
      },
      {
        code: 211,
        indent: 0,
        parameters: [1],
      },
      {
        code: 203,
        indent: 0,
        parameters: [0, 0, 0, 12, 0],
      },
      {
        code: 205,
        indent: 0,
        parameters: [
          0,
          {
            list: [
              {
                code: 16,
                indent: null,
              },
              {
                code: 0,
              },
            ],
            repeat: false,
            skippable: false,
            wait: false,
          },
        ],
      },
      {
        code: 505,
        indent: 0,
        parameters: [
          {
            code: 16,
            indent: null,
          },
        ],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ],
    moveFrequency: 5,
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
    moveSpeed: 6,
    moveType: 0,
    priorityType: 1,
    stepAnime: false,
    through: false,
    trigger: 3,
    walkAnime: false,
  },
];

var UnarmedAndDangerous = UnarmedAndDangerous || {};

UnarmedAndDangerous.applyChanges = function () {
  console.log("welcome to unarmed and dangerous!");

  // overwrite image loading to use the unencrypted custom files
  const _loadBitmap = ImageManager.loadBitmap;
  ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
    if (filename.includes("MissingBoth") || filename.includes("LostBoth")) {
        console.log('looking for unencrypted')
        return Bitmap.load(folder + filename + ".png", filename, hue, smooth)
    }
    else return _loadBitmap.call(this, folder, filename, hue, smooth)
  }

  const _startLoading = Bitmap.prototype._startLoading;
  Bitmap.prototype._startLoading = function () {
    const url = this._url;
    if (url.includes("MissingBoth") || url.includes("LostBoth")) {
        this._image = new Image()
        this._image.onload = this._onLoad.bind(this);
        this._image.onerror = this._onError.bind(this)
        this._image.src = url
    }
    else _startLoading.call(this)
  }

  // Marks Both Sam's arms as gnawed off.
  const oldStatusBase = Window_StatusBase.prototype.actorSlotName;
  Window_StatusBase.prototype.actorSlotName = function (actor, index) {
    const defaultSlotName = oldStatusBase.call(this, actor, index);
    if (actor._actorId == 1 && gVr(187) == 3 && (index == 0 || index == 1)) {
      return "Gnawed Off";
    }
    return defaultSlotName;
  };

  const samName = "Chara_Player";

  // adds no arms as a possible character sprite set
  const old_set_character_image = Game_Actor.prototype.setCharacterImage;
  Game_Actor.prototype.setCharacterImage = function (
    characterName,
    characterIndex,
  ) {
    const armStatus = gVr(187);
    if (characterName.startsWith(samName)) {
      if (armStatus == 0) {
        this._characterName = samName;
      }
      if (armStatus == 1) {
        this._characterName = samName + "_MissingRightarm";
      } else if (armStatus == 2) {
        this._characterName = samName + "_MissingLeftarm";
      } else if (armStatus == 3) {
          this._characterName = samName + "_MissingBotharm";
       
      }
      console.log(this._characterName, this._characterIndex);
      this._characterIndex = characterIndex;
      return;
    }

    console.log(characterName, characterIndex);
    old_set_character_image.call(this, characterName, characterIndex);
  };

  // for some reason this breaks the wakeup animations so im commenting it out for now
  /*const old_character_base_set_image = Game_CharacterBase.prototype.setImage
    Game_CharacterBase.prototype.setImage = function (
        characterName,
        characterIndex
    ) {
        const armStatus = gVr(187);
        if (characterName.contains(samName)) {
            this._tileId = 0;

            if (armStatus == 0) {
                this._characterName = samName;
            }
            if (armStatus == 1) {
                this._characterName = samName + "_MissingRightarm";
            }
            if (armStatus == 2) {
                this._characterName = samName + "_MissingLeftarm";
            }
            if (armStatus == 3) {
                this._characterName = samName + "_MissingBotharm";
            }
            this._characterIndex = characterIndex;
            this._isObjectCharacter = ImageManager.isObjectCharacter(characterName);
            return;
        }
        old_character_base_set_image.call(this, characterName, characterIndex)
    };*/

  // add wakeup animations to the bedroom and livingroom map json files
  const onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    onMapLoaded.call(this);
    const mapId = $gameMap.mapId();
    if (mapId == BEDROOM_MAP_ID || mapId == LIVINGROOM_MAP_ID) {
      const wakeupEvent =
        $dataMap.events[
          mapId == BEDROOM_MAP_ID
            ? BED_WAKEUP_EVENT_ID
            : LIVINGROOM_WAKEUP_EVENT_ID
        ];
      // setting the new pages second-to-last so the standing animation can play afterwards
      if (wakeupEvent)
        wakeupEvent.pages.splice(
          wakeupEvent.pages.length - 1,
          0,
          ...(mapId == BEDROOM_MAP_ID
            ? WAKEUP_NO_ARMS_BED
            : WAKEUP_NO_ARMS_COUCH),
        );
    }
  };

  const old_armless_equip_weapon = Game_BattlerBase.prototype.canEquipWeapon;
  Game_BattlerBase.prototype.canEquipWeapon = function (item) {
    if (this._actorId == 1 && gVr(187) == 3) {
      // cannot equip melee weapons when missing that arm.
      // not even ash can have his chainsaw anymore :(
      return false;
    }
    return old_armless_equip_weapon.call(this, item);
  };

  const old_armless_equip_armor = Game_BattlerBase.prototype.canEquipArmor;
  Game_BattlerBase.prototype.canEquipArmor = function (item) {
    if (
      this._actorId == 1 &&
      gVr(187) == 3 &&
      (item.atypeId == 5 || item.atypeId == 6 || item.atypeId == 7)
    ) {
      // ash cant have the shotgun either
      return false;
    }
    return old_armless_equip_armor.call(this, item);
  };

  const Tuni_LoadEnemy = ImageManager.loadEnemy;
  ImageManager.loadEnemy = function (filename) {
    if (filename.includes("Reflections")) {
      if (gVr(187) == 3) {
        if (monsterImageExists(filename + "-LostBoth")) {
          return this.loadBitmap("img/enemies/", filename + "-LostBoth");
        }
      }
    }

    return Tuni_LoadEnemy.call(this, filename);
  };

  // 0 = both arms
  // 1 = right missing
  // 2 = left missing
  // 3 = both missing
  const setArms = (armValue) => {
    sVr(187, armValue);
    const actor = $gameParty.leader();

    if (armValue == 1) {
      actor.changeEquip(0, 0);
    } else if (armValue == 2) {
      actor.changeEquip(1, 0);
    } else if (armValue == 3) {
      actor.changeEquip(1, 0);
      actor.changeEquip(0, 0);
    }
    actor.setCharacterImage(samName, 0);
    $gamePlayer.refresh();
    
  };

  // this is for funsies i just wanted to see what sam looks like when he's lost control of his life
  const nullout = () => {
    sVr(21, -10);
    sVr(22, -10);
    sVr(23, -10);
    sVr(24, -10);
    sVr(25, -10);
    sVr(26, -10);
  };

  window.UnarmedAndDangerous = {
    setArms,
    nullout,
  };
};

UnarmedAndDangerous.applyChanges();
