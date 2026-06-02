import Link from "next/link";
import { SITE_CONTENT } from "@/lib/siteContent";

export default function ProfilesPage() {
  const { title, filters, profilesList } = SITE_CONTENT.profilesPage;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-slate-900">{title}</h1>

      <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">
        <FilterBlock title="語言" options={filters.languages} />
        <FilterBlock title="服務專長" options={filters.specialties} />
        <FilterBlock title="時薪範圍" options={filters.priceRange} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {profilesList.map((mentor) => (
          <article key={mentor.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              導
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{mentor.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{mentor.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{mentor.bio}</p>
            <p className="mt-3 text-xs text-slate-500">語言：{mentor.languages.join(" / ")}</p>
            <p className="mt-1 text-xs text-slate-500">專長：{mentor.specialties.join("、")}</p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              ⭐ {mentor.rating.toFixed(1)}（{mentor.reviewsCount} 評價）
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-700">HKD {mentor.hourlyRate} / 小時</p>
            <Link
              href={`/booking?mentor=${mentor.id}`}
              className="mt-5 block w-full rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-800"
            >
              立即預約
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          返回首頁
        </Link>
      </div>
    </section>
  );
}

function FilterBlock({ title, options }: { title: string; options: readonly string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <span key={option} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}
