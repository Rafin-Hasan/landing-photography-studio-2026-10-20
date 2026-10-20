export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Lucent Photo Co.</span>
        <a href="#cta" className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition">
          Book Now
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-violet-600 font-semibold mb-4">Portrait & Event Photography</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Photos you’ll actually want to frame</h1>
        <p className="text-lg text-slate-600 mb-10">Weddings, portraits, and events captured with a natural, timeless style.</p>
        <a href="#cta" className="inline-block bg-violet-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-violet-700 transition">
          Check Availability
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Full-Day Coverage</h3>
          <p className="text-slate-600">From getting-ready shots to the last dance.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
          <p className="text-slate-600">Edited galleries delivered within two weeks.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Print & Album Options</h3>
          <p className="text-slate-600">Museum-quality prints and custom albums.</p>
        </div>
      </section>

      <section id="cta" className="bg-violet-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Let’s capture your next moment</h2>
        <p className="mb-8 text-violet-100">Limited booking slots open each month.</p>
        <a href="#" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Check Availability
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Lucent Photo Co.. All rights reserved.
      </footer>
    </div>
  )
}
