export const profile = {
  name: "Amol Desai",
  role: "Android & Kotlin Multiplatform Engineer",
  location: "Pune, India",
  timeZone: "Asia/Kolkata",
  email: "amoldesai.ard@gmail.com",
  linkedin: "https://www.linkedin.com/in/amoldesai03",
  github: "https://github.com/amoldesai03",
  phone: "+91 94045 09403",
  phoneHref: "tel:+919404509403",
  cv: "/cv/",
  cvDetailed: "/cv/detailed/",
  cvPdf: "/amol-desai-cv.pdf",
  cvDetailedPdf: "/amol-desai-cv-detailed.pdf",
  photo: "/me/amol.webp",
  url: "https://amoldesai03.github.io",
  now: "Kotlin Developer at Avaloq",
};

// Counted from the first full-time role; the internship is not included.
export const careerStart = { year: 2021, month: 7 };

// Whole months since careerStart as years, rounded down to one decimal (5.0, 5.1, 5.2 ...).
export function yearsOfExperience(now: Date = new Date()) {
  const months = (now.getUTCFullYear() - careerStart.year) * 12 + (now.getUTCMonth() + 1 - careerStart.month);
  return Math.floor((months * 10) / 12) / 10;
}

export const formatYears = (years: number) => years.toFixed(1);

export const introText = (years: number) =>
  `I build Android apps that people trust with their money and their data. ${formatYears(years)} years of Kotlin, Compose and Kotlin Multiplatform, in apps with more than a million downloads.`;

export const metrics = [
  { value: 0, years: true, decimals: 1, suffix: "", label: "Years shipping Android" },
  { value: 1, suffix: "M+", label: "Downloads across apps I shipped" },
  { value: 99.6, suffix: "%", decimals: 1, label: "Crash-free sessions" },
  { value: 35, suffix: "%", label: "Faster cold start" },
  { value: 7, suffix: " MB", label: "APK size, down from 90 MB" },
];

export type StoreLink = { store: "play" | "apple" | "web" | "github"; label: string; href: string };

export const mobileBanking = {
  eyebrow: "Avaloq / 2025 - now",
  title: "New Mobile Banking",
  subtitle: "Avaloq's next mobile banking app, built from scratch on Kotlin Multiplatform",
  status: "Live in production",
  summary:
    "Avaloq builds the core banking suite that banks run on. I am part of a 20+ engineer team building its new mobile banking app from scratch to replace the classic one. Kotlin Multiplatform lets us write the business logic once and white-label it for many banks, and each bank picks the widgets and products it wants and tunes them remotely through configuration.",
  points: [
    "Core team: I build the white-label platform and the SDKs",
    "Shared KMP business logic, native UI with Jetpack Compose and SwiftUI",
    "Widget-based screens and opt-in products, configured per bank from remote config",
    "Ships three ways: a template app banks customize with their own teams, SaaS, or an SDK",
    "Live for apoBank, Credit Agricole next bank and Swiss regional banks",
  ],
  banks: [
    {
      name: "apoBank",
      links: [
        { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=de.apobank.nsa.apoBankingPlus" },
        { store: "apple", label: "App Store", href: "https://apps.apple.com/de/app/apobank-mobile-banking/id6499024792" },
      ] satisfies StoreLink[],
    },
    {
      name: "CA next bank",
      links: [
        { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.canb.ch.ebanking.mobile" },
        { store: "apple", label: "App Store", href: "https://apps.apple.com/us/app/e-banking-ca-next-bank/id1620380843" },
      ] satisfies StoreLink[],
    },
  ],
};

export const lmn8 = {
  eyebrow: "Project / Android",
  title: "LMN8",
  subtitle: "Delete data for good, lock files in place, reach every device",
  status: "Live on Google Play",
  summary:
    "Privacy app for crypto-erasing files, encrypting folders in place and wiping lost devices remotely. I built the Kotlin Multiplatform app that brings the desktop product to Android, at feature parity with the desktop and web clients.",
  points: [
    "Compose Multiplatform, Navigation 3, Koin, gRPC with Wire protobufs",
    "Rust crypto core bridged over UniFFI: AES-256-GCM, XChaCha20, ML-KEM hybrids",
    "Remote wipe over FCM and WebSockets, scheduled wipes on exact OS alarms",
    "Baseline Profiles, detekt, Kover and a tag-to-Play release pipeline",
  ],
  links: [
    { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.lmn8.app" },
  ] satisfies StoreLink[],
  site: "https://lmn8.app",
  shots: [
    { src: "/work/lmn8/dashboard.webp", caption: "Dashboard" },
    { src: "/work/lmn8/files.webp", caption: "File browser" },
    { src: "/work/lmn8/vaults.webp", caption: "Encrypted vaults" },
    { src: "/work/lmn8/panic-remote.webp", caption: "Remote wipe" },
    { src: "/work/lmn8/panic-execute.webp", caption: "Wipe confirmation" },
    { src: "/work/lmn8/schedules.webp", caption: "Scheduled wipes" },
    { src: "/work/lmn8/devices.webp", caption: "Linked devices" },
    { src: "/work/lmn8/unlock.webp", caption: "Passcode and biometrics" },
  ],
};

export const lmn8Next = {
  eyebrow: "LMN8 v2",
  status: "In progress",
  title: "One private place for everything that's yours",
  summary:
    "The next LMN8 grows from a privacy tool into one private space on every device: encrypted chat and calls, sharing, cloud, crypts, travel mode and Zero erase, all sealed on the device before anything leaves it. I am building the Android app on top of a shared Rust engine.",
  points: [
    "Chat with app-wide live sync, an offline outbox that flushes on reconnect, and message notifications",
    "Kotlin Multiplatform app on a shared Rust engine, with Navigation 3, Koin and post-quantum crypto built on CNSA 2.0 algorithms",
    "Prototyped the on-device assistant with LiteRT-LM and FunctionGemma",
  ],
  groups: [
    { name: "Talk privately", items: ["Chat", "Calls", "People"] },
    { name: "Share and store safely", items: ["Share", "Cloud", "Crypts", "Travel mode"] },
    { name: "Erase for good", items: ["Zero"] },
    { name: "Stay safe", items: ["SOS", "Footprint", "Assistant"] },
  ],
  platforms: "Windows, macOS, Linux, Android and iPhone",
  link: { store: "web", label: "v2.lmn8.tech", href: "https://v2.lmn8.tech/" } satisfies StoreLink,
};

export const festiv = {
  eyebrow: "Project / Android + iOS",
  title: "Festiv",
  subtitle: "Find people and plans for Garba, Dandiya and everyday outings",
  status: "In internal testing",
  summary:
    "A social app for festival season, rebuilt from Flutter to Compose Multiplatform so Android and iOS share one Kotlin codebase. I owned the migration end to end: architecture, data layer, every screen and a full festive redesign.",
  points: [
    "Kotlin 2.4, Compose Multiplatform 1.12, Navigation 3",
    "Ktor, kotlinx.serialization, Coil 3, Kermit, Koin",
    "Real-time chat, push with Firebase Messaging, Credential Manager sign-in",
    "Debug design presets so every screen state can be reviewed without a backend",
  ],
  icon: "/work/festiv/icon.webp",
  shots: [
    { src: "/work/festiv/signin.webp", caption: "Sign in", width: 720, height: 1616 },
    { src: "/work/festiv/home.webp", caption: "Plans near you", width: 720, height: 1616 },
    { src: "/work/festiv/detail.webp", caption: "Plan detail", width: 720, height: 1616 },
  ],
};

export type Shot = { src: string; caption: string; width: number; height: number };

export type ShippedApp = {
  id: string;
  name: string;
  client: string;
  platform: string;
  installs?: string;
  status: string;
  summary: string;
  tint: string;
  onTint: "light" | "dark";
  icon: string;
  framed: boolean;
  shots: Shot[];
  links: StoreLink[];
};

const tall = { width: 540, height: 960 };
const screen = { width: 540, height: 1169 };

export const shipped: ShippedApp[] = [
  {
    id: "panels",
    name: "Panels",
    client: "MKBHD",
    platform: "Kotlin Multiplatform",
    installs: "1M+",
    status: "Retired, now open source",
    summary:
      "Marques Brownlee's wallpaper app: over 1 million downloads while it was live, at a 99.6% crash-free rate. An early, deep bet on Kotlin Multiplatform, with a shared core for data, networking, DI and storage, Jetpack Compose on Android and SwiftUI on iOS, split into a multi-module clean architecture. After the app was retired its code was released as open source.",
    tint: "#86dd5f",
    onTint: "dark",
    icon: "/work/panels/icon.webp",
    framed: true,
    shots: [
      { src: "/work/panels/android.webp", caption: "Android, Compose", width: 540, height: 1170 },
      { src: "/work/panels/ios.webp", caption: "iOS, SwiftUI", width: 540, height: 1171 },
    ],
    links: [
      { store: "github", label: "Source on GitHub", href: "https://github.com/panels-art/WallApp" },
      { store: "web", label: "panels.art", href: "https://panels.art/" },
    ],
  },
  {
    id: "ivestor",
    name: "iVestor",
    client: "Dubai Financial Market",
    platform: "Android",
    installs: "50K+",
    status: "Live",
    summary:
      "The official investor app of the Dubai Financial Market: trading, portfolio tracking, IPO subscriptions and virtual cards. Built in Kotlin with MVVM, hardened with SSL pinning, Keystore-backed storage and JWT/OAuth, with live prices streamed over WebSockets using Coroutines and Flow.",
    tint: "#5b2bf0",
    onTint: "light",
    icon: "/work/ivestor/icon.webp",
    framed: false,
    shots: [
      { src: "/work/ivestor/portfolio.webp", caption: "Portfolio", ...tall },
      { src: "/work/ivestor/trade.webp", caption: "Trading", ...tall },
      { src: "/work/ivestor/ipo.webp", caption: "IPO subscription", ...tall },
    ],
    links: [
      { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=ae.dfm.ivestorapp" },
      { store: "web", label: "dfm.ae", href: "https://www.dfm.ae/" },
    ],
  },
  {
    id: "studeasy",
    name: "StudEasy",
    client: "Studeasy",
    platform: "Android",
    installs: "10K+",
    status: "Live",
    summary:
      "A regional-language learning app for Indian State Board students: animated chapter videos, personalised quizzes and instant results, all in the language the student studies in.",
    tint: "#ffcd3c",
    onTint: "dark",
    icon: "/work/studeasy/icon.webp",
    framed: false,
    shots: [
      { src: "/work/studeasy/home.webp", caption: "Home", ...screen },
      { src: "/work/studeasy/lesson.webp", caption: "Lesson", ...screen },
      { src: "/work/studeasy/results.webp", caption: "Results", ...screen },
    ],
    links: [
      { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.studeasy.app" },
      { store: "web", label: "studeasy.in", href: "http://studeasy.in/" },
    ],
  },
  {
    id: "powerpay",
    name: "Power Pay",
    client: "Dept. of Power, Arunachal Pradesh",
    platform: "Android",
    installs: "50K+",
    status: "Live",
    summary:
      "The state electricity bill payment app for Arunachal Pradesh. We were brought in after poor reviews to update it: prepaid and postpaid bills, paying for someone else, meter readings and payment history.",
    tint: "#cdeefb",
    onTint: "dark",
    icon: "/work/powerpay/icon.webp",
    framed: true,
    shots: [
      { src: "/work/powerpay/welcome.webp", caption: "Welcome", ...screen },
      { src: "/work/powerpay/home.webp", caption: "Home", ...screen },
      { src: "/work/powerpay/history.webp", caption: "History", ...screen },
    ],
    links: [{ store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.dopap.powerpay" }],
  },
  {
    id: "ozank",
    name: "Ozank",
    client: "Ozank GmbH",
    platform: "Android",
    installs: "1K+",
    status: "Live",
    summary:
      "A fiat and crypto hybrid bank for sending money abroad, with its own OAK token for fee-free transfers, automated KYC and 2FA, PIN and biometric security.",
    tint: "#c9cbfa",
    onTint: "dark",
    icon: "/work/ozank/icon.webp",
    framed: false,
    shots: [
      { src: "/work/ozank/transfers.webp", caption: "Transfers", ...tall },
      { src: "/work/ozank/intro.webp", caption: "Overview", ...tall },
      { src: "/work/ozank/delivery.webp", caption: "Delivery options", ...tall },
    ],
    links: [
      { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.ozank.app" },
      { store: "web", label: "ozank.com", href: "https://www.ozank.com/" },
    ],
  },
  {
    id: "krushley",
    name: "Krushley",
    client: "Krushley",
    platform: "Flutter",
    installs: "1K+",
    status: "Live",
    summary: "A dating app built in Flutter for Android and iOS: swipe matching, chat and video date requests.",
    tint: "#e8114f",
    onTint: "light",
    icon: "/work/krushley/icon.webp",
    framed: false,
    shots: [
      { src: "/work/krushley/connect.webp", caption: "Discover", ...tall },
      { src: "/work/krushley/swipe.webp", caption: "Match", ...tall },
      { src: "/work/krushley/video.webp", caption: "Video dates", ...tall },
    ],
    links: [
      { store: "play", label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.app.krushley" },
      { store: "web", label: "krushley.com", href: "http://www.krushley.com/" },
    ],
  },
];

export const archive = [
  {
    title: "Kotlin Multiplatform core",
    org: "Hyperlink Infosystem",
    kind: "KMP",
    body: "Shared business logic across Android and iOS with SQLDelight and Ktor, plus offline-first features on Room and DataStore for users on poor networks.",
    tags: ["KMP", "SQLDelight", "Offline-first"],
  },
  {
    title: "Legacy app rescue",
    org: "Hyperlink Infosystem",
    kind: "Performance",
    body: "Moved legacy apps to Kotlin, MVVM and Clean Architecture. Crash-free sessions up to 99.6%, cold start 35% faster, APK down from 90 MB to 7 MB.",
    tags: ["MVVM", "R8", "Modularization"],
  },
  {
    title: "Nuwater",
    org: "Client app",
    kind: "Flutter",
    body: "Water delivery service with separate customer and driver apps and live location tracking for drivers on the road.",
    tags: ["Flutter", "Maps", "Two apps"],
  },
  {
    title: "Footprint Finder",
    org: "Client app",
    kind: "Android",
    body: "Family and friends GPS locator that announces a connection's location by voice, in any of 40 languages.",
    tags: ["Location", "Text to speech", "40 languages"],
  },
  {
    title: "Saferpay",
    org: "Client app, US",
    kind: "Android",
    body: "Payments app that combines Google Pay style money transfers with WhatsApp style messaging.",
    tags: ["Payments", "Chat", "US market"],
  },
  {
    title: "Sportyze",
    org: "Client app",
    kind: "Flutter",
    body: "Android and iOS app for preschools with parent, child and coach roles, progress tracking and online or offline classes.",
    tags: ["Flutter", "Multi-role", "Android + iOS"],
  },
  {
    title: "Location anomaly detection",
    org: "Aavid Software",
    kind: "Internship",
    body: "Android app that tracks location in real time on a map and flags unusual movement, backed by Firebase.",
    tags: ["Maps", "Firebase", "Location"],
  },
];

export const experience = [
  {
    period: "Aug 2025 - now",
    company: "Avaloq",
    role: "Kotlin Developer",
    location: "Pune, India",
    body: "Core team on the new KMP mobile banking app: white-label platform and SDKs, live for European and Swiss banks.",
    onePage: 4,
    highlights: [
      "Building Avaloq's **new mobile banking app** from scratch on **Kotlin Multiplatform** with a 20+ engineer team.",
      "Core team: I build the **white-label platform and SDKs**; one KMP core ships as template app, **SaaS** or **SDK**.",
      "Widget-based screens and opt-in products, configurable per bank through **remote configuration**.",
      "Live for **apoBank**, **Credit Agricole next bank** and Swiss regional banks, replacing the classic native apps.",
      "Shared logic with expect/actual and iOS framework export; native UI in **Jetpack Compose** and **SwiftUI**.",
    ],
  },
  {
    period: "Nov 2021 - Aug 2025",
    company: "Hyperlink Infosystem",
    role: "Android Developer",
    location: "Ahmedabad, India",
    body: "Client MVPs, legacy migrations, fintech security and early KMP work. Apps with more than 1M downloads.",
    onePage: 4,
    highlights: [
      "Shipped client apps in 3 to 4 months, including **Panels** for MKBHD (**1M+ downloads**) and DFM's **iVestor**.",
      "Migrated legacy apps to **Kotlin, MVVM and Clean Architecture**, reaching **99.6% crash-free sessions**.",
      "Cut cold start by **35%** and APK size from **90 MB to 7 MB** with modularization and R8.",
      "Secured iVestor's trading and IPO flows: **SSL pinning**, Keystore storage, **JWT/OAuth**, live WebSocket prices.",
      "Built an early **KMP** project with SQLDelight and Ktor, plus offline-first features on Room and DataStore.",
      "Adopted AI-assisted tooling for code reviews and documentation across the team.",
    ],
  },
  {
    period: "Jul 2021 - Nov 2021",
    company: "Infosys",
    role: "System Engineer",
    location: "Pune, India",
    body: "Scala data pipelines for large datasets, faster queries through storage partitioning.",
    onePage: 1,
    highlights: [
      "Built **Scala data pipelines** for large datasets and sped up queries through storage partitioning.",
    ],
  },
  {
    period: "Jan 2020 - Jun 2020",
    company: "Aavid Software",
    role: "Android Intern",
    location: "Pune, India",
    body: "Location-based anomaly detection app with Firebase and live maps.",
    onePage: 1,
    highlights: [
      "Built a location-based anomaly detection app with a **Firebase** backend and real-time map tracking.",
    ],
  },
];

export const education = {
  school: "Modern Education Society's College of Engineering",
  degree: "Bachelor of Engineering (B.E.), Computer Science",
  shortDegree: "B.E. Computer Science",
  location: "Pune, India",
  period: "2017 - 2021",
};

export const skills = [
  { group: "Languages & Multiplatform", items: ["Kotlin", "Java", "Coroutines", "Flow", "StateFlow", "SharedFlow", "KMP", "Compose Multiplatform", "expect/actual", "iOS framework export"] },
  { group: "Architecture & UI", items: ["MVVM", "Clean Architecture", "MVI", "Repository pattern", "Multi-module", "Jetpack Compose", "Material", "XML Views", "LiveData"] },
  { group: "Jetpack & AndroidX", items: ["ViewModel", "Lifecycle", "Navigation", "Room", "DataStore", "Paging 3", "WorkManager", "CameraX", "BiometricPrompt"] },
  { group: "DI, Build & CI/CD", items: ["Hilt", "Dagger", "Koin", "KSP", "Gradle KTS", "Version catalogs", "Git", "GitHub Actions", "Bitrise"] },
  { group: "Data & Networking", items: ["Ktor", "Retrofit", "OkHttp", "SQLDelight", "gRPC", "Firebase", "SQLite", "GraphQL basics"] },
  { group: "Quality, Perf & Security", items: ["Baseline Profiles", "R8", "LeakCanary", "SSL pinning", "Android Keystore", "OAuth / JWT", "JUnit", "MockK", "Espresso", "Macrobenchmark", "Compose testing", "detekt", "ktlint", "SonarQube", "Mockito", "Play Store releases"] },
];

export const marquee = [
  "Kotlin",
  "Jetpack Compose",
  "Kotlin Multiplatform",
  "Coroutines",
  "Clean Architecture",
  "SQLDelight",
  "Ktor",
  "Baseline Profiles",
  "Room",
  "Hilt",
  "Koin",
  "R8",
];

export const cvSummary = (years: number) =>
  `Android Developer with **${formatYears(years)} years** shipping apps with **1M+ downloads**, now building a white-label **Kotlin Multiplatform banking app** at Avaloq. Expert in **Kotlin, KMP, Jetpack Compose and MVVM/Clean Architecture**, with a record in crash-free stability (**99.6%**), performance, mobile security and legacy migrations.`;

export type CvProject = { id: string; name: string; tech: string; meta?: string; link?: StoreLink; line: string };

const cvLines: Record<string, string> = {
  panels: "MKBHD's wallpaper app: **1M+ downloads**, **99.6% crash-free**; early KMP with Compose and SwiftUI, open source.",
  ivestor: "Dubai Financial Market's investor app: trading, portfolio and **IPO subscriptions** with live prices.",
  lmn8: "Crypto-erase, in-place encryption and remote wipe; **Compose Multiplatform**, Rust crypto over UniFFI, gRPC.",
  "lmn8-v2": "Private chat, calls, sharing and crypts on every device; building the Android app with live chat sync, an offline outbox and notifications.",
  festiv: "Social app for festival plans, migrated from Flutter to **Compose Multiplatform** for Android and iOS.",
  studeasy: "Regional-language learning app for State Board students: animated lessons, quizzes and instant results.",
  powerpay: "Arunachal Pradesh electricity bill payments; brought in to turn around a poorly reviewed app.",
  ozank: "Fiat and crypto hybrid bank for sending money abroad, with OAK token transfers, KYC and biometric security.",
  krushley: "Dating app built in **Flutter**: swipe matching, chat and video date requests.",
};

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const allCvProjects: CvProject[] = [
  ...shipped.map((app) => ({
    id: app.id,
    name: app.name,
    tech: app.platform,
    meta: app.installs ? `${app.installs} downloads` : app.status,
    link: app.links[0],
    line: cvLines[app.id],
  })),
  { id: "lmn8", name: lmn8.title, tech: "Compose Multiplatform", meta: lmn8.status, link: lmn8.links[0], line: cvLines.lmn8 },
  { id: "lmn8-v2", name: "LMN8 v2", tech: "Kotlin Multiplatform + Rust", meta: lmn8Next.status, link: lmn8Next.link, line: cvLines["lmn8-v2"] },
  { id: "festiv", name: festiv.title, tech: "Compose Multiplatform", meta: festiv.status, line: cvLines.festiv },
  ...archive
    .filter((item) => item.org.startsWith("Client app"))
    .map((item) => ({ id: slug(item.title), name: item.title, tech: item.kind, line: item.body })),
];

const cvOrder = ["panels", "ivestor", "lmn8", "lmn8-v2", "festiv", "studeasy", "powerpay", "ozank", "krushley", "nuwater", "footprint-finder", "saferpay", "sportyze"];

export const cvSkillsOnePage = 7;

export const cvProjects = {
  onePage: ["panels", "ivestor", "lmn8"].map((id) => allCvProjects.find((p) => p.id === id)!),
  detailed: cvOrder.map((id) => allCvProjects.find((p) => p.id === id)!),
};
