/**
 * @target MZ
 * @name BlackoutLamp
 * @plugindesc Allows players to switch the blackout on and off thru the bedroom lamp
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var BlackoutLamp = BlackoutLamp || {};

BlackoutLamp.createLampBlackoutEvent = function (mapId) {
  const BLACKOUT_LAMP_PAGE = [
    {
      code: 111,
      indent: 0,
      parameters: [0, 115, 0],
    },
    {
      code: 111,
      indent: 1,
      parameters: [0, 987, 1],
    },
    {
      code: 102,
      indent: 2,
      parameters: [
        ["(([!s[21]]))Start blackout.", "(([s[21]]))End blackout.", "Cancel"],
        2,
        -1,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 2,
      parameters: [0, "(([!s[21]]))Start blackout."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You flick the light switch on and off until..."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [21, 21, 1],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [1, "(([s[21]]))End blackout."],
    },
    {
      code: 101,
      indent: 3,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 3,
      parameters: ["You flick the light switch on. It just works."],
    },
    {
      code: 121,
      indent: 3,
      parameters: [21, 21, 0],
    },
    {
      code: 0,
      indent: 3,
      parameters: [],
    },
    {
      code: 402,
      indent: 2,
      parameters: [2, "Cancel"],
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
      code: 412,
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

  if (lastLoadedMapId == 2) {
    if (gVr(213) >= 2) { // if juicebox is there, then move the lamp
      $dataMap.events[5].x = 12;
      $dataMap.events[5].y = 6;
    }

    $dataMap.events[5].pages[0].directionFix = true;
    $dataMap.events[5].pages[0].list = BLACKOUT_LAMP_PAGE;
  }
};
