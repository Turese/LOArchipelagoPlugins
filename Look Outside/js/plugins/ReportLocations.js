/**
 * @target MZ
 * @name ReportLocations
 * @plugindesc uses stored values for archipelago locations to report which ones have been reached
 * @authors 0palite
 * @version 1.0
 * @license Unlicensed
 * @help
 */

/*

check structure:

{
  type: "control_variable",
  variableId: int,
  relationship: string("=", ">", "<", ">=", "<="),
  value: any,
};

{
  type: "control_switch",
  switchId: int,
};

{
  type: "self_switch",
  roomId: int,
  eventId: int,
  switchValue: string(A - D),
};

*/

const LOCATION_ID_TO_CHECK = {
  1: { type: "self_switch", roomId: 3, eventId: 99, switchValue: "A" },
  2: {
    type: "control_variable",
    variableId: 496,
    relationship: ">=",
    value: 3,
  },
  3: { type: "self_switch", roomId: 4, eventId: 23, switchValue: "A" },
};

const ReportLocations = ReportLocations || {};

ReportLocations.applyChanges = function () {
  function checkLocation(check) {
    switch (check.type) {
      case "control_variable": {
        const variableValue = gVr(check.variableId);
        switch (check.relationship) {
          case "=":
            return variableValue === check.value;
          case ">":
            return variableValue > check.value;
          case "<":
            return variableValue < check.value;
          case ">=":
            return variableValue >= check.value;
          case "<=":
            return variableValue <= check.value;
          default:
            console.error(`Invalid relationship: ${check.relationship}`);
            return false;
        }
      }
      case "control_switch": {
        return gSr(check.switchId);
      }
      case "self_switch": {
        return $gameSelfSwitches.value(
          [check.roomId, check.eventId, check.switchValue].toString(),
        );
      }
      default:
        console.error(`Invalid check type: ${check.type}`);
        return false;
    }
  }

  function reportAllLocations() {
    const reachedLocations = [];
    for (const [locationId, check] of Object.entries(LOCATION_ID_TO_CHECK)) {
      if (checkLocation(check)) {
        reachedLocations.push(locationId);
      }
    }
    return reachedLocations;
  }

  window.ReportLocations = {
    reportAllLocations,
  };
};

ReportLocations.applyChanges();
