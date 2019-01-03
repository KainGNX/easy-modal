# Easy Modal (with RequireJS and jQuery)
General use modal module to allow easy implementation of a modal in any page with free-form contents.

## Dependencies
- [RequireJS](https://requirejs.org/docs/download.html) download
- [jQuery](https://jquery.com/download/) download

## Include Usage
Prior knowledge of [RequireJS](https://requirejs.org/) is assumed. The included sample code is using CDN libraries.

Where the files are placed depends on how files like [require-config.js](https://github.com/KainGNX/easy-modal/blob/master/src/js/config/require-config.js) will be configured relative to your file placement.

Be sure to include contents from [easy-modal.css](https://github.com/KainGNX/easy-modal/blob/master/src/css/easy-modal.css) for the modal to work.

## Basic Usage: Adding content to the modal on load
Simply add, or surround page content with a container element with the id of `#easy-modal-onload-inner`

The element will be detached from the DOM and its contents placed into `#easy-modal-inner`

The contents of the `#easy-modal-onload-inner` can be however needed, and does not necessarily have to follow the tag structure shown.

Free-form content is intended.
```html
<div id="easy-modal-onload-inner">
    <div class="easy-modal-header">
        <h3>Your Modal Header</h3>
    </div>
    <div class="easy-modal-content">
        <p>Your modal content of nice things.</p>
    </div>
    <div class="easy-modal-footer">
        <button type="button" class="easy-modal-close">Close Modal</button>
    </div>
</div>
```

## Clickable elements for opening and closing the modal

Add the `.easy-modal-open` class to any element which will open the modal on click.
```html
<button type="button" class="easy-modal-open">Open Modal</button>
```
Add the `.easy-modal-close` class to any element which will close the modal on click.
```html
<button type="button" class="easy-modal-close">Close Modal</button>
```

## Custom Usage
Include in other [RequireJS](https://requirejs.org/) scripts matching your configuration. See doc block comments in non-minified [easy-modal.js](https://github.com/KainGNX/easy-modal/blob/master/src/js/modules/easy-modal.js) and apply as needed for additional custom integration.

## Live Example
See an [Easy Modal](https://www.greaterdevelopment.com/showcase/easy-modal/) working example of this source.

### See also
- [RequireJS](https://requirejs.org/)
- [jQuery](https://jquery.com/)
- [Easy Modal](https://github.com/KainGNX/easy-modal) repository for complete usage.
