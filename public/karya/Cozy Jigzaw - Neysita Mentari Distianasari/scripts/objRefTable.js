const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Spritefont2,
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Spritefont2.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Spritefont2.Acts.SetX,
		C3.Plugins.Spritefont2.Exps.Y,
		C3.Plugins.Spritefont2.Exps.X,
		C3.Plugins.Spritefont2.Acts.SetY,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Cnds.CompareFrame
	];
};
self.C3_JsPropNameTable = [
	{img1: 0},
	{picked: 0},
	{grid: 0},
	{Touch: 0},
	{blank_box: 0},
	{Sprite: 0},
	{bg: 0},
	{title: 0},
	{home: 0},
	{tittle: 0},
	{img2: 0},
	{img3: 0},
	{img4: 0},
	{photopuzzle: 0},
	{Audio: 0}
];

self.InstanceType = {
	img1: class extends self.ISpriteFontInstance {},
	grid: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	blank_box: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	bg: class extends self.ISpriteInstance {},
	title: class extends self.ISpriteInstance {},
	home: class extends self.ISpriteInstance {},
	tittle: class extends self.ITextInstance {},
	img2: class extends self.ISpriteFontInstance {},
	img3: class extends self.ISpriteFontInstance {},
	img4: class extends self.ISpriteFontInstance {},
	photopuzzle: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {}
}