import { Suspense } from "react";
import { PaymentTestForm } from "@/components/PaymentTestForm";
import { SITE_CONTENT } from "@/lib/siteContent";

export default function BookingPaymentPage() {
  const { title } = SITE_CONTENT.paymentTestPage;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-slate-900">{title}</h1>
      <Suspense fallback={<p className="mt-10 text-sm text-slate-500">載入支付頁面…</p>}>
        <PaymentTestForm />
      </Suspense>
    </section>
  );
}
