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
		this.botonMapa = this.add.button(230, 550, 'botonMapa', this.clickMapa, this, 1, 0, 2);
		this.botonMapa.anchor.setTo(0.5, 0.5);
		// agregamos el botón "Instrucciones"
		this.botonInstrucciones = this.add.button(600, 550, 'botonInstrucciones', this.clickInstrucciones, this, 1, 0, 2);
		this.botonInstrucciones.anchor.setTo(0.5, 0.5);
		// agregamos el botón "Creditos"
		this.botonCreditos = this.add.button(970, 550, 'botonCreditos', this.clickCreditos, this, 1, 0, 2);
		this.botonCreditos.anchor.setTo(0.5, 0.5);
		
	},

	/* Función que realizará el botón al dar clic en el mapa. */
	clickMapa : function() {
		this.game.state.start('Mapa');
	},
	clickInstrucciones : function() {
		this.game.state.start('Instrucciones');
	},
	clickCreditos : function() {
		this.game.state.start('Creditos');
	},
};

Game.MapScreen = function(game){

};

Game.MapScreen.prototype = {

	create : function(){
		
		var mapa = this.game.add.sprite(0, 0 , 'Mapa');
		this.game.world.setBounds(0, 0, 1200, 4523);
		cursors = this.game.input.keyboard.createCursorKeys();
		//boton 1
		this.playbutton = this.add.button(131, 79, 'boton1',this.clickNivel,this,1,0,2);
	},

	clickNivel : function() {
		score = 0;
		this.game.state.start('PrimerNivel');
		
	},

	update : function(){ 

	 if (cursors.up.isDown){
            this.game.camera.y -= 20;
     	}
     	else 
     		if (cursors.down.isDown){
            this.game.camera.y += 20;
        }
	}

};

Game.PrimerNivel = function(game){

};

Game.PrimerNivel.prototype = {

	create : function(){

		var fondoLectura = this.game.add.tileSprite(0, 0, 1280, 720, 'fondoLectura');
		this.botonJugar = this.add.button(600, 600,'jugar',this.clickJugar,this,1,0,2);
		this.botonJugar.anchor.setTo(0.5,0.5);
		var style = { font: "32px Sans Serif", fill: "black", wordWrap: true,  wordWrapWidth: fondoLectura.width - 100, align: "justify" };
		var style2 = { font: "28px Sans Serif", fill: "black", wordWrap: true,  wordWrapWidth: fondoLectura.width - 10, align: "center" };
		text1 =  this.game.add.text(400,20, "\nFrankestein - Mary Shelley ", style2);
 		text = this.game.add.text(70, 0, "\n \n\n\n Cuando Frankenstein cumplió 17 años debía partir hacia Ingolstadt para continuar con sus estudios cuando Elizabeth contrajo la fiebre escarlata (escarlatina), mientras se recuperaba Caroline, que había estado cuidando de ella, cayó enferma. En su lecho de muerte Caroline le dijo a Frankenstein y a Elizabeth que deseaba que ellos dos se casaran. Después de un tiempo de lamentar la muerte de su madre Frankenstein partió hacia Ingoltadt para reanudar sus estudios en donde tenía el temor de sentirse solo o no tener a nadie, este sentimiento se desvaneció después de que Frankenstein conociera al M. Waldman quien lo animó en continuar con sus estudios sobre la chispa de la vida.", style);

	},

	clickJugar : function() {

		score = 0;

		this.game.state.start('Juego');
		//music = this.game.add.audio('song');
        //music.play('',0,0.5,false,false);
	},

	update : function(){ 

	}



};

Game.JuegoTemporal = function(game){

};

Game.JuegoTemporal.prototype = {

	create : function(){

		var fondoJuego = this.game.add.tileSprite(0, 0, 1280, 720, 'fondoJuego');
		this.game.world.setBounds(0, 0, 1200, 4523);
	},

	update : function(){ 

	}



};


Game.PantallaInstrucciones = function(game){

};

Game.PantallaInstrucciones.prototype = {

	create : function(){
		
		this.game.world.setBounds(0, 0, 1200, 4523);
		this.pantalla1 = this.add.sprite(0, 0, 'instruccion1');
		this.home = this.add.button(600, 600,'botonhome',this.clickHome,this,1,0,2);
		


			},

	clickHome : function() {
		
		score = 0;
		this.game.state.start('MainMenu');
	
        
	},

	update : function(){ 

	}

};


Game.PantallaCreditos = function(game){

};

Game.PantallaCreditos.prototype = {

	create : function(){
		
		var mapa = this.game.add.sprite(0, 0 , 'fondoCreditos');
		this.game.world.setBounds(0, 0, 1200, 4523);
		cursors = this.game.input.keyboard.createCursorKeys();
		
	},
/*
	clickNivel : function() {
		score = 0;
		this.game.state.start('PrimerNivel');
		
	},
*/
	update : function(){ 

	 
	}

};

