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

var ReportLocations = ReportLocations || {};

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
};

ReportLocations.applyChanges();
