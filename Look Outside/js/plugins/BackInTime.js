/**
 * @target MZ
 * @name BackInTime
 * @plugindesc Back in time: speak to the calendar to get the option to travel through time!
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

var BackInTime = BackInTime || {};

// checks for sophie in the special door encounter pool
BackInTime.sophieAcquiredInPast = function () {
  // todo, check for sophie as an acquired ap item
  return $gamePlayer && $gamePlayer.sophieAcquired;
};

BackInTime.fixMuttKilled = function () {
  sSw(317, false); // muttDead = OFF
};

BackInTime.fixPlantHealth = function () {
  sVr(128, 50); // plantHealth = 50
  sVr(129, 0); // wateredit = 0
};

BackInTime.fixSophieGone = function () {
  sSw(362, true); // recruitedSophie = ON
};

BackInTime.fixPapKilled = function () {
  sSw(169, false); // killedpapineau = OFF
};

BackInTime.fixLyleKilled = function () {
  sSw(832, false); // killedLyle = OFF
  // so lyle doesnt attack you immediately when you get back, send him back to pre-all trading
  sVr(192, 0); // shutterbugState = 0
  delete $gameSelfSwitches._data[[9, 14, "C"].toString()]; // delete the dead lyle state on his event
};

BackInTime.fixEugeneKilled = function () {
  sSw(168, false); // killedEugene = OFF
};

BackInTime.fixMaskedShadowDispo = function () {
  sVr(152, 10); // shadowDispo = 10
};

BackInTime.fixAstronomersKilled = function () {
  sSw(170, false); // killedAurelius = OFF
  sSw(171, false); // killedAster = OFF
  sSw(172, false); // killedJasper = OFF
  sSw(173, false); // killedBeryl = OFF
};

BackInTime.fixLockedInOfferings = function () {
  sSw(206, false); // lastOfferingGood = OFF
  sSw(1148, false); // asterLeft = OFF
  sSw(1149, false); // aureliusLeft = OFF
  sSw(1150, false); // berylLeft = OFF
};

BackInTime.fixErnestTooLate = function () {
  sSw(797, false); // ernestTooLate = OFF
  sSw(790, false); // colSqueakumDead = OFF
};

BackInTime.fixErnestKilled = function () {
  sSw(789, false); // ErnestDead = OFF
};

BackInTime.fixJoelKilled = function () {
  sVr(107, 6); // joelstate = 6
  $gameSelfSwitches.setValue([32, 7, "A"], false); // joel dead = off
};

BackInTime.isJoelDead = function () {
  return !!$gameSelfSwitches._data[[32, 7, "A"].toString()];
};

BackInTime.fixHellenQuest = function () {
  sSw(1086, false); // MissedHellenWatering = OFF
  sSw(35, true); // recruitedHellen = ON
  sSw(1087, true); // hellenSpawned = OFF
};

BackInTime.fixBasementBlocked = function () {
  // if !1063 openedpitdoor
  sSw(1097, false); // Earthquake = OFF
};

BackInTime.fixJeanneKilled = function () {
  sSw(746, false); // JeanneDead = OFF
  sSw(747, false); // MainHydraHeadDead = OFF
  // change jeane apartment tileset back to normal
};

BackInTime.fixSpineKilled = function () {};

BackInTime.revertJeannePhase = function () {
  sVr(583, 5); // set jeanne state to her middle phase
};

BackInTime.fixSteveKilled = function () {
  $gameSelfSwitches.setValue([79, 17, "B"], false); // steve dead = off
  sVr(611, 0); // steveDispo = 0 (starting from scratch)
};

BackInTime.isSteveDead = function () {
  return !!$gameSelfSwitches._data[[79, 17, "C"].toString()];
};

BackInTime.isSadipedeDead = function () {
  return $gameSelfSwitches._data[[457, 1, "C"].toString()];
};

BackInTime.fixSadipedeKilled = function () {
  $gameSelfSwitches.setValue([457, 1, "C"], false); // sadipede dead = off
};

BackInTime.areFriendlyFireRatsKilled = function () {
  if (!$gamePlayer.slotData || !$gamePlayer.slotData.rusty_crown) return false; // dont need to revive rats if no rusty crown locations
  if (!$gameParty.hasItem($dataArmors[42], true)) return false; // no rusty crown - dont present option
  if (gSw(506)) return true; //bigRatAmbushDead - burrito rat and friends
  if (gSw(650)) return true; //rat guardians - the ones that sell you cheese
  if ($gameSelfSwitches._data[[106, 11, "C"].toString()]) return true; // rat freak - gives you sword
  if (gSw(501)) return true; // pipeRoomRats - the one with the secret shop

  return false;
};

BackInTime.fixFriendlyRatsKilled = function () {
  sSw(506, false);
  sSw(650, false);
  delete $gameSelfSwitches._data[[106, 11, "C"].toString()];
  sSw(501, false);
};

BackInTime.isTrueFredDead = function () {
  return $gameSelfSwitches._data[[239, 6, "C"].toString()];
};

BackInTime.fixTrueFredKilled = function () {
  delete $gameSelfSwitches._data[[239, 6, "C"].toString()]; // delete the dead true fred
};

BackInTime.fixSybilKilled = function () {
  sSw(969, false);
  sSw(975, false);
};

BackInTime.fixSpiderHuskKilled = function () {
  sSw(1083, false);
};

BackInTime.fixTickleDead = function () {
  sSw(661, false); // set tickle's boiler arm to frozen / set tickle to alive
  sVr(523, gVr(523) - 1); // reduce active boiler arms by 1
};

BackInTime.fixEmmanuelKilled = function () {
  delete $gameSelfSwitches._data[[56, 28, "C"].toString()];
};

BackInTime.isEmmanuelDead = function () {
  return !!$gameSelfSwitches._data[[56, 28, "C"].toString()];
};

BackInTime.isKaeleyDead = function () {
  return !!$gameSelfSwitches._data[[355, 43, "A"].toString()];
};

BackInTime.fixKaeleyKilled = function () {
  delete $gameSelfSwitches._data[[355, 43, "A"].toString()];
  sSw(939, false); // theres also a kaeleydead switch
};

const BEDROOM_MAP_ID = 2;
const CALENDAR_EVENT_ID = 16;

// refresh to recalculate the rconditions
BackInTime.refreshEvent = function () {
  BackInTime.createCalendarBackInTimeEvent($gameMap._events[CALENDAR_EVENT_ID]);
  const event = $gameMap.event(CALENDAR_EVENT_ID);

  event.refresh();
};

// checks if any astronomers have left to the roof
BackInTime.haveAnyAstronomersLeft = function () {
  return gSw(1148) || gSw(1149) || gSw(1150) || gSw(206);
};

BackInTime.regretTemplates = {
    sybilDead: {
      rFunction: "BackInTime.fixSybilKilled",
      rName: "(([!s[975],!s[969]]))Sybil.",
      rText: [],
    },
    spiderHuskDead: {
      rFunction: "BackInTime.fixSpiderHuskKilled",
      rName: "(([!s[1083]]))Spider Husk.",
      rText: [],
    },
    tickleDead: {
      rFunction: "BackInTime.fixTickleDead",
      // also checks if tickle is on player or on the tickmonger
      rName: "(([s[672];s[673];!s[661]]))Tickle.",
      rText: [],
    },
    emmanuelDead: {
      rCondition: BackInTime.isEmmanuelDead,
      rFunction: "BackInTime.fixEmmanuelKilled",
      rName: "Emmanuel.",
      rText: [],
    },
    kaeleyDead: {
      rCondition: BackInTime.isKaeleyDead,
      rFunction: "BackInTime.fixKaeleyKilled",
      rName: "Kaeley.",
      rText: [],
    },
    trueFredDead: {
      rCondition: BackInTime.isTrueFredDead,
      rFunction: "BackInTime.fixTrueFredKilled",
      rName: "Fred.",
      rText: [
        {
          code: 101,
          indent: 2,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["You think of that Fred from the closet. You think you"],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "may have been mistaken as to which Fred was the real one. You",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "You close your eyes and vow to be more conscientious...",
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
          parameters: ["Actually, did you kill him? You couldn't have."],
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
    ratsDead: {
      rCondition: BackInTime.areFriendlyFireRatsKilled,
      rName: "Rats.",
      rFunction: "BackInTime.fixFriendlyRatsKilled",
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
            "You think of the rats on the first floor. You wish you hadn't",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [" killed so many before becoming the new rat king."],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["You close your eyes and imagine your rat kingdom..."],
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
            "Actually, there were plenty of rats, what's killing one",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "or two? In fact, you feel as though new ones have arrived to",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["take the dead ones' places already."],
        },
      ],
    },
    papineauDead: {
      rName: "(([!s[169]]))Papineau.",
      rFunction: "BackInTime.fixPapKilled",
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
            "You think of Papineau. You know you murdered him and all but you",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "but you wish he didn't have to be so dead about it. You close your",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["eyes and vow to do better..."],
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
    joelDead: {
      rName: "Joel.",
      rCondition: BackInTime.isJoelDead,
      rFunction: "BackInTime.fixJoelKilled",
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
            "You think of Joel. He was just a kid, did you really have",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["to attack him? You close your eyes and vow to do"],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["better in the future..."],
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
            "Actually, is he dead? You might have hallucinated that.",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["In fact, you feel like you should run over and check"],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["on him right now."],
        },
      ],
    },
    sadipedeDead: {
      rCondition: BackInTime.isSadipedeDead,
      rName: "Marc-André.",
      rFunction: "BackInTime.fixSadipedeKilled",
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
            "You think of Marc-andré. All he wanted was to kill you.",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "Was that too much to ask? You close your eyes and vow to",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["be more generous in the future..."],
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
            "In fact, you feel like you should run back to the elevator and",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["let him kill you right now."],
        },
      ],
    },
    steveDead: {
      rCondition: BackInTime.isSteveDead,
      rName: "Steve.",
      rFunction: "BackInTime.fixSteveKilled",
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
            "You think of Steve. You wish you had fed him instead of",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "killing him. You close your eyes and vow to do better...",
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
    sophieGone: {
      rCondition: BackInTime.sophieAcquiredInPast,
      rName: "(([!s[362];!s[364]]))Sophie.",
      rFunction: "BackInTime.fixSophieGone",
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
      rFunction: "BackInTime.fixHellenQuest",
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
      rFunction: "BackInTime.fixLyleKilled",
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
    plantDead: {
      rName: "(([v[128]>5]))Your plant.",
      rFunction: "BackInTime.fixPlantHealth",
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
      rFunction: "BackInTime.fixMuttKilled",
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
      rFunction: "BackInTime.fixMaskedShadowDispo",
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
      rCondition: BackInTime.haveAnyAstronomersLeft,
      rName: "The offerings.",
      rFunction: "BackInTime.fixLockedInOfferings",
      rText: [
        {
          code: 101,
          indent: 2,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["You think of the offerings. You said you were ready,"],
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
            "There's nothing wrong with going back and asking the astronomers again,",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "is there? In fact, you feel as though they may have forgotten",
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
      rFunction: "BackInTime.fixAstronomersKilled",
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
      rFunction: "BackInTime.fixErnestTooLate",
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
      rFunction: "BackInTime.fixErnestKilled",
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
      rName: "(([!s[168]]))Eugene.",
      rFunction: "BackInTime.fixEugeneKilled",
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
      rName: "(([!s[1097];s[1063]]))The basement pit.",
      rFunction: "BackInTime.fixBasementBlocked",
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
            "You think of that earthquake. You wish you'd had more time",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "to explore a little before it happened. You close your eyes",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["and imagine what you could have found..."],
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
            "Actually, was there an earthquake? You might have dreamed it.",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "In fact, you feel as though you should go explore down in",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["the parking garage right now."],
        },
      ],
    },
    jeanneKilled: {
      rName: "(([!s[746]]))Jeanne.",
      rFunction: "BackInTime.fixJeanneKilled",
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
            "You think of Jeanne. You know you murdered her and all but you",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "wish she didn't have to be so dead about it. You close your eyes",
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
            "Actually, is she dead? You might have made that part up.",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "In fact, you feel as though she's healthier than ever right",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["now."],
        },
      ],
    },
    jeanneMutated: {
      rName: "(([s[746];v[583]<20]))Jeanne.",
      rFunction: "BackInTime.revertJeannePhase",
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
            "You think of Jeanne. You wish you could have seen more",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "of her aparement before she grew through the walls. You close",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["your eyes and imagine..."],
        },
        {
          code: 101,
          indent: 2,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["Actually, did her mutation ever get any worse?"],
        },
        {
          code: 401,
          indent: 2,
          parameters: [
            "You feel as though you should run down to double check.",
          ],
        },
        {
          code: 401,
          indent: 2,
          parameters: ["now."],
        },
      ],
    },
  };

BackInTime.createOptionIntro = function (options, indent) {
    return {
      code: 102,
      indent,
      parameters: [options, -1, -1, 2, 0],
    };
  }

  // creates an option that is unselectable if it's already that date
  BackInTime.createDateChangeOptionName = function (index) {
    return `<<[v[15]=${index}]>>Day ${index + 1}.`;
  }

  // sets current date to the index selected
  BackInTime.createDateChangeOption = function (index, date, indent) {
    return [
      {
        code: 402,
        indent,
        parameters: [index, BackInTime.createDateChangeOptionName(date)],
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

BackInTime.createRegret = function (index, regretKey) {
    const { rName, rFunction, rText } = BackInTime.regretTemplates[regretKey];

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
        parameters: [`${rFunction}(); BackInTime.refreshEvent();`],
      },
      {
        code: 0,
        indent: 2,
        parameters: [],
      },
    ];
  }

BackInTime.createRegretOptions = function () {
    const regretsList = Object.keys(BackInTime.regretTemplates);

    const regretNames = [];
    const regretCases = [];

    let index = 1;

    regretsList.forEach((regretName) => {
      const options = BackInTime.regretTemplates[regretName];
      if (!options.rCondition || options.rCondition()) {
        regretNames.push(options.rName);
        regretCases.push(...BackInTime.createRegret(index, regretName));
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

BackInTime.createCalendarBackInTimeEvent = function (ev) {

    const week1OptionNames = [];
    const week1Options = [];

    for (let date = 0; date < 7; date++) {
      week1OptionNames.push(BackInTime.createDateChangeOptionName(date));
      week1Options.push(...BackInTime.createDateChangeOption(date, date, 2));
    }
    const week1OptionIntro = BackInTime.createOptionIntro(week1OptionNames, 2);

    const week2OptionNames = [];
    const week2Options = [];

    for (let date = 7, i = 0; date < 15; date++, i++) {
      week2OptionNames.push(BackInTime.createDateChangeOptionName(date, i));
      week2Options.push(...BackInTime.createDateChangeOption(i, date, 2));
    }
    const week2OptionIntro = BackInTime.createOptionIntro(week2OptionNames, 2);

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
      ...BackInTime.createRegretOptions(),
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
        code: 117,
        indent: 0,
        parameters: [4],
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
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];

    ev.pages[1].list = calendarSequence;
  
};

BackInTime.createClockTimeEvent = function (ev) {
  ev.pages[0].list = [
    {
      code: 101,
      indent: 0,
      parameters: ["", 0, 0, 2, ""],
    },
    {
      code: 401,
      indent: 0,
      parameters: ["It is \\V[12]."],
    },
    {
      code: 102,
      indent: 0,
      parameters: [
        [
          "(([!s[990]]))Start the pendulum.",
          "(([s[990]]))Stop the pendulum.",
          "Set current time.",
          "Leave it be.",
        ],
        3,
        3,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 0,
      parameters: [0, "(([!s[990]]))Start the pendulum."],
    },
    {
      code: 121,
      indent: 1,
      parameters: [990, 990, 1],
    },
    {
      code: 357,
      indent: 1,
      parameters: [
        "MUSH_Audio_Engine",
        "StopBgs",
        "Stop BGS",
        {
          Channel: "1",
          FadeOut: "0",
        },
      ],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Channel = 1"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Fade Out = 0"],
    },
    {
      code: 357,
      indent: 1,
      parameters: [
        "MUSH_Audio_Engine",
        "AddSpacialBgs",
        "Add Spacial BGS",
        {
          Filename: "TickTock",
          Pitch: "100",
          Channel: "1",
          Dynamic: "false",
          MaxVolume: "90",
          Radius: "20",
          Strength: "100",
          Pan: "Origin Expand",
          PanSt: "3",
          PanLd: "12",
        },
      ],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Filename = TickTock"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Pitch = 100"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Channel = 1"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Dynamic = false"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Max Volume = 90"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Radius = 20"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Strength = 100"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Pan Type = Origin Expand"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Pan Start Distance = 3"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Pan Length Distance = 12"],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 402,
      indent: 0,
      parameters: [1, "(([s[990]]))Stop the pendulum."],
    },
    {
      code: 121,
      indent: 1,
      parameters: [990, 990, 0],
    },
    {
      code: 357,
      indent: 1,
      parameters: [
        "MUSH_Audio_Engine",
        "StopBgs",
        "Stop BGS",
        {
          Channel: "1",
          FadeOut: "0",
        },
      ],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Channel = 1"],
    },
    {
      code: 657,
      indent: 1,
      parameters: ["Fade Out = 0"],
    },
    {
      code: 0,
      indent: 1,
      parameters: [],
    },
    {
      code: 402,
      indent: 0,
      parameters: [2, "Set current time."],
    },
    {
      code: 102,
      indent: 1,
      parameters: [
        [
          "Advance an hour.",
          "Jump to midnight.",
          "Jump to 7AM.",
          "Jump to 11AM.",
          "Jump to 3PM.",
          "Jump to 7PM.",
          "Jump to 11PM.",
          "Never mind.",
        ],
        7,
        7,
        2,
        0,
      ],
    },
    {
      code: 402,
      indent: 1,
      parameters: [0, "Advance an hour."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [19, 19, 0, 0, 60],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [1, "Jump to midnight."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [16, 16, 0, 0, 0],
    },
    {
      code: 122,
      indent: 2,
      parameters: [17, 17, 0, 0, 0],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [2, "Jump to 7AM."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [16, 16, 0, 0, 7],
    },
    {
      code: 122,
      indent: 2,
      parameters: [17, 17, 0, 0, 0],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [3, "Jump to 11AM."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [16, 16, 0, 0, 11],
    },
    {
      code: 122,
      indent: 2,
      parameters: [17, 17, 0, 0, 0],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [4, "Jump to 3PM."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [16, 16, 0, 0, 15],
    },
    {
      code: 122,
      indent: 2,
      parameters: [17, 17, 0, 0, 0],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [5, "Jump to 7PM."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [16, 16, 0, 0, 19],
    },
    {
      code: 122,
      indent: 2,
      parameters: [17, 17, 0, 0, 0],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [6, "Jump to 11PM."],
    },
    {
      code: 122,
      indent: 2,
      parameters: [16, 16, 0, 0, 23],
    },
    {
      code: 122,
      indent: 2,
      parameters: [17, 17, 0, 0, 0],
    },
    {
      code: 0,
      indent: 2,
      parameters: [],
    },
    {
      code: 402,
      indent: 1,
      parameters: [7, "Never mind."],
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
      parameters: [3, "Leave it be."],
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
      code: 117,
      indent: 0,
      parameters: [4],
    },
    {
      code: 117,
      indent: 0,
      parameters: [7],
    },
    {
      code: 0,
      indent: 0,
      parameters: [],
    },
  ];
};
