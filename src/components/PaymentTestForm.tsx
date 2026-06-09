"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { formatHkd } from "@/lib/booking";
import { SITE_CONTENT } from "@/lib/siteContent";

const DECLINED_TEST_CARD = "4000000000000002";

export function PaymentTestForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const content = SITE_CONTENT.paymentTestPage;
  const order = useMemo(() => {
    const total = Number(searchParams.get("total") ?? 0);
    const mentorName = searchParams.get("mentorName") ?? "";
    const date = searchParams.get("date") ?? "";
    const time = searchParams.get("time") ?? "";
    const hours = searchParams.get("hours") ?? "";
    const location = searchParams.get("location") ?? "";
    const subtotal = Number(searchParams.get("subtotal") ?? 0);
    const platformFee = Number(searchParams.get("platformFee") ?? 0);

    if (!total || !mentorName) return null;

    return { total, mentorName, date, time, hours, location, subtotal, platformFee };
  }, [searchParams]);

  const mentorId = searchParams.get("mentor");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!order) return;

    setError(null);
    const form = new FormData(event.currentTarget);
    const cardDigits = String(form.get("cardNumber") ?? "").replace(/\s/g, "");

    if (cardDigits === DECLINED_TEST_CARD) {
      setError("測試卡被拒：4000 0000 0000 0002。請改用 4242 4242 4242 4242 測試成功付款。");
      return;
    }

    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const ref = `HKM-${Date.now().toString(36).toUpperCase()}`;
    const successParams = new URLSearchParams({
      ref,
      mentorName: order.mentorName,
      date: order.date,
      time: order.time,
      total: String(order.total),
    });
    router.push(`/booking/success?${successParams.toString()}`);
  }

  if (!order) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm text-amber-900">找不到預約資料，請先完成預約步驟。</p>
        <Link href="/profiles" className="mt-4 inline-flex text-sm font-semibold text-emerald-700">
          前往挑選導師
        </Link>
      </div>
    );
  }

  const payLabel = content.payButtonLabel.replace("{amount}", order.total.toLocaleString("en-HK"));

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4">
          <p className="inline-flex rounded-full bg-amber-200 px-2.5 py-0.5 text-xs font-bold text-amber-900">
            {content.testModeBadge}
          </p>
          <p className="mt-2 text-sm text-amber-900">{content.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">{content.cardSectionTitle}</h2>

          <Field label={content.fields.cardholderName}>
            <input
              type="text"
              name="cardholderName"
              required
              autoComplete="cc-name"
              placeholder="ZHANG SAN"
              className="h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <Field label={content.fields.cardNumber}>
            <input
              type="text"
              name="cardNumber"
              required
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="4242 4242 4242 4242"
              className="h-11 w-full rounded-xl border border-slate-300 px-3 font-mono text-sm outline-none focus:border-emerald-600"
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={content.fields.expiry}>
              <input
                type="text"
                name="expiry"
                required
                autoComplete="cc-exp"
                placeholder="12/34"
                pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                className="h-11 w-full rounded-xl border border-slate-300 px-3 font-mono text-sm outline-none focus:border-emerald-600"
              />
            </Field>
            <Field label={content.fields.cvc}>
              <input
                type="text"
                name="cvc"
                required
                inputMode="numeric"
                autoComplete="cc-csc"
                placeholder="123"
                pattern="^\d{3,4}$"
                className="h-11 w-full rounded-xl border border-slate-300 px-3 font-mono text-sm outline-none focus:border-emerald-600"
              />
            </Field>
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
          )}

          <button
            type="submit"
            disabled={processing}
            className="mt-2 h-12 rounded-xl bg-emerald-700 px-6 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {processing ? content.processingLabel : payLabel}
          </button>

          {mentorId && (
            <Link
              href={`/booking?mentor=${mentorId}`}
              className="text-center text-sm font-medium text-slate-600 hover:text-emerald-700"
            >
              {content.backToBookingLabel}
            </Link>
          )}
        </form>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold text-slate-900">{content.testCardsTitle}</h3>
          <ul className="mt-3 space-y-3">
            {content.testCards.map((card) => (
              <li key={card.number} className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">{card.label}：</span>
                <span className="font-mono">{card.number}</span>
                <span className="block text-xs text-slate-500">{card.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="h-fit space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">預約摘要</h2>
          <dl className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between gap-4">
              <dt>生活導師</dt>
              <dd className="font-medium text-slate-900">{order.mentorName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>日期</dt>
              <dd className="font-medium text-slate-900">{order.date || "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>時間</dt>
              <dd className="font-medium text-slate-900">{order.time || "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>時數</dt>
              <dd className="font-medium text-slate-900">{order.hours} 小時</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>見面地點</dt>
              <dd className="max-w-[55%] text-right font-medium text-slate-900">{order.location || "—"}</dd>
            </div>
          </dl>
          <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4 text-sm">
            <li className="flex justify-between text-slate-600">
              <span>服務費</span>
              <span>{formatHkd(order.subtotal)}</span>
            </li>
            <li className="flex justify-between text-slate-600">
              <span>平台服務費</span>
              <span>{formatHkd(order.platformFee)}</span>
            </li>
            <li className="flex justify-between font-semibold text-slate-900">
              <span>應付總額</span>
              <span>{formatHkd(order.total)}</span>
            </li>
          </ul>
        </div>
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-xs leading-relaxed text-emerald-800">
          {content.escrowNote}
        </p>
      </aside>
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
