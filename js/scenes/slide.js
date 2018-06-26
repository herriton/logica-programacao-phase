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

  //Slide 2

  {
    preload:function(){
      game.load.image('room-light-off','media/room-light-off1.jpg');
      game.load.image('room-light-on','media/room-light-on1.jpg');

      game.load.spritesheet('interruptor','media/interruptor.png',28,36);
      game.load.spritesheet('light','media/light1.png',75,180);
    },

    create : function(){
      oRoomOFF = game.add.sprite(0,0,'room-light-off');
      oRoomON = game.add.sprite(0,0,'room-light-on');

      oRoomON.visible = false;

      oRoomON.height = game.stage.height;
      oRoomON.width = game.stage.width;

      oRoomOFF.height = game.stage.height;
      oRoomOFF.width = game.stage.width;

      oInterruptor = game.add.button(150,400, 'interruptor', this.onClick);
      oInterruptor.isOn = oInterruptor.frame == 2;
      oInterruptor.frame = 1;

      oLight = game.add.button(game.world.centerX, game.cache.getImage('light').height/2, 'light', this.onClick);
      oLight.isOn = oLight.frame == 2;
      oLight.anchor.set(.5);
      oLight.frame = 1;
    },

    onClick : function(event){
      switch(event.key){
        case 'light':
          if(oLight.isOn) {
            oLight.isOn = !oLight.isOn;
            oLight.frame = 1;

            oInterruptor.isOn = !oInterruptor.isOn;
            oInterruptor.frame = 1;

            oRoomON.visible  = false;
            oRoomOFF.visible = true;
          } else {
            oLight.isOn = !oLight.isOn;
            oLight.frame = 2;

            oInterruptor.isOn = false;
            oInterruptor.frame = 1;

            oRoomON.visible  = false;
            oRoomOFF.visible = true;
          }
        break;
        case 'interruptor':
          if(oLight.isOn){
            if(!oInterruptor.isOn){
              oInterruptor.isOn = !oInterruptor.isOn;
              oInterruptor.frame = 2;

              oRoomON.visible  = true;
              oRoomOFF.visible = false;
            } else {
              oInterruptor.isOn = !oInterruptor.isOn;
              oInterruptor.frame = 1;

              oRoomON.visible  = false;
              oRoomOFF.visible = true;
            }
          } else {
            oInterruptor.isOn = !oInterruptor.isOn;
            oInterruptor.frame == 1 ? oInterruptor.frame = 2 : oInterruptor.frame = 1;
          }
        break;
      }
      //debugger;
    },

    update : function(){
      var oKeys = { right: this.input.keyboard.justPressed(Phaser.Keyboard.RIGHT), left: this.input.keyboard.justPressed(Phaser.Keyboard.LEFT) }
      if(oKeys.right || oKeys.left) {
        delete oInterruptor;
        delete oRoomOFF;
        delete oRoomON;
        delete oLight;
      }
      if(oKeys.right) this.state.start('Slide Three');
      if(oKeys.left) this.state.start('Slide One');
    }

  },
  {
    preload:function(){
      game.load.image('logic','media/logic.png');
    },

    create : function(){

      var arrContent = [
        { text: "Slide 3", posX: this.world.centerX, posY: 75, type:"title" },
      ]

      addContent(arrContent);
    },

    update : function(){
      var oKeys = { right: this.input.keyboard.justPressed(Phaser.Keyboard.RIGHT), left: this.input.keyboard.justPressed(Phaser.Keyboard.LEFT) }
      if(oKeys.left) this.state.start('Slide Two');
    }
  }
]
