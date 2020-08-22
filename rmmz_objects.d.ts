// Type definitions for rmmz_objects.js

declare namespace Game_Temp.prototype
{
	// Game_Temp.prototype.retrieveAnimation.!ret

	interface RetrieveAnimationRet
	{
		mirror: boolean;
		targets: /* Game_Temp._animationQueue.<i>.targets */ any;
	}
}

declare namespace Game_SelfSwitches.prototype
{
	// Game_SelfSwitches.prototype.value.!0
	type Value0 = Array</* number,number,? */ any>;
	// Game_SelfSwitches.prototype.setValue.!0
	type SetValue0 = Array</* number,number,? */ any>;
}

declare namespace Game_Action.prototype
{
	// Game_Action.prototype.checkItemScope.!0
	type CheckItemScope0 = Array<number>;
	// Game_Action.prototype.checkDamageType.!0
	type CheckDamageType0 = Array<number>;
	// Game_Action.prototype.makeTargets.!ret
	type MakeTargetsRet = Array<any>;
	// Game_Action.prototype.repeatTargets.!0
	type RepeatTargets0 = Array<Game_Enemy>;
	// Game_Action.prototype.targetsForOpponents.!ret
	type TargetsForOpponentsRet = Array<Game_Enemy>;
	// Game_Action.prototype.targetsForFriends.!ret
	type TargetsForFriendsRet = Array<Game_Actor>;
	// Game_Action.prototype.randomTargets.!ret
	type RandomTargetsRet = Array<Game_Enemy>;
	// Game_Action.prototype.targetsForDead.!ret
	type TargetsForDeadRet = Array<Game_Enemy>;
	// Game_Action.prototype.targetsForDeadAndAlive.!ret
	type TargetsForDeadAndAliveRet = Array<any>;
	// Game_Action.prototype.itemTargetCandidates.!ret
	type ItemTargetCandidatesRet = Array<Game_Actor>;
	// Game_Action.prototype.elementsMaxRate.!1
	type ElementsMaxRate1 = Array<number>;
}

declare namespace Game_ActionResult.prototype
{
	// Game_ActionResult.prototype.addedStateObjects.!ret
	type AddedStateObjectsRet = Array<any>;
	// Game_ActionResult.prototype.removedStateObjects.!ret
	type RemovedStateObjectsRet = Array<any>;
}

declare namespace Game_BattlerBase.prototype
{
	// Game_BattlerBase.prototype.states.!ret
	type StatesRet = Array<any>;
	// Game_BattlerBase.prototype.stateIcons.!ret
	type StateIconsRet = Array<any>;
	// Game_BattlerBase.prototype.buffIcons.!ret
	type BuffIconsRet = Array<number>;
	// Game_BattlerBase.prototype.allTraits.!ret
	type AllTraitsRet = Array<any>;
	// Game_BattlerBase.prototype.actionPlusSet.!ret
	type ActionPlusSetRet = Array<any>;
}

declare namespace Game_Actor.prototype
{
	// Game_Actor.prototype.equipSlots.!ret
	type EquipSlotsRet = Array<number>;
	// Game_Actor.prototype.equips.!ret
	type EquipsRet = Array<any>;
	// Game_Actor.prototype.skills.!ret
	type SkillsRet = Array<any>;
	// Game_Actor.prototype.makeActionList.!ret
	type MakeActionListRet = Array<Game_Action>;
}

declare namespace Game_Unit.prototype
{
	// Game_Unit.prototype.members.!ret
	type MembersRet = Array<any>;
	// Game_Unit.prototype.movableMembers.!ret
	type MovableMembersRet = Array<Game_Actor>;
}

declare namespace Game_Party.prototype
{
	// Game_Party.prototype.items.!ret
	type ItemsRet = Array<any>;
	// Game_Party.prototype.weapons.!ret
	type WeaponsRet = Array<any>;
	// Game_Party.prototype.armors.!ret
	type ArmorsRet = Array<any>;
	// Game_Party.prototype.charactersForSavefile.!ret
	type CharactersForSavefileRet = Array<Game_Party.prototype.charactersForSavefile.CharactersForSavefileRetI>;
	// Game_Party.prototype.facesForSavefile.!ret
	type FacesForSavefileRet = Array<Game_Party.prototype.facesForSavefile.FacesForSavefileRetI>;
}

declare namespace Game_Party.prototype.charactersForSavefile
{
	// Game_Party.prototype.charactersForSavefile.!ret.<i>
	type CharactersForSavefileRetI = Array</* string,number */ any>;
}

declare namespace Game_Party.prototype.facesForSavefile
{
	// Game_Party.prototype.facesForSavefile.!ret.<i>
	type FacesForSavefileRetI = Array</* string,number */ any>;
}

declare namespace Game_Troop.prototype
{
	// Game_Troop.prototype.enemyNames.!ret
	type EnemyNamesRet = Array<any>;
	// Game_Troop.prototype.makeDropItems.!ret
	type MakeDropItemsRet = Array<any>;
}

declare namespace Game_Map.prototype
{
	// Game_Map.prototype.tilesetFlags.!ret
	type TilesetFlagsRet = Array<any>;
	// Game_Map.prototype.canvasToMapX.!0
	type CanvasToMapX0 = number;
	// Game_Map.prototype.canvasToMapY.!0
	type CanvasToMapY0 = number;
	// Game_Map.prototype.layeredTiles.!ret
	type LayeredTilesRet = Array<number>;
	// Game_Map.prototype.allTiles.!ret
	type AllTilesRet = Array<number>;
}

declare namespace Game_Player.prototype
{
	// Game_Player.prototype.startMapEvent.!2
	type StartMapEvent2 = Array<number>;
	// Game_Player.prototype.checkEventTriggerHere.!0
	type CheckEventTriggerHere0 = Array<number>;
	// Game_Player.prototype.checkEventTriggerThere.!0
	type CheckEventTriggerThere0 = Array<number>;
}

declare namespace Game_Event.prototype
{
	// Game_Event.prototype.isTriggerIn.!0
	type IsTriggerIn0 = Array<number>;
}

declare namespace Game_Interpreter.prototype
{
	// Game_Interpreter.prototype.iterateActorId.!1
	type IterateActorId1 = ((battler: Game_Actor) => void);
	// Game_Interpreter.prototype.iterateActorEx.!2
	type IterateActorEx2 = ((actor: Game_Actor) => void);

	// Game_Interpreter.prototype.picturePoint.!ret
	interface PicturePointRet
	{
		x: number;
		y: number;
	}
}

declare namespace Game_Temp
{
	// Game_Temp._animationQueue.<i>
	interface _animationQueueI
	{
		targets: Array<Game_Enemy>;
		mirror: boolean;
	}
	// Game_Temp._balloonQueue.<i>
	interface _balloonQueueI
	{
		target: Game_Event;
	}
}

declare namespace Game_Map
{
	// Game_Map._events.<i>
	interface _eventsI
	{
		[index: number]: Game_Event;
	}
}

declare namespace Game_Temp.prototype
{
	// Game_Temp.prototype.retrieveBalloon.!ret
	interface RetrieveBalloonRet
	{
		target: Game_Event;
	}
	// Game_Temp.prototype.requestAnimation.!0
	interface RequestAnimation0
	{
	}
}

declare namespace Game_Action.prototype
{
	// Game_Action.prototype.targetsForEveryone.!ret
	interface TargetsForEveryoneRet
	{
	}
}

declare namespace Game_Map.prototype
{
	// Game_Map.prototype.vehicles.!ret
	interface VehiclesRet
	{
	}
	// Game_Map.prototype.events.!ret
	interface EventsRet
	{
	}
}

declare namespace Game_Followers.prototype
{
	// Game_Followers.prototype.visibleFollowers.!ret
	interface VisibleFollowersRet
	{
	}
}

declare interface Game_Temp
{
	new();
	initialize(): void;
	isPlaytest(): /* !this._isPlaytest */ any;
	setDestination(x: number, y: number): void;
	clearDestination(): void;
	isDestinationValid(): boolean;
	destinationX(): number;
	destinationY(): number;
	setTouchState(target: any, state: string): void;
	clearTouchState(): void;
	touchTarget(): /* !this._touchTarget */ any;
	touchState(): /* !this._touchState */ any;
	requestBattleRefresh(): void;
	clearBattleRefreshRequest(): void;
	isBattleRefreshRequested(): /* !this._needsBattleRefresh */ any;
	reserveCommonEvent(commonEventId: any): void;
	retrieveCommonEvent(): void;
	isCommonEventReserved(): boolean;
	requestAnimation(targets: Array<Game_Player> | Array<Game_Enemy> | Game_Temp.prototype.RequestAnimation0, animationId: any, mirror: boolean): void;
	retrieveAnimation(): Game_Temp.prototype.RetrieveAnimationRet;
	requestBalloon(target: Game_Player, balloonId: any): void;
	retrieveBalloon(): Game_Temp.prototype.RetrieveBalloonRet;
	lastActionData(type: any): /* !this._lastActionData.<i> */ any;
	setLastActionData(type: number, value: number): void;
	setLastUsedSkillId(skillID: any): void;
	setLastUsedItemId(itemID: any): void;
	setLastSubjectActorId(actorID: number): void;
	setLastSubjectEnemyIndex(enemyIndex: number): void;
	setLastTargetActorId(actorID: any): void;
	setLastTargetEnemyIndex(enemyIndex: any): void;
	_isPlaytest: boolean;
	_destinationX: number;
	_destinationY: number;
	_touchState: string;
	_needsBattleRefresh: boolean;
	_commonEventQueue: Array<any>;
	_animationQueue: Array</* Game_Temp._animationQueueI */ any>;
	_balloonQueue: Array</* Game_Temp._balloonQueueI */ any>;
	_lastActionData: Array<number>;
}

declare interface Game_System
{
	new();
	initialize(): void;
	isJapanese(): void;
	isChinese(): void;
	isKorean(): void;
	isCJK(): void;
	isRussian(): void;
	isSideView(): void;
	isAutosaveEnabled(): void;
	isSaveEnabled(): boolean;
	disableSave(): void;
	enableSave(): void;
	isMenuEnabled(): boolean;
	disableMenu(): void;
	enableMenu(): void;
	isEncounterEnabled(): boolean;
	disableEncounter(): void;
	enableEncounter(): void;
	isFormationEnabled(): boolean;
	disableFormation(): void;
	enableFormation(): void;
	battleCount(): /* !this._battleCount */ any;
	winCount(): /* !this._winCount */ any;
	escapeCount(): /* !this._escapeCount */ any;
	saveCount(): /* !this._saveCount */ any;
	versionId(): /* !this._versionId */ any;
	savefileId(): number;
	setSavefileId(savefileId: number): void;
	windowTone(): Array<number>;
	setWindowTone(value: any): void;
	battleBgm(): /* !this._battleBgm */ any;
	setBattleBgm(value: any): void;
	victoryMe(): /* !this._victoryMe */ any;
	setVictoryMe(value: any): void;
	defeatMe(): /* !this._defeatMe */ any;
	setDefeatMe(value: any): void;
	onBattleStart(): void;
	onBattleWin(): void;
	onBattleEscape(): void;
	onBeforeSave(): void;
	onAfterLoad(): void;
	playtime(): number;
	playtimeText(): string;
	saveBgm(): void;
	replayBgm(): void;
	saveWalkingBgm(): void;
	replayWalkingBgm(): void;
	saveWalkingBgm2(): void;
	mainFontFace(): string;
	numberFontFace(): string;
	mainFontSize(): void;
	windowPadding(): number;
	_saveEnabled: boolean;
	_menuEnabled: boolean;
	_encounterEnabled: boolean;
	_formationEnabled: boolean;
	_battleCount: number;
	_winCount: number;
	_escapeCount: number;
	_saveCount: number;
	_versionId: number;
	_savefileId: number;
	_framesOnSave: number;
}

declare interface Game_Timer
{
	new();
	initialize(): void;
	update(sceneActive: boolean): void;
	start(count: number): void;
	stop(): void;
	isWorking(): /* !this._working */ any;
	seconds(): number;
	onExpire(): void;
	_frames: number;
	_working: boolean;
}

declare interface Game_Message
{
	new();
	initialize(): void;
	clear(): void;
	choices(): any;
	speakerName(): /* !this._speakerName */ any;
	faceName(): /* !this._faceName */ any;
	faceIndex(): /* !this._faceIndex */ any;
	background(): /* !this._background */ any;
	positionType(): /* !this._positionType */ any;
	choiceDefaultType(): /* !this._choiceDefaultType */ any;
	choiceCancelType(): number;
	choiceBackground(): /* !this._choiceBackground */ any;
	choicePositionType(): /* !this._choicePositionType */ any;
	numInputVariableId(): /* !this._numInputVariableId */ any;
	numInputMaxDigits(): /* !this._numInputMaxDigits */ any;
	itemChoiceVariableId(): /* !this._itemChoiceVariableId */ any;
	itemChoiceItypeId(): /* !this._itemChoiceItypeId */ any;
	scrollMode(): boolean;
	scrollSpeed(): /* !this._scrollSpeed */ any;
	scrollNoFast(): /* !this._scrollNoFast */ any;
	add(text: string): void;
	setSpeakerName(speakerName: any): void;
	setFaceImage(faceName: any, faceIndex: any): void;
	setBackground(background: any): void;
	setPositionType(positionType: any): void;
	setChoices(choices: any, defaultType: number, cancelType: number): void;
	setChoiceBackground(background: number): void;
	setChoicePositionType(positionType: number): void;
	setNumberInput(variableId: any, maxDigits: any): void;
	setItemChoice(variableId: any, itemType: number): void;
	setScroll(speed: any, noFast: any): void;
	setChoiceCallback(callback: () => void): void;
	onChoice(n: number): void;
	hasText(): boolean;
	isChoice(): boolean;
	isNumberInput(): boolean;
	isItemChoice(): boolean;
	isBusy(): boolean;
	newPage(): void;

	allText(): string;
	isRTL(): boolean;
	_texts: Array<string>;
	_choices: Array<any>;
	_speakerName: string;
	_faceName: string;
	_faceIndex: number;
	_background: number;
	_positionType: number;
	_choiceDefaultType: number;
	_choiceCancelType: number;
	_choiceBackground: number;
	_choicePositionType: number;
	_numInputVariableId: number;
	_numInputMaxDigits: number;
	_itemChoiceVariableId: number;
	_itemChoiceItypeId: number;
	_scrollMode: boolean;
	_scrollSpeed: number;
	_scrollNoFast: boolean;
	_choiceCallback(n: number): void;
}

declare interface Game_Switches
{
	new();
	initialize(): void;
	clear(): void;
	value(switchId: number): boolean;
	setValue(switchId: number, value: boolean): void;
	onChange(): void;
	_data: Array<boolean>;
}

declare interface Game_Variables
{
	new();
	initialize(): void;
	clear(): void;
	value(variableId: number): /* !this._data.<i> */ any;
	setValue(variableId: number, value: number): void;
	onChange(): void;
	_data: Array<number>;
}

declare interface Game_SelfSwitches
{
	new();
	initialize(): void;
	clear(): void;
	value(key: Game_SelfSwitches.prototype.Value0, param2: any, param3: /* ?] */ any): boolean;
	setValue(key: Game_SelfSwitches.prototype.SetValue0, param2: number, param3: /* ?] */ any, value: boolean): void;
	onChange(): void;
	_data: {
	}
}

declare interface Game_Screen
{
	new();
	initialize(): void;
	clear(): void;
	onBattleStart(): void;
	brightness(): number;
	tone(): Array<number>;
	flashColor(): Array<number>;
	shake(): number;
	zoomX(): number;
	zoomY(): number;
	zoomScale(): number;
	weatherType(): string;
	weatherPower(): number;
	picture(pictureId: number): void;
	realPictureId(pictureId: number): number;
	clearFade(): void;
	clearTone(): void;
	clearFlash(): void;
	clearShake(): void;
	clearZoom(): void;
	clearWeather(): void;
	clearPictures(): void;
	eraseBattlePictures(): void;
	maxPictures(): number;
	startFadeOut(duration: number): void;
	startFadeIn(duration: number): void;
	startTint(tone: any, duration: any): void;
	startFlash(color: Array<number>, duration: number): void;
	startShake(power: number, speed: number, duration: number): void;
	startZoom(x: any, y: any, scale: any, duration: any): void;
	setZoom(x: number, y: number, scale: number): void;
	changeWeather(type: any, power: any, duration: any): void;
	update(): void;
	updateFadeOut(): void;
	updateFadeIn(): void;
	updateTone(): void;
	updateFlash(): void;
	updateShake(): void;
	updateZoom(): void;
	updateWeather(): void;
	updatePictures(): void;
	startFlashForDamage(): void;
	showPicture(pictureId: any, name: any, origin: any, x: number, y: number, scaleX: any, scaleY: any, opacity: any, blendMode: any): void;
	movePicture(pictureId: any, origin: any, x: number, y: number, scaleX: any, scaleY: any, opacity: any, blendMode: any, duration: any, easingType: number): void;
	rotatePicture(pictureId: any, speed: any): void;
	tintPicture(pictureId: any, tone: any, duration: any): void;
	erasePicture(pictureId: any): void;
	_brightness: number;
	_fadeOutDuration: number;
	_fadeInDuration: number;
	_tone: Array<number>;
	_toneTarget: Array<number>;
	_toneDuration: number;
	_flashDuration: number;
	_shakePower: number;
	_shakeSpeed: number;
	_shakeDuration: number;
	_shakeDirection: number;
	_shake: number;
	_zoomX: number;
	_zoomY: number;
	_zoomScale: number;
	_zoomScaleTarget: number;
	_zoomDuration: number;
	_weatherType: string;
	_weatherPower: number;
	_weatherPowerTarget: number;
	_weatherDuration: number;
	_pictures: Array</* Game_Screen.+Game_Picture */ any>;
}

declare interface Game_Picture
{
	new();
	initialize(): void;
	name(): /* !this._name */ any;
	origin(): /* !this._origin */ any;
	x(): /* !this._x */ any;
	y(): /* !this._y */ any;
	scaleX(): /* !this._scaleX */ any;
	scaleY(): /* !this._scaleY */ any;
	opacity(): /* !this._opacity */ any;
	blendMode(): /* !this._blendMode */ any;
	tone(): /* !this._tone */ any;
	angle(): /* !this._angle */ any;
	initBasic(): void;
	initTarget(): void;
	initTone(): void;
	initRotation(): void;
	show(name: any, origin: any, x: number, y: number, scaleX: any, scaleY: any, opacity: any, blendMode: any): void;
	move(origin: any, x: number, y: number, scaleX: any, scaleY: any, opacity: any, blendMode: any, duration: any, easingType: number): void;
	rotate(speed: any): void;
	tint(tone: any, duration: any): void;
	update(): void;
	updateMove(): void;
	updateTone(): void;
	updateRotation(): void;
	applyEasing(current: number, target: number): number;
	calcEasing(t: number): number;
	easeIn(t: number, exponent: number): number;
	easeOut(t: number, exponent: number): number;
	easeInOut(t: number, exponent: number): number;
	_name: string;
	_origin: number;
	_x: number;
	_y: number;
	_scaleX: number;
	_scaleY: number;
	_opacity: number;
	_blendMode: number;
	_targetX: number;
	_targetY: number;
	_targetScaleX: number;
	_targetScaleY: number;
	_targetOpacity: number;
	_duration: number;
	_wholeDuration: number;
	_easingType: number;
	_easingExponent: number;
	_tone: Array<number>;
	_toneDuration: number;
	_angle: number;
	_rotationSpeed: number;
}

declare interface Game_Item
{
	new();
	initialize(item: any): void;
	isSkill(): boolean;
	isItem(): boolean;
	isUsableItem(): boolean;
	isWeapon(): boolean;
	isArmor(): boolean;
	isEquipItem(): boolean;
	isNull(): boolean;
	itemId(): /* !this._itemId */ any;
	object(): void;
	setObject(item: any): void;
	setEquip(isWeapon: boolean, itemId: number): void;
	_dataClass: string;
	_itemId: number;
}

declare interface Game_Action
{
	new();
	initialize(subject: any, forcing: any): void;
	clear(): void;
	setSubject(subject: Game_Actor): void;
	subject(): Game_Actor;
	friendsUnit(): Game_Party;
	opponentsUnit(): Game_Troop;
	setEnemyAction(action: any): void;
	setAttack(): void;
	setGuard(): void;
	setSkill(skillId: number): void;
	setItem(itemId: any): void;
	setItemObject(object: any): void;
	setTarget(targetIndex: number): void;
	item(): void;
	isSkill(): boolean;
	isItem(): boolean;
	numRepeats(): number;
	checkItemScope(list: Game_Action.prototype.CheckItemScope0): boolean;
	isForOpponent(): boolean;
	isForFriend(): boolean;
	isForEveryone(): boolean;
	isForAliveFriend(): boolean;
	isForDeadFriend(): boolean;
	isForUser(): boolean;
	isForOne(): boolean;
	isForRandom(): boolean;
	isForAll(): boolean;
	needsSelection(): boolean;
	numTargets(): number;
	checkDamageType(list: Game_Action.prototype.CheckDamageType0): boolean;
	isHpEffect(): boolean;
	isMpEffect(): boolean;
	isDamage(): boolean;
	isRecover(): boolean;
	isDrain(): boolean;
	isHpRecover(): boolean;
	isMpRecover(): boolean;
	isCertainHit(): boolean;
	isPhysical(): boolean;
	isMagical(): boolean;
	isAttack(): boolean;
	isGuard(): boolean;
	isMagicSkill(): boolean;
	decideRandomTarget(): void;
	setConfusion(): void;
	prepare(): void;
	isValid(): /* !this._forcing */ any;
	speed(): void;
	makeTargets(): Game_Action.prototype.MakeTargetsRet;
	repeatTargets(targets: Game_Action.prototype.RepeatTargets0): Array<any>;
	confusionTarget(): Game_Enemy;
	targetsForEveryone(): Game_Action.prototype.TargetsForEveryoneRet;
	targetsForOpponents(): Game_Action.prototype.TargetsForOpponentsRet;
	targetsForFriends(): Game_Action.prototype.TargetsForFriendsRet;
	randomTargets(unit: Game_Troop): Game_Action.prototype.RandomTargetsRet;
	targetsForDead(unit: Game_Party): Game_Action.prototype.TargetsForDeadRet;
	targetsForAlive(unit: Game_Party | Game_Troop): Array<Game_Enemy>;
	targetsForDeadAndAlive(unit: Game_Party): Game_Action.prototype.TargetsForDeadAndAliveRet;
	evaluate(): number;
	itemTargetCandidates(): Game_Action.prototype.ItemTargetCandidatesRet;
	evaluateWithTarget(target: Game_Actor): number;
	testApply(target: Game_Actor): boolean;
	testLifeAndDeath(target: Game_Actor): boolean;
	hasItemAnyValidEffects(target: Game_Actor): void;
	testItemEffect(target: Game_Actor, effect: any): boolean;
	itemCnt(target: /* Game_Action.prototype.+Game_BattlerBase */ any):  /* error */ any;
	itemMrf(target: any):  /* error */ any;
	itemHit(): number;
	itemEva(target: Game_Actor):  /* error */ any;
	itemCri(target: Game_Actor): number;
	apply(target: Game_Actor): void;
	makeDamageValue(target: Game_Actor, critical: boolean): number;
	evalDamageFormula(target: Game_Actor): number;
	calcElementRate(target: Game_Actor): number;
	elementsMaxRate(target: Game_Actor, elements: Game_Action.prototype.ElementsMaxRate1): number;
	applyCritical(damage: number): number;
	applyVariance(damage: number, variance: any): number;
	applyGuard(damage: number, target: Game_Actor): number;
	executeDamage(target: Game_Actor, value: number): void;
	executeHpDamage(target: Game_Actor, value: number): void;
	executeMpDamage(target: Game_Actor, value: number): void;
	gainDrainedHp(value: number): void;
	gainDrainedMp(value: number): void;
	applyItemEffect(target: Game_Actor, effect: any): void;
	itemEffectRecoverHp(target: Game_Actor, effect: any): void;
	itemEffectRecoverMp(target: Game_Actor, effect: any): void;
	itemEffectGainTp(target: Game_Actor, effect: any): void;
	itemEffectAddState(target: Game_Actor, effect: any): void;
	itemEffectAddAttackState(target: Game_Actor, effect: any): void;
	itemEffectAddNormalState(target: Game_Actor, effect: any): void;
	itemEffectRemoveState(target: Game_Actor, effect: any): void;
	itemEffectAddBuff(target: Game_Actor, effect: any): void;
	itemEffectAddDebuff(target: Game_Actor, effect: any): void;
	itemEffectRemoveBuff(target: Game_Actor, effect: any): void;
	itemEffectRemoveDebuff(target: Game_Actor, effect: any): void;
	itemEffectSpecial(target: Game_Actor, effect: any): void;
	itemEffectGrow(target: Game_Actor, effect: any): void;
	itemEffectLearnSkill(target: Game_Actor, effect: any): void;
	itemEffectCommonEvent(): void;
	makeSuccess(target: Game_Actor): void;
	applyItemUserEffect(): void;
	lukEffectRate(target: Game_Actor): number;
	applyGlobal(): void;
	updateLastUsed(): void;
	updateLastSubject(): void;
	updateLastTarget(target: Game_Actor): void;
	EFFECT_RECOVER_HP: number;
	EFFECT_RECOVER_MP: number;
	EFFECT_GAIN_TP: number;
	EFFECT_ADD_STATE: number;
	EFFECT_REMOVE_STATE: number;
	EFFECT_ADD_BUFF: number;
	EFFECT_ADD_DEBUFF: number;
	EFFECT_REMOVE_BUFF: number;
	EFFECT_REMOVE_DEBUFF: number;
	EFFECT_SPECIAL: number;
	EFFECT_GROW: number;
	EFFECT_LEARN_SKILL: number;
	EFFECT_COMMON_EVENT: number;
	SPECIAL_EFFECT_ESCAPE: number;
	HITTYPE_CERTAIN: number;
	HITTYPE_PHYSICAL: number;
	HITTYPE_MAGICAL: number;
	_subjectActorId: number;
	_subjectEnemyIndex: number;
	_forcing: boolean;
	_targetIndex: number;
}

declare interface Game_ActionResult
{
	new();
	initialize(): void;
	clear(): void;
	addedStateObjects(): Game_ActionResult.prototype.AddedStateObjectsRet;
	removedStateObjects(): Game_ActionResult.prototype.RemovedStateObjectsRet;
	isStatusAffected(): boolean;
	isHit(): /* !this.used */ any;
	isStateAdded(stateId: number): boolean;
	pushAddedState(stateId: number): void;
	isStateRemoved(stateId: number): boolean;
	pushRemovedState(stateId: number): void;
	isBuffAdded(paramId: any): boolean;
	pushAddedBuff(paramId: any): void;
	isDebuffAdded(paramId: any): boolean;
	pushAddedDebuff(paramId: any): void;
	isBuffRemoved(paramId: number): boolean;
	pushRemovedBuff(paramId: number): void;
	used: boolean;
	missed: boolean;
	evaded: boolean;
	physical: boolean;
	drain: boolean;
	critical: boolean;
	success: boolean;
	hpAffected: boolean;
	hpDamage: number;
	mpDamage: number;
	tpDamage: number;
	addedStates: Array<number>;
	removedStates: Array<number>;
	addedBuffs: Array<any>;
	addedDebuffs: Array<any>;
	removedBuffs: Array<number>;
}

declare interface Game_BattlerBase
{
	new();
	//initialize(): void;
	initMembers(): void;
	clearParamPlus(): void;
	clearStates(): void;
	eraseState(stateId: number): void;
	isStateAffected(stateId: number): boolean;
	isDeathStateAffected(): boolean;
	deathStateId(): number;
	resetStateCounts(stateId: number): void;
	isStateExpired(stateId: any): boolean;
	updateStateTurns(): void;
	clearBuffs(): void;
	eraseBuff(paramId: number): void;
	buffLength(): /* !this._buffs.length */ any;
	buff(paramId: any): /* !this._buffs.<i> */ any;
	isBuffAffected(paramId: any): boolean;
	isDebuffAffected(paramId: any): boolean;
	isBuffOrDebuffAffected(paramId: number): boolean;
	isMaxBuffAffected(paramId: any): boolean;
	isMaxDebuffAffected(paramId: any): boolean;
	increaseBuff(paramId: any): void;
	decreaseBuff(paramId: any): void;
	overwriteBuffTurns(paramId: any, turns: any): void;
	isBuffExpired(paramId: number): boolean;
	updateBuffTurns(): void;
	die(): void;
	revive(): void;
	states(): Game_BattlerBase.prototype.StatesRet;
	stateIcons(): Game_BattlerBase.prototype.StateIconsRet;
	buffIcons(): Game_BattlerBase.prototype.BuffIconsRet;
	buffIconIndex(buffLevel: number, paramId: number): number;
	allIcons(): Array<any>;
	traitObjects(): Array<any>;
	allTraits(): Game_BattlerBase.prototype.AllTraitsRet;
	traits(code: number): Array<any>;
	traitsWithId(code: number, id: number): Array<any>;
	traitsPi(code: number, id: number): number;
	traitsSum(code: number, id: number): void;
	traitsSumAll(code: number): void;
	traitsSet(code: number): Array<number>;
	//paramBase(): number;
	paramPlus(paramId: number): number;
	paramBasePlus(paramId: number): number;
	paramMin(paramId: number): number;
	paramMax(): number;
	paramRate(paramId: number): number;
	paramBuffRate(paramId: number): number;
	param(paramId: number): number;
	xparam(xparamId: any): void;
	sparam(sparamId: number): number;
	elementRate(elementId: any): number;
	debuffRate(paramId: any): number;
	stateRate(stateId: any): number;
	stateResistSet(): Array<number>;
	isStateResist(stateId: number): boolean;
	attackElements(): Array<number>;
	attackStates(): Array<number>;
	attackStatesRate(stateId: number): void;
	attackSpeed(): void;
	attackTimesAdd(): number;
	attackSkillId(): number;
	addedSkillTypes(): Array<number>;
	isSkillTypeSealed(stypeId: number): boolean;
	addedSkills(): Array<number>;
	isSkillSealed(skillId: number): boolean;
	isEquipWtypeOk(wtypeId: number): boolean;
	isEquipAtypeOk(atypeId: number): boolean;
	isEquipTypeLocked(etypeId: number): boolean;
	isEquipTypeSealed(etypeId: number): boolean;
	slotType(): number;
	isDualWield(): boolean;
	actionPlusSet(): Game_BattlerBase.prototype.ActionPlusSetRet;
	specialFlag(flagId: number): boolean;
	collapseType(): number;
	partyAbility(abilityId: number): boolean;
	isAutoBattle(): boolean;
	isGuard(): boolean;
	isSubstitute(): boolean;
	isPreserveTp(): boolean;
	addParam(paramId: any, value: any): void;
	setHp(hp: number): void;
	setMp(mp: any): void;
	setTp(tp: number): void;
	maxTp(): number;
	refresh(): void;
	recoverAll(): void;
	hpRate(): number;
	mpRate(): number;
	tpRate(): number;
	hide(): void;
	appear(): void;
	isHidden(): boolean;
	isAppeared(): boolean;
	isDead(): boolean;
	isAlive(): boolean;
	isDying(): boolean;
	isRestricted(): boolean;
	canInput(): boolean;
	canMove(): boolean;
	isConfused(): boolean;
	confusionLevel(): number;
	isActor(): boolean;
	isEnemy(): boolean;
	sortStates(): void;
	restriction(): number;
	addNewState(stateId: number): void;
	onRestrict(): void;
	mostImportantStateText(): string;
	stateMotionIndex(): number;
	stateOverlayIndex(): number;
	//isSkillWtypeOk(): boolean;
	skillMpCost(skill: any): number;
	skillTpCost(skill: any):  /* error */ any;
	canPaySkillCost(skill: any): boolean;
	paySkillCost(skill: any): void;
	isOccasionOk(item: any): boolean;
	meetsUsableItemConditions(item: any): boolean;
	meetsSkillConditions(skill: any): boolean;
	meetsItemConditions(item: any): boolean;
	canUse(item: any): boolean;
	canEquip(item: any): boolean;
	canEquipWeapon(item: any): boolean;
	canEquipArmor(item: any): boolean;
	guardSkillId(): number;
	canAttack(): boolean;
	canGuard(): boolean;
	TRAIT_ELEMENT_RATE: number;
	TRAIT_DEBUFF_RATE: number;
	TRAIT_STATE_RATE: number;
	TRAIT_STATE_RESIST: number;
	TRAIT_PARAM: number;
	TRAIT_XPARAM: number;
	TRAIT_SPARAM: number;
	TRAIT_ATTACK_ELEMENT: number;
	TRAIT_ATTACK_STATE: number;
	TRAIT_ATTACK_SPEED: number;
	TRAIT_ATTACK_TIMES: number;
	TRAIT_ATTACK_SKILL: number;
	TRAIT_STYPE_ADD: number;
	TRAIT_STYPE_SEAL: number;
	TRAIT_SKILL_ADD: number;
	TRAIT_SKILL_SEAL: number;
	TRAIT_EQUIP_WTYPE: number;
	TRAIT_EQUIP_ATYPE: number;
	TRAIT_EQUIP_LOCK: number;
	TRAIT_EQUIP_SEAL: number;
	TRAIT_SLOT_TYPE: number;
	TRAIT_ACTION_PLUS: number;
	TRAIT_SPECIAL_FLAG: number;
	TRAIT_COLLAPSE_TYPE: number;
	TRAIT_PARTY_ABILITY: number;
	FLAG_ID_AUTO_BATTLE: number;
	FLAG_ID_GUARD: number;
	FLAG_ID_SUBSTITUTE: number;
	FLAG_ID_PRESERVE_TP: number;
	ICON_BUFF_START: number;
	ICON_DEBUFF_START: number;
	_hp: number;
	_mp: number;
	_tp: number;
	_hidden: boolean;
}

declare interface Game_Battler extends Game_BattlerBase
{
	new();
	//initialize(): void;
	initMembers(): void;
	clearDamagePopup(): void;
	clearWeaponAnimation(): void;
	clearEffect(): void;
	clearMotion(): void;
	requestEffect(effectType: string): void;
	requestMotion(motionType: string): void;
	requestMotionRefresh(): void;
	select(): void;
	deselect(): void;
	isDamagePopupRequested(): /* !this._damagePopup */ any;
	isEffectRequested(): boolean;
	isMotionRequested(): boolean;
	isWeaponAnimationRequested(): boolean;
	isMotionRefreshRequested(): /* !this._motionRefresh */ any;
	isSelected(): /* !this._selected */ any;
	effectType(): /* !this._effectType */ any;
	motionType(): /* !this._motionType */ any;
	weaponImageId(): /* !this._weaponImageId */ any;
	startDamagePopup(): void;
	shouldPopupDamage(): /* !this._result.missed */ any;
	startWeaponAnimation(weaponImageId: any): void;
	action(index: number): /* !this._actions.<i> */ any;
	setAction(index: number, action: Game_Action): void;
	numActions(): /* !this._actions.length */ any;
	clearActions(): void;
	result(): /* !this._result */ any;
	clearResult(): void;
	clearTpbChargeTime(): void;
	applyTpbPenalty(): void;
	initTpbChargeTime(advantageous: any): void;
	tpbChargeTime(): /* !this._tpbChargeTime */ any;
	startTpbCasting(): void;
	startTpbAction(): void;
	isTpbCharged(): boolean;
	isTpbReady(): boolean;
	isTpbTimeout(): boolean;
	updateTpb(): void;
	updateTpbChargeTime(): void;
	updateTpbCastTime(): void;
	updateTpbAutoBattle(): void;
	updateTpbIdleTime(): void;
	tpbAcceleration(): number;
	tpbRelativeSpeed(): number;
	tpbSpeed(): number;
	tpbBaseSpeed(): number;
	tpbRequiredCastTime(): number;
	onTpbCharged(): void;
	shouldDelayTpbCharge(): boolean;
	finishTpbCharge(): void;
	isTpbTurnEnd(): /* !this._tpbTurnEnd */ any;
	initTpbTurn(): void;
	startTpbTurn(): void;
	makeTpbActions(): void;
	onTpbTimeout(): void;
	turnCount(): /* !this._tpbTurnCount */ any;
	canInput(): boolean;
	refresh(): void;
	addState(stateId: number): void;
	isStateAddable(stateId: number): boolean;
	isStateRestrict(stateId: number): boolean;
	onRestrict(): void;
	removeState(stateId: number): void;
	escape(): void;
	addBuff(paramId: any, turns: any): void;
	addDebuff(paramId: any, turns: any): void;
	removeBuff(paramId: number): void;
	removeBattleStates(): void;
	removeAllBuffs(): void;
	removeStatesAuto(timing: number): void;
	removeBuffsAuto(): void;
	removeStatesByDamage(): void;
	makeActionTimes(): number;
	makeActions(): void;
	speed(): /* !this._speed */ any;
	makeSpeed(): void;
	currentAction(): /* !this._actions.0 */ any;
	removeCurrentAction(): void;
	setLastTarget(target: any): void;
	forceAction(skillId: any, targetIndex: any): void;
	useItem(item: any): void;
	consumeItem(item: any): void;
	gainHp(value: number): void;
	gainMp(value: number): void;
	gainTp(value: any): void;
	gainSilentTp(value: number): void;
	initTp(): void;
	clearTp(): void;
	chargeTpByDamage(damageRate: number): void;
	regenerateHp(): void;
	maxSlipDamage(): /* !this.hp */ any;
	regenerateMp(): void;
	regenerateTp(): void;
	regenerateAll(): void;
	onBattleStart(advantageous: any): void;
	onAllActionsEnd(): void;
	onTurnEnd(): void;
	onBattleEnd(): void;
	onDamage(value: any): void;
	setActionState(actionState: string): void;
	isUndecided(): boolean;
	isInputting(): boolean;
	isWaiting(): boolean;
	isActing(): boolean;
	isChanting(): boolean;
	isGuardWaiting(): boolean;
	performActionStart(action: any): void;
	//performAction(): void;
	performActionEnd(): void;
	performDamage(): void;
	performMiss(): void;
	performRecovery(): void;
	performEvasion(): void;
	performMagicEvasion(): void;
	performCounter(): void;
	performReflection(): void;
	performSubstitute(): void;
	performCollapse(): void;
}

declare interface Game_Actor extends Game_Battler
{
	new();
	initialize(actorId: any): void;
	initMembers(): void;
	setup(actorId: any): void;
	actorId(): /* !this._actorId */ any;
	actor(): void;
	name(): /* !this._name */ any;
	setName(name: string | number): void;
	nickname(): /* !this._nickname */ any;
	setNickname(nickname: any): void;
	profile(): /* !this._profile */ any;
	setProfile(profile: any): void;
	characterName(): /* !this._characterName */ any;
	characterIndex(): /* !this._characterIndex */ any;
	faceName(): /* !this._faceName */ any;
	faceIndex(): /* !this._faceIndex */ any;
	battlerName(): /* !this._battlerName */ any;
	clearStates(): void;
	eraseState(stateId: number): void;
	resetStateCounts(stateId: number): void;
	initImages(): void;
	expForLevel(level: number): number;
	initExp(): void;
	currentExp(): /* !this._exp.<i> */ any;
	currentLevelExp(): number;
	nextLevelExp(): number;
	nextRequiredExp(): number;
	maxLevel(): void;
	isMaxLevel(): boolean;
	initSkills(): void;
	initEquips(equips: any): void;
	equipSlots(): Game_Actor.prototype.EquipSlotsRet;
	equips(): Game_Actor.prototype.EquipsRet;
	weapons(): Array<any>;
	armors(): Array<any>;
	hasWeapon(weapon: any): boolean;
	hasArmor(armor: any): boolean;
	isEquipChangeOk(slotId: number): boolean;
	changeEquip(slotId: number, item: any): void;
	forceChangeEquip(slotId: any, item: any): void;
	tradeItemWithParty(newItem: any, oldItem: any): boolean;
	changeEquipById(etypeId: any, itemId: any): void;
	isEquipped(item: any): boolean;
	discardEquip(item: any): void;
	releaseUnequippableItems(forcing: boolean): void;
	clearEquipments(): void;
	optimizeEquipments(): void;
	bestEquipItem(slotId: number): void;
	calcEquipItemPerformance(item: any): void;
	isSkillWtypeOk(skill: any): boolean;
	isWtypeEquipped(wtypeId: any): boolean;
	refresh(): void;
	hide(): void;
	isActor(): boolean;
	friendsUnit(): Game_Party;
	opponentsUnit(): Game_Troop;
	index(): number;
	isBattleMember(): boolean;
	isFormationChangeOk(): boolean;
	currentClass(): void;
	isClass(gameClass: any): any;
	skillTypes(): void;
	skills(): Game_Actor.prototype.SkillsRet;
	usableSkills(): Array<any>;
	traitObjects(): Array<any>;
	attackElements(): Array<number>;
	hasNoWeapons(): boolean;
	bareHandsElementId(): number;
	paramBase(paramId: number): void;
	paramPlus(paramId: number): number;
	attackAnimationId1(): number;
	attackAnimationId2(): number;
	bareHandsAnimationId(): number;
	changeExp(exp: number, show: boolean): void;
	levelUp(): void;
	levelDown(): void;
	findNewSkills(lastSkills: Array<any>): Array<any>;
	displayLevelUp(newSkills: Array<any>): void;
	gainExp(exp: any): void;
	finalExpRate(): number;
	benchMembersExpRate(): number;
	shouldDisplayLevelUp(): boolean;
	changeLevel(level: any, show: boolean): void;
	learnSkill(skillId: any): void;
	forgetSkill(skillId: any): void;
	isLearnedSkill(skillId: any): boolean;
	hasSkill(skillId: any): boolean;
	changeClass(classId: any, keepExp: any): void;
	setCharacterImage(characterName: any, characterIndex: any): void;
	setFaceImage(faceName: any, faceIndex: any): void;
	setBattlerImage(battlerName: any): void;
	isSpriteVisible(): void;
	performActionStart(action: any): void;
	performAction(action: any): void;
	performActionEnd(): void;
	performAttack(): void;
	performDamage(): void;
	performEvasion(): void;
	performMagicEvasion(): void;
	performCounter(): void;
	performCollapse(): void;
	performVictory(): void;
	performEscape(): void;
	makeActionList(): Game_Actor.prototype.MakeActionListRet;
	makeAutoBattleActions(): void;
	makeConfusionActions(): void;
	makeActions(): void;
	onPlayerWalk(): void;
	updateStateSteps(state: any): void;
	showAddedStates(): void;
	showRemovedStates(): void;
	stepsForTurn(): number;
	turnEndOnMap(): void;
	checkFloorEffect(): void;
	executeFloorDamage(): void;
	basicFloorDamage(): number;
	maxFloorDamage(): /* !this.hp */ any;
	performMapDamage(): void;
	clearActions(): void;
	inputtingAction(): Game_Action;
	selectNextCommand(): boolean;
	selectPreviousCommand(): boolean;
	lastSkill(): void;
	lastMenuSkill(): void;
	setLastMenuSkill(skill: any): void;
	lastBattleSkill(): void;
	setLastBattleSkill(skill: any): void;
	lastCommandSymbol(): /* !this._lastCommandSymbol */ any;
	setLastCommandSymbol(symbol: string): void;
	testEscape(item: any): void;
	meetsUsableItemConditions(item: any): boolean;
	onEscapeFailure(): void;
	_actions: Array<Game_Action>;
	_speed: number;
	_result: Game_ActionResult;
	_actionState: string;
	_lastTargetIndex: number;
	_damagePopup: boolean;
	_motionType: string;
	_weaponImageId: number;
	_motionRefresh: boolean;
	_selected: boolean;
	_tpbState: string;
	_tpbChargeTime: number;
	_tpbCastTime: number;
	_tpbIdleTime: number;
	_tpbTurnCount: number;
	_tpbTurnEnd: boolean;
	_hp: number;
	_mp: number;
	_tp: number;
	_hidden: boolean;
	_paramPlus: Array<number>;
	_states: Array<number>;
	_stateTurns: /*no type*/{};
	_buffs: Array<number>;
	_buffTurns: Array<number>;
	_actorId: number;
	_nickname: string;
	_classId: number;
	_level: number;
	_characterName: string;
	_characterIndex: number;
	_faceName: string;
	_faceIndex: number;
	_battlerName: string;
	_exp: {};
	_skills: Array<any>;
	_equips: Array<Game_Item>;
	_actionInputIndex: number;
	_lastMenuSkill: Game_Item;
	_lastCommandSymbol: string;
	_stateSteps: /*no type*/{};
}

declare interface Game_Enemy extends Game_Battler
{
	new();
	initialize(enemyId: any, x: any, y: any): void;
	initMembers(): void;
	setup(enemyId: any, x: any, y: any): void;
	isEnemy(): boolean;
	friendsUnit(): Game_Troop;
	opponentsUnit(): Game_Party;
	index(): number;
	isBattleMember(): boolean;
	enemyId(): /* !this._enemyId */ any;
	enemy(): void;
	traitObjects(): Array<any>;
	paramBase(paramId: number): void;
	exp(): void;
	gold(): void;
	makeDropItems(): void;
	dropItemRate(): number;
	itemObject(kind: any, dataId: any): void;
	isSpriteVisible(): boolean;
	screenX(): /* !this._screenX */ any;
	screenY(): /* !this._screenY */ any;
	battlerName(): void;
	battlerHue(): void;
	originalName(): void;
	name(): string;
	isLetterEmpty(): boolean;
	setLetter(letter: string): void;
	setPlural(plural: boolean): void;
	performActionStart(action: any): void;
	performAction(action: any): void;
	performActionEnd(): void;
	performDamage(): void;
	performCollapse(): void;
	transform(enemyId: any): void;
	meetsCondition(action: any): boolean;
	meetsTurnCondition(param1: any, param2: any): boolean;
	meetsHpCondition(param1: any, param2: any): boolean;
	meetsMpCondition(param1: any, param2: any): boolean;
	meetsStateCondition(param: any): boolean;
	meetsPartyLevelCondition(param: any): boolean;
	meetsSwitchCondition(param: any): boolean;
	isActionValid(action: any): boolean;
	selectAction(actionList: any, ratingZero: number): void;
	selectAllActions(actionList: any): void;
	makeActions(): void;
	_actions: Array<Game_Action>;
	_speed: number;
	_actionState: string;
	_lastTargetIndex: number;
	_damagePopup: boolean;
	_effectType: string;
	_weaponImageId: number;
	_motionRefresh: boolean;
	_selected: boolean;
	_tpbState: string;
	_tpbChargeTime: number;
	_tpbCastTime: number;
	_tpbIdleTime: number;
	_tpbTurnCount: number;
	_tpbTurnEnd: boolean;
	_hp: number;
	_mp: number;
	_tp: number;
	_hidden: boolean;
	_enemyId: number;
	_letter: string;
	_plural: boolean;
	_screenX: number;
	_screenY: number;
}

declare interface Game_Actors
{
	new();
	initialize(): void;
	actor(actorId: number): /* !this._data.<i> */ any;
	_data: Array<Game_Actor>;
}

declare interface Game_Unit
{
	new();
	initialize(): void;
	inBattle(): /* !this._inBattle */ any;
	members(): Game_Unit.prototype.MembersRet;
	aliveMembers(): Array<Game_Enemy>;
	deadMembers(): Array<any>;
	movableMembers(): Game_Unit.prototype.MovableMembersRet;
	clearActions(): void;
	agility(): number;
	tgrSum(): void;
	randomTarget(): Game_Enemy;
	randomDeadTarget(): Game_Enemy;
	smoothTarget(index: number): Game_Enemy;
	smoothDeadTarget(index: number): Game_Enemy;
	clearResults(): void;
	onBattleStart(advantageous: boolean): void;
	onBattleEnd(): void;
	makeActions(): void;
	select(activeMember: Game_Actor): void;
	isAllDead(): boolean;
	substituteBattler(): void;
	tpbBaseSpeed(): number;
	tpbReferenceTime(): number;
	updateTpb(): void;
}

declare interface Game_Party extends Game_Unit
{
	new();
	initialize(): void;
	initAllItems(): void;
	exists(): boolean;
	size(): number;
	isEmpty(): boolean;
	members(): Array<Game_Actor>;
	allMembers(): Array<Game_Actor>;
	battleMembers(): Array<Game_Actor>;
	maxBattleMembers(): number;
	leader(): Game_Actor;
	removeInvalidMembers(): void;
	reviveBattleMembers(): void;
	items(): Game_Party.prototype.ItemsRet;
	weapons(): Game_Party.prototype.WeaponsRet;
	armors(): Game_Party.prototype.ArmorsRet;
	equipItems(): Array<any>;
	allItems(): Array<any>;
	itemContainer(item: any): /* !this._items */ any;
	setupStartingMembers(): void;
	name(): string;
	setupBattleTest(): void;
	setupBattleTestMembers(): void;
	setupBattleTestItems(): void;
	highestLevel(): number;
	addActor(actorId: any): void;
	removeActor(actorId: any): void;
	gold(): /* !this._gold */ any;
	gainGold(amount: number): void;
	loseGold(amount: number): void;
	maxGold(): number;
	steps(): /* !this._steps */ any;
	increaseSteps(): void;
	numItems(item: any): number;
	maxItems(): number;
	hasMaxItems(item: any): boolean;
	hasItem(item: any, includeEquip: any): boolean;
	isAnyMemberEquipped(item: any): boolean;
	gainItem(item: any, amount: number, includeEquip: any): void;
	discardMembersEquip(item: any, amount: number): void;
	loseItem(item: any, amount: number, includeEquip: any): void;
	consumeItem(item: any): void;
	canUse(item: any): boolean;
	canInput(): boolean;
	isAllDead(): boolean;
	onPlayerWalk(): void;
	menuActor(): Game_Actor;
	setMenuActor(actor: Game_Actor): void;
	makeMenuActorNext(): void;
	makeMenuActorPrevious(): void;
	targetActor(): Game_Actor;
	setTargetActor(actor: Game_Actor): void;
	lastItem(): void;
	setLastItem(item: any): void;
	swapOrder(index1: number, index2: number): void;
	charactersForSavefile(): Game_Party.prototype.CharactersForSavefileRet;
	facesForSavefile(): Game_Party.prototype.FacesForSavefileRet;
	partyAbility(abilityId: number): boolean;
	hasEncounterHalf(): boolean;
	hasEncounterNone(): boolean;
	hasCancelSurprise(): boolean;
	hasRaisePreemptive(): boolean;
	hasGoldDouble(): boolean;
	hasDropItemDouble(): boolean;
	ratePreemptive(troopAgi: number): number;
	rateSurprise(troopAgi: number): number;
	performVictory(): void;
	performEscape(): void;
	removeBattleStates(): void;
	requestMotionRefresh(): void;
	onEscapeFailure(): void;
	ABILITY_ENCOUNTER_HALF: number;
	ABILITY_ENCOUNTER_NONE: number;
	ABILITY_CANCEL_SURPRISE: number;
	ABILITY_RAISE_PREEMPTIVE: number;
	ABILITY_GOLD_DOUBLE: number;
	ABILITY_DROP_ITEM_DOUBLE: number;
	_inBattle: boolean;
	_gold: number;
	_steps: number;
	_menuActorId: number;
	_targetActorId: number;
	_actors: Array<any>;
	_items: {};
}

declare interface Game_Troop extends Game_Unit
{
	new();
	initialize(): void;
	isEventRunning(): boolean;
	updateInterpreter(): void;
	turnCount(): /* !this._turnCount */ any;
	members(): /* !this._enemies */ any;
	clear(): void;
	troop(): void;
	setup(troopId: number): void;
	makeUniqueNames(): void;
	updatePluralFlags(): void;
	letterTable(): Array<string>;
	enemyNames(): Game_Troop.prototype.EnemyNamesRet;
	meetsConditions(page: any): boolean;
	setupBattleEvent(): void;
	increaseTurn(): void;
	expTotal(): void;
	goldTotal(): number;
	goldRate(): number;
	makeDropItems(): Game_Troop.prototype.MakeDropItemsRet;
	isTpbTurnEnd(): boolean;
	LETTER_TABLE_HALF: Array<string>;
	LETTER_TABLE_FULL: Array<string>;
	_inBattle: boolean;
	_interpreter: Game_Interpreter;
	_troopId: number;
	_eventFlags: {};
	_enemies: Array</* Game_Troop.+Game_Enemy */ any>;
	_turnCount: number;
	_namesCount: {};
}

declare interface Game_Map
{
	new();
	initialize(): void;
	setup(mapId: number): void;
	isEventRunning(): boolean;
	tileWidth(): number;
	tileHeight(): number;
	mapId(): /* !this._mapId */ any;
	tilesetId(): /* !this._tilesetId */ any;
	displayX(): /* !this._displayX */ any;
	displayY(): /* !this._displayY */ any;
	parallaxName(): /* !this._parallaxName */ any;
	battleback1Name(): /* !this._battleback1Name */ any;
	battleback2Name(): /* !this._battleback2Name */ any;
	requestRefresh(): void;
	isNameDisplayEnabled(): /* !this._nameDisplay */ any;
	disableNameDisplay(): void;
	enableNameDisplay(): void;
	createVehicles(): void;
	refereshVehicles(): void;
	vehicles(): Game_Map.prototype.VehiclesRet;
	vehicle(type: string): Game_Vehicle;
	boat(): /* !this._vehicles.0 */ any;
	ship(): /* !this._vehicles.1 */ any;
	airship(): /* !this._vehicles.2 */ any;
	setupEvents(): void;
	events(): Game_Map.prototype.EventsRet;
	event(eventId: number): /* !this._events.<i> */ any;
	eraseEvent(eventId: number): void;
	autorunCommonEvents(): void;
	parallelCommonEvents(): void;
	setupScroll(): void;
	setupParallax(): void;
	setupBattleback(): void;
	setDisplayPos(x: number, y: number): void;
	parallaxOx(): number;
	parallaxOy(): number;
	tileset(): void;
	tilesetFlags(): Game_Map.prototype.TilesetFlagsRet;
	displayName(): void;
	width(): number;
	height(): number;
	data(): Array<any>;
	isLoopHorizontal(): boolean;
	isLoopVertical(): boolean;
	isDashDisabled(): void;
	encounterList(): void;
	encounterStep(): void;
	isOverworld(): boolean;
	screenTileX(): number;
	screenTileY(): number;
	adjustX(x: number): number;
	adjustY(y: number): number;
	roundX(x: number): number;
	roundY(y: number): number;
	xWithDirection(x: number, d: number): number;
	yWithDirection(y: number, d: number): number;
	roundXWithDirection(x: number, d: number): number;
	roundYWithDirection(y: number, d: number): number;
	deltaX(x1: number, x2: number): number;
	deltaY(y1: number, y2: number): number;
	distance(x1: number, y1: number, x2: number, y2: number): number;
	canvasToMapX(x: Game_Map.prototype.CanvasToMapX0): number;
	canvasToMapY(y: Game_Map.prototype.CanvasToMapY0): number;
	autoplay(): void;
	refreshIfNeeded(): void;
	refresh(): void;
	refreshTileEvents(): void;
	eventsXy(x: number, y: number): Array<Game_Event>;
	eventsXyNt(x: number, y: number): Array<Game_Event>;
	tileEventsXy(x: number, y: number): Array<Game_Event>;
	eventIdXy(x: number, y: number): number;
	scrollDown(distance: number): void;
	scrollLeft(distance: number): void;
	scrollRight(distance: number): void;
	scrollUp(distance: number): void;
	isValid(x: number, y: number): boolean;
	checkPassage(x: number, y: number, bit: number): boolean;
	tileId(x: number, y: number, z: number): number;
	layeredTiles(x: number, y: number): Game_Map.prototype.LayeredTilesRet;
	allTiles(x: number, y: number): Game_Map.prototype.AllTilesRet;
	autotileType(x: any, y: any, z: any): number;
	isPassable(x: number, y: number, d: number): boolean;
	isBoatPassable(x: number, y: number): boolean;
	isShipPassable(x: number, y: number): boolean;
	isAirshipLandOk(x: any, y: any): boolean;
	checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;
	isLadder(x: number, y: number): boolean;
	isBush(x: number, y: number): boolean;
	isCounter(x: number, y: number): boolean;
	isDamageFloor(x: any, y: any): boolean;
	terrainTag(x: number, y: number): number;
	regionId(x: number, y: number): number;
	startScroll(direction: any, distance: any, speed: any): void;
	isScrolling(): boolean;
	update(sceneActive: any): void;
	updateScroll(): void;
	scrollDistance(): number;
	doScroll(direction: number, distance: number): void;
	updateEvents(): void;
	updateVehicles(): void;
	updateParallax(): void;
	changeTileset(tilesetId: any): void;
	changeBattleback(battleback1Name: any, battleback2Name: any): void;
	changeParallax(name: any, loopX: any, loopY: any, sx: any, sy: any): void;
	updateInterpreter(): void;
	unlockEvent(eventId: number): void;
	setupStartingEvent(): boolean;
	setupTestEvent(): boolean;
	setupStartingMapEvent(): boolean;
	setupAutorunCommonEvent(): boolean;
	isAnyEventStarting(): boolean;
	_mapId: number;
	_tilesetId: number;
	_events: Array</* Game_Map._eventsI */ any>;
	_commonEvents: Array</* Game_Map.+Game_CommonEvent */ any>;
	_vehicles: Array</* Game_Map.+Game_Vehicle */ any>;
	_displayX: number;
	_displayY: number;
	_nameDisplay: boolean;
	_scrollDirection: number;
	_scrollRest: number;
	_scrollSpeed: number;
	_parallaxName: string;
	_parallaxZero: boolean;
	_parallaxLoopX: boolean;
	_parallaxLoopY: boolean;
	_parallaxSx: number;
	_parallaxSy: number;
	_parallaxX: number;
	_parallaxY: number;
	_needsRefresh: boolean;
}

declare interface Game_CommonEvent
{
	new();
	initialize(commonEventId: any): void;
	event(): void;
	list(): void;
	refresh(): void;
	isActive(): boolean;
	update(): void;
}

declare interface Game_CharacterBase
{
	new();
	//initialize(): void;
	initMembers(): void;
	pos(x: number, y: number): boolean;
	posNt(x: number, y: number): boolean;
	moveSpeed(): /* !this._moveSpeed */ any;
	setMoveSpeed(moveSpeed: number): void;
	moveFrequency(): /* !this._moveFrequency */ any;
	setMoveFrequency(moveFrequency: any): void;
	opacity(): /* !this._opacity */ any;
	setOpacity(opacity: number): void;
	blendMode(): /* !this._blendMode */ any;
	setBlendMode(blendMode: number): void;
	isNormalPriority(): boolean;
	setPriorityType(priorityType: number): void;
	isMoving(): boolean;
	isJumping(): boolean;
	jumpHeight(): number;
	isStopping(): boolean;
	checkStop(threshold: number): boolean;
	resetStopCount(): void;
	realMoveSpeed(): number;
	distancePerFrame(): number;
	isDashing(): boolean;
	isDebugThrough(): boolean;
	straighten(): void;
	reverseDir(d: number): number;
	canPass(x: number, y: number, d: number): boolean;
	canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
	isMapPassable(x: number, y: number, d: number): boolean;
	isCollidedWithCharacters(x: number, y: number): boolean;
	isCollidedWithEvents(x: number, y: number): boolean;
	isCollidedWithVehicles(x: number, y: number): boolean;
	setPosition(x: number, y: number): void;
	copyPosition(character: Game_Player): void;
	locate(x: number, y: number): void;
	direction(): /* !this._direction */ any;
	setDirection(d: number): void;
	isTile(): boolean;
	isObjectCharacter(): /* !this._isObjectCharacter */ any;
	shiftY(): number;
	scrolledX(): number;
	scrolledY(): number;
	screenX(): number;
	screenY(): number;
	screenZ(): number;
	isNearTheScreen(): boolean;
	//update(): void;
	updateStop(): void;
	updateJump(): void;
	updateMove(): void;
	updateAnimation(): void;
	animationWait(): number;
	updateAnimationCount(): void;
	updatePattern(): void;
	maxPattern(): number;
	pattern(): /* !this._pattern */ any;
	setPattern(pattern: number): void;
	isOriginalPattern(): boolean;
	resetPattern(): void;
	refreshBushDepth(): void;
	isOnLadder(): boolean;
	isOnBush(): boolean;
	terrainTag(): number;
	regionId(): number;
	increaseSteps(): void;
	tileId(): /* !this._tileId */ any;
	characterName(): /* !this._characterName */ any;
	characterIndex(): /* !this._characterIndex */ any;
	setImage(characterName: string, characterIndex: number): void;
	setTileImage(tileId: any): void;
	checkEventTriggerTouchFront(d: number): void;
	//checkEventTriggerTouch(): boolean;
	isMovementSucceeded(): /* !this._movementSuccess */ any;
	setMovementSuccess(success: boolean): void;
	moveStraight(d: number): void;
	moveDiagonally(horz: number, vert: number): void;
	jump(xPlus: number, yPlus: number): void;
	hasWalkAnime(): /* !this._walkAnime */ any;
	setWalkAnime(walkAnime: boolean): void;
	hasStepAnime(): /* !this._stepAnime */ any;
	setStepAnime(stepAnime: boolean): void;
	isDirectionFixed(): /* !this._directionFix */ any;
	setDirectionFix(directionFix: boolean): void;
	isThrough(): /* !this._through */ any;
	setThrough(through: boolean): void;
	isTransparent(): /* !this._transparent */ any;
	bushDepth(): /* !this._bushDepth */ any;
	setTransparent(transparent: boolean): void;
	startAnimation(): void;
	startBalloon(): void;
	isAnimationPlaying(): /* !this._animationPlaying */ any;
	isBalloonPlaying(): /* !this._balloonPlaying */ any;
	endAnimation(): void;
	endBalloon(): void;
}

declare interface Game_Character extends Game_CharacterBase
{
	new();
	//initialize(): void;
	initMembers(): void;
	memorizeMoveRoute(): void;
	restoreMoveRoute(): void;
	isMoveRouteForcing(): /* !this._moveRouteForcing */ any;
	setMoveRoute(moveRoute: any): void;
	forceMoveRoute(moveRoute: any): void;
	updateStop(): void;
	updateRoutineMove(): void;
	processMoveCommand(command: any): void;
	deltaXFrom(x: number): number;
	deltaYFrom(y: number): number;
	moveRandom(): void;
	moveTowardCharacter(character: Game_Player): void;
	moveAwayFromCharacter(character: Game_Player): void;
	turnTowardCharacter(character: Game_Player): void;
	turnAwayFromCharacter(character: Game_Player): void;
	turnTowardPlayer(): void;
	turnAwayFromPlayer(): void;
	moveTowardPlayer(): void;
	moveAwayFromPlayer(): void;
	moveForward(): void;
	moveBackward(): void;
	processRouteEnd(): void;
	advanceMoveRouteIndex(): void;
	turnRight90(): void;
	turnLeft90(): void;
	turn180(): void;
	turnRightOrLeft90(): void;
	turnRandom(): void;
	swap(character: Game_Player): void;
	findDirectionTo(goalX: number, goalY: number): number;
	searchLimit(): number;
	ROUTE_END: number;
	ROUTE_MOVE_DOWN: number;
	ROUTE_MOVE_LEFT: number;
	ROUTE_MOVE_RIGHT: number;
	ROUTE_MOVE_UP: number;
	ROUTE_MOVE_LOWER_L: number;
	ROUTE_MOVE_LOWER_R: number;
	ROUTE_MOVE_UPPER_L: number;
	ROUTE_MOVE_UPPER_R: number;
	ROUTE_MOVE_RANDOM: number;
	ROUTE_MOVE_TOWARD: number;
	ROUTE_MOVE_AWAY: number;
	ROUTE_MOVE_FORWARD: number;
	ROUTE_MOVE_BACKWARD: number;
	ROUTE_JUMP: number;
	ROUTE_WAIT: number;
	ROUTE_TURN_DOWN: number;
	ROUTE_TURN_LEFT: number;
	ROUTE_TURN_RIGHT: number;
	ROUTE_TURN_UP: number;
	ROUTE_TURN_90D_R: number;
	ROUTE_TURN_90D_L: number;
	ROUTE_TURN_180D: number;
	ROUTE_TURN_90D_R_L: number;
	ROUTE_TURN_RANDOM: number;
	ROUTE_TURN_TOWARD: number;
	ROUTE_TURN_AWAY: number;
	ROUTE_SWITCH_ON: number;
	ROUTE_SWITCH_OFF: number;
	ROUTE_CHANGE_SPEED: number;
	ROUTE_CHANGE_FREQ: number;
	ROUTE_WALK_ANIME_ON: number;
	ROUTE_WALK_ANIME_OFF: number;
	ROUTE_STEP_ANIME_ON: number;
	ROUTE_STEP_ANIME_OFF: number;
	ROUTE_DIR_FIX_ON: number;
	ROUTE_DIR_FIX_OFF: number;
	ROUTE_THROUGH_ON: number;
	ROUTE_THROUGH_OFF: number;
	ROUTE_TRANSPARENT_ON: number;
	ROUTE_TRANSPARENT_OFF: number;
	ROUTE_CHANGE_IMAGE: number;
	ROUTE_CHANGE_OPACITY: number;
	ROUTE_CHANGE_BLEND_MODE: number;
	ROUTE_PLAY_SE: number;
	ROUTE_SCRIPT: number;
}

declare interface Game_Player extends Game_Character
{
	new();
	initialize(): void;
	initMembers(): void;
	clearTransferInfo(): void;
	followers(): /* !this._followers */ any;
	refresh(): void;
	isStopping(): boolean;
	reserveTransfer(mapId: number, x: number, y: number, d: number, fadeType: number): void;
	setupForNewGame(): void;
	requestMapReload(): void;
	isTransferring(): /* !this._transferring */ any;
	newMapId(): /* !this._newMapId */ any;
	fadeType(): /* !this._fadeType */ any;
	performTransfer(): void;
	isMapPassable(x: number, y: number, d: number): boolean;
	vehicle(): Game_Vehicle;
	isInBoat(): boolean;
	isInShip(): boolean;
	isInAirship(): boolean;
	isInVehicle(): boolean;
	isNormal(): boolean;
	isDashing(): /* !this._dashing */ any;
	isDebugThrough(): boolean;
	isCollided(x: any, y: any): boolean;
	centerX(): number;
	centerY(): number;
	center(x: number, y: number): void;
	locate(x: number, y: number): void;
	increaseSteps(): void;
	makeEncounterCount(): void;
	makeEncounterTroopId(): number;
	meetsEncounterConditions(encounter: any): boolean;
	executeEncounter(): boolean;
	startMapEvent(x: number, y: number, triggers: Game_Player.prototype.StartMapEvent2, normal: boolean): void;
	moveByInput(): void;
	canMove(): boolean;
	getInputDirection(): void;
	executeMove(direction: number): void;
	update(sceneActive: boolean): void;
	updateDashing(): void;
	isDashButtonPressed(): boolean;
	updateScroll(lastScrolledX: number, lastScrolledY: number): void;
	updateVehicle(): void;
	updateVehicleGetOn(): void;
	updateVehicleGetOff(): void;
	updateNonmoving(wasMoving: boolean, sceneActive: boolean): void;
	triggerAction(): boolean;
	triggerButtonAction(): boolean;
	triggerTouchAction(): boolean;
	triggerTouchActionD1(x1: any, y1: any): boolean;
	triggerTouchActionD2(x2: number, y2: number): boolean;
	triggerTouchActionD3(x2: number, y2: number): boolean;
	updateEncounterCount(): void;
	canEncounter(): boolean;
	encounterProgressValue(): number;
	checkEventTriggerHere(triggers: Game_Player.prototype.CheckEventTriggerHere0): void;
	checkEventTriggerThere(triggers: Game_Player.prototype.CheckEventTriggerThere0): void;
	checkEventTriggerTouch(x: any, y: any): void;
	canStartLocalEvents(): boolean;
	getOnOffVehicle(): boolean;
	getOnVehicle(): /* !this._vehicleGettingOn */ any;
	getOffVehicle(): /* !this._vehicleGettingOff */ any;
	forceMoveForward(): void;
	isOnDamageFloor(): boolean;
	moveStraight(d: any): void;
	moveDiagonally(horz: any, vert: any): void;
	jump(xPlus: any, yPlus: any): void;
	showFollowers(): void;
	hideFollowers(): void;
	gatherFollowers(): void;
	areFollowersGathering(): boolean;
	areFollowersGathered(): boolean;
	_transparent: boolean;
	_moveRouteForcing: boolean;
	_moveRouteIndex: number;
	_originalMoveRouteIndex: number;
	_waitCount: number;
	_x: number;
	_y: number;
	_realX: number;
	_realY: number;
	_moveSpeed: number;
	_moveFrequency: number;
	_opacity: number;
	_blendMode: number;
	_direction: number;
	_pattern: number;
	_priorityType: number;
	_tileId: number;
	_characterName: string;
	_characterIndex: number;
	_isObjectCharacter: boolean;
	_walkAnime: boolean;
	_stepAnime: boolean;
	_directionFix: boolean;
	_through: boolean;
	_bushDepth: number;
	_animationId: number;
	_balloonId: number;
	_animationPlaying: boolean;
	_balloonPlaying: boolean;
	_animationCount: number;
	_stopCount: number;
	_jumpCount: number;
	_jumpPeak: number;
	_movementSuccess: boolean;
	_vehicleType: string;
	_vehicleGettingOn: boolean;
	_vehicleGettingOff: boolean;
	_dashing: boolean;
	_needsMapReload: boolean;
	_transferring: boolean;
	_newMapId: number;
	_newX: number;
	_newY: number;
	_newDirection: number;
	_fadeType: number;
	_followers: Game_Followers;
	_encounterCount: number;
}

declare interface Game_Follower extends Game_Character
{
	new();
	initialize(memberIndex: any): void;
	refresh(): void;
	actor(): Game_Actor;
	isVisible(): Game_Actor;
	isVisible();
	isGathered(): boolean;
	update(): void;
	chaseCharacter(character: Game_Player): void;
	_through: boolean;
	_tileId: number;
	_characterName: string;
	_characterIndex: number;
	_moveSpeed: number;
	_opacity: number;
	_blendMode: number;
	_walkAnime: boolean;
	_stepAnime: boolean;
	_directionFix: boolean;
	_realX: number;
	_realY: number;
	_x: number;
	_y: number;
	_animationCount: number;
	_bushDepth: number;
	_pattern: number;
	_movementSuccess: boolean;
	_waitCount: number;
	_moveRouteIndex: number;
	_moveRouteForcing: boolean;
	_jumpPeak: number;
	_jumpCount: number;
	_direction: number;
	_stopCount: number;
}

declare interface Game_Followers
{
	new();
	initialize(): void;
	setup(): void;
	isVisible(): /* !this._visible */ any;
	show(): void;
	hide(): void;
	data(): Array<number>;
	reverseData(): void;
	follower(index: any): /* !this._data.<i> */ any;
	refresh(): void;
	update(): void;
	updateMove(): void;
	jumpAll(): void;
	synchronize(x: number, y: number, d: number): void;
	gather(): void;
	areGathering(): /* !this._gathering */ any;
	visibleFollowers(): Game_Followers.prototype.VisibleFollowersRet;
	areMoving(): boolean;
	areGathered(): boolean;
	isSomeoneCollided(x: any, y: any): boolean;
	_visible: boolean;
	_gathering: boolean;
	_data: Array</* Game_Followers.+Game_Follower */ any>;
}

declare interface Game_Vehicle extends Game_Character
{
	new();
	initialize(type: any): void;
	initMembers(): void;
	isBoat(): boolean;
	isShip(): boolean;
	isAirship(): boolean;
	resetDirection(): void;
	initMoveSpeed(): void;
	vehicle(): void;
	loadSystemSettings(): void;
	refresh(): void;
	setLocation(mapId: number, x: number, y: number): void;
	pos(x: any, y: any): boolean;
	isMapPassable(x: any, y: any, d: any): boolean;
	getOn(): void;
	getOff(): void;
	setBgm(bgm: any): void;
	playBgm(): void;
	syncWithPlayer(): void;
	screenY(): number;
	shadowX(): number;
	shadowY(): number;
	shadowOpacity(): number;
	canMove(): boolean;
	update(): void;
	updateAirship(): void;
	updateAirshipAltitude(): void;
	maxAltitude(): number;
	isLowest(): boolean;
	isHighest(): boolean;
	isTakeoffOk(): boolean;
	isLandOk(x: any, y: any, d: number): boolean;
	_moveRouteForcing: boolean;
	_moveRouteIndex: number;
	_originalMoveRouteIndex: number;
	_waitCount: number;
	_x: number;
	_y: number;
	_realX: number;
	_realY: number;
	_moveSpeed: number;
	_moveFrequency: number;
	_opacity: number;
	_blendMode: number;
	_direction: number;
	_pattern: number;
	_priorityType: number;
	_tileId: number;
	_characterName: string;
	_characterIndex: number;
	_walkAnime: boolean;
	_stepAnime: boolean;
	_directionFix: boolean;
	_through: boolean;
	_transparent: boolean;
	_bushDepth: number;
	_animationId: number;
	_balloonId: number;
	_animationPlaying: boolean;
	_balloonPlaying: boolean;
	_animationCount: number;
	_stopCount: number;
	_jumpCount: number;
	_jumpPeak: number;
	_movementSuccess: boolean;
	_type: string;
	_mapId: number;
	_altitude: number;
	_driving: boolean;
}

declare interface Game_Event extends Game_Character
{
	new();
	initialize(mapId: any, eventId: any): void;
	initMembers(): void;
	eventId(): /* !this._eventId */ any;
	event(): void;
	page(): void;
	list(): void;
	isCollidedWithCharacters(x: any, y: any): boolean;
	isCollidedWithEvents(x: any, y: any): boolean;
	isCollidedWithPlayerCharacters(x: any, y: any): boolean;
	lock(): void;
	unlock(): void;
	updateStop(): void;
	updateSelfMovement(): void;
	stopCountThreshold(): number;
	moveTypeRandom(): void;
	moveTypeTowardPlayer(): void;
	isNearThePlayer(): boolean;
	moveTypeCustom(): void;
	isStarting(): /* !this._starting */ any;
	clearStartingFlag(): void;
	isTriggerIn(triggers: Game_Event.prototype.IsTriggerIn0): boolean;
	start(): void;
	erase(): void;
	refresh(): void;
	findProperPageIndex(): number;
	meetsConditions(page: any): boolean;
	setupPage(): void;
	clearPageSettings(): void;
	setupPageSettings(): void;
	isOriginalPattern(): boolean;
	resetPattern(): void;
	checkEventTriggerTouch(x: any, y: any): void;
	checkEventTriggerAuto(): void;
	update(): void;
	updateParallel(): void;
	locate(x: number, y: number): void;
	forceMoveRoute(moveRoute: any): void;
	_moveRouteForcing: boolean;
	_moveRouteIndex: number;
	_originalMoveRouteIndex: number;
	_waitCount: number;
	_x: number;
	_y: number;
	_realX: number;
	_realY: number;
	_moveSpeed: number;
	_moveFrequency: number;
	_opacity: number;
	_blendMode: number;
	_direction: number;
	_pattern: number;
	_priorityType: number;
	_tileId: number;
	_characterName: string;
	_characterIndex: number;
	_isObjectCharacter: boolean;
	_walkAnime: boolean;
	_stepAnime: boolean;
	_directionFix: boolean;
	_through: boolean;
	_transparent: boolean;
	_bushDepth: number;
	_animationId: number;
	_balloonId: number;
	_animationPlaying: boolean;
	_balloonPlaying: boolean;
	_animationCount: number;
	_stopCount: number;
	_jumpCount: number;
	_jumpPeak: number;
	_movementSuccess: boolean;
	_moveType: number;
	_trigger: number;
	_starting: boolean;
	_erased: boolean;
	_pageIndex: number;
	_originalPattern: number;
	_originalDirection: number;
	_prelockDirection: number;
	_locked: boolean;
}

declare interface Game_Interpreter
{
	new();
	initialize(depth: any): void;
	checkOverflow(): void;
	clear(): void;
	setup(list: any, eventId: number): void;
	loadImages(): void;
	eventId(): /* !this._eventId */ any;
	isOnCurrentMap(): boolean;
	setupReservedCommonEvent(): boolean;
	isRunning(): boolean;
	update(): void;
	updateChild(): boolean;
	updateWait(): boolean;
	updateWaitCount(): boolean;
	updateWaitMode(): boolean;
	setWaitMode(waitMode: string): void;
	wait(duration: number): void;
	fadeSpeed(): number;
	executeCommand(): boolean;
	checkFreeze(): boolean;
	terminate(): void;
	skipBranch(): void;
	currentCommand(): /* !this._list.<i> */ any;
	nextEventCode(): number;
	iterateActorId(param: number, callback: Game_Interpreter.prototype.IterateActorId1): void;
	iterateActorEx(param1: any, param2: any, callback: Game_Interpreter.prototype.IterateActorEx2): void;
	iterateActorIndex(param: any, callback: any): void;
	iterateEnemyIndex(param: number, callback: () => void): void;
	iterateBattler(param1: any, param2: any, callback: () => void): void;
	character(param: number): Game_Player;
	operateValue(operation: any, operandType: any, operand: any): any;
	changeHp(target: Game_Actor, value: number, allowDeath: any): void;
	command101(params: any): boolean;
	command102(params: any): boolean;
	setupChoices(params: any): void;
	command402(params: any): boolean;
	command403(): boolean;
	command103(params: any): boolean;
	setupNumInput(params: any): void;
	command104(params: any): boolean;
	setupItemChoice(params: any): void;
	command105(params: any): boolean;
	command108(params: any): boolean;
	command111(params: any): boolean;
	command411(): boolean;
	command112(): boolean;
	command413(): boolean;
	command113(): boolean;
	command115(): boolean;
	command117(params: any): boolean;
	setupChild(list: any, eventId: number): void;
	command118(): boolean;
	command119(params: any): boolean;
	jumpTo(index: number): void;
	command121(params: any): boolean;
	command122(params: any): boolean;
	gameDataOperand(type: any, param1: any, param2: any): number;
	operateVariable(variableId: any, operationType: any, value: number): void;
	command123(params: any): boolean;
	command124(params: any): boolean;
	command125(params: any): boolean;
	command126(params: any): boolean;
	command127(params: any): boolean;
	command128(params: any): boolean;
	command129(params: any): boolean;
	command132(params: any): boolean;
	command133(params: any): boolean;
	command134(params: any): boolean;
	command135(params: any): boolean;
	command136(params: any): boolean;
	command137(params: any): boolean;
	command138(params: any): boolean;
	command139(params: any): boolean;
	command140(params: any): boolean;
	command201(params: any): boolean;
	command202(params: any): boolean;
	command203(params: any): boolean;
	command204(params: any): boolean;
	command205(params: any): boolean;
	command206(): boolean;
	command211(params: any): boolean;
	command212(params: any): boolean;
	command213(params: any): boolean;
	command214(): boolean;
	command216(params: any): boolean;
	command217(): boolean;
	command221(): boolean;
	command222(): boolean;
	command223(params: any): boolean;
	command224(params: any): boolean;
	command225(params: any): boolean;
	command230(params: any): boolean;
	command231(params: any): boolean;
	command232(params: any): boolean;
	picturePoint(params: any): Game_Interpreter.prototype.PicturePointRet;
	command233(params: any): boolean;
	command234(params: any): boolean;
	command235(params: any): boolean;
	command236(params: any): boolean;
	command241(params: any): boolean;
	command242(params: any): boolean;
	command243(): boolean;
	command244(): boolean;
	command245(params: any): boolean;
	command246(params: any): boolean;
	command249(params: any): boolean;
	command250(params: any): boolean;
	command251(): boolean;
	command261(params: any): boolean;
	videoFileExt(): string;
	command281(params: any): boolean;
	command282(params: any): boolean;
	command283(params: any): boolean;
	command284(params: any): boolean;
	command285(params: any): boolean;
	command301(params: any): boolean;
	command601(): boolean;
	command602(): boolean;
	command603(): boolean;
	command302(params: any): boolean;
	command303(params: any): boolean;
	command311(params: any): boolean;
	command312(params: any): boolean;
	command326(params: any): boolean;
	command313(params: any): boolean;
	command314(params: any): boolean;
	command315(params: any): boolean;
	command316(params: any): boolean;
	command317(params: any): boolean;
	command318(params: any): boolean;
	command319(params: any): boolean;
	command320(params: any): boolean;
	command321(params: any): boolean;
	command322(params: any): boolean;
	command323(params: any): boolean;
	command324(params: any): boolean;
	command325(params: any): boolean;
	command331(params: any): boolean;
	command332(params: any): boolean;
	command342(params: any): boolean;
	command333(params: any): boolean;
	command334(params: any): boolean;
	command335(params: any): boolean;
	command336(params: any): boolean;
	command337(params: any): boolean;
	command339(params: any): boolean;
	command340(): boolean;
	command351(): boolean;
	command352(): boolean;
	command353(): boolean;
	command354(): boolean;
	command355(): boolean;
	command356(params: any): boolean;
	pluginCommand(): void;
	command357(params: any): boolean;
	_depth: number;
	_branch: /*no type*/{};
	_indent: number;
	_frameCount: number;
	_freezeChecker: number;
	_mapId: number;
	_eventId: number;
	_index: number;
	_waitCount: number;
	_waitMode: string;
	_characterId: number;
}
