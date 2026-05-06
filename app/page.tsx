"use client";
import React from 'react';
import { 
  ArrowRight, CheckCircle2, Star, Zap, 
  Shield, BarChart3, Globe, Users 
} from 'lucide-react';

export default function ClawMarketplace() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap className="text-white" size={20} fill="white" />
            </div>
            <span className="text-xl font-bold tracking-tight">ClawMarketplace</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#reviews" className="hover:text-blue-600 transition">Reviews</a>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-900/10">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            New: AI-Powered Funnel Analytics
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Scale je marketplace sneller dan ooit tevoren.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Het alles-in-één platform om je funnel te automatiseren, conversies te verhogen en je omzet te domineren.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/funnel" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/25">
              Lanceer je Funnel <ArrowRight size={20} />
            </a>
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Bekijk Demo
            </button>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <span className="font-bold text-xl italic text-slate-400">TRUSTED BY TOP TEAMS</span>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gebouwd voor resultaat</h2>
            <p className="text-slate-600">Alles wat je nodig hebt om een miljoenenplatform te draaien.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BarChart3 className="text-blue-600" />, title: "Real-time Data", desc: "Zie exact waar je bezoekers afhaken in de funnel." },
              { icon: <Globe className="text-blue-600" />, title: "Global Scaling", desc: "Verkoop over de hele wereld met lokale betaalmethodes." },
              { icon: <Shield className="text-blue-600" />, title: "Enterprise Security", desc: "Je data is veilig met onze bank-grade encryptie." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section id="reviews" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <blockquote className="text-3xl font-medium italic mb-8 text-slate-800">
            "ClawMarketplace heeft onze conversie met 45% verhoogd in de eerste maand. De funnel builder is ongeëvenaard in gebruiksgemak."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
            <div className="text-left">
              <p className="font-bold text-lg">Jan van Dam</p>
              <p className="text-slate-500">CEO @ GrowthStack</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/40">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Klaar om de markt te domineren?
            </h2>
            <p className="text-blue-100 text-xl mb-10 max-w-xl mx-auto">
              Sluit je aan bij 500+ ondernemers die hun business opschalen met ClawMarketplace.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-xl">
              START NU GRATIS
            </button>
            <p className="mt-6 text-blue-200 text-sm font-medium">Geen creditcard nodig • 14 dagen trial</p>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 ClawMarketplace. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}
