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
		// agregamos el botón "Mapa"
		this.playbutton = this.add.button(230, 550, 'botonMapa', this.playclicked, this, 1, 0, 2);
		this.playbutton.anchor.setTo(0.5, 0.5);
		// agregamos el botón "Instrucciones"
		this.playbutton = this.add.button(600, 550, 'botonInstrucciones', this.playclicked, this, 1, 0, 2);
		this.playbutton.anchor.setTo(0.5, 0.5);
		// agregamos el botón "Creditos"
		this.playbutton = this.add.button(970, 550, 'botonCreditos', this.playclicked, this, 1, 0, 2);
		this.playbutton.anchor.setTo(0.5, 0.5);
		// Agregamos la animación al botón
		
	},

	/* Función que realizará el botón al dar clic sobre el mismo. */
	playclicked : function() {
		this.game.state.start('Mapa');
	},
};
Game.MapScreen = function(game){



};



Game.MapScreen.prototype = {

	create : function(){
		
		var mapa = this.game.add.sprite(0, 0 , 'Mapa');
		this.game.world.setBounds(0, 0, 1200, 4523);
		cursors = this.game.input.keyboard.createCursorKeys();
		

	},

	playclicked : function() {
		
		
		score = 0;
		this.game.state.start('PrimerNivel');
	
        
	},



	update : function(){ 

	 if (cursors.up.isDown)
    {
            this.game.camera.y -= 20;
        }
    
    else if (cursors.down.isDown)
    {
        
            this.game.camera.y += 20;
        }
   

}

};
