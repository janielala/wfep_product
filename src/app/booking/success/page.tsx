import Link from "next/link";
import { formatHkd } from "@/lib/booking";
import { SITE_CONTENT } from "@/lib/siteContent";

type PageProps = {
  searchParams: Promise<{
    ref?: string;
    mentorName?: string;
    date?: string;
    time?: string;
    total?: string;
  }>;
};

export default async function BookingSuccessPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const content = SITE_CONTENT.bookingSuccessPage;
  const total = Number(params.total ?? 0);

  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
        ✓
      </div>
      <h1 className="font-display mt-6 text-4xl font-semibold text-slate-900">{content.title}</h1>
      <p className="mt-4 text-slate-600">{content.subtitle}</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700">
        <p>
          <span className="font-semibold text-slate-900">{content.referenceLabel}：</span>
          {params.ref ?? "—"}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-slate-900">生活導師：</span>
          {params.mentorName ?? "—"}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-slate-900">預約時間：</span>
          {params.date && params.time ? `${params.date} ${params.time}` : "—"}
        </p>
        {total > 0 && (
          <p className="mt-2">
            <span className="font-semibold text-slate-900">已付金額（測試）：</span>
            {formatHkd(total)}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/profiles"
          className="inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          {content.viewProfilesLabel}
        </Link>
        <Link
          href="/"
          className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {content.homeLabel}
        </Link>
      </div>
    </section>
  );
}
