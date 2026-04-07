/**
 * @target MZ
 * @name Zeropal_BackInTime
 * @plugindesc Back in time: speak to the calendar to get the option to travel through time!
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

// checks for sophie in the special door encounter pool
function sophieAtDoor() {
  const special = gVr(166);
  return special.includes(63);
}

var BackInTime = BackInTime || {};

function fixMuttRegret() {
  sSw(317, false); // muttDead = OFF
}

function fixPlantRegret() {
  sVr(128, 50); // plantHealth = 50
}

function fixSophieRegret() {
  sSw(362, true); // recruitedSophie = ON
}

const regretOptions = {
  sophie: {
    rCondition: sophieAtDoor,
    rText: "(([!s[362],!s[364]]))Sophie.",
    rFunction: "fixSophieRegret",
    rText: [],
  },
  plant: {
    rName: "(([v[128]>5]))Your plant.",
    rFunction: "fixPlantRegret",
    rText: [],
  },
  mutt: {
    rName: "(([!s[317]]))Mutt.",
    rFunction: "fixMuttRegret",
    rText: [
      {
        code: 101,
        indent: 2,
        parameters: ["", 0, 0, 2, ""],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["You think of Mutt. You know you murdered him and all"],
      },
      {
        code: 401,
        indent: 2,
        parameters: [
          "but you wish he didn't have to be so dead about it. You ",
        ],
      },
      {
        code: 401,
        indent: 2,
        parameters: ["close your eyes and vow to do better..."],
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
        parameters: ["now..."],
      },
    ],
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
    const { rName, rFunction, rText } = regretOptions[regretKey];

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
        indent: indent + 1,
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
          code: 401,
          indent: 1,
          parameters: ["Set current day?"],
        },
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
        const regretsList = ["sophie", "mutt", "plant"];

        const regretNames = [];
        const regretCases = [];

        let index = 1;

        regretsList.forEac-h((regretName) => {
          const options = regretOptions[regretName];
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
          parameters: ["You close your eyes and remember what it was like "],
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
