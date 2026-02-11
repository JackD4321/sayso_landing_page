'use client';

import Link from 'next/link';

interface Category {
  slug: string;
  name: string;
  count: number;
}

interface BlogCategoryPillsProps {
  categories: Category[];
  activeCategory?: string;
}

export function BlogCategoryPills({ categories, activeCategory }: BlogCategoryPillsProps) {
  const allActive = !activeCategory;

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-6">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <Link
          href="/blog"
          className={`shrink-0 px-5 py-2 rounded-full font-bold text-sm border-2 transition-all ${
            allActive
              ? 'bg-[#2367EE] text-white border-[#2367EE]'
              : 'bg-white text-[#1D4871] border-[#1D4871] hover:bg-[#FFDE59]/20'
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog/category/${cat.slug}`}
            className={`shrink-0 px-5 py-2 rounded-full font-bold text-sm border-2 transition-all ${
              activeCategory === cat.slug
                ? 'bg-[#2367EE] text-white border-[#2367EE]'
                : 'bg-white text-[#1D4871] border-[#1D4871] hover:bg-[#FFDE59]/20'
            }`}
          >
            {cat.name} ({cat.count})
          </Link>
        ))}
      </div>
    </div>
  );
}
