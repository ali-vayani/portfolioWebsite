"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag?: string;
};

function BlogCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <motion.div
          className="relative flex gap-5 sm:gap-8 py-6 px-1"
          whileHover="hovered"
        >
          {/* left accent line */}
          <motion.span
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full origin-top"
            variants={{
              hovered: { scaleY: 1, opacity: 1 },
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />

          {/* index number */}
          <span className="hidden sm:block shrink-0 text-[11px] font-mono text-white/25 group-hover:text-white/50 transition-colors duration-300 mt-1 w-6 text-right select-none">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* body */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <motion.h2
                className="text-white text-base sm:text-lg font-medium leading-snug"
                variants={{ hovered: { x: 3 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {post.title}
              </motion.h2>

              {/* arrow + date */}
              <div className="flex flex-col items-end shrink-0 gap-1">
                <motion.div
                  className="text-white/40 group-hover:text-white transition-colors duration-200"
                  variants={{ hovered: { x: 2, y: -2 } }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </motion.div>
                <span className="text-white/30 text-xs font-mono tabular-nums">
                  {post.date}
                </span>
              </div>
            </div>

            <p className="mt-1.5 text-white/45 text-sm leading-relaxed line-clamp-2">
              {post.description}
            </p>

            {post.tag && (
              <span className="mt-3 inline-block text-[11px] font-mono uppercase tracking-widest text-white/25 group-hover:text-white/40 transition-colors duration-300">
                {post.tag}
              </span>
            )}
          </div>
        </motion.div>

        {/* divider */}
        <div className="h-px bg-white/8 group-hover:bg-white/15 transition-colors duration-300" />
      </Link>
    </motion.div>
  );
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col">
      <div className="h-px bg-white/10 mb-0" />
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
