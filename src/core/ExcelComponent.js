import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {

	constructor(root, options = {}) {
		super(root, options);
	}

	toHTML() {
		return '';
	}

	init() {
		this.initListeners();
	}

	destroy() {
		this.removeListeners();
	}
}