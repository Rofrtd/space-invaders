function laser(d) {
    return {
        doc: d,
        move: function(dx) {
            const div = this.doc.getElementById('laser');
            const rect = div.getBoundingClientRect();
            div.style.left = rect.left + dx + 'px';
        },
        init: function() {
            this.doc.addEventListener(
            'keydown',
                function(evt) {
                    if (evt.keyCode === 37) {
                        this.move(-15);
                    }
                    if (evt.keyCode === 39) {
                        this.move(+15);
                    }
                }.bind(this)
            );
        },
    };
}

function field(d) {
    return {
        doc: d,
        laser: laser(d),
        init: function() {
            this.laser.init();
        },
    };
}
