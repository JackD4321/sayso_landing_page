import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

interface BlogArticleContentProps {
  content: string;
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-hero text-2xl md:text-[28px] text-[#1D4871] mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-hero text-xl md:text-[22px] text-[#1D4871] mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[#1D4871]/80 text-base leading-relaxed mb-5 font-sans" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#2367EE] hover:underline font-bold" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-[#1D4871]/80 font-sans" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-[#1D4871]/80 font-sans" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-base leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[#FFDE59] bg-[#FFDE59]/10 px-6 py-4 my-6 rounded-r-lg italic text-[#1D4871]/80 font-sans" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-[#1D4871]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[#D7DEE1] rounded px-1.5 py-0.5 text-sm font-mono text-[#1D4871]" {...props} />
  ),
  hr: () => <hr className="border-[#D7DEE1] my-8" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div
      className="mb-8 rounded-xl overflow-hidden"
      style={{ boxShadow: '0 4px 28px rgba(29,72,113,0.10)', border: '1px solid #e4eaf3' }}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm font-sans bg-white" {...props} />
      </div>
    </div>
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="blog-tbody" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="blog-table-row" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-white px-5 py-4 text-left font-semibold text-xs uppercase tracking-wide whitespace-nowrap"
      style={{ background: 'linear-gradient(135deg, #1D4871 0%, #2367EE 100%)' }}
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-5 py-4 align-middle" style={{ color: 'rgba(29,72,113,0.8)' }} {...props} />
  ),
};

export function BlogArticleContent({ content }: BlogArticleContentProps) {
  return (
    <div className="prose-sayso">
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        }}
      />
    </div>
  );
}
