import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { SITE_CONTENT } from "@/lib/siteContent";

export default function BookingPage() {
  const { title } = SITE_CONTENT.bookingAndPaymentPage;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-slate-900">{title}</h1>
      <Suspense fallback={<p className="mt-10 text-sm text-slate-500">載入預約表單…</p>}>
        <BookingForm />
      </Suspense>
    </section>
  );
}
