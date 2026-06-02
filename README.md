Editing: Mandy Chan

# 香港使用手冊 | 一站式生活服務平台 (HK Manual)

> A Freelancer-style hourly rental and accompaniment service platform tailored for new arrivals (talents, students, and expatriates) moving to Hong Kong.

---

## 📖 Table of Contents
- [Project Overview](#-project-overview)
- [Design Architecture (Freelancer.com Inspired)](#-design-architecture-freelancercom-inspired)
- [Platform Core Flows](#-platform-core-flows)
- [Tech Stack Suggestions](#-tech-stack-suggestions)
- [Getting Started](#-getting-started)
- [JSON Content Integration](#-json-content-integration)
- [License](#-license)

---

## 🎯 Project Overview

**香港使用手冊 (HK Manual)** bridges the gap between fresh Hong Kong arrivals and local verified residents. Instead of browsing traditional static guides, users can hire a "Local Guide / Companion" by the hour to assist with critical real-world onboarding tasks such as:
* Opening local bank accounts & HKID appointments.
* Accompanying property/apartment viewings to prevent rental scams.
* Social orientation, local dining check-ins (Cha Chaan Tengs), and neighborhood familiarization.
* University campus orientation for non-local students.

---

## 🎨 Design Architecture (Freelancer.com Inspired)

To establish high user trust and maximize conversions, the layout inherits UX patterns from major freelance marketplaces:

### 1. Visual Identity
* **Primary Palette:** Trustworthy Deep Blue (`#0052CC`) and Clean White background (`#F0F4F8`).
* **Call-to-Actions (CTA):** Vibrant Teal or Safety Orange (`#00B4D8`) to encourage bookings.
* **Mood:** Professional, welcoming, transparent, and secure.

### 2. Multi-Page Structure
1.  **Homepage (`/`):** Hero section introduces the concept, interactive service grid layout, platform trust statistics, and a 3-step usage instruction banner.
2.  **Profiles Directory (`/profiles`):** A robust, searchable grid directory displaying verified local guides. Includes interactive filters for Spoken Languages (Cantonese/Mandarin/English), Specialties, and Hourly Rate Tiers.
3.  **Booking & Escrow Payment (`/booking`):** A streamlined check-out interface with fields for date/time, hourly duration, custom meet-up location fields, and a split pricing calculator with local payment gateway elements.

---

## 🔄 Platform Core Flows

### 🛡️ Trust & Safety Verification
Just like Freelancer.com's verification tier system, all local guides must pass background checks and upload official government identification documents before listing their profile.

### 💳 Escrow-Style Payment Mechanism
1.  **Book & Deposit:** The client books a guide and prepays online. 
2.  **Funds Held:** The platform secures the transaction amount in escrow.
3.  **Meetup & Deliver:** The local guide assists the newcomer offline.
4.  **Confirm & Release:** Upon mutual confirmation or verification of service delivery, funds are cleared and split between the guide (90%) and platform transaction fees (10%).

---

## 🛠️ Tech Stack Suggestions

If you are expanding this project past raw AI generation platforms, the following stack is recommended:
* **Frontend:** Next.js (React), Tailwind CSS, Shadcn UI / Radix Primitives
* **Backend/Database:** Supabase (Auth, Postgres DB, Storage) or Firebase
* **Payments:** Stripe (Supporting HK local payment methods: Credit Cards, FPS, PayMe, Apple Pay)

---

## 🚀 Getting Started

### Prerequisites
* Node.js v18+ (If executing via custom frameworks)
* Any popular AI text-to-code tool (v0.dev, Framer, Wix Studio, Bolt.new)

### AI Website Generation Instructions
To instantly build this platform using a modern UI generation engine:
1. Copy the template from `site-data.json`.
2. Feed it into your AI developer agent with this instruction prompt:
   > *"Generate a clean, high-conversion multi-page web application based on this JSON structure. Implement a sticky navigation bar, a high-trust hero segment on the homepage, filterable directory cards for the profiles page, and a secure summary checkout component for the booking page. Follow standard web design practices inspired by peer-to-peer marketplaces."*

---

## 📦 JSON Content Integration

The structural layout and localization texts are isolated in `site-data.json`. You can modify the string mappings directly to shift locales, change commission calculations, or add default mock listings to your application state.

```json
{
  "siteMetadata": {
    "title": "香港使用手冊 | 一站式生活服務平台",
    "currency": "HKD"
  }
}