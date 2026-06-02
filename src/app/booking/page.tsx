import { SITE_CONTENT } from "@/lib/siteContent";
import type { ReactNode } from "react";

export default function BookingPage() {
  const { title, formFields, checkoutSummary } = SITE_CONTENT.bookingAndPaymentPage;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-slate-900">{title}</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_1fr]">
        <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6">
          <Field label={formFields.companionSelection}>
            <input
              type="text"
              defaultValue="Christy L."
              className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <Field label={formFields.datePickerLabel}>
            <input
              type="date"
              className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <Field label={formFields.timePickerLabel}>
            <input
              type="time"
              className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <Field label={formFields.durationLabel}>
            <input
              type="number"
              min={1}
              max={8}
              defaultValue={2}
              className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <Field label={formFields.meetingLocationLabel}>
            <input
              type="text"
              className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <Field label={formFields.notesLabel}>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <button
            type="button"
            className="mt-2 h-11 rounded-xl bg-emerald-700 px-6 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            確認預約並前往支付（示範）
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">{checkoutSummary.title}</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li className="flex items-center justify-between">
              <span>{checkoutSummary.hourlyRateLabel}</span>
              <span>HKD 150</span>
            </li>
            <li className="flex items-center justify-between">
              <span>{checkoutSummary.platformFeeLabel}</span>
              <span>HKD 15</span>
            </li>
            <li className="flex items-center justify-between border-t border-slate-200 pt-3 font-semibold text-slate-900">
              <span>{checkoutSummary.totalLabel}</span>
              <span>HKD 165</span>
            </li>
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Payment Methods</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {checkoutSummary.paymentMethods.map((method) => (
              <span key={method} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                {method}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="text-sm font-medium text-slate-700">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
