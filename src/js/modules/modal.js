define(['domReady', 'jquery'], function(domReady, $) {
    domReady(function() {
        var modal = self = {
            selectors: {
                container: '#easy-modal-container',
                inner: '#easy-modal-inner',
                autoPopulate: '#easy-modal-auto-populate'
            },
            frame: '<div id="easy-modal-container"><div id="easy-modal-shade"></div><div id="easy-modal-inner"></div></div>',
            _init: function() {
                console.log('test');
                self.addFrame();
                self.autoPopulate();
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
            show: function() {
                $(self.selectors.container).show();
            },
            hide: function() {
                $(self.selectors.container).hide();
            },


        };
        modal._init();
        return modal;
    });
});