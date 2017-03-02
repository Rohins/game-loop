// Creator: Ricardo Rodriguez
// Date   : February 19, 2016

class GameLoop {
    // Constructor accepts a main method and speed as arguments.
    // The main method will run at an interval based on speed 
    // using JavaScript's setInterval function. Here the pause
    // variable is set to false as well. The game will run the
    // moment the GameLoop is instantiated.
    constructor(main, speed = 1000) {
        this.paused = false;
        this.speed = speed;
        this.main = main;
        this.start();
    }

    // Sets the pause variable to true, pausing the game loop.
    pause() {
        this.paused = true;
        this.stop();
    }

    // Sets the pause variable to false, un-pausing the game loop.
    un_pause() {
        this.paused = false;
        this.start();
    }

    // Toggles the pause feature. 
    toggle_pause() {
        if (this.paused) {
            this.un_pause();
            return;
        }

        this.pause();
    }

    // Sets the speed of the game while it is still running.
    set_speed(speed) {
        this.stop();
        this.speed = speed;
        this.start();
    }

    start() {
        this.game_loop = window.setInterval(this.main.bind(this), this.speed);
    }

    stop() {
        clearInterval(this.game_loop);
    }
}

export default GameLoop;
