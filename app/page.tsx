"use client";

import React from "react";
import {
  Sun,
  Moon,
  Users,
  Flame,
  ChefHat,
  PartyPopper,
  Mail,
  ArrowUpLeft,
  Sparkles,
} from "lucide-react";

const WA_RESTAURANT = "966570776673";
const WA_EVENTS = "966570448580";

function getWhatsAppUrl(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.861l-1.535 5.603 5.753-1.509c1.693.923 3.631 1.449 5.694 1.449 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "إفطار صباحي (أفراد وشركات)",
    subtitle: "تشكيلة صباحية طازجة يومياً للأفراد ومكاتب الشركات",
    tag: "يومياً في الصباح",
    phone: WA_RESTAURANT,
    channelText: "اطلب من المطعم",
    message:
      "مرحباً مطعم واحة فندر، أرغب في طلب / حجز (إفطار صباحي - أفراد وشركات).",
    image: "images/morning-breakfast.png",
    icon: <Sun className="w-5 h-5" />,
    theme: "olive",
  },
  {
    title: "إفطار رمضان اليومي",
    subtitle: "بوفيه إفطار يومي متكامل بأجواء رمضانية دافئة",
    tag: "بوفيه رمضان",
    phone: WA_RESTAURANT,
    channelText: "احجز عبر المطعم",
    message: "مرحباً مطعم واحة فندر، أرغب في حجز (بوفيه إفطار رمضان اليومي).",
    image: "images/hero-buffet.png",
    icon: <Moon className="w-5 h-5" />,
    theme: "olive",
  },
  {
    title: "إفطار رمضان للشركات والمجموعات",
    subtitle: "تنظيم مآدب إفطار خاصة للشركات والمجموعات",
    tag: "شركات ومجموعات",
    phone: WA_EVENTS,
    channelText: "نسّق مع قسم الاحتفالات",
    message:
      "مرحباً واحة فندر، أرغب في تنسيق (إفطار رمضان للشركات والمجموعات).",
    image: "images/ramadan-hall.png",
    icon: <Users className="w-5 h-5" />,
    theme: "gold",
  },
  {
    title: "وجبات سحور في رمضان",
    subtitle: "أطباق سحور شهية محضرة بعناية للأفراد والمجموعات",
    tag: "ليالي رمضان",
    phone: WA_RESTAURANT,
    channelText: "اطلب من المطعم",
    message: "مرحباً مطعم واحة فندر، أرغب في طلب (وجبات سحور في رمضان).",
    image: "images/insta-sample.jpeg",
    icon: <Flame className="w-5 h-5" />,
    theme: "olive",
  },
  {
    title: "بوفيهات واحتفالات حسب الطلب",
    subtitle: "تجهيز بوفيهات فاخرة متكاملة لمناسباتكم الخاصة",
    tag: "ضيافة حسب الطلب",
    phone: WA_EVENTS,
    channelText: "اطلب من قسم الاحتفالات",
    message:
      "مرحباً واحة فندر، أرغب في طلب (بوفيهات واحتفالات مجهزة حسب الطلب).",
    image: "images/hero-buffet.png",
    icon: <ChefHat className="w-5 h-5" />,
    theme: "gold",
  },
  {
    title: "باقات احتفالات متنوعة",
    subtitle: "قاعة مجهزة وباقات ضيافة مرنة تناسب كافة مناسباتكم",
    tag: "القاعة والاحتفالات",
    phone: WA_EVENTS,
    channelText: "احجز القاعة والباقات",
    message:
      "مرحباً واحة فندر، أرغب في الاستفسار عن (باقات الاحتفالات المتنوعة وحجز القاعة).",
    image: "images/ramadan-hall.png",
    icon: <PartyPopper className="w-5 h-5" />,
    theme: "gold",
  },
];

export default function VenderOasisLanding() {
  return (
    <div className="min-h-screen bg-alabaster-stone text-[#2B3527] flex flex-col justify-between">
      {/* 1. SERENE FLOATING HEADER */}
      <header className="sticky top-0 z-40 bg-[#F4F1EA]/90 backdrop-blur-md border-b border-[#7D8C6D]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3.5">
            <img
              src="images/logo.jpg"
              alt="مطعم واحة فندر"
              className="w-12 h-12 rounded-2xl object-cover shadow-sm border border-[#C8AA76]/50"
            />
            <div>
              <span className="block text-lg sm:text-xl font-bold text-[#2B3527] leading-snug">
                مطعم واحة فندر
              </span>
              <span className="block text-[10px] sm:text-xs tracking-widest text-[#6D7C5F] font-semibold uppercase">
                VENDER OASIS RESTAURANT
              </span>
            </div>
          </a>

          {/* Header Calm Olive WhatsApp Button */}
          <div className="flex items-center gap-2.5">
            <a
              href={getWhatsAppUrl(
                WA_RESTAURANT,
                "مرحباً مطعم واحة فندر، أرغب في الطلب / الحجز عبر الواتساب."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-oasis-olive inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#C8AA76]" />
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. CALM ARCHITECTURAL HERO SECTION */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:py-12 w-full space-y-16 sm:space-y-20">
        <section className="rounded-[32px] bg-[#FAF8F4] border border-[#C8AA76]/35 shadow-[0_20px_50px_-18px_rgba(43,53,39,0.1)] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Right Column: Serene Typography & Harmonious WhatsApp CTAs */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE4] border border-[#C8AA76]/40 text-[#5C6B50] text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-[#B6955E]" />
                <span>تجربة ضيافة متكاملة • طعم مميز وأجواء راقية</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#2B3527] leading-[1.35]">
                مرحبًا بكم في{" "}
                <span className="text-[#5C6B50]">مطعم واحة فندر</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4E5B48] leading-[1.85] font-normal max-w-2xl">
                وجهتكم لتجربة ضيافة متكاملة تجمع بين الطعم المميز والأجواء
                الراقية. نقدم بوفيهات واحتفالات مجهزة حسب الطلب، مع إفطار صباحي
                يومي، وخلال رمضان بوفيه إفطار يومي بأجواء رمضانية مميزة.
              </p>

              {/* Soft Brand Gold Highlight Strip */}
              <div className="inline-block bg-[#EFEAE0] border-r-4 border-[#C8AA76] px-4 py-2.5 rounded-l-xl text-xs sm:text-sm font-semibold text-[#3D4B37]">
                اضغط على القسم المطلوب للطلب أو الحجز مباشرة عبر الواتساب:
              </div>

              {/* Dual Eye-Soothing WhatsApp Buttons (Olive Forest & Warm Champagne Gold) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Button 1: Restaurant WhatsApp (Deep Calm Olive) */}
                <a
                  href={getWhatsAppUrl(
                    WA_RESTAURANT,
                    "مرحباً مطعم واحة فندر، أرغب في الطلب / الحجز من المطعم."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-oasis-olive group rounded-2xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-6 h-6 text-[#DEC59A]" />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-[#DEC59A] font-medium">
                        طلبات المطعم والإفطار
                      </span>
                      <span className="block text-base font-bold text-white">
                        واتساب المطعم
                      </span>
                      <span
                        dir="ltr"
                        className="block text-xs font-mono text-white/85 mt-0.5"
                      >
                        +966 057 077 6673
                      </span>
                    </div>
                  </div>
                  <ArrowUpLeft className="w-5 h-5 text-[#DEC59A] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Button 2: Celebrations & Hall WhatsApp (Warm Champagne Gold) */}
                <a
                  href={getWhatsAppUrl(
                    WA_EVENTS,
                    "مرحباً واحة فندر، أرغب في الاستفسار عن البوفيهات وقاعة الاحتفالات."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-oasis-gold group rounded-2xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2B3527]/15 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-6 h-6 text-[#2B3527]" />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-[#2B3527]/80 font-medium">
                        للبوفيهات والمناسبات
                      </span>
                      <span className="block text-base font-bold text-[#2B3527]">
                        الاحتفالات والقاعة
                      </span>
                      <span
                        dir="ltr"
                        className="block text-xs font-mono font-semibold text-[#2B3527]/90 mt-0.5"
                      >
                        +966 057 044 8580
                      </span>
                    </div>
                  </div>
                  <ArrowUpLeft className="w-5 h-5 text-[#2B3527] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Left Column: Arched Hospitality Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden bg-[#7D8C6D] p-3 sm:p-4 shadow-lg border border-[#C8AA76]/40">
                <div className="relative h-72 sm:h-80 lg:h-[360px] rounded-[20px] overflow-hidden">
                  <img
                    src="images/hero-buffet.png"
                    alt="ضيافة مطعم واحة فندر"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242D20]/80 via-transparent to-transparent flex items-end justify-between p-4">
                    <div>
                      <p className="text-white font-bold text-sm sm:text-base">
                        بوفيهات وضيافة واحة فندر
                      </p>
                      <p className="text-[#E6D5B8] text-xs">
                        إفطار صباحي • بوفيه رمضان • احتفالات
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#C8AA76] text-[#242D20] text-xs font-bold">
                      حسب الطلب
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERENE SERVICES GRID (6 Services - Direct WhatsApp Conversion) */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-block text-xs font-semibold text-[#6D7C5F] bg-[#EAE6DC] px-3.5 py-1 rounded-full">
              خدمات الضيافة
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B3527]">
              اختر خدمتك واطلب مباشرة عبر الواتساب
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(item.phone, item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="oasis-card group rounded-[26px] p-4 flex flex-col justify-between gap-5 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-[#EAE6DC]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#2B3527]/80 text-[#F4ECE0] backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="px-1 space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EFECE4] text-[#5C6B50] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#2B3527] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5C6856] leading-relaxed pr-11">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Calm Harmonious Action Bar */}
                <div
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                    item.theme === "olive"
                      ? "bg-[#EFECE4] group-hover:bg-[#3D4B37] text-[#2B3527] group-hover:text-white"
                      : "bg-[#F3ECE0] group-hover:bg-[#C8AA76] text-[#2B3527]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-4 h-4 text-[#5C6B50] group-hover:text-current transition-colors" />
                    <span>{item.channelText} (واتساب)</span>
                  </div>
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. CALM & CLEAR CONTACT SECTION */}
        <section className="rounded-[28px] bg-[#7D8C6D] text-white p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-2 text-right">
              <span className="inline-block text-xs font-semibold bg-white/15 px-3 py-1 rounded-full text-white">
                تواصل مباشر
              </span>
              <h3 className="text-2xl font-bold text-white">
                أرقام الطلب والحجز
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                اضغط على الرقم للتحويل المباشر إلى محادثة الواتساب
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Restaurant Contact Card */}
              <a
                href={getWhatsAppUrl(
                  WA_RESTAURANT,
                  "مرحباً مطعم واحة فندر، أرغب في التواصل مع المطعم."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF8F4] hover:bg-white text-[#2B3527] rounded-2xl p-5 flex items-center justify-between gap-3 transition-all shadow-sm"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#5C6B50]">
                    معلومات التواصل للمطعم
                  </span>
                  <p
                    dir="ltr"
                    className="text-lg sm:text-xl font-bold font-mono text-[#2B3527] text-right"
                  >
                    +966 057 077 6673
                  </p>
                  <span className="block text-xs text-[#6D7C5F]">
                    اضغط لفتح واتساب المطعم
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#3D4B37] text-[#DEC59A] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
              </a>

              {/* Celebrations Contact Card */}
              <a
                href={getWhatsAppUrl(
                  WA_EVENTS,
                  "مرحباً واحة فندر، أرغب في التواصل بخصوص الاحتفالات والقاعة."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF8F4] hover:bg-white text-[#2B3527] rounded-2xl p-5 flex items-center justify-between gap-3 transition-all shadow-sm"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#947644]">
                    للاحتفالات والقاعة
                  </span>
                  <p
                    dir="ltr"
                    className="text-lg sm:text-xl font-bold font-mono text-[#2B3527] text-right"
                  >
                    +966 057 044 8580
                  </p>
                  <span className="block text-xs text-[#947644]">
                    اضغط لفتح واتساب الاحتفالات
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#C8AA76] text-[#2B3527] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 5. MINIMAL FOOTER */}
      <footer className="border-t border-[#7D8C6D]/15 bg-[#ECE8DF] py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#4E5B48]">
          <div className="flex items-center gap-2.5">
            <img
              src="images/logo.jpg"
              alt="واحة فندر"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <span className="font-bold text-[#2B3527]">
              مطعم واحة فندر — VENDER OASIS RESTAURANT
            </span>
          </div>
          <a
            href="mailto:info@venderoasis.com"
            className="inline-flex items-center gap-2 font-mono text-[#2B3527] hover:text-[#5C6B50] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#6D7C5F]" />
            <span>info@venderoasis.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
