"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  GraduationCap,
  Users,
  Leaf,
  ArrowRight,
  BookOpen,
  Settings,
  Star,
  Heart,
  Trophy,
  Camera,
  Play,
  MapPin,
  Quote,
  Megaphone,
  ChevronRight,
  User,
  X,
  Send,
  ArrowLeft,
  Sparkles,
  Maximize,
  Minimize,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { RoleType } from "@/components/LoginScreen";

export default function Home() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<"portal" | "roles">("portal");
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [botModalOpen, setBotModalOpen] = useState(false);
  const [botChatInput, setBotChatInput] = useState("");
  const [botChatMessages, setBotChatMessages] = useState<
    Array<{ sender: "user" | "bot"; text: string }>
  >([
    {
      sender: "bot",
      text: "Hello! Welcome to Green Valley Public School. Click anywhere or select your role to proceed to your portal.",
    },
  ]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, []);

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSendBotMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg = text.trim();
    setBotChatMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setBotChatInput("");

    setTimeout(() => {
      let reply =
        "Please click anywhere on the page or tap 'Login' to view the role selection cards (Student, Staff, Visitor, Alumni).";
      if (userMsg.toLowerCase().includes("admission")) {
        reply =
          "Admissions for Academic Year 2026-27 are currently open for Classes Nursery to 9. Contact admissions desk at ext. 104.";
      } else if (
        userMsg.toLowerCase().includes("fee") ||
        userMsg.toLowerCase().includes("fees")
      ) {
        reply =
          "Term fee details and online payment can be accessed directly from the Student/Parent Dashboard or Visitor Portal.";
      } else if (
        userMsg.toLowerCase().includes("time") ||
        userMsg.toLowerCase().includes("hour")
      ) {
        reply =
          "School hours are 08:00 AM to 03:00 PM (Monday to Friday) and 08:00 AM to 12:30 PM on alternate Saturdays.";
      }
      setBotChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  const handleSelectRole = (role: RoleType) => {
    router.push(`/login?role=${role}`);
  };

  // Switch to Role Selector Page when clicking anywhere on Page 1 (Home Portal)
  const handlePortalClick = (e: React.MouseEvent) => {
    // Prevent switching if clicking AI Bot floating button, modal, or fullscreen button
    const target = e.target as HTMLElement;
    if (
      target.closest(".bot-trigger-wrap") ||
      target.closest(".hp-bot-modal") ||
      target.closest(".hp-fullscreen-btn")
    ) {
      return;
    }
    setActivePage("roles");
  };

  return (
    <>
      {/* =========================================================================
         PAGE 1: GREEN VALLEY PUBLIC SCHOOL HOME PORTAL (MATCHES IMAGE 1 EXACTLY)
         ========================================================================= */}
      {activePage === "portal" && (
        <main className="hp-wrapper" onClick={handlePortalClick}>
          {/* Floating visual hint for kiosk users */}
          <div className="hp-click-overlay-hint">
            <Sparkles size={14} className="text-yellow-400" />
            <span>Tap anywhere on screen to enter Role Portal</span>
          </div>

          <div className="hp-container">
            {/* 1. TOP HEADER */}
            <header className="hp-header">
              <div className="hp-branding">
                <div className="hp-logo-box">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 7C28 11 34 13 38 10C38 18 31 23 24 24C17 23 10 18 10 10C14 13 20 11 24 7Z"
                      fill="#10b981"
                    />
                    <path
                      d="M24 24V11"
                      stroke="#059669"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 36C12 31.5 18 32.5 24 37C30 32.5 36 31.5 43 36V18C36 13.5 30 14.5 24 19C18 14.5 12 13.5 5 18V36Z"
                      fill="#0369a1"
                    />
                    <path
                      d="M24 19V37"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="hp-brand-name">Green Valley Public School</h1>
                  <p className="hp-brand-motto">Learn • Grow • Excel</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <div className="hp-header-datetime">
                  <Calendar size={18} className="text-sky-600" />
                  <span>
                    {currentTime ? formatDate(currentTime) : "Tue, 23 Sep 2025"}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="font-extrabold text-slate-800">
                    {currentTime ? formatTime(currentTime) : "10:24 AM"}
                  </span>
                </div>

                <button
                  className="hp-fullscreen-btn"
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen Mode"}
                >
                  {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  <span>{isFullscreen ? "Exit Fullscreen" : "Full Screen"}</span>
                </button>
              </div>
            </header>

            {/* 2. HERO BANNER */}
            <div
              className="hp-hero-card"
              style={{ backgroundImage: `url('/hero_school_building.jpg')` }}
            >
              <div className="hp-hero-content">
                <p className="hp-hero-welcome">Welcome to</p>
                <h2 className="hp-hero-title">Green Valley Public School</h2>
                <p className="hp-hero-subtext">
                  A place to learn, grow and build brighter futures.
                </p>

                <div className="hp-hero-stats">
                  <div className="hp-stat-pill">
                    <div className="hp-stat-icon bg-emerald-500">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <div className="hp-stat-num">25+</div>
                      <div className="hp-stat-desc">Years of Excellence</div>
                    </div>
                  </div>

                  <div className="hp-stat-pill">
                    <div className="hp-stat-icon bg-purple-500">
                      <Users size={16} />
                    </div>
                    <div>
                      <div className="hp-stat-num">6000+</div>
                      <div className="hp-stat-desc">Happy Students</div>
                    </div>
                  </div>

                  <div className="hp-stat-pill">
                    <div className="hp-stat-icon bg-amber-500">
                      <Trophy size={16} />
                    </div>
                    <div>
                      <div className="hp-stat-num">100+</div>
                      <div className="hp-stat-desc">Awards & Recognitions</div>
                    </div>
                  </div>

                  <div className="hp-stat-pill">
                    <div className="hp-stat-icon bg-sky-500">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div className="hp-stat-num">Modern Campus</div>
                      <div className="hp-stat-desc">with World-class Facilities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aesthetic floating cursive accents */}
              <div className="hp-hero-floating-text">
                <div className="hp-dream-text">Dream • Learn • Achieve</div>
                <div className="hp-steps-text">Small Steps • Big Dreams.</div>
              </div>
            </div>

            {/* 3. EDUCATION NEWS TICKER */}
            <div className="hp-news-bar">
              <div className="hp-news-badge">
                <Megaphone size={14} />
                <span>Education News</span>
              </div>
              <div className="hp-news-scroll-wrap">
                <div className="hp-news-scroll-content">
                  <span>
                    <b>CBSE:</b> CBSE announces 2026 board exam pattern with more competency-based questions
                  </span>
                  <span>|</span>
                  <span>
                    <b>NEP 2020:</b> Focus on AI and coding from middle school
                  </span>
                  <span>|</span>
                  <span>
                    <b>State Govt:</b> Karnataka govt. expands free bus service for students
                  </span>
                  <span>|</span>
                  <span>
                    <b>Education Index:</b> India ranks higher in global education index 2025
                  </span>
                </div>
              </div>
              <ChevronRight size={18} className="hp-news-arrow" />
            </div>

            {/* 4. MIDDLE 4-COLUMN GRID */}
            <div className="hp-middle-grid">
              {/* CARD 1: OUR ACHIEVEMENTS */}
              <div className="hp-card">
                <div className="hp-card-title-row">
                  <div className="hp-card-heading">
                    <Trophy size={18} className="text-amber-500" />
                    <span>Our Achievements</span>
                  </div>
                  <span className="hp-view-all">
                    View All <ArrowRight size={12} />
                  </span>
                </div>

                <div className="hp-achievements-row">
                  {/* Item 1 */}
                  <div className="hp-achievement-item">
                    <div className="hp-achievement-img-wrap">
                      <img src="/achievement_math.jpg" alt="Mathematics Quiz" />
                      <div className="hp-rank-badge">
                        <Star size={10} fill="#ffffff" /> 1st Rank
                      </div>
                    </div>
                    <div className="hp-achievement-body">
                      <div className="hp-ach-title">Mathematics Quiz</div>
                      <div className="hp-ach-sub">Inter School Competition</div>
                      <div className="hp-ach-date">Aug 2025</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="hp-achievement-item">
                    <div className="hp-achievement-img-wrap">
                      <img src="/achievement_cricket.jpg" alt="Cricket Tournament" />
                      <div className="hp-rank-badge" style={{ background: "linear-gradient(135deg, #f59e0b, #b45309)" }}>
                        <Trophy size={10} /> Best Player
                      </div>
                    </div>
                    <div className="hp-achievement-body">
                      <div className="hp-ach-title">Cricket Tournament</div>
                      <div className="hp-ach-sub">Inter School</div>
                      <div className="hp-ach-date">Sep 2025</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="hp-achievement-item">
                    <div className="hp-achievement-img-wrap">
                      <img src="/achievement_science.jpg" alt="Science Exhibition" />
                      <div className="hp-rank-badge" style={{ background: "linear-gradient(135deg, #64748b, #475569)" }}>
                        2 2nd Place
                      </div>
                    </div>
                    <div className="hp-achievement-body">
                      <div className="hp-ach-title">Science Exhibition</div>
                      <div className="hp-ach-sub">District Level</div>
                      <div className="hp-ach-date">Aug 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: UPCOMING EVENTS */}
              <div className="hp-card">
                <div className="hp-card-title-row">
                  <div className="hp-card-heading">
                    <Calendar size={18} className="text-rose-500" />
                    <span>Upcoming Events</span>
                  </div>
                  <span className="hp-view-all">
                    View All <ArrowRight size={12} />
                  </span>
                </div>

                <div className="hp-events-list">
                  {/* Event 1 */}
                  <div className="hp-event-item">
                    <div className="hp-event-date-pill bg-purple-100 text-purple-700">
                      <span className="hp-event-day">25</span>
                      <span className="hp-event-month">Sep</span>
                    </div>
                    <div className="hp-event-details">
                      <div className="hp-event-name">Parent Teacher Meeting</div>
                      <div className="hp-event-time">
                        10:00 AM – 12:00 PM | School Auditorium
                      </div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="hp-event-item">
                    <div className="hp-event-date-pill bg-amber-100 text-amber-700">
                      <span className="hp-event-day">28</span>
                      <span className="hp-event-month">Sep</span>
                    </div>
                    <div className="hp-event-details">
                      <div className="hp-event-name">Sports Day Practice</div>
                      <div className="hp-event-time">
                        04:00 PM – 06:00 PM | Playground
                      </div>
                    </div>
                  </div>

                  {/* Event 3 */}
                  <div className="hp-event-item">
                    <div className="hp-event-date-pill bg-sky-100 text-sky-700">
                      <span className="hp-event-day">02</span>
                      <span className="hp-event-month">Oct</span>
                    </div>
                    <div className="hp-event-details">
                      <div className="hp-event-name">Science Exhibition</div>
                      <div className="hp-event-time">
                        All Day | School Campus
                      </div>
                    </div>
                  </div>

                  {/* Event 4 */}
                  <div className="hp-event-item">
                    <div className="hp-event-date-pill bg-pink-100 text-pink-700">
                      <span className="hp-event-day">10</span>
                      <span className="hp-event-month">Oct</span>
                    </div>
                    <div className="hp-event-details">
                      <div className="hp-event-name">Children's Day Celebration</div>
                      <div className="hp-event-time">
                        09:00 AM – 12:00 PM | School Auditorium
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: RECENT EVENTS */}
              <div className="hp-card">
                <div className="hp-card-title-row">
                  <div className="hp-card-heading">
                    <Camera size={18} className="text-teal-600" />
                    <span>Recent Events</span>
                  </div>
                  <span className="hp-view-all">
                    View Gallery <ArrowRight size={12} />
                  </span>
                </div>

                <div className="hp-photo-grid">
                  <div className="hp-photo-item">
                    <img src="/achievement_math.jpg" alt="Annual Day" />
                    <div className="hp-photo-caption">Annual Day 2025</div>
                  </div>
                  <div className="hp-photo-item">
                    <img src="/achievement_cricket.jpg" alt="Parade" />
                    <div className="hp-photo-caption">Sports Parade</div>
                  </div>
                  <div className="hp-photo-item">
                    <img src="/achievement_science.jpg" alt="Science Expo" />
                    <div className="hp-photo-caption">Science Expo</div>
                  </div>
                  <div className="hp-photo-item">
                    <img src="/school_background.jpg" alt="Teachers Day" />
                    <div className="hp-photo-caption">Teachers Day</div>
                  </div>
                </div>
              </div>

              {/* CARD 4: LOGIN TO CONTINUE */}
              <div className="hp-card hp-login-card">
                <div className="hp-login-icon-box">
                  <User size={28} />
                </div>
                <h3 className="hp-login-heading">Login to Continue</h3>
                <p className="hp-login-subtext">
                  Access your profile, attendance, results, fees and more.
                </p>
                <button
                  className="hp-login-btn"
                  onClick={() => setActivePage("roles")}
                >
                  <span>Login</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* 5. BOTTOM GRID (CAMPUS & QUOTE) */}
            <div className="hp-bottom-grid">
              {/* EXPLORE OUR CAMPUS */}
              <div className="hp-campus-card">
                <div className="hp-campus-tour-bar">
                  <div className="hp-campus-info">
                    <div className="hp-pin-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="hp-campus-title">Explore Our Campus</h3>
                      <p className="hp-campus-desc">
                        Take a 360° virtual tour and experience our world-class facilities, classrooms, labs, library and more.
                      </p>
                    </div>
                  </div>
                  <button className="hp-virtual-btn">
                    <Play size={12} fill="#ffffff" />
                    <span>Start Virtual Tour</span>
                  </button>
                </div>

                {/* 6 Thumbnails */}
                <div className="hp-campus-thumbs">
                  <div className="hp-thumb-item">
                    <div className="hp-thumb-img-box">
                      <img src="/hero_school_building.jpg" alt="Classrooms" />
                    </div>
                    <span className="hp-thumb-label">Classrooms</span>
                  </div>

                  <div className="hp-thumb-item">
                    <div className="hp-thumb-img-box">
                      <img src="/achievement_science.jpg" alt="Science & Computer Labs" />
                    </div>
                    <span className="hp-thumb-label">Science & Computer Labs</span>
                  </div>

                  <div className="hp-thumb-item">
                    <div className="hp-thumb-img-box">
                      <img src="/achievement_math.jpg" alt="Library" />
                    </div>
                    <span className="hp-thumb-label">Library</span>
                  </div>

                  <div className="hp-thumb-item">
                    <div className="hp-thumb-img-box">
                      <img src="/achievement_cricket.jpg" alt="Sports Facilities" />
                    </div>
                    <span className="hp-thumb-label">Sports Facilities</span>
                  </div>

                  <div className="hp-thumb-item">
                    <div className="hp-thumb-img-box">
                      <img src="/campus_banner.jpg" alt="Auditorium" />
                    </div>
                    <span className="hp-thumb-label">Auditorium</span>
                  </div>

                  <div className="hp-thumb-item">
                    <div className="hp-thumb-img-box">
                      <img src="/school_background.jpg" alt="Playground" />
                    </div>
                    <span className="hp-thumb-label">Playground</span>
                  </div>
                </div>
              </div>

              {/* QUOTE CARD */}
              <div className="hp-quote-card">
                <Quote size={32} className="hp-quote-icon" />
                <p className="hp-quote-text">
                  "Education is not just about books, it's about building a better tomorrow."
                </p>
              </div>
            </div>

            {/* 6. FOOTER STRIP */}
            <footer className="hp-footer">
              <div className="hp-footer-left">
                <div className="hp-footer-item text-emerald-700">
                  <span className="font-bold">✓</span> Safe & Secure Campus
                </div>
                <div className="hp-footer-item text-sky-700">
                  <Users size={14} /> Experienced Faculty
                </div>
                <div className="hp-footer-item text-teal-700">
                  <Leaf size={14} /> Holistic Development
                </div>
              </div>

              <div className="hp-footer-center">
                Together for a Brighter Tomorrow 🍃
              </div>

              <div className="hp-footer-right">
                <span>Academics</span>
                <span>|</span>
                <span>Sports</span>
                <span>|</span>
                <span>Arts</span>
                <span>|</span>
                <span>Values</span>
                <span>|</span>
                <span>Life Skills</span>
              </div>
            </footer>
          </div>
        </main>
      )}

      {/* =========================================================================
         PAGE 2: ROLE SELECTOR SCREEN (MATCHES IMAGE 2 EXACTLY)
         ========================================================================= */}
      {activePage === "roles" && (
        <main className="kiosk-container">
          <div className="kiosk-content">
            {/* TOP HEADER */}
            <header className="top-header">
              <div className="school-branding">
                <button
                  onClick={() => setActivePage("portal")}
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid #cbd5e1",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginRight: "0.5rem",
                    color: "#0369a1",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                  title="Back to School Home Portal"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="school-logo-box">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 7C28 11 34 13 38 10C38 18 31 23 24 24C17 23 10 18 10 10C14 13 20 11 24 7Z"
                      fill="#10b981"
                    />
                    <path
                      d="M24 24V11"
                      stroke="#059669"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 36C12 31.5 18 32.5 24 37C30 32.5 36 31.5 43 36V18C36 13.5 30 14.5 24 19C18 14.5 12 13.5 5 18V36Z"
                      fill="#0369a1"
                    />
                    <path
                      d="M24 19V37"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="school-titles">
                  <h1 className="school-name-text">Green Valley Public School</h1>
                  <p className="school-motto-text">Learn • Grow • Excel</p>
                </div>
              </div>

              <div className="status-pill-widget">
                <div className="clock-info">
                  <div className="calendar-icon-wrap">
                    <Calendar size={20} />
                  </div>
                  <div className="clock-details">
                    <span className="clock-date">
                      {currentTime ? formatDate(currentTime) : "Sat, Sep 26, 2026"}
                    </span>
                    <span className="clock-time">
                      {currentTime ? formatTime(currentTime) : "05:08 PM"}
                    </span>
                  </div>
                </div>

                <div className="widget-divider"></div>

                <div className="motto-stat-item">
                  Better<br />Students
                </div>
                <div className="widget-divider"></div>
                <div className="motto-stat-item">
                  Brighter<br />Future
                </div>

                <div className="widget-divider"></div>

                <button
                  onClick={toggleFullscreen}
                  style={{
                    background: isFullscreen ? "#0284c7" : "rgba(2, 132, 199, 0.08)",
                    color: isFullscreen ? "#ffffff" : "#0284c7",
                    border: "1px solid rgba(2, 132, 199, 0.2)",
                    borderRadius: "9999px",
                    padding: "0.35rem 0.75rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    transition: "all 0.2s ease",
                  }}
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Kiosk Fullscreen Mode"}
                >
                  {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
                  <span>{isFullscreen ? "Exit" : "Full Screen"}</span>
                </button>
              </div>
            </header>

            {/* HERO TITLE & SUBTITLE */}
            <section className="hero-section">
              <p className="welcome-label">Welcome to</p>
              <h2 className="hero-school-title">Green Valley Public School</h2>
              <p className="hero-subtitle">
                A place to learn • A space to grow • A community to belong
              </p>

              <div className="hero-badges-row">
                <div className="feature-pill">
                  <div className="pill-icon-circle pill-blue">
                    <GraduationCap size={16} />
                  </div>
                  <span>Quality Education</span>
                </div>

                <div className="feature-pill">
                  <div className="pill-icon-circle pill-green">
                    <Leaf size={16} />
                  </div>
                  <span>Holistic Growth</span>
                </div>

                <div className="feature-pill">
                  <div className="pill-icon-circle pill-purple">
                    <Users size={16} />
                  </div>
                  <span>Supportive Community</span>
                </div>

                <div className="feature-pill">
                  <div className="pill-icon-circle pill-gold">
                    <Star size={16} />
                  </div>
                  <span>Brighter Futures</span>
                </div>
              </div>
            </section>

            {/* 4 INTERACTIVE ROLE CARDS */}
            <section className="cards-row">
              {/* Card 1: Student / Parent */}
              <div
                className="role-card-item card-student"
                onClick={() => handleSelectRole("student")}
                role="button"
                tabIndex={0}
              >
                <div className="avatar-halo-wrap">
                  <div className="avatar-halo-bg"></div>
                  <img
                    src="/student_avatar.jpg"
                    alt="Student / Parent"
                    className="avatar-img-circle"
                  />
                  <div className="avatar-badge-icon">
                    <BookOpen size={18} />
                  </div>
                </div>
                <span className="role-prefix">I'm a</span>
                <h3 className="role-heading">Student / Parent</h3>
                <p className="role-subtext">
                  Access my learning,<br />updates and more
                </p>
                <button
                  className="role-action-btn"
                  aria-label="Open Student and Parent Login"
                >
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* Card 2: Staff */}
              <div
                className="role-card-item card-staff"
                onClick={() => handleSelectRole("staff")}
                role="button"
                tabIndex={0}
              >
                <div className="avatar-halo-wrap">
                  <div className="avatar-halo-bg"></div>
                  <img
                    src="/staff_avatar.jpg"
                    alt="Staff Member"
                    className="avatar-img-circle"
                  />
                  <div className="avatar-badge-icon">
                    <Users size={18} />
                  </div>
                </div>
                <span className="role-prefix">I'm a</span>
                <h3 className="role-heading">Staff</h3>
                <p className="role-subtext">
                  Manage classes,<br />academic & school activities
                </p>
                <button className="role-action-btn" aria-label="Open Staff Login">
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* Card 3: Admin */}
              <div
                className="role-card-item card-admin"
                onClick={() => handleSelectRole("admin")}
                role="button"
                tabIndex={0}
              >
                <div className="avatar-halo-wrap">
                  <div className="avatar-halo-bg"></div>
                  <img
                    src="/admin_avatar.jpg"
                    alt="School Administrator"
                    className="avatar-img-circle"
                  />
                  <div className="avatar-badge-icon">
                    <Settings size={18} />
                  </div>
                </div>
                <span className="role-prefix">I'm an</span>
                <h3 className="role-heading">Visitor</h3>
                <p className="role-subtext">
                  Control, configure<br />and manage the portal
                </p>
                <button className="role-action-btn" aria-label="Open Visitor Login">
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* Card 4: Alumni */}
              <div
                className="role-card-item card-alumni"
                onClick={() => handleSelectRole("alumni")}
                role="button"
                tabIndex={0}
              >
                <div className="avatar-halo-wrap">
                  <div className="avatar-halo-bg"></div>
                  <img
                    src="/alumni_avatar.jpg"
                    alt="School Alumni"
                    className="avatar-img-circle"
                  />
                  <div className="avatar-badge-icon">
                    <Star size={18} />
                  </div>
                </div>
                <span className="role-prefix">I'm an</span>
                <h3 className="role-heading">Alumni</h3>
                <p className="role-subtext">
                  Stay connected,<br />relive your memories
                </p>
                <button className="role-action-btn" aria-label="Open Alumni Login">
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>
              </div>
            </section>

            {/* BOTTOM FLOATING DOCK */}
            <footer className="bottom-dock">
              <div className="values-list">
                <div className="value-point">
                  <div
                    className="value-point-icon"
                    style={{ background: "#dbeafe", color: "#1d4ed8" }}
                  >
                    <Users size={16} />
                  </div>
                  <span>Every Learner Matters</span>
                </div>

                <div className="dock-separator"></div>

                <div className="value-point">
                  <div
                    className="value-point-icon"
                    style={{ background: "#dcfce7", color: "#15803d" }}
                  >
                    <Leaf size={16} />
                  </div>
                  <span>Stronger Together</span>
                </div>

                <div className="dock-separator"></div>

                <div className="value-point">
                  <div
                    className="value-point-icon"
                    style={{ background: "#fee2e2", color: "#dc2626" }}
                  >
                    <Heart size={16} />
                  </div>
                  <span>A Brighter Tomorrow</span>
                </div>
              </div>

              <div
                className="bot-trigger-wrap"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  setBotModalOpen(true);
                }}
              >
                <div className="bot-avatar-circle">
                  <img src="/school_bot.jpg" alt="School AI Bot" />
                </div>
                <div className="bot-text-group">
                  <span className="bot-text-title">Need Help?</span>
                  <span className="bot-text-desc">Chat with our School Bot</span>
                </div>
                <ArrowRight size={18} className="bot-arrow" />
              </div>
            </footer>
          </div>
        </main>
      )}

      {/* =========================================================================
         AI CHAT BOT MODAL
         ========================================================================= */}
      {botModalOpen && (
        <div
          className="hp-bot-modal"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(15, 23, 42, 0.45)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setBotModalOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "#ffffff",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              border: "1px solid #e2e8f0",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                }}
              >
                <img
                  src="/school_bot.jpg"
                  alt="School Bot"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid #ffffff",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                    }}
                  >
                    Green Valley AI Assistant
                  </h3>
                  <p style={{ fontSize: "0.75rem", opacity: 0.9 }}>
                    Online • 24/7 School Kiosk Help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setBotModalOpen(false)}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Suggestions */}
            <div
              style={{
                padding: "0.85rem 1.25rem",
                background: "#f8fafc",
                borderBottom: "1px solid #e2e8f0",
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() =>
                  handleSendBotMessage("How do I login to Student Portal?")
                }
                style={{
                  background: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#0369a1",
                  cursor: "pointer",
                }}
              >
                Student Portal Info
              </button>
              <button
                onClick={() => handleSendBotMessage("What are the school hours?")}
                style={{
                  background: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#0369a1",
                  cursor: "pointer",
                }}
              >
                School Hours
              </button>
              <button
                onClick={() =>
                  handleSendBotMessage("Admission details for 2026-27")
                }
                style={{
                  background: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9999px",
                  padding: "0.3rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#0369a1",
                  cursor: "pointer",
                }}
              >
                Admissions
              </button>
            </div>

            {/* Messages Area */}
            <div
              style={{
                height: "280px",
                overflowY: "auto",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {botChatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                    background: msg.sender === "user" ? "#0284c7" : "#f1f5f9",
                    color: msg.sender === "user" ? "#ffffff" : "#1e293b",
                    padding: "0.65rem 0.95rem",
                    borderRadius:
                      msg.sender === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    fontSize: "0.825rem",
                    lineHeight: 1.4,
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div
              style={{
                padding: "0.85rem 1.25rem",
                borderTop: "1px solid #e2e8f0",
                display: "flex",
                gap: "0.65rem",
                background: "#ffffff",
              }}
            >
              <input
                type="text"
                placeholder="Ask our AI assistant anything..."
                value={botChatInput}
                onChange={(e) => setBotChatInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSendBotMessage(botChatInput)
                }
                style={{
                  flex: 1,
                  background: "#f8fafc",
                  border: "1px solid #cbd5e1",
                  borderRadius: "9999px",
                  padding: "0.55rem 1.1rem",
                  fontSize: "0.825rem",
                  outline: "none",
                }}
              />
              <button
                onClick={() => handleSendBotMessage(botChatInput)}
                style={{
                  background: "#0284c7",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "50%",
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
