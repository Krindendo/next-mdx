import { getTableOfContents } from "./toc.mjs";

import * as acorn from "acorn";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxjsEsm } from "micromark-extension-mdxjs-esm";
import { mdxjsEsmFromMarkdown } from "mdast-util-mdxjs-esm";

export default function makeToc(options) {
  console.log("options", options);

  return async function (tree) {
    const result = getTableOfContents(tree);

    const doc = `export const toc = ${JSON.stringify(result.items)};`;

    const docTree = fromMarkdown(doc, {
      extensions: [mdxjsEsm({ acorn, addResult: true })],
      mdastExtensions: [mdxjsEsmFromMarkdown()],
    });

    const docTreeChild = docTree.children[0];

    // if (
    //   result.endIndex === undefined ||
    //   result.endIndex === -1 ||
    //   result.index === undefined ||
    //   result.index === -1 ||
    //   !result.map
    // ) {
    //   return;
    // }

    tree.children = [docTreeChild, ...tree.children];
    return tree;
  };
}
