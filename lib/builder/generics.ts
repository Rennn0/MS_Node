namespace builder {
  type PropertyMapper<TTarget, TBuilder> = {
    [Key in keyof TTarget as `set${Capitalize<string & Key>}`]: (
      arg: TTarget[Key],
    ) => TBuilder;
  };

  type AbstractBuilder<TTarget> = {
    entity: TTarget;
    build: () => TTarget;
  };

  export type Hefestos<TTarget, TBuilder> = PropertyMapper<TTarget, TBuilder> &
    AbstractBuilder<TTarget>;
}

export { builder };
