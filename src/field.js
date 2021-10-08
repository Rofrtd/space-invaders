function field(w) {
    return {
        window: w,
        laser: laser(w),
        army: army(w),
        init: function() {
            this.laser.init();
            this.army.init()
        },
    };
}
