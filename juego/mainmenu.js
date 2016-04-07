Game.MainMenu = function(game) {

};

Game.MainMenu.prototype = {

	/* Pantalla inicial.  Esta función se encarga de crear toda la pantalla 
	   inicial, indicando desde la dimensión hasta las imágenes o botones que
	   tendrá.*/
	create : function() {
		// agregamos la imagen de fondo
		this.game.add.tileSprite(0, 0, 1200, 800, 'background');
		// modificamos las dimensiones
		this.game.world.bounds.x = 0;
		this.game.world.bounds.y = 0;
		this.game.world.bounds.width = 600;
		this.game.world.bounds.heigth = 800;
		// agregamos el botón "jugar"
		this.playbutton = this.add.button(600, 450, 'play', this.playclicked, this, 1, 0, 2);
		this.playbutton.anchor.setTo(0.5, 0.5);
		// Agregamos la animación al botón
		this.tweenplay = this.game.add.tween(this.playbutton).to({y:500}, 1300, Phaser.Easing.Sinusoidal.InOut,true,0,100,true);
	},

	/* Función que realizará el botón al dar clic sobre el mismo. */
	playclicked : function() {

	},
};
