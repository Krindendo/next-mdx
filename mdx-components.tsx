import type { MDXComponents } from "mdx/types";
import { ConvertMdxToComponents } from "./components/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...ConvertMdxToComponents, ...components };
}
