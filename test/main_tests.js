describe('laser', () => {
    it('moves itself left', () => {
        document.body.innerHTML = '<div style="' +
            'left: 100px; position:absolute;"' +
            'id="laser">xxx</div>';
        laser(document).move(+10);
        const div = document.getElementById('laser');
        const rect = div.getBoundingClientRect();
        assert.equal(110, rect.left);
    });
})
