function laser(d) {
    return {
        doc: d,
        div: function() {
          return this.doc.getElementById('laser')  
        },
        x: function() {
            return this.div().getBoundingClientRect().left;
        },
        move: function(dx) {
            return this.div().style.left = this.x() + dx + 'px';
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