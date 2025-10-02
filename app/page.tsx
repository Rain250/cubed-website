"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// Minimal, production-ready single-file landing page component with dark mode.
// Uses CSS custom properties for automatic dark mode theming.
// Replace CAL_URL with your Cal.com or Calendly link.

const CAL_URL = "https://calendly.com/waqasarain0250/demo";

export default function CubedLanding() {
  const [email, setEmail] = useState("");
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    
    // Apply theme immediately to prevent flash
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side redirect to your booking link with prefilled email as a query param
    const url = new URL(CAL_URL);
    if (email) url.searchParams.set("email", email);
    window.location.href = url.toString();
  };

  const Feature = ({ title, desc }: { title: string; desc: string }) => (
    <motion.div 
      className="bg-card/60 backdrop-blur border border-border rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-primary" />
            <span className="font-bold text-foreground">Cubed</span>
            <span className="ml-2 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-0.5">for Square</span>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70 text-muted-foreground">Features</a>
            <a href="#how" className="hover:opacity-70 text-muted-foreground">How it works</a>
            <a href="#pricing" className="hover:opacity-70 text-muted-foreground">Pricing</a>
            <a href="#faq" className="hover:opacity-70 text-muted-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-border hover:bg-accent transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a href={CAL_URL} className="hidden sm:inline-block rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-accent transition">Book demo</a>
            <a href="#waitlist" className="inline-block rounded-xl bg-primary text-primary-foreground px-3 py-2 text-sm hover:opacity-90 transition">Join waitlist</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 mb-4">
              <span>New</span>
              <span className="opacity-60">AI-native ops for Square</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
              Make Square your single source of truth — automatically.
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
              Cubed ingests your invoices, fixes messy items, writes titles & categories, syncs images, and updates inventory + COGS — so your margin and reporting are right every day.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={CAL_URL} className="rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold text-sm text-center hover:opacity-90 transition">
                Book live demo
              </a>
              <a href="#features" className="rounded-xl border border-border px-5 py-3 font-semibold text-sm text-center text-muted-foreground hover:bg-accent transition">
                See how it works
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Works with Square Retail, Restaurants, and Online.</p>
          </motion.div>
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-card shadow-sm p-3 sm:p-4">
              <div className="text-xs font-mono text-muted-foreground mb-2">invoice.pdf → AI parse → Square</div>
              <div className="bg-primary text-primary-foreground rounded-xl p-3 text-xs sm:text-sm leading-relaxed">
                <div className="font-mono text-xs sm:text-sm break-words">
                  <div className="mb-2">vendor: "Advance Foods Intl"</div>
                  <div className="mb-2">items: [</div>
                  <div className="ml-2 mb-1">name: "Shan Chaat Masala"</div>
                  <div className="ml-2 mb-1">qty: 12, unit_cost: 0.99</div>
                  <div className="ml-2 mb-2">category: "Spices & Mixes"</div>
                  <div className="mb-2">]</div>
                  <div className="mt-3 text-xs">→ auto-match to Square items</div>
                  <div className="text-xs">→ auto-generate SEO titles & images</div>
                  <div className="text-xs">→ update inventory, COGS, and website</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-3xl bg-emerald-200/70 dark:bg-emerald-400/20 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto pb-6 sm:pb-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground">
          <span>Built by operators for operators</span>
          <span>•</span>
          <span>Square-first, website-ready</span>
          <span>•</span>
          <span>Grocery, hotel & service tested</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-foreground">Everything you need to run AI-native ops</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <Feature
            title="Invoice → Item Library"
            desc="OCR parses vendor invoices, normalizes units, attaches UPCs, and creates/updates items with categories, tags, and photos."
          />
          <Feature
            title="COGS that makes sense"
            desc="Freight, discounts, and waste are allocated automatically so gross margin is accurate by vendor and category — daily."
          />
          <Feature
            title="Website sync"
            desc="Square stays the source of truth while your site gets fresh images, SEO copy, and inventory without manual uploads."
          />
          <Feature
            title="Ops guardrails"
            desc="AI flags sales/stock mismatches, perishables risk, and missing barcodes; sends checklists to close the loop."
          />
          <Feature
            title="Promo & ROI tracking"
            desc="Run promos and see lift, cannibalization, and payback automatically linked to COGS and inventory."
          />
          <Feature
            title="Growth playbooks"
            desc="Scenario models for new SKUs, bulk buys, and competitor price moves to protect margin and grow baskets."
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-foreground">How it works</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm">
          <motion.li 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-card-foreground">1) Connect Square</p>
            <p className="mt-1 text-muted-foreground">OAuth + permissions by role. Read-only preview before writes.</p>
          </motion.li>
          <motion.li 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-semibold text-card-foreground">2) Drop invoices</p>
            <p className="mt-1 text-muted-foreground">Email-forward, drag & drop, or vendor portal pulls.</p>
          </motion.li>
          <motion.li 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-semibold text-card-foreground">3) Review & approve</p>
            <p className="mt-1 text-muted-foreground">Human-in-the-loop queue for item merges, categories, and COGS allocations.</p>
          </motion.li>
          <motion.li 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-semibold text-card-foreground">4) Sync everywhere</p>
            <p className="mt-1 text-muted-foreground">Write to Square; website & reports update automatically.</p>
          </motion.li>
        </ol>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-foreground">Pricing</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            { name: "Starter", price: "$149/mo", blurb: "Single location, 1k SKUs, manual approvals" },
            { name: "Growth", price: "$399/mo", blurb: "Multi-location, 10k SKUs, auto-approvals" },
            { name: "Scale", price: "Custom", blurb: "API access, SSO, prioritized features" },
          ].map((p, index) => (
            <motion.div 
              key={p.name} 
              className="bg-card border border-border rounded-2xl p-4 sm:p-6"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg text-card-foreground">{p.name}</h3>
              <p className="text-3xl font-extrabold mt-2 text-card-foreground">{p.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <a href={CAL_URL} className="mt-4 inline-block w-full text-center rounded-xl bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition">Book demo</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-foreground">FAQ</h2>
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 text-sm">
          <motion.div 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-card-foreground">Do you overwrite data in Square?</p>
            <p className="mt-1 text-muted-foreground">Only after review/approval unless you enable auto-merge rules. Full audit trail and rollback.</p>
          </motion.div>
          <motion.div 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-semibold text-card-foreground">Will it work with my website?</p>
            <p className="mt-1 text-muted-foreground">Yes. Square remains the source of truth; we push images & copy to your CMS or online store.</p>
          </motion.div>
          <motion.div 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-semibold text-card-foreground">Is this compliant with Square policies?</p>
            <p className="mt-1 text-muted-foreground">We use official APIs and respect rate limits, scopes, and terms. Enterprise security options on Scale.</p>
          </motion.div>
          <motion.div 
            className="bg-card border border-border rounded-2xl p-4 sm:p-5"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-semibold text-card-foreground">What about non-grocery?</p>
            <p className="mt-1 text-muted-foreground">Works for hotels, restaurants, and services — anywhere invoices ↔ items ↔ COGS matter.</p>
          </motion.div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-4xl mx-auto py-8 sm:py-12">
        <motion.div 
          className="rounded-3xl border border-border bg-card p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">Get early access</h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Drop your email. We'll reach out with a live store walkthrough and a private beta invite.</p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@store.com"
              className="w-full sm:w-80 rounded-xl border border-border bg-input text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button type="submit" className="rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold text-sm hover:opacity-90 transition">
              Book a demo
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">No spam. Cancel anytime.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto py-8 sm:py-10 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Cubed Labs, Inc.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-70 text-muted-foreground">Privacy</a>
              <a href="#" className="hover:opacity-70 text-muted-foreground">Terms</a>
              <a href="mailto:founders@trycubed.com" className="hover:opacity-70 text-muted-foreground">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}