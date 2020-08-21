// Type definitions for rmmz_core.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Array.prototype{
	// Array.prototype.equals.!0
	type Equals0 = Array<any>;
}
declare namespace Array.prototype{
	// Array.prototype.remove.!ret
	type RemoveRet = Array<any>;
}
declare namespace Bitmap.prototype{
	// Bitmap.prototype._onXhrLoad.!0
	interface _onXhrLoad0 {
		responseType : string;
		onload(): void;
		onerror(): void;
	}
}
declare namespace Tilemap{
	// Tilemap.FLOOR_AUTOTILE_TABLE.<i>
	type FLOOR_AUTOTILE_TABLEI = Array<Array<number>>;
}

declare namespace Tilemap{
	// Tilemap.WALL_AUTOTILE_TABLE.<i>
	type WALL_AUTOTILE_TABLEI = Array<Array<number>>;
}

declare namespace ColorFilter.prototype{
	// ColorFilter.prototype.setColorTone.!0
	type SetColorTone0 = Array<number>;
}
declare namespace ColorFilter.prototype{
	// ColorFilter.prototype.setBlendColor.!0
	type SetBlendColor0 = Array<number>;
}
declare namespace WebAudio.prototype{
	// WebAudio.prototype.addLoadListener.!0
	type AddLoadListener0 = (() => void);
}
declare namespace WebAudio.prototype{
	// WebAudio.prototype._onXhrLoad.!0
	interface _onXhrLoad0 {
		responseType : string;
		onload(): void;
		onerror(): void;
	}
}
declare namespace Input{
	// Input._gamepadStates.<i>
	type _gamepadStatesI = Array<boolean>;
}
declare namespace JsonEx{
	// JsonEx.stringify.!0
	interface Stringify0 {
	}
}
declare namespace JsonEx{
	// JsonEx._encode.!ret
	interface _encodeRet {
	}
}
declare namespace JsonEx{
	// JsonEx._decode.!0
	interface _decode0 {
	}
}
declare interface Utils {
	new (): Utils;
}
declare namespace Utils{
	export var RPGMAKER_NAME : string;
	export var RPGMAKER_VERSION : string;
	function checkRMVersion(version : string): boolean;
	function isOptionValid(name : string): boolean;
	function isNwjs(): boolean;
	function isMobileDevice(): boolean;
	function isMobileSafari(): boolean;
	function isAndroidChrome(): boolean;
	function isLocal(): boolean;
	function canUseWebGL(): boolean;
	function canUseWebAudioAPI(): boolean;
	function canUseCssFontLoading(): boolean;
	function canUseIndexedDB(): boolean;
	function canPlayOgg(): boolean;
	function canPlayWebm(): boolean;
	function encodeURI(str : string): string;
	function escapeHtml(str : string): string;
	function containsArabic(str : string): boolean;
	function setEncryptionInfo(hasImages : boolean, hasAudio : boolean, key : string): void;
	export var _hasEncryptedImages : boolean;
	export var _hasEncryptedAudio : boolean;
	export var _encryptionKey : string;
	function hasEncryptedImages(): /* !this._hasEncryptedImages */ any;
	function hasEncryptedAudio(): /* !this._hasEncryptedAudio */ any;
	function decryptArrayBuffer(source : ArrayBuffer): ArrayBuffer;
}
declare interface Graphics {
	new (): Graphics;
}
declare namespace Graphics{
	function initialize(): boolean;
	export var _width : number;
	export var _height : number;
	export var _defaultScale : number;
	export var _realScale : number;
	function _tickHandler(deltaTime : any): void;
	export var _fpsCounter : Graphics.FPSCounter;
	var _loadingSpinner : {
		id : string;
	}
	export var _stretchEnabled : boolean;
	export var _wasLoading : boolean;
	export var frameCount : number;
	export var boxWidth : number;
	export var boxHeight : number;
	function setTickHandler(handler : () => void): void;
	function startGameLoop(): void;
	function stopGameLoop(): void;
	function setStage(stage : () => void): void;
	function startLoading(): void;
	function endLoading(): boolean;
	function printError(name : string, message : string, error? : any): void;
	function showRetryButton(retry : () => void): void;
	function eraseError(): void;
	function pageToCanvasX(x : number): number;
	function pageToCanvasY(y : number): number;
	function isInsideCanvas(x : number, y : number): boolean;
	function showScreen(): void;
	function hideScreen(): void;
	function resize(width : number, height : number): void;
	function _createAllElements(): void;
	function _updateAllElements(): void;
	function _onTick(deltaTime : any): void;
	function _canRender(): boolean;
	function _updateRealScale(): void;
	function _stretchWidth(): void;
	function _stretchHeight(): number;
	function _makeErrorHtml(name : string, message : string): void;
	function _defaultStretchMode(): boolean;
	function _createErrorPrinter(): void;
	function _updateErrorPrinter(): void;
	function _createCanvas(): void;
	function _updateCanvas(): void;
	function _updateVideo(): void;
	function _createLoadingSpinner(): void;
	function _createFPSCounter(): void;
	function _centerElement(element : any): void;
	function _disableContextMenu(): void;
	function _applyCanvasFilter(): void;
	function _clearCanvasFilter(): void;
	function _setupEventHandlers(): void;
	function _onWindowResize(): void;
	function _onKeyDown(event : any): void;
	function _switchFPSCounter(): void;
	function _switchStretchMode(): void;
	function _switchFullScreen(): void;
	function _isFullScreen(): void;
	function _requestFullScreen(): void;
	function _cancelFullScreen(): void;
	function _createPixiApp(): void;
	function _setupPixi(): void;
	function _createEffekseerContext(): void;
	interface FPSCounter {
		new ();
		initialize(): void;
		startTick(): void;
		endTick(): void;
		switchMode(): void;
		_createElements(): void;
		_update(): void;
		_tickCount : number;
		_frameTime : number;
		_frameStart : number;
		_lastLoop : number;
		_showFps : boolean;
		fps : number;
		duration : number;
	}
}
declare interface Point {
	new (): Point;
}
declare interface Rectangle {
	new (): Rectangle;
}
declare interface Bitmap {
	new ();
	initialize(width : any, height : any): void;
	isReady(): boolean;
	isError(): boolean;
	destroy(): void;
	resize(width : number, height : number): void;
	blt(source : Bitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw? : number, dh? : number): void;
	getPixel(x : number, y : number): string;
	getAlphaPixel(x : number, y : number): string;
	clearRect(x : number, y : number, width : number, height : number): void;
	clear(): void;
	fillRect(x : number, y : number, width : number, height : number, color : string): void;
	fillAll(color : string): void;
	strokeRect(x : number, y : number, width : number, height : number, color : string): void;
	gradientFillRect(x : number, y : number, width : number, height : number, color1 : string, color2 : string, vertical : boolean): void;
	drawCircle(x : number, y : number, radius : number, color : string): void;
	drawText(text : string, x : number, y : number, maxWidth : number, lineHeight : number, align : string): void;
	measureTextWidth(text : string): number;
	addLoadListener(listner : () => void): void;
	retry(): void;
	_makeFontNameText(): string;
	_drawTextOutline(text : string, tx : number, ty : number, maxWidth : number): void;
	_drawTextBody(text : string, tx : number, ty : number, maxWidth : number): void;
	_createCanvas(width : number, height : number): void;
	_ensureCanvas(): void;
	_destroyCanvas(): void;
	_createBaseTexture(source : any): void;
	_updateScaleMode(): void;
	_startLoading(): void;
	_startDecrypting(): void;
	_onXhrLoad(xhr : /* Bitmap.prototype._onXhrLoad0 */ any): void;
	_onLoad(): void;
	_callLoadListeners(): void;
	_onError(): void;
	load(url : string): /* Bitmap.+Bitmap */ any;
	snap(stage : () => void): Bitmap;
	_url : string;
	_paintOpacity : number;
	_smooth : boolean;
	_loadListeners : Array<() => void>;
	_loadingState : string;
	fontFace : string;
	fontBold : boolean;
	fontItalic : boolean;
	textColor : string;
	outlineColor : string;
	outlineWidth : number;
}
declare interface Sprite {
	new (): Sprite;
}
declare namespace Sprite{
	export var _counter : number;
}
declare interface Tilemap {
	new (): Tilemap;
}
declare namespace Tilemap{
	export var TILE_ID_B : number;
	export var TILE_ID_C : number;
	export var TILE_ID_D : number;
	export var TILE_ID_E : number;
	export var TILE_ID_A5 : number;
	export var TILE_ID_A1 : number;
	export var TILE_ID_A2 : number;
	export var TILE_ID_A3 : number;
	export var TILE_ID_A4 : number;
	export var TILE_ID_MAX : number;
	function isVisibleTile(tileId : any): boolean;
	function isAutotile(tileId : any): boolean;
	function getAutotileKind(tileId : any): number;
	function getAutotileShape(tileId : any): number;
	function makeAutotileId(kind : any, shape : any): void;
	function isSameKindTile(tileID1 : any, tileID2 : any): boolean;
	function isTileA1(tileId : any): boolean;
	function isTileA2(tileId : any): boolean;
	function isTileA3(tileId : any): boolean;
	function isTileA4(tileId : any): boolean;
	function isTileA5(tileId : any): boolean;
	function isWaterTile(tileId : any): boolean;
	function isWaterfallTile(tileId : any): boolean;
	function isGroundTile(tileId : any): boolean;
	function isShadowingTile(tileId : any): boolean;
	function isRoofTile(tileId : any): boolean;
	function isWallTopTile(tileId : any): boolean;
	function isWallSideTile(tileId : any): boolean;
	function isWallTile(tileId : any): boolean;
	function isFloorTypeAutotile(tileId : any): boolean;
	function isWallTypeAutotile(tileId : any): boolean;
	function isWaterfallTypeAutotile(tileId : any): boolean;
	export var FLOOR_AUTOTILE_TABLE : Array<Tilemap.FLOOR_AUTOTILE_TABLEI>;
	export var WALL_AUTOTILE_TABLE : Array<Tilemap.WALL_AUTOTILE_TABLEI>;
	export var WATERFALL_AUTOTILE_TABLE : Array<Array<Array<number>>>;
	interface Layer {
		new ();
		initialize(): void;
		destroy(): void;
		setBitmaps(bitmaps : any): void;
		clear(): void;
		addRect(setNumber : any, sx : any, sy : any, dx : any, dy : any, w : any, h : any): void;
		render(renderer : any): void;
		isReady(): boolean;
		_createVao(): void;
		_updateIndexBuffer(): void;
		_updateVertexBuffer(): void;
		MAX_GL_TEXTURES : number;
		VERTEX_STRIDE : number;
	}
	interface Renderer {
		new (): Renderer;
	}

}
declare interface TilingSprite {
	new (): TilingSprite;
}
declare interface ScreenSprite {
	new (): ScreenSprite;
}
declare interface Window {
	new (): Window;
}
declare interface WindowLayer {
	new (): WindowLayer;
}
declare interface Weather {
	new (): Weather;
}
declare interface ColorFilter {
	new ();
	initialize(): void;
	setHue(hue : number): void;
	setColorTone(tone : ColorFilter.prototype.SetColorTone0): void;
	setBlendColor(color : ColorFilter.prototype.SetBlendColor0): void;
	setBrightness(brightness : number): void;
	_fragmentSrc(): string;
}
declare interface Stage {
	new (): Stage;
}
declare interface WebAudio {
	new ();
	initialize(): boolean;
	clear(): void;
	isReady(): /* !this._buffers */ any;
	isError(): /* !this._isError */ any;
	isPlaying(): /* !this._isPlaying */ any;
	play(loop : boolean, offset : number): void;
	stop(): void;
	destroy(): void;
	fadeIn(duration : number): void;
	fadeOut(duration : number): void;
	seek(): number;
	addLoadListener(listner : WebAudio.prototype.AddLoadListener0): void;
	addStopListener(listner : () => void): void;
	retry(): void;
	_startLoading(): void;
	_shouldUseDecoder(): boolean;
	_createDecoder(): void;
	_destroyDecoder(): void;
	_realUrl(): string;
	_startXhrLoading(url : string): void;
	_startFetching(url : string): void;
	_onXhrLoad(xhr : /* WebAudio.prototype._onXhrLoad0 */ any): void;
	_onFetch(response : any): void;
	_onError(): void;
	_onFetchProcess(value : any): void;
	_updateBufferOnFetch(): void;
	_concatenateFetchedData(): void;
	_updateBuffer(): void;
	_readableBuffer(): /* !this._data.buffer */ any;
	_decodeAudioData(arrayBuffer : ArrayBuffer): void;
	_onDecode(buffer : any): void;
	_refreshSourceNode(): void;
	_startPlaying(offset : number): void;
	_startAllSourceNodes(): void;
	_startSourceNode(index : number): void;
	_stopSourceNode(): void;
	_createPannerNode(): void;
	_createGainNode(): void;
	_createAllSourceNodes(): void;
	_createSourceNode(index : number): void;
	_removeNodes(): void;
	_createEndTimer(): void;
	_removeEndTimer(): void;
	_updatePanner(): void;
	_onLoad(): void;
	_readLoopComments(arrayBuffer : ArrayBuffer): void;
	_readMetaData(view : DataView, index : number, size : number): void;
	_readFourCharacters(view : DataView, index : number): string;
	_masterVolume : number;
	setMasterVolume(value : number): void;
	_createContext(): void;
	_currentTime(): /* !this._context.currentTime */ any;
	_createMasterGainNode(): void;
	_setupEventHandlers(): void;
	_onUserGesture(): void;
	_onVisibilityChange(): void;
	_onHide(): void;
	_onShow(): void;
	_shouldMuteOnHide(): boolean;
	_resetVolume(): void;
	_fadeIn(duration : number): void;
	_fadeOut(duration : number): void;
}
declare interface Video {
	new (): Video;
}
declare namespace Video{
	function initialize(width : number, height : number): void;
	export var _loading : boolean;
	export var _volume : number;
	function resize(width : number, height : number): void;
	function play(src : string): void;
	function isPlaying(): /* !this._loading */ any;
	function setVolume(volume : number): void;
	function _createElement(): void;
	function _onLoad(): void;
	function _onError(): void;
	function _onEnd(): void;
	function _updateVisibility(videoVisible : boolean): void;
	function _isVisible(): boolean;
	function _setupEventHandlers(): void;
	function _onUserGesture(): void;
}
declare interface Input {
	new (): Input;
}
declare namespace Input{
	function initialize(): void;
	export var keyRepeatWait : number;
	export var keyRepeatInterval : number;
	var keyMapper : {
	}
	var gamepadMapper : {
	}
	function clear(): void;
	namespace _currentState{
	}
	namespace _previousState{
	}
	export var _gamepadStates : Array</* Input._gamepadStatesI */ any>;
	export var _pressedTime : number;
	export var _dir4 : number;
	export var _dir8 : number;
	export var _preferredAxis : string;
	export var _date : number;
	function update(): void;
	function isPressed(keyName : string): boolean;
	function isTriggered(keyName : string): boolean;
	function isRepeated(keyName : string): boolean;
	function isLongPressed(keyName : string): boolean;
	function virtualClick(buttonName : any): void;
	function _setupEventHandlers(): void;
	function _onKeyDown(event : any): void;
	function _shouldPreventDefault(keyCode : any): boolean;
	function _onKeyUp(event : any): void;
	function _onLostFocus(): void;
	function _pollGamepads(): void;
	function _updateGamepadState(gamepad : any): void;
	function _updateDirection(): void;
	function _signX(): number;
	function _signY(): number;
	function _makeNumpadDirection(x : number, y : number): number;
	function _isEscapeCompatible(keyName : string): boolean;
}
declare interface TouchInput {
	new (): TouchInput;
}
declare namespace TouchInput{
	function initialize(): void;
	export var keyRepeatWait : number;
	export var keyRepeatInterval : number;
	export var moveThreshold : number;
	function clear(): void;
	export var _mousePressed : boolean;
	export var _screenPressed : boolean;
	export var _pressedTime : number;
	export var _clicked : boolean;
	namespace _newState{
		export var triggered : boolean;
		export var cancelled : boolean;
		export var moved : boolean;
		export var hovered : boolean;
		export var released : boolean;
		export var wheelX : number;
		export var wheelY : number;
	}
	export var _x : number;
	export var _y : number;
	export var _triggerX : number;
	export var _triggerY : number;
	export var _moved : boolean;
	export var _date : number;
	function update(): void;
	function isClicked(): /* !this._clicked */ any;
	function isPressed(): /* !this._mousePressed */ any;
	function isTriggered(): /* !this._currentState.triggered */ any;
	function isRepeated(): /* !this._currentState.triggered */ any;
	function isLongPressed(): boolean;
	function isCancelled(): /* !this._currentState.cancelled */ any;
	function isMoved(): /* !this._currentState.moved */ any;
	function isHovered(): /* !this._currentState.hovered */ any;
	function isReleased(): /* !this._currentState.released */ any;
	function _createNewState(): /* TouchInput._newState */ any;
	function _setupEventHandlers(): void;
	function _onMouseDown(event : any): void;
	function _onLeftButtonDown(event : any): void;
	function _onMiddleButtonDown(): void;
	function _onRightButtonDown(event : any): void;
	function _onMouseMove(event : any): void;
	function _onMouseUp(event : any): void;
	function _onWheel(event : any): void;
	function _onTouchStart(event : any): void;
	function _onTouchMove(event : any): void;
	function _onTouchEnd(event : any): void;
	function _onTouchCancel(): void;
	function _onLostFocus(): void;
	function _onTrigger(x : number, y : number): void;
	function _onCancel(x : number, y : number): void;
	function _onMove(x : number, y : number): void;
	function _onHover(x : number, y : number): void;
	function _onRelease(x : number, y : number): void;
}
declare interface JsonEx {
	new (): JsonEx;
}
declare namespace JsonEx{
	export var maxDepth : number;
	function stringify(object : JsonEx.Stringify0): string;
	function parse(json : string): any;
	function makeDeepCopy(object : any): any;
	function _encode(value : /* JsonEx.stringify.!0 */ any, depth : number): /* JsonEx._encodeRet */ any;
	function _decode(value : /* JsonEx._decode0 */ any): /* JsonEx._decode0 */ any;
}
declare namespace rmmz_core.js{
	interface Array {
		prototype : {
			clone(): Array<number>;
			contains(element : any): boolean;
			equals(array : Array.prototype.Equals0): boolean;
			remove(element : number | {}): Array.prototype.RemoveRet;
		}
	}
	interface String {
		prototype : {
			contains(string : string): boolean;
			format(): string;
			padZero(length : number): string;
		}
	}
	interface Number {
		prototype : {
			clamp(min : number, max : number): number;
			mod(n : number): number;
			padZero(length : number): string;
		}
	}
	interface Math {
		randomInt(max : number): number;
	}
}
