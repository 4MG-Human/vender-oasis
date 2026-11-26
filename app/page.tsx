"use client";

import React, { useState } from "react";
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
  User,
  Phone,
  ClipboardList,
  CheckCircle2,
  Send,
  MessageSquareText,
  Loader2,
} from "lucide-react";

const WA_RESTAURANT = "966570776673";
const WA_EVENTS = "966570448580";

const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

function getWhatsAppUrl(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Official Crisp WhatsApp Logo (Speech Bubble Outline + Phone Receiver inside)
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WhatsApp"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "إفطار صباحي (أفراد وشركات)",
    subtitle: "تشكيلة صباحية طازجة يومياً للأفراد ومكاتب الشركات",
    tag: "يومياً في الصباح",
    phone: WA_RESTAURANT,
    channelText: "اطلب عبر واتساب المطعم",
    message:
      "مرحباً مطعم واحة فندر، أرغب في طلب / حجز (إفطار صباحي - أفراد وشركات).",
    image: "images/morning-breakfast.png",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    title: "إفطار رمضان اليومي",
    subtitle: "بوفيه إفطار يومي متكامل بأجواء رمضانية دافئة",
    tag: "بوفيه رمضان",
    phone: WA_RESTAURANT,
    channelText: "احجز عبر واتساب المطعم",
    message: "مرحباً مطعم واحة فندر، أرغب في حجز (بوفيه إفطار رمضان اليومي).",
    image: "images/hero-buffet.png",
    icon: <Moon className="w-5 h-5" />,
  },
  {
    title: "إفطار رمضان للشركات والمجموعات",
    subtitle: "تنظيم مآدب إفطار خاصة للشركات والمجموعات",
    tag: "شركات ومجموعات",
    phone: WA_EVENTS,
    channelText: "نسّق عبر واتساب الاحتفالات",
    message:
      "مرحباً واحة فندر، أرغب في تنسيق (إفطار رمضان للشركات والمجموعات).",
    image: "images/ramadan-hall.png",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "وجبات سحور في رمضان",
    subtitle: "أطباق سحور شهية محضرة بعناية للأفراد والمجموعات",
    tag: "ليالي رمضان",
    phone: WA_RESTAURANT,
    channelText: "اطلب عبر واتساب المطعم",
    message: "مرحباً مطعم واحة فندر، أرغب في طلب (وجبات سحور في رمضان).",
    image: "images/insta-sample.jpeg",
    icon: <Flame className="w-5 h-5" />,
  },
  {
    title: "بوفيهات واحتفالات حسب الطلب",
    subtitle: "تجهيز بوفيهات فاخرة متكاملة لمناسباتكم الخاصة",
    tag: "ضيافة حسب الطلب",
    phone: WA_EVENTS,
    channelText: "اطلب عبر واتساب الاحتفالات",
    message:
      "مرحباً واحة فندر، أرغب في طلب (بوفيهات واحتفالات مجهزة حسب الطلب).",
    image: "images/hero-buffet.png",
    icon: <ChefHat className="w-5 h-5" />,
  },
  {
    title: "باقات احتفالات متنوعة",
    subtitle: "قاعة مجهزة وباقات ضيافة مرنة تناسب كافة مناسباتكم",
    tag: "القاعة والاحتفالات",
    phone: WA_EVENTS,
    channelText: "احجز عبر واتساب الاحتفالات",
    message:
      "مرحباً واحة فندر، أرغب في الاستفسار عن (باقات الاحتفالات المتنوعة وحجز القاعة).",
    image: "images/ramadan-hall.png",
    icon: <PartyPopper className="w-5 h-5" />,
  },
];

export default function VenderOasisLanding() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getTargetPhoneForService = (serviceTitle: string) => {
    const found = SERVICES.find((s) => s.title === serviceTitle);
    return found ? found.phone : WA_RESTAURANT;
  };

  const scrollToBookingForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formEl = document.getElementById("booking-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) return;

    setIsSubmitting(true);

    const cleanName = fullName.trim();
    const cleanPhone = phoneNumber.trim();
    const cleanNotes = notes.trim() || "لا يوجد";

    const payload = {
      timestamp: new Date().toLocaleString("ar-SA"),
      name: cleanName,
      phone: cleanPhone,
      service: selectedService,
      notes: cleanNotes,
    };

    const waUrl = getWhatsAppUrl(
      getTargetPhoneForService(selectedService),
      `مرحباً مطعم واحة فندر،\nقمت بتسجيل طلبي في الموقع:\n• الاسم: ${cleanName}\n• رقم الجوال: ${cleanPhone}\n• الخدمة المطلوبة: ${selectedService}\n• تفاصيل إضافية: ${cleanNotes}`
    );

    try {
      const sheetUrl =
        GOOGLE_SHEET_WEBHOOK_URL ||
        (typeof window !== "undefined"
          ? localStorage.getItem("VENDER_GOOGLE_SHEET_URL") || ""
          : "");

      if (sheetUrl) {
        await fetch(sheetUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      console.error("Google Sheet webhook error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (typeof window !== "undefined") {
        window.location.href = waUrl;
      }
    }
  };

  return (
    <div className="min-h-screen bg-alabaster-stone text-[#2B3527] flex flex-col justify-between font-tajawal">
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
              <span className="block text-lg sm:text-xl font-extrabold text-[#2B3527] leading-snug">
                مطعم واحة فندر
              </span>
              <span className="block text-[10px] sm:text-xs tracking-widest text-[#6D7C5F] font-bold uppercase">
                VENDER OASIS RESTAURANT
              </span>
            </div>
          </a>

          {/* Header Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="#booking-form"
              onClick={scrollToBookingForm}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EFECE4] hover:bg-[#E4DFD3] text-[#2B3527] border border-[#C8AA76]/40 text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <ClipboardList className="w-4 h-4 text-[#6D7C5F]" />
              <span>سجّل طلبك</span>
            </a>

            <a
              href={getWhatsAppUrl(
                WA_RESTAURANT,
                "مرحباً مطعم واحة فندر، أرغب في الطلب / الحجز عبر الواتساب."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-white"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE4] border border-[#C8AA76]/40 text-[#5C6B50] text-xs sm:text-sm font-bold">
                <Sparkles className="w-4 h-4 text-[#B6955E]" />
                <span>تجربة ضيافة متكاملة • طعم مميز وأجواء راقية</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#2B3527] leading-[1.35]">
                مرحبًا بكم في{" "}
                <span className="text-[#5C6B50]">مطعم واحة فندر</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3D4838] leading-[1.85] font-bold max-w-2xl">
                وجهتكم لتجربة ضيافة متكاملة تجمع بين الطعم المميز والأجواء
                الراقية. نقدم بوفيهات واحتفالات مجهزة حسب الطلب، مع إفطار صباحي
                يومي، وخلال رمضان بوفيه إفطار يومي بأجواء رمضانية مميزة.
              </p>

              {/* Soft Brand Highlight Strip */}
              <div className="inline-block bg-[#EFEAE0] border-r-4 border-[#1B9A4B] px-4 py-2.5 rounded-l-xl text-xs sm:text-sm font-extrabold text-[#2B3527]">
                اطلب مباشرة عبر الواتساب أو سجّل بياناتك في القائمة أدناه:
              </div>

              {/* Dual Unified WhatsApp Green Buttons with Clear White Typography & Crisp WhatsApp Icon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Button 1: Restaurant WhatsApp */}
                <a
                  href={getWhatsAppUrl(
                    WA_RESTAURANT,
                    "مرحباً مطعم واحة فندر، أرغب في الطلب / الحجز من المطعم."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp group rounded-2xl p-4 flex items-center justify-between text-white"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-white font-bold">
                        طلبات المطعم والإفطار
                      </span>
                      <span className="block text-base sm:text-lg font-extrabold text-white">
                        واتساب المطعم
                      </span>
                      <span
                        dir="ltr"
                        className="block text-xs sm:text-sm font-bold text-white mt-0.5"
                      >
                        +966 057 077 6673
                      </span>
                    </div>
                  </div>
                  <ArrowUpLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Button 2: Celebrations & Hall WhatsApp (Same Unified WhatsApp Green & White Text) */}
                <a
                  href={getWhatsAppUrl(
                    WA_EVENTS,
                    "مرحباً واحة فندر، أرغب في الاستفسار عن البوفيهات وقاعة الاحتفالات."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp group rounded-2xl p-4 flex items-center justify-between text-white"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-white font-bold">
                        للبوفيهات والمناسبات
                      </span>
                      <span className="block text-base sm:text-lg font-extrabold text-white">
                        واتساب الاحتفالات والقاعة
                      </span>
                      <span
                        dir="ltr"
                        className="block text-xs sm:text-sm font-bold text-white mt-0.5"
                      >
                        +966 057 044 8580
                      </span>
                    </div>
                  </div>
                  <ArrowUpLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242D20]/85 via-transparent to-transparent flex items-end justify-between p-4">
                    <div>
                      <p className="text-white font-extrabold text-sm sm:text-base">
                        بوفيهات وضيافة واحة فندر
                      </p>
                      <p className="text-white text-xs font-bold">
                        إفطار صباحي • بوفيه رمضان • احتفالات
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#C8AA76] text-[#242D20] text-xs font-extrabold">
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
            <span className="inline-block text-xs font-extrabold text-[#6D7C5F] bg-[#EAE6DC] px-3.5 py-1 rounded-full">
              خدمات الضيافة
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3527]">
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
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-[#2B3527]/85 text-white backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="px-1 space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EFECE4] text-[#5C6B50] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-extrabold text-[#2B3527] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A5545] leading-relaxed pr-11 font-bold">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Unified WhatsApp Action Button */}
                <div className="btn-whatsapp w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>{item.channelText}</span>
                  </div>
                  <ArrowUpLeft className="w-4 h-4 text-white" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. ELEGANT BOOKING & SERVICE SELECTION FORM (Connected to Google Sheets + Automatic WhatsApp Redirect) */}
        <section
          id="booking-form"
          className="scroll-mt-24 rounded-[32px] bg-[#FAF8F4] border border-[#C8AA76]/45 shadow-[0_22px_55px_-18px_rgba(43,53,39,0.12)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Right Decorative & Info Panel */}
            <div className="lg:col-span-5 bg-gradient-to-bl from-[#6E7E5F] to-[#4E5C41] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-xs font-extrabold text-white">
                  <ClipboardList className="w-4 h-4 text-white" />
                  <span>تسجيل طلب أو حجز سريع</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug text-white">
                  سجّل بياناتك واختر الخدمة المطلوبة
                </h3>

                <p className="text-sm sm:text-base text-white leading-relaxed font-bold">
                  اختر الخدمة التي ترغب بها من قائمة خدماتنا (إفطار صباحي، بوفيه
                  وسحور رمضان، أو باقات الاحتفالات)، وسيتم حفظ طلبك فوراً والتواصل
                  معك.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/25 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>تسجيل فوري ومباشر في جدول الطلبات (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-2.5 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>إمكانية إرسال الطلب مباشرة إلى الواتساب بضغطة زر</span>
                </div>
              </div>
            </div>

            {/* Left Form Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Customer Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-[#2B3527]">
                        الاسم الكريم <span className="text-[#1B9A4B]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#5C6B50] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          className="oasis-input w-full pr-11 pl-4 py-3.5 rounded-2xl text-sm font-bold"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="block text-sm font-extrabold text-[#2B3527]">
                        رقم الجوال <span className="text-[#1B9A4B]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#5C6B50] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="05XXXXXXXX"
                          className="oasis-input w-full pr-11 pl-4 py-3.5 rounded-2xl text-sm font-bold text-right"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Dropdown List */}
                  <div className="space-y-2">
                    <label className="block text-sm font-extrabold text-[#2B3527]">
                      اختر الخدمة المطلوبة من القائمة{" "}
                      <span className="text-[#1B9A4B]">*</span>
                    </label>
                    <div className="relative">
                      <ClipboardList className="w-4 h-4 text-[#5C6B50] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="oasis-input w-full pr-11 pl-4 py-3.5 rounded-2xl text-sm font-extrabold cursor-pointer"
                      >
                        {SERVICES.map((s, i) => (
                          <option key={i} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Notes */}
                  <div className="space-y-2">
                    <label className="block text-sm font-extrabold text-[#2B3527]">
                      تفاصيل إضافية (العدد أو الموعد - اختياري)
                    </label>
                    <div className="relative">
                      <MessageSquareText className="w-4 h-4 text-[#5C6B50] absolute right-4 top-4 pointer-events-none" />
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="مثال: حجز لشخصين يوم الجمعة، أو بوفيه شركة لـ 25 شخص في رمضان..."
                        className="oasis-input w-full pr-11 pl-4 py-3 rounded-2xl text-sm font-bold resize-none"
                      />
                    </div>
                  </div>

                  {/* Single Submit Button: Saves to Google Sheets then automatically redirects to WhatsApp */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-whatsapp w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base text-white flex items-center justify-center gap-2.5 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-white" />
                          <span>جاري حفظ الطلب وتحويلك للواتساب...</span>
                        </>
                      ) : (
                        <>
                          <WhatsAppIcon className="w-5 h-5 text-white" />
                          <span>تأكيد الطلب والمتابعة إلى الواتساب</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 px-4 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#1B9A4B]/15 text-[#1B9A4B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-2xl font-extrabold text-[#2B3527]">
                      تم تسجيل طلبك بنجاح، {fullName}!
                    </h4>
                    <p className="text-sm sm:text-base text-[#4A5545] font-bold">
                      الخدمة المختارة:{" "}
                      <span className="font-extrabold text-[#2B3527]">
                        {selectedService}
                      </span>
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(
                        getTargetPhoneForService(selectedService),
                        `مرحباً واحة فندر، قمت بتسجيل طلبي في الموقع:\nالاسم: ${fullName}\nالجوال: ${phoneNumber}\nالخدمة: ${selectedService}\nالتفاصيل: ${
                          notes || "لا يوجد"
                        }`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp py-3.5 px-6 rounded-2xl font-extrabold text-sm text-white inline-flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                      <span>تأكيد الطلب عبر الواتساب الآن</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName("");
                        setPhoneNumber("");
                        setNotes("");
                      }}
                      className="py-3.5 px-5 rounded-2xl bg-[#EFECE4] hover:bg-[#E4DFD3] text-[#2B3527] font-extrabold text-xs sm:text-sm transition-colors"
                    >
                      تسجيل طلب جديد
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 5. CALM & CLEAR CONTACT SECTION */}
        <section className="rounded-[28px] bg-[#6E7E5F] text-white p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-2 text-right">
              <span className="inline-block text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full text-white">
                تواصل مباشر
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                أرقام الطلب والحجز
              </h3>
              <p className="text-sm text-white leading-relaxed font-bold">
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
                className="btn-whatsapp rounded-2xl p-5 flex items-center justify-between gap-3 text-white"
              >
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-white">
                    معلومات التواصل للمطعم
                  </span>
                  <p
                    dir="ltr"
                    className="text-lg sm:text-xl font-extrabold text-white text-right"
                  >
                    +966 057 077 6673
                  </p>
                  <span className="block text-xs text-white font-bold">
                    اضغط لفتح واتساب المطعم
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-7 h-7 text-white" />
                </div>
              </a>

              {/* Celebrations Contact Card (Same Unified WhatsApp Green & White Text) */}
              <a
                href={getWhatsAppUrl(
                  WA_EVENTS,
                  "مرحباً واحة فندر، أرغب في التواصل بخصوص الاحتفالات والقاعة."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp rounded-2xl p-5 flex items-center justify-between gap-3 text-white"
              >
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-white">
                    للاحتفالات والقاعة
                  </span>
                  <p
                    dir="ltr"
                    className="text-lg sm:text-xl font-extrabold text-white text-right"
                  >
                    +966 057 044 8580
                  </p>
                  <span className="block text-xs text-white font-bold">
                    اضغط لفتح واتساب الاحتفالات
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-7 h-7 text-white" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. MINIMAL FOOTER */}
      <footer className="border-t border-[#7D8C6D]/15 bg-[#ECE8DF] py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#3D4838]">
          <div className="flex items-center gap-2.5">
            <img
              src="images/logo.jpg"
              alt="واحة فندر"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <span className="font-extrabold text-[#2B3527]">
              مطعم واحة فندر — VENDER OASIS RESTAURANT
            </span>
          </div>
          <a
            href="mailto:info@venderoasis.com"
            className="inline-flex items-center gap-2 font-bold text-[#2B3527] hover:text-[#1B9A4B] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#5C6B50]" />
            <span>info@venderoasis.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
