import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import BlogList from "./pages/BlogList.jsx";
import BlogPost from "./pages/BlogPost.jsx";

/* ---------------------------------------------------------
   UP — Chennai digital marketing agency
   Palette:  cream #FBF6EC · ink #1C1B18 · yellow #F6C445
             deep-yellow #E8AC1E · teal #2A6F5E
   Display face: Sora  ·  Body: Inter  ·  Mono/labels: IBM Plex Mono

   This file is just the app shell: the header and footer render
   on every page, and <Routes> swaps out the middle. Page content
   lives in src/pages/, shared pieces in src/components/.
--------------------------------------------------------- */

/* Jumps to the top of the page on every route change — without
   this, navigating from a scrolled-down homepage to a blog post
   would land you mid-page instead of at the article's top. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-cream font-body text-ink antialiased">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  );
}
