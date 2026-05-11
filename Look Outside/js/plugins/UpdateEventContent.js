/**
 * @target MZ
 * @name UpdateEventContent
 * @plugindesc Updates overworld generic drops to have archipelago-specific text and images
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

  6: {
    40: [
      "F3_MASKED_SHADOW_GIFT",
      // set shadowDispo to 15 when taking the gift - max, and then some
      // also set the switch that indicates the gift has been taken
      // shadow loses 2 dispo overnight if it isn't
      // and then takes it back if it gets below 4
      "$gameSelfSwitches.setValue([6, 40, 'A'], true); sVr(152, 15); sSw(161, false);",
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

  108: {
    15: ["APT_31_JUICE", "sSw(691, true)"],
    16: ["APT_31_CASH", "sSw(692, true)"],
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
      "$gameSelfSwitches.setValue([33, 7, 'A'], true)",
    ],
    4: [
      "APT_32_CHILD_BEDROOM_TEDDY_BEAR",
      "$gameSelfSwitches.setValue([33, 4, 'A'], true)",
    ],
  },

  34: {
    25: [
      "APT_32_MASTER_BEDROOM_TANK_TOP",
      "$gameSelfSwitches.setValue([34, 25, 'A'], true)",
    ],
    28: [
      "APT_32_MASTER_BEDROOM_BALM",
      "$gameSelfSwitches.setValue([34, 28, 'A'], true)",
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
      "$gameSelfSwitches.setValue([436, 9, 'A'], true)",
    ],
    10: [
      "APT_32_TUNNELS_TOOTH_RIFLE",
      "$gameSelfSwitches.setValue([436, 10, 'A'], true)",
    ],
    11: [
      "APT_32_TUNNELS_TOOTH_SCIMITAR",
      "$gameSelfSwitches.setValue([436, 11, 'A'], true)",
    ],
    12: [
      "APT_32_TUNNELS_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([436, 12, 'A'], true)",
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
    22: [
      "APT_37_CRAFTING_KIT",
      "$gameSelfSwitches.setValue([35, 22, 'A'], true)", // CUSTOM SWITCH FOR CRAFTING KIT
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
    10: [
      "APT_37_CRAFTING_KIT",
      "$gameSelfSwitches.setValue([14, 10, 'A'], true)", // CUSTOM SWITCH FOR CRAFTING KIT
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
  89: {
    4: ["F3_CLOSET_WALLET", "$gameSelfSwitches.setValue([89, 4, 'A'], true)"],
    2: ["F3_CLOSET_KEY", "$gameSelfSwitches.setValue([89, 2, 'A'], true)"],
    5: ["F3_CLOSET_ROACH", "$gameSelfSwitches.setValue([89, 5, 'B'], true)"],
    9: [
      "F3_CLOSET_JACKET_FIGURINE",
      "$gameSelfSwitches.setValue([89, 9, 'A'], true)",
    ],
  },

  285: {
    13: [
      "APT_20_CLEANEREX",
      "$gameSelfSwitches.setValue([285, 13, 'A'], true)",
    ],
    12: ["APT_20_MOP", "$gameSelfSwitches.setValue([285, 12, 'A'], true)"],
    9: ["APT_20_FORK", "$gameSelfSwitches.setValue([285, 9, 'A'], true)"],
    8: ["APT_20_MUFFIN", "$gameSelfSwitches.setValue([285, 8, 'A'], true)"],
    10: ["APT_20_CLEAVER", "$gameSelfSwitches.setValue([285, 10, 'A'], true)"],
  },

  288: {
    5: [
      "APT_20_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([288, 5, 'A'], true)",
    ],
    7: [
      "APT_20_BATHROOM_ROACH",
      "$gameSelfSwitches.setValue([288, 7, 'B'], true)",
    ],
    6: [
      "APT_20_BATHROOM_SOAP",
      "$gameSelfSwitches.setValue([288, 6, 'A'], true)",
    ],
  },

  287: {
    27: [
      "APT_20_W_MOTORCYCLE_HELMET",
      "$gameSelfSwitches.setValue([287, 27, 'A'], true)",
    ],
    5: ["APT_20_W_VODKA", "$gameSelfSwitches.setValue([287, 5, 'A'], true)"],
    4: ["APT_20_W_CASH", "$gameSelfSwitches.setValue([287, 4, 'A'], true)"],
  },

  286: {
    25: ["APT_20_E_TONIC", "$gameSelfSwitches.setValue([286, 25, 'A'], true)"],
    26: [
      "APT_20_E_VINTAGE_SNEAKERS",
      "$gameSelfSwitches.setValue([286, 26, 'A'], true)",
    ],
    23: [
      "APT_20_E_STUDDED_JACKET",
      "$gameSelfSwitches.setValue([286, 23, 'A'], true)",
    ],
    24: ["APT_20_E_CASH", "$gameSelfSwitches.setValue([286, 24, 'A'], true)"],
  },

  9: {
    12: [
      "APT_21_CROSSWORD_BOOK",
      "$gameSelfSwitches.setValue([9, 12, 'A'], true)",
    ],
  },

  11: {
    8: ["APT_21_CLOSET_JUNK", "$gameSelfSwitches.setValue([11, 8, 'A'], true)"],
    3: [
      "APT_21_CLOSET_DCLOGGER",
      "$gameSelfSwitches.setValue([11, 3, 'A'], true)",
    ],
    4: [
      "APT_21_CLOSET_BROOM",
      "$gameSelfSwitches.setValue([11, 4, 'A'], true)",
    ],
    5: [
      "APT_21_CLOSET_ANTIDOTE",
      "$gameSelfSwitches.setValue([11, 5, 'A'], true)",
    ],
  },

  12: {
    11: [
      "APT_21_BATHROOM_MEDICELL",
      "$gameSelfSwitches.setValue([12, 11, 'A'], true)",
    ],
    14: [
      "APT_21_BATHROOM_SOAP",
      "$gameSelfSwitches.setValue([12, 14, 'A'], true)",
    ],
    18: [
      "APT_21_BATHROOM_ANXIETY_MEDS",
      "$gameSelfSwitches.setValue([12, 18, 'A'], true)",
    ],
  },

  112: {
    14: [
      "APT_21_DARK_ROOM_KEY",
      "$gameSelfSwitches.setValue([112, 14, 'A'], true)",
    ],
  },

  10: {
    10: [
      "APT_21_BEDROOM_BEEF_1",
      "$gameSelfSwitches.setValue([10, 10, 'A'], true)",
    ],
    8: [
      "APT_21_BEDROOM_BEEF_2",
      "$gameSelfSwitches.setValue([10, 8, 'A'], true)",
    ],
    9: [
      "APT_21_BEDROOM_BEEF_3",
      "$gameSelfSwitches.setValue([10, 9, 'A'], true)",
    ],
    7: [
      "APT_21_BEDROOM_BEEF_4",
      "$gameSelfSwitches.setValue([10, 7, 'A'], true)",
    ],
    16: [
      "APT_21_BEDROOM_SPACE_TRUCKERZ",
      "$gameSelfSwitches.setValue([10, 16, 'A'], true)",
    ],
    20: ["APT_21_MNW", "$gameSelfSwitches.setValue([10, 20, 'A'], true)"],
    13: [
      "APT_21_BEDROOM_FORK",
      "$gameSelfSwitches.setValue([10, 13, 'A'], true)",
    ],
    5: [
      "APT_21_BEDROOM_BEEF_5",
      "$gameSelfSwitches.setValue([10, 5, 'A'], true)",
    ],
    11: [
      "APT_21_BEDROOM_PLATE",
      "$gameSelfSwitches.setValue([10, 11, 'A'], true)",
    ],
    12: [
      "APT_21_BEDROOM_KNIFE",
      "$gameSelfSwitches.setValue([10, 12, 'A'], true)",
    ],
    6: [
      "APT_21_BEDROOM_BEEF_6",
      "$gameSelfSwitches.setValue([10, 6, 'A'], true)",
    ],
    17: [
      "APT_21_BEDROOM_BATTERIES",
      "$gameSelfSwitches.setValue([10, 17, 'A'], true)",
    ],
  },

  334: {
    9: [
      "APT_22_RUBBER_BOOTS",
      "$gameSelfSwitches.setValue([334, 9, 'A'], true)",
    ],
    15: [
      "APT_22_JUICE_BOX",
      "$gameSelfSwitches.setValue([334, 15, 'A'], true)",
    ],
    13: ["APT_22_VINEGAR", "$gameSelfSwitches.setValue([334, 13, 'A'], true)"],
    14: [
      "APT_22_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([334, 14, 'A'], true)",
    ],
    12: ["APT_22_CASH", "$gameSelfSwitches.setValue([334, 12, 'A'], true)"],
  },

  335: {
    4: [
      "APT_22_BATHROOM_TOOTHPASTE",
      "$gameSelfSwitches.setValue([335, 4, 'A'], true)",
    ],
  },

  337: {
    4: [
      "APT_22_HARRIET_BEDROOM_CLOTH",
      "$gameSelfSwitches.setValue([337, 4, 'A'], true)",
    ],
  },

  336: {
    2: [
      "APT_22_SOPHIE_BEDROOM_MARBLES",
      "$gameSelfSwitches.setValue([336, 2, 'A'], true)",
    ],
  },

  15: {
    47: ["APT_25_KLYSOX", "$gameSelfSwitches.setValue([15, 47, 'A'], true)"],
    48: ["APT_25_PLATE", "$gameSelfSwitches.setValue([15, 48, 'A'], true)"],
    26: ["APT_25_FORK", "$gameSelfSwitches.setValue([15, 26, 'A'], true)"],
  },

  16: {
    3: [
      "APT_25_DANS_ROOM_NEODUO",
      "$gameSelfSwitches.setValue([16, 3, 'A'], true); sVr(896, 5);", // danQuestState = 5
    ],
    12: [
      "APT_25_DANS_ROOM_ORANGE_DRINK",
      "$gameSelfSwitches.setValue([16, 12, 'A'], true)",
    ],
  },

  115: {
    11: [
      "APT_27_CRUMPLED_MANUSCRIPT",
      "$gameSelfSwitches.setValue([115, 11, 'A'], true)",
    ],
    18: ["APT_27_TEA_SET", "$gameSelfSwitches.setValue([115, 18, 'A'], true)"],
    3: ["APT_27_WALLET", "$gameSelfSwitches.setValue([115, 3, 'A'], true)"],
  },

  116: {
    4: [
      "APT_27_BATHROOM_ROACH",
      "$gameSelfSwitches.setValue([116, 4, 'B'], true)",
    ],
  },

  117: {
    9: [
      "APT_27_BEDROOM_KITSCH_LAMP",
      "$gameSelfSwitches.setValue([117, 9, 'A'], true)",
    ],
    7: [
      "APT_27_BEDROOM_CLEAN_MANUSCRIPT",
      "$gameSelfSwitches.setValue([117, 7, 'A'], true)",
    ],
  },

  118: {
    6: [
      "APT_27_OFFICE_BACKGAMMON",
      "$gameSelfSwitches.setValue([118, 6, 'A'], true)",
    ],
    8: [
      "APT_27_OFFICE_WHISKEY",
      "$gameSelfSwitches.setValue([118, 8, 'A'], true)",
    ],
  },

  139: {
    9: [
      "APT_28_LAUNDRY_REAGENT",
      "$gameSelfSwitches.setValue([139, 9, 'A'], true)",
    ],
  },

  133: {
    7: [
      "APT_28_TWILIGHT_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([133, 7, 'A'], true)",
    ],
  },

  134: {
    9: [
      "APT_28_TWILIGHT_SHURIKEN",
      "$gameSelfSwitches.setValue([134, 9, 'A'], true)",
    ],
  },

  136: {
    7: [
      "APT_28_MIDNIGHT_VALVE",
      "$gameSelfSwitches.setValue([136, 7, 'A'], true)",
    ],
  },

  137: {
    6: [
      "APT_28_TWILIGHT_VALVE",
      "$gameSelfSwitches.setValue([137, 6, 'A'], true)",
    ],
  },

  125: {
    21: [
      "APT_28_PIRANHAS_COMBAT_VICTORY",
      "$gameSelfSwitches.setValue([125, 21, 'C'], true)",
    ],
  },

  142: {
    8: [
      "APT_28_GARBAGE_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([142, 8, 'A'], true)",
    ],
  },

  138: {
    6: [
      "APT_28_ABYSSAL_VALVE",
      "$gameSelfSwitches.setValue([138, 6, 'A'], true)",
    ],
  },

  141: {
    7: [
      "APT_28_GARBAGE_ENZYME",
      "$gameSelfSwitches.setValue([141, 7, 'A'], true)",
    ],
  },

  144: {
    9: [
      "APT_28_ABYSSAL_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([144, 9, 'A'], true)",
    ],
  },

  149: {
    49: [
      "APT_28_ABYSSAL_STIMULANT",
      "$gameSelfSwitches.setValue([149, 49, 'A'], true)",
    ],
    51: [
      "APT_28_ABYSSAL_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([149, 51, 'A'], true)",
    ],
    50: [
      "APT_28_ABYSSAL_ELIXIR",
      "$gameSelfSwitches.setValue([149, 50, 'A'], true)",
    ],
  },

  147: {
    8: [
      "APT_28_HADAL_VALVE",
      "$gameSelfSwitches.setValue([147, 8, 'A'], true)",
    ],
  },

  7: {
    2: ["F2_APT_21_KEY", "$gameSelfSwitches.setValue([7, 2, 'A'], true)"],
    30: ["F2_PISTOL", "$gameSelfSwitches.setValue([7, 30, 'A'], true)"],
    31: [
      "F2_PISTOL_BULLETS_1",
      "$gameSelfSwitches.setValue([7, 31, 'A'], true)",
    ],
    32: [
      "F2_PISTOL_BULLETS_2",
      "$gameSelfSwitches.setValue([7, 32, 'A'], true)",
    ],
  },

  372: {
    31: [
      "F2_GRINNING_BEAST_CHASE_POOL_CUE",
      "$gameSelfSwitches.setValue([372, 31, 'A'], true)",
    ],
  },

  329: {
    7: ["APT_24_MOP", "$gameSelfSwitches.setValue([329, 7, 'A'], true)"],
    8: [
      "APT_24_COMBAT_KNIFE",
      "$gameSelfSwitches.setValue([329, 8, 'A'], true)",
    ],
    5: ["APT_24_KLYSOX", "$gameSelfSwitches.setValue([329, 5, 'A'], true)"],
    6: [
      "APT_24_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([329, 6, 'A'], true)",
    ],
  },

  331: {
    6: [
      "APT_24_BATHROOM_SOAP",
      "$gameSelfSwitches.setValue([331, 6, 'A'], true)",
    ],
  },

  330: {
    11: [
      "APT_24_LIVINGROOM_ELEPHANT_STATUETTE",
      "$gameSelfSwitches.setValue([330, 11, 'A'], true)",
    ],
    12: [
      "APT_24_LIVINGROOM_DINNER_PLATE_1",
      "$gameSelfSwitches.setValue([330, 12, 'A'], true)",
    ],
    14: [
      "APT_24_LIVINGROOM_KNIFE",
      "$gameSelfSwitches.setValue([330, 14, 'A'], true)",
    ],
    13: [
      "APT_24_LIVINGROOM_DINNER_PLATE_2",
      "$gameSelfSwitches.setValue([330, 13, 'A'], true)",
    ],
    15: [
      "APT_24_LIVINGROOM_FORK",
      "$gameSelfSwitches.setValue([330, 15, 'A'], true)",
    ],
    9: [
      "APT_24_KITCHEN_VINEGAR",
      "$gameSelfSwitches.setValue([330, 9, 'A'], true)",
    ],
  },

  332: {
    9: [
      "APT_24_BEDROOM_CHOCKY_BAR_1",
      "$gameSelfSwitches.setValue([332, 9, 'A'], true)",
    ],
    8: [
      "APT_24_BEDROOM_CHOCKY_BAR_2",
      "$gameSelfSwitches.setValue([332, 8, 'A'], true)",
    ],
  },

  333: {
    28: [
      "APT_24_SEWING_DENIM_VEST",
      "$gameSelfSwitches.setValue([333, 28, 'A'], true)",
    ],
    29: [
      "APT_24_SEWING_BUTTON_UP_SHIRT",
      "$gameSelfSwitches.setValue([333, 29, 'A'], true)",
    ],
    30: ["APT_24_SUIT", "$gameSelfSwitches.setValue([333, 30, 'A'], true)"],
  },
};

const TRASH_CAN_ITEM_OVERRIDES = {
  108: {
    18: ["APT_31_TRASH", "$gameSelfSwitches.setValue([108, 18, 'A'], true)"],
  },

  265: {
    18: [
      "APT_31_DARK_TRASH",
      "$gameSelfSwitches.setValue([265, 18, 'A'], true)",
    ],
  },

  110: {
    5: [
      "APT_31_OBSERVATORY_TRASH",
      "$gameSelfSwitches.setValue([110, 5, 'A'], true)",
    ],
  },

  31: {
    20: ["APT_32_TRASH", "$gameSelfSwitches.setValue([31, 20, 'A'], true)"],
  },

  120: {
    9: [
      "APT_34_KITCHEN_TRASH",
      "$gameSelfSwitches.setValue([120, 9, 'A'], true)",
    ],
  },

  35: {
    23: ["APT_37_TRASH", "$gameSelfSwitches.setValue([35, 23, 'A'], true)"],
  },
  39: {
    8: [
      "APT_37_BEDROOM_TRASH",
      "$gameSelfSwitches.setValue([39, 8, 'A'], true)",
    ],
  },

  352: {
    8: [
      "APT_37_LOCKED_ROOM_TRASH",
      "$gameSelfSwitches.setValue([352, 8, 'A'], true)",
    ],
  },

  353: {
    12: ["APT_38_TRASH", "$gameSelfSwitches.setValue([353, 12, 'A'], true)"],
  },

  9: {
    16: ["APT_21_TRASH", "$gameSelfSwitches.setValue([9, 16, 'A'], true)"],
  },

  334: {
    11: ["APT_22_TRASH", "$gameSelfSwitches.setValue([334, 11, 'A'], true)"],
  },

  337: {
    3: [
      "APT_22_HARRIET_BEDROOM_TRASH",
      "$gameSelfSwitches.setValue([337, 3, 'A'], true)",
    ],
  },

  336: {
    4: [
      "APT_22_SOPHIE_BEDROOM_TRASH",
      "$gameSelfSwitches.setValue([336, 4, 'A'], true)",
    ],
  },

  115: {
    13: ["APT_27_TRASH", "$gameSelfSwitches.setValue([115, 13, 'A'], true)"],
  },
};

const FRIDGE_ITEM_OVERRIDES = {
  276: {
    3: ["APT_30_FRIDGE", "$gameSelfSwitches.setValue([276, 3, 'A'], true)"],
  },
  108: {
    6: ["APT_31_FRIDGE", "sSw(690, true);"],
  },
  31: {
    6: ["APT_32_FRIDGE", "$gameSelfSwitches.setValue([31, 6, 'A'], true)"],
  },
  120: {
    21: ["APT_34_FRIDGE", "$gameSelfSwitches.setValue([120, 21, 'A'], true)"],
  },
  36: {
    6: ["APT_37_FRIDGE", "$gameSelfSwitches.setValue([36, 6, 'A'], true)"],
  },
  353: {
    10: ["APT_38_FRIDGE", "$gameSelfSwitches.setValue([353, 10, 'A'], true)"],
  },
  364: {
    7: ["APT_35_FRIDGE", "$gameSelfSwitches.setValue([364, 7, 'A'], true)"],
  },
  285: {
    5: ["APT_20_FRIDGE", "$gameSelfSwitches.setValue([285, 5, 'A'], true)"],
  },
  9: {
    28: ["APT_21_FRIDGE", "$gameSelfSwitches.setValue([9, 28, 'A'], true)"],
  },
  334: {
    6: ["APT_22_FRIDGE", "$gameSelfSwitches.setValue([334, 6, 'A'], true)"],
  },
  15: {
    7: ["APT_25_FRIDGE", "$gameSelfSwitches.setValue([15, 7, 'A'], true)"],
  },
  115: {
    6: ["APT_27_FRIDGE", "$gameSelfSwitches.setValue([115, 6, 'A'], true)"],
  },
  330: {
    7: [
      "APT_24_KITCHEN_FRIDGE",
      "$gameSelfSwitches.setValue([330, 7, 'A'], true)",
    ],
  },
};

const FIRST_AID_BOX_ITEM_OVERRIDES = {
  278: {
    8: [
      "APT_30_SW_FIRST_AID_BOX",
      "$gameSelfSwitches.setValue([278, 8, 'A'], true)",
    ],
  },
};

const BATHROOM_MIRROR_ITEM_OVERRIDES = {
  278: {
    5: [
      "APT_30_SW_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([278, 5, 'A'], true)",
    ],
  },
  111: {
    6: [
      "APT_31_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([111, 6, 'A'], true)",
    ],
  },
  288: {
    5: [
      "APT_20_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([288, 5, 'A'], true)",
    ],
  },
  12: {
    10: [
      "APT_21_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([12, 10, 'A'], true)",
    ],
  },
  355: {
    3: [
      "APT_22_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([355, 3, 'A'], true)",
    ],
  },
  331: {
    5: [
      "APT_24_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([331, 5, 'A'], true)",
    ],
  },
};

var UpdateEventContent = UpdateEventContent || {};

const OBSERVATORY_TRASH_ENDING = [
  {
    code: 401,
    indent: 0,
    parameters: ["You also find a crumpled note in the trash."],
  },
  {
    code: 401,
    indent: 0,
    parameters: ["You put the note on the table."],
  },
  {
    code: 205,
    indent: 0,
    parameters: [
      16,
      {
        list: [
          {
            code: 45,
            parameters: ['this.sOn("A");'],
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
        code: 45,
        parameters: ['this.sOn("A");'],
        indent: null,
      },
    ],
  },
  {
    code: 0,
    indent: 0,
    parameters: [],
  },
];

UpdateEventContent.overrideOverworldPickups = function (currentMapId) {
  function getAPItemPickupList(script, itemName, prefix = "") {
    return [
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: [`${prefix}Take ${itemName}\\C[0]?`],
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

  const eventsToOverride = MAP_OVERWORLD_ITEM_OVERRIDES[currentMapId];
  if (!eventsToOverride) return;
  Object.keys(eventsToOverride).forEach((eventId) => {
    const [name, script] = eventsToOverride[eventId];
    const event = $dataMap.events[eventId];
    // the rose from the masked shadow is a special case because
    // it's the only pickup that has a later event page
    // overriding only the first possible page here
    // because i forced the chosen gift to be the first one
    if (name === "F3_MASKED_SHADOW_GIFT") {
      event.pages[3].list = getAPItemPickupList(
        script,
        LookOutsideAPClient.getItemName("F3_MASKED_SHADOW_GIFT"),
        "A gift from the masked shadow? ...",
      );
      event.pages[3].image = LookOutsideAPClient.getItemImage(name);
    } else {
      event.pages[0].list = getAPItemPickupList(
        script,
        LookOutsideAPClient.getItemName(name),
      );
      event.pages[0].image = LookOutsideAPClient.getItemImage(name);
    }

    if (name === "APT_37_CRAFTING_KIT") {
      // need to change page one on both the livingroom and bathroom versions
      // so they check the custom self switch instead of the ownership switch
      event.pages[1].conditions = {
        actorId: 1,
        actorValid: false,
        itemId: 1,
        itemValid: false,
        selfSwitchCh: "A",
        selfSwitchValid: true,
        switch1Id: 1,
        switch1Valid: false,
        switch2Id: 1,
        switch2Valid: false,
        variableId: 1,
        variableValid: false,
        variableValue: 0,
      };
    }
  });
};

UpdateEventContent.overrideTrashSearchPickups = function (currentMapId) {
  function getAPTrashSearchPickupList(script, itemName) {
    return [
      {
        code: 250,
        indent: 0,
        parameters: [
          {
            name: "RifleThroughTrash",
            volume: 90,
            pitch: 100,
            pan: 0,
          },
        ],
      },
      {
        code: 230,
        indent: 0,
        parameters: [60],
      },
      {
        code: 355,
        indent: 0,
        parameters: [`${script}`],
      },
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: [`Find {${itemName}}\\C[0].`],
      },
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
    ];
  }

  const trashCanEventsToOverride = TRASH_CAN_ITEM_OVERRIDES[currentMapId];
  if (trashCanEventsToOverride) {
    Object.keys(trashCanEventsToOverride).forEach((eventId) => {
      const [name, script] = trashCanEventsToOverride[eventId];
      const event = $dataMap.events[eventId];
      event.pages[0].list = getAPTrashSearchPickupList(
        script,
        LookOutsideAPClient.getItemName(name),
      );
      if (name === "APT_31_OBSERVATORY_TRASH") {
        // searching the observatory trash also pulls out edwin's notes
        event.pages[0].list = event.pages[0].list.concat(
          OBSERVATORY_TRASH_ENDING,
        );
      }
    });
  }
};

UpdateEventContent.overrideFridgePickups = function (currentMapId) {
  function getAPFridgePickupList(script, itemName) {
    return [
      {
        code: 117,
        indent: 0,
        parameters: [286],
      },
      {
        code: 205,
        indent: 0,
        parameters: [
          0,
          {
            list: [
              {
                code: 36,
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
            code: 36,
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
            parameters: [10],
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
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: ["Some food is in here."],
      },
      {
        code: 102,
        indent: 0,
        parameters: [["Loot the fridge.", "Leave it."], -1, 0, 2, 0],
      },
      {
        code: 402,
        indent: 0,
        parameters: [0, "Loot the fridge."],
      },
      {
        code: 101,
        indent: 1,
        parameters: ["", 0, 0, 1, ""],
      },
      {
        code: 401,
        indent: 1,
        parameters: [`Find ${itemName}\\C[0].`],
      },
      {
        code: 122,
        indent: 1,
        parameters: [543, 543, 1, 0, 1],
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

  const fridgeEventsToOverride = FRIDGE_ITEM_OVERRIDES[currentMapId];
  if (fridgeEventsToOverride) {
    Object.keys(fridgeEventsToOverride).forEach((eventId) => {
      const [name, script] = fridgeEventsToOverride[eventId];
      const event = $dataMap.events[eventId];
      event.pages[0].list = getAPFridgePickupList(
        script,
        LookOutsideAPClient.getItemName(name),
      );
    });
  }
};

UpdateEventContent.overrideFirstAidBoxPickups = function (currentMapId) {
  function getFirstAidBoxPickupList(script, itemName) {
    return [
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: ["A small first aid box."],
      },
      {
        code: 102,
        indent: 0,
        parameters: [["Open it.", "Leave it."], 1, 0, 2, 0],
      },
      {
        code: 402,
        indent: 0,
        parameters: [0, "Open it."],
      },
      {
        code: 355,
        indent: 1,
        parameters: [`${script}`],
      },
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 1,
        parameters: [`Inside, you find ${itemName}\\C[0].`],
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

  const firstAidBoxEventsToOverride =
    FIRST_AID_BOX_ITEM_OVERRIDES[currentMapId];
  if (firstAidBoxEventsToOverride) {
    Object.keys(firstAidBoxEventsToOverride).forEach((eventId) => {
      const [name, script] = firstAidBoxEventsToOverride[eventId];
      const event = $dataMap.events[eventId];
      event.pages[0].list = getFirstAidBoxPickupList(
        script,
        LookOutsideAPClient.getItemName(name),
      );
    });
  }
};

UpdateEventContent.overrideMirrorPickups = function (currentMapId) {
  function getMirrorPickupList(script, itemName) {
    return [
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 0,
        parameters: ["A bathroom sink."],
      },
      {
        code: 102,
        indent: 0,
        parameters: [["Search medicine cabinet.", "Leave it."], 1, 0, 2, 0],
      },
      {
        code: 402,
        indent: 0,
        parameters: [0, "Open it."],
      },
      {
        code: 355,
        indent: 1,
        parameters: [`${script}`],
      },
      {
        code: 101,
        indent: 0,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 1,
        parameters: [`Inside, you find ${itemName}\\C[0].`],
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
  const mirrorEventsToOverride = BATHROOM_MIRROR_ITEM_OVERRIDES[currentMapId];
  if (mirrorEventsToOverride) {
    Object.keys(mirrorEventsToOverride).forEach((eventId) => {
      const [name, script] = mirrorEventsToOverride[eventId];
      const event = $dataMap.events[eventId];
      event.pages[0].list = getMirrorPickupList(
        script,
        LookOutsideAPClient.getItemName(name),
      );
    });
  }
};

UpdateEventContent.overrideAllPickups = function (currentMapId) {
  UpdateEventContent.overrideOverworldPickups(currentMapId);
  UpdateEventContent.overrideTrashSearchPickups(currentMapId);
  UpdateEventContent.overrideFridgePickups(currentMapId);
  UpdateEventContent.overrideFirstAidBoxPickups(currentMapId);
  UpdateEventContent.overrideMirrorPickups(currentMapId);
};
