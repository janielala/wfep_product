import Image from "next/image";
import Link from "next/link";
import heroBackground from "@/lib/Group 2 Presentation.png";
import { SITE_CONTENT } from "@/lib/siteContent";

const categoryIcons: Record<string, string> = {
  "admin-banking": "🏦",
  "housing-tours": "🏠",
  "social-food": "🍜",
  "campus-study": "🎓",
};

export default function HomePage() {
  const { heroSection, servicesCategories, howItWorks, trustSection, socialProof, faq } =
    SITE_CONTENT.homePage;

  return (
    <>
      <section className="hero-marketplace relative overflow-hidden text-white">
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/35"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:py-24">
          <div className="ml-auto max-w-3xl lg:mr-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-semibold backdrop-blur-md">
              香港新生活支援平台
            </p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {heroSection.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-100 sm:text-lg">
              {heroSection.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={heroSection.primaryCTA.url}
                className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {heroSection.primaryCTA.label}
              </Link>
              <Link
                href={heroSection.secondaryCTA.url}
                className="inline-flex items-center rounded-full border border-white/40 bg-black/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                {heroSection.secondaryCTA.label}
              </Link>
            </div>
            <div className="mt-6 rounded-2xl border border-white/25 bg-black/30 p-3 backdrop-blur-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="例如：銀行開戶、睇樓陪同、校園導覽"
                  className="h-12 flex-1 rounded-xl border border-white/30 bg-white/95 px-4 text-sm text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  className="h-12 rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  搜尋導師
                </button>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroSection.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/20 bg-black/25 p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            {servicesCategories.title}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">{servicesCategories.description}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {servicesCategories.categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                {categoryIcons[category.id] ?? "✨"}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id={howItWorks.id} className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-center text-3xl font-semibold text-slate-900">
            {howItWorks.title}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorks.steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <span className="font-display text-4xl font-semibold text-emerald-200">
                  {(step.stepNumber ?? (index + 1).toString()).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-slate-900">{trustSection.title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {trustSection.points.map((point) => (
            <article key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">{point.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl bg-emerald-900 p-8 text-white sm:p-12">
          <p className="text-sm text-emerald-100">For local mentors</p>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">成為生活導師，一起幫新朋友落地香港</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-emerald-100 sm:text-base">
            你可以按專長與時間提供陪同服務，協助來港人士解決實際生活問題，同時建立穩定收入與個人品牌。
          </p>
          <Link
            href="/join"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
          >
            加入我們成為導師
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-slate-900">{socialProof.title}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {socialProof.cards.map((card) => (
            <article key={card.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-slate-600">&ldquo;{card.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{card.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-slate-900">{faq.title}</h2>
        <div className="mt-8 space-y-4">
          {faq.items.map((item) => (
            <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
