import { BlogPostMeta } from '@/lib/blog';
import { BlogTableOfContents } from './BlogTableOfContents';
import { BlogRelatedPosts } from './BlogRelatedPosts';

interface BlogSidebarProps {
  content: string;
  relatedPosts: BlogPostMeta[];
}

export function BlogSidebar({ content, relatedPosts }: BlogSidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Table of Contents */}
      <BlogTableOfContents content={content} />

      {/* Newsletter mini */}
      <div className="bg-[#1D4871] rounded-xl p-5 text-center">
        <h4 className="font-hero text-sm text-white mb-2">Stay in the know</h4>
        <p className="text-xs text-white/60 mb-3 font-sans">Weekly tips to win more appointments.</p>
        <iframe
          src="https://subscribe-forms.beehiiv.com/de7b925b-6f1f-4557-9fde-cf8005c34c5f"
          className="w-full h-[57px] border-0"
          data-test-id="beehiiv-embed"
          scrolling="no"
          style={{ backgroundColor: 'transparent' }}
          title="Newsletter signup"
        />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-xl border-2 border-[#1D4871] p-5">
          <h4 className="font-hero text-sm text-[#1D4871] mb-3 uppercase tracking-wide">
            Related Posts
          </h4>
          <hr className="border-[#D7DEE1] mb-3" />
          <BlogRelatedPosts posts={relatedPosts} variant="compact" />
        </div>
      )}
    </aside>
  );
}
