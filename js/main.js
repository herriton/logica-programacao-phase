var game = new Phaser.Game(1366, 768, Phaser.AUTO);

game.state.add('Slide One', arrSlides[0]);
game.state.add('Slide Two', arrSlides[1]);
game.state.add('Slide Three', arrSlides[2]);
game.state.start('Slide One');

function addContent(p_arrContent) {
  for(i = 0; i < p_arrContent.length; i++){ game.add.text(p_arrContent[i].posX, p_arrContent[i].posY, p_arrContent[i].text, oSettings.style[p_arrContent[i].type]).anchor.set(0.5); }
}
