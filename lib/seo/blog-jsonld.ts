import { BlogPost, BlogPostMeta } from '@/lib/blog';

export function generateArticleJsonLd(post: BlogPost | BlogPostMeta, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: `${siteUrl}${post.coverImage}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sayso',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo-pos-horizontal.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    description: post.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export function generateBlogListJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Sayso Blog',
    description: 'Tips, strategies, and insights to help you win every sales moment.',
    url: `${siteUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Sayso',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo-pos-horizontal.png`,
      },
    },
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[],
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
