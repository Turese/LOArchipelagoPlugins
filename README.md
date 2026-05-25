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
- [x] Ability to bring Joel back to life when he's been killed by the player
- [x] Ability to bring Mutt back to life when he's been killed by the player
- [x] Ability to bring Papineau back to life when he's been killed by the player
- [x] Ability to bring Eugene back to life when he's been killed by the player
- [x] Ability to take back telling Jasper to send the astronomers to the roof for endgame
- [x] Ability to take back sending individual astronomers to the roof for endgame
- [x] Ability to bring Sadipede back to life if killed by the player
- [x] Ability to reset the player's houseplant's health if it was neglected
- [x] Ability to reset progress on Hellen's quest if player missed a day
- [x] Ability to bring the astronomers back to life when any one of them have been killed
- [x] Ability to bring Ernest back to life if he has been killed by the player
- [x] Ability to return Ernest's quest back to active state if player missed the chance to enter rat hell
- [x] Ability to artifically raise the masked shadow's disposition if the player completed its quest without meeting the minimum to recruit it to the apartment
- [x] Ability to unblock Charan's basement room if the player reached the earthquake event without opening the second entrance
- [x] Ability to bring Lyle back to life and turn him non-hostile if player previously attacked + killed him
- [x] Ability to return Sophie to the apartment if the player kicked her out / gave her to the imposter lady instead of Harriet
- [x] Ability to bring Jeanne back to life if killed by player
- [x] Ability to bring the true Fred back to life if killed by the player
- [x] Ability to bring the friendly Rats back to life if killed by the player + player now has Rusted Crown
- [x] Ability to bring Steve back to life if killed by the player
- [ ] Ability to bring Tickle back to life if killed by the player

## EventLogicUpdates.js

### EventLogicUpdates.applyIntroClears

Changes applied on new game start.

- [x] updateStartingDrops - clears out 3 starting video games from intro inventory, sets starting switches for randomizer 
- [x] updateStartingCutscene - speeds up intro cutscene/skips Sybil's intro dialogue
- [x] updateStartingArms - removes player's arms at the start of the game so they can be granted according to item drops/YAML settings

### EventLogicUpdates.applyEventUpdates

Goes through the game's in-map events to remove everything that explicitly grants an item to the player.

- [x] fixWoundedManDoor - removes door logic that locks player out of the intro fight when they have no equipment on explorer and survivor mode
- [x] fixElevatorButtons - allows player to travel to floor 4 without needing to play the elevator game first
- [x] leighRematch - if the player didn't defeat the grinning beast after picking up the apt. 21 key location, allows them to retrigger the chase sequence by standing where the item once was
- [x] clearLeighQuest - remove explicit ring or skill drop from reading Martin's note
- [x] permaGrasshopper - allows grasshopper to still be fought after finishing Leigh's quest
- [x] leighWillWait - if player doesn't recruit Leigh immediately after defeating the grinning beast, she will still wait in her apartment
- [x] forceRecruitsToStay - make recruit presence in the overworld independent of their presence in the player's apartment/party
    - [x] Leigh will leave after player finishes the recruitment dialogue
    - [ ] Lyle will leave after player finishes the trade sequence
    - [x] Aster will only leave after player finishes the recruitment dialogue AND has Aster in their apartment, so they're never blocked from offerings
    - [x] Audrey will only leave after player player finishes the recruitment quest dialogue AND has Audrey in their apartment, so they're never blocked from vending machine purchases
    - [ ] Joel will only leave after player finishes the recruitment dialogue
    - [ ] Papineau will only leave after player finishes the recruitment dialogue
- [x] fixMaskShadeSpawns - 
    - [x] Stumbling shade on f4 will spawn immediately instead of only when player has Old Tape in their inventory
    - [x] Writhing Shade and Moaning Shade (Landlord Apt and Basement Pit) will track their own death state with a self switch instead of self-deleting, so it's easier to track them as locations
- [x] fixToothFamilySpawnTriggers - Allows the tooth family's further mutated forms (day 5 and day 9) to appear even if they've been slain in an earlier form
    - [ ] Clint (bugged, day 5 appears at the same time as day 2-4 form)
    - [x] Joel
    - [x] Madison
    - [x] Ben
- [ ] fixWigglyFredRecruitMechanics - allows Wiggly Fred to appear in the Fred apartment even if he is already in the player's fridge
- [ ] fixPiranhaLogic - Force Piranha guy to always explode into Piranhas even if player killed him
- [ ] unblockEugeneBookcase - Force Eugene's bookcase to never become blocked by Nestor
- [x] clearScreamitorumEvent - Remove explicit game item drop from player's bookcase
- [x] clearWoundedManKnifeEvent - Remove explicit knife item drop from wounded neighbor battle
- [x] clearTelescopeEvent - Remove explicit item exchange (void and negative disc) from the telescope in Edwin's apartment
- [ ] clearSecurityEvent - Remove explicit item exchange (vhs tapes and cinnamon) from the security room recording event; don't allow player to record anything but the correct footage
- [ ] clearProjectorEvent - Remove explicit item exchange (photo paper -> exposed paper) from the projector in Vincent's apartment
- [x] clearF3HallwayPlanterEvent - Remove item drop from hallway planter when Lyle is in player's apartment; allows player to check for it multiple times
- [x] clearF3HallwayVendingMachineEvent - remove item drops from F3 hallway vending machine; places unique locations in all items
- [x] clearCoffeeMachineEvent - removes coffee drop from ground floor coffee machine and replaces it with location check; only allows it to be used once
- [x] clearCandyMachine - removes candy drop from ground floor candy machine and replaces it with location check; only allows it to be used once
- [x] clearElevatorFreakEvent - unlink the elevator freak's death with elevator access. 
    - [ ] Unlink the elevator freak's death with the blackout event (possibly bugged?)
- [x] clearRatKingCrown - clear rusted crown drop from rat king's defeated dialogue
- [ ] clearBasementKeyDrops - clear key drops from the hard mode versions of the enemies in basement floor apartment's B1 and B2
- [x] clearglitchElixirDrops - clear glitch elixir x99 gift from NPC in glitch world
- [x] clearAmbroseDrops - clear ambrose item grants from Ambrose NPC in glitch world
- [x] clearTypewritherDrop - clear loose manuscript drop from typewrither's defeated dialogue
- [x] clearManuscriptCompletion - clear manuscript completion switch flip from interacting with the typewriter in the writer's apartment with loose manuscript
- [x] clearCribDrop - prevent rat baby thing from following/joining the player when interacting with the crib in the rat infested apartment
- [x] clearShutterbugDrop - clear dark room key drop from lyle's defeated dialogue
- [x] clearJeanneLaundry - clear explicit laundry item drop from interacting with the full washer in the laundromat
- [x] clearLandlordCache - clear explicit coin item drop from the cache in the landlord's dining room
- [ ] clearLandlordDigSpot - clear explicit item drop from the hole in the landlord warzone
- [x] fixBasementKeyConditions - fix the basement key location in the landlord's apartment; it no longer checks if the player has the basement key item to decide if it's been picked up
- [x] clearErnestCheeseStash - remove explicit cheese drop from interacting with the hidden chest in Ernest's hideout
- [x] clearRoachQuestPrize - remove item drops from solving the roach schism
- [x] clearSadipedePrize - remove Marc-Andre item drop from the sadipede post-battle dialogue
- [x] fixDarkRoomItem - allow apt 33 key location to stay on floor of darkroom even when lyle has been recruited
- [x] clearRaftaLetter - remove explicit letter item grant after giving pen and paper to rafta
- [x] clearOozeMachine - replace all explicit item sales from ooze machine in basement to replace them with locations; allow player to interact with it at any danger level
- [x] clearDeadFredDrops - remove item drops from killing the facetaker; remove key drops from killing toxic fred or any of his offshoots
- [x] fixRoxieRoomItemDoubleEntry - fix logic that gives separate item entries in regular/hardmode to the items in the basement sewer room with roxie the dog so they can be randomized
- [x] clearGrateLever - unjoin the sewer grates going down from the player pulling the level in the boiler beast room
- [ ] clearAudreyBossDrops - remove explicit item drops from having audrey in the party when defeating certain bosses; allows locations to be triggered when returning to the dead bodies later with Audrey
- [ ] returnTickle - allow player to place tickle back on the boiler tendril to continue interfacing with his shop
- [ ] fixLaughingMoldSpawn - allow player to interact with laughing mold even after defeating the spore princess
- [ ] clearBlackoutIrisKey - clear iris key drop from the hole in the parking garage
- [ ] clearRatFreakGift - clear out sword given by the rat freak when player wears the rusty crown
- [ ] clearBurritoRatGift - clear out burrito given by the rat in the rat den when player wears the rusty crown
- [ ] clearComatusYoga - clear yoga skill grant from interacting with comatus after defeating him
- [ ] clearHellenQuestPrizes - clear out explicit item gifts from Hellen's quest

### EventLogicUpdates.clearAllEnemiesDrops

Removes every single combat item drop from the game

### EventLogicUpdates.clearTroopsDrops

Updates events that happen during battle scenes.

- [x] clearPierreGifts - clear gifts granted during clown therapy with pierre - clown drawing and clown armor
- [x] clearMaskedShadowEncounters - updates masked shadow encounters
    - [x] removes switch that makes the shadow stop spawning after the player attacks it
    - [x] removes explicit item drop from the tongue gift event
    - [x] fixes the chosen item during the rose gift event for easier randomization
    - [x] Removes switch set that places masked shadow in the player's apartment after they don't embrace it in their bedroom
- [x] clearLeighRecruitmentEvent - short circuits the recruitment event to set a switch instead of attempting to add Leigh to the party; skips the one-time only gun sale from hardmode dialogue
- [ ] clearJoelRecruitmentEvent - short circuits the recruitment event for Joel to set a switch instead of attempt to add him to the party. clears out door knob gift from battle
- [x] clearRoachesRecruitmentEvent - clears out switch set that recruits roaches when player sees them in their bathroom
- [x] clearAsterRecruitmentEvent - short circuits the recruitment event for Aster to set a switch instead of attempt to add him to the party
- [ ] clearPapineauRecruitmentEvent - short circuits the recruitment event for Papineau to set a switch instead of attempt to add him to the party
- [x] clearJeannePrizeEvent - clear out elixir prize for killing all hydra heads and 50 dollar reward for returning laundry
- [x] fixNestorLetterLogic - don't allow player to give letter to Nestor before finishing Rafta's letter writing quest
- [x] clearSapperDrop - clear gift for interacting with the sapper in the landlord warzone for the first time
- [x] clearMinesweeperDrop - clear gift for interacting with the minesweeper in the landlord warzone for the first time, clear out tame landmine prize for 12 mines turned in
- [x] clearJasperGifts - clear out items granted by jasper
    - [x] clear out robes and roof key gift for submitting enough offerings
    - [x] clear out explicit item exchange (broken telescope - telescope)
    - [x] clear out explicit stained key item gift from the promise advancement event
- [x] clearFakeFredGifts - clear out gifts granted by the facetaker for progress in the amount of Freds killed
- [x] updateToxicFredEncounter - adds some humorous dialogue to the toxic fred encounter in the event the player got the fake hat location before talking to him
- [x] clearFinalFredGifts - clears out explicit gift drops from all freds when they're the final one
- [ ] clearSpiderHuskGift - updates Spider Husk logic
    - [ ] make it impossible for player to offend Spider Husk and exit the dialogue early
    - [ ] clear out beating heart given by the Spider Husk in Mutt's shop
- [ ] clearTickleShop - update tickle's shop so that locations are granted instead of items
    - [ ] clear out Tickle's gifts (blood clot bombs and drawing)
- [ ] clearEmmanuelShop
- [ ] clearKevinShop
- [ ] clearLyleTrades
- [ ] clearBenPlayPrizes - clear out gifts from being a good to great playmate with Ben

### EventLogicUpdates.clearCommonEventDrops

fixes event items granted from common events

- [x] clearGameSkills - clears game skill drops (or, if player has removed them from the pool via YAML option, grants them after only 1 play of each game)
- [ ] clearNewDayEvent - clear out rat baby growth spurt when it reaches lvl 12 and a day has passed
- [ ] clearSleepEvent - clear out Wiggly Fred moving into player's fridge if he is the last Fred standing
- [x] clearReturnHomePhillippeRatbaby - removes recruitment switch flips from bringing home Phillippe's remains / Rat Baby Thing; sets location checks instead
- [x] clearAudreyShop - updates Audrey's vending machine stock to grant randomized items
- [x] clearAudreyGiftsRecruit - update's Audrey's recruitment event; clears out energy drink gift, and short circuits recruit event to set a switch instead of adding her to party
- [x] clearCarPrizeEvent - clears out items granted from opening car trunk after using electronic key
- [x] updateAsterOfferings - fixes how the "correctness" of photograph offerings is calculated, allowing player to have an incorrect and correct photograph at the same time as distinct inventory items

# MassEventUpdates.js

For event updates that are not unique; mass-updates of different item drop types

- [x] Update item events to not grant items and display randomized item name
- [x] Update trash can events to not grant items and display randomized item name
- [x] Update roach events to not grant items and display randomized item name
- [x] Update drawer loot events to not grant items and display randomized item name
- [x] Update landlord couch loot events to not grant items and display randomized item name
- [x] Update safe loot events to not grant items and display randomized item name
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
- [x] Add new mirror portraits for no-arm state (WIP)

## InsertAPItems.js

Functionality for inserting any item into the game at any time, necessary for AP to grant items.

- [x] Ability to grant individual items, weapons, and gear to the player.
- [x] Ability to grant any skill to the player
- [x] Ability to grant each arm individually (using logic from Unarmed plugin)
- [x] Ability to grant pre-defined resource packs (money + items)
- [x] Ability to grant any recruit
- [x] Ability to randomize rat baby growth spurt as "progressive rat baby"
- [x] Ability to grant custom traps
- [x] Renames some items to have more descriptive accurate names (differentiates between good and bad offerings, fixes Rabu Hammer's bugged name)

also included for lack of a better file

- [x] Gives Joel the ability to unequip and equip the various Fuzzy items in his weapon slot

## MainMenuAPOptions.js

New menu option in main menu + pause menu where player inputs AP slot name + server name + password

- [x] New Archipelago menu option in title screen menu + pause menu
- [ ] Add QOL features to text input (prompt text, center text entry)
- [x] Persist player-submitted values across save files / game loads
- [x] Add connection status monitoring

## NormalizeDifficulty.js

Introduces functionality to make the AP experience the same no matter what difficulty mode the player chooses.

- [ ] Mass-update items on the ground that are hidden on certain difficulty settings so they either always or never appear (WIP - currently forces easy mode items)
- [ ] Mass-update enemies that don't spawn on certain difficulty settings so they either always or never appear
- [x] Force save everywhere and autosave to be active in all difficulties

## LookOutsideAPClient.js

Intended main entry point to other plugins.

- [x] Establish connection with multiworld
- [x] Connect with password protected multiworlds
- [x] Monitor connection; automatically reconnect when client connection is lost
- [x] Receive item, weapon, and armor locations
- [x] Receive starting inventory
- [x] Send location checks
- [x] Send and receive death links
- [x] Send goal completion
    - [x] Store information on goal completion in case player is offline and send goal completion again on reconnecting to server
- [x] Store which endings have been reached in save file

## ConnectionStatus.js

- [x] display status and count down to automatic reconnection

## Misc goals / goals with no dedicated file

- [ ] Ability for player to re-trigger already encountered (or any) door encounter
- [ ] In-game log sharing recent events from tracker
- [x] Skip intro cutscene
- [ ] Option to skip confirmation for finding overworld items

## Fun flavor text additions

- [ ] Custom mirror guilt-trip dialogue that’s archipelago based
- [x] Custom toxic fred dialogue for picking up the randomized item in cowboy hat's place
- [ ] If Ernest is in your party he chimes in to warn you if an item is a trap
