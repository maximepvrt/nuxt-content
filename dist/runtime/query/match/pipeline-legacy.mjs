import { createPipelineFetcher } from "./pipeline.mjs";
export function createPipelineFetcherLegacy(getContentsList) {
  const _pipelineFetcher = createPipelineFetcher(getContentsList);
  return async (query) => {
    const params = query.params();
    const result = await _pipelineFetcher(query);
    if (params.surround) {
      return result?.surround;
    }
    if (result?.dirConfig) {
      result.result = {
        _path: result.dirConfig?._path,
        ...result.result,
        _dir: result.dirConfig
      };
    }
    return result?.result;
  };
}
