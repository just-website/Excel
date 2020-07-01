import {utils} from '../core/utils';

export class DomListener {
	constructor(root, options) {
		this.$root = root;
		this.listeners = options.listeners || [];
	}

	initListeners() {
		this.listeners.forEach( listener => {
			const methodName = utils.methodName(listener);
			this[methodName] = this[methodName].bind(this);
			this.$root.on(listener, this[methodName]);
		});
	}

	removeListeners() {
		this.listeners.forEach( listener => {
			const methodName = utils.methodName(listener);
			this.$root.off(listener, this[methodName]);
		});
	}
}