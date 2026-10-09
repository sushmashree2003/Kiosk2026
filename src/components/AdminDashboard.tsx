"use client";

import React, { useState } from "react";
import {
  Calendar,
  Bell,
  Search,
  BookOpen,
  ArrowRight,
  Home,
  CalendarDays,
  Clock,
  Award,
  Users,
  Sparkles,
  Send,
  Camera,
  ChevronRight,
  ShieldCheck,
  Lock,
  Cpu,
  BarChart3,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

interface DashboardProps {
  onBackToKiosk: () => void;
}

export default function AdminDashboard({ onBackToKiosk }: DashboardProps) {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  const handleAsk = (query: string) => {
    setChatInput(query);
    if (query.toLowerCase().includes("staff")) {
      setChatResponse("Total Staff: 86 active members (72 teaching, 14 admin). 4 on leave.");
    } else if (query.toLowerCase().includes("fee")) {
      setChatResponse("Total Fees Due: ₹8,42,500. 88% collected to date.");
    } else if (query.toLowerCase().includes("timetable") || query.toLowerCase().includes("classes")) {
      setChatResponse("8 scheduled classes across campus today. Substitute teachers deployed.");
    } else {
      setChatResponse("Campus security and operations check: All systems nominal.");
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
            placeholder="Search anything... (events, notices, students, staff, etc.)"
          />
        </div>

        <div className="dash-nav-actions">
          <button className="dash-icon-btn" aria-label="Notifications">
            <Bell size={16} />
            <span className="dash-notification-badge">3</span>
          </button>

          <div className="dash-profile-pill">
            <img src="/admin_avatar.jpg" alt="Administrator" className="dash-user-avatar" />
            <div className="dash-user-info">
              <span className="dash-user-name">Ramesh Kumar</span>
              <span className="dash-user-role">Staff • Teacher - Mathematics</span>
            </div>
          </div>

          <div className="dash-clock-widget">
            <Calendar size={13} style={{ color: "#0284c7" }} />
            <span>Tue, 23 Sep • 10:24 AM</span>
          </div>

          <button className="dash-kiosk-back-btn" onClick={onBackToKiosk}>
            <Home size={13} /> Kiosk Home
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT CONTENT (STRICT NO-SCROLL) */}
      <main className="dash-main-content">
        <div className="dash-kiosk-body-split">
          {/* LEFT 75% AREA */}
          <div className="dash-kiosk-body-left">
            {/* Banner */}
            <section
              className="dash-hero-banner"
              style={{ backgroundImage: `url('/campus_banner.jpg')` }}
            >
              <div className="dash-hero-left">
                <h2 className="dash-hero-title" style={{ fontSize: "1.35rem" }}>Together for a Brighter Tomorrow</h2>
                <p className="dash-hero-desc" style={{ fontSize: "0.72rem" }}>
                  Nurturing curious minds, building confident futures. Institutional oversight & campus governance.
                </p>
                <div className="dash-hero-tags">
                  <span className="dash-hero-tag">📖 Learn</span>
                  <span className="dash-hero-tag">🌱 Grow</span>
                  <span className="dash-hero-tag">⭐ Excel</span>
                </div>
              </div>
              <div className="dash-hero-right-badge" style={{ fontSize: "0.78rem" }}>
                A safe and inspiring<br />place to learn
              </div>
            </section>

            {/* Live Ticker */}
            <div className="dash-ticker-bar" style={{ borderRadius: 8, height: "26px" }}>
              <span className="ticker-badge-live">
                <Sparkles size={10} /> LIVE CURRENT AFFAIRS
              </span>
              <div className="ticker-content" style={{ fontSize: "0.68rem" }}>
                <div className="ticker-item">
                  <span className="ticker-tag">🎓 Education:</span>
                  <span>CBSE announces new competency-based question pattern for Class 10 board exams</span>
                </div>
                <div className="ticker-item">
                  <span className="ticker-tag">🇮🇳 National:</span>
                  <span>India's GDP grows by 7.8% in Q2 2025</span>
                </div>
                <div className="ticker-item">
                  <span className="ticker-tag">🔬 Science:</span>
                  <span>ISRO launches new satellite</span>
                </div>
              </div>
            </div>

            {/* 4 Executive Metric Cards */}
            <div className="metrics-grid-4">
              <div className="metric-card">
                <div className="metric-card-inner">
                  <div className="metric-icon-wrap" style={{ background: "#e0f2fe", color: "#0284c7" }}>
                    <Users size={18} />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Total Staff</span>
                    <span className="metric-value">86</span>
                    <span className="metric-sub">
                      <TrendingUp size={10} style={{ display: "inline" }} /> ↑ 5% vs last month
                    </span>
                  </div>
                </div>
                <ChevronRight size={14} className="metric-arrow" />
              </div>

              <div className="metric-card">
                <div className="metric-card-inner">
                  <div className="metric-icon-wrap" style={{ background: "#f3e8ff", color: "#9333ea" }}>
                    <CalendarDays size={18} />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Today's Classes</span>
                    <span className="metric-value">8</span>
                    <span className="metric-sub" style={{ color: "#64748b" }}>Classes Assigned</span>
                  </div>
                </div>
                <ChevronRight size={14} className="metric-arrow" />
              </div>

              <div className="metric-card">
                <div className="metric-card-inner">
                  <div className="metric-icon-wrap" style={{ background: "#ffedd5", color: "#ea580c" }}>
                    <Clock size={18} />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Today's Meetings</span>
                    <span className="metric-value">2</span>
                    <span className="metric-sub" style={{ color: "#0284c7" }}>Next: 11:30 AM</span>
                  </div>
                </div>
                <ChevronRight size={14} className="metric-arrow" />
              </div>

              <div className="metric-card">
                <div className="metric-card-inner">
                  <div className="metric-icon-wrap" style={{ background: "#ffe4e6", color: "#e11d48" }}>
                    <IndianRupee size={18} />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Total Fees Due</span>
                    <span className="metric-value">₹ 8,42,500</span>
                    <span className="metric-sub danger">12% pending</span>
                  </div>
                </div>
                <ChevronRight size={14} className="metric-arrow" />
              </div>
            </div>

            {/* Row 1: Staff Time Table, Upcoming Events, Notices */}
            <div className="dash-three-col-row">
              {/* Staff Time Table */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dbeafe", color: "#1d4ed8" }}>
                      <Calendar size={14} />
                    </div>
                    <span>Staff Time Table</span>
                  </div>
                  <span className="dash-view-all">Schedule →</span>
                </div>
                <div className="timetable-list">
                  <div className="timetable-row">
                    <span>08:00 - 08:45</span>
                    <span className="class-tag tag-blue">Class 6 A</span>
                    <span>Mathematics</span>
                  </div>
                  <div className="timetable-row">
                    <span>09:00 - 09:45</span>
                    <span className="class-tag tag-pink">Class 7 B</span>
                    <span>Science</span>
                  </div>
                  <div className="timetable-row">
                    <span>10:45 - 11:30</span>
                    <span className="class-tag tag-green">Class 8 A</span>
                    <span>English</span>
                  </div>
                  <div className="timetable-row">
                    <span>12:15 - 01:00</span>
                    <span className="class-tag tag-purple">Class 9 B</span>
                    <span>Social Studies</span>
                  </div>
                  <div className="timetable-row">
                    <span>02:00 - 02:45</span>
                    <span className="class-tag tag-orange">Class 10 A</span>
                    <span>Kannada</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dcfce7", color: "#15803d" }}>
                      <CalendarDays size={14} />
                    </div>
                    <span>Upcoming Events</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">24</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">Staff Meeting</div>
                      <div className="event-meta">10:30 - 11:30 AM • Conf. Hall</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">26</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">PTM Preparation Meeting</div>
                      <div className="event-meta">02:00 - 03:00 PM • Staff Room</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">28</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">Sports Day Practice</div>
                      <div className="event-meta">04:00 - 06:00 PM • Ground</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box">
                      <span className="event-day">01</span>
                      <span className="event-month">Oct</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">Teachers' Training Program</div>
                      <div className="event-meta">09:00 AM - 01:00 PM • Hall</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                </div>
              </div>

              {/* Notices */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#ffe4e6", color: "#e11d48" }}>
                      <Bell size={14} />
                    </div>
                    <span>Notices</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div>
                  <div className="notice-item-row">
                    <div className="notice-dot" style={{ background: "#ef4444" }} />
                    <div className="notice-content">
                      <div className="notice-title">School closed on 26 Sep (Sat)</div>
                      <div className="notice-date">24 Sep 2025</div>
                    </div>
                  </div>
                  <div className="notice-item-row">
                    <div className="notice-dot" style={{ background: "#8b5cf6" }} />
                    <div className="notice-content">
                      <div className="notice-title">Guidelines for Annual Examination</div>
                      <div className="notice-date">22 Sep 2025</div>
                    </div>
                  </div>
                  <div className="notice-item-row">
                    <div className="notice-dot" style={{ background: "#10b981" }} />
                    <div className="notice-content">
                      <div className="notice-title">PTM Schedule for Classes 1 – 8</div>
                      <div className="notice-date">20 Sep 2025</div>
                    </div>
                  </div>
                  <div className="notice-item-row">
                    <div className="notice-dot" style={{ background: "#f59e0b" }} />
                    <div className="notice-content">
                      <div className="notice-title">Staff Meeting Reminder</div>
                      <div className="notice-date">18 Sep 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Performance, Achievements, Upcoming Exams */}
            <div className="dash-three-col-row">
              {/* Performance */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#dcfce7", color: "#15803d" }}>
                      <BarChart3 size={14} />
                    </div>
                    <span>Students' Performance</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div>
                  <div className="perf-bar-chart">
                    <div className="perf-bar-col">
                      <span className="perf-bar-val">85%</span>
                      <div className="perf-bar-fill" style={{ height: "85%", background: "#38bdf8" }} />
                      <span className="perf-bar-label">Maths</span>
                    </div>
                    <div className="perf-bar-col">
                      <span className="perf-bar-val">78%</span>
                      <div className="perf-bar-fill" style={{ height: "78%", background: "#f87171" }} />
                      <span className="perf-bar-label">Sci</span>
                    </div>
                    <div className="perf-bar-col">
                      <span className="perf-bar-val">82%</span>
                      <div className="perf-bar-fill" style={{ height: "82%", background: "#06b6d4" }} />
                      <span className="perf-bar-label">Eng</span>
                    </div>
                    <div className="perf-bar-col">
                      <span className="perf-bar-val">76%</span>
                      <div className="perf-bar-fill" style={{ height: "76%", background: "#fbbf24" }} />
                      <span className="perf-bar-label">Soc</span>
                    </div>
                    <div className="perf-bar-col">
                      <span className="perf-bar-val">88%</span>
                      <div className="perf-bar-fill" style={{ height: "88%", background: "#a855f7" }} />
                      <span className="perf-bar-label">Kan</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.3rem", fontSize: "0.68rem" }}>
                    <span style={{ color: "#0284c7", fontWeight: 700 }}>Top: Class 10 (85%)</span>
                    <span style={{ color: "#16a34a", fontWeight: 700 }}>Avg: 81.8%</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
                      <Award size={14} />
                    </div>
                    <span>Achievements</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div>
                  <div className="achieve-row">
                    <div className="achieve-icon">🥇</div>
                    <div>
                      <div className="achieve-title">1st Rank - Math Quiz (District Level)</div>
                      <div className="achieve-meta">Aug 2025 • Student Team</div>
                    </div>
                  </div>
                  <div className="achieve-row">
                    <div className="achieve-icon" style={{ background: "#dcfce7", color: "#16a34a" }}>🏆</div>
                    <div>
                      <div className="achieve-title">Best Teacher Award - Inter-School</div>
                      <div className="achieve-meta">Jul 2025 • State Council</div>
                    </div>
                  </div>
                  <div className="achieve-row">
                    <div className="achieve-icon" style={{ background: "#ede9fe", color: "#7c3aed" }}>🥉</div>
                    <div>
                      <div className="achieve-title">3rd Place - Science Exhibition</div>
                      <div className="achieve-meta">Aug 2025 • Sustainable Project</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Exams */}
              <div className="dash-card">
                <div className="dash-card-header">
                  <div className="dash-card-title">
                    <div className="dash-card-icon" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                      <Clock size={14} />
                    </div>
                    <span>Upcoming Exams</span>
                  </div>
                  <span className="dash-view-all">View All →</span>
                </div>
                <div>
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                      <span className="event-day">26</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">Mathematics (Class 6)</div>
                      <div className="event-meta">08:00 - 10:00 AM • Hall A</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#eff6ff", color: "#2563eb" }}>
                      <span className="event-day">30</span>
                      <span className="event-month">Sep</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">Science (Class 7)</div>
                      <div className="event-meta">08:00 - 10:00 AM • Hall B</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                      <span className="event-day">03</span>
                      <span className="event-month">Oct</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">English (Class 8)</div>
                      <div className="event-meta">08:00 - 10:00 AM • Hall A</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                  <div className="event-item-row">
                    <div className="event-date-box" style={{ background: "#fff7ed", color: "#ea580c" }}>
                      <span className="event-day">07</span>
                      <span className="event-month">Oct</span>
                    </div>
                    <div className="event-text">
                      <div className="event-name">Social Studies (Class 9)</div>
                      <div className="event-meta">08:00 - 10:00 AM • Hall B</div>
                    </div>
                    <ChevronRight size={14} style={{ color: "#94a3b8" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 25% AREA */}
          <div className="dash-kiosk-body-right">
            {/* AI Assistant */}
            <div className="ai-assistant-card">
              <div className="ai-header-group">
                <div className="ai-header-text">
                  <h3>
                    <Sparkles size={15} /> AI Assistant
                  </h3>
                  <p>Ask anything about classes or academic operations.</p>
                </div>
                <div className="ai-bot-circle">
                  <img src="/school_bot.jpg" alt="School Bot" />
                </div>
              </div>

              <div className="ai-prompt-pills">
                <button className="ai-pill-btn" onClick={() => handleAsk("What is the staff attendance today?")}>
                  Staff attendance?
                </button>
                <button className="ai-pill-btn" onClick={() => handleAsk("Show pending fee details")}>
                  Fees due?
                </button>
                <button className="ai-pill-btn" onClick={() => handleAsk("Review today's timetable allocations")}>
                  Timetables?
                </button>
                <button className="ai-pill-btn" onClick={() => handleAsk("When is the next meeting?")}>
                  Next meeting?
                </button>
              </div>

              <div className="ai-input-wrap">
                <input
                  type="text"
                  placeholder={chatResponse ? chatResponse : "Type your question..."}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAsk(chatInput)}
                />
                <button className="ai-send-btn" onClick={() => handleAsk(chatInput)}>
                  <Send size={12} />
                </button>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="dash-card">
              <div className="dash-card-header">
                <div className="dash-card-title">
                  <div className="dash-card-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
                    <Camera size={14} />
                  </div>
                  <span>Photo Gallery</span>
                </div>
                <span className="dash-view-all">View All →</span>
              </div>
              <div className="gallery-thumbs-row">
                <div className="gallery-thumb-item">
                  <img src="/school_background.jpg" alt="Event" />
                </div>
                <div className="gallery-thumb-item">
                  <img src="/campus_banner.jpg" alt="Lab" />
                </div>
                <div className="gallery-thumb-item">
                  <img src="/campus_360.jpg" alt="Dance" />
                </div>
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="dash-card">
              <div className="dash-card-header">
                <div className="dash-card-title">
                  <span>Virtual Tour</span>
                </div>
              </div>
              <div className="tour-card-banner">
                <img src="/campus_360.jpg" alt="Campus 360" />
                <span className="tour-badge-360">360°</span>
                <button className="tour-start-btn">
                  Start Tour <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Inspiration Banner */}
            <div
              style={{
                borderRadius: 10,
                background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
                border: "1px solid #a7f3d0",
                padding: "0.45rem",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <h4 style={{ fontFamily: "Outfit, sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "#065f46" }}>
                Learn • Collaborate • Make a Difference
              </h4>
            </div>
          </div>
        </div>
      </main>

      {/* COMPACT FOOTER */}
      <footer className="dash-footer">
        <div>Green Valley Public School • Staff Portal • Learn • Grow • Excel</div>
        <div className="dash-footer-badges">
          <span className="dash-footer-badge-item">
            <ShieldCheck size={13} style={{ color: "#10b981" }} /> Safe
          </span>
          <span className="dash-footer-badge-item">
            <Lock size={13} style={{ color: "#0284c7" }} /> Secure
          </span>
          <span className="dash-footer-badge-item">
            <Cpu size={13} style={{ color: "#9333ea" }} /> Smart Operations
          </span>
        </div>
      </footer>
    </div>
  );
}
