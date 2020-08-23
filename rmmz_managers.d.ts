// Type definitions for rmmz_managers.js

declare namespace DataManager
{
	// DataManager._globalInfo.<i>
	interface _globalInfoI
	{
		characters: Array<Array</* string,number */ any>>;
		faces: Array<Array</* string,number */ any>>;
		playtime: string;
		timestamp: number;
	}
}

declare namespace DataManager
{
	// DataManager._errors.<i>
	interface _errorsI
	{
		name: string;
		src: string;
		url: string;
	}
}

declare namespace DataManager
{
	// DataManager._databaseFiles.<i>
	interface _databaseFilesI
	{
		name: string;
		src: string;
	}
}

declare namespace DataManager
{
	// DataManager.onXhrLoad.!0
	interface OnXhrLoad0
	{
		onload(): void;
		onerror(): void;
	}
}

declare namespace DataManager
{
	// DataManager.onLoad.!0
	interface OnLoad0
	{
		meta: /*no type*/{};
	}
}

declare namespace DataManager
{
	// DataManager.makeSaveContents.!ret
	interface MakeSaveContentsRet
	{
		system: /* $gameSystem */ any;
		screen: /* $gameScreen */ any;
		timer: /* $gameTimer */ any;
		switches: /* $gameSwitches */ any;
		variables: /* $gameVariables */ any;
		selfSwitches: /* $gameSelfSwitches */ any;
		actors: /* $gameActors */ any;
		party: /* $gameParty */ any;
		map: /* $gameMap */ any;
		player: /* $gamePlayer */ any;
	}
}

declare namespace ConfigManager
{
	// ConfigManager.makeData.!ret
	interface MakeDataRet
	{
		alwaysDash: boolean;
		commandRemember: boolean;
		touchUI: boolean;
		bgmVolume: number;
		bgsVolume: number;
		meVolume: number;
		seVolume: number;
	}
}

declare namespace AudioManager
{
	// AudioManager.playBgm.!0
	interface PlayBgm0
	{
		pos: number;
	}
}

declare namespace AudioManager
{
	// AudioManager.playBgs.!0
	interface PlayBgs0
	{
		pos: number;
	}
}

declare namespace AudioManager
{
	// AudioManager.makeEmptyAudioObject.!ret
	interface MakeEmptyAudioObjectRet
	{
		name: string;
		volume: number;
		pitch: number;
	}
}

declare namespace TextManager
{
	// TextManager.getter.!ret
	interface GetterRet
	{
		get(): void;
		configurable: boolean;
	}
}

declare namespace SceneManager
{
	// SceneManager.onError.!0
	interface OnError0
	{
	}
}

declare interface DataManager
{
	new(): DataManager;
}

declare namespace DataManager
{
	export var _globalInfo: Array</* DataManager._globalInfoI */ any>;
	export var _errors: Array</* DataManager._errorsI */ any>;
	export var _databaseFiles: Array</* DataManager._databaseFilesI */ any>;
	function loadGlobalInfo(): void;
	function removeInvalidGlobalInfo(): void;
	function saveGlobalInfo(): void;
	function isGlobalInfoLoaded(): boolean;
	function loadDatabase(): void;
	function loadDataFile(name: string, src: string): void;
	function onXhrLoad(xhr: DataManager.OnXhrLoad0, name: string, src: string, url: string): void;
	function onXhrError(name: string, src: string, url: string): void;
	function isDatabaseLoaded(): boolean;
	function loadMapData(mapId: number): void;
	function makeEmptyMap(): void;
	function isMapLoaded(): boolean;
	function onLoad(object: DataManager.OnLoad0): void;
	function isMapObject(object: any): boolean;
	function extractArrayMetadata(array: any): void;
	function extractMetadata(data: /* DataManager.onLoad.!0 */ any): void;
	function checkError(): void;
	function isBattleTest(): boolean;
	function isEventTest(): boolean;
	function isSkill(item: any): any;
	function isItem(item: any): any;
	function isWeapon(item: any): any;
	function isArmor(item: any): any;
	function createGameObjects(): void;
	function setupNewGame(): void;
	function setupBattleTest(): void;
	function setupEventTest(): void;
	function isAnySavefileExists(): boolean;
	function latestSavefileId(): number;
	function earliestSavefileId(): number;
	function emptySavefileId(): number;
	function loadAllSavefileImages(): void;
	function loadSavefileImages(info: /* DataManager._globalInfo.<i> */ any): void;
	function maxSavefiles(): number;
	function savefileInfo(savefileId: number): /* !this._globalInfo.<i> */ any;
	function savefileExists(savefileId: number): boolean;
	function saveGame(savefileId: number): /* DataManager.+Promise */ any;
	function loadGame(savefileId: any): /* DataManager.+Promise */ any;
	function makeSavename(savefileId: number): string;
	function selectSavefileForNewGame(): void;
	function makeSavefileInfo(): /* DataManager._globalInfo.<i> */ any;
	function makeSaveContents(): DataManager.MakeSaveContentsRet;
	function extractSaveContents(contents: any): void;
	function correctDataErrors(): void;
}

declare interface ConfigManager
{
	new(): ConfigManager;
}

declare namespace ConfigManager
{
	export var alwaysDash: boolean;
	export var commandRemember: boolean;
	export var touchUI: boolean;
	export var _isLoaded: boolean;
	export var bgmVolume: number;
	export var bgsVolume: number;
	export var meVolume: number;
	export var seVolume: number;
	function load(): void;
	function save(): void;
	function isLoaded(): boolean;
	function makeData(): ConfigManager.MakeDataRet;
	function applyData(config: any): void;
	function readFlag(config: any, name: string, defaultValue: boolean): boolean;
	function readVolume(config: any, name: string): number;
}

declare interface StorageManager
{
	new(): StorageManager;
}

declare namespace StorageManager
{
	export var _forageKeys: Array<any>;
	export var _forageKeysUpdated: boolean;
	function isLocalMode(): boolean;
	function saveObject(saveName: string, object: any): /* StorageManager.+Promise */ any;
	function loadObject(saveName: string): /* StorageManager.+Promise */ any;
	function objectToJson(object: any): /* StorageManager.+Promise */ any;
	function jsonToObject(json: string): /* StorageManager.+Promise */ any;
	function jsonToZip(json: any): /* StorageManager.+Promise */ any;
	function zipToJson(zip: any): /* StorageManager.+Promise */ any;
	function saveZip(saveName: string, zip: any): /* StorageManager.+Promise */ any;
	function loadZip(saveName: string): /* StorageManager.+Promise */ any;
	function exists(saveName: string): boolean;
	function remove(saveName: any): void;
	function saveToLocalFile(saveName: string, zip: any): /* StorageManager.+Promise */ any;
	function loadFromLocalFile(saveName: string): /* StorageManager.+Promise */ any;
	function localFileExists(saveName: string): void;
	function removeLocalFile(saveName: any): void;
	function saveToForage(saveName: string, zip: any): void;
	function loadFromForage(saveName: string): void;
	function forageExists(saveName: string): boolean;
	function removeForage(saveName: any): void;
	function updateForageKeys(): void;
	function forageKeysUpdated(): boolean;
	function fsMkdir(path: string): void;
	function fsRename(oldPath: string, newPath: string): void;
	function fsUnlink(path: string): void;
	function fsReadFile(path: string): null;
	function fsWriteFile(path: string, data: string): void;
	function fileDirectoryPath(): void;
	function filePath(saveName: string): string;
	function forageKey(saveName: string): string;
	function forageTestKey(): string;
}

declare interface FontManager
{
	new(): FontManager;
}

declare namespace FontManager
{
	var _urls: {
	}
	var _states: {
	}
	function load(family: string, filename: string): void;
	function isReady(): boolean;
	function startLoading(family: string, url: string): void;
	function throwLoadError(family: any): void;
	function makeUrl(filename: string): string;
}

declare interface ImageManager
{
	new(): ImageManager;
}

declare namespace ImageManager
{
	export var iconWidth: number;
	export var iconHeight: number;
	export var faceWidth: number;
	export var faceHeight: number;
	var _cache: {
	}
	var _system: {
	}
	export var _emptyBitmap: Bitmap;
	function loadAnimation(filename: any): Bitmap;
	function loadBattleback1(filename: string): Bitmap;
	function loadBattleback2(filename: string): Bitmap;
	function loadEnemy(filename: string): Bitmap;
	function loadCharacter(filename: string): Bitmap;
	function loadFace(filename: string): Bitmap;
	function loadParallax(filename: string): Bitmap;
	function loadPicture(filename: any): Bitmap;
	function loadSvActor(filename: any): Bitmap;
	function loadSvEnemy(filename: any): Bitmap;
	function loadSystem(filename: string): Bitmap;
	function loadTileset(filename: string): Bitmap;
	function loadTitle1(filename: string): Bitmap;
	function loadTitle2(filename: string): Bitmap;
	function loadBitmap(folder: string, filename: string): Bitmap;
	function loadBitmapFromUrl(url: string): Bitmap;
	function clear(): void;
	function isReady(): boolean;
	function throwLoadError(bitmap: Bitmap): void;
	function isObjectCharacter(filename: string): Array<string>;
	function isObjectCharacter();
	function isBigCharacter(filename: string): Array<string>;
	function isZeroParallax(filename: string): boolean;
}

declare interface EffectManager
{
	new(): EffectManager;
}

declare namespace EffectManager
{
	export var _cache: /*no type*/{};
	export var _errorUrls: Array<string>;
	function load(filename: any): /* !this._cache.<i> */ any;
	function startLoading(url: string): void;
	function clear(): void;
	function onLoad(): void;
	function onError(url: string): void;
	function makeUrl(filename: string): string;
	function checkErrors(): void;
	function throwLoadError(url: string): void;
	function isReady(): boolean;
}

declare interface AudioManager
{
	new(): AudioManager;
}

declare namespace AudioManager
{
	export var _bgmVolume: number;
	export var _bgsVolume: number;
	export var _meVolume: number;
	export var _seVolume: number;
	var _currentBgm: {
		pos: number;
	}
	var _currentBgs: {
		pos: number;
	}
	export var _bgmBuffer: WebAudio;
	export var _seBuffers: Array<WebAudio>;
	export var _staticBuffers: Array<WebAudio>;
	export var _replayFadeTime: number;
	export var _path: string;
	function playBgm(bgm: AudioManager.PlayBgm0, pos: number): void;
	function replayBgm(bgm: /* BattleManager._mapBgm */ any): void;
	function isCurrentBgm(bgm: /* BattleManager._mapBgm */ any): /* !this._currentBgm */ any;
	function updateBgmParameters(bgm: /* BattleManager._mapBgm */ any): void;
	function updateCurrentBgm(bgm: /* BattleManager._mapBgm */ any, pos: number): void;
	function stopBgm(): void;
	function fadeOutBgm(duration: number): void;
	function fadeInBgm(duration: any): void;
	function playBgs(bgs: AudioManager.PlayBgs0, pos: number): void;
	function replayBgs(bgs: /* BattleManager._mapBgs */ any): void;
	function isCurrentBgs(bgs: /* BattleManager._mapBgs */ any): /* !this._currentBgs */ any;
	function updateBgsParameters(bgs: /* BattleManager._mapBgs */ any): void;
	function updateCurrentBgs(bgs: /* BattleManager._mapBgs */ any, pos: number): void;
	function stopBgs(): void;
	function fadeOutBgs(duration: number): void;
	function fadeInBgs(duration: any): void;
	function playMe(me: any): void;
	function updateMeParameters(me: any): void;
	function fadeOutMe(duration: number): void;
	function stopMe(): void;
	function playSe(se: any): void;
	function updateSeParameters(buffer: WebAudio, se: any): void;
	function cleanupSe(): void;
	function stopSe(): void;
	function playStaticSe(se: any): void;
	function loadStaticSe(se: any): void;
	function isStaticSe(se: any): boolean;
	function stopAll(): void;
	function saveBgm(): /* BattleManager._mapBgm */ any;
	function saveBgs(): /* BattleManager._mapBgs */ any;
	function makeEmptyAudioObject(): AudioManager.MakeEmptyAudioObjectRet;
	function createBuffer(folder: string, name: string): WebAudio;
	function updateBufferParameters(buffer: WebAudio, configVolume: number, audio: /* BattleManager._mapBgm */ any): void;
	function audioFileExt(): string;
	function checkErrors(): void;
	function throwLoadError(webAudio: WebAudio): void;
}

declare interface SoundManager
{
	new(): SoundManager;
}

declare namespace SoundManager
{
	function preloadImportantSounds(): void;
	function loadSystemSound(n: number): void;
	function playSystemSound(n: number): void;
	function playCursor(): void;
	function playOk(): void;
	function playCancel(): void;
	function playBuzzer(): void;
	function playEquip(): void;
	function playSave(): void;
	function playLoad(): void;
	function playBattleStart(): void;
	function playEscape(): void;
	function playEnemyAttack(): void;
	function playEnemyDamage(): void;
	function playEnemyCollapse(): void;
	function playBossCollapse1(): void;
	function playBossCollapse2(): void;
	function playActorDamage(): void;
	function playActorCollapse(): void;
	function playRecovery(): void;
	function playMiss(): void;
	function playEvasion(): void;
	function playMagicEvasion(): void;
	function playReflection(): void;
	function playShop(): void;
	function playUseItem(): void;
	function playUseSkill(): void;
}

declare interface TextManager
{
	new(): TextManager;
}

declare namespace TextManager
{
	function basic(basicId: number): string;
	function param(paramId: number): string;
	function command(commandId: number): string;
	function message(messageId: string): string;
	function getter(method: string, param: number | string): TextManager.GetterRet;
}

declare interface ColorManager
{
	new(): ColorManager;
}

declare namespace ColorManager
{
	function loadWindowskin(): void;
	function textColor(n: number | string): string;
	function normalColor(): string;
	function systemColor(): string;
	function crisisColor(): string;
	function deathColor(): string;
	function gaugeBackColor(): string;
	function hpGaugeColor1(): string;
	function hpGaugeColor2(): string;
	function mpGaugeColor1(): string;
	function mpGaugeColor2(): string;
	function mpCostColor(): string;
	function powerUpColor(): string;
	function powerDownColor(): string;
	function ctGaugeColor1(): string;
	function ctGaugeColor2(): string;
	function tpGaugeColor1(): string;
	function tpGaugeColor2(): string;
	function tpCostColor(): string;
	function pendingColor(): string;
	function hpColor(actor: Game_Actor): string;
	function mpColor(): string;
	function tpColor(): string;
	function paramchangeTextColor(change: number): string;
	function damageColor(colorType: number): string;
	function outlineColor(): string;
	function dimColor1(): string;
	function dimColor2(): string;
	function itemBackColor1(): string;
	function itemBackColor2(): string;
}

declare interface SceneManager
{
	new(): SceneManager;
}

declare namespace SceneManager
{
	export var _scene: SceneManager._previousClass;
	export var _stack: Array<any>;
	export var _exiting: boolean;
	function _previousClass(): void;
	export var _smoothDeltaTime: number;
	export var _elapsedTime: number;
	function run(sceneClass: () => void): void;
	function initialize(): void;
	function checkBrowser(): void;
	function checkPluginErrors(): void;
	function initGraphics(): void;
	function initAudio(): void;
	function initVideo(): void;
	function initInput(): void;
	function setupEventHandlers(): void;
	function update(deltaTime: number): void;
	function determineRepeatNumber(deltaTime: number): number;
	function terminate(): void;
	function onError(event: SceneManager.OnError0): void;
	function onReject(event: /* SceneManager.onError.!0 */ any): void;
	function onUnload(): void;
	function onKeyDown(event: KeyboardEvent): void;
	function reloadGame(): void;
	function showDevTools(): void;
	function catchException(e: any): void;
	function catchNormalError(e: any): void;
	function catchLoadError(e: any): void;
	function catchUnknownError(e: any): void;
	function updateMain(): void;
	function updateFrameCount(): void;
	function updateInputData(): void;
	function updateEffekseer(): void;
	function changeScene(): void;
	function updateScene(): void;
	function isGameActive(): boolean;
	function onSceneTerminate(): void;
	function onSceneCreate(): void;
	function onBeforeSceneStart(): void;
	function onSceneStart(): void;
	function isSceneChanging(): boolean;
	function isCurrentSceneBusy(): /* !this._scene */ any;
	function isNextScene(sceneClass: any): /* !this._nextScene */ any;
	function isPreviousScene(sceneClass: (() => void) | (() => void)): boolean;
	function goto(sceneClass: Scene_Base): void;
	function push(sceneClass: (() => void) | (() => void)): void;
	function pop(): void;
	function exit(): void;
	function clearStack(): void;
	function stop(): void;
	function prepareNextScene(): void;
	function snap(): Bitmap;
	function snapForBackground(): void;
	function backgroundBitmap(): Bitmap;
	function resume(): void;
}

declare interface BattleManager
{
	new(): BattleManager;
}

declare namespace BattleManager
{
	function setup(troopId: number, canEscape: boolean, canLose: boolean): void;
	export var _canEscape: boolean;
	export var _canLose: boolean;
	function initMembers(): void;
	export var _phase: string;
	export var _inputting: boolean;
	export var _battleTest: boolean;
	function _eventCallback(n: number): void;
	export var _preemptive: boolean;
	export var _surprise: boolean;
	export var _currentActor: /*no type*/{};
	var _mapBgm: {
		pos: number;
	}
	var _mapBgs: {
		pos: number;
	}
	export var _actionBattlers: Array</* BattleManager._currentActor */ any>;
	export var _action: /*no type*/{};
	export var _targets: Array<any>;
	export var _logWindow: /*no type*/{};
	export var _spriteset: /*no type*/{};
	export var _escapeRatio: number;
	export var _escaped: boolean;
	export var _tpbNeedsPartyCommand: boolean;
	function isTpb(): boolean;
	function isActiveTpb(): boolean;
	function isBattleTest(): boolean;
	function setBattleTest(battleTest: boolean): void;
	function setEventCallback(callback: () => void): void;
	function setLogWindow(logWindow: Window_BattleLog): void;
	function setSpriteset(spriteset: Spriteset_Battle): void;
	function onEncounter(): void;
	function ratePreemptive(): number;
	function rateSurprise(): number;
	function saveBgmAndBgs(): void;
	function playBattleBgm(): void;
	function playVictoryMe(): void;
	function playDefeatMe(): void;
	function replayBgmAndBgs(): void;
	function makeEscapeRatio(): void;
	function update(timeActive: boolean): void;
	function updatePhase(timeActive: boolean): void;
	function updateEvent(): boolean;
	function updateEventMain(): boolean;
	function isBusy(): boolean;
	function updateTpbInput(): void;
	function checkTpbInputClose(): void;
	function checkTpbInputOpen(): void;
	function isPartyTpbInputtable(): boolean;
	function needsActorInputCancel(): /* !this._currentActor */ any;
	function isTpbMainPhase(): boolean;
	function isInputting(): boolean;
	function isInTurn(): boolean;
	function isTurnEnd(): boolean;
	function isAborting(): boolean;
	function isBattleEnd(): boolean;
	function canEscape(): boolean;
	function canLose(): /* !this._canLose */ any;
	function isEscaped(): /* !this._escaped */ any;
	function actor(): /* !this._currentActor */ any;
	function startBattle(): void;
	function displayStartMessages(): void;
	function startInput(): void;
	function inputtingAction(): void;
	function selectNextCommand(): void;
	function selectNextActor(): void;
	function selectPreviousCommand(): void;
	function selectPreviousActor(): void;
	function changeCurrentActor(forward: boolean): void;
	function startActorInput(): void;
	function finishActorInput(): void;
	function cancelActorInput(): void;
	function updateStart(): void;
	function startTurn(): void;
	function updateTurn(timeActive: boolean): void;
	function updateTpb(): void;
	function updateAllTpbBattlers(): void;
	function updateTpbBattler(battler: /* BattleManager._currentActor */ any): void;
	function checkTpbTurnEnd(): void;
	function processTurn(): void;
	function endBattlerActions(battler: Game_Actor): void;
	function endTurn(): void;
	function endAllBattlersTurn(): void;
	function displayBattlerStatus(battler: Game_Actor, current: boolean): void;
	function updateTurnEnd(): void;
	function getNextSubject(): void;
	function allBattleMembers(): Array</* BattleManager._currentActor */ any>;
	function makeActionOrders(): void;
	function startAction(): void;
	function updateAction(): void;
	function endAction(): void;
	function invokeAction(subject: Game_Actor, target: Game_Enemy): void;
	function invokeNormalAction(subject: Game_Actor, target: Game_Enemy): void;
	function invokeCounterAttack(subject: /* BattleManager._currentActor */ any, target: any): void;
	function invokeMagicReflection(subject: /* BattleManager._currentActor */ any, target: any): void;
	function applySubstitute(target: Game_Enemy): Game_Enemy;
	function checkSubstitute(target: Game_Enemy): boolean;
	function isActionForced(): boolean;
	function forceAction(battler: /* BattleManager._currentActor */ any): void;
	function processForcedAction(): void;
	function abort(): void;
	function checkBattleEnd(): boolean;
	function checkAbort(): boolean;
	function processVictory(): void;
	function processEscape(): /* !this._preemptive */ any;
	function onEscapeSuccess(): void;
	function onEscapeFailure(): void;
	function processAbort(): void;
	function processDefeat(): void;
	function endBattle(result: number): void;
	function updateBattleEnd(): void;
	function makeRewards(): void;
	function displayVictoryMessage(): void;
	function displayDefeatMessage(): void;
	function displayEscapeSuccessMessage(): void;
	function displayEscapeFailureMessage(): void;
	function displayRewards(): void;
	function displayExp(): void;
	function displayGold(): void;
	function displayDropItems(): void;
	function gainRewards(): void;
	function gainExp(): void;
	function gainGold(): void;
	function gainDropItems(): void;
}

declare interface PluginManager
{
	new(): PluginManager;
}

declare namespace PluginManager
{
	export var _scripts: Array<any>;
	export var _errorUrls: Array<any>;
	export var _parameters: /*no type*/{};
	export var _commands: /*no type*/{};
	function setup(plugins: any): void;
	function parameters(name: any): /* !this._parameters.<i> */ any;
	function setParameters(name: any, parameters: any): void;
	function loadScript(filename: any): void;
	function onError(e: any): void;
	function makeUrl(filename: any): string;
	function checkErrors(): void;
	function throwLoadError(url: any): void;
	function registerCommand(pluginName: any, commandName: any, func: any): void;
	function callCommand(self: any, pluginName: any, commandName: any, args: any): void;
}

declare namespace $dataMap
{
	export var data: Array<any>;
	export var events: Array<any>;
	export var width: number;
	export var height: number;
	export var scrollType: number;
}

export declare var $gameTemp: /*no type*/{};
export declare var $gameSystem: /*no type*/{};
export declare var $gameScreen: /*no type*/{};
export declare var $gameTimer: /*no type*/{};
export declare var $gameMessage: /*no type*/{};
export declare var $gameSwitches: /*no type*/{};
export declare var $gameVariables: /*no type*/{};
export declare var $gameSelfSwitches: /*no type*/{};
export declare var $gameActors: /*no type*/{};
export declare var $gameParty: /*no type*/{};
export declare var $gameTroop: /*no type*/{};
export declare var $gameMap: /*no type*/{};
export declare var $gamePlayer: /*no type*/{};

declare var WebAudio: {
	frameCount: number;
	volume: number;
	pitch: number;
	pan: number;
}
