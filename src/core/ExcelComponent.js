import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {

	constructor(root, options = {}) {
		super(root, options);
		this.prepare();
	}

	prepare() {
		
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