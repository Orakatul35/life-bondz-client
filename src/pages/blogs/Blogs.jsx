import React, { useMemo, useState } from "react";
import { FaSearch, FaRegClock, FaTags } from "react-icons/fa";

/**
 * Blogs.jsx
 * Professional Blogs page (React + Tailwind + DaisyUI)
 *
 * Notes:
 * - Replace `SAMPLE_POSTS` with API data when ready.
 * - Styling uses Tailwind / DaisyUI utility classes consistent with LifeBondz palette.
 */

const SAMPLE_POSTS = [
  {
    id: 1,
    title: "How to Write a Matrimonial Biodata That Gets Responses",
    summary:
      "A complete guide to building an attention-grabbing biodata with the right photos, text and honesty.",
    author: "Admin",
    date: "2025-06-12",
    tags: ["Biodata", "Tips"],
    image: "https://i.ibb.co/7pZb3dL/wedding-couple-illustration.png",
  },
  {
    id: 2,
    title: "5 Conversation Starters for First Messages",
    summary:
      "Tired of boring intros? Try these respectful, interesting openers that encourage a reply.",
    author: "Sadia Rahman",
    date: "2025-05-28",
    tags: ["Communication", "Advice"],
    image: "https://i.ibb.co/9vmgh7r/indian-couple-illustration.png",
  },
  {
    id: 3,
    title: "Privacy & Safety Tips When Meeting Matches",
    summary:
      "Checklist and best practices to keep your personal information safe while using matrimonial platforms.",
    author: "LifeBondz Team",
    date: "2025-04-10",
    tags: ["Safety", "Privacy"],
    image: "https://i.ibb.co/jf1yMmm/couple-illustration-3.png",
  },
  // add more sample posts...
];

const PAGE_SIZE = 6;

const Blogs = () => {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);

  // build tags set from posts
  const allTags = useMemo(() => {
    const tags = new Set();
    SAMPLE_POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  // filtered & sorted posts
  const filtered = useMemo(() => {
    let list = SAMPLE_POSTS.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !selectedTag || p.tags.includes(selectedTag);
      return matchesQuery && matchesTag;
    });

    if (sortBy === "newest") {
      list = list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      list = list.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return list;
  }, [query, selectedTag, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // helpers
  const handleTagClick = (tag) => {
    setSelectedTag((t) => (t === tag ? "" : tag));
    setPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-rose-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT: Content (8 cols on large) */}
        <section className="lg:col-span-8 space-y-8">
          {/* Hero / Featured */}
          <article className="rounded-2xl overflow-hidden bg-white shadow-lg">
            <div className="relative lg:flex lg:items-stretch">
              <img
                src={SAMPLE_POSTS[0].image}
                alt={SAMPLE_POSTS[0].title}
                className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
              />
              <div className="p-8 lg:p-12 lg:flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                  {SAMPLE_POSTS[0].title}
                </h1>
                <p className="text-gray-600 mt-4 max-w-xl">
                  {SAMPLE_POSTS[0].summary}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <FaRegClock className="text-rose-500" />
                    <span>{SAMPLE_POSTS[0].date}</span>
                  </div>
                  <div className="text-sm text-gray-500">•</div>
                  <div className="text-sm text-rose-600 font-medium">
                    {SAMPLE_POSTS[0].author}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#!"
                    className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold shadow hover:shadow-lg transition"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Controls: Search + Sort + Active tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-white rounded-xl border border-rose-100 p-2 shadow-sm w-full sm:w-2/3"
              role="search"
            >
              <FaSearch className="ml-3 text-gray-400" />
              <input
                aria-label="Search posts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input input-ghost w-full ml-3 placeholder-gray-400"
                placeholder="Search articles, tips, safety..."
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="btn btn-ghost text-sm mr-2"
                >
                  Clear
                </button>
              )}
            </form>

            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 hidden sm:block">Sort:</div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered select-sm rounded-lg"
                aria-label="Sort posts"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageItems.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                  <p className="text-gray-600 mt-3 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      {post.tags.map((t) => (
                        <button
                          key={t}
                          onClick={() => handleTagClick(t)}
                          className={`text-sm px-2 py-1 rounded-lg border ${
                            selectedTag === t
                              ? "bg-rose-500 text-white border-rose-500"
                              : "bg-white text-gray-700 border-rose-100"
                          }`}
                          aria-pressed={selectedTag === t}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <a
                      href="#!"
                      className="text-rose-600 font-medium hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
              Showing {(page - 1) * PAGE_SIZE + 1} -{" "}
              {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
            </div>

            <nav aria-label="Pagination" className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn btn-ghost"
              >
                Prev
              </button>

              {/* simple page indicators */}
              <div className="hidden sm:flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const p = idx + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-3 py-1 rounded ${
                        p === page
                          ? "bg-rose-600 text-white"
                          : "bg-white text-gray-700 border border-rose-100"
                      }`}
                      aria-current={p === page ? "page" : undefined}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="btn btn-ghost"
              >
                Next
              </button>
            </nav>
          </div>
        </section>

        {/* RIGHT: Sidebar (4 cols on large) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Tags / Filter */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h4 className="text-lg font-semibold text-rose-600 flex items-center gap-2">
              <FaTags /> Popular Tags
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => handleTagClick("")}
                className={`px-3 py-1 rounded-lg ${
                  selectedTag === "" ? "bg-rose-600 text-white" : "bg-white text-gray-700 border border-rose-100"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-lg ${
                    selectedTag === tag ? "bg-rose-600 text-white" : "bg-white text-gray-700 border border-rose-100"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h4 className="text-lg font-semibold text-rose-600">Recent Posts</h4>
            <ul className="mt-4 space-y-3">
              {SAMPLE_POSTS.slice(0, 4).map((p) => (
                <li key={p.id} className="flex items-center gap-3">
                  <img src={p.image} alt={p.title} className="w-14 h-14 object-cover rounded-lg" />
                  <div>
                    <a href="#!" className="text-sm font-medium text-gray-900 hover:underline">
                      {p.title}
                    </a>
                    <div className="text-xs text-gray-500">{p.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h4 className="text-lg font-semibold text-rose-600">Subscribe</h4>
            <p className="text-gray-600 text-sm mt-2">Get tips, success stories, and new articles in your inbox.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered rounded-lg w-full"
                aria-label="Subscribe email"
              />
              <button className="btn bg-rose-600 text-white px-4 rounded-lg">Join</button>
            </form>
          </div>

          {/* Category / CTA */}
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-lg font-semibold text-gray-900">Start your journey</h4>
            <p className="text-gray-600 mt-2">Create a free profile and connect with curated matches.</p>
            <div className="mt-4 flex justify-center gap-3">
              <a href="/register" className="btn btn-ghost border-rose-100 text-rose-600 rounded-lg">Register</a>
              <a href="/biodata" className="btn bg-rose-600 text-white rounded-lg">Create Biodata</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Blogs;
