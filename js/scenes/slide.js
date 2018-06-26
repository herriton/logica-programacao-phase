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
          game.add.sprite(0,0,'room-light-off');

          //var interrupt = game.add.sprite(150,400,'interruptor');

          var interrupt = game.add.button(150,400, 'interruptor', interruptOnclick, 0);
          var light;
          var light2;

      function up() {
        console.log('button up', arguments);
      }

      function over() {
        console.log('button over');
      }

      function out() {
        console.log('button out');
      }

      function interruptOnclick () {

          if(light.frame == 2 && interrupt.frame == 0){

            interrupt.pendingDestroy = true;

            game.add.sprite(0,0,'room-light-on');
            var interruptOff = game.add.button(150,400, 'interruptor', interruptOffclick, 0);
            interruptOff.frame = 1;

            function up() {
              console.log('button up', arguments);
            }

            function over() {
              console.log('button over');
            }

            function out() {
              console.log('button out');
            }

            function interruptOffclick () {
                interrupt.pendingDestroy = true;

                game.add.sprite(0,0,'room-light-off');
                interruptOff = game.add.button(150,400, 'interruptor', interruptOnclick, 0);
                interruptOff.frame = 0;

            }

              light2 = game.add.button(625,0, 'light', lightonclick, 0);
              light2.frame = 3;

              function up() {
                console.log('button up', arguments);
              }

              function over() {
                console.log('button over');
              }

              function out() {
                console.log('button out');
              }

              function lightonclick () {

              }


          }else if(light.frame != 2 && interrupt.frame == 0){

            interrupt.frame = 1;

          }else if(light.frame != 2 && interrupt.frame == 1){

            interrupt.frame = 0;
          }else if(light.frame == 2 && interrupt.frame == 1){

            interrupt.frame = 0;
          }

      }

      light = game.add.button(625,0, 'light', lightoffclick, 0);

      function up() {
        console.log('button up', arguments);
      }

      function over() {
        console.log('button over');
      }

      function out() {
        console.log('button out');
      }

      function lightoffclick () {

        switch (light.frame) {
        case 0:
          light.frame = 1;
        break;
        case 1:
          light.frame = 2;
        break;

        }

      }

      addContent(arrContent);
    },

    update : function(){
      //var oKeys = { Z: game.input.keyboard.justPressed(Phaser.Keyboard.Z) }
      //if(oKeys.Z) game.state.start('Play');
    }
  }
]
