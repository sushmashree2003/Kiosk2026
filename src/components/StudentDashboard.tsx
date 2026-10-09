"use client";

import React, { useState } from "react";
import {
  Calendar,
  Bell,
  Search,
  BookOpen,
  ArrowRight,
  Home,
  CheckCircle2,
  CalendarDays,
  FileText,
  Clock,
  Award,
  Bus,
  CreditCard,
  HelpCircle,
  Library,
  Sparkles,
  Send,
  Sun,
  Camera,
  ChevronRight,
  ShieldCheck,
  Lock,
  Cpu,
} from "lucide-react";

interface DashboardProps {
  onBackToKiosk: () => void;
}

export default function StudentDashboard({ onBackToKiosk }: DashboardProps) {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  const handleAsk = (query: string) => {
    setChatInput(query);
    if (query.toLowerCase().includes("attendance")) {
      setChatResponse("Aarav's attendance: 96.4% (48/50 days attended). Excellent!");
    } else if (query.toLowerCase().includes("fee")) {
      setChatResponse("Term 2 tuition fee cleared. Next due 15 Nov: ₹14,500.");
    } else if (query.toLowerCase().includes("exam")) {
      setChatResponse("Next Exam: Mathematics (Class 5) on 24 Sep at 10:00 AM.");
    } else {

      setChatResponse("Parent Teacher Meeting (PTM) is scheduled for 25 Sep.");
    }
  };

  return (
    <div className="dashboard-page">
      {/* TOP NAVBAR */}
      <header className="dash-navbar">
        <div className="dash-logo-link" onClick={onBackToKiosk}>
          <div className="dash-logo-box">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <path d="M24 7C28 11 34 13 38 10C38 18 31 23 24 24C17 23 10 18 10 10C14 13 20 11 24 7Z" fill="#10b981" />
              <path d="M24 24V11" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M5 36C12 31.5 18 32.5 24 37C30 32.5 36 31.5 43 36V18C36 13.5 30 14.5 24 19C18 14.5 12 13.5 5 18V36Z" fill="#0369a1" />
              <path d="M24 19V37" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="dash-school-text">
            <h1>Green Valley Public School</h1>
            <p>Learn • Grow • Excel</p>
          </div>
        </div>

        <div className="dash-search-box">
          <Search size={14} className="dash-search-icon" />
          <input
            type="text"
            className="dash-search-input"
            placeholder="Search events, assignments, results..."
          />
        </div>

        <div className="dash-nav-actions">
          <button className="dash-icon-btn" aria-label="Notifications">
            <Bell size={16} />
            <span className="dash-notification-badge">3</span>
          </button>

          <div className="dash-profile-pill">
            <img src="/student_avatar.jpg" alt="Aarav Sharma" className="dash-user-avatar" />
            <div className="dash-user-info">
              <span className="dash-user-name">Aarav Sharma</span>
              <span className="dash-user-role">Class 5 - Section B | Roll No: 12</span>
            </div>
          </div>

          <div className="dash-clock-widget">
            <Calendar size={13} style={{ color: "#0284c7" }} />
            <span>Tue, 23 Sep • 10:24 AM</span>
            <div style={{ width: 1, height: 12, background: "#cbd5e1", margin: "0 2px" }} />
            <span style={{ display: "flex", alignItems: "center", gap: 2, color: "#d97706" }}>
              <Sun size={12} /> 28°C
            </span>
          </div>

          <button className="dash-kiosk-back-btn" onClick={onBackToKiosk}>
            <Home size={13} /> Kiosk Home
          </button>
        </div>
      </header>

      {/* CURRENT AFFAIRS TICKER */}
      <div className="dash-ticker-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="ticker-badge-live" style={{ background: "#10b981" }}>
            <Sparkles size={11} /> Today&apos;s Current Affairs
          </span>
          <div className="ticker-content">
            <div className="ticker-item">
              <span className="ticker-tag">• CBSE:</span>
              <span>2026 board exam pattern with more competency-based questions</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">• NEP 2020:</span>
              <span>Focus on AI, coding & robotics from middle school</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">• Karnataka Govt:</span>
              <span>Expands free student bus transport network</span>
            </div>
          </div>
        </div>
        <span className="dash-view-all">View All →</span>
      </div>

      {/* MAIN VIEWPORT CONTENT (STRICT NO-SCROLL) */}
      <main className="dash-main-content">
        {/* ROW 1: BANNER + AI ASSISTANT */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr clamp(240px, 20vw, 310px)", gap: "0.55rem", flexShrink: 0 }}>
          {/* Banner */}
          <section
            className="dash-hero-banner"
            style={{ backgroundImage: `url('/campus_banner.jpg')` }}
          >
            <div className="dash-hero-left">
              <h2 className="dash-hero-title">Good Morning, Aarav!</h2>
              <p className="dash-hero-desc">
                Small steps every day lead to big dreams! Remember to submit your Science assignment today.
              </p>
              <div className="dash-hero-tags">
                <span className="dash-hero-tag">🌟 Grade A+</span>
                <span className="dash-hero-tag">📚 96.4% Attendance</span>
                <span className="dash-hero-tag">🏆 Quiz Champion</span>
              </div>
            </div>
            <div className="dash-hero-right-badge">
              Big dreams<br />begin here ♡
            </div>
          </section>

          {/* AI Assistant */}
          <div className="ai-assistant-card" style={{ padding: "0.55rem 0.75rem" }}>
            <div className="ai-header-group" style={{ marginBottom: "0.25rem" }}>
              <div className="ai-header-text">
                <h3 style={{ fontSize: "0.85rem" }}>
                  <Sparkles size={14} /> AI Assistant
                </h3>
                <p style={{ fontSize: "0.62rem" }}>Ask anything about your child or school.</p>
              </div>
              <div className="ai-bot-circle" style={{ width: 28, height: 28 }}>
                <img src="/school_bot.jpg" alt="School Bot" />
              </div>
            </div>

            <div className="ai-prompt-pills" style={{ marginBottom: "0.3rem", gap: "0.2rem" }}>
              <button className="ai-pill-btn" onClick={() => handleAsk("What is my ward's attendance?")}>
                Attendance?
              </button>
              <button className="ai-pill-btn" onClick={() => handleAsk("Show fee details")}>
                Fee details
              </button>
              <button className="ai-pill-btn" onClick={() => handleAsk("When is the next exam?")}>
                Next exam?
              </button>
              <button className="ai-pill-btn" onClick={() => handleAsk("Any upcoming events?")}>
                Upcoming events?
              </button>
            </div>

            <div className="ai-input-wrap" style={{ height: "26px" }}>
              <input
                type="text"
                placeholder={chatResponse ? chatResponse : "Type your question..."}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAsk(chatInput)}
                style={{ fontSize: "0.68rem" }}
              />
              <button className="ai-send-btn" style={{ width: 20, height: 20 }} onClick={() => handleAsk(chatInput)}>
                <Send size={11} />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN BODY: 3 BALANCED ROWS (LEFT 74%) + SIDEBAR (RIGHT 26%) */}
        <div className="student-main-layout">
          {/* Left Stack (3 Rows) */}
          <div className="student-left-stack">
            {/* ROW 1: Profile (33%) + Quick Actions (34%) + Upcoming Exams (33%) */}
            <div className="student-row-three">
              {/* 1. My Child's Profile */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dbeafe", color: "#1d4ed8" }}>
                      <CheckCircle2 size={14} />
                    </div>
                    <span>My Child&apos;s Profile</span>
                  </div>
                  <span className="dash-view-all">View Profile →</span>
                </div>
                <div className="student-profile-panel" style={{ flex: 1, alignItems: "center" }}>
                  <img src="/student_avatar.jpg" alt="Aarav Sharma" className="student-big-avatar" />
                  <div className="student-info-meta" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span className="student-name-big">Aarav Sharma</span>
                    <span className="student-class-text">Class 5 - Section B | Roll No: 12</span>
                    <span style={{ fontSize: "0.64rem", color: "#64748b" }}>
                      Adm: <strong>GVPS-1023</strong> • 2025-26
                    </span>
                    <span className="student-badge-status">
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#16a34a" }} />
                      Active Student
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Quick Actions (2x4 Grid) */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dcfce7", color: "#15803d" }}>
                      <CalendarDays size={14} />
                    </div>
                    <span>Quick Actions</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div className="quick-actions-grid" style={{ flex: 1, alignContent: "center" }}>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#dcfce7", color: "#16a34a" }}>
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="action-tile-label">Attendance</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#f3e8ff", color: "#9333ea" }}>
                      <FileText size={15} />
                    </div>
                    <span className="action-tile-label">Assignments</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#ffedd5", color: "#ea580c" }}>
                      <CalendarDays size={15} />
                    </div>
                    <span className="action-tile-label">Exam Schedule</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#dbeafe", color: "#0284c7" }}>
                      <Award size={15} />
                    </div>
                    <span className="action-tile-label">Results</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#fce7f3", color: "#db2777" }}>
                      <Library size={15} />
                    </div>
                    <span className="action-tile-label">Library</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#ccfbf1", color: "#0d9488" }}>
                      <Bus size={15} />
                    </div>
                    <span className="action-tile-label">Transport</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                      <CreditCard size={15} />
                    </div>
                    <span className="action-tile-label">Fee Details</span>
                  </button>
                  <button className="action-tile-btn">
                    <div className="action-tile-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
                      <HelpCircle size={15} />
                    </div>
                    <span className="action-tile-label">Raise a Query</span>
                  </button>
                </div>
              </div>

              {/* 3. Upcoming Exams */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#fee2e2", color: "#dc2626" }}>
                      <FileText size={14} />
                    </div>
                    <span>Upcoming Exams</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div className="dash-card-body">
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#fef2f2", color: "#dc2626" }}>
                      <span className="event-day">24</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.75rem", fontWeight: 700 }}>Mathematics (Class 5)</div>
                      <div className="event-meta">10:00 - 11:00 AM • Auditorium</div>
                    </div>
                    <span className="class-tag tag-pink">In 1 day</span>
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#eff6ff", color: "#2563eb" }}>
                      <span className="event-day">28</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.75rem", fontWeight: 700 }}>Science (Practical)</div>
                      <div className="event-meta">09:30 - 10:30 AM • Lab 1</div>
                    </div>
                    <span className="class-tag tag-blue">In 5 days</span>
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                      <span className="event-day">02</span>
                      <span className="event-month">Oct</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.75rem", fontWeight: 700 }}>English Grammar & Writing</div>
                      <div className="event-meta">09:00 - 10:00 AM • Room 12</div>
                    </div>
                    <span className="class-tag tag-purple">In 9 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Schedule (33%) + Events (33%) + Achievements (34%) */}
            <div className="student-row-three">
              {/* 4. Today's Schedule */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dbeafe", color: "#1d4ed8" }}>
                      <Clock size={14} />
                    </div>
                    <span>Today&apos;s Schedule</span>
                  </div>
                  <span className="dash-view-all">Full Timetable →</span>
                </div>
                <div className="timetable-list">
                  <div className="timetable-row">
                    <span>08:00 - 08:45</span>
                    <span className="class-tag tag-blue">Lab 1</span>
                    <span>Mathematics</span>
                    <ChevronRight size={13} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="timetable-row">
                    <span>09:00 - 09:45</span>
                    <span className="class-tag tag-pink">Rm 12</span>
                    <span>English</span>
                    <ChevronRight size={13} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="timetable-row">
                    <span>10:45 - 11:30</span>
                    <span className="class-tag tag-green">Lab 1</span>
                    <span>Science</span>
                    <ChevronRight size={13} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="timetable-row">
                    <span>12:15 - 01:00</span>
                    <span className="class-tag tag-purple">Rm 12</span>
                    <span>Social Studies</span>
                    <ChevronRight size={13} style={{ color: "#94a3b8" }} />
                  </div>
                </div>
              </div>

              {/* 5. Upcoming Events */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
                      <Calendar size={14} />
                    </div>
                    <span>Upcoming Events</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div className="dash-card-body">
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">25</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.74rem", fontWeight: 700 }}>Parent Teacher Meeting (PTM)</div>
                      <div className="event-meta">10:00 AM - 12:00 PM • Auditorium</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">28</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.74rem", fontWeight: 700 }}>Sports Day Practice</div>
                      <div className="event-meta">04:00 PM - 06:00 PM • Playground</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">02</span>
                      <span className="event-month">Oct</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.74rem", fontWeight: 700 }}>Annual Science Exhibition</div>
                      <div className="event-meta">All Day • School Campus</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">10</span>
                      <span className="event-month">Oct</span>
                    </div>
                    <div className="event-text" style={{ flex: 1, minWidth: 0, padding: "0 0.5rem" }}>
                      <div className="event-name" style={{ fontSize: "0.74rem", fontWeight: 700 }}>Children&apos;s Day Celebration</div>
                      <div className="event-meta">09:00 AM - 12:00 PM • Auditorium</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                </div>
              </div>

              {/* 6. Achievements */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dcfce7", color: "#15803d" }}>
                      <Award size={14} />
                    </div>
                    <span>Achievements</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div className="student-achieve-grid">
                  <div className="student-achieve-box">
                    <div className="student-achieve-icon-circle" style={{ background: "#fef3c7" }}>🥇</div>
                    <div className="student-achieve-rank">1st Rank</div>
                    <div className="student-achieve-sub">Math Quiz</div>
                    <div className="student-achieve-date">Aug 2025</div>
                  </div>
                  <div className="student-achieve-box">
                    <div className="student-achieve-icon-circle" style={{ background: "#dcfce7" }}>🏏</div>
                    <div className="student-achieve-rank">Best Player</div>
                    <div className="student-achieve-sub">Cricket</div>
                    <div className="student-achieve-date">Sep 2025</div>
                  </div>
                  <div className="student-achieve-box">
                    <div className="student-achieve-icon-circle" style={{ background: "#ffedd5" }}>🥉</div>
                    <div className="student-achieve-rank">3rd Place</div>
                    <div className="student-achieve-sub">Science Fair</div>
                    <div className="student-achieve-date">Aug 2025</div>
                  </div>
                  <div className="student-achieve-box">
                    <div className="student-achieve-icon-circle" style={{ background: "#eff6ff" }}>📜</div>
                    <div className="student-achieve-rank">Excellence</div>
                    <div className="student-achieve-sub">Elocution</div>
                    <div className="student-achieve-date">Jul 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Recent Events Gallery (58%) + Important News (42%) */}
            <div className="student-row-bottom">
              {/* 7. Recent Events Gallery */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#e0f2fe", color: "#0284c7" }}>
                      <Camera size={14} />
                    </div>
                    <span>Recent Events Gallery</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div className="student-gallery-grid">
                  <div className="student-gallery-item">
                    <img src="/school_background.jpg" alt="Sports Day" className="student-gallery-img" />
                    <div className="student-gallery-title">Sports Day 2025</div>
                    <div className="student-gallery-date">12 Sep 2025</div>
                  </div>
                  <div className="student-gallery-item">
                    <img src="/campus_banner.jpg" alt="Science Exhibition" className="student-gallery-img" />
                    <div className="student-gallery-title">Science Exhibition</div>
                    <div className="student-gallery-date">28 Aug 2025</div>
                  </div>
                  <div className="student-gallery-item">
                    <img src="/campus_360.jpg" alt="Independence Day" className="student-gallery-img" />
                    <div className="student-gallery-title">Independence Day</div>
                    <div className="student-gallery-date">15 Aug 2025</div>
                  </div>
                  <div className="student-gallery-item">
                    <img src="/school_background.jpg" alt="Teachers Day" className="student-gallery-img" />
                    <div className="student-gallery-title">Teachers&apos; Day</div>
                    <div className="student-gallery-date">05 Sep 2025</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "2px" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#0284c7" }} />
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#cbd5e1" }} />
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#cbd5e1" }} />
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#cbd5e1" }} />
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#cbd5e1" }} />
                </div>
              </div>

              {/* 8. Important / Urgent News */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#ffe4e6", color: "#e11d48" }}>
                      <Bell size={14} />
                    </div>
                    <span>Important / Urgent News</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div className="dash-card-body">
                  <div className="notice-item-row" style={{ alignItems: "center" }}>
                    <span className="class-tag tag-pink" style={{ fontSize: "0.58rem", flexShrink: 0 }}>NEW</span>
                    <div style={{ flex: 1, minWidth: 0, padding: "0 0.4rem" }}>
                      <div className="notice-title" style={{ fontSize: "0.7rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>School closed on 26 Sep (Saturday)</div>
                    </div>
                    <span style={{ fontSize: "0.56rem", color: "#94a3b8", flexShrink: 0 }}>2h ago</span>
                  </div>
                  <div className="notice-item-row" style={{ alignItems: "center" }}>
                    <span className="class-tag tag-blue" style={{ fontSize: "0.58rem", flexShrink: 0 }}>INFO</span>
                    <div style={{ flex: 1, minWidth: 0, padding: "0 0.4rem" }}>
                      <div className="notice-title" style={{ fontSize: "0.7rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Guidelines for Annual Examination</div>
                    </div>
                    <span style={{ fontSize: "0.56rem", color: "#94a3b8", flexShrink: 0 }}>1d ago</span>
                  </div>
                  <div className="notice-item-row" style={{ alignItems: "center" }}>
                    <span className="class-tag tag-green" style={{ fontSize: "0.58rem", flexShrink: 0 }}>NOTICE</span>
                    <div style={{ flex: 1, minWidth: 0, padding: "0 0.4rem" }}>
                      <div className="notice-title" style={{ fontSize: "0.7rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>PTM Schedule for Classes 1 – 8</div>
                    </div>
                    <span style={{ fontSize: "0.56rem", color: "#94a3b8", flexShrink: 0 }}>2d ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="student-right-col">
            {/* 9. School Virtual Tour */}
            <div className="dash-card">
              <div className="dash-card-header">
                <div className="dash-card-title">
                  <div className="dash-card-icon" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                    <Sparkles size={14} />
                  </div>
                  <span>School Virtual Tour</span>
                </div>
                <span className="dash-view-all">360° View</span>
              </div>
              <div className="tour-card-banner" style={{ flex: 1, minHeight: "65px" }}>
                <img src="/campus_360.jpg" alt="Campus Tour" />
                <span className="tour-badge-360">360°</span>
                <button className="tour-start-btn">
                  Start Tour <ArrowRight size={11} />
                </button>
              </div>
            </div>

            {/* 10. Shortcuts */}
            <div className="dash-card">
              <div className="dash-card-header">
                <div className="dash-card-title">
                  <div className="dash-card-icon" style={{ background: "#e0f2fe", color: "#0284c7" }}>
                    <BookOpen size={14} />
                  </div>
                  <span>Shortcuts</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.3rem" }}>
                <button className="action-tile-btn">
                  <div className="action-tile-icon" style={{ background: "#e0f2fe", color: "#0284c7" }}>
                    <Bus size={14} />
                  </div>
                  <span className="action-tile-label">Transport</span>
                </button>
                <button className="action-tile-btn">
                  <div className="action-tile-icon" style={{ background: "#ffedd5", color: "#ea580c" }}>
                    <Library size={14} />
                  </div>
                  <span className="action-tile-label">Library</span>
                </button>
                <button className="action-tile-btn">
                  <div className="action-tile-icon" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                    <CreditCard size={14} />
                  </div>
                  <span className="action-tile-label">Fee Details</span>
                </button>
                <button className="action-tile-btn">
                  <div className="action-tile-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
                    <Calendar size={14} />
                  </div>
                  <span className="action-tile-label">Calendar</span>
                </button>
              </div>
            </div>

            {/* 11. Inspiration Culture Card */}
            <div
              style={{
                borderRadius: 12,
                background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
                border: "1px solid #a7f3d0",
                padding: "0.55rem 0.85rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
                minHeight: "65px",
              }}
            >
              <div style={{ fontSize: "1.1rem", marginBottom: "0.15rem" }}>🌿🏫✨</div>
              <h4 style={{ fontFamily: "Outfit, sans-serif", fontSize: "0.82rem", fontWeight: 800, color: "#065f46", lineHeight: 1.25, margin: 0 }}>
                A Great Place to Learn, Grow and Belong ♡
              </h4>
              <p style={{ fontSize: "0.6rem", color: "#047857", margin: "2px 0 0 0", fontWeight: 600 }}>
                Green Valley Public School
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* COMPACT FOOTER */}
      <footer className="dash-footer">
        <div>Green Valley Public School • Together for a Brighter Future</div>
        <div className="dash-footer-badges">
          <span className="dash-footer-badge-item">
            <ShieldCheck size={13} style={{ color: "#10b981" }} /> Safe
          </span>
          <span className="dash-footer-badge-item">
            <Lock size={13} style={{ color: "#0284c7" }} /> Secure
          </span>
          <span className="dash-footer-badge-item">
            <Cpu size={13} style={{ color: "#9333ea" }} /> Smart
          </span>
        </div>
      </footer>
    </div>
  );
}
