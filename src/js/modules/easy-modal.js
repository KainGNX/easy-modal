/**
 * #### Easy Modal with RequireJS and Jquery ####
 * 
 * Intended for easily adding a modal to any page onload/or after
 * leaving the inner portion of the modal open for flexible free-form
 * content determined by the user.
 * 
 * @author Jason Horvath <jason.horvath@greaterdevelopment.com>
 * @license GPL v3 Copyright: 2018
 * @version 1.0.0
 * 
 */

define(['domReady', 'jquery'], function(domReady, $) {
    domReady(function() {
        'use strict';

        /**
         * Modal Object
         */
        var modal = self = {

            /**
             * @var {string} name -- Used to assemble selectors in context to avoid conflicts
             */
            name: 'easy-modal',

            /**
             * @var {array} suffixes -- Valid selector suffixes used with internal functions
             */
            suffixes: [
                'container',
                'inner',
                'onload-inner',
                'show',
                'hide',
                'opened'
            ],

            /**
             * @var {string} frame -- Modal frame appened to <body> - <:prefix:> replaced before use
             */
            frame: '<div id="<:prefix:>-container"><div id="<:prefix:>-shade"></div><div id="<:prefix:>-inner"></div></div>',

            /**
             * @var {string} displaySpeed -- Speed at which modal displays and hides
             */
            displaySpeed: 300,

            /**
             * Init
             * 
             * @return {Object} self
             */
            _init: function() {
                self.addFrame();
                self.onLoadInner();
                self.bindControls();
                return self;
            },

            /**
             * Add Frame -- add the modal frame to the body
             * 
             * @return void
             */
            addFrame: function() {
                var parsedFrame = self.frame.replace(/<:prefix:>/g, self.name)
                $('body').append($(parsedFrame));
            },

            /**
             * On Load -- finds for related elements and content to poplulate onload
             * 
             * @return void
             */
            onLoadInner: function() {
                var onLoadElement = $(self.selectId('onload-inner'));
                if(onLoadElement.length) {
                    self.populate(onLoadElement.detach());
                }
            },

            /**
             * Populate -- place content into modal inner frame
             * 
             * @param {Object} contentElement 
             */
            populate: function(contentElement) {
                $(self.selectId('inner')).html(contentElement.html());
            },

            /**
             * Bind Controls -- bind applicable events to elements
             * 
             * @return void
             */
            bindControls: function() {
                $(self.selectClass('show')).on('click', function(e) {
                    self.show();
                });
                $(self.selectClass('hide')).on('click', function(e) {
                    self.hide();
                });
            },

            /**
             * Show -- Make the modal visible
             * 
             * @return void
             */
            show: function() {
                $('body').addClass(self.cssClass('opened'));
                $(self.selectId('container')).fadeIn(self.displaySpeed);
            },

            /**
             * Hide -- Make the modal non-visible
             * 
             * @return void
             */
            hide: function() {
                $('body').removeClass(self.cssClass('opened'));
                $(self.selectId('container')).fadeOut(self.displaySpeed);
            },

            /**
             * Select Id -- CSS id to select using # + self.name + suffix
             * 
             * @param {string} suffix 
             * @return {string}
             */
            selectId: function(suffix) {
                return self.getSelector(suffix, '#');
            },

            /**
             * Select Class -- CSS class string using . + self.name + suffix
             * 
             * @param {string} suffix 
             * @return {string}
             */
            selectClass: function(suffix) {
                return self.getSelector(suffix, '.');
            },

            /**
             * Css Class -- Css class to select using self.name + suffix
             * 
             * @param {string} suffix 
             * @return {string}
             */
            cssClass: function(suffix) {
                return self.getSelector(suffix, '');
            },

            /**
             * Get Selector -- Assembles full Css string in modal context
             * 
             * @throws console.error()
             * @param {string} suffix 
             * @param {string} 
             */
            getSelector: function(suffix, typeSymbol) {
                if(self.suffixes.indexOf(suffix) > -1) {
                    return typeSymbol + self.name + '-' + suffix;
                } else {
                    console.error('Attempted use of undefined selector suffix "' + suffix + '" -- Valid values: ' + self.suffixes.join(', '));
                }
            },
        };
        return modal._init();
    });
});