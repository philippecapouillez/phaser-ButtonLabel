module sxjs {
    export module Plugins {
        export interface ButtonLabelObjectFactory extends Phaser.GameObjectFactory {
            buttonLabel: ( x?: number, y?: number, label?:string, callback?: Function, callbackContext?: any, group?:Phaser.Group) => sxjs.ButtonLabel;
            buttonLabelCustom: ( x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?:Phaser.Group) => sxjs.ButtonLabel;
        }

        export interface ButtonLabelObjectCreator extends Phaser.GameObjectCreator {
            buttonLabel: (x?: number, y?: number, label?:string, callback?: Function, callbackContext?: any) => sxjs.ButtonLabel;
            buttonLabelCustom: (x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number) => sxjs.ButtonLabel;
       }

        export interface InputFieldGame extends Phaser.Game {
            add: ButtonLabelObjectFactory;
            make: ButtonLabelObjectCreator;
        }

        export class ButtonLabel extends Phaser.Plugin {  
                    
            public static style: Phaser.PhaserTextStyle;
            
            constructor(game:Phaser.Game, parent:Phaser.PluginManager) {
                super(game, parent);

                this.addButtonLabelFactory();
            }

            /**
             * Extends the GameObjectFactory prototype with the support of adding InputField. this allows us to add InputField methods to the game just like any other object:
             * game.add.InputField();
             */
            private addButtonLabelFactory() {
                (<sxjs.Plugins.ButtonLabelObjectFactory>Phaser.GameObjectFactory.prototype).buttonLabel = function (x?: number, y?: number, label?:string, callback?: Function, callbackContext?: any, group?:Phaser.Group):sxjs.ButtonLabel {
                    if (group === undefined) {
                        group = this.world;
                    }

                    var object = new sxjs.ButtonLabel(this.game, x, y, 'sDefault', label, callback, callbackContext, 'buttonOver.png', 'buttonUp.png', 'buttonDown.png', 'buttonUp.png');

                    return group.add(object);
                };

                (<sxjs.Plugins.ButtonLabelObjectCreator>Phaser.GameObjectCreator.prototype).buttonLabel = function (x?: number, y?: number, label?:string, callback?: Function, callbackContext?: any):sxjs.ButtonLabel {
                    return new sxjs.ButtonLabel(this.game, x, y, 'sDefault', label, callback, callbackContext, 'buttonOver.png', 'buttonUp.png', 'buttonDown.png', 'buttonUp.png');
                };


                (<sxjs.Plugins.ButtonLabelObjectFactory>Phaser.GameObjectFactory.prototype).buttonLabelCustom = function (x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?:Phaser.Group):sxjs.ButtonLabel {
                    if (group === undefined) {
                        group = this.world;
                    }

                    var object = new sxjs.ButtonLabel(this.game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);

                    return group.add(object);
                };

                (<sxjs.Plugins.ButtonLabelObjectCreator>Phaser.GameObjectCreator.prototype).buttonLabelCustom = function (x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number):sxjs.ButtonLabel {
                    return new sxjs.ButtonLabel(this.game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
                };
            }

        }
    }
}