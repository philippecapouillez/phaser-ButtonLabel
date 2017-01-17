var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sxjs;
(function (sxjs) {
    var Text = Phaser.Text;
    var ButtonLabel = (function (_super) {
        __extends(ButtonLabel, _super);
        function ButtonLabel(game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
            var _this = _super.call(this, game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) || this;
            _this.anchor.set(0.5);
            _this.label = new Text(game, 0, 0, label, sxjs.Plugins.ButtonLabel.style);
            _this.label.anchor.set(0.5);
            _this.addChild(_this.label);
            return _this;
        }
        return ButtonLabel;
    }(Phaser.Button));
    sxjs.ButtonLabel = ButtonLabel;
})(sxjs || (sxjs = {}));
var sxjs;
(function (sxjs) {
    var Plugins;
    (function (Plugins) {
        var ButtonLabel = (function (_super) {
            __extends(ButtonLabel, _super);
            function ButtonLabel(game, parent) {
                var _this = _super.call(this, game, parent) || this;
                _this.addButtonLabelFactory();
                return _this;
            }
            /**
             * Extends the GameObjectFactory prototype with the support of adding InputField. this allows us to add InputField methods to the game just like any other object:
             * game.add.InputField();
             */
            ButtonLabel.prototype.addButtonLabelFactory = function () {
                Phaser.GameObjectFactory.prototype.buttonLabel = function (x, y, label, callback, callbackContext, group) {
                    if (group === undefined) {
                        group = this.world;
                    }
                    var object = new sxjs.ButtonLabel(this.game, x, y, 'sDefault', label, callback, callbackContext, 'buttonOver.png', 'buttonUp.png', 'buttonDown.png', 'buttonUp.png');
                    return group.add(object);
                };
                Phaser.GameObjectCreator.prototype.buttonLabel = function (x, y, label, callback, callbackContext) {
                    return new sxjs.ButtonLabel(this.game, x, y, 'sDefault', label, callback, callbackContext, 'buttonOver.png', 'buttonUp.png', 'buttonDown.png', 'buttonUp.png');
                };
                Phaser.GameObjectFactory.prototype.buttonLabelCustom = function (x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
                    if (group === undefined) {
                        group = this.world;
                    }
                    var object = new sxjs.ButtonLabel(this.game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
                    return group.add(object);
                };
                Phaser.GameObjectCreator.prototype.buttonLabelCustom = function (x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
                    return new sxjs.ButtonLabel(this.game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
                };
            };
            return ButtonLabel;
        }(Phaser.Plugin));
        Plugins.ButtonLabel = ButtonLabel;
    })(Plugins = sxjs.Plugins || (sxjs.Plugins = {}));
})(sxjs || (sxjs = {}));
/// <reference path='../typings/pixi.d.ts'/>
/// <reference path='../typings/phaser.d.ts'/>
/// <reference path="ButtonLabel.ts" />
/// <reference path="Plugin.ts" />
