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

const CALENDAR_EVENT_PAGE_2 = [
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
    parameters: [["Set current day.", "Fix regrets."], 1, 0, 2, 0],
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
  {
    code: 102,
    indent: 1,
    parameters: [
      [
        "No, stay.",
        "<<[v[15]=0]>>Day 1.",
        "<<[v[15]=1]>>Day 2.",
        "<<[v[15]=2]>>Day 3.",
        "<<[v[15]=3]>>Day 4.",
        "<<[v[15]=4]>>Day 5.",
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
    parameters: [1, "<<[v[15]=0]>>Day 1."],
  },
  {
    code: 122,
    indent: 2,
    parameters: [15, 15, 0, 0, 0],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [2, "<<[v[15]=1]>>Day 2."],
  },
  {
    code: 122,
    indent: 2,
    parameters: [15, 15, 0, 0, 1],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [3, "<<[v[15]=2]>>Day 3."],
  },
  {
    code: 122,
    indent: 2,
    parameters: [15, 15, 0, 0, 2],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [4, "<<[v[15]=3]>>Day 4."],
  },
  {
    code: 122,
    indent: 2,
    parameters: [15, 15, 0, 0, 3],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [5, "<<[v[15]=4]>>Day 5."],
  },
  {
    code: 122,
    indent: 2,
    parameters: [15, 15, 0, 0, 4],
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
    parameters: [1, "Fix regrets."],
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
  {
    code: 102,
    indent: 1,
    parameters: [
      [
        "I regret nothing.",
        "(([!s[797]]))Ernest.",
        "(([!s[1086]]))Hellen.",
        "(([s[362],s[364]]))Sophie.",
        "(([v[128]>5]))Your plant.",
        "(([![s[206]]))The offerings.",
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
  {
    code: 402,
    indent: 1,
    parameters: [1, "(([!s[797]]))Ernest."],
  },
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
    parameters: ["for him when he needed you most. You close your eyes and "],
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
    parameters: ["Actually, it may not be too late! In fact, you feel as "],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["though you should go check on Ernest today..."],
  },
  {
    code: 121,
    indent: 2,
    parameters: [789, 789, 1],
  },
  {
    code: 121,
    indent: 2,
    parameters: [790, 790, 1],
  },
  {
    code: 121,
    indent: 2,
    parameters: [797, 797, 1],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [2, "(([!s[1086]]))Hellen."],
  },
  {
    code: 101,
    indent: 2,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["You think of Hellen. You really let her down. You close "],
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
    parameters: ["Actually, did you forget to water her plant yesterday? "],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["Perhaps you only imagined you did. In fact, you feel as "],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["though Hellen is waiting for you right now..."],
  },
  {
    code: 121,
    indent: 2,
    parameters: [1086, 1086, 1],
  },
  {
    code: 121,
    indent: 2,
    parameters: [35, 35, 0],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [3, "(([s[362],s[364]]))Sophie."],
  },
  {
    code: 101,
    indent: 2,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["You think of Sophie. You wish you could have brought her"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["back to her mother. You close your eyes and pray for her"],
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
      "You suddenly feel a lot better about her situation. In fact,",
    ],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["you wouldn't be surprised if she's already found her way "],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["back to this apartment..."],
  },
  {
    code: 121,
    indent: 2,
    parameters: [362, 362, 0],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [4, "(([v[128]>5]))Your plant."],
  },
  {
    code: 101,
    indent: 2,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["You think of your plant. You haven't been taking care of it"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["very well, and now you fear it may be too late. You close"],
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
    parameters: ["Suddenly, you feel a lot more optimistic. In fact,"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["it's looking greener already!"],
  },
  {
    code: 122,
    indent: 2,
    parameters: [128, 128, 0, 0, 50],
  },
  {
    code: 0,
    indent: 2,
    parameters: [],
  },
  {
    code: 402,
    indent: 1,
    parameters: [5, "(([![s[206]]))The offerings."],
  },
  {
    code: 101,
    indent: 2,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["You think of the offerings. You told Jasper you were ready,"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["but now you're having second thoughts. You close your eyes"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["and hope..."],
  },
  {
    code: 101,
    indent: 2,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["There's nothing wrong with going back and asking him again,"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["is there? In fact, you feel as though he may have forgotten"],
  },
  {
    code: 401,
    indent: 2,
    parameters: ["to go up to the roof..."],
  },
  {
    code: 121,
    indent: 2,
    parameters: [206, 206, 1],
  },
  {
    code: 126,
    indent: 2,
    parameters: [314, 1, 0, 1],
  },
  {
    code: 128,
    indent: 2,
    parameters: [23, 1, 0, 1, true],
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
    parameters: ["You think of everything you have been through so far..."],
  },
  {
    code: 122,
    indent: 0,
    parameters: [8, 8, 0, 1, 15],
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
    code: 122,
    indent: 0,
    parameters: [8, 8, 1, 0, 1],
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

const spares = [
  {
    code: 102,
    indent: 0,
    parameters: [
      [
        "(([!s[317]))Mutt.",
        "The Astronomers.",
        "The Masked Shadow. (gift)",
        "(([!s[27];v[150]>=9]))The Masked Shadow.",
      ],
      1,
      -1,
      2,
      0,
    ],
  },
  {
    code: 402,
    indent: 0,
    parameters: [0, "(([!s[317]))Mutt."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["You think of Mutt. You know you murdered him and all"],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["but you wish he didn't have to be so dead about it. You "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["close your eyes and vow to do better..."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["Actually, is he dead? You might have made that part up."],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["In fact, you feel as though he's healthier than ever right"],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["now..."],
  },
  {
    code: 121,
    indent: 1,
    parameters: [317, 317, 1],
  },
  {
    code: 0,
    indent: 1,
    parameters: [],
  },
  {
    code: 402,
    indent: 0,
    parameters: [1, "The Astronomers."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["You think of the astronomers. You wish you hadn't hurt "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["any of them. they were only trying to help. You close "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["your eyes and vow to do better..."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["Actually, did you ever attack any of them? "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["You don't think you did. In fact, you're quite certain "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["that all four of them are just fine."],
  },
  {
    code: 121,
    indent: 1,
    parameters: [170, 170, 1],
  },
  {
    code: 121,
    indent: 1,
    parameters: [171, 171, 1],
  },
  {
    code: 121,
    indent: 1,
    parameters: [172, 172, 1],
  },
  {
    code: 121,
    indent: 1,
    parameters: [173, 173, 1],
  },
  {
    code: 0,
    indent: 1,
    parameters: [],
  },
  {
    code: 402,
    indent: 0,
    parameters: [2, "The Masked Shadow. (gift)"],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["You think of the masked shadow. If only you had treated it"],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["better. You close your eyes and wish it had given you a "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["nicer gift..."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["Now that you think of it, it did seem to like you a lot. "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["In fact, you'd be willing to bet that it's out searching "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["for a better gift right now..."],
  },
  {
    code: 122,
    indent: 1,
    parameters: [152, 152, 0, 0, 10],
  },
  {
    code: 122,
    indent: 1,
    parameters: [150, 150, 0, 0, 6],
  },
  {
    code: 121,
    indent: 1,
    parameters: [161, 161, 1],
  },
  {
    code: 0,
    indent: 1,
    parameters: [],
  },
  {
    code: 402,
    indent: 0,
    parameters: [3, "(([!s[27];v[150]>=9]))The Masked Shadow."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["You think of the masked shadow. You wish you hadn't "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["rebuked it so harshly. you close your eyes and wish there "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["was a way to let it know it's still welcome."],
  },
  {
    code: 101,
    indent: 1,
    parameters: ["", 0, 0, 2, ""],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["Actually, it may already know. In fact, you wouldn't be "],
  },
  {
    code: 401,
    indent: 1,
    parameters: ["surprised if it was in your kitchen right now..."],
  },
  {
    code: 121,
    indent: 1,
    parameters: [27, 27, 0],
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

var BackInTime = BackInTime || {};

BackInTime.applyChanges = function () {
  // specifically creates the options object where the first option is a cancel button
  function createOptions(introQuestion, options) {
    return [
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
        indent: 1,
        parameters: [options, 0, 0, 2, 0],
      },
    ];
  }

  function createAnswerIntro(index, name) {
    return {
      code: 402,
      indent: 1,
      parameters: [index, name],
    };
  }

  function createExitAnswer(index, name) {
    return [createAnswerIntro(index, name), ...createExitEvent()];
  }

  function createExitEvent() {
    return [
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
    ];
  }

  // creates an option that is unselectable if it's already that date
  function createDateChangeOptionName(index) {
    return `<<[v[15]=${index - 1}]>>Day ${index}.`;
  }

  // sets current date to the index selected
  function createDateChangeOption(index) {
    return [
      {
        code: 402,
        indent: 1,
        parameters: [index, createDateChangeOptionName(index)],
      },
      {
        code: 122,
        indent: 2,
        parameters: [15, 15, 0, 0, 2],
      },
      {
        code: 0,
        indent: 2,
        parameters: [],
      },
    ];
  }

  console.log("welcome to back in time");
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
      // start with the text from the existing calendar event
      let calendarSequence = [...$dataMap.events[CALENDAR_EVENT_ID].pages[1]];

      calendarSequence.push(
        createOptions[("Exit.", "Set current day.", "Ease regrets.")],
      );

      calendarSequence.push(...createExitAnswer(0, "Exit."));

      calendarSequence.push(createAnswerIntro(1, "Set current day."));

      // this creates a copy of the current day variable and posts intro text
      calendarSequence.push(
        ...[
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
        ],
      );

      let dateTimeNames = [];
      let dateTimeOptions = [];
      for (i = 0; i < 15; i++) {
        dateTimeNames.push(createDateChangeOptionName(i));
        dateTimeOptions.push(createDateChangeOption(i));
      }

      calendarSequence.push(...createOptions(dateTimeNames));

      calendarSequence.push(...dateTimeOptions);

      calendarSequence.push(createAnswerIntro(2, "Ease regrets."));

      calendarSequence.push(
        ...[
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
        ],
      );

      // end of list ; exits out of the conditional
      calendarSequence.push({
        code: 0,
        indent: 0,
        parameters: [],
      });

      // end of date selection sequence; takes the newly chosen date and 
      // calls new day function, updates time to first thing in the morning
      calendarSequence.push(
        ...[]
      );

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
