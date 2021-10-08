function army(w) {
    return {
        window: w,
        invaders: 0,
        init: function() {
            this.launch(10000)
        },
        launch: function(delay) {
            const i = invader(this.window, this.invaders++);
            i.launch();
            this.window.setTimeout(function() {
                this.launch(delay - 50);
            }.bind(this), delay);
        }
    }
}