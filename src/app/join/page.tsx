export default function JoinPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-slate-900">加入我們成為導師</h1>
      <p className="mt-4 text-slate-600">
        歡迎熟悉香港生活節奏、樂於分享在地經驗的你加入平台。此頁為 MVP 版本，後續可直接由 WordPress
        表單模組管理報名流程。
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">導師基本條件</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>年滿 18 歲，並可提供身份驗證資料</li>
          <li>熟悉本地行政流程、租房、交通或校園生活其中一項以上</li>
          <li>具備良好溝通能力，可使用粵語、普通話或英語</li>
        </ul>
      </div>

      <form className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6">
        <label className="text-sm font-medium text-slate-700">
          姓名
          <input
            type="text"
            className="mt-1 h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          電子郵件
          <input
            type="email"
            className="mt-1 h-11 w-full rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-emerald-600"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          可提供的服務
          <textarea
            rows={4}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600"
          />
        </label>
        <button
          type="button"
          className="h-11 rounded-xl bg-emerald-700 px-5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          提交申請（示範）
        </button>
      </form>
    </section>
  );
}
