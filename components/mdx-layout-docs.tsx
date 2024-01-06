import "@/styles/mdx.css";
import { DocsPageHeader } from "./docs-page-header";
import { InjectTOC } from "./site-provider";
import { TableOfContents } from "@/types";

interface DocsConfig {
  title: string;
  description: string;
  toc: TableOfContents;
}

interface DocsLayoutProps {
  children: React.ReactNode;
  doc: DocsConfig;
}

export default function MDXDocsLayout({ children, doc }: DocsLayoutProps) {
  return (
    <div className="container flex-1">
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
        <div className="mx-auto w-full min-w-0">
          <DocsPageHeader heading={doc.title} text={doc.description} />
          <div className="pb-12 pt-8">{children}</div>
        </div>
        <InjectTOC toc={doc.toc} />
      </main>
    </div>
  );
}

/*
  items: [
    { url: '#usestate', title: 'useState', items: [Array] },
    { url: '#usereducer', title: 'useReducer', items: [Array] },
    { url: '#usestate-vs-usereducer', title: 'useState vs useReducer' }
  ]
*/
