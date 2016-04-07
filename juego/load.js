Game = {};

Game.Load = function(game) {

};

Game.Load.prototype = {
	/* Función que carga las imágenes necesarias para el juego. */
	preload : function() {
		this.load.image('background', 'assets/pantallaInicial.png');
		this.load.spritesheet('play', 'assets/play.png', 300, 80);
	},

	/* Función que carga el juego. Para ello ubica el fondo de la pantalla 
	   inicial y luego llama al código correspondiente. */
	create : function() {
		this.game.add.tileSprite(0, 0, 1200, 4523, 'background');
		this.game.state.start('MainMenu');
	}
};