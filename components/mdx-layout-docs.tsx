import "@/styles/mdx.css";
import { DocsPageHeader } from "./docs-page-header";
import { InjectTOC, Item } from "./site-provider";

interface DocsConfig {
  title: string;
  description: string;
  toc: Item[];
}

interface DocsLayoutProps {
  children: React.ReactNode;
  toc: Item[];
  title: string;
  description: string;
}

export default function MDXDocsLayout({
  children,
  toc,
  title,
  description,
}: DocsLayoutProps) {
  return (
    <div className="container flex-1">
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
        <div className="mx-auto w-full min-w-0">
          <DocsPageHeader heading={title} text={description} />
          <div className="pb-12 pt-8">{children}</div>
        </div>
        <InjectTOC toc={toc} />
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
