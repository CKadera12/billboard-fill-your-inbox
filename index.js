(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[868,1568,52,55],[627,1568,79,63],[0,0,976,258],[331,1568,131,250],[464,1568,73,83],[794,1568,72,59],[0,1132,329,216],[331,914,329,216],[331,1132,329,216],[662,1350,329,216],[331,260,329,216],[662,260,329,216],[662,1132,329,216],[0,1350,329,216],[331,1350,329,216],[0,914,329,216],[662,696,329,216],[662,914,329,216],[0,478,329,216],[331,696,329,216],[0,1568,329,216],[0,260,329,216],[331,478,329,216],[662,478,329,216],[0,696,329,216],[539,1568,86,59],[708,1568,84,58]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.billboardcandlethree = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.billboardredcandle = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.billboardtablefillinbox = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.billboardtowel = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.candleonebillboard = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.candletwobillboard = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookieberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cookieeight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cookieeleven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cookiefifteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cookiefive = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cookiefour = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cookiefourteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cookiefrosting = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cookiegreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cookienine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cookieone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cookieseven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cookiesix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cookiesixteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.cookieten = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cookiethirteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cookiethree = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cookietwelve = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.cookietwo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.glasstopmiddlebillboard = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.glasstoprightbillboard = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SIGNupbillboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBJQgNgGgIgLIAQgNQAFAIAJAEQAJAFAKAAQAEAAAFgBQAGgCAEgDQAEgDADgFQADgFAAgGQAAgHgDgFQgCgEgGgDIgLgGIgMgEIgPgFQgGgCgGgFQgFgFgDgHQgEgHAAgKQAAgLAFgIQAEgIAHgFQAHgFAJgDQAKgCAIAAIAMABIANADQALAFAHAIIgPAOQgFgGgHgEQgHgEgKAAIgJACQgFABgEADIgHAIQgDAEAAAGQAAAGADAFQACAEAEADIAKAEIAKAEIAQAGQAHADAHADQAGAFAEAHQAEAIAAALQAAALgEAJQgEAIgIAGQgHAGgJACQgKADgJAAQgOAAgNgFg");
	this.shape.setTransform(136.7,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBKIAAiTIAUAAIAACBIBCAAIAAASg");
	this.shape_1.setTransform(125.9,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBKIAAiTIATAAIAACTg");
	this.shape_2.setTransform(116.4,-10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyBKIgPgkIhGAAIgPAkIgXAAIBBiTIASAAIBACTgAAbATIgbhEIgbBEIA2AAg");
	this.shape_3.setTransform(105.6,-10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BKIAAh7IgyB7IgMAAIgxh7IgBAAIAAB7IgUAAIAAiTIAhAAIArBxIABAAIArhxIAhAAIAACTg");
	this.shape_4.setTransform(88.2,-10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBKIAAiTIBeAAIAAASIhJAAIAAAsIBFAAIAAARIhFAAIAAAyIBMAAIAAASg");
	this.shape_5.setTransform(72.3,-10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBKIglhCIgWAAIAABCIgVAAIAAiTIAvAAQALAAAJACQAKACAHAFQAHAFAFAIQADAHAAAMQAAAQgKAKQgEAFgHACQgGAEgJABIAqBEgAgfgIIAYAAQAHAAAGgCQAGgBAFgDQAEgDADgEQACgFABgGQgBgHgCgEQgDgFgEgDIgLgEIgMgBIgZAAg");
	this.shape_6.setTransform(53.6,-10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBNIgPgFQgOgGgLgKQgKgKgGgPQgGgOAAgRQAAgRAGgOQAGgPAKgKQALgKAOgGIAPgEQAIgBAIAAQARAAAOAFQAIADAGAEQAGAEAFAFQALAKAGAPQAGAOAAARQAAARgGAOQgGAPgLAKQgFAFgGAEQgGAEgIADQgOAGgRAAQgIAAgIgBgAgWg2QgLAEgHAJQgHAIgEALQgEALAAALQAAAMAEALQAEALAHAIQAHAIALAFQAKAEAMAAQANAAAKgEQALgFAHgIQAHgIAEgLQAEgLAAgMQAAgLgEgLQgEgLgHgIQgHgJgLgEQgKgFgNAAQgMAAgKAFg");
	this.shape_7.setTransform(37.1,-10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtBKIAAiTIBcAAIAAASIhHAAIAAAuIBBAAIAAARIhBAAIAABCg");
	this.shape_8.setTransform(22.3,-10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBKIAAiTIAtAAQALAAAKACQAKACAHAFQAHAFAEAIQADAIAAALQAAALgEAIQgEAIgHAFQgHAEgKADQgKACgLAAIgXAAIAABBgAgbgIIAWAAQAGAAAHgBQAGgBAFgDQAEgDADgFQACgEAAgHQAAgHgCgEQgDgFgEgDQgFgCgGgCIgNgBIgWAAg");
	this.shape_9.setTransform(3.8,-10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBLQgGgBgGgDIgKgGQgEgDgEgEQgHgIgDgLQgEgKAAgMIAAhcIAVAAIAABbQAAAIACAHQACAHAEAGQAEAGAHAEQAIADAJAAQAKAAAHgDQAIgEAEgGQAEgGACgHQACgHAAgIIAAhbIAVAAIAABcQAAAMgEAKQgDALgHAIQgEAEgEADIgKAGQgGADgGABQgHABgHAAQgGAAgHgBg");
	this.shape_10.setTransform(-10.9,-10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBKIhNh4IgBAAIAAB4IgVAAIAAiTIAbAAIBNB1IABAAIAAh1IAUAAIAACTg");
	this.shape_11.setTransform(-32.7,-10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTBIQgPgGgLgKQgKgKgGgPQgFgOAAgRQAAgRAFgOQAHgPAKgKIALgJIAOgHQAPgFAPAAQAKAAAHABQAIABAHADQAOAFAKAJIgPAPQgHgHgKgFIgLgDIgMgBQgMAAgKAFQgLAEgHAJQgIAIgEALQgEALAAALQAAAMAEALQAEALAIAIQAHAIALAFQAKAEANAAQAKAAAJgCQAIgBAHgEIAAgpIghAAIAAgRIA2AAIAABHQgMAGgOAEQgTADgLAAQgQAAgPgGg");
	this.shape_12.setTransform(-49.8,-10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBKIAAiTIATAAIAACTg");
	this.shape_13.setTransform(-60.9,-10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBJQgOgGgIgLIAQgNQAFAIAJAEQAJAFAKAAQAFAAAFgBQAFgCAEgDQAFgDACgFQADgFAAgGQAAgHgDgFQgDgEgEgDIgMgGIgNgEIgNgFQgIgCgFgFQgGgFgDgHQgDgHAAgKQAAgLAEgIQAFgIAIgFQAHgFAIgDQAKgCAIAAIANABIALADQAMAFAGAIIgOAOQgFgGgHgEQgHgEgKAAIgJACQgFABgFADIgHAIQgCAEAAAGQAAAGACAFQADAEAEADIAJAEIAMAEIAPAGQAHADAHADQAGAFAEAHQAEAIAAALQAAALgEAJQgFAIgGAGQgIAGgJACQgKADgIAAQgOAAgNgFg");
	this.shape_14.setTransform(-70.3,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SIGNupbillboard, new cjs.Rectangle(-78.3,-25.5,223.7,29.8), null);


(lib.redcandlebillboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardredcandle();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redcandlebillboard, new cjs.Rectangle(-39.5,-31.5,79,63), null);


(lib.partyreadyrecipesbillboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E44").s().p("AgTCEIgbgEIgHAEIgIACIgFgBIgGgEQgIgHgHgUQgIgVAAgTQAAgIAFgFQAEgGAGAAQAMAAAMAVIAKAPQAHAKAOAGQANAGAOAAQARAAAKgIQAKgJAAgOQAAgWgqgUIgPgHQgogUgOgQQgOgRAAgYQAAghAXgVQAXgVAlAAIASABIASADIAMgEIAHgCQANAAAMAUQAMAUAAAWQAAAJgEAGQgEAEgIAAQgFAAgGgEQgGgFgHgNQgKgPgKgGQgKgHgOAAQgOAAgJAJQgKAIAAANQAAAMAKAJQAJAJAfAQIADABQBHAiAAAqQAAAjgbAYQgcAYgpAAg");
	this.shape.setTransform(229.7,-14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E44").s().p("AhSBgQglglAAg3QAAg7AmgmQAlgnA5AAQAxAAAdAcQAdAcAAAwQAAAQgFAFQgFAFgTAAIhhAAQgIAAgFgFQgEgEAAgHQAAgGAEgEQAFgEAIAAIA1AAIAMgBQAEgCAAgGQAAgZgRgQQgQgRgXAAQgfAAgOAaQgPAbAAAlQAAAnAUAdQAVAdAfAAQATAAANgEQANgEAMgJIAJgHQANgKAHAAQAGAAAEADQADAEAAAFQAAAGgGAJQgHAJgKAJQgXASgUAIQgVAIgYAAQg1AAgkglg");
	this.shape_1.setTransform(205.4,-14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E44").s().p("Ah7CuQgNgEAAgLQAAgJALgEIANgHQAFgFACgUQACgUAAg/IAAgpQAAhFgCgUQgDgUgGgEIgLgEQgQgFAAgJQAAgGAFgEQAFgFAKgDIAkgMQAQgEAJAAQAIAAADAEQADADAAAJIAAANIAAAFIABABQAFgCAFgEIAKgIQAQgMAOgFQAOgGAPAAQAwAAAeAjQAeAjAAA3QAAA8giAnQgiAog0AAQgWAAgHgGQgJgHAAgKQAAgFAEgEQAEgFAIAAIAGACIAJABQAcAAARgYQARgXAAgnQAAgsgTgaQgSgbgdAAQgaAAgPAPQgPAPAAAmIAAChIABAaQABAKADADQAEAEALADIAKADIAGAFIACAHQAAAKgPAEQgPAEglAAQgkAAgNgEg");
	this.shape_2.setTransform(176.1,-9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E44").s().p("AgtC2QgMgEAAgMQAAgIAMgFIAHgDQAGgDADgJQADgJAAgSIAAgSIgBgUIAAgaQAAgpgCgLQgCgMgFgDIgMgEQgPgGAAgIQAAgGAFgEQAEgFALgEIAngMIAagFQAHAAADAFQADAFAAAMIAAAOIgBAMIgCBAIAAABIgBA/QAAAZADAKQACAKAGACIAJAFQANAEAAAKQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAKAAAOQAAAOgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_3.setTransform(154.4,-20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E44").s().p("AhQBgQgkglAAg3QAAg6AmgnQAmgnA4AAQAqAAAeAWQAdAWAAAdQAAAMgIAIQgIAHgNAAQgNAAgIgGQgHgGgJgVQgIgSgKgHQgKgIgQAAQgcAAgRAWQgQAWAAAnQAAAtAXAcQAYAdAjAAQANAAAMgDQALgEAKgGIAKgIQANgKAIAAQAFAAADADQADADAAAFQAAAGgFAJQgFAKgJAHQgUARgVAJQgWAIgaAAQg0AAgkglg");
	this.shape_4.setTransform(134.4,-14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E44").s().p("AhSBgQglglAAg3QAAg7AmgmQAlgnA5AAQAxAAAdAcQAdAcAAAwQAAAQgFAFQgFAFgTAAIhhAAQgIAAgFgFQgEgEAAgHQAAgGAEgEQAFgEAIAAIA1AAIAMgBQAEgCAAgGQAAgZgRgQQgQgRgXAAQgfAAgOAaQgPAbAAAlQAAAnAUAdQAVAdAfAAQATAAANgEQANgEAMgJIAJgHQANgKAHAAQAGAAAEADQADAEAAAFQAAAGgGAJQgHAJgKAJQgXASgUAIQgVAIgYAAQg1AAgkglg");
	this.shape_5.setTransform(107.7,-14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E44").s().p("AA3B/QgYhRgSgQQgSgRgaAAQgUAAAAgQQAAgQARAAQAqAAAUgQQAUgRAAgiQAAgigUgRQgVgRgnAAQgUAAgHACQgIADgCAIIgDAWIgBAzIAABwIACBNQABARAFAEIALAFQAQAGAAALQAAAKgOAFQgOAEgpABQgngBgOgEQgPgFAAgKQAAgLAQgGIALgGQAGgEACgeQACgeAAhQIgChgQgCglgDgEQgDgEgNgGQgOgFAAgKQAAgJAIgFQAIgEAQAAIA4AAIAzgBIAogBQA4AAAdAXQAdAYAAAtQAAAigTAYQgUAZgjAKIAAADQAcAFAPAQQAQARAMAqIAHAZQAJAoAPAAIAIgBIAJAAQAFAAAEADQAEAEAAAFQAAAMgPAIQgPAHgYAAQgyAAgRg7g");
	this.shape_6.setTransform(76.6,-19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E44").s().p("Ah1CoQgMgKAAgQQAAgNAJgJQAJgJAMAAIAMACIAHAFIAHAKQAHAKAFAAQANAAANgTQANgTAAgUQAAgVgRgpIgDgGIgphYIgXgyQgFgJgPgGIAAgBQgJgDgDgEQgDgDAAgGQAAgLAOgEQANgFAlAAQAmAAAMAEQANAEAAALIgCAHIgFAFIgJAFQgKADAAAFIAFATIAVAzIAUAwQAHAMAEAAQACAAAGgMIARgoIASgzQAGgSAAgGQAAgIgOgIQgOgIAAgGQAAgJALgEQAMgEAdAAQAeAAALAEQALAEAAALQAAAJgPAEIgKADQgPAIgQArIgHAUIghBRQgqBqgaAgQgbAgglAAQgTAAgMgLg");
	this.shape_7.setTransform(31.1,-9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E44").s().p("AhvCaQgegiAAg3QAAg/AigmQAjgnA2ABIASABQAIADAFAGQADAFAAAGQAAAOgQAAIgHAAIgGgBQgdAAgRAXQgRAXAAAoQAAAqATAbQASAbAcAAQAbAAAPgPQAOgOAAgcIAAhGIAAh1QAAgSgDgHQgEgHgJgDIgHgCQgQgEAAgKQAAgGAHgFQAGgFATgIIAdgHIAXgEQAJAAAEAGQAEAEgBAMIAAAMIgCCdIABBrQACAZAEACIASAGQANAEAAAIQAAAMglAMIgZAHIgUACQgGAAgEgEQgDgEAAgJIAAgMIAAgFIgCgCIgIAGIgLAJQgPALgOAFQgPAFgPAAQgwABgegjg");
	this.shape_8.setTransform(4,-20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E44").s().p("AAtB4IgOgNIgLAFQgeAVggAAQglAAgXgWQgXgVAAgjQAAgpAdgWQAegXA1AAQANAAAHAEQAFAEAAAJQAAAPgRgBQgZAAgPANQgQAMAAAVQAAAVAOANQANAMAWgBQAZABAKgMQALgLAAgaIAAhhQAAgWgKgMQgJgMgSAAQgMAAgLAFQgKAGgLALIgFAHQgQATgRAAQgKAAgGgFQgGgIAAgKQAAgZAdgQQAegQAvAAQAbAAAUAHQAUAIAMAOQAHAKAEAPQADAQAAAkIAABSQAAAOACAIQADAGAFACIAIACQAQAFAAAIQAAANgRAKQgRAJgXAAQgMAAgMgNg");
	this.shape_9.setTransform(-25.3,-14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E44").s().p("AhSBgQglglAAg3QAAg7AmgmQAlgnA5AAQAxAAAdAcQAdAcAAAwQAAAQgFAFQgFAFgTAAIhhAAQgIAAgFgFQgEgEAAgHQAAgGAEgEQAFgEAIAAIA1AAIAMgBQAEgCAAgGQAAgZgRgQQgQgRgXAAQgfAAgOAaQgPAbAAAlQAAAnAUAdQAVAdAfAAQATAAANgEQANgEAMgJIAJgHQANgKAHAAQAGAAAEADQADAEAAAFQAAAGgGAJQgHAJgKAJQgXASgUAIQgVAIgYAAQg1AAgkglg");
	this.shape_10.setTransform(-52.7,-14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E44").s().p("AA3B/QgYhRgSgQQgSgRgaAAQgUAAAAgQQAAgQARAAQAqAAAUgQQAUgRAAgiQAAgigUgRQgVgRgnAAQgUAAgHACQgIADgCAIIgDAWIgBAzIAABwIACBNQABARAFAEIALAFQAQAGAAALQAAAKgOAFQgOAEgpABQgngBgOgEQgPgFAAgKQAAgLAQgGIALgGQAGgEACgeQACgeAAhQIgChgQgCglgDgEQgDgEgNgGQgOgFAAgKQAAgJAIgFQAIgEAQAAIA4AAIAzgBIAogBQA4AAAdAXQAdAYAAAtQAAAigTAYQgUAZgjAKIAAADQAcAFAPAQQAQARAMAqIAHAZQAJAoAPAAIAIgBIAJAAQAFAAAEADQAEAEAAAFQAAAMgPAIQgPAHgYAAQgyAAgRg7g");
	this.shape_11.setTransform(-83.8,-19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E44").s().p("AgyAaQgIABgDgDQgDgDAAgHIACgMIAGgOQADgHAEgCQAEgDAKAAIANAAIAWAAIArgBIAHgBQAIAAAEAEQADADAAAGQAAAOgIANQgIAMgLgBIgMAAIgPAAIg4ABIgFAAg");
	this.shape_12.setTransform(-111.3,-14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E44").s().p("Ah1CoQgMgKAAgQQAAgNAJgJQAJgJAMAAIAMACIAHAFIAHAKQAHAKAFAAQANAAANgTQANgTAAgUQAAgVgRgpIgDgGIgphYIgXgyQgFgJgPgGIAAgBQgJgDgDgEQgDgDAAgGQAAgLAOgEQANgFAlAAQAmAAAMAEQANAEAAALIgCAHIgFAFIgJAFQgKADAAAFIAFATIAVAzIAUAwQAHAMAEAAQACAAAGgMIARgoIASgzQAGgSAAgGQAAgIgOgIQgOgIAAgGQAAgJALgEQAMgEAdAAQAeAAALAEQALAEAAALQAAAJgPAEIgKADQgPAIgQArIgHAUIghBRQgqBqgaAgQgbAgglAAQgTAAgMgLg");
	this.shape_13.setTransform(-132.6,-9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E44").s().p("AgNCZQgNgEgJgIQgJgJgDgOQgEgOAAgmIAAiIIgYAAIgHgCIgCgGIAAgGQAAgJAbgWIAKgJIAKgJQAagXAKAAIAHACQADACAAAEIAAAwIA5AAQAGAAADACQACADAAAHIAAAGQAAAGgCADQgDADgGAAIg1AAIgDADIgCAFIAAB+QAAAhAGAIQAFAJAPAAQAIAAANgFIARgEQAGAAADAEQAEADAAAFQAAAOgVANQgWANgcAAQgOAAgNgEg");
	this.shape_14.setTransform(-154.4,-16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E44").s().p("AhMB+QgNgEAAgLQAAgJAMgEIAHgDQAGgDADgKQADgIAAgTIAAgSIAAgUIAAgOQgBgvgCgOQgCgPgFgCIgMgFQgPgFAAgIQAAgHAEgDQAFgFAMgEIAigMIAWgEQANAAAEAjIABAEIABABQANgUAOgLQAPgKAOAAQASAAALAKQAKALAAARQAAASgIAKQgJAKgOAAIgNgCIgKgIIgGgKQgDgGgCAAQgTAAgGAYQgGAZAABMQAAAXACALQADALAGADIALADQAPAFAAALQAAAJgOAEQgOAFgjAAQgmAAgMgFg");
	this.shape_15.setTransform(-172.6,-14.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E44").s().p("AAtB4IgNgNIgLAFQggAVgfAAQglAAgXgWQgXgVAAgjQAAgpAegWQAdgXA1AAQANAAAGAEQAHAEAAAJQAAAPgSgBQgZAAgPANQgPAMAAAVQAAAVANANQANAMAWgBQAYABALgMQALgLAAgaIAAhhQAAgWgKgMQgKgMgRAAQgMAAgLAFQgLAGgKALIgFAHQgPATgSAAQgKAAgGgFQgGgIAAgKQAAgZAegQQAegQAtAAQAcAAAVAHQATAIAMAOQAHAKADAPQAEAQAAAkIAABSQAAAOADAIQACAGAFACIAIACQAQAFAAAIQAAANgRAKQgSAJgWAAQgLAAgNgNg");
	this.shape_16.setTransform(-196.3,-14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E44").s().p("AiEC1QgOgFAAgLQAAgKAQgHIALgFQAGgEACgeQACgfAAhQIgChfQgCgmgEgEQgCgEgOgGQgNgFAAgKQAAgJAIgEQAIgFAPAAIAbAAIAeAAIAygBIApgBQA5AAAcAZQAdAYAAAwQAAA1gjAcQgkAchDAAQgZAAAAgSQAAgRAWAAQAgAAATgRQAUgQAAgmQAAgjgUgQQgVgSgoABQgTAAgHACQgIADgCAHIgDAYIgCA1IAABvIACBIQACAUAEAEIAMAEQAPAHAAAKQAAALgNAFQgOAEgpAAQgoAAgOgEg");
	this.shape_17.setTransform(-224.8,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyrecipesbillboard, new cjs.Rectangle(-242.9,-52.5,485.8,64.5), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.kalelogobillboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgUgDgIgEQgJgFAAgNQAAgKAGgHQAFgHAJAAIARAAQAKAAAFgLQADgKgBgXIAAl5QABgXgDgKQgFgLgKAAIgRAAQgJAAgFgHQgGgHAAgKQAAgNAJgFQAIgEAUgDQBegNBrAAQBNAAA1ASQA1ASAnAoQAlAlAVA5QATA4AABEQAABNgZA9QgZA+gwAlQglAegvAOQgxAOhEAAQhrAAhegNgAgvjrQgcAFgKALQgKAMAAAhIAAFjQAAAhAVALQANAHAnADQBNAEAshAQAqg/ABhwQAAhwgrg/Qgrg/hKAAIgdADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBeIghgxQgFgJgKAAIgtAAQgEAAgDADQgDACgBAFIABAwQAAAHgKACIgPAAQgNAAAAgLIAAi6QAAgIAJAAIBrAAQAgAAAUASQAVAUgBAgQAAAXgOAPQgIAJgPAJQgHAIAEAFIAiAyQAFAHgFAFQgEAEgPAAQgRAAgFgJgAg5g4IAAAuQABAFAEADQAEACAFAAIA+AAQAQAAALgHQALgKAAgPQAAgRgLgJQgLgJgQAAIg+AAQgOAAAAALg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAgBABAAQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBlQgFgDAAgFIgOhrQgCgHgFAAQgDAAgDAEIgxA+QgEAFgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBpQgCAKgTAAQgGAAgFgCQgGgDAAgGIAVixQACgJADgCQAEgFALAAQAKAAAFAIIA4BPQAFAIAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAJIAVC1QABAKgXAAQgFAAgFgCg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDxQhFg2gYheIgBgDQgCgLgHABQgGgBgCALIgBABQgYBghGA2QhIA2hoAAQh+AAhMhQQhMhRAAiFQAAiGBMhRQBLhQCAAAQBpAABHA2QBHA3AXBgQACALAGgBQAHAAACgLIABAAQAXhgBGg2QBHg2BoAAQB/AABNBPQBMBQAACGQAACHhMBRQhNBQiBAAQhmAAhHg2gACniqQgpA/AABtQAABtApA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/gAmFiqQgoA/AABtQAABtAoA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIQAKgHAIAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAIQgNAIgQABQgTgBgKgIQgLgKgJgYIimm+QgKgZgHgIQgHgHgUgFQgOgBgFgGQgFgFAAgKQAAgXAdAAICvAAQAcAAAAAXQAAAMgHAEQgHAFgRABQgOACgGAEQgGAFAAALQAAAIADALIBzFGQACAFAFAAQAEgBACgFIA/i1QAIgZgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgEgGgEQgFgGAAgJQAAgaAdAAICnAAQAdAAAAAXQAAATgcAFQgRABgFAFQgGAFAAALQAAALAIAZIBfEsQACAFAEAAQAFgBABgFIBdk6QAEgLAAgJQAAgTgdgDQgbgCAAgWQAAgMAHgGQAIgGARAAIElAAQAVAAAIAGQAIAFAAAOQAAAKgGAHQgGAHgJAAIgQAAQgLAAgFAKQgCAJAAAZIAABuQAAAdAFAHQAGAGAXAAIB0AAQAXAAAHgHQADgEAAgGIABgfIAAhoQAAgbgDgHQgFgKgKAAIgQAAQgKAAgHgHQgGgHAAgKQAAgOAIgFQAJgGAWAAICaAAQAWAAAJAGQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBADQgDAKAAAYIAAF8QAAAYADALQABADAFAEQAEACAEAAIASAAQAJAAAGAIQAHAGAAAKQAAAOgJAGQgIAEgXAAIiaAAQgWAAgIgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIAQAAQAKABAFgKQADgIAAgbIAAh8IgBgdQAAgHgDgDQgHgIgXAAIh0AAQgXAAgGAHQgFAGAAAeIAACAQAAAZACAKQAFAKALgBIAQAAQAJAAAGAIQAGAGAAALQAAANgIAGQgIAEgVAAIiaAAQgWAAgJgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIARAAQAEAAAFgCQAEgEABgDQADgIAAgbIAAl8QAAgwgkAEQgLABgHAJQgIAKgGAVIiHGzQgJAfgKAMQgLAKgTABQgTAAgLgKg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDACgEQADgIAAgXIAAmAQAAgZgDgHQgDgMgLAAIgRAAQgKABgGgHQgHgHAAgKQAAgOAJgFQAJgGAWAAICcAAQAWAAAJAGQAJAFAAAOQAAAKgGAHQgHAHgJgBIgSAAQgOAAgDAMQgDAFAAAbIAAFkQAAAdACAJQACAJAIAFQAGAFALABQALACAaAAIAwAAQAvAAAPggIAIgQQAIgPAPAAQAMgBAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgaAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZMQk7iEjyjzQjxjxiFk6QiKlGAAljQAAljCKlGQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE7CFDxDxQDyDzCFE6QCKFGAAFjQAAFjiKFGQiFE6jyDxQjxDzk7CEQlFCKlkAAQljAAlFiKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kalelogobillboard, new cjs.Rectangle(-175,-175,350,350), null);


(lib.glasstoprightbillboard_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glasstoprightbillboard();
	this.instance.parent = this;
	this.instance.setTransform(-42,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glasstoprightbillboard_1, new cjs.Rectangle(-42,-29,84,58), null);


(lib.glasstopmiddlebillboard_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glasstopmiddlebillboard();
	this.instance.parent = this;
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glasstopmiddlebillboard_1, new cjs.Rectangle(-43,-29.5,86,59), null);


(lib.diybillboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgTCEIgbgEIgHAEIgIACIgFgBIgGgEQgIgHgHgUQgIgVAAgTQAAgIAFgFQAEgGAGAAQAMAAAMAVIAKAPQAHAKAOAGQANAGAOAAQARAAAKgIQAKgJAAgOQAAgWgqgUIgPgHQgogUgOgQQgOgRAAgYQAAghAXgVQAXgVAlAAIASABIASADIAMgEIAHgCQANAAAMAUQAMAUAAAWQAAAJgEAGQgEAEgIAAQgFAAgGgEQgGgFgHgNQgKgPgKgGQgKgHgOAAQgOAAgJAJQgKAIAAANQAAAMAKAJQAJAJAfAQIADABQBHAiAAAqQAAAjgbAYQgcAYgpAAg");
	this.shape.setTransform(91.4,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("Ah7CuQgNgEAAgLQAAgJALgEIANgHQAFgFACgUQACgUAAg/IAAgpQAAhFgCgUQgDgUgGgEIgLgEQgQgFAAgJQAAgGAFgEQAFgFAKgDIAkgMQAQgEAJAAQAIAAADAEQADADAAAJIAAANIAAAFIABABQAFgCAFgEIAKgIQAQgMAOgFQAOgGAPAAQAwAAAeAjQAeAjAAA3QAAA8giAnQgiAog0AAQgWAAgHgGQgJgHAAgKQAAgFAEgEQAEgFAIAAIAGACIAJABQAcAAARgYQARgXAAgnQAAgsgTgaQgSgbgdAAQgaAAgPAPQgPAPAAAmIAAChIABAaQABAKADADQAEAEALADIAKADIAGAFIACAHQAAAKgPAEQgPAEglAAQgkAAgNgEg");
	this.shape_1.setTransform(64.2,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_2.setTransform(42,-19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("Ag1C1QgPgFAAgLQABgKAOgFQANgFADgEQADgEABgrIACh4IgBhCIgCgqQgBgGgFgDQgEgBgKAAIgMAAQgRAAgKADQgJAFgHAKIgIARIgIARIgHAIQgFADgFAAQgIAAgCgHQgEgGAAgQQAAghAIgVQAHgUANgBIADAAQAUAEAfAAICVAAQAfAAAVgEIACAAQANABAHAUQAIAVAAAhQAAAPgDAHQgEAHgIAAIgIgDIgIgIIgIgRIgIgRQgGgKgLgFQgKgDgRAAIgLAAQgKAAgFABQgDADgBAHIgCApIgCBCIACB4QABArADAEQADAEAOAFQANAFAAAKQAAALgOAFQgPAFgnAAQgnAAgOgFg");
	this.shape_3.setTransform(17.9,-19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("Ag1CzQgOgEAAgLQgBgLARgGIALgFQAIgHABhnIAAgYIgegxIgxhMQgPgVgHgGIgNgFQgRgGAAgKQAAgKAMgEQAMgEAyAAQAxAAAMAEQAMAEAAAKQAAAKgUAHIgCABIgIAFIgCAIQAAAFALATIAzBOIArhBQAPgYAAgHQAAgHgEgEQgEgEgMgFQgJgEgDgDQgEgEABgGQAAgKAKgEQAKgEArAAQApAAAKAEQALAEAAAKQAAAKgPAGIgSAKQgMAJgYAkQgYAlgmA/IABAtQABBVAHAGIALAFQARAGgBALQABALgOAEQgOAFgpAAQgnAAgOgFg");
	this.shape_4.setTransform(-30.1,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("Ag1CzQgOgEAAgLQAAgLAQgGIALgFQAFgFADgeQACgeAAhQIgChgQgCglgEgEQgCgEgOgFQgNgGAAgKQAAgKALgEQALgEAtAAQAuAAALAEQALADAAALQAAAKgPAGIgLAGQgFADgCAaIgCBTIABB5QACAtADAEQADAEANAFQANAFAAALQAAALgNAEQgOAFgpAAQgnAAgOgFg");
	this.shape_5.setTransform(-55.2,-19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("Ag3C3IggAAIgVAAIgVABQgfAAgKgEQgKgFAAgKQAAgKAOgFQANgGADgDQADgFACgnIAChiIgCheQgCgngDgFQgDgEgNgFQgOgGAAgKQAAgKALgEQALgEAeAAIAWAAIAaABIAigBIAdgBQBeAAA0AxQA0AxAABZQAABZg1AuQg1AthlAAgAg4iQQgLAEgDAIQgDAJgCAeIgCBNIACBhQACAoADAIQADAIAQAFQARAGAXAAQA6AAAegjQAdgkAAhHQAAhLghgoQgigng+AAQgVAAgMAEg");
	this.shape_6.setTransform(-83.6,-19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.diybillboard, new cjs.Rectangle(-105.1,-52.2,210.2,64.5), null);


(lib.ctarollovervideomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AzmDwIAAnfMAnNAAAIAAHfg");
	this.shape.setTransform(0,0,1.014,0.968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarollovervideomc, new cjs.Rectangle(-127.2,-23.2,254.6,46.5), null);


(lib.cookietwo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwo();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwo_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookietwelve_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwelve();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwelve_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiethree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethree();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiethree_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiethirteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethirteen();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiethirteen_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiesixteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesixteen();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesixteen_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiesix_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesix();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesix_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookieseven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseven();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieseven_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookieone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieone();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieone_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookienine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookienine_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiegreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiegreens_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiefrosting_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefrosting();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefrosting_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiefourteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefourteen();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefourteen_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiefour_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefour();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefour_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiefive_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefive();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefive_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookiefifteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefifteen();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefifteen_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookieelevenone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeleven();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieelevenone, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookieeleven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieten();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeleven_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookieeight_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeight();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeight_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.cookieberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieberries();
	this.instance.parent = this;
	this.instance.setTransform(-164.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieberries_1, new cjs.Rectangle(-164.5,-108,329,216), null);


(lib.candle3billboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.billboardcandlethree();
	this.instance.parent = this;
	this.instance.setTransform(-26,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle3billboard, new cjs.Rectangle(-26,-27.5,52,55), null);


(lib.candle2billboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candletwobillboard();
	this.instance.parent = this;
	this.instance.setTransform(-36,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle2billboard, new cjs.Rectangle(-36,-29.5,72,59), null);


(lib.candle1billboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candleonebillboard();
	this.instance.parent = this;
	this.instance.setTransform(-36.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle1billboard, new cjs.Rectangle(-36.5,-41.5,73,83), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.billboardsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgTCEIgbgEIgHAEIgIACIgFgBIgGgEQgIgHgHgUQgIgVAAgTQAAgIAFgFQAEgGAGAAQAMAAAMAVIAKAPQAHAKAOAGQANAGAOAAQARAAAKgIQAKgJAAgOQAAgWgqgUIgPgHQgogUgOgQQgOgRAAgYQAAghAXgVQAXgVAlAAIASABIASADIAMgEIAHgCQANAAAMAUQAMAUAAAWQAAAJgEAGQgEAEgIAAQgFAAgGgEQgGgFgHgNQgKgPgKgGQgKgHgOAAQgOAAgJAJQgKAIAAANQAAAMAKAJQAJAJAfAQIADABQBHAiAAAqQAAAjgbAYQgcAYgpAAg");
	this.shape.setTransform(235.1,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AA4CBQgEgEAAgIIAAgSIgBgBIAAAAQgEAAgGAFIgDAFQgMAMgPAGQgPAGgTAAQgTAAgQgHQgRgHgMgOQgMgOgEgUQgGgVAAg2IAAgRIAAgTIAAgFQAAgVgCgFQgEgHgIgDIgLgDQgOgEAAgJQAAgGAFgEQAFgFASgGIAjgKIAbgDQAHAAADAFQADAFgBALIAAALIgCBeQAAA0AKATQALAVAagBQAcAAAOgaQAMgZAAg9IAAgUQAAgUgDgFQgDgHgIgDIgLgDQgOgEAAgJQAAgGAFgEQAFgFASgGIAigKIAbgDQAHAAADAFQADAFAAALIAAAOIgDBpIAAArIACARQACALANAEIAFACQAOAFAAAJQAAAFgEAFQgFADgLAFIgkALQgRAFgKAAQgHAAgDgEg");
	this.shape_1.setTransform(208.3,-14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AhcBfQgkglAAg5QAAg4AmgnQAmgmA4AAQA3AAAjAkQAjAkAAA3QAAA7glAnQgmAog3AAQg3AAgkgmgAgwhLQgPAUAAAiQAAAyAVAiQAVAiAeAAQAZAAAQgVQAPgVAAgiQAAgxgVgiQgWgigdAAQgaAAgPAVg");
	this.shape_2.setTransform(178.4,-14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_3.setTransform(156.2,-19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AhQBgQgkglAAg3QAAg6AmgnQAmgnA4AAQAqAAAeAWQAdAWAAAdQAAAMgIAIQgIAHgNAAQgNAAgIgGQgHgGgJgVQgIgSgKgHQgKgIgQAAQgcAAgRAWQgQAWAAAnQAAAtAXAcQAYAdAjAAQANAAAMgDQALgEAKgGIAKgIQANgKAIAAQAFAAADADQADADAAAFQAAAGgFAJQgFAKgJAHQgUARgVAJQgWAIgaAAQg0AAgkglg");
	this.shape_4.setTransform(135.5,-14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_5.setTransform(114.4,-19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgrC3QgMgEAAgLQAAgIAKgFIAOgHQAEgEACgQIABgyIAAgoIAAgvIAAgUQAAhAgCgSQgDgTgFgDIgPgFQgRgFABgJQAAgGAEgEQAGgFASgGIAigJIAagEQAHAAADAFQADAEAAAMIgBAUQgCBbAABbIABBXQACATAEAFIAOAHQANAFAAAJQAAAKgOAEQgMAEghAAQgnAAgMgEg");
	this.shape_6.setTransform(99.2,-20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AhSBgQglglAAg3QAAg7AmgmQAlgnA5AAQAxAAAdAcQAdAcAAAwQAAAQgFAFQgFAFgTAAIhhAAQgIAAgFgFQgEgEAAgHQAAgGAEgEQAFgEAIAAIA1AAIAMgBQAEgCAAgGQAAgZgRgQQgQgRgXAAQgfAAgOAaQgPAbAAAlQAAAnAUAdQAVAdAfAAQATAAANgEQANgEAMgJIAJgHQANgKAHAAQAGAAAEADQADAEAAAFQAAAGgGAJQgHAJgKAJQgXASgUAIQgVAIgYAAQg1AAgkglg");
	this.shape_7.setTransform(78.4,-14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("Ag3C3IggAAIgVAAIgVABQgfAAgKgEQgKgFAAgKQAAgKAOgFQANgGADgDQADgFACgnIAChiIgCheQgCgngDgFQgDgEgNgFQgOgGAAgKQAAgKALgEQALgEAeAAIAWAAIAaABIAigBIAdgBQBeAAA0AxQA0AxAABZQAABZg1AuQg1AthlAAgAg4iQQgLAEgDAIQgDAJgCAeIgCBNIACBhQACAoADAIQADAIAQAFQARAGAXAAQA6AAAegjQAdgkAAhHQAAhLghgoQgigng+AAQgVAAgMAEg");
	this.shape_8.setTransform(44.5,-19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AheCnQgggVAAgcQAAgMAHgIQAGgJAPAAQAKAAAGAGQAGAGADAMQAGASAQAMQARAKAeAAQAiAAAWgNQAXgNAAgUQAAgLgJgHQgIgHgQAAIgdACIgnADQgtAAgZgQQgYgQAAgUQAAgMAJgNQAIgMATgKQgPgNgIgRQgHgQAAgUQAAgpAfgcQAfgbAwAAIAbACIAnAIQAJAAALgFQALgFAQgLIAJAHIACAJQAAAMgIAKQgIAJgPAIIAIAVIADAUQAAArgfAbQgfAZgxAAIgcgCIgYgFIgHAJIgDAKQAAAMAMAGQAMAGAZAAIAmgEIAogCQAkAAASAOQATAOAAAbQAAApgoAcQgnAag9AAQgxAAgggTgAgph+QgOARAAAZQAAAaANAQQANAPAVAAQAVAAAOgPQAOgQAAgaQAAgagOgQQgNgRgVAAQgVAAgNARg");
	this.shape_9.setTransform(-2.6,-9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("Ah9B+QgMgEAAgLQAAgJAMgEIAHgDQAGgDADgKQADgIAAgTIAAgSIgBgUIAAgZQAAgogCgNQgCgMgFgCIgMgFQgPgFAAgIQAAgGAFgFQAEgEALgFIAlgLIAbgEQAHAAADADQADAEAAAIIAAARIAAADIACABIABAAIABgBIAGgGIAGgFQAbgZAgAAQASAAARAHQARAIAMAOQALAOAFAUQAFASAAApIAAAiIAAARIAAAPQAAARACAIQADAHAGAEIAHADQAMAEAAAJQAAALgLAEQgMAEgnAAQgkAAgMgEQgMgEAAgJQAAgKAMgFIAKgEQAGgDACgLQADgLAAgcQAAhRgLgUQgKgVgbAAQgNABgMAIQgMAIgHANQgGALgCAVQgCATAAAyQAAAYACAJQACAIAGADIAJAEQANAFAAAKQAAAJgMAEQgNAEghABQgngBgNgEg");
	this.shape_10.setTransform(-32.9,-14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_11.setTransform(-55.9,-19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AAkC3QgNgEAAgKQAAgJANgGIAJgEQAGgDADgLQACgKAAgcQAAhRgLgUQgKgVgaAAQgNAAgNAIQgMAIgGANQgHALgCAUQgBAUAAAxQAAAaABAIQADAJAFACIAKAEQAMAGAAAJQAAAKgMAEQgMAEghAAQgoAAgNgEQgMgEAAgLQAAgJAMgFIAHgDQAHgDADgLQADgLgBgcIAAgpIAAgnIgBhzQgCgcgEgFQgCgEgQgEQgPgEABgJQAAgHAGgFQAGgFAXgIIAZgHIAXgDQAJAAAEAFQADAEABAMIgBALIgCBlIAAANIABAGIADACIAHgGIAIgKQANgNAPgFQANgHAQAAQArAAAWAcQAVAcABA5IAAAYIAAAtIAAAPQAAANACAFQADAGAFADIAHADQAMAFAAAJQABALgMAEQgNAEgoAAQghAAgMgEg");
	this.shape_12.setTransform(-79.2,-20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgNCZQgNgEgJgIQgJgJgDgOQgEgOAAgmIAAiIIgYAAIgHgCIgCgGIAAgGQAAgJAbgWIAKgJIAKgJQAagXAKAAIAHACQADACAAAEIAAAwIA5AAQAGAAADACQACADAAAHIAAAGQAAAGgCADQgDADgGAAIg1AAIgDADIgCAFIAAB+QAAAhAGAIQAFAJAPAAQAIAAANgFIARgEQAGAAADAEQAEADAAAFQAAAOgVANQgWANgcAAQgOAAgNgEg");
	this.shape_13.setTransform(-103.5,-16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AhSBgQglglAAg3QAAg7AmgmQAlgnA5AAQAxAAAdAcQAdAcAAAwQAAAQgFAFQgFAFgTAAIhhAAQgIAAgFgFQgEgEAAgHQAAgGAEgEQAFgEAIAAIA1AAIAMgBQAEgCAAgGQAAgZgRgQQgQgRgXAAQgfAAgOAaQgPAbAAAlQAAAnAUAdQAVAdAfAAQATAAANgEQANgEAMgJIAJgHQANgKAHAAQAGAAAEADQADAEAAAFQAAAGgGAJQgHAJgKAJQgXASgUAIQgVAIgYAAQg1AAgkglg");
	this.shape_14.setTransform(-126.7,-14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AjOB+QgMgEAAgLQAAgJAMgEIAHgDQAGgDADgKQACgIAAgTIAAgSIAAgUIAAgPQAAgugCgOQgCgOgFgDIgMgFQgPgFAAgIQAAgGAEgEIAQgJIAlgNIAagEQAHgBADAFQADAEABAJIAAANIAAADIAAADIACABIABAAIABgBIAGgGIADgCQAegcAgAAQALAAAMADQAKAEALAGQAIAHAKALQAJAMADAAQAEAAAGgIIAMgMQAQgOAMgFQAMgEAPAAQAeAAAWAMQAWALAKAWQAMAXAABLIAAAYIAAAOIAAAMQAAAPACAGQADAGAGAEIAHADQANAEgBAJQABALgMAEQgNAEgnAAQgkAAgNgEQgNgEAAgJQAAgKAOgFIAJgFQAGgDAEgMQACgNAAgeQAAhLgKgUQgLgVgaAAQgfAAgMAbQgNAZAAA+IAAANQAAAcADAIQADAKAGADIAHADQAMAEAAAJQAAALgLAEQgMAEgoAAQgjAAgLgEQgNgEAAgJQAAgKANgFIAKgEQAGgDACgLQACgKAAgdQAAhRgKgUQgLgVgaAAQgOABgMAIQgMAIgHANQgGAMgCAVQgCAUAAAwQAAAYACAIQABAJAHADIAJAEQANAFAAAKQAAAJgMAEQgNAEgiABQgngBgMgEg");
	this.shape_15.setTransform(-164.3,-14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AhcBfQgkglAAg5QAAg4AmgnQAmgmA4AAQA3AAAjAkQAjAkAAA3QAAA7glAnQgmAog3AAQg3AAgkgmgAgwhLQgPAUAAAiQAAAyAVAiQAVAiAeAAQAZAAAQgVQAPgVAAgiQAAgxgVgiQgWgigdAAQgaAAgPAVg");
	this.shape_16.setTransform(-202.3,-14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("Ag+C4QgdgHgSgKQgKgGgGgWQgHgWAAgcQAAgMAEgGQAFgGAIAAQAMAAAMAWIAGAMQARAcATAMQATAOAaAAQAcgBATgQQAUgQAAgZQAAgjhMghIgIgEQg9gagVgWQgUgYAAgjQAAguAigdQAigeA1AAIAeADIAjAIIALgHIAIgCQAGAAAFAEQAFADAFAKQAJAQAFAQQAFARAAANQAAAJgEAEQgEAFgHAAQgNAAgNgTIgEgEQgOgUgRgIQgSgJgVAAQgcAAgQANQgQANAAAXQAAAVANAOQAOAOA2AXIALAFQAtATAUARQAPANAHARQAHASAAATQAAA1gkAdQglAdhAAAQgeAAgcgGg");
	this.shape_17.setTransform(-232.1,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billboardsomethingdelicious, new cjs.Rectangle(-248.9,-52.2,497.9,64.5), null);


(lib.billboardholidayinspiration = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("Ah9B+QgMgEAAgLQAAgJAMgEIAHgDQAGgDADgKQADgIAAgTIAAgSIgBgUIAAgZQAAgogCgNQgCgMgFgCIgMgFQgPgFAAgIQAAgGAFgFQAEgEALgFIAlgLIAbgEQAHAAADADQADAEAAAIIAAARIAAADIACABIABAAIABgBIAGgGIAGgFQAbgZAgAAQASAAARAHQARAIAMAOQALAOAFAUQAFASAAApIAAAiIAAARIAAAPQAAARACAIQADAHAGAEIAHADQAMAEAAAJQAAALgLAEQgMAEgnAAQgkAAgMgEQgMgEAAgJQAAgKAMgFIAKgEQAGgDACgLQADgLAAgcQAAhRgLgUQgKgVgbAAQgNABgMAIQgMAIgHANQgGALgCAVQgCATAAAyQAAAYACAJQACAIAGADIAJAEQANAFAAAKQAAAJgMAEQgNAEghABQgngBgNgEg");
	this.shape.setTransform(211.2,-14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AhcBfQgkglAAg5QAAg4AmgnQAmgmA4AAQA3AAAjAkQAjAkAAA3QAAA7glAnQgmAog3AAQg3AAgkgmgAgwhLQgPAUAAAiQAAAyAVAiQAVAiAeAAQAZAAAQgVQAPgVAAgiQAAgxgVgiQgWgigdAAQgaAAgPAVg");
	this.shape_1.setTransform(181.3,-14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_2.setTransform(159.1,-19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgNCZQgNgEgJgIQgJgJgDgOQgEgOAAgmIAAiIIgYAAIgHgCIgCgGIAAgGQAAgJAbgWIAKgJIAKgJQAagXAKAAIAHACQADACAAAEIAAAwIA5AAQAGAAADACQACADAAAHIAAAGQAAAGgCADQgDADgGAAIg1AAIgDADIgCAFIAAB+QAAAhAGAIQAFAJAPAAQAIAAANgFIARgEQAGAAADAEQAEADAAAFQAAAOgVANQgWANgcAAQgOAAgNgEg");
	this.shape_3.setTransform(142.6,-16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AAtB4IgOgNIgLAFQgeAVggAAQglAAgXgWQgXgVAAgjQAAgpAdgWQAegXA1AAQANAAAHAEQAFAEAAAJQAAAOgRABQgZAAgPAMQgQAMAAAVQAAAVAOANQANAMAXgBQAXABAMgLQAKgMAAgaIAAhgQAAgXgKgMQgKgMgQAAQgNAAgLAFQgKAGgLALIgFAHQgQAUgRgBQgKABgGgHQgGgGAAgMQAAgXAdgQQAegRAvAAQAbAAAUAIQAVAHALAOQAIAKADAPQADAQAAAlIAABRQAAAOACAHQADAIAFABIAIACQAQAEAAAJQAAAMgRALQgSAJgWAAQgMAAgMgNg");
	this.shape_4.setTransform(119.7,-14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AhMB+QgNgEAAgLQAAgIAMgFIAHgDQAGgDADgKQADgIAAgTIAAgSIAAgUIAAgPQAAgugDgOQgBgOgGgDIgMgFQgPgFAAgIQAAgGAEgFQAFgEAMgFIAigLIAWgEQANAAAEAjIABAEIABABQANgUAOgLQAPgLAOABQASgBALALQAKALAAASQAAARgIAKQgIALgOgBIgOgBIgKgJIgGgJQgDgHgCAAQgTAAgGAZQgGAXAABNQAAAXACALQADALAHADIAKAEQAPAEAAALQAAAJgOAEQgOAEgjABQgmgBgMgEg");
	this.shape_5.setTransform(96.1,-14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_6.setTransform(77.9,-19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("Ah7CuQgNgEAAgLQAAgJALgEIANgHQAFgFACgUQACgUAAg/IAAgpQAAhFgCgUQgDgUgGgEIgLgEQgQgFAAgJQAAgGAFgEQAFgFAKgDIAkgMQAQgEAJAAQAIAAADAEQADADAAAJIAAANIAAAFIABABQAFgCAFgEIAKgIQAQgMAOgFQAOgGAPAAQAwAAAeAjQAeAjAAA3QAAA8giAnQgiAog0AAQgWAAgHgGQgJgHAAgKQAAgFAEgEQAEgFAIAAIAGACIAJABQAcAAARgYQARgXAAgnQAAgsgTgaQgSgbgdAAQgaAAgPAPQgPAPAAAmIAAChIABAaQABAKADADQAEAEALADIAKADIAGAFIACAHQAAAKgPAEQgPAEglAAQgkAAgNgEg");
	this.shape_7.setTransform(54.5,-9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgTCEIgbgEIgHAEIgIACIgFgBIgGgEQgIgHgHgUQgIgVAAgTQAAgIAFgFQAEgGAGAAQAMAAAMAVIAKAPQAHAKAOAGQANAGAOAAQARAAAKgIQAKgJAAgOQAAgWgqgUIgPgHQgogUgOgQQgOgRAAgYQAAghAXgVQAXgVAlAAIASABIASADIAMgEIAHgCQANAAAMAUQAMAUAAAWQAAAJgEAGQgEAEgIAAQgFAAgGgEQgGgFgHgNQgKgPgKgGQgKgHgOAAQgOAAgJAJQgKAIAAANQAAAMAKAJQAJAJAfAQIADABQBHAiAAAqQAAAjgbAYQgcAYgpAAg");
	this.shape_8.setTransform(28.5,-14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("Ah9B+QgMgEAAgLQAAgJAMgEIAHgDQAGgDADgKQADgIAAgTIAAgSIgBgUIAAgZQAAgogCgNQgCgMgFgCIgMgFQgPgFAAgIQAAgGAFgFQAEgEALgFIAlgLIAbgEQAHAAADADQADAEAAAIIAAARIAAADIACABIABAAIABgBIAGgGIAGgFQAbgZAgAAQASAAARAHQARAIAMAOQALAOAFAUQAFASAAApIAAAiIAAARIAAAPQAAARACAIQADAHAGAEIAHADQAMAEAAAJQAAALgLAEQgMAEgnAAQgkAAgMgEQgMgEAAgJQAAgKAMgFIAKgEQAGgDACgLQADgLAAgcQAAhRgLgUQgKgVgbAAQgNABgMAIQgMAIgHANQgGALgCAVQgCATAAAyQAAAYACAJQACAIAGADIAJAEQANAFAAAKQAAAJgMAEQgNAEghABQgngBgNgEg");
	this.shape_9.setTransform(1.9,-14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("Ag1CzQgOgEAAgLQAAgLAQgGIALgFQAFgFADgeQACgeAAhQIgChgQgCglgEgEQgCgEgOgFQgNgGAAgKQAAgKALgEQALgEAtAAQAuAAALAEQALADAAALQAAAKgPAGIgLAGQgFADgCAaIgCBTIABB5QACAtADAEQADAEANAFQANAFAAALQAAALgNAEQgOAFgpAAQgnAAgOgFg");
	this.shape_10.setTransform(-21.8,-19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("Ah1CoQgMgKAAgQQAAgNAJgJQAJgJAMAAIAMACIAHAFIAHAKQAHAKAFAAQANAAANgTQANgTAAgUQAAgVgRgpIgDgGIgphYIgXgyQgFgJgPgGIAAgBQgJgDgDgEQgDgDAAgGQAAgLAOgEQANgFAlAAQAmAAAMAEQANAEAAALIgCAHIgFAFIgJAFQgKADAAAFIAFATIAVAzIAUAwQAHAMAEAAQACAAAGgMIARgoIASgzQAGgSAAgGQAAgIgOgIQgOgIAAgGQAAgJALgEQAMgEAdAAQAeAAALAEQALAEAAALQAAAJgPAEIgKADQgPAIgQArIgHAUIghBRQgqBqgaAgQgbAgglAAQgTAAgMgLg");
	this.shape_11.setTransform(-57.6,-9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AAtB4IgOgNIgLAFQgeAVggAAQglAAgXgWQgXgVAAgjQAAgpAdgWQAegXA1AAQANAAAHAEQAFAEAAAJQAAAOgRABQgZAAgPAMQgQAMAAAVQAAAVAOANQANAMAWgBQAZABAKgLQALgMAAgaIAAhgQAAgXgKgMQgJgMgSAAQgMAAgLAFQgKAGgLALIgFAHQgQAUgRgBQgKABgGgHQgGgGAAgMQAAgXAdgQQAegRAvAAQAbAAAUAIQAUAHAMAOQAHAKAEAPQADAQAAAlIAABRQAAAOACAHQADAIAFABIAIACQAQAEAAAJQAAAMgRALQgRAJgXAAQgMAAgMgNg");
	this.shape_12.setTransform(-84.3,-14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AhvCaQgegiAAg3QAAg+AigmQAjgnA3AAIARACQAIACAEAGQAFAFAAAGQAAAOgRAAIgHgBIgHAAQgcAAgRAXQgRAXAAAoQAAArATAbQASAbAdAAQAagBAOgPQAPgOAAgdIAAhFIAAh1QAAgSgDgGQgEgIgJgDIgHgCQgPgEAAgJQAAgIAFgEQAHgFATgIIAcgIIAYgDQAJAAAEAGQADAFABAKIgBAOIgDCcIACBrQACAYAEADIARAHQAOADAAAIQAAAMglAMIgZAHIgTACQgIAAgDgEQgDgEAAgJIAAgMIgBgFIgBgBIgIAFIgLAIQgPAMgOAFQgPAFgQABQgvAAgegjg");
	this.shape_13.setTransform(-113,-19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_14.setTransform(-136.8,-19.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgrC3QgMgEAAgLQAAgIAKgFIAOgHQAEgEACgQIABgyIAAgoIAAgvIAAgUQAAhAgCgSQgDgTgFgDIgPgFQgRgFABgJQAAgGAEgEQAGgFASgGIAigJIAagEQAHAAADAFQADAEAAAMIgBAUQgCBbAABbIABBXQACATAEAFIAOAHQANAFAAAJQAAAKgOAEQgMAEgiAAQgmAAgMgEg");
	this.shape_15.setTransform(-151.9,-20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AhcBfQgkglAAg5QAAg4AmgnQAmgmA4AAQA3AAAjAkQAjAkAAA3QAAA7glAnQgmAog3AAQg3AAgkgmgAgwhLQgPAUAAAiQAAAyAVAiQAVAiAeAAQAZAAAQgVQAPgVAAgiQAAgxgVgiQgWgigdAAQgaAAgPAVg");
	this.shape_16.setTransform(-173.5,-14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AA5CzQgOgEgBgLQABgLAQgGIALgFQAEgEACgQIABg7IAAgkIgCgKQgDgFgMgCQgNgCgvAAIg2ACQgOABgFAEIgCAHIgBAUIAAAVIABA7QACAQAFAEIALAFQAPAGAAALQAAALgOAEQgOAFgpAAQgnAAgOgFQgPgEAAgLQAAgLAQgGIALgFQAGgEACghQACggABhMIgDhfQgCgmgDgEQgDgEgNgFQgOgGAAgKQAAgKAMgEQALgEAuAAQAsAAAMAEQAMAEAAAKQAAAKgPAGIgLAGQgFADgCAQIgCBLQAAAKAKAEQAJADAlAAIAVAAIA1gBQARgCAEgEIADgEIAAgKIAAgMIgBg+QgCgNgEgDIgLgGQgQgGgBgKQABgKALgEQAMgEAtAAQAuAAALAEQALADAAALQAAAKgPAGIgMAGQgFAEgDAiQgCAiAABEIACBjQADAmACAFQADAEAOAFQANAGAAAKQAAALgOAEQgPAFgnAAQgoAAgOgFg");
	this.shape_17.setTransform(-207.5,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billboardholidayinspiration, new cjs.Rectangle(-229,-52.2,458,64.5), null);


(lib.billboardfillinfox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AAjC3QgMgEAAgKQAAgJAMgGIAKgEQAGgDACgLQADgKAAgcQAAhRgLgUQgKgVgbAAQgNAAgMAIQgMAIgHANQgGALgCAUQgCAUAAAxQAAAaACAIQACAJAGACIAJAEQAOAGAAAJQAAAKgNAEQgMAEgiAAQgoAAgMgEQgMgEAAgLQAAgJAMgFIAHgDQAHgDADgLQADgLAAgcIAAgpIAAgnIgChzQgBgcgEgFQgDgEgPgEQgPgEgBgJQABgHAGgFQAGgFAXgIIAZgHIAXgDQAJAAAEAFQAEAEgBAMIAAALIgCBlIAAANIABAGIADACIAGgGIAJgKQANgNAOgFQAOgHAQAAQAsAAAVAcQAWAcgBA5IAAAYIABAtIAAAPQAAANACAFQADAGAFADIAHADQAMAFAAAJQAAALgMAEQgMAEgoAAQghAAgNgEg");
	this.shape.setTransform(219.9,-20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgNCZQgNgEgJgIQgJgJgDgOQgEgOAAgmIAAiIIgYAAIgHgCIgCgGIAAgGQAAgJAbgWIAKgJIAKgJQAagXAKAAIAHACQADACAAAEIAAAwIA5AAQAGAAADACQACADAAAHIAAAGQAAAGgCADQgDADgGAAIg1AAIgDADIgCAFIAAB+QAAAhAGAIQAFAJAPAAQAIAAANgFIARgEQAGAAADAEQAEADAAAFQAAAOgVANQgWANgcAAQgOAAgNgEg");
	this.shape_1.setTransform(195.7,-16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_2.setTransform(178.7,-19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AAPAcIgfhPQgOgkgMgHIgHgDQgPgGAAgJQAAgLAMgDQANgFAoAAQAjAAANAFQAMADAAALIgBAHIgGAGIgIADQgLAEAAAGIAFARIAVA1IAWAxQAGALADAAQAEAAAEgGIAMgXIAbhAQAKgYAAgJIgDgJIgGgGIgHgDQgLgEAAgJQAAgKALgDQALgFAgAAQAaAAALAFQAMADgBAKQAAAKgNAFIgIADQgMAGgXA1IgGAMIgLAYQg5CDgRAAQgRAAgthngAiVAOIgHgQIgRgqQgQgsgMgGIgIgDQgPgGAAgJQAAgLAOgDQAMgFAqAAQAiAAAMAFQAMADAAALIgBAIIgEAFIgIADQgLAEAAAGIAFAVIATAxIAWAvQAHANADAAQAIAAAGgPIAJgSIAFgIQAEgDAFAAQAHAAADADQAEAEAAAGQAAAHgHAPQgbA6gMATQgLAUgJgBQgSAAgyh1g");
	this.shape_3.setTransform(150.6,-13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AAYB7QgOgEAAgKQAAgIAJgFQAIgEAAgDQAAgEgMgSIgthDIgpg+QgPgUgIgHQgEgDgMgDQgMgDAAgJQAAgKAOgFQANgEAggBQAkAAAOAFQANAEAAAKQAAAHgIAGQgJAFAAACQAAAHAeApIABACIAJgMQAYgiAAgEQAAgCgKgFQgJgGAAgHQAAgKANgEQAMgEAbgBQAWABALAEQAKAEAAAJQAAALgRAGIgOAFQgLAFgPATQgPATgTAhIAtBFQAPAUAJAIIARAIQAOAFAAAJQAAALgNAEQgNAFghgBQgjAAgOgEgAh4B7QgLgEAAgKQAAgKATgGIANgFQAIgDANgRIAWggIAHgGIAIgDQAGAAADAEQAEADAAAHQAAAGgGAIQgUAcAAAEQAAAEAKAFQAKAEAAAIQAAAKgNAFQgNAFgbgBQgWABgLgFg");
	this.shape_4.setTransform(101.7,-14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AhcBfQgkglAAg5QAAg4AmgnQAmgmA4AAQA3AAAjAkQAjAkAAA3QAAA7glAnQgmAog3AAQg3AAgkgmgAgwhLQgPAUAAAiQAAAyAVAiQAVAiAeAAQAZAAAQgVQAPgVAAgiQAAgxgVgiQgWgigdAAQgaAAgPAVg");
	this.shape_5.setTransform(74.3,-14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgiC3QgWgGgOgLIgRALQgIADgGAAIgJgBIgKgDIAAgEQAKgLAEgWQAEgXAAg4IAAg5IAAg5QAAgvgCgQQgDgQgFgDIgNgFQgRgEABgIQAAgGAFgEQAFgFATgHIAegJIAZgEQAKAAAEAEQACAEAAAJIAAAOIgCBLIAABvIABBDQgBAlAMANQAMANAdAAQAfAAARgbQATgbAAgvQAAgqgSgXQgRgYgeAAIgIABIgGAAQgTAAAAgRQAAgNATgHQARgHAWAAQAwAAAdAhQAdAhAAA3QgBBAgjAnQglAng7AAQgZAAgUgGg");
	this.shape_6.setTransform(43.4,-19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("Ah9B+QgMgEAAgLQAAgJAMgEIAHgDQAGgDADgKQADgIAAgTIAAgSIgBgUIAAgZQAAgogCgNQgCgMgFgCIgMgFQgPgFAAgIQAAgGAFgFQAEgEALgFIAlgLIAbgEQAHAAADADQADAEAAAIIAAARIAAADIACABIABAAIABgBIAGgGIAGgFQAbgZAgAAQASAAARAHQARAIAMAOQALAOAFAUQAFASAAApIAAAiIAAARIAAAPQAAARACAIQADAHAGAEIAHADQAMAEAAAJQAAALgLAEQgMAEgnAAQgkAAgMgEQgMgEAAgJQAAgKAMgFIAKgEQAGgDACgLQADgLAAgcQAAhRgLgUQgKgVgbAAQgNABgMAIQgMAIgHANQgGALgCAVQgCATAAAyQAAAYACAJQACAIAGADIAJAEQANAFAAAKQAAAJgMAEQgNAEghABQgngBgNgEg");
	this.shape_7.setTransform(14.1,-14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("Ag1CzQgOgEAAgLQAAgLAQgGIALgFQAFgFADgeQACgeAAhQIgChgQgCglgEgEQgCgEgOgFQgNgGAAgKQAAgKALgEQALgEAtAAQAuAAALAEQALADAAALQAAAKgPAGIgLAGQgFADgCAaIgCBTIABB5QACAtADAEQADAEANAFQANAFAAALQAAALgNAEQgOAFgpAAQgnAAgOgFg");
	this.shape_8.setTransform(-9.7,-19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AhNB+QgMgEAAgLQAAgIAMgFIAHgDQAHgDACgKQADgIAAgTIAAgSIgBgUIAAgPQAAgugCgOQgCgOgFgDIgLgFQgQgFAAgIQAAgGAFgFQAEgEALgFIAjgLIAXgEQAMAAAEAjIABAEIABABQANgUAOgLQAPgLAOABQASgBAKALQALALAAASQAAARgIAKQgJALgOgBIgMgBIgLgJIgGgJQgDgHgDAAQgSAAgGAZQgGAXAABNQAAAXACALQADALAGADIALAEQAPAEAAALQAAAJgOAEQgOAEgiABQgngBgNgEg");
	this.shape_9.setTransform(-42,-14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AA3CBQgDgEAAgIIAAgSIAAgBIgBAAQgDAAgGAFIgEAFQgMAMgQAGQgOAGgTAAQgTAAgQgHQgSgHgLgOQgMgOgEgUQgGgVAAg2IAAgRIAAgTIAAgFQAAgVgCgFQgEgHgJgDIgKgDQgOgEAAgJQAAgGAFgEQAFgFASgGIAjgKIAbgDQAHAAADAFQACAFAAALIAAALIgCBeQAAA0ALATQALAVAZgBQAdAAANgaQAMgZAAg9IAAgUQAAgUgDgFQgDgHgJgDIgKgDQgOgEAAgJQAAgGAFgEQAFgFASgGIAigKIAbgDQAIAAADAFQACAFAAALIAAAOIgDBpIABArIABARQACALANAEIAFACQAOAFAAAJQAAAFgEAFQgFADgLAFIgkALQgRAFgKAAQgHAAgEgEg");
	this.shape_10.setTransform(-68.2,-14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AhcBfQgkglAAg5QAAg4AmgnQAmgmA4AAQA3AAAjAkQAjAkAAA3QAAA7glAnQgmAog3AAQg3AAgkgmgAgwhLQgPAUAAAiQAAAyAVAiQAVAiAeAAQAZAAAQgVQAPgVAAgiQAAgxgVgiQgWgigdAAQgaAAgPAVg");
	this.shape_11.setTransform(-98,-14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("Ag1CzQgPgEAAgLQAAgLAQgGIAMgFQAIgHABhnIAAgYIgegxIgwhMQgPgVgJgGIgMgFQgRgGAAgKQAAgKAMgEQAMgEAxAAQAyAAAMAEQAMAEAAAKQAAAKgUAHIgBABIgIAFIgDAIQAAAFALATIAzBOIArhBQAOgYAAgHQAAgHgDgEQgEgEgLgFQgKgEgDgDQgDgEgBgGQAAgKALgEQAKgEAqAAQApAAAMAEQAKAEAAAKQAAAKgPAGIgTAKQgKAJgZAkQgZAlgkA/IAAAtQABBVAHAGIAMAFQAQAGAAALQAAALgPAEQgOAFgoAAQgmAAgPgFg");
	this.shape_12.setTransform(-129.2,-19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgqC3QgNgEAAgLQAAgIALgFIAMgHQAFgEACgQIACgyIAAgoIgBgvIAAgUQAAhAgCgSQgDgTgEgDIgRgFQgPgFgBgJQAAgGAGgEQAEgFASgGIAjgJIAZgEQAIAAADAFQADAEAAAMIAAAUQgDBbAABbIABBXQACATAEAFIAPAHQAMAFgBAJQABAKgNAEQgNAEgiAAQglAAgMgEg");
	this.shape_13.setTransform(-168.2,-20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgqC3QgNgEAAgLQAAgIALgFIAMgHQAFgEACgQIABgyIAAgoIAAgvIAAgUQAAhAgCgSQgDgTgEgDIgRgFQgQgFAAgJQABgGAFgEQAEgFASgGIAjgJIAZgEQAIAAADAFQADAEAAAMIAAAUQgDBbAABbIACBXQABATAEAFIAPAHQAMAFgBAJQABAKgNAEQgNAEghAAQgmAAgMgEg");
	this.shape_14.setTransform(-182.9,-20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgtC2QgMgEAAgLQAAgJAMgFIAHgDQAGgDADgJQADgIAAgTIAAgSIgBgVIAAgZQAAgpgCgLQgCgNgFgCIgMgEQgPgGAAgIQAAgFAFgFQAEgEALgFIAngMIAagFQAHAAADAFQADAFAAALIAAAPIgBAMIgCBAIAAACIgBA/QAAAYADAKQACAJAGADIAJAEQANAGAAAJQAAAKgMAEQgNAEghAAQgmAAgNgEgAgfiAQgLgJAAgNQAAgPAMgKQAMgKARAAQAQAAALAJQALAJAAAOQAAAPgMAJQgMAKgRAAQgQAAgLgJg");
	this.shape_15.setTransform(-197.5,-19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AiBC2QgOgEAAgMQAAgJAOgGQANgFADgEQADgFACgmIAChjIgCheQgCgngDgEQgDgEgNgFQgOgGAAgLQAAgKAMgDQAMgEArAAICcAAIAZgDIANgDIAHACIAEAFQAGAJAEARQAFASAAAMQAAALgEAHQgFAGgHAAQgJAAgLgSIgHgMQgGgIgLgEQgMgEgQAAIgjAAQgYAAgNADQgMACgFAGQgEAGgCAQIgCAxIAAAVQAAAMACADQACADAHAAIAqAAQAUAAAIgGQAIgGACgQIABgEQAEgbANAAQALAAAEAOQAFAOAAAxQAAAwgEANQgEAOgMAAQgNAAgEgbIgBgEQgCgQgIgGQgIgGgUAAIgpAAQgHAAgDAFQgCAEAAAQIAAAUIACBHQABAPAFAEIALAFQAQAGAAALQAAALgOAEQgOAFgoAAQgpAAgOgFg");
	this.shape_16.setTransform(-220.2,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billboardfillinfox, new cjs.Rectangle(-238,-52.2,476.1,64.5), null);


(lib.billboardctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AufDIIAAmPIc/AAIAAGPg");
	this.shape.setTransform(34.8,-10.2,1.375,1.163);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.billboardctarectangle, new cjs.Rectangle(-92.7,-33.4,255.1,46.5), null);


(lib.ctarollovermc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(2));

	// Layer 1
	this.instance = new lib.ctarollovervideomc();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-23.2,254.6,46.5);


// stage content:
(lib.billboardfillinboxsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_243 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(195).call(this.frame_243).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(486.2,125.3,4.708,0.381,0,0,0,0.3,0.8);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(248));

	// fade-from-white
	this.instance = new lib.blackwideskyscraper();
	this.instance.parent = this;
	this.instance.setTransform(486.8,125.1,5.906,0.417,0,0,0,0.4,0.2);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 255, 255, 255, 0)];
	this.instance.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.4,x:488.7,alpha:0},9).wait(239));

	// kale-logo
	this.instance_1 = new lib.kalelogobillboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(851.9,50.7,0.367,0.367,0,0,0,0.2,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01},0).to({regX:0.4,regY:0.1,scaleX:0.47,scaleY:0.47,x:852,alpha:1},6).to({regY:0.2,scaleX:0.41,scaleY:0.41},7).wait(226));

	// fill-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgonAH5IAAp+MBWtAAAIAAJ+g");
	mask.setTransform(295,50.5);

	// fill-your-inbox-with
	this.instance_2 = new lib.billboardfillinfox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.2,85.7);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({x:-205.8,y:82.3},0).to({x:291.2,y:85.7,alpha:1},10).to({x:271.2},6).wait(216));

	// recipe-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgsSANDIAArkMBd5AAAIAALkg");
	mask_1.setTransform(317.5,83.5);

	// recipes
	this.instance_3 = new lib.partyreadyrecipesbillboard();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.1,142.7);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({x:-210.7},0).to({x:283.1,alpha:1},10,cjs.Ease.get(1)).to({x:275.1},6,cjs.Ease.get(1)).wait(84).to({alpha:0},5).wait(111));

	// holiday-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Egm0ANrIAAuDMBS9AAAIAAODg");
	mask_2.setTransform(282.5,87.5);

	// holiday-inspiration
	this.instance_4 = new lib.billboardholidayinspiration();
	this.instance_4.parent = this;
	this.instance_4.setTransform(273.5,142.7);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(178).to({x:-196.8},0).to({x:271.2,alpha:1},10,cjs.Ease.get(1)).to({x:261.2},6,cjs.Ease.get(1)).wait(30).to({alpha:0},5).wait(19));

	// diy-mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgnDAMbIAArQMBTlAAAIAALQg");
	mask_3.setTransform(285,79.5);

	// diy-tips
	this.instance_5 = new lib.diybillboard();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.3,122.7);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(132).to({x:-82.7,y:142.7},0).to({x:147.3,alpha:1},10,cjs.Ease.get(1)).to({x:137.3},6,cjs.Ease.get(1)).wait(30).to({alpha:0},5).wait(65));

	// something-delicious-mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgnmAMHIAArQMBUhAAAIAALQg");
	mask_4.setTransform(287.5,77.5);

	// something-delicious
	this.instance_6 = new lib.billboardsomethingdelicious();
	this.instance_6.parent = this;
	this.instance_6.setTransform(281.2,122.7);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(224).to({x:-216.7,y:142.7},0).to({x:291.2,alpha:1},10,cjs.Ease.get(1)).to({x:281.2},6,cjs.Ease.get(1)).wait(8));

	// sign-up-mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EgmsARlIAAqUMBUbAAAIAAKUg");
	mask_5.setTransform(292.7,112.5);

	// sign-up
	this.instance_7 = new lib.SIGNupbillboard();
	this.instance_7.parent = this;
	this.instance_7.setTransform(137.2,205.5);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({x:-60.6},0).to({x:137.2,alpha:1},10,cjs.Ease.get(1)).to({x:127.2},6,cjs.Ease.get(1)).wait(184));

	// cta-rollover-mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EgjnASwIAAsqMBMjAAAIAAMqg");
	mask_6.setTransform(262,120);

	// cta-rollover
	this.cta_rollover = new lib.ctarollovermc();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(162.3,195.9);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(48).to({x:-60.6},0).to({x:172.3},10).to({x:162.3},6).wait(184));

	// cta-mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EgjnASwIAAsqMBMjAAAIAAMqg");
	mask_7.setTransform(262,120);

	// cta-orange
	this.instance_8 = new lib.billboardctarectangle();
	this.instance_8.parent = this;
	this.instance_8.setTransform(127.3,206.1);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48).to({x:-60.6},0).to({x:137.3,alpha:1},10,cjs.Ease.get(1)).to({x:127.3},6,cjs.Ease.get(1)).wait(184));

	// glass-top-right
	this.instance_9 = new lib.glasstoprightbillboard_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(627.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(248));

	// glass-top-middle
	this.instance_10 = new lib.glasstopmiddlebillboard_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(516,28.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(248));

	// candle-3
	this.instance_11 = new lib.candle3billboard();
	this.instance_11.parent = this;
	this.instance_11.setTransform(544,191.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(248));

	// candle-2
	this.instance_12 = new lib.candle2billboard();
	this.instance_12.parent = this;
	this.instance_12.setTransform(423,220.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(248));

	// red-candle
	this.instance_13 = new lib.redcandlebillboard();
	this.instance_13.parent = this;
	this.instance_13.setTransform(480.5,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(248));

	// candle-1
	this.instance_14 = new lib.candle1billboard();
	this.instance_14.parent = this;
	this.instance_14.setTransform(378.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(248));

	// cookie-greens
	this.instance_15 = new lib.cookiegreens_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(729.5,148);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(125).to({alpha:1},0).wait(123));

	// cookie-berries
	this.instance_16 = new lib.cookieberries_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(729.5,148);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(122).to({alpha:1},0).wait(126));

	// cookie-frosting
	this.instance_17 = new lib.cookiefrosting_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(729.5,148);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(115).to({alpha:1},0).wait(133));

	// cookie-sixteen
	this.instance_18 = new lib.cookiesixteen_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(729.5,148);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(108).to({alpha:1},0).wait(140));

	// cookie-fifteen
	this.instance_19 = new lib.cookiefifteen_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(729.5,148);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(104).to({alpha:1},0).wait(144));

	// cookie-fourteen
	this.instance_20 = new lib.cookiefourteen_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(729.5,148);
	this.instance_20.alpha = 0;

	this.instance_21 = new lib.cookiefourteen_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(729.5,148);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21,p:{alpha:0}},{t:this.instance_20,p:{alpha:0}}]}).to({state:[{t:this.instance_21,p:{alpha:1}},{t:this.instance_20,p:{alpha:1}}]},100).wait(148));

	// cookie-thirteen
	this.instance_22 = new lib.cookiethirteen_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(729.5,148);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(96).to({alpha:1},0).wait(152));

	// cookie-twelve
	this.instance_23 = new lib.cookietwelve_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(729.5,148);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(92).to({alpha:1},0).wait(156));

	// cookie-eleven
	this.instance_24 = new lib.cookieelevenone();
	this.instance_24.parent = this;
	this.instance_24.setTransform(729.5,148);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(88).to({alpha:1},0).wait(160));

	// cookie-ten
	this.instance_25 = new lib.cookieeleven_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(729.5,148);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(84).to({alpha:1},0).wait(164));

	// cookie-nine
	this.instance_26 = new lib.cookienine_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(729.5,148);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(80).to({alpha:1},0).wait(168));

	// cookie-eight
	this.instance_27 = new lib.cookieeight_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(729.5,148);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(76).to({alpha:1},0).wait(172));

	// cookie-seven
	this.instance_28 = new lib.cookieseven_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(729.5,148);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(72).to({alpha:1},0).wait(176));

	// cookie-six
	this.instance_29 = new lib.cookiesix_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(729.5,148);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(68).to({alpha:1},0).wait(180));

	// cookie-five
	this.instance_30 = new lib.cookiefive_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(729.5,148);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(64).to({alpha:1},0).wait(184));

	// cookie-four
	this.instance_31 = new lib.cookiefour_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(739.5,148);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(60).to({x:729.5,alpha:1},0).wait(188));

	// cookie-three
	this.instance_32 = new lib.cookiethree_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(734.5,148);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(56).to({x:729.5,alpha:1},0).wait(192));

	// cookie-two
	this.instance_33 = new lib.cookietwo_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(729.5,148);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(46).to({alpha:1},10).wait(192));

	// cookie-one
	this.instance_34 = new lib.cookieone_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(729.5,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(248));

	// towel
	this.instance_35 = new lib.billboardtowel();
	this.instance_35.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(248));

	// table
	this.instance_36 = new lib.billboardtablefillinbox();
	this.instance_36.parent = this;
	this.instance_36.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(248));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.6,111.5,976.4,269.6);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;