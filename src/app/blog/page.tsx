import type { Metadata } from "next";
import BlogList, { Post } from "./BlogList";

export const metadata: Metadata = {
  title: "blog — ali vayani",
  description: "Thoughts on tech, recruiting, and whatever else I feel like writing about.",
};

const posts: Post[] = [
  {
    slug: "my-swe-internship-guide",
    title: "Guide to Landing SWE Internships",
    date: "May 2025",
    tag: "guide",
    description:
      "How I went from grinding 200+ applications to 4 offers including Stripe. Everything I learned about resumes, interviews, and applying fast.",
  },
];

export default function Blog() {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-60 mt-20 pb-20">
        <div className="max-w-3xl w-full mx-auto">
          <div className="flex flex-col gap-2 mb-10 w-full">
            <h1 className="text-xl sm:text-2xl font-semibold text-white">blog</h1>
            <span className="w-full h-[1px] bg-white opacity-20" />
          </div>

          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
}
