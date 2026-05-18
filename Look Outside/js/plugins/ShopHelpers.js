/**
 * @target MZ
 * @name ShopHelpers
 * @plugindesc Helpers for updating the vending machines
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var ShopHelpers = ShopHelpers || {};

ShopHelpers.getF3VendingMachineList = function (
  cardTrickName,
  cheezName,
  chipsName,
  spicyChipsName,
  gummiBearName,
  onionOsName,
) {
  return [
    {
      code: 122,
      indent: 0,
      parameters: [230, 230, 0, 0, 0],
    },
    {
      code: 111,
      indent: 0,
      parameters: [0, 808, 1],
    },
    {
      code: 121,
      indent: 1,
      parameters: [808, 808, 0],
    },
    {
      code: 122,
      indent: 1,
      parameters: [742, 742, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [743, 743, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [744, 744, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [745, 745, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [746, 746, 0, 0, 1],
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
      code: 122,
      indent: 0,
      parameters: [229, 229, 0, 0, 75],
    },
    {
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: [
        "A vending machine. It sells snacks at \\C[3]\\V[229] cents\\C[0] each. It only",
      ],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["takes coins."],
    },
    {
      code: 111,
      indent: 0,
      parameters: [1, 741, 0, 1, 0],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["There are green stains on the glass\\..\\..\\..\\.\\.\\."],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        `Oh.\\.\\.\\. There is also a ${cardTrickName} stuck in the ${cheezName}`,
      ],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["slot inside the machine.\\.\\.\\. How did that get there?"],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        "You bang on the machine a couple of times and it falls down.",
      ],
    },
    {
      code: 122,
      indent: 1,
      parameters: [741, 741, 1, 0, 1],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [`... Got ${cardTrickName}`],
    },
    {
      code: 355,
      indent: 1,
      parameters: ['setAchievement("Misc_MagicTrick");'],
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
      code: 118,
      indent: 0,
      parameters: ["machineTop"],
    },
    {
      code: 111,
      indent: 0,
      parameters: [1, 230, 1, 229, 4],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        "Balance: \\C[3]\\V[230] cents\\C[0]   Item Cost: \\C[10]\\V[229] cents\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["Will you add more coins into the slot?"],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Add more coins.", "Leave."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Add more coins."],
    },
    {
      code: 118,
      indent: 2,
      parameters: ["addCoinsTop"],
    },
    {
      code: 122,
      indent: 2,
      parameters: [69, 69, 0, 4, '"coin"'],
    },
    {
      code: 357,
      indent: 2,
      parameters: [
        "WD_ItemUse",
        "callItems",
        "Call Item Use Window",
        {
          linebreak: "Settings ===",
          itemSelector:
            '{"selectorMode":"mode5","includeEquip":"mode3","metaTag":"69"}',
          showDesc: "mode1",
          returnMode:
            '{"returnMode":"mode0","idVar":"70","catVar":"71","resultSwitch":"15"}',
        },
      ],
    },
    {
      code: 657,
      indent: 2,
      parameters: ["===Override = Settings ==="],
    },
    {
      code: 657,
      indent: 2,
      parameters: [
        'Item Selector = {"selectorMode":"mode5","includeEquip":"mod…',
      ],
    },
    {
      code: 657,
      indent: 2,
      parameters: ["Show item description? = mode1"],
    },
    {
      code: 657,
      indent: 2,
      parameters: [
        'Return Mode = {"returnMode":"mode0","idVar":"70","catVar":"…',
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [0, 15, 0],
    },
    {
      code: 355,
      indent: 3,
      parameters: ["sVr(2,$gameParty.numItems($dataItems[gVr(70)]));"],
    },
    {
      code: 111,
      indent: 3,
      parameters: [1, 70, 0, 400, 0],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 412,
      indent: 3,
      parameters: [],
    },
    {
      code: 122,
      indent: 3,
      parameters: [6, 6, 0, 0, 1],
    },
    {
      code: 355,
      indent: 3,
      parameters: [
        "sVr(230,gVr(230)+parseInt($dataItems[gVr(70)].meta.coinval)*gVr(6));",
      ],
    },
    {
      code: 655,
      indent: 3,
      parameters: ["$gameParty.gainItem($dataItems[gVr(70)], 0-gVr(6));"],
    },
    {
      code: 250,
      indent: 3,
      parameters: [
        {
          name: "VendingMachine_coinIn",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 3,
      parameters: [1, 230, 1, 229, 1],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 411,
      indent: 3,
      parameters: [],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "Balance: \\C[3]\\V[230] cents\\C[0]   Item Cost:\\C[10] \\V[229] cents",
      ],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["addCoinsTop"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 412,
      indent: 3,
      parameters: [],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 411,
      indent: 2,
      parameters: [],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Leave."],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 404,
      indent: 1,
      parameters: [],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 411,
      indent: 0,
      parameters: [],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        "Balance: \\C[3]\\V[230] cents\\C[0]   Item Cost: \\C[10]\\V[229] cents\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["What snack will you buy?"],
    },
    {
      code: 355,
      indent: 1,
      parameters: ['console.log("TODO: SEND HINTS HERE")'],
    },
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `(([v[742]=0]))${chipsName}`,
          `(([v[743]=0]))${spicyChipsName}`,
          `(([v[744]=0]))${gummiBearName}`,
          `(([v[745]=0]))${cheezName}`,
          `(([v[746]=0]))${onionOsName}`,
          "Leave.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, `(([v[742]=0]))${chipsName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [742, 742, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseBag",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 742, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, `(([v[743]=0]))${spicyChipsName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseBag",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 122,
      indent: 2,
      parameters: [743, 743, 2, 0, 1],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 743, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [2, `(([v[744]=0]))${gummiBearName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [744, 744, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseBag",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [3, `(([v[745]=0]))${cheezName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [745, 745, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseBag",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 745, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [4, `(([v[746]=0]))${onionOsName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [746, 746, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseBag",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 746, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [5, "Leave."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 404,
      indent: 1,
      parameters: [],
    },
    {
      code: 119,
      indent: 1,
      parameters: ["machineTop"],
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
      code: 118,
      indent: 0,
      parameters: ["cashback"],
    },
    {
      code: 117,
      indent: 0,
      parameters: [181],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];
};

// about the same as before, but - forces 1 item each of her randomized items, and 999 advice cans
// also maxes dispo when you help her restock so she can always be recruited after
ShopHelpers.getAudreyVendingMachineList = function (
  colaName,
  lemonSodaName,
  orangeSodaName,
  juiceName,
) {
  return [
    {
      code: 121,
      indent: 0,
      parameters: [807, 807, 0],
    },
    {
      code: 122,
      indent: 0,
      parameters: [230, 230, 0, 0, 0],
    },
    {
      code: 122,
      indent: 0,
      parameters: [229, 229, 0, 0, 100],
    },
    {
      code: 111,
      indent: 0,
      parameters: [0, 810, 1],
    },
    {
      code: 121,
      indent: 1,
      parameters: [810, 810, 0],
    },
    {
      code: 122,
      indent: 1,
      parameters: [747, 747, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [748, 748, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [749, 749, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [750, 750, 0, 0, 1],
    },
    {
      code: 122,
      indent: 1,
      parameters: [751, 751, 0, 0, 999],
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
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: [
        "A vending machine. It sells soda at \\C[3]$1\\C[0] a can. It only",
      ],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["takes coins."],
    },
    {
      code: 118,
      indent: 0,
      parameters: ["machineTop"],
    },
    {
      code: 111,
      indent: 0,
      parameters: [1, 230, 1, 229, 4],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        "Balance: \\C[3]\\V[230] cents\\C[0]   Item Cost: \\C[10]\\V[229] cents\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["Will you add more coins into the slot?"],
    },
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          "Add more coins.",
          "(([v[755]<8;s[380]]))Examine the machine.",
          "Leave.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Add more coins."],
    },
    {
      code: 118,
      indent: 2,
      parameters: ["addCoinsTop"],
    },
    {
      code: 122,
      indent: 2,
      parameters: [69, 69, 0, 4, '"coin"'],
    },
    {
      code: 357,
      indent: 2,
      parameters: [
        "WD_ItemUse",
        "callItems",
        "Call Item Use Window",
        {
          linebreak: "Settings ===",
          itemSelector:
            '{"selectorMode":"mode5","includeEquip":"mode3","metaTag":"69"}',
          showDesc: "mode1",
          returnMode:
            '{"returnMode":"mode0","idVar":"70","catVar":"71","resultSwitch":"15"}',
        },
      ],
    },
    {
      code: 657,
      indent: 2,
      parameters: ["===Override = Settings ==="],
    },
    {
      code: 657,
      indent: 2,
      parameters: [
        'Item Selector = {"selectorMode":"mode5","includeEquip":"mod…',
      ],
    },
    {
      code: 657,
      indent: 2,
      parameters: ["Show item description? = mode1"],
    },
    {
      code: 657,
      indent: 2,
      parameters: [
        'Return Mode = {"returnMode":"mode0","idVar":"70","catVar":"…',
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [0, 15, 0],
    },
    {
      code: 355,
      indent: 3,
      parameters: ["sVr(2,$gameParty.numItems($dataItems[gVr(70)]));"],
    },
    {
      code: 111,
      indent: 3,
      parameters: [1, 70, 0, 400, 0],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 412,
      indent: 3,
      parameters: [],
    },
    {
      code: 122,
      indent: 3,
      parameters: [6, 6, 0, 0, 1],
    },
    {
      code: 355,
      indent: 3,
      parameters: [
        "sVr(230,gVr(230)+parseInt($dataItems[gVr(70)].meta.coinval)*gVr(6));",
      ],
    },
    {
      code: 655,
      indent: 3,
      parameters: ["$gameParty.gainItem($dataItems[gVr(70)], 0-gVr(6));"],
    },
    {
      code: 250,
      indent: 3,
      parameters: [
        {
          name: "VendingMachine_coinIn",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 3,
      parameters: [1, 230, 1, 229, 1],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 411,
      indent: 3,
      parameters: [],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "Balance: \\C[3]\\V[230] cents\\C[0]   Item Cost:\\C[10] \\V[229] cents",
      ],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["addCoinsTop"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 412,
      indent: 3,
      parameters: [],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 411,
      indent: 2,
      parameters: [],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "(([v[755]<8;s[380]]))Examine the machine."],
    },
    {
      code: 118,
      indent: 2,
      parameters: ["examine"],
    },
    {
      code: 111,
      indent: 2,
      parameters: [6, -1, 8],
      collapsed: true,
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "You have a look around the Audrey from the front. She looks",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "like a \\C[14]perfectly normal vending machine\\C[0] at a glance.",
      ],
    },
    {
      code: 102,
      indent: 3,
      parameters: [
        [
          "Examine the delivery box.",
          "Examine the drink buttons.",
          "Examine the coin slot.",
          "Examine the front design.",
          "Examine the top.",
          "Stop examining.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 3,
      parameters: [0, "Examine the delivery box."],
      collapsed: true,
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "From up close, you can see her \\C[5]huge fangs\\C[0] retracted into",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["the edges of the delivery box. Her \\C[14]mouth."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["A cold shiver runs up your spine as you remember sticking"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["your hand in there to retrieve cans."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [1, "Examine the drink buttons."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "The buttons used to choose the drinks.\\.\\. A \\C[5]cluster of eyes\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "look back at you.\\.\\. Hopefully it doesn't hurt when you order",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["something."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [2, "Examine the coin slot."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "The coin slot. It seems to \\C[14]expand and contract\\C[0] regularly.",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "Maybe this is where she \\C[5]breathes\\C[0] from. Are you sticking",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["coins up her nose?"],
    },
    {
      code: 111,
      indent: 4,
      parameters: [1, 755, 0, 9, 2],
      collapsed: true,
    },
    {
      code: 101,
      indent: 5,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 5,
      parameters: ["There is a hole next to the coin slot."],
    },
    {
      code: 101,
      indent: 5,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 5,
      parameters: [
        "On closer inspection, it is a \\C[14]deeply recessed keyhole.\\C[0] It seems",
      ],
    },
    {
      code: 401,
      indent: 5,
      parameters: ["you need a \\C[3]special key \\C[0]to operate this."],
    },
    {
      code: 102,
      indent: 5,
      parameters: [["Try using a key.", "Leave it."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 5,
      parameters: [0, "Try using a key."],
    },
    {
      code: 104,
      indent: 6,
      parameters: [6, 2],
    },
    {
      code: 111,
      indent: 6,
      parameters: [1, 6, 0, 371, 0],
    },
    {
      code: 250,
      indent: 7,
      parameters: [
        {
          name: "UnlockSound",
          volume: 90,
          pitch: 120,
          pan: 0,
        },
      ],
    },
    {
      code: 101,
      indent: 7,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 7,
      parameters: ["You unlock it."],
    },
    {
      code: 250,
      indent: 7,
      parameters: [
        {
          name: "ContainerOpenNormal",
          volume: 90,
          pitch: 70,
          pan: 0,
        },
      ],
    },
    {
      code: 230,
      indent: 7,
      parameters: [15],
    },
    {
      code: 245,
      indent: 7,
      parameters: [
        {
          name: "Fleshgross",
          volume: 75,
          pitch: 70,
          pan: 0,
        },
      ],
    },
    {
      code: 101,
      indent: 7,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 7,
      parameters: [
        "The vending machine's door opens\\.\\.\\. Instead of machinery, the",
      ],
    },
    {
      code: 401,
      indent: 7,
      parameters: [
        "insides are filled with \\C[14]fleshy tubes\\C[0] and \\C[14]pulsating organs.",
      ],
    },
    {
      code: 101,
      indent: 7,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 7,
      parameters: [
        "Clusters of eyes open inside, visibly recoiling at the light.\\.\\.",
      ],
    },
    {
      code: 401,
      indent: 7,
      parameters: [
        "Long, worm-like protruberances squirm away. There are \\C[10]teeth\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 7,
      parameters: ["everywhere. "],
    },
    {
      code: 250,
      indent: 7,
      parameters: [
        {
          name: "ContainerOpenNormal",
          volume: 90,
          pitch: 70,
          pan: 0,
        },
      ],
    },
    {
      code: 245,
      indent: 7,
      parameters: [
        {
          name: "",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 101,
      indent: 7,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 7,
      parameters: ["Tendrils extend from the depths of the machine and grasp"],
    },
    {
      code: 401,
      indent: 7,
      parameters: ["at the door, \\C[5]slamming it shut."],
    },
    {
      code: 221,
      indent: 7,
      parameters: [],
    },
    {
      code: 122,
      indent: 7,
      parameters: [755, 755, 0, 0, 10],
    },
    {
      code: 119,
      indent: 7,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 7,
      parameters: [],
    },
    {
      code: 411,
      indent: 6,
      parameters: [],
    },
    {
      code: 101,
      indent: 7,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 7,
      parameters: ["That doesn't fit."],
    },
    {
      code: 0,
      indent: 7,
      parameters: [],
    },
    {
      code: 412,
      indent: 6,
      parameters: [],
    },
    {
      code: 0,
      indent: 6,
      parameters: [],
    },
    {
      code: 402,
      indent: 5,
      parameters: [1, "Leave it."],
    },
    {
      code: 0,
      indent: 6,
      parameters: [],
    },
    {
      code: 404,
      indent: 5,
      parameters: [],
    },
    {
      code: 0,
      indent: 5,
      parameters: [],
    },
    {
      code: 411,
      indent: 4,
      parameters: [],
    },
    {
      code: 101,
      indent: 5,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 5,
      parameters: ["You already unlocked the door here."],
    },
    {
      code: 0,
      indent: 5,
      parameters: [],
    },
    {
      code: 412,
      indent: 4,
      parameters: [],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [3, "Examine the front design."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["A striking red flow design with some bright blue bubbles."],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["They almost seem to \\C[14]look back at you.\\.\\.\\."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "She \\C[14]blinks and looks away,\\C[0] embarrassed.\\.\\.\\. You've been staring",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["right into her eyes. Whoops."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [4, "Examine the top."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["You feel around the top of the machine, hoping to find"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["something. Nope. \\C[14]Nothing."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [5, "Stop examining."],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 404,
      indent: 3,
      parameters: [],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 111,
      indent: 2,
      parameters: [6, -1, 4],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "You have a look around the Audrey from the right side. There",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "are some \\C[14]flyers\\C[0] stuck to the side of the machine, and some",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["kind of \\C[14]vent\\C[0] at the bottom."],
    },
    {
      code: 102,
      indent: 3,
      parameters: [
        [
          "Examine the papers.",
          "Examine the vent.",
          "(([s[811]]))Audrey, can you scooch forward?",
          "Stop examining.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 3,
      parameters: [0, "Examine the papers."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "A \\C[14]lost cat flyer\\C[0] draws your eye among the papers.\\.\\.",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        '\\C[2]"Have you seen my cat? She is a small, black kitten named\\C[3] Soot.\\C[2]"\\.\\.\\C[0]',
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "There is a black and white picture of the cat and some phone",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["numbers you can tear off at the bottom."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [1, "Examine the vent."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        "It doesn't look like you could unscrew it or open it. The vent",
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["is \\C[14]built right into the machine's casing."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [2, "(([s[811]]))Audrey, can you scooch forward?"],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["scooch"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [3, "Stop examining."],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 404,
      indent: 3,
      parameters: [],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 111,
      indent: 2,
      parameters: [6, -1, 6],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "You look around the Audrey from the left side. There is a \\C[14]brand",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "label\\C[0] at eye level, and something was \\C[14]scratched\\C[0] into the",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["metallic surface below it."],
    },
    {
      code: 102,
      indent: 3,
      parameters: [
        [
          "Examine the brand.",
          "Examine the scratches.",
          "(([s[811]]))Audrey, can you scooch forward?",
          "Stop examining.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 3,
      parameters: [0, "Examine the brand."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: [
        'It says \\C[14]"Shoppomatix"\\C[0] in cursive font. A vending machine brand',
      ],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["you've seen before."],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [1, "Examine the scratches."],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["An old, faded scratch on the side of the vending machine."],
    },
    {
      code: 401,
      indent: 4,
      parameters: ['\\C[4]"Who is the thing in the mask?"\\C[0]'],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [2, "(([s[811]]))Audrey, can you scooch forward?"],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["scooch"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 402,
      indent: 3,
      parameters: [3, "Stop examining."],
    },
    {
      code: 119,
      indent: 4,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 404,
      indent: 3,
      parameters: [],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 111,
      indent: 2,
      parameters: [6, -1, 2],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "You have a look around Audrey's back. There's an \\C[14]inscription\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["there with handwritten notes."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: [
        "The inscription lists the last service date. It was \\C[14]two",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ['months ago,\\C[0] and the technician was \\C[3]"Mutt".'],
    },
    {
      code: 111,
      indent: 3,
      parameters: [1, 759, 0, 0, 0],
    },
    {
      code: 122,
      indent: 4,
      parameters: [759, 759, 0, 0, 1],
    },
    {
      code: 0,
      indent: 4,
      parameters: [],
    },
    {
      code: 412,
      indent: 3,
      parameters: [],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["examine"],
    },
    {
      code: 118,
      indent: 2,
      parameters: ["scooch"],
    },
    {
      code: 217,
      indent: 2,
      parameters: [],
    },
    {
      code: 230,
      indent: 2,
      parameters: [60],
    },
    {
      code: 205,
      indent: 2,
      parameters: [
        0,
        {
          list: [
            {
              code: 34,
              indent: null,
            },
            {
              code: 36,
              indent: null,
            },
            {
              code: 45,
              parameters: ['this.qImgFrm("!VendingMachines",1,0,0);'],
              indent: null,
            },
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
              parameters: [15],
              indent: null,
            },
            {
              code: 19,
              indent: null,
            },
            {
              code: 15,
              parameters: [15],
              indent: null,
            },
            {
              code: 45,
              parameters: ['this.qImgFrm("!VendingMachines",2,2,0);'],
              indent: null,
            },
            {
              code: 35,
              indent: null,
            },
            {
              code: 29,
              parameters: [2],
              indent: null,
            },
            {
              code: 30,
              parameters: [2],
              indent: null,
            },
            {
              code: 44,
              parameters: [
                {
                  name: "WalkSteps_Wood1",
                  volume: 90,
                  pitch: 100,
                  pan: 0,
                },
              ],
              indent: null,
            },
            {
              code: 1,
              indent: null,
            },
            {
              code: 15,
              parameters: [5],
              indent: null,
            },
            {
              code: 44,
              parameters: [
                {
                  name: "WalkSteps_Wood2",
                  volume: 90,
                  pitch: 100,
                  pan: 0,
                },
              ],
              indent: null,
            },
            {
              code: 15,
              parameters: [5],
              indent: null,
            },
            {
              code: 44,
              parameters: [
                {
                  name: "WalkSteps_Wood3",
                  volume: 90,
                  pitch: 100,
                  pan: 0,
                },
              ],
              indent: null,
            },
            {
              code: 15,
              parameters: [5],
              indent: null,
            },
            {
              code: 44,
              parameters: [
                {
                  name: "WalkSteps_Wood4",
                  volume: 90,
                  pitch: 100,
                  pan: 0,
                },
              ],
              indent: null,
            },
            {
              code: 15,
              parameters: [15],
              indent: null,
            },
            {
              code: 45,
              parameters: ['this.qImgFrm("!VendingMachines",1,3,0);'],
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
              code: 16,
              indent: null,
            },
            {
              code: 15,
              parameters: [15],
              indent: null,
            },
            {
              code: 45,
              parameters: ['this.qImgFrm("!VendingMachines",0,2,1);'],
              indent: null,
            },
            {
              code: 0,
            },
          ],
          repeat: false,
          skippable: true,
          wait: true,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 34,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 36,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 45,
          parameters: ['this.qImgFrm("!VendingMachines",1,0,0);'],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 16,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 17,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 18,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 19,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 45,
          parameters: ['this.qImgFrm("!VendingMachines",2,2,0);'],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 35,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 29,
          parameters: [2],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 30,
          parameters: [2],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 44,
          parameters: [
            {
              name: "WalkSteps_Wood1",
              volume: 90,
              pitch: 100,
              pan: 0,
            },
          ],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 1,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 15,
          parameters: [5],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 44,
          parameters: [
            {
              name: "WalkSteps_Wood2",
              volume: 90,
              pitch: 100,
              pan: 0,
            },
          ],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 15,
          parameters: [5],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 44,
          parameters: [
            {
              name: "WalkSteps_Wood3",
              volume: 90,
              pitch: 100,
              pan: 0,
            },
          ],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 15,
          parameters: [5],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
      parameters: [
        {
          code: 44,
          parameters: [
            {
              name: "WalkSteps_Wood4",
              volume: 90,
              pitch: 100,
              pan: 0,
            },
          ],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 45,
          parameters: ['this.qImgFrm("!VendingMachines",1,3,0);'],
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 18,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 17,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 16,
          indent: null,
        },
      ],
    },
    {
      code: 505,
      indent: 2,
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
      indent: 2,
      parameters: [
        {
          code: 45,
          parameters: ['this.qImgFrm("!VendingMachines",0,2,1);'],
          indent: null,
        },
      ],
    },
    {
      code: 121,
      indent: 2,
      parameters: [811, 811, 0],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [2, "Leave."],
      collapsed: true,
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 404,
      indent: 1,
      parameters: [],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 411,
      indent: 0,
      parameters: [],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        "Balance: \\C[3]\\V[230] cents\\C[0]   Item Cost: \\C[10]\\V[229] cents\\C[0]",
      ],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["Confirm to buy a can?"],
    },
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `(([v[747]=0]))${colaName}`,
          `(([v[748]=0]))${lemonSodaName}`,
          `(([v[749]=0]))${orangeSodaName}`,
          `(([v[750]=0]))${juiceName}`,
          "(([v[751]=0]))Advice.",
          "Leave.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, `(([v[747]=0]))${colaName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [758, 758, 1, 0, 1],
    },
    {
      code: 122,
      indent: 2,
      parameters: [747, 747, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseCan",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 747, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, `(([v[748]=0]))${lemonSodaName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [758, 758, 1, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseCan",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 122,
      indent: 2,
      parameters: [748, 748, 2, 0, 1],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 748, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [2, `(([v[749]=0]))${orangeSodaName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [758, 758, 1, 0, 1],
    },
    {
      code: 122,
      indent: 2,
      parameters: [749, 749, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseCan",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 749, 0, 0, 0],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [3, `(([v[750]=0]))${juiceName}`],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [758, 758, 1, 0, 2],
    },
    {
      code: 122,
      indent: 2,
      parameters: [750, 750, 2, 0, 1],
    },
    {
      code: 250,
      indent: 2,
      parameters: [
        {
          name: "VendingMachine_dispenseCan",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 750, 0, 0, 0],
    },
    {
      code: 122,
      indent: 3,
      parameters: [758, 758, 1, 0, 5],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 0, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You got the last one..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [4, "(([v[751]=0]))Advice."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [230, 230, 2, 1, 229],
    },
    {
      code: 122,
      indent: 2,
      parameters: [758, 758, 1, 0, 2],
    },
    {
      code: 108,
      indent: 2,
      parameters: ["talk"],
    },
    {
      code: 117,
      indent: 2,
      parameters: [217],
    },
    {
      code: 122,
      indent: 2,
      parameters: [751, 751, 2, 0, 1],
    },
    {
      code: 122,
      indent: 2,
      parameters: [753, 753, 1, 0, 1],
    },
    {
      code: 111,
      indent: 2,
      parameters: [1, 755, 0, 12, 0],
    },
    {
      code: 122,
      indent: 3,
      parameters: [755, 755, 0, 0, 13],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 111,
      indent: 2,
      parameters: [0, 380, 0],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 412,
      indent: 2,
      parameters: [],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [5, "Leave."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["cashback"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 404,
      indent: 1,
      parameters: [],
    },
    {
      code: 119,
      indent: 1,
      parameters: ["machineTop"],
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
      code: 118,
      indent: 0,
      parameters: ["cashback"],
    },
    {
      code: 117,
      indent: 0,
      parameters: [181],
    },
    {
      code: 121,
      indent: 0,
      parameters: [807, 807, 1],
    },
    {
      code: 111,
      indent: 0,
      parameters: [1, 755, 0, 2, 0],
    },
    {
      code: 122,
      indent: 1,
      parameters: [755, 755, 0, 0, 3],
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
      code: 111,
      indent: 0,
      parameters: [1, 755, 0, 10, 0],
    },
    {
      code: 122,
      indent: 1,
      parameters: [755, 755, 0, 0, 11],
    },
    {
      code: 221,
      indent: 1,
      parameters: [],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [
        "Audrey gets up, gives you a \\C[3]thankful nod,\\C[0] and scuttles away",
      ],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["to finally restock."],
    },
    {
      code: 111,
      indent: 1,
      parameters: [1, 759, 0, 0, 0],
    },
    {
      code: 122,
      indent: 2,
      parameters: [759, 759, 0, 0, 1],
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
      code: 122,
      indent: 1,
      parameters: [758, 758, 1, 0, 99],
    },
    {
      code: 122,
      indent: 1,
      parameters: [751, 751, 1, 0, 99],
    },
    {
      code: 203,
      indent: 1,
      parameters: [0, 0, 46, 25, 0],
    },
    {
      code: 222,
      indent: 1,
      parameters: [],
    },
    {
      code: 214,
      indent: 1,
      parameters: [],
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
  ];
};

ShopHelpers.getEmmanuelList = function () {

}

ShopHelpers.getRatHoleList = function () {
  
}

ShopHelpers.getOozeMachineList = function () {
  
}

ShopHelpers.getOozeMachineList = function () {
  
}
