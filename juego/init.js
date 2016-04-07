var gamevar = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS,'gameContainer');
gamevar.state.add('Load', Game.Load);
gameContainer.add('MainMenu', Game.MainMenu);