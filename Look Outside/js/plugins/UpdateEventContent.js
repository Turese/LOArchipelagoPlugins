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
    11: ["APT_21_PUROCARE", "$gameSelfSwitches.setValue([9, 11, 'A'], true)"],
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
    20: [
      "APT_21_BEDROOM_MNW",
      "$gameSelfSwitches.setValue([10, 20, 'A'], true)",
    ],
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
    // picking up key sets off the beast
    1: [
      "F2_APT_21_KEY",
      "$gameSelfSwitches.setValue([7, 1, 'A'], true); setSybilMajorStory(2); $gamePlayer.reserveTransfer(8, 32, 8, 0, 2);",
    ],
    30: ["F2_PISTOL", "$gameSelfSwitches.setValue([7, 30, 'A'], true)"],
    31: [
      "F2_PISTOL_BULLETS_1",
      "$gameSelfSwitches.setValue([7, 31, 'A'], true)",
    ],
    32: [
      "F2_PISTOL_BULLETS_2",
      "$gameSelfSwitches.setValue([7, 32, 'A'], true)",
    ],
    61: ["F2_GRENADE", "$gameSelfSwitches.setValue([7, 61, 'A'], true)"],
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

  309: {
    29: ["ERNEST_VODKA", "$gameSelfSwitches.setValue([309, 29, 'A'], true)"],
  },

  96: {
    9: [
      "FRED_ENTRYWAY_CHEEZ_STIX",
      "$gameSelfSwitches.setValue([96, 9, 'A'], true)",
    ],
    10: [
      "FRED_ENTRYWAY_KNIVES",
      "$gameSelfSwitches.setValue([96, 10, 'A'], true)",
    ],
    7: [
      "FRED_ENTRYWAY_MACHETE",
      "$gameSelfSwitches.setValue([96, 7, 'A'], true)",
    ],
  },

  217: {
    10: [
      "FRED_LIVING_ROOM_VINTAGE_CONSOLE",
      "$gameSelfSwitches.setValue([217, 10, 'A'], true)",
    ],
    9: [
      "FRED_LIVING_ROOM_BEER_STEIN",
      "$gameSelfSwitches.setValue([217, 9, 'A'], true)",
    ],
    11: [
      "FRED_LIVING_ROOM_WHISKEY",
      "$gameSelfSwitches.setValue([217, 11, 'A'], true)",
    ],
  },

  218: {
    5: [
      "FRED_CLOSET_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([218, 5, 'A'], true)",
    ],
    6: [
      "FRED_CLOSET_BANDAGES",
      "$gameSelfSwitches.setValue([218, 6, 'A'], true)",
    ],
  },

  95: {
    6: [
      "FRED_BATHROOM_MEDICATION",
      "$gameSelfSwitches.setValue([95, 6, 'A'], true)",
    ],
    9: [
      "FRED_BATHROOM_ANXIETY_MEDS",
      "$gameSelfSwitches.setValue([95, 9, 'A'], true)",
    ],
    10: [
      "FRED_BATHROOM_MEDICATION_2",
      "$gameSelfSwitches.setValue([95, 10, 'A'], true)",
    ],
    5: [
      "FRED_BATHROOM_TONIC",
      "$gameSelfSwitches.setValue([95, 5, 'A'], true)",
    ],
  },

  42: {
    9: [
      "FRED_HALL_CLOSET_PLASTIC_GLOVES",
      "$gameSelfSwitches.setValue([42, 9, 'A'], true)",
    ],
  },

  237: {
    9: ["FRED_HAT_ROOM_HAT", "$gameSelfSwitches.setValue([237, 9, 'A'], true)"],
  },

  119: {
    10: [
      "FRED_TOXIC_ROOM_WINDBREAKER",
      "$gameSelfSwitches.setValue([119, 10, 'A'], true)",
    ],
    11: [
      "FRED_TOXIC_ROOM_CASH",
      "$gameSelfSwitches.setValue([119, 11, 'A'], true)",
    ],
    5: [
      "FRED_TOXIC_ROOM_TONIC",
      "$gameSelfSwitches.setValue([119, 5, 'A'], true)",
    ],
    12: [
      "FRED_TOXIC_ROOM_JUNK",
      "$gameSelfSwitches.setValue([119, 12, 'A'], true)",
    ],
    17: [
      "FRED_TOXIC_ROOM_COMIC_BOOKS",
      "$gameSelfSwitches.setValue([119, 17, 'A'], true)",
    ],
  },

  238: {
    7: [
      "FRED_GODHEAD_ROOM_SHOTGUN_SHELLS",
      "$gameSelfSwitches.setValue([238, 7, 'A'], true)",
    ],
    6: [
      "FRED_GODHEAD_ROOM_SHOTGUN",
      "$gameSelfSwitches.setValue([238, 6, 'A'], true)",
    ],
    8: [
      "FRED_GODHEAD_ROOM_SHOTGUN_SHELLS_BOX",
      "$gameSelfSwitches.setValue([238, 8, 'A'], true)",
    ],
    5: [
      "FRED_GODHEAD_ROOM_TURPENTINE",
      "$gameSelfSwitches.setValue([238, 5, 'A'], true)",
    ],
  },

  97: {
    9: [
      "FRED_DARK_ROOM_BOTTLE",
      "$gameSelfSwitches.setValue([97, 9, 'A'], true)",
    ],
    2: [
      "FRED_DARK_ROOM_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([97, 2, 'A'], true)",
    ],
    6: [
      "FRED_DARK_ROOM_TURPENTINE",
      "$gameSelfSwitches.setValue([97, 6, 'A'], true)",
    ],
    8: [
      "FRED_DARK_ROOM_BEER_1",
      "$gameSelfSwitches.setValue([97, 8, 'A'], true)",
    ],
    7: [
      "FRED_DARK_ROOM_BEER_2",
      "$gameSelfSwitches.setValue([97, 7, 'A'], true)",
    ],
    49: ["FRED_ROOM_HONKO", "$gameSelfSwitches.setValue([97, 49, 'A'], true)"],
  },

  239: {
    7: [
      "TRUE_FRED_CLOSET_COMIC_BOOK",
      "$gameSelfSwitches.setValue([239, 7, 'A'], true)",
    ],
    5: [
      "TRUE_FRED_CLOSET_TURPENTINE_1",
      "$gameSelfSwitches.setValue([239, 5, 'A'], true)",
    ],
    2: [
      "TRUE_FRED_CLOSET_TURPENTINE_2",
      "$gameSelfSwitches.setValue([239, 2, 'A'], true)",
    ],
  },

  290: {
    6: ["RAT_LAIR_CLEAVER", "$gameSelfSwitches.setValue([290, 6, 'A'], true)"],
  },

  291: {
    19: [
      "RAT_LAIR_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([291, 19, 'A'], true)",
    ],
    6: [
      "RAT_LAIR_COWBOY_HAT",
      "$gameSelfSwitches.setValue([291, 6, 'A'], true)",
    ],
  },

  292: {
    5: [
      "RAT_LAIR_JUICE_BOX",
      "$gameSelfSwitches.setValue([292, 5, 'A'], true)",
    ],
    9: [
      "RAT_LAIR_CHEEZ_STIX",
      "$gameSelfSwitches.setValue([292, 9, 'A'], true)",
    ],
    7: [
      "RAT_LAIR_CHOCKY_BAR_1",
      "$gameSelfSwitches.setValue([292, 7, 'A'], true)",
    ],
    8: [
      "RAT_LAIR_CHOCKY_BAR_2",
      "$gameSelfSwitches.setValue([292, 8, 'A'], true)",
    ],
  },

  100: {
    25: ["RAT_APT_URN", "$gameSelfSwitches.setValue([100, 25, 'A'], true)"],
    14: [
      "RAT_APT_ROLLING_PIN",
      "$gameSelfSwitches.setValue([100, 14, 'A'], true)",
    ],
    16: [
      "RAT_APT_FOUNTAIN_PEN",
      "$gameSelfSwitches.setValue([100, 16, 'A'], true)",
    ],
    13: [
      "RAT_APT_CHEFS_KNIFE",
      "$gameSelfSwitches.setValue([100, 13, 'A'], true)",
    ],
  },

  101: {
    13: [
      "RAT_APT_BABY_ROOM_MUSIC_BOX",
      "$gameSelfSwitches.setValue([101, 13, 'A'], true)",
    ],
    12: [
      "RAT_APT_BABY_ROOM_BANDAGES",
      "$gameSelfSwitches.setValue([101, 12, 'A'], true)",
    ],
    14: [
      "RAT_APT_BABY_ROOM_DRAWINGS",
      "$gameSelfSwitches.setValue([101, 14, 'A'], true)",
    ],
  },

  102: {
    15: [
      "RAT_APT_BEDROOM_MAGAZINES",
      "$gameSelfSwitches.setValue([102, 15, 'A'], true)",
    ],
    15: [
      "RAT_APT_BEDROOM_DIRTY_MAGAZINES",
      "$gameSelfSwitches.setValue([102, 15, 'B'], true)",
    ],
    9: [
      "RAT_APT_BEDROOM_CHILD_BARRIER_KEY",
      "$gameSelfSwitches.setValue([102, 9, 'A'], true)",
    ],
    10: [
      "RAT_APT_BEDROOM_TRENCH_COAT",
      "$gameSelfSwitches.setValue([102, 10, 'A'], true)",
    ],
    13: [
      "RAT_APT_BEDROOM_DENIM_JACKET",
      "$gameSelfSwitches.setValue([102, 13, 'A'], true)",
    ],
    14: [
      "RAT_APT_BEDROOM_HOODIE",
      "$gameSelfSwitches.setValue([102, 14, 'A'], true)",
    ],
  },

  103: {
    12: [
      "RAT_APT_BATHROOM_TONIC",
      "$gameSelfSwitches.setValue([103, 12, 'A'], true)",
    ],
    9: [
      "RAT_APT_BATHROOM_TOOTHPASTE",
      "$gameSelfSwitches.setValue([103, 9, 'A'], true)",
    ],
  },

  98: {
    6: ["AURELIUS_MOLOTOV", "$gameSelfSwitches.setValue([98, 6, 'A'], true)"],
    11: ["AURELIUS_JUNK_1", "$gameSelfSwitches.setValue([98, 11, 'A'], true)"],
    10: ["AURELIUS_JUNK_2", "$gameSelfSwitches.setValue([98, 10, 'A'], true)"],
    2: ["AURELIUS_BROOM", "$gameSelfSwitches.setValue([98, 2, 'A'], true)"],
    7: ["AURELIUS_GASOLINE", "$gameSelfSwitches.setValue([98, 7, 'A'], true)"],
    5: [
      "AURELIUS_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([98, 5, 'A'], true)",
    ],
    14: [
      "AURELIUS_DUSTIN_FIGURINE",
      "$gameSelfSwitches.setValue([98, 14, 'A'], true)",
    ],
  },

  36: {
    5: ["APT_13_DISC", "$gameSelfSwitches.setValue([36, 5, 'A'], true)"],
  },

  99: {
    17: [
      "EYEBALL_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([99, 17, 'A'], true)",
    ],
  },

  105: {
    5: [
      "APT_12_SHOTGUN_SHELLS",
      "$gameSelfSwitches.setValue([105, 5, 'A'], true)",
    ],
    9: [
      "APT_12_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([105, 9, 'A'], true)",
    ],
    11: ["APT_12_GRENADE", "$gameSelfSwitches.setValue([105, 11, 'A'], true)"],
    12: [
      "APT_12_SHOTGUN_SHELLS_2",
      "$gameSelfSwitches.setValue([105, 12, 'A'], true)",
    ],
    10: [
      "APT_12_PISTOL_BULLETS_2",
      "$gameSelfSwitches.setValue([105, 10, 'A'], true)",
    ],
  },

  351: {
    4: [
      "APT_12_BATHROOM_VINEGAR",
      "$gameSelfSwitches.setValue([351, 4, 'A'], true)",
    ],
    5: [
      "APT_12_BATHROOM_CLEANEREX",
      "$gameSelfSwitches.setValue([351, 5, 'A'], true)",
    ],
  },

  348: {
    5: [
      "APT_12_KITCHEN_CLOSET_IRIS_KEY",
      "$gameSelfSwitches.setValue([348, 5, 'A'], true)",
    ],
  },

  350: {
    3: [
      "APT_12_INNER_WALL_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([350, 3, 'A'], true)",
    ],
  },

  360: {
    4: [
      "APT_12_PLANETARIUM_BROKEN_TELESCOPE",
      "$gameSelfSwitches.setValue([360, 4, 'A'], true)",
    ],
  },

  363: {
    3: [
      "APT_12_PLANETARIUM_MUFFIN",
      "$gameSelfSwitches.setValue([363, 3, 'A'], true)",
    ],
  },

  377: {
    6: [
      "APT_12_WALLS_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([377, 6, 'A'], true)",
    ],
    5: [
      "APT_12_WALLS_SHOTGUN_SHELLS",
      "$gameSelfSwitches.setValue([377, 5, 'A'], true)",
    ],
  },

  359: {
    3: [
      "APT_12_WALLS_APT_35_KEY",
      "$gameSelfSwitches.setValue([359, 3, 'A'], true)",
    ],
    25: [
      "APT_12_WALLS_SMG_BULLETS",
      "$gameSelfSwitches.setValue([359, 25, 'A'], true)",
    ],
  },

  378: {
    4: [
      "APT_12_WALLS_MAGNUM_BULLETS",
      "$gameSelfSwitches.setValue([378, 4, 'A'], true)",
    ],
    3: [
      "APT_12_WALLS_PITCHFORK",
      "$gameSelfSwitches.setValue([378, 3, 'A'], true)",
    ],
  },

  379: {
    5: [
      "APT_12_WALLS_RIFLE_BULLETS",
      "$gameSelfSwitches.setValue([379, 5, 'A'], true)",
    ],
    4: [
      "APT_12_WALLS_SHURIKEN",
      "$gameSelfSwitches.setValue([379, 4, 'A'], true)",
    ],
    6: [
      "APT_12_WALLS_TONIC",
      "$gameSelfSwitches.setValue([379, 6, 'A'], true)",
    ],
  },

  294: {
    20: ["APT_18_S_BEEF", "$gameSelfSwitches.setValue([294, 20, 'A'], true)"],
    5: [
      "APT_18_S_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([294, 5, 'A'], true)",
    ],
  },

  295: {
    6: ["APT_18_N_CASH", "$gameSelfSwitches.setValue([295, 6, 'A'], true)"],
  },

  296: {
    8: ["APT_18_E_OLD_CDS", "$gameSelfSwitches.setValue([296, 8, 'A'], true)"],
    6: [
      "APT_18_E_HEADPHONES",
      "$gameSelfSwitches.setValue([296, 6, 'A'], true)",
    ],
  },

  297: {
    29: [
      "APT_18_SE_POTTING_SOIL",
      "$gameSelfSwitches.setValue([297, 29, 'A'], true)",
    ],
    4: ["APT_18_SE_OLD_AXE", "$gameSelfSwitches.setValue([297, 4, 'A'], true)"],
    5: ["APT_18_SE_CAR_KEY", "$gameSelfSwitches.setValue([297, 5, 'A'], true)"],
  },

  298: {
    7: [
      "APT_18_BATHROOM_FROGIT_ABOUT_IT",
      "$gameSelfSwitches.setValue([298, 7, 'A'], true)",
    ],
    4: [
      "APT_18_BATHROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([298, 4, 'A'], true)",
    ],
    8: [
      "APT_18_BATHROOM_EYE_DROPS",
      "$gameSelfSwitches.setValue([298, 8, 'A'], true)",
    ],
  },

  106: {
    2: ["APT_11_MARS_DISC", "$gameSelfSwitches.setValue([106, 2, 'A'], true)"],
  },

  107: {
    1: [
      "APT_11_ODD_NECKLACE",
      "$gameSelfSwitches.setValue([107, 1, 'A'], true)",
    ],
  },

  67: {
    5: [
      "GF_OFFICE_BATHROOM_ELIXIR",
      "$gameSelfSwitches.setValue([67, 5, 'A'], true)",
    ],
  },

  68: {
    9: ["GF_OFFICE_WHISKEY", "$gameSelfSwitches.setValue([68, 9, 'A'], true)"],
    8: ["GF_OFFICE_CLAYMORE", "$gameSelfSwitches.setValue([68, 8, 'A'], true)"],
  },

  126: {
    2: [
      "GF_OFFICE_UNLABELED_CARTRIDGE",
      "$gameSelfSwitches.setValue([126, 2, 'A'], true)",
    ],
  },

  52: {
    14: [
      "CORNER_STORE_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([52, 14, 'A'], true)",
    ],
    5: [
      "CORNER_STORE_MYRMIDON_XII",
      "$gameSelfSwitches.setValue([52, 5, 'A'], true)",
    ],
  },

  53: {
    2: [
      "CORNER_STORE_STORAGE_VHS",
      "$gameSelfSwitches.setValue([53, 2, 'A'], true)",
    ],
    5: [
      "CORNER_STORE_STORAGE_DUCT_TAPE",
      "$gameSelfSwitches.setValue([53, 5, 'A'], true)",
    ],
    4: [
      "CORNER_STORE_STORAGE_HERBICIDE",
      "$gameSelfSwitches.setValue([53, 4, 'A'], true)",
    ],
  },

  56: {
    7: ["MUTT_WALLET", "$gameSelfSwitches.setValue([56, 7, 'A'], true)"],
    40: ["MUTT_BEER", "$gameSelfSwitches.setValue([56, 40, 'A'], true)"],
  },

  58: {
    3: [
      "MUTT_BATHROOM_WRAPPED_GIFT",
      "$gameSelfSwitches.setValue([58, 3, 'A'], true)",
    ],
    4: [
      "MUTT_BATHROOM_URANUS_DISC",
      "$gameSelfSwitches.setValue([58, 4, 'A'], true)",
    ],
  },

  63: {
    5: [
      "LL_BATHROOM_OLD_PICTURE",
      "$gameSelfSwitches.setValue([63, 5, 'A'], true)",
    ],
    7: [
      "LL_BATHROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([63, 7, 'A'], true)",
    ],
    9: [
      "LL_BATHROOM_ANXIETY_MEDS",
      "$gameSelfSwitches.setValue([63, 9, 'A'], true)",
    ],
    6: ["LL_BATHROOM_SOAP", "$gameSelfSwitches.setValue([63, 6, 'A'], true)"],
  },

  64: {
    13: [
      "LL_BEDROOM_COIN_COLLECTION",
      "$gameSelfSwitches.setValue([64, 13, 'A'], true)",
    ],
    11: [
      "LL_BEDROOM_MILITARY_UNIFORM",
      "$gameSelfSwitches.setValue([64, 11, 'A'], true)",
    ],
  },

  180: {
    8: [
      "LL_DINING_TABLE_CASH",
      "$gameSelfSwitches.setValue([180, 8, 'A'], true)",
    ],
    11: [
      "LL_DINING_TABLE_TONIC",
      "$gameSelfSwitches.setValue([180, 11, 'A'], true)",
    ],
    14: [
      "LL_DINING_TABLE_CHESSBOARD",
      "$gameSelfSwitches.setValue([180, 14, 'A'], true)",
    ],
  },

  209: {
    4: [
      "LL_OFFICE_WAR_MEDAL",
      "$gameSelfSwitches.setValue([209, 4, 'A'], true)",
    ],
    6: ["LL_OFFICE_WHISKEY", "$gameSelfSwitches.setValue([209, 6, 'A'], true)"],
    1: [
      "LL_OFFICE_CARVED_BEAVER",
      "$gameSelfSwitches.setValue([209, 1, 'A'], true)",
    ],
    7: [
      "LL_OFFICE_DETONATOR",
      "$gameSelfSwitches.setValue([209, 7, 'A'], true)",
    ],
  },

  208: {
    21: [
      "LL_EAST_SHOTGUN_SHELLS",
      "$gameSelfSwitches.setValue([208, 21, 'A'], true)",
    ],
    7: ["LL_EAST_CASH", "$gameSelfSwitches.setValue([208, 7, 'A'], true)"],
    18: [
      "LL_EAST_BASEBALL_BAT",
      "$gameSelfSwitches.setValue([208, 18, 'A'], true)",
    ],
    23: [
      "LL_EAST_OLD_RECORDS",
      "$gameSelfSwitches.setValue([208, 23, 'A'], true)",
    ],
    22: [
      "LL_EAST_SPEAKERS",
      "$gameSelfSwitches.setValue([208, 22, 'A'], true)",
    ],
  },

  210: {
    11: ["LL_NORTH_TONIC", "$gameSelfSwitches.setValue([210, 11, 'A'], true)"],
    10: [
      "LL_NORTH_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([210, 10, 'A'], true)",
    ],
    12: [
      "LL_NORTH_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([210, 12, 'A'], true)",
    ],
  },

  230: {
    4: [
      "LL_BEDROOM_HALL_BULLET_1",
      "$gameSelfSwitches.setValue([230, 4, 'A'], true)",
    ],
    3: [
      "LL_BEDROOM_HALL_RIFLE",
      "$gameSelfSwitches.setValue([230, 3, 'A'], true)",
    ],
    5: [
      "LL_BEDROOM_HALL_BULLET_2",
      "$gameSelfSwitches.setValue([230, 5, 'A'], true)",
    ],
  },

  216: {
    6: [
      "LL_MEMORIAL_GRENADE",
      "$gameSelfSwitches.setValue([216, 6, 'A'], true)",
    ],
    7: [
      "LL_MEMORIAL_DETONATOR",
      "$gameSelfSwitches.setValue([216, 7, 'A'], true)",
    ],
  },

  233: {
    6: [
      "LL_MEMORIAL_MAGNUM_BULLETS",
      "$gameSelfSwitches.setValue([233, 6, 'A'], true)",
    ],
    2: [
      "LL_MEMORIAL_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([233, 2, 'A'], true)",
    ],
    4: [
      "LL_MEMORIAL_SMG_BULLETS",
      "$gameSelfSwitches.setValue([233, 4, 'A'], true)",
    ],
    7: [
      "LL_MEMORIAL_AMMO_BELT",
      "$gameSelfSwitches.setValue([233, 7, 'A'], true)",
    ],
    8: [
      "LL_MEMORIAL_GRENADE",
      "$gameSelfSwitches.setValue([233, 8, 'A'], true)",
    ],
    3: [
      "LL_MEMORIAL_SHOTGUN_SHELL",
      "$gameSelfSwitches.setValue([233, 3, 'A'], true)",
    ],
    5: [
      "LL_MEMORIAL_RIFLE_BULLETS",
      "$gameSelfSwitches.setValue([233, 5, 'A'], true)",
    ],
    10: [
      "LL_MEMORIAL_AMMO_CRATE_1",
      "$gameSelfSwitches.setValue([233, 10, 'A'], true)",
    ],
    9: [
      "LL_MEMORIAL_AMMO_CRATE_2",
      "$gameSelfSwitches.setValue([233, 9, 'A'], true)",
    ],
  },

  181: {
    3: ["LL_JUPITER_DISC", "$gameSelfSwitches.setValue([181, 3, 'A'], true)"],
  },

  183: {
    2: ["LL_END_ELIXIR", "$gameSelfSwitches.setValue([183, 2, 'A'], true)"],
  },

  234: {
    2: [
      "LL_HELL_WRAITHSCOURGE",
      "$gameSelfSwitches.setValue([234, 2, 'A'], true)",
    ],
  },

  380: {
    3: [
      "LL_HELL_MASK_OLD_PHOTOGRAPH",
      "$gameSelfSwitches.setValue([380, 3, 'A'], true)",
    ],
  },

  60: {
    14: [
      "GF_JANITOR_NORTH_COINS",
      "$gameSelfSwitches.setValue([60, 14, 'A'], true)",
    ],
    17: [
      "GF_JANITOR_NORTH_COFFEE",
      "$gameSelfSwitches.setValue([60, 17, 'A'], true)",
    ],
    13: [
      "GF_JANITOR_NORTH_CARDS",
      "$gameSelfSwitches.setValue([60, 13, 'A'], true)",
    ],
    16: [
      "GF_JANITOR_NORTH_BEER",
      "$gameSelfSwitches.setValue([60, 16, 'A'], true)",
    ],
    22: ["GF_ARROWED_SASH", "$gameSelfSwitches.setValue([60, 22, 'A'], true)"],
    21: [
      "GF_MACKINAW_JACKET",
      "$gameSelfSwitches.setValue([60, 21, 'A'], true)",
    ],
    12: [
      "GF_JANITORS_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([60, 12, 'A'], true)",
    ],
    6: [
      "GF_JANITORS_DUCT_TAPE",
      "$gameSelfSwitches.setValue([60, 6, 'A'], true)",
    ],
    4: [
      "GF_JANITORS_HERBICIDE_1",
      "$gameSelfSwitches.setValue([60, 4, 'A'], true)",
    ],
    11: [
      "GF_JANITORS_ACID_SPRAYER",
      "$gameSelfSwitches.setValue([60, 11, 'A'], true)",
    ],
    3: [
      "GF_JANITORS_HERBICIDE_2",
      "$gameSelfSwitches.setValue([60, 3, 'A'], true)",
    ],
  },

  61: {
    6: [
      "GF_JANITOR_S_RATAVIA",
      "$gameSelfSwitches.setValue([61, 6, 'A'], true)",
    ],
    4: [
      "GF_JANITOR_S_ICE_MELT_SALT",
      "$gameSelfSwitches.setValue([61, 4, 'A'], true)",
    ],
    3: [
      "GF_JANITOR_S_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([61, 3, 'A'], true)",
    ],
  },

  47: {
    44: ["GF_HERBICIDE", "$gameSelfSwitches.setValue([47, 44, 'A'], true)"],
  },

  54: {
    39: [
      "GF_MENS_BATHROOM_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([278, 39, 'A'], true)",
    ],
  },

  55: {
    36: [
      "GF_WOMENS_BATHROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([55, 36, 'A'], true)",
    ],
    39: [
      "GF_WOMENS_BATHROOM_VENUS_DISC",
      "$gameSelfSwitches.setValue([55, 39, 'A'], true)",
    ],
  },

  69: {
    16: ["LAUNDRY_CLOTH_1", "$gameSelfSwitches.setValue([69, 16, 'A'], true)"],
    9: ["LAUNDRY_KLYSOX_1", "$gameSelfSwitches.setValue([69, 9, 'A'], true)"],
    10: ["LAUNDRY_T_SHIRT", "$gameSelfSwitches.setValue([69, 10, 'A'], true)"],
    15: ["LAUNDRY_CLOTH_2", "$gameSelfSwitches.setValue([69, 15, 'A'], true)"],
    6: ["LAUNDRY_DENIM_VEST", "$gameSelfSwitches.setValue([69, 6, 'A'], true)"],
    21: [
      "LAUNDRY_CERULEAN_FIGURE",
      "$gameSelfSwitches.setValue([69, 21, 'A'], true)",
    ],
    8: ["LAUNDRY_KLYSOX_2", "$gameSelfSwitches.setValue([69, 8, 'A'], true)"],
    7: ["LAUNDRY_KLYSOX_3", "$gameSelfSwitches.setValue([69, 7, 'A'], true)"],
  },

  240: {
    21: [
      "LL_SAPPER_PISTOL_BULLETS",
      "$gameSelfSwitches.setValue([240, 21, 'A'], true)",
    ],
    42: [
      "LL_SAPPER_EXPLOSIVE",
      "$gameSelfSwitches.setValue([240, 42, 'A'], true)",
    ],
    41: [
      "LL_SAPPER_DETONATOR",
      "$gameSelfSwitches.setValue([240, 41, 'A'], true)",
    ],
    30: [
      "LL_MEDICAL_VODKA",
      "$gameSelfSwitches.setValue([240, 30, 'A'], true)",
    ],
    31: [
      "LL_MEDICAL_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([240, 31, 'A'], true)",
    ],
    32: [
      "LL_MEDICAL_TONIC",
      "$gameSelfSwitches.setValue([240, 32, 'A'], true)",
    ],
    40: [
      "LL_MEDICAL_BANDAGES",
      "$gameSelfSwitches.setValue([240, 40, 'A'], true)",
    ],
    33: [
      "LL_MEDICAL_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([240, 33, 'A'], true)",
    ],
    43: [
      "LL_MINESWEEPER_SPADE",
      "$gameSelfSwitches.setValue([240, 43, 'A'], true)",
    ],
    22: [
      "LL_MINESWEEPER_VODKA",
      "$gameSelfSwitches.setValue([240, 22, 'A'], true)",
    ],
  },

  71: {
    24: [
      "MAILROOM_OFFICE_CELL_PHONE",
      "$gameSelfSwitches.setValue([71, 24, 'A'], true)",
    ],
    22: [
      "MAILROOM_OFFICE_SUN_DISC",
      "$gameSelfSwitches.setValue([71, 22, 'A'], true)",
    ],
  },

  72: {
    3: [
      "MAILROOM_STORAGE_SATURN_DISC",
      "$gameSelfSwitches.setValue([72, 3, 'A'], true)",
    ],
    2: [
      "MAILROOM_STORAGE_DUCT_TAPE",
      "$gameSelfSwitches.setValue([72, 2, 'A'], true)",
    ],
    6: [
      "MAILROOM_STORAGE_MAGNUM_BULLETS",
      "$gameSelfSwitches.setValue([72, 6, 'A'], true)",
    ],
    5: [
      "MAILROOM_STORAGE_SILVER_MAGNUM",
      "$gameSelfSwitches.setValue([72, 5, 'A'], true)",
    ],
  },

  194: {
    32: [
      "SEWER_N_TOP_LOCKED_ROOM_VINTAGE_SNEAKERS",
      "$gameSelfSwitches.setValue([194, 32, 'A'], true)",
    ],
  },

  203: {
    38: [
      "SEWER_N_LOWER_LOCKED_ROOM_CATAFALQUE",
      "$gameSelfSwitches.setValue([203, 38, 'A'], true)",
    ],
  },

  256: {
    17: [
      "SEWER_E_INDIGO_MASK",
      "$gameSelfSwitches.setValue([256, 17, 'A'], true)",
    ],
  },

  196: {
    17: [
      "SEWER_NE_BANDAGES",
      "$gameSelfSwitches.setValue([196, 17, 'A'], true)",
    ],
    18: [
      "SEWER_NE_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([196, 18, 'A'], true)",
    ],
  },

  255: {
    6: [
      "SEWER_DAVID_HARD_HAT",
      "$gameSelfSwitches.setValue([255, 6, 'A'], true)",
    ],
    7: [
      "SEWER_DAVID_PLASTIC_GLOVES",
      "$gameSelfSwitches.setValue([255, 7, 'A'], true)",
    ],
    8: [
      "SEWER_DAVID_KLYSOX",
      "$gameSelfSwitches.setValue([255, 8, 'A'], true)",
    ],
    3: ["SEWER_DAVID_MOP", "$gameSelfSwitches.setValue([255, 3, 'A'], true)"],
    5: [
      "SEWER_DAVID_RUBBER_BOOTS",
      "$gameSelfSwitches.setValue([255, 5, 'A'], true)",
    ],
  },

  259: {
    16: [
      "SEWER_SE_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([259, 16, 'A'], true)",
    ],
    3: [
      "SEWER_SE_SUPER_EXPLOSIVE",
      "$gameSelfSwitches.setValue([259, 3, 'A'], true)",
    ],
    18: [
      "SEWER_SE_STIMULANT",
      "$gameSelfSwitches.setValue([259, 18, 'A'], true)",
    ],
    17: [
      "SEWER_SE_FIREBOMB",
      "$gameSelfSwitches.setValue([259, 17, 'A'], true)",
    ],
  },

  201: {
    63: [
      "SEWER_FURNACE_IRIS_KEY",
      "$gameSelfSwitches.setValue([201, 63, 'A'], true)",
    ],
  },

  219: {
    32: ["SEWER_W_AXE", "$gameSelfSwitches.setValue([219, 32, 'A'], true)"],
  },

  258: {
    9: [
      "SEWER_SW_CHOCKY_BAR",
      "$gameSelfSwitches.setValue([258, 9, 'A'], true)",
    ],
    10: ["SEWER_SW_COLA", "$gameSelfSwitches.setValue([258, 10, 'A'], true)"],
    11: [
      "SEWER_SW_MOLOTOV_1",
      "$gameSelfSwitches.setValue([258, 11, 'A'], true)",
    ],
    12: [
      "SEWER_SW_MOLOTOV_2",
      "$gameSelfSwitches.setValue([258, 12, 'A'], true)",
    ],
  },

  257: {
    12: [
      "SEWER_SW_PADDED_JACKET",
      "$gameSelfSwitches.setValue([257, 12, 'A'], true)",
    ],
  },

  87: {
    32: ["B_UTILITY_JUNK_1", "$gameSelfSwitches.setValue([87, 32, 'A'], true)"],
    31: ["B_UTILITY_JUNK_2", "$gameSelfSwitches.setValue([87, 31, 'A'], true)"],
    30: ["B_UTILITY_JUNK_3", "$gameSelfSwitches.setValue([87, 30, 'A'], true)"],
    33: [
      "B_UTILITY_DUCT_TAPE_1",
      "$gameSelfSwitches.setValue([87, 33, 'A'], true)",
    ],
    34: [
      "B_UTILITY_DUCT_TAPE_2",
      "$gameSelfSwitches.setValue([87, 34, 'A'], true)",
    ],
  },

  83: {
    48: [
      "FUNGUS_ENTRANCE_MUSHROOM_1",
      "$gameSelfSwitches.setValue([83, 48, 'A'], true)",
    ],
    7: [
      "FUNGUS_ENTRANCE_MUSHROOM_2",
      "$gameSelfSwitches.setValue([83, 7, 'A'], true)",
    ],
    50: [
      "FUNGUS_ENTRANCE_MUSHROOM_3",
      "$gameSelfSwitches.setValue([83, 50, 'A'], true)",
    ],
    51: [
      "FUNGUS_ENTRANCE_MUSHROOM_4",
      "$gameSelfSwitches.setValue([83, 51, 'A'], true)",
    ],
    46: [
      "FUNGUS_ENTRANCE_MUSHROOM_5",
      "$gameSelfSwitches.setValue([83, 46, 'A'], true)",
    ],
    5: [
      "FUNGUS_ENTRANCE_MUSHROOM_6",
      "$gameSelfSwitches.setValue([83, 5, 'A'], true)",
    ],
    52: [
      "FUNGUS_ENTRANCE_MUSHROOM_7",
      "$gameSelfSwitches.setValue([83, 52, 'A'], true)",
    ],
    49: [
      "FUNGUS_ENTRANCE_MUSHROOM_8",
      "$gameSelfSwitches.setValue([83, 49, 'A'], true)",
    ],
  },

  188: {
    15: [
      "FUNGUS_STORE_KEY",
      "$gameSelfSwitches.setValue([188, 15, 'A'], true)",
    ],
  },

  187: {
    35: [
      "FUNGUS_NEPTUNE_DISC",
      "$gameSelfSwitches.setValue([187, 35, 'A'], true)",
    ],
  },

  127: {
    48: [
      "FUNGUS_DEPTHS_MUSHROOM_1",
      "$gameSelfSwitches.setValue([127, 48, 'A'], true)",
    ],
    49: [
      "FUNGUS_DEPTHS_MUSHROOM_2",
      "$gameSelfSwitches.setValue([127, 49, 'A'], true)",
    ],
    19: [
      "FUNGUS_DEPTHS_MUSHROOM_3",
      "$gameSelfSwitches.setValue([127, 19, 'A'], true)",
    ],
    54: [
      "FUNGUS_DEPTHS_MUSHROOM_4",
      "$gameSelfSwitches.setValue([127, 54, 'A'], true)",
    ],
    5: [
      "FUNGUS_DEPTHS_MUSHROOM_5",
      "$gameSelfSwitches.setValue([127, 5, 'A'], true)",
    ],
    50: [
      "FUNGUS_DEPTHS_MUSHROOM_6",
      "$gameSelfSwitches.setValue([127, 50, 'A'], true)",
    ],
    51: [
      "FUNGUS_DEPTHS_MUSHROOM_7",
      "$gameSelfSwitches.setValue([127, 51, 'A'], true)",
    ],
    27: [
      "FUNGUS_DEPTHS_MUSHROOM_8",
      "$gameSelfSwitches.setValue([127, 27, 'A'], true)",
    ],
    52: [
      "FUNGUS_DEPTHS_MUSHROOM_9",
      "$gameSelfSwitches.setValue([127, 52, 'A'], true)",
    ],
    22: [
      "FUNGUS_DEPTHS_MUSHROOM_10",
      "$gameSelfSwitches.setValue([127, 22, 'A'], true)",
    ],
    53: [
      "FUNGUS_DEPTHS_MUSHROOM_11",
      "$gameSelfSwitches.setValue([127, 53, 'A'], true)",
    ],
    32: [
      "FUNGUS_DEPTHS_MUSHROOM_12",
      "$gameSelfSwitches.setValue([127, 32, 'A'], true)",
    ],
    31: [
      "FUNGUS_DEPTHS_MUSHROOM_13",
      "$gameSelfSwitches.setValue([127, 31, 'A'], true)",
    ],
  },

  339: {
    12: [
      "B_PIT_ROOM_AZURE_GREATSWORD",
      "$gameSelfSwitches.setValue([339, 12, 'A'], true)",
    ],
  },

  401: {
    7: [
      "B_PIT_WRAPPED_PAINTING",
      "$gameSelfSwitches.setValue([401, 7, 'A'], true)",
    ],
  },

  273: {
    22: ["B2_MANGA_PILE_1", "$gameSelfSwitches.setValue([273, 22, 'A'], true)"],
    15: ["B2_DRAWINGS", "$gameSelfSwitches.setValue([273, 15, 'A'], true)"],
    5: ["B2_TRILBY", "$gameSelfSwitches.setValue([273, 5, 'A'], true)"],
    17: ["B2_MANGA_PILE_2", "$gameSelfSwitches.setValue([273, 17, 'A'], true)"],
    8: [
      "B2_VINTAGE_GAME_CONSOLE",
      "$gameSelfSwitches.setValue([273, 8, 'A'], true)",
    ],
    9: ["B2_ENERGY_DRINK", "$gameSelfSwitches.setValue([273, 9, 'A'], true)"],
    10: ["B2_BOCKY", "$gameSelfSwitches.setValue([273, 10, 'A'], true)"],
    23: ["B2_MANGA_PILE_3", "$gameSelfSwitches.setValue([273, 23, 'A'], true)"],
    6: ["B2_SHURIKEN", "$gameSelfSwitches.setValue([273, 6, 'A'], true)"],
    4: ["B2_FIGURINE", "$gameSelfSwitches.setValue([273, 4, 'A'], true)"],
  },

  84: {
    10: [
      "BOILER_NORTH_JUNK_1",
      "$gameSelfSwitches.setValue([84, 10, 'A'], true)",
    ],
    11: [
      "BOILER_NORTH_JUNK_2",
      "$gameSelfSwitches.setValue([84, 11, 'A'], true)",
    ],
    9: [
      "BOILER_NORTH_JUNK_3",
      "$gameSelfSwitches.setValue([84, 9, 'A'], true)",
    ],
    14: [
      "BOILER_NORTH_VODKA",
      "$gameSelfSwitches.setValue([84, 14, 'A'], true)",
    ],
  },

  303: {
    23: [
      "BOILER_ROOM_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([303, 23, 'A'], true)",
    ],
    33: [
      "BOILER_ROOM_HEALING_SPRAY",
      "$gameSelfSwitches.setValue([303, 33, 'A'], true)",
    ],
    28: [
      "BOILER_ROOM_MUSHROOM_1",
      "$gameSelfSwitches.setValue([303, 28, 'A'], true)",
    ],
    27: [
      "BOILER_ROOM_MUSHROOM_2",
      "$gameSelfSwitches.setValue([303, 27, 'A'], true)",
    ],
  },

  85: {
    3: [
      "BOILER_STORAGE_JUNK_1",
      "$gameSelfSwitches.setValue([85, 3, 'A'], true)",
    ],
    5: [
      "BOILER_STORAGE_JUNK_2",
      "$gameSelfSwitches.setValue([85, 5, 'A'], true)",
    ],
    10: [
      "BOILER_STORAGE_D_CLOGGER_1",
      "$gameSelfSwitches.setValue([85, 10, 'A'], true)",
    ],
    11: [
      "BOILER_STORAGE_D_CLOGGER_2",
      "$gameSelfSwitches.setValue([85, 11, 'A'], true)",
    ],
    21: [
      "BOILER_STORAGE_D_CLOGGER_3",
      "$gameSelfSwitches.setValue([85, 21, 'A'], true)",
    ],
    17: [
      "BOILER_STORAGE_ICE_MELT_SALT",
      "$gameSelfSwitches.setValue([85, 17, 'A'], true)",
    ],
    6: [
      "BOILER_STORAGE_DUCT_TAPE_1",
      "$gameSelfSwitches.setValue([85, 6, 'A'], true)",
    ],
    13: [
      "BOILER_STORAGE_DUCT_TAPE_2",
      "$gameSelfSwitches.setValue([85, 13, 'A'], true)",
    ],
    19: [
      "BOILER_STORAGE_DUCT_TAPE_3",
      "$gameSelfSwitches.setValue([85, 19, 'A'], true)",
    ],
    24: [
      "BOILER_STORAGE_MUSK",
      "$gameSelfSwitches.setValue([85, 24, 'A'], true)",
    ],
    9: [
      "BOILER_STORAGE_KLYSOX_1",
      "$gameSelfSwitches.setValue([85, 9, 'A'], true)",
    ],
    14: [
      "BOILER_STORAGE_KLYSOX_2",
      "$gameSelfSwitches.setValue([85, 14, 'A'], true)",
    ],
    23: [
      "BOILER_STORAGE_KLYSOX_3",
      "$gameSelfSwitches.setValue([85, 23, 'A'], true)",
    ],
    8: [
      "BOILER_STORAGE_GASOLINE_1",
      "$gameSelfSwitches.setValue([85, 8, 'A'], true)",
    ],
    12: [
      "BOILER_STORAGE_GASOLINE_2",
      "$gameSelfSwitches.setValue([85, 12, 'A'], true)",
    ],
    22: [
      "BOILER_STORAGE_VINEGAR_1",
      "$gameSelfSwitches.setValue([85, 22, 'A'], true)",
    ],
    7: [
      "BOILER_STORAGE_VINEGAR_2",
      "$gameSelfSwitches.setValue([85, 7, 'A'], true)",
    ],
  },

  79: {
    19: [
      "B_STEVE_DUCT_TAPE",
      "$gameSelfSwitches.setValue([79, 19, 'A'], true)",
    ],
    195: ["B_STEVE_JUNK_1", "$gameSelfSwitches.setValue([79, 195, 'A'], true)"],
    8: ["B_STEVE_JUNK_2", "$gameSelfSwitches.setValue([79, 8, 'A'], true)"],
    14: ["B_STEVE_JUNK_3", "$gameSelfSwitches.setValue([79, 14, 'A'], true)"],
    9: ["B_STEVE_JUNK_4", "$gameSelfSwitches.setValue([79, 9, 'A'], true)"],
  },

  80: {
    3: [
      "B_PLUTO_ROOM_CLAYMORE",
      "$gameSelfSwitches.setValue([80, 3, 'A'], true)",
    ],
  },

  82: {
    5: [
      "B_NEPTUNE_ROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([82, 5, 'A'], true)",
    ],
    6: [
      "B_NEPTUNE_ROOM_TONIC",
      "$gameSelfSwitches.setValue([82, 6, 'A'], true)",
    ],
    3: [
      "B_NEPTUNE_ROOM_ELIXIR",
      "$gameSelfSwitches.setValue([82, 3, 'A'], true)",
    ],
    7: [
      "B_NEPTUNE_ROOM_BANDAGES",
      "$gameSelfSwitches.setValue([82, 7, 'A'], true)",
    ],
  },

  81: {
    10: [
      "B_STORAGE_LOCKED_MEDICATION",
      "$gameSelfSwitches.setValue([81, 10, 'A'], true)",
    ],
    6: [
      "B_STORAGE_LOCKED_ANTIDOTE",
      "$gameSelfSwitches.setValue([81, 6, 'A'], true)",
    ],
    5: [
      "B_STORAGE_LOCKED_EYE_DROPS",
      "$gameSelfSwitches.setValue([81, 5, 'A'], true)",
    ],
    9: [
      "B_STORAGE_LOCKED_SMELLING_SALTS",
      "$gameSelfSwitches.setValue([81, 9, 'A'], true)",
    ],
    7: [
      "B_STORAGE_LOCKED_BALM",
      "$gameSelfSwitches.setValue([81, 7, 'A'], true)",
    ],
    3: [
      "B_STORAGE_LOCKED_LAPIS_BAND",
      "$gameSelfSwitches.setValue([81, 3, 'A'], true)",
    ],
    4: [
      "B_STORAGE_LOCKED_ANXIETY_MEDS",
      "$gameSelfSwitches.setValue([81, 4, 'A'], true)",
    ],
    8: [
      "B_STORAGE_LOCKED_DISINFECTANT",
      "$gameSelfSwitches.setValue([81, 8, 'A'], true)",
    ],
  },

  78: {
    51: ["SECURITY_CASH", "$gameSelfSwitches.setValue([78, 51, 'A'], true)"],
  },

  77: {
    6: [
      "SECURITY_STORAGE_GRENADE_1",
      "$gameSelfSwitches.setValue([77, 6, 'A'], true)",
    ],
    3: [
      "SECURITY_STORAGE_GRENADE_2",
      "$gameSelfSwitches.setValue([77, 3, 'A'], true)",
    ],
    10: [
      "SECURITY_STORAGE_DUCT_TAPE_1",
      "$gameSelfSwitches.setValue([77, 10, 'A'], true)",
    ],
    11: [
      "SECURITY_STORAGE_DUCT_TAPE_2",
      "$gameSelfSwitches.setValue([77, 11, 'A'], true)",
    ],
    7: [
      "SECURITY_STORAGE_SMG",
      "$gameSelfSwitches.setValue([77, 7, 'A'], true)",
    ],
    8: ["SMG_AMMO_1", "$gameSelfSwitches.setValue([77, 8, 'A'], true)"],
    9: ["SMG_AMMO_2", "$gameSelfSwitches.setValue([77, 9, 'A'], true)"],
    5: [
      "SECURITY_STORAGE_FLACK_JACKET",
      "$gameSelfSwitches.setValue([77, 5, 'A'], true)",
    ],
    4: [
      "SECURITY_STORAGE_COMBAT_KNIFE",
      "$gameSelfSwitches.setValue([77, 4, 'A'], true)",
    ],
  },

  430: {
    16: [
      "B_CAR_LUMPY_ITEM",
      "$gameSelfSwitches.setValue([430, 16, 'A'], true)",
    ],
  },

  86: {
    74: ["B_CAR_JUNK_1", "$gameSelfSwitches.setValue([86, 74, 'A'], true)"],
    72: ["B_CAR_JUNK_2", "$gameSelfSwitches.setValue([86, 72, 'A'], true)"],
    73: ["B_CAR_JUNK_3", "$gameSelfSwitches.setValue([86, 73, 'A'], true)"],
    76: ["B_CAR_GASOLINE", "$gameSelfSwitches.setValue([86, 76, 'A'], true)"],
    60: [
      "B_CAR_FLAMETHROWER",
      "$gameSelfSwitches.setValue([86, 60, 'A'], true)",
    ],
  },

  308: {
    1: [
      "HELL_CAR_LAIR_SWORD",
      "$gameSelfSwitches.setValue([308, 1, 'A'], true)",
    ],
  },

  272: {
    3: [
      "B_STUART_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([272, 3, 'A'], true)",
    ],
    4: [
      "B_STUART_SIMPLE_KEY",
      "$gameSelfSwitches.setValue([272, 4, 'A'], true)",
    ],
  },

  299: {
    7: ["B1_FRYING_PAN", "$gameSelfSwitches.setValue([299, 7, 'A'], true)"],
  },

  300: {
    4: [
      "B1_BEDROOM_FUR_COAT",
      "$gameSelfSwitches.setValue([300, 4, 'A'], true)",
    ],
    7: ["B1_BEDROOM_ALBUM", "$gameSelfSwitches.setValue([300, 7, 'A'], true)"],
  },

  301: {
    4: [
      "B1_BEDROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([301, 4, 'A'], true)",
    ],
  },

  302: {
    6: [
      "B1_BATHROOM_KLYSOX",
      "$gameSelfSwitches.setValue([302, 6, 'A'], true)",
    ],
    7: [
      "B1_BATHROOM_ANXIETY_MEDS",
      "$gameSelfSwitches.setValue([302, 7, 'A'], true)",
    ],
    5: [
      "B1_BATHROOM_STIMULANT",
      "$gameSelfSwitches.setValue([302, 5, 'A'], true)",
    ],
    16: [
      "B1_BATHROOM_URANUS_DISC",
      "$gameSelfSwitches.setValue([302, 16, 'A'], true)",
    ],
  },

  457: {
    8: ["F4_AXE", "$gameSelfSwitches.setValue([457, 8, 'A'], true)"],
    6: ["F4_HEALING_SPRAY", "$gameSelfSwitches.setValue([457, 6, 'A'], true)"],
    7: ["F4_THROWING_DARTS", "$gameSelfSwitches.setValue([457, 7, 'A'], true)"],
  },

  456: {
    6: ["F4_STIMULANT", "$gameSelfSwitches.setValue([456, 6, 'A'], true)"],
    1: ["F4_OLD_TAPE", "$gameSelfSwitches.setValue([456, 1, 'A'], true)"],
  },

  30: {
    10: [
      "STAIRWELL_POOL_CUE",
      "$gameSelfSwitches.setValue([30, 10, 'A'], true)",
    ],
  },

  // TODO: OTHER MEAT WORLD DROPS IN HERE
  408: {
    10: [
      "APT_32_BATHROOM_BITING_BOOTS",
      "$gameSelfSwitches.setValue([408, 10, 'A'], true)",
    ],
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

  96: {
    8: [
      "FRED_ENTRYWAY_TRASH",
      "$gameSelfSwitches.setValue([96, 8, 'A'], true)",
    ],
  },

  96: {
    8: [
      "FRED_ENTRYWAY_TRASH",
      "$gameSelfSwitches.setValue([96, 8, 'A'], true)",
    ],
  },

  100: {
    17: ["RAT_APT_TRASH", "$gameSelfSwitches.setValue([100, 17, 'A'], true)"],
  },

  56: {
    3: ["MUTT_TRASH", "$gameSelfSwitches.setValue([56, 3, 'A'], true)"],
  },

  60: {
    5: ["GF_JANITORS_TRASH", "$gameSelfSwitches.setValue([60, 5, 'A'], true)"],
  },

  69: {
    4: ["LAUNDRY_TRASH", "$gameSelfSwitches.setValue([69, 4, 'A'], true)"],
  },

  87: {
    6: ["B_UTILITY_TRASH_1", "$gameSelfSwitches.setValue([87, 6, 'A'], true)"],
    7: ["B_UTILITY_TRASH_2", "$gameSelfSwitches.setValue([87, 7, 'A'], true)"],
  },

  84: {
    5: [
      "BOILER_NORTH_TRASH_1",
      "$gameSelfSwitches.setValue([84, 5, 'A'], true)",
    ],
    7: [
      "BOILER_NORTH_TRASH_2",
      "$gameSelfSwitches.setValue([84, 7, 'A'], true)",
    ],
  },

  78: {
    30: ["SECURITY_TRASH", "$gameSelfSwitches.setValue([78, 30, 'A'], true)"],
  },

  451: {
    8: ["F4_TRASH_CAN_1", "$gameSelfSwitches.setValue([451, 8, 'A'], true)"],
    9: ["F4_TRASH_CAN_1", "$gameSelfSwitches.setValue([451, 9, 'A'], true)"],
  },

  452: {
    14: ["F4_TRASH_CAN_3", "$gameSelfSwitches.setValue([452, 14, 'A'], true)"],
    15: ["F4_TRASH_CAN_4", "$gameSelfSwitches.setValue([452, 15, 'A'], true)"],
    16: ["F4_TRASH_CAN_5", "$gameSelfSwitches.setValue([452, 16, 'A'], true)"],
    17: ["F4_TRASH_CAN_6", "$gameSelfSwitches.setValue([452, 17, 'A'], true)"],
  },

  405: {
    2: ["F4_TRASH_CAN_7", "$gameSelfSwitches.setValue([405, 2, 'A'], true)"],
    7: ["F4_TRASH_CAN_8", "$gameSelfSwitches.setValue([405, 7, 'A'], true)"],
  },
};

const FRIDGE_ITEM_OVERRIDES = {
  276: {
    3: ["APT_30_FRIDGE", "$gameSelfSwitches.setValue([276, 3, 'A'], true)"],
  },
  108: {
    6: ["APT_31_FRIDGE", "sSw(690, true);"],
  },
  31: { // looting the fridge summons baby teeth
    6: ["APT_32_FRIDGE", "$gameSelfSwitches.setValue([31, 6, 'A'], true); sSw(105, true);"],
  },
  120: {
    21: ["APT_34_FRIDGE", "$gameSelfSwitches.setValue([120, 21, 'A'], true)"],
  },
  35: {
    6: ["APT_37_FRIDGE", "$gameSelfSwitches.setValue([35, 6, 'A'], true)"],
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
  100: {
    6: ["RAT_APT_FRIDGE", "$gameSelfSwitches.setValue([100, 6, 'A'], true)"],
  },
  294: {
    4: ["APT_18_S_FRIDGE", "$gameSelfSwitches.setValue([294, 4, 'A'], true)"],
  },
  57: {
    5: ["MUTT_FRIDGE_1", "$gameSelfSwitches.setValue([57, 5, 'A'], true)"],
    9: ["MUTT_FRIDGE_1", "$gameSelfSwitches.setValue([57, 9, 'A'], true)"],
    10: ["MUTT_FRIDGE_1", "$gameSelfSwitches.setValue([57, 10, 'A'], true)"],
  },
  258: {
    6: ["SEWER_SW_FRIDGE", "$gameSelfSwitches.setValue([258, 6, 'A'], true)"],
  },
  273: {
    27: ["B2_FRIDGE", "$gameSelfSwitches.setValue([273, 27, 'A'], true)"],
  },
  299: {
    6: ["B1_FRIDGE", "$gameSelfSwitches.setValue([299, 6, 'A'], true)"],
  },
  358: {
    30: [
      "B_MAURICE_FRIDGE",
      "$gameSelfSwitches.setValue([358, 30, 'A'], true)",
    ],
  },
  // LL_FRIDGE
};

const FIRST_AID_BOX_ITEM_OVERRIDES = {
  278: {
    8: [
      "APT_30_SW_FIRST_AID_BOX",
      "$gameSelfSwitches.setValue([278, 8, 'A'], true)",
    ],
  },
  53: {
    7: [
      "CORNER_STORE_STORAGE_FIRST_AID_BOX",
      "$gameSelfSwitches.setValue([53, 7, 'A'], true)",
    ],
  },
  54: {
    38: [
      "GF_MENS_BATHROOM_FIRST_AID_BOX",
      "$gameSelfSwitches.setValue([54, 38, 'A'], true)",
    ],
  },
  257: {
    10: [
      "SEWER_SW_FIRST_AID_BOX_LOOT",
      "$gameSelfSwitches.setValue([257, 10, 'A'], true)",
    ],
  },
  56: {
    29: [
      "MUTT_FIRST_AID_BOX",
      "$gameSelfSwitches.setValue([56, 29, 'A'], true)",
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
  335: {
    3: [
      "APT_22_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([335, 3, 'A'], true)",
    ],
  },
  331: {
    5: [
      "APT_24_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([331, 5, 'A'], true)",
    ],
  },

  302: {
    4: [
      "B1_BATHROOM_MEDICINE_CABINET",
      "$gameSelfSwitches.setValue([302, 4, 'A'], true)",
    ],
  },
};

const ROACH_ITEM_OVERRIDES = {
  89: {
    5: "F3_CLOSET_ROACH",
  },
  288: {
    7: "APT_20_BATHROOM_ROACH",
  },
  116: {
    4: "APT_27_BATHROOM_ROACH",
  },
  42: {
    2: "FRED_HALL_CLOSET_ROACH",
  },

  237: {
    6: "FRED_HAT_ROOM_ROACH",
  },
  239: {
    9: "TRUE_FRED_CLOSET_ROACH",
  },
  59: {
    3: "MUTT_STORAGE_ROACH_1",
    4: "MUTT_STORAGE_ROACH_2",
  },
  79: {
    18: "B_STEVE_ROACH_1",
    21: "B_STEVE_ROACH_2",
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
        parameters: [`Find ${itemName}.`],
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
    console.log(event, eventId)
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
      event.pages[3].directionFix = true;
      event.pages[3].image = LookOutsideAPClient.getItemImage(name);
    } else {
      console.log(event)
      event.pages[0].list = getAPItemPickupList(
        script,
        LookOutsideAPClient.getItemName(name),
      );
      event.pages[0].image = LookOutsideAPClient.getItemImage(name);
      event._direction = 4; // force event to face the proper direction
    }

    if (name === "APT_37_CRAFTING_KIT" || name === "APT_21_CROSSWORD_BOOK") {
      // for crafting kit
      // need to change page one on both the livingroom and bathroom versions
      // so they check the custom self switch instead of the ownership switch
      // crossword book is a similar situation
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
        parameters: [`Find ${itemName}.`],
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
        parameters: [`Find ${itemName}.`],
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
        parameters: [`Inside, you find ${itemName}.`],
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
        parameters: [`Inside, you find ${itemName}.`],
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

UpdateEventContent.overrideRoachPickups = function (currentMapId) {
  const eventsToOverride = ROACH_ITEM_OVERRIDES[currentMapId];
  if (eventsToOverride) {
    Object.keys(eventsToOverride).forEach((eventId) => {
      const [name, script] = eventsToOverride[eventId];
      const event = $dataMap.events[eventId];
      // clear out the roach being added to inventory
      event.pages[0].list = event.pages[0].list.filter(
        (listItem) => listItem.code !== 126,
      );
    });
  }
};

UpdateEventContent.overrideDrawerPickups = function (currentMapId) {

}


UpdateEventContent.overrideAllPickups = function (currentMapId) {
  UpdateEventContent.overrideOverworldPickups(currentMapId);
  UpdateEventContent.overrideTrashSearchPickups(currentMapId);
  UpdateEventContent.overrideFridgePickups(currentMapId);
  UpdateEventContent.overrideFirstAidBoxPickups(currentMapId);
  UpdateEventContent.overrideMirrorPickups(currentMapId);
  UpdateEventContent.overrideRoachPickups(currentMapId);
  UpdateEventContent.overrideDrawerPickups(currentMapId);
};
