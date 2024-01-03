import "@/styles/mdx.css";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex-1">
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
        <div className="mx-auto w-full min-w-0">
          {/* <DocsPageHeader heading={doc.title} text={doc.description} /> */}
          <div className="pb-12 pt-8">{children}</div>
        </div>
        {/* <InjectTOC toc={toc} /> */}
      </main>
    </div>
  );
}
