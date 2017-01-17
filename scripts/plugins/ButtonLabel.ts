module sxjs {
    import Text = Phaser.Text;
   
    export class ButtonLabel extends Phaser.Button {

        public label: Text;

         constructor(game: Phaser.Game, x?: number, y?: number, key?: string, label?:string, callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number){
            super(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);

            this.anchor.set(0.5);

            this.label = new Text(game, 0, 0, label, sxjs.Plugins.ButtonLabel.style);  
            this.label.anchor.set(0.5);  
            this.addChild(this.label);    
         
        }
    }

}