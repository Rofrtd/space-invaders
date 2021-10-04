const field = {
    init: function (doc) {
        doc.addEventListener('keydown', function (evt) {
            if (evt.keycode === 37) {
                field.move_laser(doc, -15);
            }
            if (evt.keycode === 39) {
                field.move_laser(doc, +15);
            }
        })
    },
    move_laser: function (doc, dx) {
        const div = doc.getElementByID('laser');
        const rect = div.getBoundingClientRect();
        div.style.left = rect.left + dx + 'px';
    }
}