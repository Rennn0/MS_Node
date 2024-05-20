namespace builder {
	/**
	 * A type representing a map of setter functions for a target object.
	 * @typeParam TTarget - The type of the target object.
	 * @typeParam TBuilder - The type of the builder object.
	 */
	type PropertyMapper<TTarget, TBuilder> = {
		[Key in keyof TTarget as `set${Capitalize<string & Key>}`]: (arg: TTarget[Key]) => TBuilder;
	};

	/**
	 * A type representing an abstract builder for a target object.
	 * @typeParam TTarget - The type of the target object.
	 */
	type AbstractBuilder<TTarget> = {
		entity: TTarget;
		build: () => TTarget;
	};

	/**
	 * A type representing a combined type of PropertyMapper and AbstractBuilder.
	 * @typeParam TTarget - The type of the target object.
	 * @typeParam TBuilder - The type of the builder object.
	 */
	export type Hefestos<TTarget, TBuilder> = PropertyMapper<TTarget, TBuilder> &
		AbstractBuilder<TTarget>;

	/**
	 * A type representing a builder for a target object.
	 * @typeParam T - The type of the target object.
	 */
	type Builder<T> = {
		[K in keyof T]: (arg: T[K]) => Builder<T>;
	} & { build: () => T };

	/**
	 * A function that creates a builder for a target object.
	 * @typeParam T - The type of the target object.
	 * @param template - The initial template for the builder.
	 * @returns A builder object for the specified target object.
	 */
	export function builder<T>(template: T = {} as T): Builder<T> {
		const proxy = new Proxy(
			{},
			{
				get(_, prop) {
					if (prop == "build") {
						return () => Object.assign({}, template);
					}
					return (value?: any) => {
						if (value) {
							template[prop] = value;
						}
						return proxy;
					};
				},
			},
		);

		return proxy as Builder<T>;
	}
}

export { builder };
