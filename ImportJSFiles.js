//
// HTMLに書き出すスクリプトを決める
// 小松
//

var SCRIPT_LOCATION = "script/";
var MY_UTILITIES = SCRIPT_LOCATION + "MyUtilities/";
var MODEL = SCRIPT_LOCATION + "Model/";
var VIEW = SCRIPT_LOCATION + "View/";


// スクリプトの場所にそのブロックの名前を付ける。SCRIPT_MAPのブロック名と一致させること。
var SCRIPT_LOCATION_MAP = {
    MyUtilities: MY_UTILITIES,
    Model: MODEL,
    View: VIEW,
};

//　追加するファイルをブロックに分けられる。LOCATION_MAPのブロック名と一致させること。
var SCRIPT_MAP = {
    MyUtilities: [
        "Constants.js",
        "AssetLoader.js",
        "Assets.js",
        "Preloader.js",
        "Boot.js",
        "ContactManager.js",
        "Model.js",
        "SpriteView.js",
        "GroupView.js",
        "DOMView.js",
        "MyPhaserGame.js",
	],

    Model: [
        "Music.js",
        "Stationery.js",
        "Instrument.js",
        "MusicPlayer.js"
    ],

    View: [
        "Note.js",
        "Notes.js",
        "MeasureSheet.js",
        "ScoreSheet.js",
        "MusicPlayBar.js",
        "StationeryButton.js",
        "PlayButton.js",
        "ScrollButton.js",
	],
};



//
// ココから下は気にしない
//

//　スクリプト名を含めたアドレスをHTMLタグにして返す
function toHTML(address) {
	var FRONT	= '<script src = ';
	var REAR	= '></script>';
	return FRONT + address + REAR;
};

function write_out(block_name, file) {
	var location = SCRIPT_LOCATION_MAP[block_name];
	var filename = SCRIPT_MAP[block_name][file];
	var html_tag = toHTML(location + filename);
	document.write( html_tag );
};

//　リストのスクリプトを全て書き出す
for (var block_name in SCRIPT_LOCATION_MAP)
{
	var block_num = SCRIPT_MAP[block_name].length
	for (var file = 0; file < block_num; ++file)
	{	
		write_out(block_name, file);
	};
};

