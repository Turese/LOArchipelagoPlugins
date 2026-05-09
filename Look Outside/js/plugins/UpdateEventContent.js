/**
 * @target MZ
 * @name UpdateEventContent
 * @plugindesc Updates events to have archipelago-specific text and images
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

// mapid -> event with overworld item -> ap item id
const MAP_OVERWORLD_ITEM_OVERRIDES = {
  3: {
    99: [
      "APT_33_LIVING_ROOM_CASH",
      "$gameSelfSwitches.setValue([3, 99, 'A'], true)",
    ],
  },
  4: {
    23: [
      "APT_33_BATHROOM_FIRST_AID_KIT",
      "$gameSelfSwitches.setValue([4, 23, 'A'], true)",
    ],
  },
};

var UpdateEventContent = UpdateEventContent || {};

UpdateEventContent.overrideOverworldPickups = function () {
  function getAPItemPickupPage(
    script = "",
    itemName = AP_ITEM,
    itemImage = DEFAULT_AP_ITEM_IMAGE,
  ) {
    return {
      conditions: {
        actorId: 1,
        actorValid: false,
        itemId: 1,
        itemValid: false,
        selfSwitchCh: "A",
        selfSwitchValid: false,
        switch1Id: 1,
        switch1Valid: false,
        switch2Id: 1,
        switch2Valid: false,
        variableId: 1,
        variableValid: false,
        variableValue: 0,
      },
      directionFix: true,
      image: itemImage,
      list: [
        {
          code: 101,
          indent: 0,
          parameters: ["", 0, 0, 2, ""],
        },
        {
          code: 401,
          indent: 0,
          parameters: [`Take ${itemName}\\C[0]?`],
        },
        {
          code: 102,
          indent: 0,
          parameters: [["Take it.", "Leave it."], -1, 0, 2, 0],
        },
        {
          code: 402,
          indent: 0,
          parameters: [0, "Take it."],
        },
        {
          code: 101,
          indent: 1,
          parameters: ["", 0, 0, 1, ""],
        },
        {
          code: 401,
          indent: 1,
          parameters: [`Find {${itemName}}\\C[0].`],
        },
        {
          code: 355,
          indent: 1,
          parameters: [`${script}`],
        },
        {
          code: 0,
          indent: 1,
          parameters: [],
        },
        {
          code: 402,
          indent: 0,
          parameters: [1, "Leave it."],
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
    };
  }

  const eventsToOverride = MAP_OVERWORLD_ITEM_OVERRIDES[lastLoadedMapId];
  if (!eventsToOverride) return;
  Object.keys(eventsToOverride).forEach((eventId) => {
    const [name, script] = eventsToOverride[eventId];
    const event = $dataMap.events[eventId];
    console.log(name, LookOutsideAPClient.getItemName(name));
    event.pages[0] = getAPItemPickupPage(
      script,
      LookOutsideAPClient.getItemName(name),
      LookOutsideAPClient.getItemImage(name),
    );
  });
};
