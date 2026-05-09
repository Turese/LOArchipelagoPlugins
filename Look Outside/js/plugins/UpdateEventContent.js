/**
 * @target MZ
 * @name UpdateEventContent
 * @plugindesc Updates events to have archipelago-specific text and images
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

// mapid -> event with overworld item -> ap item id
const MAP_OVERWORLD_ITEM_OVERRIDES = {
  3: {
    99: [
      "APT_33_LIVING_ROOM_CASH",
      "$gameSelfSwitches.setValue([3, 99, 'A'], true)",
    ],
  },

  4: {
    23: [
      "APT_33_BATHROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([4, 23, 'A'], true)",
    ],
  },
  270: {
    19: [
      "APT_30_TAXIDERMY_EAGLE",
      "$gameSelfSwitches.setValue([270, 19, 'A'], true)",
    ],
    18: [
      "APT_30_TAXIDERMY_DOG",
      "$gameSelfSwitches.setValue([270, 18, 'A'], true)",
    ],
  },

  275: {
    3: [
      "APT_30_NE_TAXIDERMY_CREATURE",
      "$gameSelfSwitches.setValue([275, 3, 'A'], true)",
    ],
    4: ["APT_30_NE_SCALPEL", "$gameSelfSwitches.setValue([275, 4, 'A'], true)"],
    2: [
      "APT_30_NE_SQUIRREL",
      "$gameSelfSwitches.setValue([275, 2, 'A'], true)",
    ],
    5: ["APT_30_NE_WHISKEY", "$gameSelfSwitches.setValue([275, 5, 'A'], true)"],
  },

  277: {
    3: [
      "APT_30_NW_SPIRIT_BOARD",
      "$gameSelfSwitches.setValue([277, 3, 'A'], true)",
    ],
    4: [
      "APT_30_NW_SHRUNKEN_HEAD",
      "$gameSelfSwitches.setValue([277, 4, 'A'], true)",
    ],
    5: [
      "APT_30_NW_GRANOLA_BAR",
      "$gameSelfSwitches.setValue([277, 5, 'A'], true)",
    ],
    6: ["APT_30_NW_CASH", "$gameSelfSwitches.setValue([277, 6, 'A'], true)"],
  },

  278: {
    7: [
      "APT_30_SW_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([278, 7, 'A'], true)",
    ],
    3: [
      "APT_30_SW_TOOTHPASTE",
      "$gameSelfSwitches.setValue([278, 3, 'A'], true)",
    ],
  },

  276: {
    6: [
      "APT_30_SE_THROWING_KNIFE",
      "$gameSelfSwitches.setValue([276, 6, 'A'], true)",
    ],
    7: [
      "APT_30_SE_DINNER_PLATE",
      "$gameSelfSwitches.setValue([276, 7, 'A'], true)",
    ],
    5: [
      "APT_30_SE_CHEFS_KNIFE",
      "$gameSelfSwitches.setValue([276, 5, 'A'], true)",
    ],
  },

  280: {
    6: [
      "APT_30_FLESH_PATCHWORK_BOOTS",
      "$gameSelfSwitches.setValue([280, 6, 'A'], true)",
    ],
  },

  281: {
    2: [
      "APT_30_FLESH_SW_PATCHWORK_CLUB",
      "$gameSelfSwitches.setValue([281, 2, 'A'], true)",
    ],
  },

  282: {
    2: [
      "APT_30_FLESH_NE_PATCHWORK_HAT",
      "$gameSelfSwitches.setValue([282, 2, 'A'], true)",
    ],
  },

  283: {
    3: [
      "APT_30_FLESH_SE_NEEDLE_GLOVES",
      "$gameSelfSwitches.setValue([283, 3, 'A'], true)",
    ],
  },

  284: {
    4: [
      "APT_30_FLESH_NW_PATCHWORK_JACKET",
      "$gameSelfSwitches.setValue([284, 4, 'A'], true)",
    ],
  },

  111: {
    11: [
      "APT_31_BATHROOM_VINEGAR",
      "$gameSelfSwitches.setValue([111, 11, 'A'], true)",
    ],
    15: [
      "APT_31_BATHROOM_EYE_DROPS",
      "$gameSelfSwitches.setValue([111, 15, 'A'], true)",
    ],
    10: [
      "APT_31_BATHROOM_DCLOGGER",
      "$gameSelfSwitches.setValue([111, 10, 'A'], true)",
    ],
    9: [
      "APT_31_BATHROOM_DCLOGGER_2",
      "$gameSelfSwitches.setValue([111, 9, 'A'], true)",
    ],
    12: [
      "APT_31_BATHROOM_SOAP",
      "$gameSelfSwitches.setValue([111, 12, 'A'], true)",
    ],
  },

  109: {
    7: [
      "APT_31_BEDROOM_METAL_BAT",
      "$gameSelfSwitches.setValue([109, 7, 'A'], true)",
    ],
    8: [
      "APT_31_BEDROOM_TONIC",
      "$gameSelfSwitches.setValue([109, 8, 'A'], true)",
    ],
  },

  110: {
    10: [
      "APT_31_OBSERVATORY_PLUTO_DISC",
      "$gameSelfSwitches.setValue([110, 10, 'A'], true)",
    ],
    14: [
      "APT_31_OBSERVATORY_VOID_DISC",
      "$gameSelfSwitches.setValue([110, 14, 'A'], true)",
    ],
  },

  31: {
    31: [
      "APT_32_ENTRY_BANDAGES",
      "$gameSelfSwitches.setValue([31, 31, 'A'], true)",
    ],
    30: [
      "APT_32_ENTRY_HOODIE",
      "$gameSelfSwitches.setValue([31, 30, 'A'], true)",
    ],
    28: [
      "APT_32_KITCHEN_DRAWINGS",
      "$gameSelfSwitches.setValue([31, 28, 'A'], true)",
    ],
    9: [
      "APT_32_KITCHEN_FRYING_PAN",
      "$gameSelfSwitches.setValue([31, 9, 'A'], true)",
    ],
    18: [
      "APT_32_KITCHEN_CHEEZ_STIX",
      "$gameSelfSwitches.setValue([31, 18, 'A'], true)",
    ],
    20: ["APT_32_TRASH", "$gameSelfSwitches.setValue([31, 20, 'A'], true)"],
    17: [
      "APT_32_KITCHEN_VINEGAR_1",
      "$gameSelfSwitches.setValue([31, 17, 'A'], true)",
    ],
    21: [
      "APT_32_KITCHEN_VINEGAR_2",
      "$gameSelfSwitches.setValue([31, 21, 'A'], true)",
    ],
  },

  32: {
    10: [
      "APT_32_BATHROOM_MEDICELL",
      "$gameSelfSwitches.setValue([32, 10, 'A'], true)",
    ],
    8: [
      "APT_32_BATHROOM_TONIC",
      "$gameSelfSwitches.setValue([32, 8, 'A'], true)",
    ],
    9: [
      "APT_32_BATHROOM_MOP",
      "$gameSelfSwitches.setValue([32, 9, 'A'], true)",
    ],
  },

  33: {
    7: [
      "APT_32_CHILD_BEDROOM_BASEBALL_CAP",
      "$gameSelfSwitches.setValue([33, 7, 'C'], true)",
    ],
    4: [
      "APT_32_CHILD_BEDROOM_TEDDY_BEAR",
      "$gameSelfSwitches.setValue([33, 4, 'C'], true)",
    ],
  },

  34: {
    25: [
      "APT_32_MASTER_BEDROOM_TANK_TOP",
      "$gameSelfSwitches.setValue([34, 25, 'C'], true)",
    ],
    28: [
      "APT_32_MASTER_BEDROOM_BALM",
      "$gameSelfSwitches.setValue([34, 28, 'C'], true)",
    ],
    19: [
      "APT_32_MASTER_BEDROOM_ARMY_FIGURE",
      "$gameSelfSwitches.setValue([34, 19, 'A'], true)",
    ],
    32: [
      "APT_32_MASTER_BEDROOM_PURSE",
      "$gameSelfSwitches.setValue([34, 32, 'A'], true)",
    ],
  },

  436: {
    9: [
      "APT_32_TUNNELS_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([436, 9, 'C'], true)",
    ],
    10: [
      "APT_32_TUNNELS_TOOTH_RIFLE",
      "$gameSelfSwitches.setValue([436, 10, 'C'], true)",
    ],
    11: [
      "APT_32_TUNNELS_TOOTH_SCIMITAR",
      "$gameSelfSwitches.setValue([436, 11, 'C'], true)",
    ],
    12: [
      "APT_32_TUNNELS_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([436, 12, 'C'], true)",
    ],
    13: [
      "APT_32_TUNNELS_TOOTH_GROUP_B_COMBAT_VICTORY",
      "$gameSelfSwitches.setValue([436, 13, 'C'], true)",
    ],
  },

  120: {
    16: ["APT_34_SALT", "$gameSelfSwitches.setValue([120, 16, 'A'], true)"],
    24: [
      "APT_34_KITCHEN_ORANGE_COLA",
      "$gameSelfSwitches.setValue([120, 24, 'A'], true)",
    ],
    9: [
      "APT_34_KITCHEN_TRASH",
      "$gameSelfSwitches.setValue([120, 9, 'A'], true)",
    ],
    6: [
      "APT_34_KITCHEN_LOWER_WRAPPED_GIFT",
      "$gameSelfSwitches.setValue([120, 6, 'A'], true)",
    ],
  },

  121: {
    4: [
      "APT_34_BEDROOM_SALT",
      "$gameSelfSwitches.setValue([121, 4, 'A'], true)",
    ],
    13: [
      "APT_34_BEDROOM_JEWELRY_BOX",
      "$gameSelfSwitches.setValue([121, 13, 'A'], true)",
    ],
    10: [
      "APT_34_BEDROOM_SPADE",
      "$gameSelfSwitches.setValue([121, 10, 'A'], true)",
    ],
    14: [
      "APT_34_BEDROOM_VODKA",
      "$gameSelfSwitches.setValue([121, 14, 'A'], true)",
    ],
  },

  122: {
    15: [
      "APT_34_LONG_BEDROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([122, 15, 'A'], true)",
    ],
    20: [
      "APT_34_LONG_BEDROOM_GAMEKID_COLOR",
      "$gameSelfSwitches.setValue([122, 20, 'A'], true)",
    ],
    17: [
      "APT_34_LONG_BEDROOM_CASH",
      "$gameSelfSwitches.setValue([122, 17, 'A'], true)",
    ],
    10: [
      "APT_34_LONG_BEDROOM_MERCURY_DISC",
      "$gameSelfSwitches.setValue([122, 10, 'A'], true)",
    ],
    9: [
      "APT_34_LONG_BEDROOM_WAKE_THE_BLOOD_KNIGHT",
      "$gameSelfSwitches.setValue([122, 9, 'A'], true)",
    ],
    16: [
      "APT_34_LONG_BEDROOM_STIMULANT",
      "$gameSelfSwitches.setValue([122, 16, 'A'], true)",
    ],
  },

  123: {
    10: [
      "APT_34_BATHROOM_TOOTHPASTE",
      "$gameSelfSwitches.setValue([123, 10, 'A'], true)",
    ],
    4: [
      "APT_34_BATHROOM_BALM",
      "$gameSelfSwitches.setValue([123, 4, 'A'], true)",
    ],
    2: [
      "APT_34_BATHROOM_MEDICATION",
      "$gameSelfSwitches.setValue([123, 2, 'A'], true)",
    ],
    7: [
      "APT_34_BATHROOM_TONIC",
      "$gameSelfSwitches.setValue([123, 7, 'A'], true)",
    ],
  },

  124: {
    9: [
      "APT_34_OFFICE_KLYSOX",
      "$gameSelfSwitches.setValue([124, 9, 'A'], true)",
    ],
    4: [
      "APT_34_OFFICE_SALT",
      "$gameSelfSwitches.setValue([124, 4, 'A'], true)",
    ],
    21: [
      "APT_34_OFFICE_TONIC",
      "$gameSelfSwitches.setValue([124, 21, 'A'], true)",
    ],
    10: [
      "APT_34_OFFICE_HAMMER",
      "$gameSelfSwitches.setValue([124, 10, 'A'], true)",
    ],
    17: [
      "APT_34_OFFICE_OLD_CONSOLE",
      "$gameSelfSwitches.setValue([124, 17, 'A'], true)",
    ],
    18: [
      "APT_34_OFFICE_HOCKEY_CARDS",
      "$gameSelfSwitches.setValue([124, 18, 'A'], true)",
    ],
  },

  271: {
    6: [
      "APT_34_CLOSET_HOCKEY_STICK",
      "$gameSelfSwitches.setValue([271, 6, 'A'], true)",
    ],
    4: [
      "APT_34_CLOSET_HOCKEY_TROPHY",
      "$gameSelfSwitches.setValue([271, 4, 'A'], true)",
    ],
    2: [
      "APT_34_CLOSET_CASH",
      "$gameSelfSwitches.setValue([271, 2, 'A'], true)",
    ],
  },

  35: {
    16: [
      "APT_37_TABLE_PLATE_1",
      "$gameSelfSwitches.setValue([35, 16, 'A'], true)",
    ],
    15: [
      "APT_37_TABLE_THROWING_KNIVES",
      "$gameSelfSwitches.setValue([35, 15, 'A'], true)",
    ],
    18: [
      "APT_37_TABLE_FORKS",
      "$gameSelfSwitches.setValue([35, 18, 'A'], true)",
    ],
    17: [
      "APT_37_TABLE_PLATE_2",
      "$gameSelfSwitches.setValue([35, 17, 'A'], true)",
    ],
    11: [
      "APT_37_CARVING_FORK",
      "$gameSelfSwitches.setValue([35, 11, 'A'], true)",
    ],
    10: ["APT_37_WHISKEY", "$gameSelfSwitches.setValue([35, 10, 'A'], true)"],
    13: [
      "APT_37_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([35, 13, 'A'], true)",
    ],
  },

  14: {
    6: [
      "APT_37_BATHROOM_CLEANEREX",
      "$gameSelfSwitches.setValue([14, 6, 'A'], true)",
    ],
    8: [
      "APT_37_BATHROOM_MEDICELL",
      "$gameSelfSwitches.setValue([14, 8, 'A'], true)",
    ],
    4: [
      "APT_37_BATHROOM_BANDAGES",
      "$gameSelfSwitches.setValue([14, 4, 'A'], true)",
    ],
  },

  38: {
    4: [
      "APT_37_PROJECTOR_ROOM_WIZARDS_HELL",
      "$gameSelfSwitches.setValue([38, 4, 'A'], true)",
    ],
    3: [
      "APT_37_PROJECTOR_ROOM_GOLF_CLUB",
      "$gameSelfSwitches.setValue([38, 3, 'A'], true)",
    ],
    15: [
      "APT_37_PROJECTOR_ROOM_CLOTH",
      "$gameSelfSwitches.setValue([38, 15, 'A'], true)",
    ],
  },

  39: {
    7: [
      "APT_37_BEDROOM_GUINEA_PIG",
      "$gameSelfSwitches.setValue([39, 7, 'A'], true)",
    ],
    5: [
      "APT_37_BEDROOM_GLASSES",
      "$gameSelfSwitches.setValue([39, 5, 'A'], true)",
    ],
    3: [
      "APT_37_BEDROOM_CASH",
      "$gameSelfSwitches.setValue([39, 3, 'A'], true)",
    ],
  },

  352: {
    11: [
      "APT_37_LOCKED_ROOM_WHISKEY",
      "$gameSelfSwitches.setValue([352, 11, 'A'], true)",
    ],
    12: [
      "APT_37_LOCKED_ROOM_BEER",
      "$gameSelfSwitches.setValue([352, 12, 'A'], true)",
    ],
    21: [
      "APT_37_LOCKED_ROOM_TONIC",
      "$gameSelfSwitches.setValue([352, 21, 'A'], true)",
    ],
    22: [
      "APT_37_LOCKED_ROOM_BANDAGES",
      "$gameSelfSwitches.setValue([352, 22, 'A'], true)",
    ],
    14: [
      "APT_37_LOCKED_ROOM_MACHETE",
      "$gameSelfSwitches.setValue([352, 14, 'A'], true)",
    ],
    13: [
      "APT_37_LOCKED_ROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([352, 13, 'A'], true)",
    ],
    15: [
      "APT_37_LOCKED_ROOM_CLOGS",
      "$gameSelfSwitches.setValue([352, 15, 'A'], true)",
    ],
    23: [
      "APT_37_LOCKED_ROOM_CLOTH",
      "$gameSelfSwitches.setValue([352, 23, 'A'], true)",
    ],
  },

  353: {
    8: ["APT_38_CASH", "$gameSelfSwitches.setValue([353, 8, 'A'], true)"],
    25: ["APT_38_FORK", "$gameSelfSwitches.setValue([353, 25, 'A'], true)"],
    24: ["APT_38_FORK_2", "$gameSelfSwitches.setValue([353, 24, 'A'], true)"],
    15: ["APT_38_PLATE_1", "$gameSelfSwitches.setValue([353, 15, 'A'], true)"],
    23: ["APT_38_PLATE_2", "$gameSelfSwitches.setValue([353, 23, 'A'], true)"],
  },

  355: {
    34: [
      "APT_38_KAELEY_SHURIKEN",
      "$gameSelfSwitches.setValue([355, 34, 'A'], true)",
    ],
    28: [
      "APT_38_KAELEY_SHOTGUN_SHELLS",
      "$gameSelfSwitches.setValue([355, 28, 'A'], true)",
    ],
    35: [
      "APT_38_KAELEY_PITCHFORK",
      "$gameSelfSwitches.setValue([355, 35, 'A'], true)",
    ],
    25: [
      "APT_38_KAELEY_STIMULANT",
      "$gameSelfSwitches.setValue([355, 25, 'A'], true)",
    ],
    21: [
      "APT_38_KAELEY_GIFT",
      "$gameSelfSwitches.setValue([355, 21, 'A'], true)",
    ],
    30: [
      "APT_38_KAELEY_RIFLE_AMMO",
      "$gameSelfSwitches.setValue([355, 30, 'A'], true)",
    ],
    18: [
      "APT_38_KAELEY_GIFT_2",
      "$gameSelfSwitches.setValue([355, 18, 'A'], true)",
    ],
    23: [
      "APT_38_KAELEY_TONIC",
      "$gameSelfSwitches.setValue([355, 23, 'A'], true)",
    ],
    27: [
      "APT_38_KAELEY_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([355, 27, 'A'], true)",
    ],
    26: [
      "APT_38_KAELEY_ELIXIR",
      "$gameSelfSwitches.setValue([355, 26, 'A'], true)",
    ],
    22: [
      "APT_38_KAELEY_GIFT_3",
      "$gameSelfSwitches.setValue([355, 22, 'A'], true)",
    ],
    31: [
      "APT_38_KAELEY_MAGNUM_BULLET",
      "$gameSelfSwitches.setValue([355, 31, 'A'], true)",
    ],
    36: [
      "APT_38_KAELEY_SNAKE_WHIP",
      "$gameSelfSwitches.setValue([355, 36, 'A'], true)",
    ],
    32: [
      "APT_38_KAELEY_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([355, 32, 'A'], true)",
    ],
    33: [
      "APT_38_KAELEY_GRENADE",
      "$gameSelfSwitches.setValue([355, 33, 'A'], true)",
    ],
    24: [
      "APT_38_KAELEY_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([355, 24, 'A'], true)",
    ],
    20: [
      "APT_38_KAELEY_GIFT_4",
      "$gameSelfSwitches.setValue([355, 20, 'A'], true)",
    ],
    29: [
      "APT_38_KAELEY_SMG_AMMO",
      "$gameSelfSwitches.setValue([355, 29, 'A'], true)",
    ],
  },

  356: {
    6: [
      "APT_38_PIERRE_GIFT",
      "$gameSelfSwitches.setValue([356, 6, 'A'], true)",
    ],
    7: [
      "APT_38_PIERRE_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([356, 7, 'A'], true)",
    ],
  },

  370: {
    2: [
      "APT_38_BATHROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([370, 2, 'A'], true)",
    ],
    11: [
      "APT_38_BATHROOM_CLOTH",
      "$gameSelfSwitches.setValue([370, 11, 'A'], true)",
    ],
    10: [
      "APT_38_BATHROOM_CLEANEREX",
      "$gameSelfSwitches.setValue([370, 10, 'A'], true)",
    ],
  },

  406: {
    2: ["GLITCH_LAST_WILL", "$gameSelfSwitches.setValue([406, 2, 'A'], true)"],
    16: [
      "GLITCH_BLACK_KEY",
      "$gameSelfSwitches.setValue([406, 16, 'A'], true)",
    ],
  },

  440: {
    12: [
      "GLITCH_SHORTCUT_BLUE_KEY",
      "$gameSelfSwitches.setValue([440, 12, 'A'], true)",
    ],
  },

  450: {
    4: [
      "GLITCH_METTAL_BA2T",
      "$gameSelfSwitches.setValue([450, 4, 'A'], true)",
    ],
  },

  439: {
    9: ["GLITCH_E_RED_KEY", "$gameSelfSwitches.setValue([439, 9, 'A'], true)"],
    10: [
      "GLITCH_E_YELLOW_KEY",
      "$gameSelfSwitches.setValue([439, 10, 'A'], true)",
    ],
  },

  446: {
    4: [
      "GLITCH_NE_GREEN_KEY",
      "$gameSelfSwitches.setValue([446, 4, 'C'], true)",
    ],
  },

  448: {
    6: [
      "GLITCH_E_SE_RMYJCKET",
      "$gameSelfSwitches.setValue([448, 6, 'A'], true)",
    ],
  },

  441: {
    5: [
      "GLITCH_W_FTBLHELMT",
      "$gameSelfSwitches.setValue([441, 5, 'A'], true)",
    ],
  },

  442: {
    7: [
      "GLITCH_SW_YELLOW_KEY",
      "$gameSelfSwitches.setValue([442, 7, 'A'], true)",
    ],
  },

  444: {
    2: [
      "GLITCH_SW_WHITE_KEY",
      "$gameSelfSwitches.setValue([444, 2, 'A'], true)",
    ],
  },

  443: {
    12: [
      "GLITCH_MAZE_HLING_SPRAY",
      "$gameSelfSwitches.setValue([443, 12, 'A'], true)",
    ],
    8: [
      "GLITCH_MAZE_YELLOW_KEY",
      "$gameSelfSwitches.setValue([443, 8, 'A'], true)",
    ],
    13: [
      "GLITCH_MAZE_VNAGE_UCKY_TIEAKERS",
      "$gameSelfSwitches.setValue([443, 13, 'A'], true)",
    ],
  },

  23: {
    41: [
      "APT_36_LIVING_ROOM_BASEBALL_BAT",
      "$gameSelfSwitches.setValue([23, 41, 'A'], true)",
    ],
    48: [
      "APT_36_LIVING_ROOM_CASH",
      "$gameSelfSwitches.setValue([23, 48, 'A'], true)",
    ],
  },

  24: {
    5: [
      "APT_36_BATHROOM_TONIC",
      "$gameSelfSwitches.setValue([24, 5, 'A'], true)",
    ],
    6: [
      "APT_36_BATHROOM_BANDAGES",
      "$gameSelfSwitches.setValue([24, 6, 'A'], true)",
    ],
    7: [
      "APT_36_BATHROOM_PADLOCK_KEY",
      "$gameSelfSwitches.setValue([24, 7, 'A'], true)",
    ],
  },

  25: {
    2: [
      "APT_36_BEDROOM_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([25, 2, 'A'], true)",
    ],
  },
};

var UpdateEventContent = UpdateEventContent || {};

UpdateEventContent.overrideOverworldPickups = function () {
  function getAPItemPickupPage(
    script = "",
    itemName = AP_ITEM,
    itemImage = DEFAULT_AP_ITEM_IMAGE,
  ) {
    return {
      conditions: {
        actorId: 1,
        actorValid: false,
        itemId: 1,
        itemValid: false,
        selfSwitchCh: "A",
        selfSwitchValid: false,
        switch1Id: 1,
        switch1Valid: false,
        switch2Id: 1,
        switch2Valid: false,
        variableId: 1,
        variableValid: false,
        variableValue: 0,
      },
      directionFix: true,
      image: itemImage,
      list: [
        {
          code: 101,
          indent: 0,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 0,
          parameters: [`Take ${itemName}\\C[0]?`],
        },
        {
          code: 102,
          indent: 0,
          parameters: [["Take it.", "Leave it."], -1, 0, 2, 0],
        },
        {
          code: 402,
          indent: 0,
          parameters: [0, "Take it."],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 1, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: [`Find {${itemName}}\\C[0].`],
        },
        {
          code: 355,
          indent: 1,
          parameters: [`${script}`],
        },
        {
          code: 0,
          indent: 1,
          parameters: [],
        },
        {
          code: 402,
          indent: 0,
          parameters: [1, "Leave it."],
        },
        {
          code: 0,
          indent: 1,
          parameters: [],
        },
        {
          code: 404,
          indent: 0,
          parameters: [],
        },
        {
          code: 0,
          indent: 0,
          parameters: [],
        },
      ],
      moveFrequency: 3,
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
      moveSpeed: 3,
      moveType: 0,
      priorityType: 1,
      stepAnime: false,
      through: false,
      trigger: 0,
      walkAnime: true,
    };
  }

  function getAPItemPickupList(script, itemName) {
    return [
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: [`Take ${itemName}\\C[0]?`],
      },
      {
        code: 102,
        indent: 0,
        parameters: [["Take it.", "Leave it."], -1, 0, 2, 0],
      },
      {
        code: 402,
        indent: 0,
        parameters: [0, "Take it."],
      },
      {
        code: 101,
        indent: 1,
        parameters: ["", 0, 0, 1, ""],
      },
      {
        code: 401,
        indent: 1,
        parameters: [`Find {${itemName}}\\C[0].`],
      },
      {
        code: 355,
        indent: 1,
        parameters: [`${script}`],
      },
      {
        code: 0,
        indent: 1,
        parameters: [],
      },
      {
        code: 402,
        indent: 0,
        parameters: [1, "Leave it."],
      },
      {
        code: 0,
        indent: 1,
        parameters: [],
      },
      {
        code: 404,
        indent: 0,
        parameters: [],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];
  }

  const eventsToOverride = MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId];
  if (!eventsToOverride) return;
  Object.keys(eventsToOverride).forEach((eventId) => {
    const [name, script] = eventsToOverride[eventId];
    const event = $dataMap.events[eventId];
    console.log(name, LookOutsideAPClient.getItemName(name));
    event.pages[0].list = getAPItemPickupList(
      script,
      LookOutsideAPClient.getItemName(name),
    );
    event.pages[0].image = LookOutsideAPClient.getItemImage(name);
  });
};
