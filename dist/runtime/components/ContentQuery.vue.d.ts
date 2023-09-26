import { type PropType, type VNode } from 'vue';
import type { ParsedContent, SortParams } from '../types';
export interface ContentQueryDefaultSlotContext {
    data: ParsedContent | Array<ParsedContent>;
    refresh: () => Promise<void>;
    isPartial: boolean;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            sort?: SortParams | undefined;
            find?: "surround" | "one" | undefined;
            where?: {
                [key: string]: any;
            } | undefined;
            only?: string[] | undefined;
            without?: string[] | undefined;
            limit?: number | undefined;
            skip?: number | undefined;
            path?: string | undefined;
            locale?: string | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * The path of the content to load from content source.
             */
            path: {
                type: StringConstructor;
                required: false;
                default: undefined;
            };
            /**
             * Select a subset of fields
             */
            only: {
                type: PropType<string[]>;
                required: false;
                default: undefined;
            };
            /**
             * Remove a subset of fields
             */
            without: {
                type: PropType<string[]>;
                required: false;
                default: undefined;
            };
            /**
             * Filter results
             */
            where: {
                type: PropType<{
                    [key: string]: any;
                }>;
                required: false;
                default: undefined;
            };
            /**
             * Sort results
             */
            sort: {
                type: PropType<SortParams>;
                required: false;
                default: undefined;
            };
            /**
             * Limit number of results
             */
            limit: {
                type: PropType<number>;
                required: false;
                default: undefined;
            };
            /**
             * Skip number of results
             */
            skip: {
                type: PropType<number>;
                required: false;
                default: undefined;
            };
            /**
             * Filter contents based on locale
             */
            locale: {
                type: PropType<string>;
                required: false;
                default: undefined;
            };
            /**
             * A type of query to be made.
             */
            find: {
                type: PropType<"surround" | "one">;
                required: false;
                default: undefined;
            };
        }>>, {
            isPartial: any;
            data: any;
            refresh: any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            sort: SortParams;
            find: "surround" | "one";
            where: {
                [key: string]: any;
            };
            only: string[];
            without: string[];
            limit: number;
            skip: number;
            path: string;
            locale: string;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        /**
         * The path of the content to load from content source.
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * Select a subset of fields
         */
        only: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Remove a subset of fields
         */
        without: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Filter results
         */
        where: {
            type: PropType<{
                [key: string]: any;
            }>;
            required: false;
            default: undefined;
        };
        /**
         * Sort results
         */
        sort: {
            type: PropType<SortParams>;
            required: false;
            default: undefined;
        };
        /**
         * Limit number of results
         */
        limit: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Skip number of results
         */
        skip: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Filter contents based on locale
         */
        locale: {
            type: PropType<string>;
            required: false;
            default: undefined;
        };
        /**
         * A type of query to be made.
         */
        find: {
            type: PropType<"surround" | "one">;
            required: false;
            default: undefined;
        };
    }>> & import("vue").ShallowUnwrapRef<{
        isPartial: any;
        data: any;
        refresh: any;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * The path of the content to load from content source.
     */
    path: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    /**
     * Select a subset of fields
     */
    only: {
        type: PropType<string[]>;
        required: false;
        default: undefined;
    };
    /**
     * Remove a subset of fields
     */
    without: {
        type: PropType<string[]>;
        required: false;
        default: undefined;
    };
    /**
     * Filter results
     */
    where: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: false;
        default: undefined;
    };
    /**
     * Sort results
     */
    sort: {
        type: PropType<SortParams>;
        required: false;
        default: undefined;
    };
    /**
     * Limit number of results
     */
    limit: {
        type: PropType<number>;
        required: false;
        default: undefined;
    };
    /**
     * Skip number of results
     */
    skip: {
        type: PropType<number>;
        required: false;
        default: undefined;
    };
    /**
     * Filter contents based on locale
     */
    locale: {
        type: PropType<string>;
        required: false;
        default: undefined;
    };
    /**
     * A type of query to be made.
     */
    find: {
        type: PropType<"surround" | "one">;
        required: false;
        default: undefined;
    };
}>>, {
    isPartial: any;
    data: any;
    refresh: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    sort: SortParams;
    find: "surround" | "one";
    where: {
        [key: string]: any;
    };
    only: string[];
    without: string[];
    limit: number;
    skip: number;
    path: string;
    locale: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (context: ContentQueryDefaultSlotContext) => VNode[] | undefined;
    };
});
export default _default;
