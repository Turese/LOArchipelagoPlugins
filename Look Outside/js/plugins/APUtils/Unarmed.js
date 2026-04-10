/**
 * @target MZ
 * @name Unarmed
 * @plugindesc Unarmed and Dangerous: Play as Sam with no arms!
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var UnarmedAndDangerous = UnarmedAndDangerous || {};

UnarmedAndDangerous.applyChanges = function () {
  console.log("Welcome to unarmed and dangerous!");

  const SAM_NAME = "Chara_Player";
  const SAM_ACTOR_ID = 1;
  const MISSING_RIGHT_ARM_SUFFIX = "_MissingRightarm";
  const MISSING_LEFT_ARM_SUFFIX = "_MissingLeftarm";
  const MISSING_BOTH_ARM_SUFFIX = "_MissingBotharm";
  const MISSING_ARM_SLOT_NAME = "Gnawed Off";

  const ARM_VARIABLE_ID = 187;
  const MISSING_NO_ARM_VALUE = 0;
  const MISSING_RIGHT_ARM_VALUE = 1;
  const MISSING_LEFT_ARM_VALUE = 2;
  const MISSING_BOTH_ARM_VALUE = 3;

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
        variableId: ARM_VARIABLE_ID,
        variableValid: true,
        variableValue: 3,
      },
      directionFix: false,
      image: {
        tileId: 0,
        characterName: `$Chara_PlayerWakeup${MISSING_BOTH_ARM_SUFFIX}`,
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
        variableId: ARM_VARIABLE_ID,
        variableValid: true,
        variableValue: 3,
      },
      directionFix: false,
      image: {
        tileId: 0,
        characterName: `$Chara_PlayerWakeup${MISSING_BOTH_ARM_SUFFIX}`,
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
        variableId: ARM_VARIABLE_ID,
        variableValid: true,
        variableValue: 3,
      },
      directionFix: false,
      image: {
        tileId: 0,
        characterName: `$Chara_PlayerWakeup${MISSING_BOTH_ARM_SUFFIX}`,
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
        variableId: ARM_VARIABLE_ID,
        variableValid: true,
        variableValue: 3,
      },
      directionFix: false,
      image: {
        tileId: 0,
        characterName: `$Chara_PlayerWakeup${MISSING_BOTH_ARM_SUFFIX}`,
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

  // adds a check to mark both of Sam's arms as gnawed off on the equip screen
  const _actorSlotName = Window_StatusBase.prototype.actorSlotName;
  Window_StatusBase.prototype.actorSlotName = function (actor, index) {
    const defaultSlotName = _actorSlotName.call(this, actor, index);
    if (
      actor._actorId == 1 &&
      gVr(ARM_VARIABLE_ID) == MISSING_BOTH_ARM_VALUE &&
      (index == 0 || index == 1)
    ) {
      return MISSING_ARM_SLOT_NAME;
    }
    return defaultSlotName;
  };

  /*
    adds no arms as a possible character sprite set
  
    the existing plugin that does this is a one way transition from armed -> missing an arm
    so I'm rewriting all of setCharacterImage to check every time 
    to account for the possibility of regaining an arm
  */
  const _setCharacterImage = Game_Actor.prototype.setCharacterImage;
  Game_Actor.prototype.setCharacterImage = function (
    characterName,
    characterIndex,
  ) {
    const armStatus = gVr(ARM_VARIABLE_ID);
    if (characterName.startsWith(SAM_NAME)) {
      if (armStatus == MISSING_NO_ARM_VALUE) {
        this._characterName = SAM_NAME;
      }
      if (armStatus == MISSING_RIGHT_ARM_VALUE) {
        this._characterName = SAM_NAME + MISSING_RIGHT_ARM_SUFFIX;
      } else if (armStatus == MISSING_LEFT_ARM_VALUE) {
        this._characterName = SAM_NAME + MISSING_LEFT_ARM_SUFFIX;
      } else if (armStatus == MISSING_BOTH_ARM_VALUE) {
        this._characterName = SAM_NAME + MISSING_BOTH_ARM_SUFFIX;
      }
      // keep the character position on sprite sheet the same
      this._characterIndex = characterIndex;
      return;
    }
    _setCharacterImage.call(this, characterName, characterIndex);
  };

  /*
    also adding armless sprite set here
  */
  const _setImage = Game_CharacterBase.prototype.setImage;
  Game_CharacterBase.prototype.setImage = function (
    characterName,
    characterIndex,
  ) {
    if (characterName.startsWith(SAM_NAME)) {
      const armStatus = gVr(ARM_VARIABLE_ID);
      if (armStatus == MISSING_NO_ARM_VALUE) {
        this._characterName = SAM_NAME;
      }
      if (armStatus == MISSING_RIGHT_ARM_VALUE) {
        this._characterName = SAM_NAME + MISSING_RIGHT_ARM_SUFFIX;
      } else if (armStatus == MISSING_LEFT_ARM_VALUE) {
        this._characterName = SAM_NAME + MISSING_LEFT_ARM_SUFFIX;
      } else if (armStatus == MISSING_BOTH_ARM_VALUE) {
        this._characterName = SAM_NAME + MISSING_BOTH_ARM_SUFFIX;
      }
      this._tileId = 0;

      this._characterIndex = characterIndex;
      this._isObjectCharacter = ImageManager.isObjectCharacter(characterName);
      return;
    }
    _setImage.call(this, characterName, characterIndex);
  };

  // adds armless wakeup animations to the bedroom and livingroom map files
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

  const _canEquipWeapon = Game_BattlerBase.prototype.canEquipWeapon;
  Game_BattlerBase.prototype.canEquipWeapon = function (item) {
    if (
      this._actorId == SAM_ACTOR_ID &&
      gVr(ARM_VARIABLE_ID) == MISSING_BOTH_ARM_VALUE
    ) {
      // cannot equip any weapons when missing both arms
      // Ash can't even have his chainsaw anymore :(
      return false;
    }
    return _canEquipWeapon.call(this, item);
  };

  const _canEquipArmor = Game_BattlerBase.prototype.canEquipArmor;
  Game_BattlerBase.prototype.canEquipArmor = function (item) {
    if (
      this._actorId == SAM_ACTOR_ID &&
      gVr(ARM_VARIABLE_ID) == MISSING_BOTH_ARM_VALUE &&
      (item.atypeId == 5 || item.atypeId == 6 || item.atypeId == 7)
    ) {
      // Ash can't have his shotgun either
      return false;
    }
    return _canEquipArmor.call(this, item);
  };

  // loads armless mirror sprites if needed / if they exist
  const _loadEnemy = ImageManager.loadEnemy;
  ImageManager.loadEnemy = function (filename) {
    if (filename.includes("Reflections")) {
      if (
        gVr(ARM_VARIABLE_ID) == MISSING_BOTH_ARM_VALUE &&
        monsterImageExists(filename + MISSING_BOTH_ARM_SUFFIX)
      ) {
        return this.loadBitmap(
          "img/enemies/",
          filename + MISSING_BOTH_ARM_SUFFIX,
        );
      }
    }
    return _loadEnemy.call(this, filename);
  };

  // adds console command to set custom arm value
  const setArms = (armValue) => {
    sVr(ARM_VARIABLE_ID, armValue);
    // Sam is always the party leader
    const actor = $gameParty.leader();

    // removes weapon from the slot an arm was removed from
    // note: this doesn't check for the few equips that are allowed on armless slots
    // but you'll be able to reequip them manually
    if (armValue == MISSING_RIGHT_ARM_VALUE) {
      actor.changeEquip(0, 0);
    } else if (armValue == MISSING_LEFT_ARM_VALUE) {
      actor.changeEquip(1, 0);
    } else if (armValue == MISSING_BOTH_ARM_VALUE) {
      actor.changeEquip(1, 0);
      actor.changeEquip(0, 0);
    }
    // manually updates character sprite to reflect the update in arm status
    actor.setCharacterImage(SAM_NAME, 0);
    $gamePlayer.refresh();
  };

  // requires the unarmed and dangerous mod to work
  // $gameVariable 187 controls Sam's arms
  // 0 = both arms intact
  // 1 = right missing
  // 2 = left missing
  // 3 = both missing (custom mod value)
  // @type position {'left' | 'right'}
  const addArm = function (position) {
    try {
      const hasUnarmedAndDangerous =
        PluginManager._scripts.includes("Zeropal_Unarmed");
      if (!hasUnarmedAndDangerous)
        throw new Error("Error: Prerequisite arm modifier mod not detected");
      const armStatus = gVr(187);
      if (armStatus == 3) {
        sVr(187, position == "left" ? 1 : 2);
      } else if (
        (armStatus == 2 && position == "left") ||
        (armStatus == 1 && position == "right")
      ) {
        sVr(187, 0);
      }
      $gameParty.leader().setCharacterImage("Chara_Player", 0);
      $gamePlayer.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  const shouldOverrideImage = function (url) {
    return url.includes(MISSING_BOTH_ARM_SUFFIX);
  };

  window.UnarmedAndDangerous = {
    setArms,
    addArm,
    shouldOverrideImage,
  };
};

UnarmedAndDangerous.applyChanges();
