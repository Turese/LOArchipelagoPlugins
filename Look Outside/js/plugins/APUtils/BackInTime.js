/**
 * @target MZ
 * @name BackInTime
 * @plugindesc Back in time: speak to the calendar to get the option to travel through time!
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

function BIT_fixMuttKilled() {
  sSw(317, false); // muttDead = OFF
}

function BIT_fixPlantHealth() {
  sVr(128, 50); // plantHealth = 50
}

function BIT_fixSophieGone() {
  sSw(362, true); // recruitedSophie = ON
}

function BIT_fixPapKilled() {
  sSw(362, true); // recruitedSophie = ON
}

function BIT_fixLyleKilled() {
  sSw(832, false); // killedLyle = OFF
  // so lyle doesnt attack you immediately when you get back, send him back to post all trading
  sVr(192, 7); // shutterbugState = 7
  delete $gameSelfSwitches._data[[9, 14, "C"].toString()]; // delete the dead lyle state on his event
}

function BIT_fixLyleNoKiss() {
  sSw(476, true); // primeLyleJoin = ON
}

function BIT_fixEugeneKilled() {
  sSw(168, false); // killedEugene = OFF
}

function BIT_fixMaskedShadowDispo() {
  sVr(152, 10); // shadowDispo = 10
}

function BIT_fixAstronomersKilled() {
  sSw(170, false); // killedAurelius = OFF
  sSw(171, false); // killedAster = OFF
  sSw(172, false); // killedJasper = OFF
  sSw(173, false); // killedBeryl = OFF
}

function BIT_fixLockedInOfferings() {
  sSw(206, false); // lastOfferingGood = OFF
}

function BIT_fixErnestTooLate() {
  sSw(797, false); // ernestTooLate = OFF
  sSw(790, false); // colSqueakumDead = OFF
}

function BIT_fixErnestKilled() {
  sSw(789, false); // ErnestDead = OFF
}

function BIT_fixJeanneKilled() {}

function BIT_fixJoelKilled() {}

function BIT_fixHellenQuest() {
  sSw(1086, false); // MissedHellenWatering = OFF
  sSw(35, true); // recruitedHellen = ON
  sSw(1087, true); // hellenSpawned = OFF
}

function BIT_fixBasementBlocked() {
  // if !1063 openedpitdoor
  sSw(1097, false); // Earthquake = OFF
}

function BIT_fixjeanneKilled() {
  sSw(746, false); // JeanneDead = OFF
  sSw(747, false); // MainHydraHeadDead = OFF
}

var BackInTime = BackInTime || {};

BackInTime.applyChanges = function () {
  // checks for sophie in the special door encounter pool
  function sophieAcquiredInPast() {
    // todo, check for sophie as an acquired ap item
    const special = gVr(166);
    console.log(special);
    return !special.includes(63);
  }

  const regretTemplates = {
    sophieGone: {
      rCondition: sophieAcquiredInPast,
      rName: "(([!s[362];!s[364]]))Sophie.",
      rFunction: "BIT_fixSophieGone",
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
      rFunction: "BIT_fixHellenQuest",
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
      rFunction: "BIT_fixLyleKilled",
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
          parameters: [
            "Actually, is he dead? You might have made that part up.",
          ],
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
      rCondition: () => !gSw(832),
      rName: "(([v[192]<7,s[376]]))Lyle.",
      rFunction: "BIT_fixLyleNoKiss",
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
            "You think of Lyle. You really wish you'd been nicer to him. You",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "close your eyes and imagine kissing him. It's not gay if your eyes",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["are closed."],
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
            "Woah. That felt pretty real. You hope he comes to visit soon...",
          ],
        },
      ],
    },
    plantDead: {
      rName: "(([v[128]>5]))Your plant.",
      rFunction: "BIT_fixPlantHealth",
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
      rFunction: "BIT_fixMuttKilled",
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
          parameters: [
            "Actually, is he dead? You might have made that part up.",
          ],
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
    shadowDispo: {
      rName: "(([!v[152]<10;!v[150]=7]))The Masked Shadow.",
      rFunction: "BIT_fixMaskedShadowDispo",
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
            "better. You close your eyes and wish it knew you felt no ill will...",
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
            "In fact, you'd be willing to bet that it's coming for a visit",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["very soon."],
        },
      ],
    },
    lockedInOffering: {
      rName: "(([!s[206]]))The offerings.",
      rFunction: "BIT_fixLockedInOfferings",
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
      rName: "(([!s[170],!s[171],!s[172],!s[173]]))The Astronomers.",
      rFunction: "BIT_fixAstronomersKilled",
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
            "You think of the astronomers. You wish you hadn't hurt",
          ],
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
          parameters: [
            "You don't think you did. In fact, you're quite certain",
          ],
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
      rFunction: "BIT_fixErnestTooLate",
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
            "You think of Ernest. You wish you could have been there",
          ],
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
          parameters: [
            "Actually, it may not be too late! In fact, you feel as",
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
    ernestKilled: {
      rName: "(([!s[789]]))Ernest.",
      rFunction: "BIT_fixErnestKilled",
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
      rFunction: "BIT_fixEugeneKilled",
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
          parameters: [
            "Actually, is he dead? You might have made that part up.",
          ],
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
      rFunction: "BIT_fixBasementBlocked",
      rText: [],
    },
  };

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
    const { rName, rFunction, rText } = regretTemplates[regretKey];

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

  const createCalendarBackInTimeEvent = function () {
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
        const regretsList = Object.keys(regretTemplates);

        const regretNames = [];
        const regretCases = [];

        let index = 1;

        regretsList.forEach((regretName) => {
          const options = regretTemplates[regretName];
          if (!options.rCondition || options.rCondition()) {
            console.log(regretName, options.rName);
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

      $dataMap.events[CALENDAR_EVENT_ID].pages[1].list = calendarSequence;
    }

    window.BackInTime = {
      createCalendarBackInTimeEvent,
    };
  };
};

BackInTime.applyChanges();
