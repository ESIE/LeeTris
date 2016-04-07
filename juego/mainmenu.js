Game.MainMenu = function(game) {

};

Game.MainMenu.prototype = {

	/* Pantalla inicial. */
	create : function() {
		this.game.add.tileSprite(0, 0, 1200, 800, 'background');
		this.game.world.bounds.x = 0;
		this.game.world.bounds.y = 0;
		this.game.world.bounds.width = 600;
		this.game.world.bounds.heigth = 800;
		this.playbutton = this.add.button(600, 450, 'play', this.playclicked, this, 1, 0, 2);
		this.playbutton.anchor.setTo(0.5, 0.5);
		this.tweenplay = this.game.add.tween(this.playbutton).to({y:500}, 1300, Phaser.Easing.Sinusoidal.InOut,true,0,100,true);
	},

	playclicked : function() {

	},
};
