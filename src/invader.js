function invader(w, i) {
    return {
        window: w,
        id: 'invader' + i,
        launch: function() {
            const div = this.window.document.createElement('div');
            div.id = this.id;
            div.classname = 'invader';
            this.window.document.getElementById('field').appendChild(div);
            this.attack(40, 2);
        },
        attack: function (v, dx) {
            const div = this.window.document.getElementById(this.id);
            const rect = div.getBoundingClientRect();
            const x = rect.left + dx;
            div.style.left = x + 'px';
            this.window.setTimeout(function() {
                const width = div.parentElement.getBoundingClientRect().width;
                if (x > width - rect.width || x < 0) {
                    div.style.top = rect.top + rect.height * 2 + 'px';
                    this.attack(v - 1, -dx);
                } else {
                    this.attack(v, dx);
                }
            }.bind(this), v);
        }
    }
}