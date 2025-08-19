import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-violet-900 to-blue-900 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
              <path d="M12 2l7 4v6c0 5-3.4 9.4-7 10-3.6-.6-7-5-7-10V6l7-4z"></path>
              <path d="M9 11h6v2H9zM9 8h6v2H9z" className="opacity-70"></path>
            </svg>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">TruthGuard AI</span>
          </div>

          {/* Top-right sections */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#themes" className="hover:text-yellow-300">Themes</a>
            <a href="#importance" className="hover:text-yellow-300">Importance</a>
            <a href="#dashboard" className="hover:text-yellow-300">Dashboard</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero / Statement */}
      <header className="px-6">
        <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AI-powered tool for <span className="text-yellow-300">combating misinformation</span>
          </h1>
          <p className="mt-5 md:mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Empowering people with truth, transparency, and trustworthy information across the web.
          </p>
          <div className="mt-8">
            <a
              href="#dashboard"
              className="inline-block px-6 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 shadow-lg"
            >
              Try Demo
            </a>
          </div>
        </div>
      </header>

      {/* Themes */}
      <section id="themes" className="px-6 py-14 md:py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Themes</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "🔍 Fact Verification", desc: "Cross-check claims using multiple sources and AI-assisted evidence." },
              { title: "📊 Data Transparency", desc: "Show how scores are calculated with auditable pipelines." },
              { title: "🌐 Social Monitoring", desc: "Surface trending claims and high-risk virality patterns." },
              { title: "📰 Credibility Scoring", desc: "Rate articles, posts, and outlets on reliability signals." },
              { title: "🛡️ AI Detection", desc: "Spot synthetic media, deepfakes, and manipulated content." },
              { title: "🔎 Source Tracing", desc: "Trace back to original sources and check consistency." },
            ].map((card) => (
              <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance / Info about the web */}
      <section id="importance" className="px-6 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why this matters</h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto">
            Misinformation spreads quickly online, erodes trust, and influences real-world decisions.
            This dashboard helps teams detect, verify, and communicate facts—clearly and at speed.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold">Faster than manual checks</h4>
              <p className="text-white/80 mt-2">Automate first-pass verification to triage what needs expert review.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold">Transparent scoring</h4>
              <p className="text-white/80 mt-2">Every score shows the inputs, weights, and links to sources.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold">Built for collaboration</h4>
              <p className="text-white/80 mt-2">Shareable reports and annotations keep teams aligned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="px-6 py-14 md:py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Dashboard Preview</h2>

          {/* KPI Cards */}
          <div className="grid md:grid-cols-3 gap-6 text-black">
            <div className="bg-white rounded-2xl p-6 text-center shadow">
              <h4 className="text-lg font-bold">✅ Verified Items</h4>
              <p className="text-3xl mt-2">1,245</p>
              <p className="text-sm text-black/60 mt-1">Last 30 days</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow">
              <h4 className="text-lg font-bold">🚨 Alerts</h4>
              <p className="text-3xl mt-2">82</p>
              <p className="text-sm text-black/60 mt-1">High-risk claims</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow">
              <h4 className="text-lg font-bold">📈 Accuracy</h4>
              <p className="text-3xl mt-2">96%</p>
              <p className="text-sm text-black/60 mt-1">Model precision</p>
            </div>
          </div>

          {/* Search placeholder */}
          <div className="mt-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search a claim or URL to fact-check…"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-black placeholder-black/60 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Contact / Connect with us */}
      <section id="contact" className="px-6 py-14 md:py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Connect with us</h2>

          <ContactForm email="connect@truthguard.ai" />
          <p className="mt-4 text-center text-white/70">
            Prefer email? <a className="underline hover:text-yellow-300" href="mailto:connect@truthguard.ai">connect@truthguard.ai</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/70">
          © 2025 TruthGuard AI — Combating misinformation with technology
        </div>
      </footer>
    </div>
  );
}

/** Simple “mailto” contact form without a backend */
function ContactForm({ email }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get("name") || "");
    const from = encodeURIComponent(form.get("email") || "");
    const message = encodeURIComponent(form.get("message") || "");

    const subject = `Contact from ${name}`;
    const body = `From: ${name} <${from}>\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
      <input name="name" type="text" placeholder="Your Name" className="w-full p-3 rounded-xl bg-white text-black" required />
      <input name="email" type="email" placeholder="Your Email" className="w-full p-3 rounded-xl bg-white text-black" required />
      <textarea name="message" rows="4" placeholder="Message" className="w-full p-3 rounded-xl bg-white text-black" required></textarea>
      <button className="w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300">
        Send
      </button>
    </form>
  );
}
