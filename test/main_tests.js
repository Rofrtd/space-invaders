describe('laser', () => {
    it('moves itself left', () => {
        document.body.innerHTML = '<div style="' +
            'left: 100px; position:absolute;"' +
            'id="laser">xxx</div>';
        const lz = laser(document)
        lz.move(+10);
        assert.equal(110, lz.x());
    });
})
