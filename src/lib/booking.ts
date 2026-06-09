import { SITE_CONTENT } from "@/lib/siteContent";

export const PLATFORM_FEE_RATE = 0.1;

export type MentorProfile = (typeof SITE_CONTENT.profilesPage.profilesList)[number];

export function getMentorById(id: string | null | undefined): MentorProfile | undefined {
  if (!id) return undefined;
  return SITE_CONTENT.profilesPage.profilesList.find((m) => m.id === id);
}

export function calculateBookingTotal(hourlyRate: number, hours: number) {
  const subtotal = hourlyRate * hours;
  const platformFee = Math.round(subtotal * PLATFORM_FEE_RATE);
  const total = subtotal + platformFee;
  return { subtotal, platformFee, total, hours, hourlyRate };
}

export function formatHkd(amount: number) {
  return `HKD ${amount.toLocaleString("en-HK")}`;
}
