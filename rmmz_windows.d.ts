// Type definitions for rmmz_windows.js
declare namespace Window_Base.prototype{
	// Window_Base.prototype.textSizeEx.!ret
	interface TextSizeExRet {
		width : number;
		height : number;
	}
}
declare namespace Window_Base.prototype{
	// Window_Base.prototype.createTextState.!ret
	interface CreateTextStateRet {
		text : string;
		index : number;
		width : number;
		rtl : boolean;
		buffer : string;
		drawing : boolean;
		outputWidth : number;
		outputHeight : number;
	}
}
declare namespace Window_Selectable.prototype{
	// Window_Selectable.prototype.itemRect.!ret
	interface ItemRectRet {
		x : number;
	}
}
declare namespace Window_Selectable.prototype{
	// Window_Selectable.prototype.itemRectWithPadding.!ret
	interface ItemRectWithPaddingRet {
		x : number;
		width : number;
		y : number;
		height : number;
	}
}
declare namespace Window_Selectable.prototype{
	// Window_Selectable.prototype.itemLineRect.!ret
	interface ItemLineRectRet {
		y : number;
		height : number;
		x : number;
		width : number;
	}
}
declare namespace Window_Command.prototype{
	// Window_Command.prototype.currentData.!ret
	interface CurrentDataRet {
		symbol : string;
		enabled : boolean;
	}
}
declare namespace Window_ShopBuy.prototype{
	// Window_ShopBuy.prototype.goodsToItem.!0
	type GoodsToItem0 = Array<Array</* string],[string */ any>>;
}
declare namespace Window_ShopNumber.prototype{
	// Window_ShopNumber.prototype.itemRect.!ret
	interface ItemRectRet {
		x : number;
		y : number;
		width : number;
		height : number;
	}
}
declare namespace Window_ShopStatus.prototype{
	// Window_ShopStatus.prototype.drawActorParamChange.!3
	interface DrawActorParamChange3 {
		name : string;
		params : /* Window_BattleLog._methods.<i>.params */ any;
	}
}
declare namespace Window_NameEdit.prototype{
	// Window_NameEdit.prototype.itemRect.!ret
	interface ItemRectRet {
		y : number;
		width : number;
		height : number;
	}
}
declare namespace Window_Message.prototype{
	// Window_Message.prototype.processControlCharacter.!0
	interface ProcessControlCharacter0 {
	}
}
declare namespace Window_BattleStatus.prototype{
	// Window_BattleStatus.prototype.faceRect.!ret
	interface FaceRectRet {
		height : number;
	}
}
declare namespace Window_BattleLog{
	// Window_BattleLog._methods.<i>
	interface _methodsI {
		name : string;
		params : Array<Game_Actor>;
	}
}
declare interface Window_Base {
	new ();
	initialize(rect : /* Window_Base.prototype.+Window_NumberInput */ any): void;
	destroy(options : any): void;
	checkRectObject(rect : any): void;
	lineHeight(): number;
	itemWidth(): /* !this.innerWidth */ any;
	itemHeight(): number;
	itemPadding(): number;
	baseTextRect(): void;
	loadWindowskin(): void;
	updatePadding(): void;
	updateBackOpacity(): void;
	fittingHeight(numLines : number): number;
	updateTone(): void;
	createContents(): void;
	destroyContents(): void;
	contentsWidth(): /* !this.innerWidth */ any;
	contentsHeight(): /* !this.innerHeight */ any;
	resetFontSettings(): void;
	resetTextColor(): void;
	update(): void;
	updateOpen(): void;
	updateClose(): void;
	open(): void;
	close(): void;
	isOpening(): /* !this._opening */ any;
	isClosing(): /* !this._closing */ any;
	show(): void;
	hide(): void;
	activate(): void;
	deactivate(): void;
	systemColor(): string;
	translucentOpacity(): number;
	changeTextColor(color : string): void;
	changeOutlineColor(color : string): void;
	changePaintOpacity(enabled : boolean): void;
	drawRect(x : number, y : number, width : number, height : number): void;
	drawText(text : number | string, x : number, y : number, maxWidth : number, align : string): void;
	textWidth(text : string): number;
	drawTextEx(text : string, x : number, y : number, width : number): number;
	textSizeEx(text : string): Window_Base.prototype.TextSizeExRet;
	createTextState(text : string, x : number, y : number, width : number): Window_Base.prototype.CreateTextStateRet;
	processAllText(textState : /* Window_Base.prototype.createTextState.!ret */ any): void;
	flushTextState(textState : /* Window_Base.prototype.createTextState.!ret */ any | {}): void;
	createTextBuffer(rtl : boolean): string;
	convertEscapeCharacters(text : string): string;
	actorName(n : number): string;
	partyMemberName(n : number): string;
	processCharacter(textState : /* Window_Base.prototype.createTextState.!ret */ any): void;
	processControlCharacter(textState : /* Window_Base.prototype.createTextState.!ret */ any, c : string): void;
	processNewLine(textState : /* Window_Base.prototype.createTextState.!ret */ any): void;
	obtainEscapeCode(textState : /* Window_Base.prototype.createTextState.!ret */ any): string;
	obtainEscapeParam(textState : {} | /* Window_Base.prototype.createTextState.!ret */ any): number;	
	obtainEscapeParam();
	processEscapeCharacter(code : string, textState : /* Window_Base.prototype.createTextState.!ret */ any): void;
	processColorChange(colorIndex : number | string): void;
	processDrawIcon(iconIndex : number | string, textState : /* Window_Base.prototype.createTextState.!ret */ any): void;
	makeFontBigger(): void;
	makeFontSmaller(): void;
	calcTextHeight(textState : /* Window_Base.prototype.createTextState.!ret */ any | {}): number;	
	calcTextHeight();
	maxFontSizeInLine(line : string): number;	
	maxFontSizeInLine();
	drawIcon(iconIndex : number | string, x : string | number, y : number | string): void;
	drawFace(faceName : string, faceIndex : number, x : number, y : number, width : number, height : number): void;
	drawCharacter(characterName : string, characterIndex : number, x : number, y : number): void;
	drawItemName(item : any, x : number, y : number, width : number): void;
	drawCurrencyValue(value : number, unit : any, x : number, y : number, width : number): void;
	setBackgroundType(type : number): void;
	showBackgroundDimmer(): void;
	createDimmerSprite(): void;
	hideBackgroundDimmer(): void;
	updateBackgroundDimmer(): void;
	refreshDimmerBitmap(): void;
	playCursorSound(): void;
	playOkSound(): void;
	playBuzzerSound(): void;
}
declare interface Window_Scrollable extends Window_Base {
	new ();
	initialize(rect : any): void;
	clearScrollStatus(): void;
	scrollX(): /* !this._scrollX */ any;
	scrollY(): /* !this._scrollY */ any;
	scrollBaseX(): /* !this._scrollBaseX */ any;
	scrollBaseY(): /* !this._scrollBaseY */ any;
	scrollTo(x : number, y : number): void;
	scrollBy(x : number, y : number): void;
	smoothScrollTo(x : number, y : number): void;
	smoothScrollBy(x : number, y : number): void;
	setScrollAccel(x : number, y : number): void;
	overallWidth(): /* !this.innerWidth */ any;
	overallHeight(): /* !this.innerHeight */ any;
	maxScrollX(): number;
	maxScrollY(): number;
	scrollBlockWidth(): number;
	scrollBlockHeight(): number;
	smoothScrollDown(n : number): void;
	smoothScrollUp(n : number): void;
	update(): void;
	processWheelScroll(): void;
	processTouchScroll(): void;
	isWheelScrollEnabled(): boolean;
	isTouchScrollEnabled(): boolean;
	isScrollEnabled(): boolean;
	isTouchedInsideFrame(): void;
	onTouchScrollStart(): void;
	onTouchScroll(): void;
	onTouchScrollEnd(): void;
	updateSmoothScroll(): void;
	updateScrollAccel(): void;
	updateArrows(): void;
	updateOrigin(): void;
	updateScrollBase(baseX : number, baseY : number): void;
	paint(): void;
}
declare interface Window_Selectable extends Window_Scrollable {
	new ();
	initialize(rect : any): void;
	index(): /* !this._index */ any;
	cursorFixed(): /* !this._cursorFixed */ any;
	setCursorFixed(cursorFixed : boolean): void;
	cursorAll(): /* !this._cursorAll */ any;
	setCursorAll(cursorAll : boolean): void;
	maxCols(): number;
	maxItems(): number;
	colSpacing(): number;
	rowSpacing(): number;
	itemWidth(): number;
	itemHeight(): number;
	contentsHeight(): void;
	maxRows(): number;
	overallHeight(): number;
	activate(): void;
	deactivate(): void;
	select(index : number): void;
	forceSelect(index : number): void;
	smoothSelect(index : number): void;
	deselect(): void;
	reselect(): void;
	row(): number;
	topRow(): number;
	maxTopRow(): number;
	setTopRow(row : number): void;
	maxPageRows(): number;
	maxPageItems(): number;
	maxVisibleItems(): number;
	isHorizontal(): boolean;
	topIndex(): number;
	itemRect(index : number): Window_Selectable.prototype.ItemRectRet;
	itemRectWithPadding(index : number): Window_Selectable.prototype.ItemRectWithPaddingRet;
	itemLineRect(index : number): Window_Selectable.prototype.ItemLineRectRet;
	setHelpWindow(helpWindow : Window_Help): void;
	showHelpWindow(): void;
	hideHelpWindow(): void;
	setHandler(symbol : string, method : () => void): void;
	isHandled(symbol : string): boolean;
	callHandler(symbol : string): void;
	isOpenAndActive(): /* !this.visible */ any;
	isCursorMovable(): boolean;
	cursorDown(wrap : boolean): void;
	cursorUp(wrap : boolean): void;
	cursorRight(wrap : boolean): void;
	cursorLeft(wrap : boolean): void;
	cursorPagedown(): void;
	cursorPageup(): void;
	isScrollEnabled(): /* !this.active */ any;
	update(): void;
	processCursorMove(): void;
	processHandling(): void;
	processTouch(): void;
	isHoverEnabled(): boolean;
	onTouchSelect(trigger : boolean): void;
	onTouchOk(): void;
	onTouchCancel(): void;
	hitIndex(): number;
	hitTest(x : any, y : any): number;
	isTouchOkEnabled(): /* !this._cursorFixed */ any;
	isOkEnabled(): boolean;
	isCancelEnabled(): boolean;
	isOkTriggered(): boolean;
	isCancelTriggered(): boolean;
	processOk(): void;
	callOkHandler(): void;
	processCancel(): void;
	callCancelHandler(): void;
	processPageup(): void;
	processPagedown(): void;
	updateInputData(): void;
	ensureCursorVisible(smooth : boolean): void;
	callUpdateHelp(): void;
	updateHelp(): void;
	setHelpWindowItem(item : any): void;
	isCurrentItemEnabled(): boolean;
	drawAllItems(): void;
	drawItem(): void;
	clearItem(index : number): void;
	drawItemBackground(index : number): void;
	drawBackgroundRect(rect : any): void;
	redrawItem(index : number): void;
	redrawCurrentItem(): void;
	refresh(): void;
	paint(): void;
	refreshCursor(): void;
	refreshCursorForAll(): void;
}
declare interface Window_Command extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	maxItems(): /* !this._list.length */ any;
	clearCommandList(): void;
	makeCommandList(): void;
	addCommand(name : any, symbol : string, enabled : boolean, ext : any): void;
	commandName(index : number): void;
	commandSymbol(index : number): string;
	isCommandEnabled(index : number): boolean;
	currentData(): Window_Command.prototype.CurrentDataRet;
	isCurrentItemEnabled(): boolean;
	currentSymbol(): string;
	currentExt(): void;
	findSymbol(symbol : string): number;
	selectSymbol(symbol : string): void;
	findExt(ext : any): number;
	selectExt(ext : any): void;
	drawItem(index : number): void;
	itemTextAlign(): string;
	isOkEnabled(): boolean;
	callOkHandler(): void;
	refresh(): void;
}
declare interface Window_HorzCommand extends Window_Command {
	new ();
	initialize(rect : any): void;
	maxCols(): number;
	itemTextAlign(): string;
}
declare interface Window_Help extends Window_Base {
	new ();
	initialize(rect : any): void;
	setText(text : string): void;
	clear(): void;
	setItem(item : any): void;
	refresh(): void;
	_opening : boolean;
	_closing : boolean;
	padding : number;
	backOpacity : number;
	visible : boolean;
	_text : string;
}
declare interface Window_Gold extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	colSpacing(): number;
	refresh(): void;
	value(): number;
	currencyUnit(): void;
	open(): void;
}
declare interface Window_StatusBase extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	loadFaceImages(): void;
	refresh(): void;
	hideAdditionalSprites(): void;
	placeActorName(actor : Game_Actor, x : number, y : number): void;
	placeStateIcon(actor : Game_Actor, x : number, y : number): void;
	placeGauge(actor : Game_Actor, type : string, x : number, y : number): void;
	createInnerSprite(key : string, spriteClass : () => void): /* !this._additionalSprites.<i> */ any;
	placeTimeGauge(actor : Game_Actor, x : number, y : number): void;
	placeBasicGauges(actor : Game_Actor, x : number, y : number): void;
	gaugeLineHeight(): number;
	drawActorCharacter(actor : any, x : any, y : any): void;
	drawActorFace(actor : Game_Actor, x : number, y : number, width : number, height : number): void;
	drawActorName(actor : Game_Actor, x : number, y : number, width : number): void;
	drawActorClass(actor : Game_Actor, x : number, y : number, width : number): void;
	drawActorNickname(actor : any, x : number, y : number, width : number): void;
	drawActorLevel(actor : Game_Actor, x : number, y : number): void;
	drawActorIcons(actor : Game_Actor, x : number, y : number, width : number): void;
	drawActorSimpleStatus(actor : Game_Actor, x : number, y : number): void;
	actorSlotName(actor : any, index : any): void;
}
declare interface Window_MenuCommand extends Window_Command {
	new ();
	initialize(rect : any): void;
	makeCommandList(): void;
	addMainCommands(): void;
	addFormationCommand(): void;
	addOriginalCommands(): void;
	addOptionsCommand(): void;
	addSaveCommand(): void;
	addGameEndCommand(): void;
	needsCommand(name : string): boolean;
	areMainCommandsEnabled(): boolean;
	isFormationEnabled(): boolean;
	isOptionsEnabled(): boolean;
	isSaveEnabled(): boolean;
	isGameEndEnabled(): boolean;
	processOk(): void;
	selectLast(): void;
	_lastCommandSymbol : string;
	initCommandPosition(): void;
}
declare interface Window_MenuStatus extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	maxItems(): number;
	numVisibleRows(): number;
	itemHeight(): number;
	actor(index : number): Game_Actor;
	drawItem(index : number): void;
	drawPendingItemBackground(index : number): void;
	drawItemImage(index : number): void;
	drawItemStatus(index : number): void;
	processOk(): void;
	isCurrentItemEnabled(): boolean;
	selectLast(): void;
	formationMode(): /* !this._formationMode */ any;
	setFormationMode(formationMode : boolean): void;
	pendingIndex(): /* !this._pendingIndex */ any;
	setPendingIndex(index : number): void;
}
declare interface Window_MenuActor extends Window_MenuStatus {
	new ();
	initialize(rect : any): void;
	processOk(): void;
	selectLast(): void;
	selectForItem(item : any): void;
}
declare interface Window_ItemCategory extends Window_HorzCommand {
	new ();
	initialize(rect : any): void;
	maxCols(): number;
	update(): void;
	makeCommandList(): void;
	needsCommand(name : string): boolean;
	setItemWindow(itemWindow : {} | Window_ShopSell | Window_ShopSell): void;
	needsSelection(): boolean;
}
declare interface Window_ItemList extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	setCategory(category : string): void;
	maxCols(): number;
	colSpacing(): number;
	maxItems(): /* !this._data.length */ any;
	item(): void;
	itemAt(index : number): /* !this._data.<i> */ any;
	isCurrentItemEnabled(): boolean;
	includes(item : any): any;
	needsNumber(): boolean;
	isEnabled(item : any): boolean;
	makeItemList(): void;
	selectLast(): void;
	drawItem(index : any): void;
	numberWidth(): number;
	drawItemNumber(item : any, x : number, y : number, width : number): void;
	updateHelp(): void;
	refresh(): void;
}
declare interface Window_SkillType extends Window_Command {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	makeCommandList(): void;
	update(): void;
	setSkillWindow(skillWindow : /* Window_SkillType.prototype.+Window_SkillList */ any): void;
	selectLast(): void;
}
declare interface Window_SkillStatus extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	refresh(): void;
}
declare interface Window_SkillList extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	setActor(actor : Game_Actor): void;
	setStypeId(stypeId : any): void;
	maxCols(): number;
	colSpacing(): number;
	maxItems(): /* !this._data.length */ any;
	item(): void;
	itemAt(index : number): /* !this._data.<i> */ any;
	isCurrentItemEnabled(): Game_Actor;
	includes(item : any): any;
	isEnabled(item : any): /* !this._actor */ any;
	makeItemList(): void;
	selectLast(): void;
	drawItem(index : any): void;
	costWidth(): number;
	drawSkillCost(skill : any, x : number, y : number, width : number): void;
	updateHelp(): void;
	refresh(): void;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
	_stypeId : number;
	_data : Array<any>;
}
declare interface Window_EquipStatus extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	colSpacing(): number;
	refresh(): void;
	setTempActor(tempActor : any): void;
	drawAllParams(): void;
	drawItem(x : any, y : any, paramId : any): void;
	drawParamName(x : any, y : any, paramId : any): void;
	drawCurrentParam(x : number, y : any, paramId : any): void;
	drawRightArrow(x : number, y : any): void;
	drawNewParam(x : number, y : any, paramId : any): void;
	rightArrowWidth(): number;
	paramWidth(): number;
	paramX(): number;
	paramY(index : number): number;
	_additionalSprites : {
	}
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
}
declare interface Window_EquipCommand extends Window_HorzCommand {
	new ();
	initialize(rect : any): void;
	maxCols(): number;
	makeCommandList(): void;
}
declare interface Window_EquipSlot extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	update(): void;
	maxItems(): number;
	item(): void;
	itemAt(index : number): void;
	drawItem(index : any): void;
	slotNameWidth(): number;
	isEnabled(index : number): boolean;
	isCurrentItemEnabled(): boolean;
	setStatusWindow(statusWindow : Window_EquipStatus): void;
	setItemWindow(itemWindow : /* Window_EquipSlot.prototype.+Window_EquipItem */ any): void;
	updateHelp(): void;
}
declare interface Window_EquipItem extends Window_ItemList {
	new ();
	initialize(rect : any): void;
	maxCols(): number;
	colSpacing(): number;
	setActor(actor : any): void;
	setSlotId(slotId : number): void;
	includes(item : any): /* !this._actor */ any;
	etypeId(): number;
	isEnabled(): boolean;
	selectLast(): void;
	setStatusWindow(statusWindow : Window_EquipStatus): void;
	updateHelp(): void;
	playOkSound(): void;
	_category : string;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	visible : boolean;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
	_slotId : number;
	_statusWindow : Window_EquipStatus;
}
declare interface Window_Status extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	refresh(): void;
	drawBlock1(): void;
	block1Y(): number;
	drawBlock2(): void;
	block2Y(): number;
	drawBasicInfo(x : number, y : number): void;
	drawExpInfo(x : number, y : number): void;
	expTotalValue(): string;
	expNextValue(): string;
}
declare interface Window_StatusParams extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	maxItems(): number;
	itemHeight(): number;
	drawItem(index : any): void;
	drawItemBackground(): void;
}
declare interface Window_StatusEquip extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setActor(actor : any): void;
	maxItems(): number;
	itemHeight(): number;
	drawItem(index : any): void;
	drawItemBackground(): void;
}
declare interface Window_Options extends Window_Command {
	new ();
	initialize(rect : any): void;
	makeCommandList(): void;
	addGeneralOptions(): void;
	addVolumeOptions(): void;
	drawItem(index : number): void;
	statusWidth(): number;
	statusText(index : number): string;
	isVolumeSymbol(symbol : string): boolean;
	booleanStatusText(value : boolean | number): string;
	volumeStatusText(value : boolean | number): string;
	processOk(): void;
	cursorRight(): void;
	cursorLeft(): void;
	changeVolume(symbol : string, forward : boolean, wrap : boolean): void;
	volumeOffset(): number;
	changeValue(symbol : string, value : boolean | number): void;
	getConfigValue(symbol : string): boolean;	
	getConfigValue();
	setConfigValue(symbol : string, volume : boolean | number): void;
}
declare interface Window_SavefileList extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	setMode(mode : any, autosave : any): void;
	maxItems(): number;
	numVisibleRows(): number;
	itemHeight(): number;
	drawItem(index : any): void;
	indexToSavefileId(index : number): number;
	savefileIdToIndex(savefileId : any): number;
	isEnabled(savefileId : number): boolean;
	savefileId(): number;
	selectSavefile(savefileId : any): void;
	drawTitle(savefileId : number, x : number, y : number): void;
	drawContents(info : /* Window_SavefileList.prototype.drawContents.!0 */ any, rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any): void;
	drawPartyCharacters(info : /* Window_SavefileList.prototype.drawContents.!0 */ any, x : number, y : number): void;
	drawPlaytime(info : /* Window_SavefileList.prototype.drawContents.!0 */ any, x : number, y : number, width : number): void;
	playOkSound(): void;
}
declare interface Window_ShopCommand extends Window_HorzCommand {
	new ();
	initialize(rect : any): void;
	setPurchaseOnly(purchaseOnly : any): void;
	maxCols(): number;
	makeCommandList(): void;
}
declare interface Window_ShopBuy extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	setupGoods(shopGoods : any): void;
	maxItems(): /* !this._data.length */ any;
	item(): void;
	itemAt(index : number): /* !this._data.<i> */ any;
	setMoney(money : number): void;
	isCurrentItemEnabled(): void;
	price(item : any): /* !this._price.<i> */ any;
	isEnabled(item : any): any;
	refresh(): void;
	makeItemList(): void;
	goodsToItem(goods : Window_ShopBuy.prototype.GoodsToItem0): void;
	drawItem(index : any): void;
	priceWidth(): number;
	setStatusWindow(statusWindow : /* Window_ShopBuy.prototype.+Window_ShopStatus */ any): void;
	updateHelp(): void;
}
declare interface Window_ShopSell extends Window_ItemList {
	new ();
	initialize(rect : any): void;
	isEnabled(item : any): any;
	_category : string;
	_data : Array<any>;
	y : number;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_helpWindow : Window_Help;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	visible : boolean;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
}
declare interface Window_ShopNumber extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	isScrollEnabled(): boolean;
	number(): /* !this._number */ any;
	setup(item : any, max : number, price : number): void;
	setCurrencyUnit(currencyUnit : any): void;
	createButtons(): void;
	placeButtons(): void;
	totalButtonWidth(): void;
	buttonSpacing(): number;
	refresh(): void;
	drawCurrentItemName(): void;
	drawMultiplicationSign(): void;
	multiplicationSign(): string;
	multiplicationSignX(): number;
	drawNumber(): void;
	drawHorzLine(): void;
	drawTotalPrice(): void;
	itemNameY(): number;
	totalPriceY(): number;
	buttonY(): number;
	cursorWidth(): number;
	cursorX(): number;
	maxDigits(): number;
	update(): void;
	playOkSound(): void;
	processNumberChange(): void;
	changeNumber(amount : number): void;
	itemRect(): Window_ShopNumber.prototype.ItemRectRet;
	isTouchOkEnabled(): boolean;
	onButtonUp(): void;
	onButtonUp2(): void;
	onButtonDown(): void;
	onButtonDown2(): void;
	onButtonOk(): void;
}
declare interface Window_ShopStatus extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	refresh(): void;
	setItem(item : any): void;
	isEquipItem(): /* !this._item */ any;
	drawPossession(x : number, y : number): void;
	drawEquipInfo(x : number, y : number): void;
	statusMembers(): Array<Game_Actor>;
	pageSize(): number;
	maxPages(): number;
	drawActorEquipInfo(x : number, y : number, actor : Game_Actor): void;
	drawActorParamChange(x : number, y : number, actor : Game_Actor, item1 : Window_ShopStatus.prototype.DrawActorParamChange3): void;
	paramId(): number;
	currentEquippedItem(actor : Game_Actor, etypeId : any): void;
	update(): void;
	updatePage(): void;
	isPageChangeEnabled(): /* !this.visible */ any;
	isPageChangeRequested(): boolean;
	changePage(): void;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	visible : boolean;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
	_pageIndex : number;
	downArrowVisible : boolean;
	upArrowVisible : boolean;
	openness : number;
}
declare interface Window_NameEdit extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	setup(actor : Game_Actor, maxLength : any): void;
	name(): /* !this._name */ any;
	restoreDefault(): boolean;
	add(ch : string): boolean;
	back(): boolean;
	faceWidth(): number;
	charWidth(): number;
	left(): number;
	itemRect(index : number): Window_NameEdit.prototype.ItemRectRet;
	underlineRect(index : number): /* Window_NameEdit.prototype.itemRect.!ret */ any;
	underlineColor(): string;
	drawUnderline(index : number): void;
	drawChar(index : number): void;
	refresh(): void;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
	_maxLength : number;
}
declare interface Window_NameInput extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	setEditWindow(editWindow : /* Window_NameInput.prototype.+Window_NameEdit */ any): void;
	table(): Array<Array</* string],[string],[string */ any>>;
	maxCols(): number;
	maxItems(): number;
	itemWidth(): number;
	groupSpacing(): number;
	character(): string;
	isPageChange(): boolean;
	isOk(): boolean;
	itemRect(index : number): void;
	drawItem(index : any): void;
	updateCursor(): void;
	isCursorMovable(): /* !this.active */ any;
	cursorDown(wrap : boolean): void;
	cursorUp(wrap : boolean): void;
	cursorRight(wrap : boolean): void;
	cursorLeft(wrap : boolean): void;
	cursorPagedown(): void;
	cursorPageup(): void;
	processCursorMove(): void;
	processHandling(): void;
	isCancelEnabled(): boolean;
	processCancel(): void;
	processJump(): void;
	processBack(): void;
	processOk(): void;
	onNameAdd(): void;
	onNameOk(): void;
	LATIN1 : Array<string>;
	LATIN2 : Array<string>;
	RUSSIA : Array<string>;
	JAPAN1 : Array<string>;
	JAPAN2 : Array<string>;
	JAPAN3 : Array<string>;
}
declare interface Window_NameBox extends Window_Base {
	new ();
	initialize(): void;
	setMessageWindow(messageWindow : any): void;
	setName(name : string): void;
	clear(): void;
	start(): void;
	updatePlacement(): void;
	updateBackground(): void;
	windowWidth(): number;
	windowHeight(): number;
	refresh(): void;
}
declare interface Window_ChoiceList extends Window_Command {
	new ();
	initialize(): void;
	setMessageWindow(messageWindow : any): void;
	createCancelButton(): void;
	start(): void;
	update(): void;
	updateCancelButton(): void;
	selectDefault(): void;
	updatePlacement(): void;
	updateBackground(): void;
	placeCancelButton(): void;
	windowX(): number;
	windowY(): number;
	windowWidth(): number;
	windowHeight(): number;
	numVisibleRows(): number;
	maxLines(): number;
	maxChoiceWidth(): number;
	makeCommandList(): void;
	drawItem(index : any): void;
	isCancelEnabled(): boolean;
	needsCancelButton(): boolean;
	callOkHandler(): void;
	callCancelHandler(): void;
}
declare interface Window_NumberInput extends Window_Selectable {
	new ();
	initialize(): void;
	setMessageWindow(messageWindow : any): void;
	start(): void;
	updatePlacement(): void;
	windowWidth(): number;
	windowHeight(): number;
	maxCols(): /* !this._maxDigits */ any;
	maxItems(): /* !this._maxDigits */ any;
	itemWidth(): number;
	itemRect(index : number): /* Window_Selectable.prototype.itemRect.!ret */ any;
	isScrollEnabled(): boolean;
	isHoverEnabled(): boolean;
	createButtons(): void;
	placeButtons(): void;
	totalButtonWidth(): void;
	buttonSpacing(): number;
	buttonY(): number;
	update(): void;
	processDigitChange(): void;
	changeDigit(up : boolean): void;
	isTouchOkEnabled(): boolean;
	isOkEnabled(): boolean;
	isCancelEnabled(): boolean;
	processOk(): void;
	drawItem(index : any): void;
	onButtonUp(): void;
	onButtonDown(): void;
	onButtonOk(): void;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_handlers : {
	}
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
	_number : number;
	_maxDigits : number;
	openness : number;
	width : number;
	height : number;
	x : number;
	y : number;
	_buttons : Array<Sprite_Button>;
	downArrowVisible : boolean;
	upArrowVisible : boolean;
}
declare interface Window_EventItem extends Window_ItemList {
	new ();
	initialize(rect : any): void;
	setMessageWindow(messageWindow : any): void;
	createCancelButton(): void;
	start(): void;
	update(): void;
	updateCancelButton(): void;
	updatePlacement(): void;
	placeCancelButton(): void;
	includes(item : any): any;
	needsNumber(): boolean;
	isEnabled(): boolean;
	onOk(): void;
	onCancel(): void;
}
declare interface Window_Message extends Window_Base {
	new ();
	initialize(rect : any): void;
	initMembers(): void;
	setGoldWindow(goldWindow : any): void;
	setNameBoxWindow(nameBoxWindow : any): void;
	setChoiceListWindow(choiceListWindow : any): void;
	setNumberInputWindow(numberInputWindow : any): void;
	setEventItemWindow(eventItemWindow : any): void;
	clearFlags(): void;
	update(): void;
	checkToNotClose(): void;
	synchronizeNameBox(): void;
	canStart(): boolean;
	startMessage(): void;
	newLineX(textState : /* Window_Base.prototype.createTextState.!ret */ any): number;
	updatePlacement(): void;
	updateBackground(): void;
	terminateMessage(): void;
	updateWait(): boolean;
	updateLoading(): boolean;
	updateInput(): boolean;
	isAnySubWindowActive(): /* !this._choiceListWindow.active */ any;
	updateMessage(): boolean;
	shouldBreakHere(textState : /* Window_Base.prototype.createTextState.!ret */ any): boolean;
	canBreakHere(textState : /* Window_Base.prototype.createTextState.!ret */ any): boolean;
	onEndOfText(): void;
	startInput(): boolean;
	isTriggered(): boolean;
	doesContinue(): boolean;
	areSettingsChanged(): boolean;
	updateShowFast(): void;
	newPage(textState : /* Window_Base.prototype.createTextState.!ret */ any): void;
	updateSpeakerName(): void;
	loadMessageFace(): void;
	drawMessageFace(): void;
	processControlCharacter(textState : Window_Message.prototype.ProcessControlCharacter0, c : any): void;
	processNewLine(textState : any): void;
	processNewPage(textState : /* Window_Message.prototype.processControlCharacter.!0 */ any): void;
	isEndOfText(textState : /* Window_Base.prototype.createTextState.!ret */ any): boolean;
	needsNewPage(textState : /* Window_Base.prototype.createTextState.!ret */ any): boolean;
	processEscapeCharacter(code : any, textState : any): void;
	startWait(count : number): void;
	startPause(): void;
}
declare interface Window_ScrollText extends Window_Base {
	new ();
	initialize(rect : any): void;
	update(): void;
	startMessage(): void;
	refresh(): void;
	updatePlacement(): void;
	contentsHeight(): number;
	updateMessage(): void;
	scrollSpeed(): number;
	isFastForward(): boolean;
	fastForwardRate(): number;
	terminateMessage(): void;
}
declare interface Window_MapName extends Window_Base {
	new ();
	initialize(rect : any): void;
	update(): void;
	updateFadeIn(): void;
	updateFadeOut(): void;
	open(): void;
	close(): void;
	refresh(): void;
	drawBackground(x : number, y : number, width : any, height : number): void;
}
declare interface Window_BattleLog extends Window_Base {
	new ();
	initialize(rect : any): void;
	setSpriteset(spriteset : Spriteset_Battle): void;
	maxLines(): number;
	numLines(): /* !this._lines.length */ any;
	messageSpeed(): number;
	isBusy(): /* !this._waitMode */ any;
	update(): void;
	updateWait(): boolean;
	updateWaitCount(): boolean;
	updateWaitMode(): boolean;
	setWaitMode(waitMode : string): void;
	callNextMethod(): void;
	isFastForward(): boolean;
	push(methodName : string): void;
	clear(): void;
	wait(): void;
	waitForEffect(): void;
	waitForMovement(): void;
	addText(text : any): void;
	pushBaseLine(): void;
	popBaseLine(): void;
	waitForNewLine(): void;
	popupDamage(target : any): void;
	performActionStart(subject : any, action : any): void;
	performAction(subject : any, action : any): void;
	performActionEnd(subject : any): void;
	performDamage(target : any): void;
	performMiss(target : any): void;
	performRecovery(target : any): void;
	performEvasion(target : any): void;
	performMagicEvasion(target : any): void;
	performCounter(target : any): void;
	performReflection(target : any): void;
	performSubstitute(substitute : any, target : any): void;
	performCollapse(target : any): void;
	showAnimation(subject : any, targets : any, animationId : any): void;
	showAttackAnimation(subject : any, targets : any): void;
	showActorAttackAnimation(subject : any, targets : any): void;
	showEnemyAttackAnimation(): void;
	showNormalAnimation(targets : any, animationId : any, mirror : boolean): void;
	refresh(): void;
	drawBackground(): void;
	backRect(): void;
	lineRect(index : number): void;
	backColor(): string;
	backPaintOpacity(): number;
	drawLineText(index : number): void;
	startTurn(): void;
	startAction(subject : Game_Actor, action : Game_Action, targets : any): void;
	endAction(subject : Game_Actor): void;
	displayCurrentState(subject : Game_Actor): void;
	displayRegeneration(subject : Game_Actor): void;
	displayAction(subject : Game_Actor, item : any): void;
	displayItemMessage(fmt : any, subject : Game_Actor, item : any): void;
	displayCounter(target : any): void;
	displayReflection(target : any): void;
	displaySubstitute(substitute : any, target : any): void;
	displayActionResults(subject : Game_Actor, target : Game_Actor): void;
	displayFailure(target : Game_Actor): void;
	displayCritical(target : Game_Actor): void;
	displayDamage(target : Game_Actor): void;
	displayMiss(target : Game_Actor): void;
	displayEvasion(target : Game_Actor): void;
	displayHpDamage(target : Game_Actor): void;
	displayMpDamage(target : Game_Actor): void;
	displayTpDamage(target : Game_Actor): void;
	displayAffectedStatus(target : Game_Actor): void;
	displayAutoAffectedStatus(target : Game_Actor): void;
	displayChangedStates(target : Game_Actor): void;
	displayAddedStates(target : Game_Actor): void;
	displayRemovedStates(target : Game_Actor): void;
	displayChangedBuffs(target : Game_Actor): void;
	displayBuffs(target : Game_Actor, buffs : Array<any>, fmt : any): void;
	makeHpDamageText(target : Game_Actor): void;
	makeMpDamageText(target : Game_Actor): string;
	makeTpDamageText(target : Game_Actor): string;
	_opening : boolean;
	_closing : boolean;
	visible : boolean;
	padding : number;
	backOpacity : number;
	opacity : number;
	_lines : Array<any>;
	_methods : Array</* Window_BattleLog._methodsI */ any>;
	_waitCount : number;
	_waitMode : string;
	_baseLineStack : Array<number>;
}
declare interface Window_PartyCommand extends Window_Command {
	new ();
	initialize(rect : any): void;
	makeCommandList(): void;
	setup(): void;
}
declare interface Window_ActorCommand extends Window_Command {
	new ();
	initialize(rect : any): void;
	makeCommandList(): void;
	addAttackCommand(): void;
	addSkillCommands(): void;
	addGuardCommand(): void;
	addItemCommand(): void;
	setup(actor : Game_Actor): void;
	actor(): /* !this._actor */ any;
	processOk(): void;
	selectLast(): void;
}
declare interface Window_BattleStatus extends Window_StatusBase {
	new ();
	initialize(rect : any): void;
	extraHeight(): number;
	maxCols(): number;
	itemHeight(): /* !this.innerHeight */ any;
	maxItems(): number;
	rowSpacing(): number;
	updatePadding(): void;
	actor(index : number): Game_Actor;
	selectActor(actor : Game_Actor): void;
	update(): void;
	preparePartyRefresh(): void;
	performPartyRefresh(): void;
	drawItem(index : number): void;
	drawItemImage(index : number): void;
	drawItemStatus(index : number): void;
	faceRect(index : any): Window_BattleStatus.prototype.FaceRectRet;
	nameX(rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any):  /* error */ any;
	nameY(rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any | /* Window_BattleStatus.prototype.faceRect.!ret */ any): number;
	stateIconX(rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any): number;
	stateIconY(rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any): number;
	basicGaugesX(rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any):  /* error */ any;
	basicGaugesY(rect : /* Window_Selectable.prototype.itemRectWithPadding.!ret */ any | /* Window_BattleStatus.prototype.faceRect.!ret */ any): number;
}
declare interface Window_BattleActor extends Window_BattleStatus {
	new ();
	initialize(rect : any): void;
	show(): void;
	hide(): void;
	select(index : number): void;
	processTouch(): void;
}
declare interface Window_BattleEnemy extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	maxCols(): number;
	maxItems(): /* !this._enemies.length */ any;
	enemy(): /* !this._enemies.<i> */ any;
	enemyIndex(): number;
	drawItem(index : any): void;
	show(): void;
	hide(): void;
	refresh(): void;
	select(index : number): void;
	processTouch(): void;
}
declare interface Window_BattleSkill extends Window_SkillList {
	new ();
	initialize(rect : any): void;
	show(): void;
	hide(): void;
}
declare interface Window_BattleItem extends Window_ItemList {
	new ();
	initialize(rect : any): void;
	includes(item : any): boolean;
	show(): void;
	hide(): void;
}
declare interface Window_TitleCommand extends Window_Command {
	new ();
	initialize(rect : any): void;
	makeCommandList(): void;
	isContinueEnabled(): boolean;
	processOk(): void;
	selectLast(): void;
	_lastCommandSymbol : string;
	initCommandPosition(): void;
}
declare interface Window_GameEnd extends Window_Command {
	new ();
	initialize(rect : any): void;
	makeCommandList(): void;
}
declare interface Window_DebugRange extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	maxItems(): number;
	update(): void;
	mode(index : number): string;
	topId(index : number): number;
	isSwitchMode(index : number): boolean;
	drawItem(index : any): void;
	isCancelTriggered(): boolean;
	processCancel(): void;
	setEditWindow(editWindow : /* Window_DebugRange.prototype.+Window_DebugEdit */ any): void;
	lastTopRow : number;
	lastIndex : number;
}
declare interface Window_DebugEdit extends Window_Selectable {
	new ();
	initialize(rect : any): void;
	maxItems(): number;
	drawItem(index : number): void;
	itemName(dataId : number): void;
	itemStatus(dataId : number): string;
	setMode(mode : string): void;
	setTopId(id : number): void;
	currentId(): number;
	update(): void;
	updateSwitch(): void;
	updateVariable(): void;
	deltaForVariable(): number;
	_index : number;
	_cursorFixed : boolean;
	_cursorAll : boolean;
	_doubleTouch : boolean;
	_canRepeat : boolean;
	_scrollX : number;
	_scrollY : number;
	_scrollBaseX : number;
	_scrollBaseY : number;
	_opening : boolean;
	_closing : boolean;
	_scrollTargetX : number;
	_scrollTargetY : number;
	_scrollDuration : number;
	_scrollAccelX : number;
	_scrollAccelY : number;
	_scrollTouching : boolean;
	_scrollLastTouchX : number;
	_scrollLastTouchY : number;
	_scrollLastCursorVisible : boolean;
	active : boolean;
	padding : number;
	backOpacity : number;
	cursorVisible : boolean;
	_mode : string;
	_topId : number;
	downArrowVisible : boolean;
	upArrowVisible : boolean;
	openness : number;
}
declare var Bitmap : {
	paintOpacity : number;
}
