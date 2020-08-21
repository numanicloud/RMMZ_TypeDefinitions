// Type definitions for rmmz_scenes.js
declare interface Scene_Base
{
	new(): Scene_Base;
}

declare interface Scene_Boot
{
	new();
	initialize(): void;
	create(): void;
	isReady(): boolean;
	onDatabaseLoaded(): void;
	setEncryptionInfo(): void;
	loadSystemImages(): void;
	loadPlayerData(): void;
	loadGameFonts(): void;
	isPlayerDataLoaded(): boolean;
	start(): void;
	startNormalGame(): void;
	resizeScreen(): void;
	adjustBoxSize(): void;
	adjustWindow(): void;
	updateDocumentTitle(): void;
	checkPlayerLocation(): void;
}

declare interface Scene_Title
{
	new();
	initialize(): void;
	create(): void;
	start(): void;
	update(): void;
	isBusy(): boolean;
	terminate(): void;
	createBackground(): void;
	createForeground(): void;
	drawGameTitle(): void;
	adjustBackground(): void;
	createCommandWindow(): void;
	commandWindowRect(): void;
	commandNewGame(): void;
	commandContinue(): void;
	commandOptions(): void;
	playTitleMusic(): void;
}

declare interface Scene_Message
{
	new(): Scene_Message;
}

declare interface Scene_Map
{
	new();
	initialize(): void;
	create(): void;
	isReady(): /* !this._mapLoaded */ any;
	onMapLoaded(): void;
	onTransfer(): void;
	start(): void;
	onTransferEnd(): void;
	shouldAutosave(): boolean;
	update(): void;
	updateMainMultiply(): void;
	updateMain(): void;
	isPlayerActive(): boolean;
	isFastForward(): boolean;
	stop(): void;
	isBusy(): boolean;
	terminate(): void;
	needsFadeIn(): boolean;
	needsSlowFadeOut(): /* Scene_Map.prototype.+Scene_Map */ any;
	updateWaitCount(): boolean;
	updateDestination(): void;
	updateMenuButton(): void;
	hideMenuButton(): void;
	updateMapNameWindow(): void;
	isMenuEnabled(): boolean;
	isMapTouchOk(): boolean;
	processMapTouch(): void;
	isAnyButtonPressed(): /* !this._menuButton */ any;
	onMapTouch(): void;
	isSceneChangeOk(): boolean;
	updateScene(): void;
	createDisplayObjects(): void;
	createSpriteset(): void;
	createAllWindows(): void;
	createMapNameWindow(): void;
	mapNameWindowRect(): void;
	createButtons(): void;
	createMenuButton(): void;
	updateTransferPlayer(): void;
	updateEncounter(): void;
	updateCallMenu(): void;
	isMenuCalled(): boolean;
	callMenu(): void;
	updateCallDebug(): void;
	isDebugCalled(): boolean;
	fadeInForTransfer(): void;
	fadeOutForTransfer(): void;
	launchBattle(): void;
	stopAudioOnBattleStart(): void;
	startEncounterEffect(): void;
	updateEncounterEffect(): void;
	snapForBattleBackground(): void;
	startFlashForEncounter(duration: number): void;
	encounterEffectSpeed(): number;
	_waitCount: number;
	_encounterEffectDuration: number;
	_mapLoaded: boolean;
	_touchCount: number;
	_menuEnabled: boolean;
	_transfer: boolean;
	_lastMapWasNull: boolean;
	menuCalling: boolean;
	_spriteset: /*no type*/{};
	_mapNameWindow: /*no type*/{};
	_menuButton: /*no type*/{};
}

declare interface Scene_MenuBase
{
	new(): Scene_MenuBase;
}

declare interface Scene_Menu
{
	new();
	initialize(): void;
	helpAreaHeight(): number;
	create(): void;
	start(): void;
	createCommandWindow(): void;
	commandWindowRect(): void;
	createGoldWindow(): void;
	goldWindowRect(): void;
	createStatusWindow(): void;
	statusWindowRect(): void;
	commandItem(): void;
	commandPersonal(): void;
	commandFormation(): void;
	commandOptions(): void;
	commandSave(): void;
	commandGameEnd(): void;
	onPersonalOk(): void;
	onPersonalCancel(): void;
	onFormationOk(): void;
	onFormationCancel(): void;
}

declare interface Scene_ItemBase
{
	new(): Scene_ItemBase;
}

declare interface Scene_Item
{
	new();
	initialize(): void;
	create(): void;
	createCategoryWindow(): void;
	categoryWindowRect(): void;
	createItemWindow(): void;
	itemWindowRect(): void;
	user(): Game_Actor;
	onCategoryOk(): void;
	onItemOk(): void;
	onItemCancel(): void;
	playSeForItem(): void;
	useItem(): void;
}

declare interface Scene_Skill
{
	new();
	initialize(): void;
	create(): void;
	start(): void;
	createSkillTypeWindow(): void;
	skillTypeWindowRect(): void;
	createStatusWindow(): void;
	statusWindowRect(): void;
	createItemWindow(): void;
	itemWindowRect(): void;
	needsPageButtons(): boolean;
	arePageButtonsEnabled(): boolean;
	refreshActor(): void;
	user(): void;
	commandSkill(): void;
	onItemOk(): void;
	onItemCancel(): void;
	playSeForItem(): void;
	useItem(): void;
	onActorChange(): void;
}

declare interface Scene_Equip
{
	new();
	initialize(): void;
	create(): void;
	createStatusWindow(): void;
	statusWindowRect(): void;
	createCommandWindow(): void;
	commandWindowRect(): void;
	createSlotWindow(): void;
	slotWindowRect(): void;
	createItemWindow(): void;
	itemWindowRect(): void;
	statusWidth(): number;
	needsPageButtons(): boolean;
	arePageButtonsEnabled(): boolean;
	refreshActor(): void;
	commandEquip(): void;
	commandOptimize(): void;
	commandClear(): void;
	onSlotOk(): void;
	onSlotCancel(): void;
	onItemOk(): void;
	executeEquipChange(): void;
	onItemCancel(): void;
	onActorChange(): void;
	hideItemWindow(): void;
}

declare interface Scene_Status
{
	new();
	initialize(): void;
	create(): void;
	helpAreaHeight(): number;
	createProfileWindow(): void;
	profileWindowRect(): void;
	createStatusWindow(): void;
	statusWindowRect(): void;
	createStatusParamsWindow(): void;
	statusParamsWindowRect(): void;
	createStatusEquipWindow(): void;
	statusEquipWindowRect(): void;
	statusParamsWidth(): number;
	statusParamsHeight(): void;
	profileHeight(): void;
	start(): void;
	needsPageButtons(): boolean;
	refreshActor(): void;
	onActorChange(): void;
}

declare interface Scene_Options
{
	new();
	initialize(): void;
	create(): void;
	terminate(): void;
	createOptionsWindow(): void;
	optionsWindowRect(): void;
	maxCommands(): number;
	maxVisibleCommands(): number;
}

declare interface Scene_File
{
	new(): Scene_File;
}

declare interface Scene_Save
{
	new();
	initialize(): void;
	mode(): string;
	helpWindowText(): void;
	firstSavefileId(): number;
	onSavefileOk(): void;
	executeSave(savefileId: any): void;
	onSaveSuccess(): void;
	onSaveFailure(): void;
}

declare interface Scene_Load
{
	new();
	initialize(): void;
	terminate(): void;
	mode(): string;
	helpWindowText(): void;
	firstSavefileId(): number;
	onSavefileOk(): void;
	executeLoad(savefileId: any): void;
	onLoadSuccess(): void;
	onLoadFailure(): void;
	reloadMapIfUpdated(): void;
}

declare interface Scene_GameEnd
{
	new();
	initialize(): void;
	create(): void;
	stop(): void;
	createBackground(): void;
	createCommandWindow(): void;
	commandWindowRect(): void;
	commandToTitle(): void;
}

declare interface Scene_Shop
{
	new();
	initialize(): void;
	prepare(goods: any, purchaseOnly: any): void;
	create(): void;
	createGoldWindow(): void;
	goldWindowRect(): void;
	createCommandWindow(): void;
	commandWindowRect(): void;
	createDummyWindow(): void;
	dummyWindowRect(): void;
	createNumberWindow(): void;
	numberWindowRect(): void;
	createStatusWindow(): void;
	statusWindowRect(): void;
	createBuyWindow(): void;
	buyWindowRect(): void;
	createCategoryWindow(): void;
	categoryWindowRect(): void;
	createSellWindow(): void;
	sellWindowRect(): void;
	statusWidth(): number;
	activateBuyWindow(): void;
	activateSellWindow(): void;
	commandBuy(): void;
	commandSell(): void;
	onBuyOk(): void;
	onBuyCancel(): void;
	onCategoryOk(): void;
	onCategoryCancel(): void;
	onSellOk(): void;
	onSellCancel(): void;
	onNumberOk(): void;
	onNumberCancel(): void;
	doBuy(number: number): void;
	doSell(number: number): void;
	endNumberInput(): void;
	maxBuy(): number;
	maxSell(): number;
	money(): number;
	currencyUnit(): void;
	buyingPrice(): void;
	sellingPrice(): number;
}

declare interface Scene_Name
{
	new();
	initialize(): void;
	prepare(actorId: any, maxLength: any): void;
	create(): void;
	start(): void;
	createEditWindow(): void;
	editWindowRect(): void;
	createInputWindow(): void;
	inputWindowRect(): void;
	onInputOk(): void;
}

declare interface Scene_Debug
{
	new();
	initialize(): void;
	create(): void;
	needsCancelButton(): boolean;
	createRangeWindow(): void;
	rangeWindowRect(): void;
	createEditWindow(): void;
	editWindowRect(): void;
	createDebugHelpWindow(): void;
	debugHelpWindowRect(): void;
	onRangeOk(): void;
	onEditCancel(): void;
	refreshHelpWindow(): void;
	helpText(): string;
}

declare interface Scene_Battle
{
	new();
	initialize(): void;
	create(): void;
	start(): void;
	update(): void;
	updateVisibility(): void;
	updateBattleProcess(): void;
	isTimeActive(): boolean;
	isAnyInputWindowActive(): /* !this._partyCommandWindow.active */ any;
	changeInputWindow(): void;
	stop(): void;
	terminate(): void;
	shouldAutosave(): /* Scene_Battle.prototype.+Scene_Battle */ any;
	needsSlowFadeOut(): any;
	updateLogWindowVisibility(): void;
	updateStatusWindowVisibility(): void;
	shouldOpenStatusWindow(): boolean;
	updateStatusWindowPosition(): void;
	statusWindowX(): number;
	updateInputWindowVisibility(): void;
	needsInputWindowChange(): boolean;
	updateCancelButton(): void;
	createDisplayObjects(): void;
	createSpriteset(): void;
	createAllWindows(): void;
	createLogWindow(): void;
	logWindowRect(): void;
	createStatusWindow(): void;
	statusWindowRect(): void;
	createPartyCommandWindow(): void;
	partyCommandWindowRect(): void;
	createActorCommandWindow(): void;
	actorCommandWindowRect(): void;
	createHelpWindow(): void;
	helpWindowRect(): void;
	createSkillWindow(): void;
	skillWindowRect(): void;
	createItemWindow(): void;
	itemWindowRect(): void;
	createActorWindow(): void;
	actorWindowRect(): void;
	createEnemyWindow(): void;
	enemyWindowRect(): void;
	helpAreaTop(): number;
	helpAreaBottom(): void;
	helpAreaHeight(): void;
	buttonAreaTop(): void;
	windowAreaHeight(): void;
	createButtons(): void;
	createCancelButton(): void;
	closeCommandWindows(): void;
	hideSubInputWindows(): void;
	startPartyCommandSelection(): void;
	commandFight(): void;
	commandEscape(): void;
	startActorCommandSelection(): void;
	commandAttack(): void;
	commandSkill(): void;
	commandGuard(): void;
	commandItem(): void;
	commandCancel(): void;
	selectNextCommand(): void;
	selectPreviousCommand(): void;
	startActorSelection(): void;
	onActorOk(): void;
	onActorCancel(): void;
	startEnemySelection(): void;
	onEnemyOk(): void;
	onEnemyCancel(): void;
	onSkillOk(): void;
	onSkillCancel(): void;
	onItemOk(): void;
	onItemCancel(): void;
	onSelectAction(): void;
	endCommandSelection(): void;
	_statusWindow: /*no type*/{};
	_partyCommandWindow: /*no type*/{};
	_actorCommandWindow: /*no type*/{};
	_helpWindow: /*no type*/{};
	_skillWindow: /*no type*/{};
	_itemWindow: /*no type*/{};
	_actorWindow: /*no type*/{};
	_enemyWindow: /*no type*/{};
}

declare interface Scene_Gameover
{
	new();
	initialize(): void;
	create(): void;
	start(): void;
	update(): void;
	stop(): void;
	terminate(): void;
	playGameoverMusic(): void;
	createBackground(): void;
	adjustBackground(): void;
	isTriggered(): boolean;
	gotoTitle(): void;
}

declare var SceneManager: {
	_previousClass: () => void;
}