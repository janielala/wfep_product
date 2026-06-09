"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { calculateBookingTotal, formatHkd, getMentorById } from "@/lib/booking";
import { SITE_CONTENT } from "@/lib/siteContent";

export function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mentorId = searchParams.get("mentor");
  const mentor = getMentorById(mentorId);

  const { formFields, checkoutSummary, submitLabel } = SITE_CONTENT.bookingAndPaymentPage;
  const [hours, setHours] = useState(2);

  const pricing = useMemo(() => {
    if (!mentor) return null;
    return calculateBookingTotal(mentor.hourlyRate, hours);
  }, [mentor, hours]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!mentor || !pricing) return;

    const form = new FormData(event.currentTarget);
    const params = new URLSearchParams({
      mentor: mentor.id,
      mentorName: mentor.name,
      date: String(form.get("date") ?? ""),
      time: String(form.get("time") ?? ""),
      hours: String(pricing.hours),
      location: String(form.get("location") ?? ""),
      notes: String(form.get("notes") ?? ""),
      total: String(pricing.total),
      subtotal: String(pricing.subtotal),
      platformFee: String(pricing.platformFee),
      hourlyRate: String(pricing.hourlyRate),
    });

    router.push(`/booking/payment?${params.toString()}`);
  }

  if (!mentor) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm text-amber-900">請先從導師列表選擇一位生活導師再進行預約。</p>
        <Link href="/profiles" className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          前往挑選導師
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_1fr]">
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6">
        <Field label={formFields.companionSelection}>
          <input
            type="text"
            name="mentorName"
            readOnly
            value={mentor.name}
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700"
          />
        </Field>
        <Field label={formFields.datePickerLabel}>
          <input
            type="date"
            name="date"
            required
            className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
          />
        </Field>
        <Field label={formFields.timePickerLabel}>
          <input
            type="time"
            name="time"
            required
            className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
          />
        </Field>
        <Field label={formFields.durationLabel}>
          <input
            type="number"
            name="hours"
            min={1}
            max={8}
            required
            value={hours}
            onChange={(e) => setHours(Math.max(1, Math.min(8, Number(e.target.value) || 1)))}
            className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
          />
        </Field>
        <Field label={formFields.meetingLocationLabel}>
          <input
            type="text"
            name="location"
            required
            placeholder="中環地鐵站 A 出口"
            className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
          />
        </Field>
        <Field label={formFields.notesLabel}>
          <textarea
            name="notes"
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600"
          />
        </Field>
        <button
          type="submit"
          className="mt-2 h-11 rounded-xl bg-emerald-700 px-6 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          {submitLabel}
        </button>
      </form>

      {pricing && (
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">{checkoutSummary.title}</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li className="flex items-center justify-between">
              <span>
                {checkoutSummary.hourlyRateLabel} × {pricing.hours}h
              </span>
              <span>{formatHkd(pricing.subtotal)}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>{checkoutSummary.platformFeeLabel}</span>
              <span>{formatHkd(pricing.platformFee)}</span>
            </li>
            <li className="flex items-center justify-between border-t border-slate-200 pt-3 font-semibold text-slate-900">
              <span>{checkoutSummary.totalLabel}</span>
              <span>{formatHkd(pricing.total)}</span>
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
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="text-sm font-medium text-slate-700">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
