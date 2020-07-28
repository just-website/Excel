export class EventEmitter {
	constructor() {
		this.listeners = {};
	}

	emit(event, data) {
		let listeners = this.listeners[event];
		if (listeners.length) {
			listeners.forEach( listener => listener(data));
		}
	}

	subscribe(event, callback) {
		this.listeners[event] = this.listeners[event] || [];
		this.listeners[event].push(callback);
		return () => {
			this.listeners[event] = this.listeners[event].filter( listener => listener !== callback);
		};
	}
}