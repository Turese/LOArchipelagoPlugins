# Overview

(WIP) This is the collection of plugins for a Look Outside archipelago randomizer.

Intended to be run with [Zorkats's RPGModder](https://github.com/Zorkats/RPGModder)

Runs with the 2.1 build of [archipelago.js](https://archipelago.js.org/stable/)

## BlackoutLamp.js

Lets player activate/deactivate the blackout (prior to it being fully solved by the player) by interacting with the lamp in their bedroom.

The lamp moves out into the open after juicebox arrives.

## BackInTime.js

Creates an event activated by the calendar in the player's bedroom that undoes events that may block the player from future actions.

### Features: 
- [x] Ability to set current day 1-15
- [ ] Ability to bring Joel back to life when he's been killed by the player
- [x] Ability to bring Mutt back to life when he's been killed by the player
- [x] Ability to bring Eugene back to life when he's been killed by the player
- [x] Ability to take back telling Jasper to send the astronomers to the roof for endgame
- [ ] Ability to take back sending individual astronomers to the roof for endgame
- [x] Ability to reset the player's houseplant's health if it was neglected
- [x] Ability to reset progress on Hellen's quest if player missed a day
- [x] Ability to bring the astronomers back to life when any one of them have been killed
- [x] Ability to bring Ernest back to life if he has been killed by the player
- [x] Ability to return Ernest's quest back to active state if player missed the chance to enter rat hell
- [x] Ability to artifically raise the masked shadow's disposition if the player completed its quest without meeting the minimum to recruit it to the apartment
- [ ] Ability to unblock Charan's basement room if the player reached the earthquake event without opening the second entrance (WIP, possibly bugged)
- [ ] Ability to manually trigger Lyle recruitment if player completed his quest without meeting the recruitment requirements (WIP, currently bugged)
- [x] Ability to bring Lyle back to life and turn him non-hostile if player previously attacked + killed him
- [x] Ability to return Sophie to the apartment if the player kicked her out / gave her to the imposter lady instead of Harriet
- [ ] Ability to bring Jeanne back to life if killed by player

## UpdateMissableEvents.js

Updates overworld events so that events missed by the player can be retried.

- [x] door to wounded neighbor's bathroom no longer blocks an unarmed player like on explorer/survivor
- [x] Update trigger for grinning beast chase so it can be retried
- [x] Allow player to recruit Leigh even if they walked away after defeating the grinning beast
- [x] Make presence of overworld potential recruit encounters separate from their presence in player apartment (Lyle, Audrey, Aster, Leigh, Roaches, Joel, Papineau, Ernest) // todo: joel & papineau & ernest
- [ ] Updates apartment 13 to give player drop as soon as they have rat baby item, no sacrifice required
- [x] Updates tooth family members to spawn in upgraded forms even if they've been killed prior
- [ ] Make Audrey recruit unmissable (infinite advice cans, remove disposition check)
- [ ] Make Joel recruit unmissable (remove disposition check)
- [ ] Force player to kill every hydra part individually (killing body won't give all checks)
- [ ] Update Eugene's bookcase so it never becomes blocked by Nestor
- [ ] Update Grasshopper so it never despawns after Leigh's quest ends
- [ ] Update Piranhaman so piranhas always spawn whether or not he is killed
- [ ] Come up with the other cases...

## ClearExplicitDrops.js

Goes through the game's events to remove everything that explicitly grants an item to the player

- [x] Clear out starting arms + inventory from opening cutscene (currently only clearing games)
- [x] Delete gun sale from leigh
- [x] Clear out recruitment from leigh
- [x] Speed up opening cutscene (maybe find a better file for this one?)
- [x] Clear out bookshelf screamatorium event
- [x] Clear out wounded neighbor knife stealing event
- [x] Clear out f3 hallway planter spare key
- [x] Clear out masked shadow tongue gift
- [x] Clear out masked shadow recruitment
- [x] Clear out masked shadow hallway gift (wip, custom sprite won't render due to sprite facing the wrong direction)
- [x] Clear out elevator access granted from killing elevator freak
- [x] Clear out glitch world gifts (ambrose, 99 glitch elixir)
- [ ] Clear out event for Audrey to find specific items from bosses (bonus - add ability for them to be manually triggerable by the player and recorded in state)
- [x] Clear out rusted crown gift from rat king event
- [ ] Clear out keys dropped by the bug people living in the basement apartments in hard mode
- [ ] Clear out dark room key award for killing Lyle
- [ ] Clear out rewards granted for helping Jeanne
- [ ] Clear out door encounter gifts
- [x] Clear out gifts from Pierre in his room (clown drawing, clown outfit)
- [ ] Clear out prizes from completing Leigh's quest
- [ ] Clear out prizes from completing Roach's quest
- [ ] Clear out item upgrade from interacting with typewriter with loose manuscript
- [x] Clear out item exchange when using the telescope in Edwin's apartment
- [ ] Clear out item exchange when using the projector with void disc / photo paper
- [ ] Clear out ability to acquire more photo paper
- [ ] Clear out item exchange when giving lyle / using darkroom on exposed paper
- [ ] Clear out item exchange when using any tape on recorder
- [ ] Clear out painter's key reward from killing every part of Toxic Fred
- [ ] Clear out all explicit Fred rewards (final Fred rewards and intermediate rewards from the facetaker)
- [ ] Clear out gift from Jasper upon locking in offerings
- [ ] Come up with the other cases...

# UpdateEventContent.js

- [x] Update item events to not grant items and display randomized item name
- [x] Update trash can events to not grant items and display randomized item name
- [x] Update roach events to not grant items and display randomized item name
- [ ] Update drawer loot events to not grant items and display randomized item name
- [x] Update first aid box events to not grant items and display randomized item name
- [x] Update bathroom cabinet events to not grant items and display randomized item name


## GoHome.js

Adds the option for the player to teleport home from anywhere, necessary for situations where player enters an area where they can't back out from (the roof, Landlord's apartment phase 2, etc)

- [x] Functional Go Home option in pause menu (teleports player to the apartment 33 placemat from anywhere)

## Unarmed.js

Adds support for a player state that's missing both left and right arms, necessary for cases where player's left and right arm are individually in the item pool.

- [x] Update logic for equipping items when missing both arms
- [x] Update logic for arm state being updated (updates player sprite sheets on every transition instead of just the first time)
- [x] Add new sprites for no-arm state
- [ ] Add new mirror portraits for no-arm state (WIP)

## InsertAPItems.js

Functionality for inserting any item into the game at any time, necessary for AP to grant items.

- [x] Ability to grant individual items, weapons, and gear to the player.
- [x] Ability to grant any skill to the player
- [x] Ability to grant each arm individually (using logic from Unarmed plugin)
- [x] Ability to grant pre-defined resource packs (money + items)
- [x] Ability to grant any recruit
- [ ] Ability to randomize rat baby growth spurt as "progressive rat baby"
- [x] Ability to grant custom traps (reduce Sam's maintenance stats, add random status ailments to party)

## MainMenuAPOptions.js

New menu option in main menu + pause menu where player inputs AP slot name + server name + password

- [x] New Archipelago menu option in title screen menu + pause menu
- [ ] Add QOL features to text input (prompt text, center text entry)
- [x] Persist player-submitted values across save files / game loads
- [ ] Add connection status monitoring

## NormalizeDifficulty.js

Introduces functionality to make the AP experience the same no matter what difficulty mode the player chooses.

- [ ] Mass-update items on the ground that are hidden on certain difficulty settings so they either always or never appear (WIP -  currently forces easy mode items)
- [ ] Mass-update enemies that don't spawn on certain difficulty settings so they either always or never appear
- [x] Force save everywhere and autosave to be active in all difficulties

## LookOutsideAPClient.js

Intended main entry point to other plugins.

- [x] Establish connection with multiworld
- [x] Connect with password protected multiworlds
- [ ] Monitor connection; automatically reconnect when client connection is lost
- [x] Receive item, weapon, and armor locations
- [x] Receive starting inventory
- [x] Send location checks

## Misc goals / goals with no dedicated file

- [ ] Ability for player to re-trigger already encountered (or any) door encounter
- [ ] In-game log sharing recent events from tracker
- [x] Skip intro cutscene
- [ ] Option to skip confirmation for finding overworld items

## Fun flavor text additions

- [ ] Custom mirror guilt-trip dialogue that’s archipelago based
- [ ] Custom toxic fred dialogue for picking up the randomized item in cowboy hat's place
- [ ] If Ernest is in your party he chimes in to warn you if an item is a trap