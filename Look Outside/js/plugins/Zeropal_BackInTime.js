/**
 * @target MZ
 * @name Zeropal_BackInTime
 * @plugindesc Back in time: speak to the calendar to get the option to travel through time!
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var BackInTime = BackInTime || {};

// checks for sophie in the special door encounter pool
function BACKINTIMEsophieAtDoor() {
  const special = gVr(166);
  return special.includes(63);
}

function BACKINTIMEfixMuttKilled() {
  sSw(317, false); // muttDead = OFF
}

function BACKINTIMEfixPlantHealth() {
  sVr(128, 50); // plantHealth = 50
}

function BACKINTIMEfixSophieGone() {
  sSw(362, true); // recruitedSophie = ON
}

function BACKINTIMEfixPapKilled() {
  sSw(362, true); // recruitedSophie = ON
}

function BACKINTIMEfixLyleKilled() {
  sSw(832, false); // killedLyle = OFF
  // so lyle doesnt attack you immediately when you get back, send him back to before you traded
  sVr(192, 2) // shutterbugState = 2 
  delete $gameSelfSwitches._data[[9, 14, "C"].toString()]; // delete the dead lyle state on his event
}

function BACKINTIMEfixLyleNoKiss() {
  sSw(476, true); // primeLyleJoin = ON
  }

function BACKINTIMEfixEugeneKilled() {
  sSw(168, false); // killedEugene = OFF
}

function BACKINTIMEfixMaskedShadowGift() {
  sVr(152, 10); // shadowDispo = 10
  sVr(150, 6); // shadowState = 6
  sSw(161, false); // shadowItemLeft = OFF
}

function BACKINTIMEfixMaskedShadowRecruit() {
  sSw(27, true); // recruitedShadow = ON
}

function fixAstronomersKilled() {
  sSw(170, false); // killedAurelius = OFF
  sSw(171, false); // killedAster = OFF
  sSw(172, false); // killedJasper = OFF
  sSw(173, false); // killedBeryl = OFF
}

function BACKINTIMEfixLockedInOfferings() {
  sSw(206, false); // lastOfferingGood = OFF
}

function BACKINTIMEfixErnestTooLate() {
  sSw(797, false); // ernestTooLate = OFF
  sSw(790, false); // colSqueakumDead = OFF
}

function BACKINTIMEfixErnestKilled() {
  sSw(789, false); // ErnestDead = OFF
}

function BACKINTIMEfixJeanneKilled() {}

function BACKINTIMEfixJoelKilled() {}

function BACKINTIMEfixHellenQuest() {
  sSw(1086, false); // MissedHellenWatering = OFF
  sSw(35, true); // recruitedHellen = ON
  sSw(1087, true); // hellenSpawned = OFF
}

function BACKINTIMEfixBasementBlocked() {
  // if !1063 openedpitdoor
  sSw(1097, false); // Earthquake = OFF
}

const BACKINTIMEregretTemplates = {
  sophieGone: {
    rCondition: BACKINTIMEsophieAtDoor,
    rText: "(([!s[362],!s[364]]))Sophie.",
    rFunction: "BACKINTIMEfixSophieGone",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of Sophie. You wish you could have brought her",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "back to her mother. You close your eyes and pray for her",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["safety..."],
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
          "Suddenly, you feel a lot better about her situation. In fact,",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "you wouldn't be surprised if she's already found her way",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["back to this apartment."],
      },
    ],
  },
  hellenQuestFailed: {
    rName: "(([!s[1086]]))Hellen.",
    rFunction: "BACKINTIMEfixHellenQuest",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of Hellen. You really let her down. You close your eyes",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["and vow to do better..."],
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
          "Actually, did you forget to water her plant the other day?",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "Perhaps you only imagined you did. In fact, you feel as though",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Hellen is waiting for you right now!"],
      },
    ],
  },
  lyleKilled: {
    rName: "(([!s[832]]))Lyle.",
    rFunction: "BACKINTIMEfixLyleKilled",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of Lyle. You really wish it didn't have to end",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "that way. You almost miss him. You close your eyes and",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["vow to do better..."],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Actually, is he dead? You might have made that part up."],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "In fact, you feel as though he's healthier than ever right",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["now."],
      },
    ],
  },
  lyleNoKiss: {
    rCondition: () => (!gSw(832)),
    rName: "(([v[192]>=7]))Lyle.",
    rFunction: "BACKINTIMEfixLyleNoKiss",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of Lyle. You really wish you'd been nicer to him. You close",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "your eyes and imagine kissing him. It's not gay if your eyes are closed.",
        ],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Woah. That felt pretty real. You hope he comes to visit soon..."],
      },
    ]
  },
  plantDead: {
    rName: "(([v[128]>5]))Your plant.",
    rFunction: "BACKINTIMEfixPlantHealth",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of your plant. You haven't been taking care of it",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "very well, and now you fear it may be too late. You close",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["your eyes and hope..."],
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
          "Suddenly, you feel a lot more optimistic. In fact, it's looking",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["greener already!"],
      },
    ],
  },
  muttKilled: {
    rName: "(([!s[317]]))Mutt.",
    rFunction: "BACKINTIMEfixMuttKilled",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of Mutt. You know you murdered him and all but you",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "but you wish he didn't have to be so dead about it. You close your eyes",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["and vow to do better..."],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Actually, is he dead? You might have made that part up."],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "In fact, you feel as though he's healthier than ever right",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["now."],
      },
    ],
  },
  shadowGift: {
    rName: "(([!v[152]<10;v[150]=7]))The Masked Shadow.",
    rFunction: "BACKINTIMEfixMaskedShadowGift",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of the masked shadow. If only you had treated it",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "better. You close your eyes and wish it had given you a nicer gift...",
        ],
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
          "Now that you think of it, it did seem to like you a lot.",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "In fact, you'd be willing to bet that it's out searching for a better",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["gift right now."],
      },
    ],
  },
  shadowRecruit: {
    rName: "(([!s[27];v[150]>=9]))The Masked Shadow.",
    rFunction: "BACKINTIMEfixMaskedShadowRecruit",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["You think of the masked shadow. You wish you hadn't"],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "rebuked it so harshly. You close your eyes and wish there",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["was a way to let it know it's still welcome..."],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Actually, it may already know. In fact, you wouldn't be"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["surprised if it was in your kitchen right now."],
      },
    ],
  },
  lockedInOffering: {
    rName: "(([!s[27];v[150]>=9]))The Masked Shadow.",
    rFunction: "BACKINTIMEfixLockedInOfferings",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of the offerings. You told Jasper you were ready,",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "but now you're having second thoughts. You close your eyes",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["and think..."],
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
          "There's nothing wrong with going back and asking him again,",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "is there? In fact, you feel as though he may have forgotten",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["to go up to the roof..."],
      },
    ],
  },
  astronomersKilled: {
    rName: "(([!s[170],s[171],s[172],s[173]]))The Astronomers.",
    rFunction: "fixAstronomersKilled",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["You think of the astronomers. You wish you hadn't hurt"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["any of them. They were only trying to help. You close"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["your eyes and vow to do better..."],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Actually, did you even attack any of them?"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["You don't think you did. In fact, you're quite certain"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["that all four of them are just fine."],
      },
    ],
  },
  ernestTooLate: {
    rName: "(([!s[797];!s[790]]))Ernest.",
    rFunction: "BACKINTIMEfixErnestTooLate",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["You think of Ernest. You wish you could have been there"],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "for him when he needed you most. You close your eyes and",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["vow to do better..."],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Actually, it may not be too late! In fact, you feel as"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["though you should go check on Ernest today..."],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["now."],
      },
    ],
  },
  ernestKilled: {
    rName: "(([!s[789]]))Ernest.",
    rFunction: "BACKINTIMEfixErnestKilled",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["You think of Ernest. You wish you hadn't done what"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["you did, it was unnecessary. You close your eyes and"],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["vow to do better..."],
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
          "Actually, you didn't do a thing to him! In fact, you feel as",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["though you should go check on Ernest today..."],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["now."],
      },
    ],
  },
  eugeneKilled: {
    rName: "(([!s[789]]))Eugene.",
    rFunction: "BACKINTIMEfixEugeneKilled",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "You think of Eugene. You know you murdered him and all but you",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "wish he didn't have to be so dead about it. You close your eyes",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["and vow to do better..."],
      },
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["Actually, is he dead? You might have made that part up."],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "In fact, you feel as though he's healthier than ever right",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["now."],
      },
    ],
  },
  basementBlocked: {
    rName: "(([s[1097];!s[1063]]))The basement pit.",
    rFunction: "BACKINTIMEfixBasementBlocked",
    rText: [],
  },
};

BackInTime.applyChanges = function () {
  function createOptionIntro(options, indent) {
    return {
      code: 102,
      indent,
      parameters: [options, -1, -1, 2, 0],
    };
  }

  // creates an option that is unselectable if it's already that date
  function createDateChangeOptionName(index) {
    return `<<[v[15]=${index}]>>Day ${index + 1}.`;
  }

  // sets current date to the index selected
  function createDateChangeOption(index, date, indent) {
    return [
      {
        code: 402,
        indent,
        parameters: [index, createDateChangeOptionName(date)],
      },
      {
        code: 122,
        indent: indent + 1,
        parameters: [15, 15, 0, 0, date],
      },
      {
        code: 0,
        indent: indent + 1,
        parameters: [],
      },
    ];
  }

  function createRegret(index, regretKey) {
    const { rName, rFunction, rText } = BACKINTIMEregretTemplates[regretKey];

    return [
      {
        code: 402,
        indent: 1,
        parameters: [index, rName],
        collapsed: true,
      },
      ...rText,
      {
        code: 355,
        indent: 2,
        parameters: [`${rFunction}();`],
      },
      {
        code: 0,
        indent: 2,
        parameters: [],
      },
    ];
  }

  const BEDROOM_MAP_ID = 2;
  const CALENDAR_EVENT_ID = 16;

  let lastLoadedMapId;
  const loadMapData = DataManager.loadMapData;
  DataManager.loadMapData = function (mapId) {
    lastLoadedMapId = mapId;
    loadMapData.call(this, mapId);
  };

  const onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    if (lastLoadedMapId === BEDROOM_MAP_ID) {
      const week1OptionNames = [];
      const week1Options = [];

      for (let date = 0; date < 7; date++) {
        week1OptionNames.push(createDateChangeOptionName(date));
        week1Options.push(...createDateChangeOption(date, date, 2));
      }
      const week1OptionIntro = createOptionIntro(week1OptionNames, 2);

      const week2OptionNames = [];
      const week2Options = [];

      for (let date = 7, i = 0; date < 15; date++, i++) {
        console.log(i);
        week2OptionNames.push(createDateChangeOptionName(date, i));
        week2Options.push(...createDateChangeOption(i, date, 2));
      }
      const week2OptionIntro = createOptionIntro(week2OptionNames, 2);

      const dateOptions = [
        {
          code: 102,
          indent: 1,
          parameters: [
            [
              "No, stay.",
              "Go to week 1 (days 1-7).",
              "Go to week 2 (days 8-15).",
            ],
            0,
            0,
            2,
            0,
          ],
        },
        {
          code: 402,
          indent: 1,
          parameters: [0, "No, stay."],
        },
        {
          code: 115,
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
          parameters: [1, "Go to week 1 (days 1-7)."],
        },
        week1OptionIntro,
        ...week1Options,
        {
          code: 0,
          indent: 2,
          parameters: [],
        },
        {
          code: 402,
          indent: 1,
          parameters: [2, "Go to week 2 (days 8-15)."],
        },
        week2OptionIntro,
        ...week2Options,
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
          code: 404,
          indent: 1,
          parameters: [],
        },
        {
          code: 0,
          indent: 1,
          parameters: [],
        },
      ];

      const createRegretOptions = function () {
        const regretsList = Object.keys(BACKINTIMEregretTemplates);

        const regretNames = [];
        const regretCases = [];

        let index = 1;

        regretsList.forEach((regretName) => {
          const options = BACKINTIMEregretTemplates[regretName];
          if (!options.rCondition || options.rCondition()) {
            regretNames.push(options.rName);
            regretCases.push(...createRegret(index, regretName));
            index++;
          }
        });

        return [
          {
            code: 102,
            indent: 1,
            parameters: [["I regret nothing.", ...regretNames], 0, 0, 2, 0],
          },
          {
            code: 402,
            indent: 1,
            parameters: [0, "I regret nothing."],
          },
          {
            code: 115,
            indent: 2,
            parameters: [],
          },
          {
            code: 0,
            indent: 2,
            parameters: [],
          },
          ...regretCases,
        ];
      };

      const calendarSequence = [
        {
          code: 122,
          indent: 0,
          parameters: [14, 14, 0, 1, 15],
        },
        {
          code: 122,
          indent: 0,
          parameters: [8, 8, 0, 0, 15],
        },
        {
          code: 122,
          indent: 0,
          parameters: [8, 8, 2, 1, 15],
        },
        {
          code: 101,
          indent: 0,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 0,
          parameters: ["Only \\V[8] days left..."],
        },
        {
          code: 102,
          indent: 0,
          parameters: [["Set current day.", "Ease regrets."], 1, 0, 2, 0],
        },
        {
          code: 402,
          indent: 0,
          parameters: [0, "Set current day."],
        },
        {
          code: 122,
          indent: 1,
          parameters: [7, 7, 0, 1, 15],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: ["Set current day?"],
        },
        ...dateOptions,
        {
          code: 402,
          indent: 0,
          parameters: [1, "Ease regrets."],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: ["You think of all that you regret..."],
        },
        ...createRegretOptions(),
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
          code: 404,
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
            "You think of everything you have been through so far...",
          ],
        },
        {
          code: 122,
          indent: 0,
          parameters: [8, 8, 0, 1, 15],
        },
        {
          code: 122,
          indent: 0,
          parameters: [8, 8, 1, 0, 1],
        },
        {
          code: 111,
          indent: 0,
          parameters: [1, 7, 1, 15, 4],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: ["You close your eyes and imagine what it will be like "],
        },
        {
          code: 401,
          indent: 1,
          parameters: ["on day \\V[8]."],
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
          parameters: [1, 7, 1, 15, 3],
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
            "You close your eyes and remember what it was like on day \\V[8].",
          ],
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
          parameters: [16, 16, 0, 0, 6],
        },
        {
          code: 122,
          indent: 0,
          parameters: [17, 17, 0, 0, 0],
        },
        {
          code: 117,
          indent: 0,
          parameters: [4],
        },
        {
          code: 117,
          indent: 0,
          parameters: [6],
        },
        {
          code: 122,
          indent: 0,
          parameters: [8, 8, 0, 0, 15],
        },
        {
          code: 122,
          indent: 0,
          parameters: [8, 8, 2, 1, 15],
        },
        {
          code: 101,
          indent: 0,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 0,
          parameters: ["It is now \\V[12]."],
        },
        {
          code: 401,
          indent: 0,
          parameters: ["Only \\V[8] days left..."],
        },
        {
          code: 0,
          indent: 0,
          parameters: [],
        },
      ];

      console.log(calendarSequence);
      $dataMap.events[CALENDAR_EVENT_ID].pages[1].list = calendarSequence;
    }

    onMapLoaded.call(this);
  };

  // separate dialogue box: think about your regrets
  // if failed helen quest: if (1086, set 1086 missedhelenwatering = off, 35 recruitedhelen = on)
  // if failed ernest quest (if 797, set 797 ernesttoolate = off)
  // if cave in happened:

  // if you killed the astronomers
  // you think of the astronomers. you wish you hadn't hurt any of them. they were only trying to help. you close your eyes and vow to do better...
  // actually, did you ever attack any of them? you don't think you did. in fact, you're quite certain that all four of them are just fine.

  // if you didnt get the rose:
  // you think of the masked shadow. you wish you had treated it better whenever you saw it around. you close your eyes and wish you had a better gift...
  // actually, now that you think of it, it did seem to like you a lot. in fact, you'd be willing to bet that it's out searching for a better gift right now...

  // if kicked masked shadow out
  // you think of the masked shadow. you wish you hadn't rebuked it so harshly. you close your eyes and wish there was a way to let it know it's still welcome.
  // actually, it may already know. in fact, you wouldn't be surprised if it was in your kitchen right now.

  // if ernest is dead: you think of ernest. You wish you had done better by him. You close your eyes and vow to do better...
  // did you even kill him? you think you would have remembered something like that. in fact, you feel like he's just fine...
};

BackInTime.applyChanges();
