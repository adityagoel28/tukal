declare const _default: import("vue").DefineComponent<{}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: any;
    };
    danger: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    primary: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    colorSecondary: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: any;
    };
}, unknown, {
    componentColor: import("vue").Ref<string>;
    getColor: (color: any) => any;
    getColorSecondary: FunctionConstructor;
    approuter: import("vue-router").Router;
}, {}, {
    isColorDark(): any;
    isColor(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    danger: boolean;
    success: boolean;
    warn: boolean;
    dark: boolean;
    primary: boolean;
    active: boolean;
    colorSecondary: string;
} & {
    color?: string;
    textColor?: string;
}>, {
    color: string;
    danger: boolean;
    success: boolean;
    warn: boolean;
    dark: boolean;
    primary: boolean;
    active: boolean;
    colorSecondary: string;
    textColor: string;
}>, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
