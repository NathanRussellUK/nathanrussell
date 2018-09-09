export interface ActionCreator<Type, TBody> {
    // The value of the action's type property
    type: Type;

    // The method to build a new action based on the values you provide
    create: (body: TBody) => { type: Type } & TBody;
}

// Pass in the type of a dictionary of action creators to build a union of the typings of (i.e. typeof) actions
export type ActionUnion<
    ActionCreators extends {
        [key: string]: ActionCreator<any, any>;
    }
> = ReturnType<ActionCreators[keyof ActionCreators]["create"]>;

// The factory to build new action creators based on the definitions you provide
export const actionCreatorFactory = <Type extends string>(type: Type) => {
    return <TBody>(): ActionCreator<Type, TBody> => ({
        type,
        create: (body: TBody): { type: Type } & TBody => ({ type, ...body as any })
    });
};  