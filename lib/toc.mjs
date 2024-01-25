import { toc } from "mdast-util-toc";
import { visit } from "unist-util-visit";
import { remark } from "remark";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node) {
  const p = [];
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return;
    p.push(node.value);
  });
  return p.join(``);
}

// interface Item {
//   title: string
//   url: string
//   items?: Item[]
// }

// interface Items {
//   items?: Item[]
// }

//Items
function getItems(node, current) {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {}));

    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
}

const getToc = (node) => {
  const table = toc(node);
  return getItems(table.map, {});
};

function removeCode(content) {
  const contentAndTripleBackticksRegex = /```[\s\S]*?```/g;
  const stringWithoutContentAndTripleBackticks = content.replace(
    contentAndTripleBackticksRegex,
    ""
  );
  return stringWithoutContentAndTripleBackticks;
}

function removeComponents(content) {
  const componentRegex = /<(\w+)[^>]*>[\s\S]*?<\/\1>/g;

  function removeNestedComponents(_content) {
    const withoutComponents = _content.replace(componentRegex, "");
    if (withoutComponents !== _content) {
      return removeNestedComponents(withoutComponents);
    }
    return withoutComponents;
  }

  const stringWithoutComponents = removeNestedComponents(content);
  return stringWithoutComponents;
}

function removeCodeAndComponents(content) {
  console.log("content", content);
  const contentWithoutCode = removeCode(content);
  const contentWithoutCodeAndComponents = removeComponents(contentWithoutCode);

  return contentWithoutCodeAndComponents;
}

export function getTableOfContents(content) {
  //const strippedContent = removeCodeAndComponents(content);
  const result = getToc(content);
  return result;
}
