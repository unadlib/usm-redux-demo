function assign(target, key, value, options) {
  Object.defineProperty(target, key, {
    configurable: true,
    writable: true,
    enumerable: true,
    value,
    ...options,
  });
}

export function autobind(target, key, { value, configurable, enumerable }) {
	if (typeof value !== 'function') {
		throw new SyntaxError(`@autobind decorator must be applied to functions not: ${typeof fn}`);
	}
	return {
		configurable,
    enumerable,
		get() {
      if (this === target) {
        return value;
      }
      if (
        target.constructor !== this.constructor &&
        target.constructor === Object.getPrototypeOf(this).constructor
      ) {
        return value;
      }
			const boundFn = value.bind(this);
      assign(this, key, boundFn, { enumerable: false });
			return boundFn;
		},
		set(value) {
      assign(this, key, value);
		}
	};
}
