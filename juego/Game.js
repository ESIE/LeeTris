Game = {};




Game.PlayGame = function(game) {

    this.currentlevel;

};


// set Game function prototype
Game.PlayGame.prototype = {


    init: function() {

        var score = 0;
        var width = 30;
        var height = 30;
        var force_down_max_time = 500;
        var siguiente = true;
        var oldsquares = new Array();
        var timer;
        var me = this;
        var tiempoextra = 0;
        var squaresinrow = new Array();
        var change_rot_time = 0;
        var force_down = 0;
        var slide_time = 0;
        var music;
        var KEYLEFT;
        var KEYRIGHT;
        var KEYUP;
        var KEYDOWN;
        var aux = force_down_max_time;

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.setShowAll();
        window.addEventListener('resize', function() { this.game.scale.refresh(); });
        this.game.scale.refresh();
        // If you wish to align your game in the middle of the page then you can
        // set this value to true. It will place a re-calculated margin-left
        // pixel value onto the canvas element which is updated on orientation /
        // resizing events. It doesn't care about any other DOM element that may
        // be on the page, it literally just sets the margin.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Sets the callback that will be called when the window resize event
        // occurs, or if set the parent container changes dimensions. Use this 
        // to handle responsive game layout options. Note that the callback will
        // only be called if the ScaleManager.scaleMode is set to RESIZE.
        this.scale.setResizeCallback(this.gameResized, this);
        // Set screen size automatically based on the scaleMode. This is only
        // needed if ScaleMode is not set to RESIZE.
        this.scale.updateLayout(true);
    },
    /*
 preload: function() {

            // Here we load the asset required for our preloader (in this case a 
            // background and a loading bar)

        },*/

    create: function() {



        var me = this;
        me.startTime = new Date();
        me.totalTime = 50;
        me.timeElapsed = 0;

        me.createTimer();

        me.gameTimer = this.game.time.events.loop(100, function() {
            me.updateTimer();
        });

        this.bck = this.game.add.sprite(0, 0, 'bck');

        this.game.world.bounds.x = 21;

        this.game.world.bounds.y = 0;

        this.game.world.bounds.width = 280;

        this.game.world.bounds.height = 560;

        /* Implementacion de el tiempo del juego, no funciona aun del todo bien
        *   asi que mejor queda comentada
        timer = this.game.time.create(true);
    */

        this.focusblock = new Block(this.game, this.game.world.centerX, -40, this.chooseblock(), this.choosecolor(), 1);

        this.nextblocktype = this.chooseblock();

        this.nextblockcolor = this.choosecolor();

        this.nextblock = new Block(this.game, 412, 185, this.nextblocktype, this.nextblockcolor, 0.7);

        KEYRIGHT = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        KEYLEFT = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

        KEYUP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

        KEYDOWN = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        this.scoretextmain = this.add.text(400, 60, " " + score + " ", { font: "20px Arial", fill: "#fff", align: "center" });

        //Pone el tiempo en pantalla
        me.timeLabel = me.game.add.text(500, 60, "00:00", { font: "20px Arial", fill: "#fff" });

        this.game.input.onDown.add(function() {
            if (this.game.paused) this.game.paused = false;
            this.pauseBck.destroy();
        }, this);

        oldsquares.length = 0;

        squaresinrow.length = 0;

        score = 0;


    },

    createTimer: function() {

        this.timeLabel = me.game.add.text(500, 60, "00:00", { font: "20px Arial", fill: "#fff" });
        this.timeLabel.anchor.setTo(0.5, 0);
        this.timeLabel.align = 'center';

    },

    updateTimer: function() {


        var currentTime = new Date();
        var timeDifference = this.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        this.timeElapsed = Math.abs(timeDifference / 1000);

        var timeRemaining = me.totalTime - me.timeElapsed;

        //Time remaining in seconds
        if (tiempoextra != 0) {
            me.totalTime += tiempoextra;
            tiempoextra = 0;
        }

        if (timeRemaining <= 0) {

            me.timeLabel.text = "00:00";
            this.game.state.start('Lose');

        }
        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);
        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes;
        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
        me.timeLabel.text = result;

    },

    botonCorrecto: function() {
        console.log(score);
        squaresinrow[19] = 9;
        score += 100;
        //time+=15;
        siguiente = true;
        text.destroy();
        texta.destroy();
        textb.destroy();
        textc.destroy();
    },

    botonIncorrecto: function() {
        console.log(score);
        //time-= 5;
        score -= 100;
        aux = aux - 100;
        force_down_max_time -= 100;
    },

    chooseblock: function() {

        var x = Math.floor(Math.random() * 7);

        switch (x) {

            case 0:
                return 'o';

            case 1:
                return 't';

            case 2:
                return 'l';

            case 3:
                return 'j';

            case 4:
                return 'i';

            case 5:
                return 's';

            case 6:
                return 'z';

        }

    },

    choosecolor: function() {

        return Math.floor(Math.random() * 5);

    },

    checkcompletedlines: function() {
        for (var i = 0; i < 20; i++) {
            squaresinrow[i] = 0;

        }

        var top = this.game.world.bounds.height - 19 * height - height / 2;

        var num_rows, rows;



        for (var i = 0; i < oldsquares.length; i++) {

            row = (oldsquares[i].y - top) / height;

            squaresinrow[row]++;

        }



        for (var i = 0; i < 20; i++) {

            if (squaresinrow[i] == 9) {

                console.log(score);

                score += 100;
                tiempoextra = 10;


                for (var j = 0; j < oldsquares.length; j++) {

                    if ((oldsquares[j].y - top) / height == i) {

                        oldsquares[j].destroy();

                        oldsquares.splice(j, 1);

                        j--;

                    }

                }

            }

        }



        for (var i = 0; i < oldsquares.length; i++) {

            for (var j = 0; j < 20; j++) {

                if (squaresinrow[j] == 9) {

                    row = (oldsquares[i].y - top) / height;

                    if (row < j) {

                        oldsquares[i].y += height;

                    }

                }

            }

        }

    },

    update: function() {

        if (me.timeElapsed >= me.totalTime) {
            this.game.state.start('Lose')

        }
        var style = { font: "25px Arial", fill: "white", wordWrap: true, align: "justify", wordWrapWidth: 400 };
        var y = Math.floor(Math.random() * 4);
        if (siguiente) {
            switch (y) {
                case 0:
                    var pregunta = '¿Cómo se llamaban los padres de Víctor Frankenstein?';
                    var respuestaApregunta1 = "Walton y Caroline";
                    var respuestaBpregunta1 = "Alphonse y Caroline";
                    var respuestaCpregunta1 = "Beufort y Elizabeth";
                    text = this.game.add.text(670, 50, pregunta, style);
                    texta = this.game.add.text(700, 150, respuestaApregunta1, style);
                    textb = this.game.add.text(700, 250, respuestaBpregunta1, style);
                    textc = this.game.add.text(700, 350, respuestaCpregunta1, style);
                    this.botona = this.add.button(665, 150, 'botona', this.botonIncorrecto, this, 1, 0, 2);
                    this.botonb = this.add.button(665, 250, 'botonb', this.botonCorrecto, this, 1, 0, 2);
                    this.botonx = this.add.button(665, 350, 'botonx', this.botonIncorrecto, this, 1, 0, 2);
                    siguiente = false;
                    break;
                case 1:
                    var pregunta = '¿Cómo encontró Alphonse a Caroline?';
                    var respuestaApregunta2 = "En compañía de su padre Beufort";
                    var respuestaBpregunta2 = "En una gran mansión";
                    var respuestaCpregunta2 = "Sola y en la pobreza";
                    text = this.game.add.text(670, 50, pregunta, style);
                    texta = this.game.add.text(700, 150, respuestaApregunta2, style);
                    textb = this.game.add.text(700, 250, respuestaBpregunta2, style);
                    textc = this.game.add.text(700, 350, respuestaCpregunta2, style);
                    this.botona = this.add.button(665, 150, 'botona', this.botonIncorrecto, this, 1, 0, 2);
                    this.botonb = this.add.button(665, 250, 'botonb', this.botonIncorrecto, this, 1, 0, 2);
                    this.botonx = this.add.button(665, 350, 'botonx', this.botonCorrecto, this, 1, 0, 2);
                    siguiente = false;
                    break;
                case 2:
                    var pregunta = '¿En dónde se casaron Alphonse y Caroline?';
                    var respuestaApregunta3 = "  En Venecia";
                    var respuestaBpregunta3 = "En Ginebra";
                    var respuestaCpregunta3 = "En Paris";
                    text = this.game.add.text(670, 50, pregunta, style);
                    texta = this.game.add.text(700, 150, respuestaApregunta3, style);
                    textb = this.game.add.text(700, 250, respuestaBpregunta3, style);
                    textc = this.game.add.text(700, 350, respuestaCpregunta3, style);
                    this.botona = this.add.button(665, 150, 'botona', this.botonCorrecto, this, 1, 0, 2);
                    this.botonb = this.add.button(665, 250, 'botonb', this.botonIncorrecto, this, 1, 0, 2);
                    this.botonx = this.add.button(665, 350, 'botonx', this.botonIncorrecto, this, 1, 0, 2);
                    siguiente = false;
                    break;
                case 3:
                    var pregunta = '¿Quién era Elizabeth Levenza?';
                    var respuestaApregunta4 = "La hija de Beufort";
                    var respuestaBpregunta4 = "La madre de Caroline";
                    var respuestaCpregunta4 = "La hija adoptada de los Frankenstein";
                    text = this.game.add.text(670, 50, pregunta, style);
                    texta = this.game.add.text(700, 150, respuestaApregunta4, style);
                    textb = this.game.add.text(700, 250, respuestaBpregunta4, style);
                    textc = this.game.add.text(700, 350, respuestaCpregunta4, style);
                    this.botona = this.add.button(665, 150, 'botona', this.botonIncorrecto, this, 1, 0, 2);
                    this.botonb = this.add.button(665, 250, 'botonb', this.botonCorrecto, this, 1, 0, 2);
                    this.botonx = this.add.button(665, 350, 'botonx', this.botonIncorrecto, this, 1, 0, 2);
                    siguiente = false;
                    break;
            }
        }



        if (this.game.time.now > force_down)

        {

            if (this.focusblock.wallcollide(oldsquares, 'down') != true) this.focusblock.move('down');

            else {

                for (var i = 0; i < 4; i++) {

                    oldsquares.push(this.focusblock.squares[i]);

                }

                this.focusblock = new Block(this.game, this.game.world.centerX, -40, this.nextblocktype, this.nextblockcolor, 1);

                this.nextblocktype = this.chooseblock();

                this.nextblockcolor = this.choosecolor();

                for (var i = 0; i < 4; i++) {

                    this.nextblock.squares[i].destroy();
                }

                this.nextblock = new Block(this.game, 412, 185, this.nextblocktype, this.nextblockcolor, 0.7);

                if (this.focusblock.wallcollide(oldsquares, 'down') == true) { this.game.state.start('Lose'); }

            }

            this.checkcompletedlines();

            this.scoretextmain.setText(score);


            if (score > 500) {
                this.game.state.start('Win');

            }



            force_down = this.game.time.now + force_down_max_time;

        }

        if (KEYRIGHT.isDown || right) {

            if (this.game.time.now > change_rot_time) {

                if (this.focusblock.wallcollide(oldsquares, 'right') != true) this.focusblock.move('right');

                change_rot_time = this.game.time.now + 100;

            }

        }

        if (KEYLEFT.isDown || left) {

            if (this.game.time.now > change_rot_time) {

                if (this.focusblock.wallcollide(oldsquares, 'left') != true) this.focusblock.move('left');

                change_rot_time = this.game.time.now + 100;

            }

        }

        if (KEYUP.isDown || up) {

            if (this.game.time.now > change_rot_time) {

                if (this.focusblock.rotatecollide(oldsquares) != true) this.focusblock.rotate();

                change_rot_time = this.game.time.now + 100;

            }

        }

        if (KEYDOWN.isDown || down) {
            force_down_max_time = 50;
        } else {
            force_down_max_time = aux;
        }
    }

};
