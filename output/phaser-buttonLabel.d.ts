declare module sxjs {
   
    class ButtonLabel extends Phaser.Button {

        public label: Text;

        constructor(game: Phaser.Game, x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number);

    }

}

declare module sxjs {
    module Plugins {
        interface ButtonLabelObjectFactory extends Phaser.GameObjectFactory {
            buttonLabel: ( x?: number, y?: number, label?:string, callback?: Function, callbackContext?: any, group?:Phaser.Group) => sxjs.ButtonLabel;
            buttonLabelCustom: ( x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?:Phaser.Group) => sxjs.ButtonLabel;

        }

        interface ButtonLabelObjectCreator extends Phaser.GameObjectCreator {
            buttonLabel: (x?: number, y?: number, label?:string, callback?: Function, callbackContext?: any) => sxjs.ButtonLabel;
            buttonLabelCustom: (x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number) => sxjs.ButtonLabel;
        }

        interface InputFieldGame extends Phaser.Game {
            add: ButtonLabelObjectFactory;
            make: ButtonLabelObjectCreator;
        }

        class ButtonLabel extends Phaser.Plugin {  
            
            static style: Phaser.PhaserTextStyle;

            constructor(game:Phaser.Game, parent:Phaser.PluginManager);

            /**
             * Extends the GameObjectFactory prototype with the support of adding InputField. this allows us to add InputField methods to the game just like any other object:
             * game.add.InputField();
             */
            private addButtonLabelFactory();

        }
    }
}