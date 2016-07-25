import layout from '../templates/components/test-addon';
import computed from 'ember-computed';
import Component from 'ember-component';


export default Component.extend({
    layout,

    height: 100,
    width: 100,

    src: computed('height', 'width', {
        get() {
            const base = 'http://www.fillmurray.com/';
            const url = `${base}${this.get('width')}/${this.get('height')}`;
            return url;
        }
    })
});
