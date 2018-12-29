define(['domReady', 'jquery'], function(domReady, $) {
    domReady(function() {
        var modal = self = {
            selectors: {
                container: '#easy-modal-container',
                inner: '#easy-modal-inner',
                autoPopulate: '#easy-modal-auto-populate',
                show: '.easy-modal-show',
                hide: '.easy-modal-hide',
            },
            css: {
                isOpen: 'easy-modal-is-open'
            },
            frame: '<div id="easy-modal-container"><div id="easy-modal-shade"></div><div id="easy-modal-inner"></div></div>',
            transitionSpeed: 300,
            _init: function() {
                console.log('test');
                self.addFrame();
                self.autoPopulate();
                self.bindControls();
            },
            addFrame: function() {
                $('body').append($(self.frame));
            },
            autoPopulate: function() {
                if($(self.selectors.autoPopulate).length) {
                    self.populate($(self.selectors.autoPopulate).detach());
                }
            },
            populate: function(contentElement) {
                $(self.selectors.inner).html(contentElement.html());
            },
            bindControls: function() {
                $(self.selectors.show).on('click', function(e) {
                    self.show();
                });
                $(self.selectors.hide).on('click', function(e) {
                    self.hide();
                });
            },
            show: function() {
                $('body').addClass(self.css.isOpen);
                $(self.selectors.container).fadeIn(self.transitionSpeed);
            },
            hide: function() {
                $('body').removeClass(self.css.isOpen);
                $(self.selectors.container).fadeOut(self.transitionSpeed);
            },


        };
        modal._init();
        return modal;
    });
});