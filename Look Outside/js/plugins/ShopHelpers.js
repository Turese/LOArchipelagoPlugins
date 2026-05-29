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
ShopHelpers.getAudreyVendingMachineList = function () {
  const colaName = LookOutsideAPClient.getItemName("AUDREY_VENDING_COLA", true);
  const lemonSodaName = LookOutsideAPClient.getItemName(
    "AUDREY_VENDING_LEMON",
    true,
  );
  const orangeSodaName = LookOutsideAPClient.getItemName(
    "AUDREY_VENDING_ORANGE",
    true,
  );
  const juiceName = LookOutsideAPClient.getItemName(
    "AUDREY_VENDING_JUICE",
    true,
  );

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
          "(([v[755]<8;v[755]>10]))Examine the machine.",
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
      parameters: [1, `(([v[755]<8;v[755]>10]))Examine the machine.`],
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

ShopHelpers.getCandyMachineList = function () {
  return [
    {
      code: 111,
      indent: 0,
      parameters: [1, 756, 0, 0, 0],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["An empty candy machine."],
    },
    {
      code: 115,
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
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: [
        "A candy machine. Weird candy you've never heard of is inside.",
      ],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["It only takes \\C[14]quarters."],
    },
    {
      code: 111,
      indent: 0,
      parameters: [8, 107],
      collapsed: true,
    },
    {
      code: 122,
      indent: 1,
      parameters: [7, 7, 0, 3, 0, 107, 0],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["Will you buy some candy?"],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["(\\C[3]\\V[7]\\C[0] quarters left.)"],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Buy candy.", "Leave."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Buy candy."],
    },
    {
      code: 118,
      indent: 2,
      parameters: ["buycandy"],
    },
    {
      code: 250,
      indent: 2,
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
      code: 126,
      indent: 2,
      parameters: [107, 1, 0, 1],
    },
    {
      code: 122,
      indent: 2,
      parameters: [756, 756, 0, 0, 0],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 2,
      parameters: [
        `Receive ${LookOutsideAPClient.getItemName("GF_CANDY_MACHINE_MERCHANT")}.`,
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
      parameters: ["", 0, 0, 1, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: ["You have no quarters."],
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

ShopHelpers.getCoffeeMachineMessage = function () {
  // it is inserted into the page at indent 2
  return [
    {
      code: 355,
      indent: 2,
      parameters: ["$gameSelfSwitches.setValue([47, 43, 'A'], true)"],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 2,
      parameters: [
        `Get ${LookOutsideAPClient.getItemName("GF_COFFEE_MACHINE_MERCHANT")}.`,
      ],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["cashback"],
    },
  ];
};

ShopHelpers.getOozeMachineList = function () {
  const shadowBladeName = LookOutsideAPClient.getItemName(
    "B_OOZE_MACHINE_MERCHANT_1",
    true,
  );
  const shadowMaskName = LookOutsideAPClient.getItemName(
    "B_OOZE_MACHINE_MERCHANT_2",
    true,
  );
  const blackBootsName = LookOutsideAPClient.getItemName(
    "B_OOZE_MACHINE_MERCHANT_3",
    true,
  );
  const midnightSuitName = LookOutsideAPClient.getItemName(
    "B_OOZE_MACHINE_MERCHANT_4",
    true,
  );
  const shadowRingName = LookOutsideAPClient.getItemName(
    "B_OOZE_MACHINE_MERCHANT_5",
    true,
  );

  return [
    {
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["A vending machine. It sells items for Black Ooze."],
    },
    {
      code: 118,
      indent: 0,
      parameters: ["machineTop"],
    },
    {
      code: 122,
      indent: 0,
      parameters: [6, 6, 0, 3, 0, 148, 0],
    },
    {
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["What will you buy? You have \\V[6] Black Ooze."],
    },
    {
      code: 102,
      indent: 0,
      parameters: [
        [
          `<<[i[148]<2]>>(([s[${BLACK_OOZE_SHADOW_BLADE}]]))${shadowBladeName} (2 ooze)`,
          `<<[i[148]<3]>>(([s[1230]]))${shadowMaskName} (3 ooze)`,
          `<<[i[148]<4]>>(([s[1231]]))${blackBootsName} (4 ooze)`,
          `<<[i[148]<5]>>(([s[1232]]))${midnightSuitName} (5 ooze)`,
          `<<[i[148]<6]>>(([s[1233]]))${shadowRingName} (6 ooze)`,
          "Never mind.",
        ],
        -1,
        0,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 0,
      parameters: [
        0,
        `<<[i[148]<2]>>(([s[${BLACK_OOZE_SHADOW_BLADE}]]))${shadowBladeName} (2 ooze)`,
      ],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [`Pay 2 Ooze for ${shadowBladeName}?`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Trade!"],
    },
    {
      code: 126,
      indent: 2,
      parameters: [148, 1, 0, 2],
    },
    {
      code: 121,
      indent: 2,
      parameters: [BLACK_OOZE_SHADOW_BLADE, BLACK_OOZE_SHADOW_BLADE, 0],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["trade"],
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
      code: 402,
      indent: 0,
      parameters: [1, `<<[i[148]<3]>>(([s[1230]]))${shadowMaskName} (3 ooze)`],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [`Pay 3 Ooze for ${shadowMaskName}?`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Trade!"],
    },
    {
      code: 126,
      indent: 2,
      parameters: [148, 1, 0, 3],
    },
    {
      code: 121,
      indent: 2,
      parameters: [1230, 1230, 0],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 119,
      indent: 2,
      parameters: ["trade"],
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
      code: 402,
      indent: 0,
      parameters: [2, `<<[i[148]<4]>>(([s[1231]]))${blackBootsName} (4 ooze)`],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [`Pay 4 Ooze for ${blackBootsName}?`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Trade!"],
    },
    {
      code: 126,
      indent: 2,
      parameters: [148, 1, 0, 4],
    },
    {
      code: 121,
      indent: 2,
      parameters: [1231, 1231, 0],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["trade"],
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
      code: 402,
      indent: 0,
      parameters: [
        3,
        `<<[i[148]<5]>>(([s[1232]]))${midnightSuitName} (5 ooze)`,
      ],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [`Pay 5 Ooze for ${midnightSuitName}?`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Trade!"],
    },
    {
      code: 126,
      indent: 2,
      parameters: [148, 1, 0, 5],
    },
    {
      code: 121,
      indent: 2,
      parameters: [1232, 1232, 0],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["trade"],
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
      code: 402,
      indent: 0,
      parameters: [4, `<<[i[148]<6]>>(([s[1233]]))${shadowRingName} (6 ooze)`],
    },
    {
      code: 101,
      indent: 1,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 1,
      parameters: [`Pay 6 Ooze for ${shadowRingName}?`],
    },
    {
      code: 102,
      indent: 1,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Trade!"],
    },
    {
      code: 126,
      indent: 2,
      parameters: [148, 1, 0, 6],
    },
    {
      code: 121,
      indent: 2,
      parameters: [1233, 1233, 0],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["machineTop"],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["leave"],
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
      code: 402,
      indent: 0,
      parameters: [5, "Never mind."],
    },
    {
      code: 119,
      indent: 1,
      parameters: ["leave"],
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
      code: 118,
      indent: 0,
      parameters: ["leave"],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];
};

ShopHelpers.getTickleTradeList = function () {
  const bloodclotBombName = LookOutsideAPClient.getItemName(
    "SEWER_TICKLE_BLOODCLOT_BOMB",
    true,
  );
  const mosquitoKnifeName = LookOutsideAPClient.getItemName(
    "SEWER_TICKLE_MOSQUITO_KNIFE",
    true,
  );
  const bloodCapName = LookOutsideAPClient.getItemName(
    "SEWER_TICKLE_BLOOD_CAP",
    true,
  );
  const vampiricJacketName = LookOutsideAPClient.getItemName(
    "SEWER_TICKLE_VAMPIRIC_JACKET",
    true,
  );
  const crimsonRingName = LookOutsideAPClient.getItemName(
    "SEWER_TICKLE_CRIMSON_RING",
    true,
  );

  return [
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `(([s[${SEWER_TICKLE_BLOODCLOT_BOMB_SWITCH}]]))${bloodclotBombName} (1 pt)`,
          `<<[v[560]<2]>>(([s[${SEWER_TICKLE_MOSQUITO_KNIFE_SWITCH}]]))${mosquitoKnifeName} (2 pts)`,
          `<<[v[560]<4]>>(([s[461]]))${bloodCapName} (4 pts)`,
          `<<[v[560]<6]>>(([s[462]]))${vampiricJacketName} (6 pts)`,
          `<<[v[560]<10]>>(([s[463]]))${crimsonRingName} (10 pts)`,
          "Never mind.",
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
      parameters: [
        0,
        `(([s[${SEWER_TICKLE_BLOODCLOT_BOMB_SWITCH}]]))${bloodclotBombName} (1 pt)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 1 point for ${bloodclotBombName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 122,
      indent: 3,
      parameters: [560, 560, 2, 0, 1],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Here, it's yours!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [
        SEWER_TICKLE_BLOODCLOT_BOMB_SWITCH,
        SEWER_TICKLE_BLOODCLOT_BOMB_SWITCH,
        0,
      ],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Okay!"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [
        1,
        `<<[v[560]<2]>>(([s[${SEWER_TICKLE_MOSQUITO_KNIFE_SWITCH}]]))${mosquitoKnifeName} (2 pts)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 2 points for ${mosquitoKnifeName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 122,
      indent: 3,
      parameters: [560, 560, 2, 0, 2],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Here, it's yours!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [
        SEWER_TICKLE_MOSQUITO_KNIFE_SWITCH,
        SEWER_TICKLE_MOSQUITO_KNIFE_SWITCH,
        0,
      ],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Okay!"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [2, `<<[v[560]<4]>>(([s[461]]))${bloodCapName} (4 pts)`],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 4 points for ${bloodCapName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 128,
      indent: 3,
      parameters: [286, 0, 0, 1, false],
    },
    {
      code: 122,
      indent: 3,
      parameters: [560, 560, 2, 0, 4],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Here, it's yours!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [461, 461, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Okay!"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [
        3,
        `<<[v[560]<6]>>(([s[462]]))${vampiricJacketName} (6 pts)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 6 points for ${mosquitoKnifeName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 122,
      indent: 3,
      parameters: [560, 560, 2, 0, 6],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Here, it's yours!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [462, 462, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Okay!"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [4, `<<[v[560]<10]>>(([s[463]]))${crimsonRingName} (10 pts)`],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 10 points for ${crimsonRingName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 122,
      indent: 3,
      parameters: [560, 560, 2, 0, 10],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Here, it's yours! You've been a real friend, buddy!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [463, 463, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Tickle"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Okay!"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [5, "Never mind."],
    },
  ];
};

ShopHelpers.getEmmanuelTradeList = function () {
  const nailBombName = LookOutsideAPClient.getItemName(
    "MUTT_EMMANUEL_MERCHANT_1",
    true,
  );

  const misshapenLimbName = LookOutsideAPClient.getItemName(
    "MUTT_EMMANUEL_MERCHANT_2",
    true,
  );

  const elbowPadsName = LookOutsideAPClient.getItemName(
    "MUTT_EMMANUEL_MERCHANT_3",
    true,
  );

  const crownOfFingersName = LookOutsideAPClient.getItemName(
    "MUTT_EMMANUEL_MERCHANT_4",
    true,
  );

  const coatOfArmsName = LookOutsideAPClient.getItemName(
    "MUTT_EMMANUEL_MERCHANT_5",
    true,
  );

  return [
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `<<[!i[359]]>>(([s[${MUTT_EMMANUEL_MERCHANT_1_SWITCH}]]))${nailBombName} (1 tape)`,
          `<<[i[359]<2]>>(([s[${MUTT_EMMANUEL_MERCHANT_2_SWITCH}]]))${misshapenLimbName} (2 tapes)`,
          `<<[i[359]<3]>>(([s[711]]))${elbowPadsName} (3 tapes)`,
          `<<[i[359]<4]>>(([s[712]]))${crownOfFingersName} (4 tapes)`,
          `<<[i[359]<6]>>(([s[713]]))${coatOfArmsName} (6 tapes)`,
          "Never mind.",
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
      parameters: [
        0,
        `<<[!i[359]]>>(([s[${MUTT_EMMANUEL_MERCHANT_1_SWITCH}]]))${nailBombName} (1 tape)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 1 tape for ${nailBombName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 126,
      indent: 3,
      parameters: [359, 1, 0, 1],
    },
    {
      code: 122,
      indent: 3,
      parameters: [432, 432, 1, 0, 1],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's a deal! Here you go."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [
        MUTT_EMMANUEL_MERCHANT_1_SWITCH,
        MUTT_EMMANUEL_MERCHANT_1_SWITCH,
        0,
      ],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's cool."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [
        1,
        `<<[i[359]<2]>>(([s[${MUTT_EMMANUEL_MERCHANT_2_SWITCH}]]))${misshapenLimbName} (2 tapes)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 2 tapes for ${misshapenLimbName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
      collapsed: true,
    },
    {
      code: 126,
      indent: 3,
      parameters: [359, 1, 0, 2],
    },
    {
      code: 122,
      indent: 3,
      parameters: [432, 432, 1, 0, 2],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's a deal! Here you go."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [
        MUTT_EMMANUEL_MERCHANT_2_SWITCH,
        MUTT_EMMANUEL_MERCHANT_2_SWITCH,
        0,
      ],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's cool."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [2, `<<[i[359]<3]>>(([s[711]]))${elbowPadsName} (3 tapes)`],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 3 tapes for ${elbowPadsName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], -1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
      collapsed: true,
    },
    {
      code: 126,
      indent: 3,
      parameters: [359, 1, 0, 3],
    },
    {
      code: 122,
      indent: 3,
      parameters: [432, 432, 1, 0, 3],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's a deal! Here you go."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [711, 711, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's cool."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [
        3,
        `<<[i[359]<4]>>(([s[712]]))${crownOfFingersName} (4 tapes)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`You want to trade 4 tapes for ${crownOfFingersName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
      collapsed: true,
    },
    {
      code: 126,
      indent: 3,
      parameters: [359, 1, 0, 4],
    },
    {
      code: 122,
      indent: 3,
      parameters: [432, 432, 1, 0, 4],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's a deal! Here you go."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [712, 712, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's cool."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [4, `<<[i[359]<6]>>(([s[713]]))${coatOfArmsName} (6 tapes)`],
    },
    {
      code: 355,
      indent: 2,
      parameters: ['monster_ChangeSpr(0,"Shock");'],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`Whoa! You wanna to trade 6 tapes for ${coatOfArmsName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
      collapsed: true,
    },
    {
      code: 122,
      indent: 3,
      parameters: [432, 432, 1, 0, 6],
    },
    {
      code: 126,
      indent: 3,
      parameters: [359, 1, 0, 6],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["That's a deal! Here you go."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [713, 713, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Emmanuel"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Man..."],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
      indent: 2,
      parameters: [],
    },
    {
      code: 355,
      indent: 2,
      parameters: ['monster_ChangeSpr(0,"Normal");'],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [5, "Never mind."],
    },
  ];
};

ShopHelpers.getRatHoleTradeList = function () {
  const filthBombName = LookOutsideAPClient.getItemName(
    "F1_PASSAGE_RAT_HOLE_MERCHANT_1",
    true,
  );
  const ratTailWhipName = LookOutsideAPClient.getItemName(
    "F1_PASSAGE_RAT_HOLE_MERCHANT_2",
    true,
  );
  const ratTailBeltName = LookOutsideAPClient.getItemName(
    "F1_PASSAGE_RAT_HOLE_MERCHANT_3",
    true,
  );
  const giantRatSkullName = LookOutsideAPClient.getItemName(
    "F1_PASSAGE_RAT_HOLE_MERCHANT_4",
    true,
  );
  const filthyRingName = LookOutsideAPClient.getItemName(
    "F1_PASSAGE_RAT_HOLE_MERCHANT_5",
    true,
  );

  return [
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          `<<[i[375]<1]>>(([s[${F1_PASSAGE_RAT_HOLE_MERCHANT_1_SWITCH}]]))${filthBombName} (1 tail)`,
          `<<[i[375]<2]>>(([s[${F1_PASSAGE_RAT_HOLE_MERCHANT_2_SWITCH}]]))${ratTailWhipName} (2 tails)`,
          `<<[i[375]<3]>>(([s[708]]))${ratTailBeltName} (3 tails)`,
          `<<[i[375]<4]>>(([s[709]]))${giantRatSkullName} (4 tails)`,
          `<<[i[375]<6]>>(([s[710]]))${filthyRingName} (6 tails)`,
          "Never mind.",
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
      parameters: [
        0,
        `<<[i[375]<1]>>(([s[${F1_PASSAGE_RAT_HOLE_MERCHANT_1_SWITCH}]]))${filthBombName} (1 tail)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`Hand over one tail for ${filthBombName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [
        F1_PASSAGE_RAT_HOLE_MERCHANT_1_SWITCH,
        F1_PASSAGE_RAT_HOLE_MERCHANT_1_SWITCH,
        0,
      ],
    },
    {
      code: 126,
      indent: 3,
      parameters: [375, 1, 0, 1],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Good! Yes! Come to me, little one..."],
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
        "The rat tail wriggles out of your grasp and inches its way",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["to the hole like a worm."],
    },
    {
      code: 111,
      indent: 3,
      parameters: [4, 11, 0],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["Portrait_Recruits2", 0, 0, 2, "Ernest"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["Oh god! Ol' Ernest's stomach wasn't ready for this!"],
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
      parameters: [440, 440, 1, 0, 1],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["posttrade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["trade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [
        1,
        `<<[i[375]<2]>>(([s[${F1_PASSAGE_RAT_HOLE_MERCHANT_2_SWITCH}]]))${ratTailWhipName} (2 tails)`,
      ],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`Hand over two tails for ${ratTailWhipName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [
        F1_PASSAGE_RAT_HOLE_MERCHANT_2_SWITCH,
        F1_PASSAGE_RAT_HOLE_MERCHANT_2_SWITCH,
        0,
      ],
    },
    {
      code: 126,
      indent: 3,
      parameters: [375, 1, 0, 2],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Good! Yes! Come to me, little one..."],
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
        "The rat tails wriggle out of your grasp and inch their way",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["to the hole like a pair of worms."],
    },
    {
      code: 111,
      indent: 3,
      parameters: [4, 11, 0],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["Portrait_Recruits2", 0, 0, 2, "Ernest"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["Oh god! Ol' Ernest's stomach wasn't ready for this!"],
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
      parameters: [440, 440, 1, 0, 1],
    },
    {
      code: 122,
      indent: 3,
      parameters: [440, 440, 1, 0, 2],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["posttrade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
      collapsed: true,
    },
    {
      code: 119,
      indent: 3,
      parameters: ["trade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [2, `<<[i[375]<3]>>(([s[708]]))${ratTailBeltName} (3 tails)`],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`Hand over three tails for ${ratTailBeltName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [708, 708, 0],
    },
    {
      code: 126,
      indent: 3,
      parameters: [375, 1, 0, 3],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Good! Yes! Come to me, little one..."],
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
        "The rat tails wriggle out of your grasp and inch their way",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["to the hole like worms."],
    },
    {
      code: 111,
      indent: 3,
      parameters: [4, 11, 0],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["Portrait_Recruits2", 0, 0, 2, "Ernest"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["Oh god! Ol' Ernest's stomach wasn't ready for this!"],
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
      parameters: [440, 440, 1, 0, 3],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["posttrade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["trade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [3, "<<[i[375]<4]>>(([s[709]]))Giant Rat Skull (4 tails)"],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`Hand over four tails for ${giantRatSkullName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [709, 709, 0],
    },
    {
      code: 126,
      indent: 3,
      parameters: [375, 1, 0, 4],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Good! Yes! Come to me, little one..."],
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
        "The rat tails wriggle out of your grasp and inch their way",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["to the hole like worms."],
    },
    {
      code: 111,
      indent: 3,
      parameters: [4, 11, 0],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["Portrait_Recruits2", 0, 0, 2, "Ernest"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["Oh god! Ol' Ernest's stomach wasn't ready for this!"],
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
      parameters: [440, 440, 1, 0, 4],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["posttrade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["trade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [4, `<<[i[375]<6]>>(([s[710]]))${filthyRingName} (6 tails)`],
    },
    {
      code: 101,
      indent: 2,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 2,
      parameters: [`Hand over six tails for ${filthyRingName}?`],
    },
    {
      code: 102,
      indent: 2,
      parameters: [["Trade!", "Never mind."], 1, 0, 2, 0],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "Trade!"],
    },
    {
      code: 121,
      indent: 3,
      parameters: [710, 710, 0],
    },
    {
      code: 128,
      indent: 3,
      parameters: [282, 0, 0, 1, false],
    },
    {
      code: 126,
      indent: 3,
      parameters: [375, 1, 0, 6],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, "Rat Hole"],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["Good! Yes! Come to me, little one..."],
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
        "The rat tails wriggle out of your grasp and inch their way",
      ],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["to the hole like worms."],
    },
    {
      code: 111,
      indent: 3,
      parameters: [4, 11, 0],
    },
    {
      code: 101,
      indent: 4,
      parameters: ["Portrait_Recruits2", 0, 0, 2, "Ernest"],
    },
    {
      code: 401,
      indent: 4,
      parameters: ["Oh god! Ol' Ernest's stomach wasn't ready for this!"],
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
      parameters: [440, 440, 1, 0, 6],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["posttrade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "Never mind."],
    },
    {
      code: 119,
      indent: 3,
      parameters: ["trade"],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 404,
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
      parameters: [5, "Never mind."],
    },
    {
      code: 119,
      indent: 2,
      parameters: ["leave"],
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
      code: 118,
      indent: 1,
      parameters: ["posttrade"],
    },
  ];
};

ShopHelpers.gunTraderInitList = function (mapId, ev) {
  // all the same, but none of the specific gun types

  if (mapId == 3 && ev.id == 52)
    ev.pages[0].list = [
      {
        code: 355,
        indent: 0,
        parameters: ['console.log("AP-Friendly gun trader setup");'],
      },
      {
        code: 357,
        indent: 0,
        parameters: [
          "TLB_LimitedShopStock",
          "setStock",
          "Set Shop Stock",
          {
            mapId: "0",
            eventId: "0",
            items:
              '["{\\"item\\":\\"89\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"90\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"91\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"98\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"10\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"99\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"10\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"100\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"101\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"102\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"10\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"180\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"24\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"181\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"12\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"182\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"32\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"183\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"16\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"184\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"16\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"185\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"24\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"186\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"8\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}"]',
            weapons:
              '["{\\"weapon\\":\\"77\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"weapon\\":\\"81\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}"]',
            armours:
              '["{\\"armour\\":\\"19\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"armour\\":\\"15\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"armour\\":\\"60\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"armour\\":\\"88\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}"]',
            sellXRandom: "9",
            randomiseType: "Randomise Always",
          },
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Map ID = 0"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Event ID = 0"],
      },
      {
        code: 657,
        indent: 0,
        parameters: [
          'Items = ["{\\"item\\":\\"89\\",\\"quantityType\\":\\"0\\",\\"quantit…',
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: [
          'Weapons = ["{\\"weapon\\":\\"77\\",\\"quantityType\\":\\"0\\",\\"qua…',
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: [
          'Armours = ["{\\"armour\\":\\"19\\",\\"quantityType\\":\\"0\\",\\"qua…',
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Sell X random = 9"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Randomise type = Randomise Always"],
      },
      {
        code: 123,
        indent: 0,
        parameters: ["A", 0],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];
};

ShopHelpers.gamerInitList = function (mapId, ev) {
  // take out the video games
  // replace with some thematically appropriate items so he at least has something

  if (mapId == 3 && ev.id == 56)
    ev.pages[0].list = [
      {
        code: 355,
        indent: 0,
        parameters: ['console.log("AP-Friendly game trader setup");'],
      },
      {
        code: 357,
        indent: 0,
        parameters: [
          "TLB_LimitedShopStock",
          "setStock",
          "Set Shop Stock",
          {
            mapId: "0",
            eventId: "0",
            items:
              '["{\\"item\\":\\"36\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"45\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"25\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"238\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"240\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"45\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}"]',
            weapons: "",
            armours: "",
            sellXRandom: "",
            randomiseType: "",
          },
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Map ID = 0"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Event ID = 0"],
      },
      {
        code: 657,
        indent: 0,
        parameters: [
          'Items = ["{\\"item\\":\\"36\\",\\"quantityType\\":\\"0\\",\\"quantit…',
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Weapons = "],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Armours = "],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Sell X random = "],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Randomise type = "],
      },
      {
        code: 123,
        indent: 0,
        parameters: ["A", 0],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];
};

ShopHelpers.strangeTraderInitList = function (mapId, ev) {
  // take out special currencies besides black ooze
  // take out strange key
  if (mapId == 3 && ev.id == 133)
    ev.pages[0].list = [
      {
        code: 355,
        indent: 0,
        parameters: ['console.log("AP-friendly rare item trader setup");'],
      },
      {
        code: 357,
        indent: 0,
        parameters: [
          "TLB_LimitedShopStock",
          "setStock",
          "Set Shop Stock",
          {
            mapId: "0",
            eventId: "0",
            items:
              '["{\\"item\\":\\"158\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"159\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"160\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"147\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"148\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"150\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"6\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"176\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"177\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"319\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"379\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"4\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}","{\\"item\\":\\"381\\",\\"quantityType\\":\\"0\\",\\"quantity\\":\\"1\\",\\"priceType\\":\\"standard\\",\\"price\\":\\"0\\",\\"restockTimer\\":\\"0\\",\\"restockType\\":\\"0\\",\\"restockQuantity\\":\\"1\\",\\"restockMax\\":\\"99\\"}"]',
            weapons: "[]",
            armours: "[]",
            sellXRandom: "9",
            randomiseType: "Randomise Always",
          },
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Map ID = 0"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Event ID = 0"],
      },
      {
        code: 657,
        indent: 0,
        parameters: [
          'Items = ["{\\"item\\":\\"158\\",\\"quantityType\\":\\"0\\",\\"quanti…',
        ],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Weapons = []"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Armours = []"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Sell X random = 9"],
      },
      {
        code: 657,
        indent: 0,
        parameters: ["Randomise type = Randomise Always"],
      },
      {
        code: 123,
        indent: 0,
        parameters: ["A", 0],
      },
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];
};
