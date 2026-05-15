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
