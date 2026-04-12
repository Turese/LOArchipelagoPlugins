# Overview

(WIP) This is the collection of plugins for a Look Outside archipelago randomizer.

Intended to be run with [Zorkats's RPGModder](https://github.com/Zorkats/RPGModder)

## BackInTime.js

Creates an event activated by the calendar in the player's bedroom that undoes events that may block the player from future actions.

### Features: 
- [x] Ability to set current day 1-15
- [ ] Ability to bring Joel back to life when he's been killed by the player (and give back teddy bear if lost)
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
- [ ] Return explicitly recruited party members to their overworld locations (Joel, Ernest, Aster) (for players who have "kill everyone" checks enabled)

## UpdateMissableEvents.js

Updates overworld events so that events missed by the player can be retried.

- [ ] Update trigger for grinning beast chase so it can be retried
- [ ] Replace gun sale from leigh with the overworld drop (cant think of a better place to reinsert it)
- [ ] Make presence of overworld potential recruit encounters separate from their presence in player apartment (Lyle, Audrey, Aster, Leigh, Roaches)
- [ ] Updates apartment 13 to give player drop as soon as they have rat baby item, no sacrifice required
- [ ] Updates tooth family members to spawn in upgraded forms even if they've been killed prior
- [ ] Make audrey recruit unmissable (infinite advice cans, remove disposition check)
- [ ] Make Joel recruit unmissable (remove disposition check)
- [ ] Force player to kill every hydra part individually (killing body won't give all checks)
- [ ] Update Eugene's bookcase so it never becomes blocked by Nestor
- [ ] Update Grasshopper so it never despawns after Leigh's quest ends
- [ ] Update Piranhaman so piranhas always spawn whether or not he is killed
- [ ] Come up with the other cases...

## ClearExplicitDrops.js

Goes through the game's events to remove everything that explicitly grants an item to the player

- [ ] Clear out event for Audrey to find specific items from bosses (bonus - add ability for them to be manually triggerable by the player and recorded in state)
- [ ] Clear out rusted crown logic from rat king event
- [ ] Clear out dark room key award for killing Lyle
- [ ] Clear out rewards granted for helping Jeanne
- [ ] Clear out gifts from Pierre (mail, clown drawing, clown outfit)
- [ ] Clear out prizes from completing Leigh's quest
- [ ] Clear out item upgrade from interacting with typewriter with loose manuscript
- [ ] Clear out item exchange when using the telescope / projector with void disc / photo paper
- [ ] Clear out ability to acquire more photo paper
- [ ] Clear out item exchange when giving lyle / using darkroom on exposed paper
- [ ] Clear out item exchange when using empty tape on recorder
- [ ] Clear out painter's key reward from killing every part of Toxic Fred
- [ ] Clear out all explicit Fred rewards (final Fred rewards and intermediate rewards from the facetaker)
- [ ] Come up with the other cases...

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

- [ ] Mass replacement of overworld item pickups to show icon for new item, not grant item (WIP)
- [x] Ability to grant individual items, weapons, and gear to the player.
- [ ] Ability to grant any skill to the player (WIP) works for game skills, but is missing Leigh's event skill
- [x] Ability to grant each arm individually (using logic from Unarmed plugin)
- [ ] Ability to grant pre-defined resource packs (money + items)
- [ ] Ability to grant any recruit (wip, missing some recruits and bugged for others)

## MainMenuAPOptions.js

New menu option in main menu + pause menu where player inputs AP slot name + server name + password

- [x] New Archipelago menu option in title screen menu + pause menu
- [ ] Add QOL features to text input (prompt text, center text entry)
- [x] Persist player-submitted values across save files / game loads

## NormalizeDifficulty.js

Introduces functionality to make the AP experience the same no matter what difficulty mode the player chooses.

- [ ] Mass-update locations that are hidden on certain difficulty settings so they either always or never appear
- [ ] Mass-update enemies that don't spawn on certain difficulty settings so they either always or never appear
- [ ] Force save everywhere and autosave to be active in all difficulties

## LookOutsideAPClient.js

Intended main entry point to other plugins.

- [ ] Run all functions from other plugins
- [ ] Establish connection with multiworld
- [ ] Send and receive location checks

## Misc goals / goals with no dedicated file

- [ ] Ability for player to re-trigger already encountered (or any) door encounter
- [ ] In-game log sharing recent events from tracker
