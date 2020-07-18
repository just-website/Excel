class Dom {
	constructor(selector) {
		this.$element = typeof selector === 'string' ? document.querySelector(selector) : selector;
	}

	get data() {
		return this.$element.dataset;
	}

	html(data) {
		if (data) {
			this.$element.innerHTML = data;
		}
		return this.$element.outerHTML;
	}

	append(data) {
		if (data instanceof Dom) {
			data = data.$element;
		}
		this.$element.append(data); 
		return this;
	}

	findAll(selector) {
		return this.$element.querySelectorAll(selector);
	}

	closest(selector) {
		return $(this.$element.closest(selector));
	}

	style(styles) {
		Object.entries(styles)
			.forEach( ([key, value]) => {
				this.$element.style[key] = value;
			});
	}

	getCoords() {
		return this.$element.getBoundingClientRect();
	}

	on(eventName, callback) {
		this.$element.addEventListener(eventName, callback);
	}

	off(eventName, callback) {
		this.$element.removeEventListener(eventName, callback);
	}
}

function $(selector) {
	return new Dom(selector);
}

$.create = (tagname, classlist = '') => {
	const element = document.createElement(tagname);
	element.classList.add(classlist);
	return $(element);
};

export {$};