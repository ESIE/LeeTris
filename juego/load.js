Game = {};

Game.Load = function(game) {

};

Game.Load.prototype = {
	/* Función que carga las imágenes necesarias para el juego. */
	preload : function() {
		this.load.image('background', 'assets/pantallaInicial.png');
		this.load.spritesheet('botonMapa', 'assets/boton_mapa.png', 300, 80);
		this.load.spritesheet('botonCreditos', 'assets/boton_creditos.png', 300, 80);
		this.load.spritesheet('botonInstrucciones', 'assets/boton_instrucciones.png', 300, 80);
		this.load.image('Mapa' , 'assets/mapa.png')
		this.load.image('fondoInstrucciones' , 'assets/instrucciones.jpg')
		this.load.image('fondoCreditos' , 'assets/creditos.jpg')
		//botones de los niveles del mapa
		this.load.image('boton1','assets/boton1.png');
		this.load.image('boton2','assets/boton2.png');
		this.load.image('boton3','assets/boton3.png');
		this.load.image('boton4','assets/boton4.png');
		this.load.image('boton5','assets/boton5.png');
		this.load.image('boton6','assets/boton6.png');
		this.load.image('boton7','assets/boton7.png');
		this.load.image('boton8','assets/boton8.png');
		this.load.image('boton9','assets/boton9.png');
		this.load.image('boton10','assets/boton10.png');
		this.load.image('boton11','assets/boton11.png');
		this.load.image('boton12','assets/boton12.png');
		this.load.image('boton13','assets/boton13.png');
		this.load.image('boton14','assets/boton14.png');
		this.load.image('boton15','assets/boton15.png');
		this.load.image('boton16','assets/boton16.png');
		this.load.image('fondoLectura','assets/fondoLectura.png');
		this.load.image('fondoJuego','assets/fondoJuego.png');
		this.load.image('jugar', 'assets/boton_jugar.png');
		this.load.video('videointro', 'assets/leetris.mp4');
	},

	startgame : function(){
		this.game.state.start('MainMenu');
	},

	/* Función que carga el juego. Para ello ubica el fondo de la pantalla 
	   inicial y luego llama al código correspondiente. */
	create : function() {
		this.game.add.tileSprite(0, 0, 1200, 4523, 'background');
		var video = this.game.add.video('videointro');
		var sprite = video.addToWorld(this.game.world.centerX, this.game.world.centerY, 0.5, 0.5, 2, 2);
		video.play(false);
		video.onComplete.add(this.startgame, this);
		
	}, 

	
};