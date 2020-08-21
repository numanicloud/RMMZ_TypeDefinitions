// Type definitions for rmmz_sprites.js
declare namespace Sprite_Damage.prototype{
	// Sprite_Damage.prototype.createChildSprite.!ret
	interface CreateChildSpriteRet {
		y : number;
		ry : number;
		dy : number;
		x : number;
		bitmap : Bitmap;
	}
}
declare namespace Sprite_Damage.prototype{
	// Sprite_Damage.prototype.updateChild.!0
	interface UpdateChild0 {
		dy : number;
		ry : number;
		y : number;
	}
}
declare namespace Spriteset_Map.prototype{
	// Spriteset_Map.prototype.removeBalloon.!0
	interface RemoveBalloon0 {
		targetObject : Game_Event;
	}
}
declare interface Sprite_Clickable {
	new (): Sprite_Clickable;
}
declare interface Sprite_Button {
	new ();
	initialize(buttonType : any): void;
	setupFrames(): void;
	blockWidth(): number;
	blockHeight(): number;
	loadButtonImage(): void;
	buttonData(): void;
	update(): void;
	checkBitmap(): void;
	updateFrame(): void;
	updateOpacity(): void;
	setColdFrame(x : number, y : number, width : number, height : number): void;
	setHotFrame(x : number, y : number, width : number, height : number): void;
	setClickHandler(method : () => void): void;
	onClick(): void;
}
declare interface Sprite_Character {
	new (): Sprite_Character;
}
declare interface Sprite_Battler {
	new (): Sprite_Battler;
}
declare interface Sprite_Actor {
	new (): Sprite_Actor;
}
declare namespace Sprite_Actor{
	namespace MOTIONS{
		namespace walk{
			export var index : number;
			export var loop : boolean;
		}
		namespace wait{
			export var index : number;
			export var loop : boolean;
		}
		namespace chant{
			export var index : number;
			export var loop : boolean;
		}
		namespace guard{
			export var index : number;
			export var loop : boolean;
		}
		namespace damage{
			export var index : number;
			export var loop : boolean;
		}
		namespace evade{
			export var index : number;
			export var loop : boolean;
		}
		namespace thrust{
			export var index : number;
			export var loop : boolean;
		}
		namespace swing{
			export var index : number;
			export var loop : boolean;
		}
		namespace missile{
			export var index : number;
			export var loop : boolean;
		}
		namespace skill{
			export var index : number;
			export var loop : boolean;
		}
		namespace spell{
			export var index : number;
			export var loop : boolean;
		}
		namespace item{
			export var index : number;
			export var loop : boolean;
		}
		namespace escape{
			export var index : number;
			export var loop : boolean;
		}
		namespace victory{
			export var index : number;
			export var loop : boolean;
		}
		namespace dying{
			export var index : number;
			export var loop : boolean;
		}
		namespace abnormal{
			export var index : number;
			export var loop : boolean;
		}
		namespace sleep{
			export var index : number;
			export var loop : boolean;
		}
		namespace dead{
			export var index : number;
			export var loop : boolean;
		}
	}
}
declare interface Sprite_Enemy {
	new (): Sprite_Enemy;
}
declare interface Sprite_Animation {
	new (): Sprite_Animation;
}
declare interface Sprite_AnimationMV {
	new (): Sprite_AnimationMV;
}
declare interface Sprite_Battleback {
	new (): Sprite_Battleback;
}
declare interface Sprite_Damage {
	new ();
	initialize(): void;
	destroy(options : any): void;
	setup(target : any): void;
	setupCriticalEffect(): void;
	fontFace(): string;
	fontSize(): void;
	damageColor(): string;
	outlineColor(): string;
	outlineWidth(): number;
	createMiss(): void;
	createDigits(value : any): void;
	createChildSprite(width : number, height : any): Sprite_Damage.prototype.CreateChildSpriteRet;
	createBitmap(width : number, height : any): Bitmap;
	update(): void;
	updateChild(sprite : Sprite_Damage.prototype.UpdateChild0): void;
	updateFlash(): void;
	updateOpacity(): void;
	isPlaying(): boolean;
}
declare interface Sprite_Gauge {
	new (): Sprite_Gauge;
}
declare interface Sprite_Name {
	new (): Sprite_Name;
}
declare interface Sprite_StateIcon {
	new ();
	initialize(): void;
	initMembers(): void;
	loadBitmap(): void;
	setup(battler : Game_Actor): void;
	update(): void;
	animationWait(): number;
	updateIcon(): void;
	shouldDisplay(): /* !this._battler */ any;
	updateFrame(): void;
}
declare interface Sprite_StateOverlay {
	new ();
	initialize(): void;
	initMembers(): void;
	loadBitmap(): void;
	setup(battler : any): void;
	update(): void;
	animationWait(): number;
	updatePattern(): void;
	updateFrame(): void;
}
declare interface Sprite_Weapon {
	new ();
	initialize(): void;
	initMembers(): void;
	setup(weaponImageId : any): void;
	update(): void;
	animationWait(): number;
	updatePattern(): void;
	loadBitmap(): void;
	updateFrame(): void;
	isPlaying(): boolean;
}
declare interface Sprite_Balloon {
	new (): Sprite_Balloon;
}
declare interface Sprite_Picture {
	new (): Sprite_Picture;
}
declare interface Sprite_Timer {
	new (): Sprite_Timer;
}
declare interface Sprite_Destination {
	new (): Sprite_Destination;
}
declare interface Spriteset_Base {
	new (): Spriteset_Base;
}
declare interface Spriteset_Map {
	new ();
	initialize(): void;
	destroy(options : any): void;
	loadSystemImages(): void;
	createLowerLayer(): void;
	update(): void;
	hideCharacters(): void;
	createParallax(): void;
	createTilemap(): void;
	loadTileset(): void;
	createCharacters(): void;
	createShadow(): void;
	createDestination(): void;
	createWeather(): void;
	updateTileset(): void;
	updateParallax(): void;
	updateTilemap(): void;
	updateShadow(): void;
	updateWeather(): void;
	updateBalloons(): void;
	processBalloonRequests(): void;
	createBalloon(request : /* Spriteset_Map.prototype.createBalloon.!0 */ any): void;
	removeBalloon(sprite : Spriteset_Map.prototype.RemoveBalloon0): void;
	removeAllBalloons(): void;
	findTargetSprite(target : Game_Player): void;
	animationBaseDelay(): number;
}
declare interface Spriteset_Battle {
	new ();
	initialize(): void;
	loadSystemImages(): void;
	createLowerLayer(): void;
	createBackground(): void;
	createBattleback(): void;
	createBattleField(): void;
	battleFieldOffsetY(): number;
	update(): void;
	updateBattleback(): void;
	createEnemies(): void;
	compareEnemySprite(a : any, b : any): number;
	createActors(): void;
	updateActors(): void;
	findTargetSprite(target : any): void;
	battlerSprites(): Array<any>;
	isEffecting(): boolean;
	isAnyoneMoving(): boolean;
	isBusy(): boolean;
	_battlebackLocated : boolean;
	_enemySprites : Array<any>;
	_actorSprites : Array<any>;
}
