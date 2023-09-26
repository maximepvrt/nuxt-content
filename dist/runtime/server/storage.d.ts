import { type StorageValue } from 'unstorage';
import type { H3Event } from 'h3';
import type { ParsedContent, ContentTransformer } from '../types';
import type { ModuleOptions } from '../../module';
import { ContentQueryBuilder, ContentQueryBuilderParams } from '../types/query';
interface ParseContentOptions {
    csv?: ModuleOptions['csv'];
    yaml?: ModuleOptions['yaml'];
    highlight?: ModuleOptions['highlight'];
    markdown?: ModuleOptions['markdown'];
    transformers?: ContentTransformer[];
    pathMeta?: {
        locales?: ModuleOptions['locales'];
        defaultLocale?: ModuleOptions['defaultLocale'];
        respectPathCase?: ModuleOptions['respectPathCase'];
    };
    [key: string]: any;
}
export declare const sourceStorage: import("unstorage/dist/types-e3a76105").a<StorageValue>;
export declare const cacheStorage: import("unstorage/dist/types-e3a76105").a<StorageValue>;
export declare const cacheParsedStorage: import("unstorage/dist/types-e3a76105").a<StorageValue>;
export declare const getContentsIds: (event: H3Event, prefix?: string) => Promise<string[]>;
export declare const getContentsList: (event: H3Event, prefix?: string) => Promise<ParsedContent[]>;
export declare const getContent: (event: H3Event, id: string) => Promise<ParsedContent>;
/**
 * Parse content file using registered plugins
 */
export declare const parseContent: (id: string, content: StorageValue, opts?: ParseContentOptions) => Promise<ParsedContent | {
    _id: string;
    body: StorageValue;
}>;
export declare const createServerQueryFetch: <T = ParsedContent>(event: H3Event) => (query: ContentQueryBuilder<T, {}>) => Promise<import("../types/api").ContentQueryResponse<T>>;
/**
 * Query contents
 */
export declare function serverQueryContent<T = ParsedContent>(event: H3Event): ContentQueryBuilder<T>;
export declare function serverQueryContent<T = ParsedContent>(event: H3Event, params?: ContentQueryBuilderParams): ContentQueryBuilder<T>;
export declare function serverQueryContent<T = ParsedContent>(event: H3Event, query?: string, ...pathParts: string[]): ContentQueryBuilder<T>;
export {};
