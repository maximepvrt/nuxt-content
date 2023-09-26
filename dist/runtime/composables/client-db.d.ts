import { type Storage } from 'unstorage';
import type { NavItem, ParsedContent } from '../types';
import { ContentQueryBuilderParams } from '../types/query';
export declare const contentStorage: Storage<import("unstorage/dist/types-e3a76105").S>;
export declare function createDB(storage: Storage): {
    storage: Storage<import("unstorage/dist/types-e3a76105").S>;
    fetch: (query: import("../types/query").ContentQueryBuilder<ParsedContent, {}>) => Promise<import("../types/api").ContentQueryResponse<ParsedContent>>;
    query: (initialParams?: ContentQueryBuilderParams) => import("../types/query").ContentQueryBuilder<ParsedContent, {}>;
};
export declare function useContentDatabase(): Promise<{
    storage: Storage<import("unstorage/dist/types-e3a76105").S>;
    fetch: (query: import("../types/query").ContentQueryBuilder<ParsedContent, {}>) => Promise<import("../types/api").ContentQueryResponse<ParsedContent>>;
    query: (initialParams?: ContentQueryBuilderParams | undefined) => import("../types/query").ContentQueryBuilder<ParsedContent, {}>;
}>;
export declare function generateNavigation(query?: ContentQueryBuilderParams): Promise<Array<NavItem>>;
