export const SITE_CONTENT = {
  siteMetadata: {
    title: "香港使用手冊 | 一站式生活服務平台",
    description:
      "專為來港工作、讀書及移居人士打造的一站式生活服務平台。按小時預約本地伴行導師，協助辦理銀行開戶、陪同睇樓、尋覓美食及熟悉社區生活。",
    currency: "HKD",
    languages: ["繁體中文", "简体中文", "English"],
  },
  navigation: {
    logoText: "香港使用手冊",
    links: [
      { label: "首頁", url: "/" },
      { label: "找生活導師", url: "/profiles" },
      { label: "使用指南", url: "/#how-it-works" },
      { label: "加入我們成為導師", url: "/join" },
    ],
    ctaButton: { label: "立即預約服務", url: "/profiles" },
  },
  homePage: {
    heroSection: {
      title: "翻開《香港使用手冊》，解鎖你的港式生活。",
      subtitle:
        "剛來香港手足無措？一站式生活服務平台幫到你。按小時預約通過認證的本地「生活導師」，陪你搞定銀行開戶、身份證辦理、線下睇樓、餐廳探店，讓你光速融入新生活。",
      primaryCTA: { label: "瀏覽生活導師", url: "/profiles" },
      secondaryCTA: { label: "手冊使用說明", url: "#how-it-works" },
      stats: [
        { value: "1,200+", label: "已解鎖伴行服務" },
        { value: "4.9/5", label: "用戶滿意度" },
        { value: "100%", label: "導師實名認證" },
      ],
    },
    servicesCategories: {
      title: "一站式服務範疇：你需要哪種協助？",
      description: "按需選擇你的專屬伴行服務，我們的導師精通粵語、普通話及英語。",
      categories: [
        {
          id: "admin-banking",
          title: "行政與銀行開戶",
          description:
            "陪同前往本地銀行、辦理香港身份證、電話卡及八達通，避免因語言或流程不熟而碰壁。",
        },
        {
          id: "housing-tours",
          title: "線下租房睇樓陪同",
          description:
            "不孤單面對中介。本地導師陪你實地看房，幫你留意周邊環境與租約細節，拒絕踩坑。",
        },
        {
          id: "social-food",
          title: "香港探店與生活融入",
          description:
            "想去茶餐廳普通話點餐怕尷尬？想去西九龍或隱蔽酒吧？找個本地搭子陪你邊吃邊聊。",
        },
        {
          id: "campus-study",
          title: "校園適應與學業嚮導",
          description:
            "適合非本地新生。學長學姐帶你熟悉港大、科大等校園，購買二手教科書，傳授選課攻略。",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "平台使用指南（三步開啟）",
      steps: [
        {
          stepNumber: "1",
          title: "自選專屬「導師」",
          description: "根據導師的擅長領域、語言（粵語/普通話/英文）以及時薪進行篩選。",
        },
        {
          stepNumber: "2",
          title: "安全預約與支付",
          description:
            "選擇日期、所需小時數及見面地點。支持信用卡、轉數快 (FPS) 或 PayMe 安全線上預付。",
        },
        {
          stepNumber: "3",
          title: "線下見面 輕鬆解鎖",
          description:
            "在約定地點與導師匯合。平台會託管資金，待服務結束並確認無誤後，才會撥款給導師。",
        },
      ],
    },
    trustSection: {
      title: "一站式安全防護機制",
      points: [
        {
          title: "100% 身份審查",
          text: "所有生活導師必須上傳身份證件及進行背景真人核驗。",
        },
        {
          title: "擔保交易資金安全",
          text: "費用先由平台託管，服務完成後才結算，保障雙方權益。",
        },
        {
          title: "客服隨時在線",
          text: "伴行過程中如有任何突發情況，平台客服實時為你提供支援。",
        },
      ],
    },
    socialProof: {
      title: "香港新生活，用戶這樣說",
      cards: [
        {
          name: "Lily · 研究生",
          quote: "第一次辦銀行開戶被拒好幾次，導師陪同後一次完成，還幫我整理文件清單。",
        },
        {
          name: "Eric · 新來港上班族",
          quote: "看房最怕資訊不對等，導師會提醒租約細節，真的省下很多時間和踩雷成本。",
        },
        {
          name: "Mia · 交換生",
          quote: "有人帶路吃地道小店和熟悉社區，短短兩星期就感覺自己像半個本地人。",
        },
      ],
    },
    faq: {
      title: "常見問題",
      items: [
        {
          q: "導師是否通過身份驗證？",
          a: "所有導師都需完成實名驗證及背景資料審核，並遵守平台服務守則。",
        },
        {
          q: "可以使用哪些語言溝通？",
          a: "平台支援粵語、普通話及英語，你可以按語言能力篩選導師。",
        },
        {
          q: "服務如何收費？",
          a: "以小時計費，預約前會清楚顯示價格與時長，統一以 HKD 結算。",
        },
      ],
    },
  },
  profilesPage: {
    title: "挑選你的生活導師",
    filters: {
      languages: ["粵語", "普通話", "英語"],
      specialties: ["銀行行政", "租房睇樓", "美食社交", "校園嚮導"],
      priceRange: ["HKD 100-150/小時", "HKD 151-200/小時", "HKD 201+/小時"],
    },
    profilesList: [
      {
        id: "comp-001",
        name: "Christy L.",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        tagline: "港大畢業 • 銀行開戶達人 • 精通普通話/英語",
        hourlyRate: 150,
        rating: 4.9,
        reviewsCount: 28,
        languages: ["粵語", "普通話", "英語"],
        specialties: ["銀行行政", "校園嚮導", "美食社交"],
        bio: "哈囉！我來香港讀書工作已經6年了。非常理解新同學剛來的迷茫，我可以陪你去中環或旺角的銀行高效開戶，避開排隊冤枉路！",
      },
      {
        id: "comp-002",
        name: "Marcus W.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        tagline: "香港土生土長 • 睇樓排雷專家 • 流利英語",
        hourlyRate: 180,
        rating: 5.0,
        reviewsCount: 14,
        languages: ["粵語", "英語"],
        specialties: ["租房睇樓", "美食社交"],
        bio: "地道香港人，對九龍和港島的租房市場非常熟悉。陪新來港人才看房睇樓，幫你跟地產中介溝通、檢查屋況，看完順便帶你吃地道茶餐廳！",
      },
    ],
  },
  bookingAndPaymentPage: {
    title: "預約生活服務",
    formFields: {
      companionSelection: "已選生活導師",
      datePickerLabel: "選擇日期",
      timePickerLabel: "開始時間",
      durationLabel: "預計時數 (小時)",
      meetingLocationLabel: "約定見面地點 (例如：中環地鐵站A出口)",
      notesLabel: "你需要導師協助的具體事項？（請詳細填寫）",
    },
    checkoutSummary: {
      title: "費用明細",
      hourlyRateLabel: "導師時薪",
      platformFeeLabel: "平台服務費 (10%)",
      totalLabel: "總計支付金額",
      paymentMethods: ["信用卡", "轉數快 (FPS)", "PayMe", "Apple Pay"],
    },
  },
  footer: {
    copyright: "© 2026 香港使用手冊. 一站式生活服務平台. 版權所有.",
    links: ["服務條款", "隱私政策", "安全指引", "聯絡客服"],
  },
} as const;
