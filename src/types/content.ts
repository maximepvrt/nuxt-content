export interface TransformedContent {
  id: string
  [key: string]: unknown
}

export interface TransformContentOptions {
  transformers?: ContentTransformer[]
  [key: string]: unknown
}

export type ContentTransformer = {
  name: string
  extensions: string[]
  parse(id: string, content: string, options: Record<string, unknown>): Promise<TransformedContent> | TransformedContent
  transform?(content: TransformedContent, options: Record<string, unknown>): Promise<TransformedContent> | TransformedContent
} | {
  name: string
  extensions: string[]
  parse?(id: string, content: string, options: Record<string, unknown>): Promise<TransformedContent> | TransformedContent
  transform(content: TransformedContent, options: Record<string, unknown>): Promise<TransformedContent> | TransformedContent
}

export interface MarkdownPlugin extends Record<string, unknown> {
  instance?: unknown
  options?: Record<string, unknown>
}
export interface MarkdownOptions {
  /**
   * Enable/Disable MDC components.
   */
  mdc: boolean
  toc: {
    /**
     * Maximum heading depth to include in the table of contents.
     */
    depth: number
    searchDepth: number
  }
  tags: Record<string, string>
  remarkPlugins: Record<string, false | MarkdownPlugin>
  rehypePlugins: Record<string, false | MarkdownPlugin>

  highlight?: {
    highlighter?: (code: string, lang: string) => string
    [key: string]: unknown
  }
}

export const ContentFileExtension = {
  Markdown: 'md',
  Yaml: 'yaml',
  Json: 'json',
  Csv: 'csv',
  Xml: 'xml',
} as const

export const ContentFileType = {
  Markdown: 'markdown',
  Yaml: 'yaml',
  Json: 'json',
  Csv: 'csv',
} as const

export interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

export interface Toc {
  title: string
  depth: number
  searchDepth: number
  links: TocLink[]
}

export interface MarkdownNode {
  type: string
  tag?: string
  value?: string
  props?: Record<string, unknown>
  content?: unknown
  children?: MarkdownNode[]

  attributes?: Record<string, unknown>
  fmAttributes?: Record<string, unknown>
}

export interface MarkdownRoot {
  type: 'root'
  children: MarkdownNode[]
  props?: Record<string, unknown>
  toc?: Toc
}
