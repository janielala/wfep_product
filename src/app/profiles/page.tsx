"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONTENT } from "@/lib/siteContent";

interface FilterBlockProps {
  title: string;
  options: readonly string[];
  selectedOption: string | null;
  onSelectOption: (option: string | null) => void;
}

export default function ProfilesPage() {
  const { title, filters, profilesList } = SITE_CONTENT.profilesPage;

  // Type your states as string or null
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  // Type helper arguments and return value
  const matchPriceRange = (rate: number, rangeStr: string | null): boolean => {
    if (!rangeStr) return true;
    if (rangeStr.includes("以下") || rangeStr.includes("<")) {
      return rate <= 250;
    }
    if (rangeStr.includes("-")) {
      const numbers = rangeStr.match(/\d+/g);
      if (numbers && numbers.length === 2) {
        return rate >= parseInt(numbers[0], 10) && rate <= parseInt(numbers[1], 10);
      }
    }
    if (rangeStr.includes("以上") || rangeStr.includes("+")) {
      return rate >= 400;
    }
    return true;
  };

  const filteredProfiles = profilesList.filter((mentor) => {
    const matchesLanguage =
      !selectedLanguage || (mentor.languages as readonly string[]).includes(selectedLanguage);
    const matchesSpecialty =
      !selectedSpecialty || (mentor.specialties as readonly string[]).includes(selectedSpecialty);
    const matchesPrice = !selectedPriceRange || matchPriceRange(mentor.hourlyRate, selectedPriceRange);

    return matchesLanguage && matchesSpecialty && matchesPrice;
  });

  const hasActiveFilters = !!(selectedLanguage || selectedSpecialty || selectedPriceRange);

  const handleClearFilters = () => {
    setSelectedLanguage(null);
    setSelectedSpecialty(null);
    setSelectedPriceRange(null);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-display text-4xl font-semibold text-slate-900">{title}</h1>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="self-start text-sm font-medium text-rose-600 hover:text-rose-700 transition"
          >
            清除所有篩選條件 ✕
          </button>
        )}
      </div>

      <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">
        <FilterBlock 
          title="語言" 
          options={filters.languages} 
          selectedOption={selectedLanguage}
          onSelectOption={setSelectedLanguage}
        />
        <FilterBlock 
          title="服務專長" 
          options={filters.specialties} 
          selectedOption={selectedSpecialty}
          onSelectOption={setSelectedSpecialty}
        />
        <FilterBlock 
          title="時薪範圍" 
          options={filters.priceRange} 
          selectedOption={selectedPriceRange}
          onSelectOption={setSelectedPriceRange}
        />
      </div>

      <p className="mt-6 text-sm text-slate-500">
        找到 {filteredProfiles.length} 位符合條件的導師
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((mentor) => (
            <article key={mentor.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                  導
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{mentor.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{mentor.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{mentor.bio}</p>
                <p className="mt-3 text-xs text-slate-500">語言：{mentor.languages.join(" / ")}</p>
                <p className="mt-1 text-xs text-slate-500">專長：{mentor.specialties.join("、")}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-800">
                  ⭐ {mentor.rating.toFixed(1)}（{mentor.reviewsCount} 評價）
                </p>
                <p className="mt-1 text-sm font-semibold text-emerald-700">HKD {mentor.hourlyRate} / 小時</p>
                <Link
                  href={`/booking?mentor=${mentor.id}`}
                  className="mt-4 block w-full rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  立即預約
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 py-12 text-center">
            <p className="text-slate-500">沒有找到符合目前篩選條件的導師。</p>
            <button 
              onClick={handleClearFilters}
              className="mt-3 text-sm font-semibold text-emerald-700 hover:underline"
            >
              重置篩選條件
            </button>
          </div>
        )}
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          返回首頁
        </Link>
      </div>
    </section>
  );
}

// Strictly type the component parameters here
function FilterBlock({ title, options, selectedOption, onSelectOption }: FilterBlockProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selectedOption === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelectOption(isActive ? null : option)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition duration-200 border cursor-pointer ${
                isActive
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-600/20"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}