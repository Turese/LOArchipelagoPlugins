/**
 * @target MZ
 * @name GoalChecker
 * @plugindesc event in stairwell allowing player to check goal
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 *
 *
 **/

const GOAL_CHECKER_X = 8;
const GOAL_CHECKER_Y = 10;

const GOAL_CHECKER_PAGES = [
    {
      conditions: {
        actorId: 1,
        actorValid: false,
        itemId: 1,
        itemValid: false,
        selfSwitchCh: "A",
        selfSwitchValid: false,
        switch1Id: 74,
        switch1Valid: false,
        switch2Id: 1,
        switch2Valid: false,
        variableId: 1,
        variableValid: false,
        variableValue: 0,
      },
      directionFix: true,
      image: {
        tileId: 0,
        characterName: "!SmallFurniture",
        direction: 8,
        pattern: 2,
        characterIndex: 4,
      },
      list: [
        {
          code: 355,
          indent: 0,
          parameters: ["GoalChecker.setGoalCheckTempVars();"],
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
            "- - - - - - - - - - - - - - - - - Goal Tracker - - - - - - - - - - - - - - - - -\n\\V[7]",
          ],
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
    },
  ]

var GoalChecker = GoalChecker || {};

GoalChecker.insertGoalCheckerEvent = function (ev) {
  ev.pages = GOAL_CHECKER_PAGES;
  ev.x = GOAL_CHECKER_X;
  ev.y = GOAL_CHECKER_Y;
};

const GOAL_NAMES = {
  ritual: "Any Ritual Ending",
  perfectRitual: "Any Perfect Ritual Ending",
  screamingSkies: "Screaming Skies Ending",
  eternalFate: "Eternal Fate Ending",
  xinAmon: "XIN-AMON Ending",
  noGoingBack: "No Going Back Ending",
  unity: "Unity Ending",
  mask: "Mask Ritual Ending",
  wordsOfPower: "Words of Power Ending",
  trueFinal: "True Final Ending",
  promise: "Promise Ending",
};

const COMPLETE_TEXT = "** Complete **";
const INCOMPLETE_TEXT = "Incomplete";

GoalChecker.setGoalCheckTempVars = function () {
  const tempVar1ID = 7;

  const goal = $gamePlayer.slotData.goal;
  let goalArray = [];
  let var1Text = "";
  if (goal < 8) {
    const goalId = GOAL_MAPPING[goal];
    goalArray.push(goalId);
  } else {
    goalArray = goal == 8 ? ALL_ROOF_ENDINGS : ALL_ENDINGS;
  }
  for (let i = 0; i < goalArray.length; i++) {
    const goalId = goalArray[i];
    const completedGoal = $gamePlayer.reachedEndings[goalId];
    var1Text += `${GoalChecker.getGoalText(goalId, completedGoal)}\n`;
  }
  sVr(tempVar1ID, var1Text);
};

GoalChecker.getGoalText = function (goalId, completed) {
  if (!goalId) return "";
  else
    return `${GOAL_NAMES[goalId]}: ${completed ? COMPLETE_TEXT : INCOMPLETE_TEXT}`;
};
