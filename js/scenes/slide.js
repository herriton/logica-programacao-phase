var arrSlides = [
  {
    preload:function(){
      game.load.image('logic','media/logic.png');
    },

    create : function(){
      oSettings = {
        style: {
          title: {font: 'bold 28px Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450},
          small: {font: 'bold 16px Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450},
          medium: {font: 'bold 22px Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450},
          big: {font: 'bold 28px Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450},
          italic: {font: 'bold 16px Arial', fontStyle: 'italic', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 650}
        }
      }

      var arrContent = [
        { text: "Workshop MJV BS", posX: this.world.centerX - 300, posY: 75, type:"title" },
        { text: "Lógica de Programação", posX: this.world.centerX - 265, posY: 125, type:"title" },
        { text: '" Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero. " - Orlando Cordeiro', posX: this.world.centerX, posY: 200, type:"italic" },
        { text: 'Marcos Vinicius Dreher Oliveira', posX: this.world.centerX - 300, posY: 275, type:"small" },
        { text: 'Herriton Henrique Ferreira Lima', posX: this.world.centerX - 300, posY: 300, type:"small" }
      ]

      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.stage.backgroundColor = '#0072bc';
      this.stage.smoothed = false;

      //small: {font: 'bold 12px Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 450 },
      var sprLogic = this.add.sprite(this.world.centerX, 365, 'logic');
      sprLogic.scale.setTo(.5);
      sprLogic.anchor.x = .5;

      addContent(arrContent);
    },

    update : function(){
      var oKeys = { right: this.input.keyboard.justPressed(Phaser.Keyboard.RIGHT) }
      if(oKeys.right) this.state.start('Slide Two');
    }
  },
  {
    preload:function(){},

    create : function(){

      this.stage.backgroundColor = '#FF0000';

      var arrContent = [
        { text: "Slide 2", posX: this.world.centerX, posY: game.world.centerY, type:"title" },
      ]

      addContent(arrContent);
    },

    update : function(){
      //var oKeys = { Z: game.input.keyboard.justPressed(Phaser.Keyboard.Z) }
      //if(oKeys.Z) game.state.start('Play');
    }
  }
]
