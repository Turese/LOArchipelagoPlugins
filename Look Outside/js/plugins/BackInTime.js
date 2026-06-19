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

BackInTime.isSpineDead = function () {
  return !!$gameSelfSwitches._data[[267, 19, "C"].toString()];
};

BackInTime.fixSpineKilled = function () {
  delete $gameSelfSwitches._data[[267, 19, "C"].toString()]; // delete the dead spine state on her event
};

BackInTime.isBenDead = function () {
  return !!$gameSelfSwitches._data[[33, 2, "A"].toString()];
};

BackInTime.fixBenKilled = function () {
  delete $gameSelfSwitches._data[[33, 2, "A"].toString()]; // delete the dead ben state on his event
};

BackInTime.isWilhelminaDead = function () {
  if (!$gamePlayer.slotData || !$gamePlayer.slotData.goal !== 9) return false; // dont need to revive her if her ending not needed
  return gSw(1135);
};

BackInTime.fixWilhelminaKilled = function () {
  sSw(1135, false);
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

  sVr(462, 0); // asterfinalestate = 0
  delete $gameSelfSwitches._data[[162, 4, "D"].toString()]; // clear aster mask ending dead state

  sVr(463, 0); // aureliusfinalestate = 0
  delete $gameSelfSwitches._data[[162, 3, "D"].toString()]; // clear aurelius mask ending dead state

  sVr(464, 0); // jasperfinalestate = 0
  delete $gameSelfSwitches._data[[162, 34, "D"].toString()]; // clear beryl mask ending dead state

  sVr(465, 0); // jasperfinalestate = 0
  delete $gameSelfSwitches._data[[162, 35, "D"].toString()]; // clear jasper mask ending dead state

  sVr(883, 0); // remove count of astronomers killed so masked shadow wont appear
  sVr(466, 0); // reset 'successfull astronomers' count
  sVr(461, 0); // reset 'ready astronomers' count
  sSw(485, false); // playerTransformingIntoTree - makes players head split open and leads to failed ritual
  sVr(467, 0); // players current head split state
  $gameMap.eraseFilter("dizzy"); // remove the blur filter from player mutating
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
  BackInTime.createCalendarBackInTimeEvent($dataMap.events[CALENDAR_EVENT_ID]);
  const event = $gameMap.event(CALENDAR_EVENT_ID);

  event.refresh();
};

// checks if any astronomers have left to the roof
// or if they have been interacted with on the roof
BackInTime.haveAnyAstronomersLeft = function () {
  return (
    gSw(1148) ||
    gSw(1149) ||
    gSw(1150) ||
    gSw(206) ||
    gVr(462) > 0 ||
    gVr(463) > 0 ||
    gVr(464) > 0 ||
    gVr(465) > 0
  );
};

BackInTime.generateRegretList = function (rText) {
  const regretIndent = 2;
  // format, array of arrays of strings. each
  // has indent 2 because thats how deep the
  // regret dialogue is indented in the event
  const dialogueOpener = {
    code: 101,
    indent: regretIndent,
    parameters: ["", 0, 0, 2, ""],
  };
  let regretList = [];
  rText.forEach((textBoxSet) => {
    regretList.push(dialogueOpener);
    textBoxSet.forEach((text) => {
      regretList.push({
        code: 401,
        indent: regretIndent,
        parameters: [text],
      });
    });
  });
  return regretList;
};

BackInTime.regretTemplates = {
  sybilDead: {
    rFunction: "BackInTime.fixSybilKilled",
    rName: "(([!s[975],!s[969]]))Sybil.",
    rText: [
      [
        "You think of Sybil. Perhaps the knowledge she was protecting",
        "should be left alone after all. If only you hadn't realized",
        "this too late. You close your eyes and ruminate on your regret...",
      ],
      [
        "Actually, is she dead? You wouldn't ever hurt her. In fact,",
        "you feel as though she's coming to take a peek through the",
        "hole in the wall very soon!",
      ],
    ],
  },
  spiderHuskDead: {
    rFunction: "BackInTime.fixSpiderHuskKilled",
    rName: "(([!s[1083]]))Spider Husk.",
    rText: [
      [
        "You think of how you killed that spider husk",
        "from apartment 12. It seemed more lucid than the",
        "others. You close your eyes and imagine what it",
        "could have been...",
      ],
      [
        "Actually, did you even kill it? It was connected to the",
        "growths on the floors and walls, and you didn't kill",
        "that part. You feel like you should go back and see. You",
        "wouldn't be surprised if it's already perked back up.",
      ],
    ],
  },
  tickleDead: {
    rFunction: "BackInTime.fixTickleDead",
    // also checks if tickle is on player or on the tickmonger
    rName: "(([s[672];s[673];!s[661]]))Tickle.",
    rText: [
      [
        "You think of Tickle. You really miss his cool shop. There must",
        "have been a better way to get him off that pipe. You close",
        "your eyes and think...",
      ],
      [
        "Actually, is he dead? You might have just knocked him into the",
        "water. In fact, you wouldn't be surprised if he already crawled",
        "back up there.",
      ],
    ],
  },
  emmanuelDead: {
    rCondition: BackInTime.isEmmanuelDead,
    rFunction: "BackInTime.fixEmmanuelKilled",
    rName: "Emmanuel.",
    rText: [
      [
        "You think of Emmanuel. You have to hand it to him,",
        "he was a chill dude. You wish you hadn't killed him.",
        "You close your eyes and clasp your hands...",
      ],
      [
        "Actually, did you kill him? You wouldn't have.",
        "In fact, you feel like he's back at Mutt's listening",
        "to his tapes right now.",
      ],
    ],
  },
  kaeleyDead: {
    rCondition: BackInTime.isKaeleyDead,
    rFunction: "BackInTime.fixKaeleyKilled",
    rName: "Kaeley.",
    rText: [
      [
        "You think of Kaeley. You wish you hadn't killed",
        "her like that. You close your eyes and focus on",
        "locking those bad memories away...",
      ],
      [
        "Actually, did you kill her? No, you couldn't have.",
        "She's probably back in her maze locking some",
        "more doors right now.",
      ],
    ],
  },
  trueFredDead: {
    rCondition: BackInTime.isTrueFredDead,
    rFunction: "BackInTime.fixTrueFredKilled",
    rName: "Fred.",
    rText: [
      [
        "You think of the faceless Fred from the closet. You're getting",
        "the feeling that you might have been too hasty in assuming",
        "that he wasn't the real one. You close your eyes and",
        "vow to be more conscientious in the future...",
      ],
      [
        "Actually, did you kill him? Nah, you wouldn't have. You knew he",
        "was the real one the whole time! He's probably in ",
        "his closet painting something new at this very moment.",
      ],
    ],
  },
  ratsDead: {
    rCondition: BackInTime.areFriendlyFireRatsKilled,
    rName: "Rats.",
    rFunction: "BackInTime.fixFriendlyRatsKilled",
    rText: [
      [
        "You think of the rats on the first floor. You wish you hadn't",
        "killed so many before becoming the new rat king.",
        "You close your eyes and imagine your rat kingdom...",
      ],
      [
        "Actually, there were plenty of rats, what's the harm in",
        "killing one or two? You feel as though new ones",
        "have arrived to take the dead ones' places already.",
      ],
    ],
  },
  papineauDead: {
    rName: "(([!s[169]]))Papineau.",
    rFunction: "BackInTime.fixPapKilled",
    rText: [
      [
        "You think of Papineau. You regret killing him.",
        "The world is a filthier place for his absence. You close",
        "Your eyes and vow to go clean from now on...",
      ],
      [
        "Actually, is he dead? He couldn't be. You wouldn't",
        "have done a deed that dirty. He's probably",
        "busy mopping the break room right now.",
      ],
    ],
  },
  joelDead: {
    rName: "Joel.",
    rCondition: BackInTime.isJoelDead,
    rFunction: "BackInTime.fixJoelKilled",
    rText: [
      [
        "You think of Joel. He was just a kid, did you really have",
        "to attack him? You close your eyes and vow to do",
        "better in the future...",
      ],
      [
        "Actually, is he dead? You might have hallucinated that.",
        "You feel like you should run over and check",
        "on him right now.",
      ],
    ],
  },
  benDead: {
    rName: "Ben.",
    rCondition: BackInTime.isBenDead,
    rFunction: "BackInTime.fixBenKilled",
    rText: [
      [
        "You think of Joel's little brother. Ben.",
        "You didn't need to hurt him. He wasn't even paying any",
        "attention to you until you attacked. You close your eyes",
        "and vow to do better...",
      ],
      [
        "Actually, is he dead? You wouldn't kill a kid, would you?",
        "You feel the urge to go over and check right now.",
      ],
    ],
  },
  sadipedeDead: {
    rCondition: BackInTime.isSadipedeDead,
    rName: "Marc-André.",
    rFunction: "BackInTime.fixSadipedeKilled",
    rText: [
      [
        "You think of Marc-André. All he wanted was",
        "to kill you a little bit. Was that so wrong? You",
        "close your eyes and vow to be more generous",
        "In the future...",
      ],
      [
        "Actually, did you kill him? You're better than",
        "that. He's probably right where you left him",
        "You feel the urge to go back up to comfort him.",
      ],
    ],
  },
  steveDead: {
    rCondition: BackInTime.isSteveDead,
    rName: "Steve.",
    rFunction: "BackInTime.fixSteveKilled",
    rText: [
      [
        "You think of Steve. You wish you had been more generous.",
        "They were only bandages. You close your eyes and vow",
        "to be more careful with healing items in",
        "the future...",
      ],
      [
        "Actually, is he dead? You feel as though",
        "he's still alive in the basement and",
        "hungrier than ever right now.",
      ],
    ],
  },
  sophieGone: {
    rCondition: BackInTime.sophieAcquiredInPast,
    rName: "(([!s[362];!s[364]]))Sophie.",
    rFunction: "BackInTime.fixSophieGone",
    rText: [
      [
        "You think of Sophie. You wish you could have brought her",
        "back to her mother. You close your eyes and pray for her",
        "safety...",
      ],
      [
        "Suddenly, you feel a lot better about her situation. In fact,",
        "you wouldn't be surprised if she's already found her way",
        "back to this apartment!",
      ],
    ],
  },
  hellenQuestFailed: {
    rName: "(([!s[1086]]))Hellen.",
    rFunction: "BackInTime.fixHellenQuest",
    rText: [
      [
        "You think of Hellen. You really let her down. You close your eyes",
        "and vow to do better...",
      ],
      [
        "Actually, did you forget to water her plant the other day?",
        "Perhaps you only imagined you did. In fact, you feel as though",
        "Hellen is waiting for you right now!",
      ],
    ],
  },
  lyleKilled: {
    rName: "(([!s[832]]))Lyle.",
    rFunction: "BackInTime.fixLyleKilled",
    rText: [
      [
        "You think of Lyle. You really wish it didn't have to end",
        "that way. You almost miss him. You close your eyes and",
        "think of smooches...",
      ],
      [
        "Actually, is he dead? You might have made that part up.",
        "In fact, you feel as though he's back home and",
        "healthier than ever right now.",
      ],
    ],
  },
  plantDead: {
    rName: "(([v[128]>5]))Your plant.",
    rFunction: "BackInTime.fixPlantHealth",
    rText: [
      [
        "You think of your plant. You haven't been taking care of it",
        "very much lately, and now you fear it may be too late.",
        "You close your eyes and hope...",
      ],
      [
        "Suddenly, you feel a lot more optimistic. In fact, it's looking",
        "greener already!",
      ],
    ],
  },
  muttKilled: {
    rName: "(([!s[317]]))Mutt.",
    rFunction: "BackInTime.fixMuttKilled",
    rText: [
      [
        "You think of Mutt. You know you killed him and robbed him and",
        "all but you wish he didn't have to be so dead about it.",
        "You close your eyes and vow to do better...",
      ],
      [
        "Actually, is he dead? You might have made that part up.",
        "In fact, you feel as though he's healthier than ever right now.",
      ],
    ],
  },
  shadowDispo: {
    rName: "(([!v[152]<10;!v[150]=7]))The Masked Shadow.",
    rFunction: "BackInTime.fixMaskedShadowDispo",
    rText: [
      [
        "You think of the masked shadow. If only you had treated it",
        "better. You close your eyes and wish it knew you felt no ill will...",
      ],
      [
        "Now that you think of it, it did seem to like you a lot.",
        "In fact, you'd be willing to bet that it's coming for a visit",
        "very soon!",
      ],
    ],
  },
  lockedInOffering: {
    rCondition: BackInTime.haveAnyAstronomersLeft,
    rName: "The ritual.",
    rFunction: "BackInTime.fixLockedInOfferings",
    rText: [
      [
        "You think of the ritual. You said you were ready,",
        "but now you're having second thoughts. You close your eyes",
        "and consider your options...",
      ],
      [
        "There's nothing wrong with going back and talking to the",
        "astronomers again, is there? In fact, you feel as though they",
        "may have forgotten to go up to the roof after all.",
      ],
    ],
  },
  astronomersKilled: {
    rName: "(([!s[170],!s[171],!s[172],!s[173]]))The Astronomers.",
    rFunction: "BackInTime.fixAstronomersKilled",
    rText: [
      [
        "You think of the astronomers. You wish you hadn't hurt",
        "any of them. They were only trying to help. You close",
        "your eyes and vow to do better...",
      ],
      [
        "Actually, did you even attack any of them?",
        "You don't think you did. In fact, you're quite certain",
        "that all four of them are just fine.",
      ],
    ],
  },
  ernestTooLate: {
    rName: "(([!s[797];!s[790]]))Ernest.",
    rFunction: "BackInTime.fixErnestTooLate",
    rText: [
      [
        "You think of Ernest. You wish you could have been there",
        "for him when he needed you most. You close your eyes and",
        "vow to do better...",
      ],
      [
        "Actually, it may not be too late! In fact, you feel as",
        "though you should go check on Ernest today.",
      ],
    ],
  },
  ernestKilled: {
    rName: "(([!s[789]]))Ernest.",
    rFunction: "BackInTime.fixErnestKilled",
    rText: [
      [
        "You think of Ernest. He really didn't have much. Did",
        "you really need to kill him? You close your eyes and",
        "vow to do better...",
      ],
      [
        "Actually, you didn't do a thing to him! In fact, you feel as",
        "though you should go check on Ernest today.",
      ],
    ],
  },
  eugeneKilled: {
    rName: "(([!s[168]]))Eugene.",
    rFunction: "BackInTime.fixEugeneKilled",
    rText: [
      [
        "You think of Eugene. You know you killed him and robbed",
        "him and all but you wish he didn't have to be so dead about",
        "it. You close your eyes and vow to do better...",
      ],
      [
        "Actually, is he dead? You might have made that part up.",
        "In fact, you feel as though he's healthier than ever right now.",
      ],
    ],
  },
  basementBlocked: {
    rName: "(([!s[1097];s[1063]]))The basement pit.",
    rFunction: "BackInTime.fixBasementBlocked",
    rText: [
      [
        "You think of that earthquake. You wish you'd had more time",
        "to explore a little before it caused that cave-in.",
        "You close your eyes and imagine what you could have found...",
      ],
      [
        "Actually, was there an earthquake? You might have dreamed it.",
        "You feel as though you should go exploring in",
        "the parking garage right now.",
      ],
    ],
  },
  jeanneKilled: {
    rName: "(([!s[746]]))Jeanne.",
    rFunction: "BackInTime.fixJeanneKilled",
    rText: [
      [
        "You think of Jeanne. Sure, that mutation was gnarly,",
        "but did she really deserve to die over it?",
        "You close your eyes and vow to do better...",
      ],
      [
        "Actually, did you kill her? You're better than that",
        "You feel as though you should pop down to check in on her.",
      ],
    ],
  },
  jeanneMutated: {
    rName: "(([s[746];v[583]<20]))Jeanne's mutation.",
    rFunction: "BackInTime.revertJeannePhase",
    rText: [
      [
        "You think of Jeanne. You wish you could have seen more",
        "of her aparement before she grew through the walls. You close",
        "your eyes and think of stealing a muffin off the counter...",
      ],
      [
        "Actually, did her mutation ever get any worse?",
        "You feel as though you should pop down to double check.",
      ],
    ],
  },
  spineKilled: {
    rCondition: BackInTime.isSpineDead,
    rName: "Spine.",
    rFunction: "BackInTime.fixSpineKilled",
    rText: [["You think of Spine."], []],
  },
  wilhelminaKilled: {
    rCondition: BackInTime.isWilhelminaDead,
    rName: "Wilhelmina.",
    rFunction: "BackInTime.fixWilhelminaKilled",
    rText: [
      [
        "You think of Wilhelmina. You wish you had considered",
        "her offer more. Eternal life and power in return for one",
        "measly word. You close your eyes and imagine...",
      ],
      [
        "Actually, is she dead? Something that ancient and powerful",
        "can't be truly killed, can it? You feel the urge to",
        "go back to the basement and check.",
      ],
    ],
  },
};

BackInTime.createOptionIntro = function (options, indent) {
  return {
    code: 102,
    indent,
    parameters: [options, -1, -1, 2, 0],
  };
};

// creates an option that is unselectable if it's already that date
BackInTime.createDateChangeOptionName = function (index) {
  return `<<[v[15]=${index}]>>Day ${index + 1}.`;
};

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
};

BackInTime.createRegret = function (index, regretKey) {
  const { rName, rFunction, rText } = BackInTime.regretTemplates[regretKey];

  return [
    {
      code: 402,
      indent: 1,
      parameters: [index, rName],
      collapsed: true,
    },
    ...BackInTime.generateRegretList(rText),
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
};

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
        ["No, stay.", "Go to week 1 (days 1-7).", "Go to week 2 (days 8-15)."],
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
