"use client";

import React from "react";
import {
  Calendar,
  ArrowLeft,
  Minimize,
  Maximize,
  GraduationCap,
  Leaf,
  Users,
  Star,
  BookOpen,
  Settings,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Award,
  ChevronRight,
  Activity,
} from "lucide-react";
import { RoleType } from "./LoginScreen";

export interface RoleSelectionScreenProps {
  onSelectRole: (role: RoleType) => void;
  onBackToPortal: () => void;
  isFullscreen: boolean;
  toggleFullscreen: (e?: React.MouseEvent) => void;
  currentTime: Date | null;
  onOpenBot?: () => void;
}

export default function RoleSelectionScreen({
  onSelectRole,
  onBackToPortal,
  isFullscreen,
  toggleFullscreen,
  currentTime,
  onOpenBot,
}: RoleSelectionScreenProps) {
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

  return (
    <main className="kiosk-container">
      <div className="kiosk-content">
        {/* TOP HEADER */}
        <header className="top-header">
          <div className="school-branding">
            <button
              onClick={onBackToPortal}
              className="kiosk-back-btn"
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
                <Calendar size={18} />
              </div>
              <div className="clock-details">
                <span className="clock-date">
                  {currentTime ? formatDate(currentTime) : "Mon, Oct 12, 2026"}
                </span>
                <span className="clock-time">
                  {currentTime ? formatTime(currentTime) : "05:56 PM"}
                </span>
              </div>
            </div>

            <div className="widget-divider"></div>

            <div className="motto-stat-item">
              <span className="font-extrabold text-sky-800">Better</span>
              <br />
              Students
            </div>
            <div className="widget-divider"></div>
            <div className="motto-stat-item">
              <span className="font-extrabold text-emerald-800">Brighter</span>
              <br />
              Future
            </div>

            <div className="widget-divider"></div>

            <button
              onClick={toggleFullscreen}
              className="kiosk-fs-toggle"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Kiosk Fullscreen Mode"}
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
              <span>{isFullscreen ? "Exit" : "Full Screen"}</span>
            </button>
          </div>
        </header>

        {/* HERO TITLE & HIGHLIGHT PILLS */}
        <section className="hero-section">
          <p className="welcome-label">Welcome to</p>
          <h2 className="hero-school-title">Green Valley Public School</h2>
          <p className="hero-subtitle">
            A place to learn • A space to grow • A community to belong
          </p>

          <div className="hero-badges-row">
            <div className="feature-pill">
              <div className="pill-icon-circle pill-blue">
                <GraduationCap size={15} />
              </div>
              <span>Quality Education</span>
            </div>

            <div className="feature-pill">
              <div className="pill-icon-circle pill-green">
                <Leaf size={15} />
              </div>
              <span>Holistic Growth</span>
            </div>

            <div className="feature-pill">
              <div className="pill-icon-circle pill-purple">
                <Users size={15} />
              </div>
              <span>Supportive Community</span>
            </div>

            <div className="feature-pill">
              <div className="pill-icon-circle pill-gold">
                <Star size={15} />
              </div>
              <span>Brighter Futures</span>
            </div>
          </div>
        </section>

        {/* 4 COMPLETELY FILLED DYNAMIC ROLE CARDS (NO GAPS) */}
        <section className="cards-row">
          {/* Card 1: Student / Parent */}
          <div
            className="role-card-item card-student"
            onClick={() => onSelectRole("student")}
            role="button"
            tabIndex={0}
          >
            {/* Card Header & Avatar */}
            <div className="rc-top-section">
              <div className="avatar-halo-wrap">
                <div className="avatar-halo-bg"></div>
                <img
                  src="/student_avatar.jpg"
                  alt="Student / Parent"
                  className="avatar-img-circle"
                />
                <div className="avatar-badge-icon">
                  <BookOpen size={16} />
                </div>
              </div>
              <span className="role-prefix">I&apos;m a</span>
              <h3 className="role-heading">Student / Parent</h3>
              <p className="role-subtext">
                Access my learning, academic scores & school updates
              </p>
              <div className="rc-status-pill blue">
                <span className="rc-pulse-dot blue"></span>
                <span>Term II Active • AY 2026–27</span>
              </div>
            </div>

            {/* Dynamic Real-Time Data Box */}
            <div className="rc-data-box blue">
              <div className="rc-metric-row">
                <div className="rc-metric-item">
                  <span className="rc-metric-val">96.4%</span>
                  <span className="rc-metric-lbl">Attendance</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">Class 10</span>
                  <span className="rc-metric-lbl">Current Batch</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">Grade A</span>
                  <span className="rc-metric-lbl">GPA 3.9/4.0</span>
                </div>
              </div>

              <div className="rc-live-notice">
                <Clock size={11} className="text-sky-600 flex-shrink-0" />
                <span>Next: Science Periodic Test (Oct 18)</span>
              </div>
            </div>

            {/* Feature Pills Grid */}
            <div className="rc-features-grid">
              <div className="rc-feat-card blue">
                <div className="rc-feat-title">📚 LMS & Homework</div>
                <div className="rc-feat-desc">Daily Assignments</div>
              </div>
              <div className="rc-feat-card blue">
                <div className="rc-feat-title">📊 Report Cards</div>
                <div className="rc-feat-desc">Grades & Term Scores</div>
              </div>
              <div className="rc-feat-card blue">
                <div className="rc-feat-title">🚌 GPS Bus Route</div>
                <div className="rc-feat-desc">Route #4 Live Tracking</div>
              </div>
              <div className="rc-feat-card blue">
                <div className="rc-feat-title">💳 Online Fees</div>
                <div className="rc-feat-desc">Receipts & Due Alerts</div>
              </div>
            </div>

            {/* Live Activity Row */}
            <div className="rc-activity-banner blue">
              <Sparkles size={11} className="text-sky-600 flex-shrink-0" />
              <span>Live: Unit syllabus and circulars updated</span>
            </div>

            {/* Full-Width Action Button */}
            <button
              className="role-action-btn-filled blue"
              aria-label="Enter Student and Parent Portal"
            >
              <span>Enter Student Portal</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Card 2: Staff */}
          <div
            className="role-card-item card-staff"
            onClick={() => onSelectRole("staff")}
            role="button"
            tabIndex={0}
          >
            {/* Card Header & Avatar */}
            <div className="rc-top-section">
              <div className="avatar-halo-wrap">
                <div className="avatar-halo-bg"></div>
                <img
                  src="/staff_avatar.jpg"
                  alt="Staff Member"
                  className="avatar-img-circle"
                />
                <div className="avatar-badge-icon">
                  <Users size={16} />
                </div>
              </div>
              <span className="role-prefix">I&apos;m a</span>
              <h3 className="role-heading">Staff</h3>
              <p className="role-subtext">
                Manage classes, student records & academic activities
              </p>
              <div className="rc-status-pill green">
                <span className="rc-pulse-dot green"></span>
                <span>184 Active Faculty • On Duty</span>
              </div>
            </div>

            {/* Dynamic Real-Time Data Box */}
            <div className="rc-data-box green">
              <div className="rc-metric-row">
                <div className="rc-metric-item">
                  <span className="rc-metric-val">36</span>
                  <span className="rc-metric-lbl">Today&apos;s Classes</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">98.6%</span>
                  <span className="rc-metric-lbl">Attendance Marked</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">4</span>
                  <span className="rc-metric-lbl">Labs Booked</span>
                </div>
              </div>

              <div className="rc-live-notice">
                <Clock size={11} className="text-emerald-600 flex-shrink-0" />
                <span>Next: Faculty Council Meet (03:30 PM)</span>
              </div>
            </div>

            {/* Feature Pills Grid */}
            <div className="rc-features-grid">
              <div className="rc-feat-card green">
                <div className="rc-feat-title">📝 Mark Attendance</div>
                <div className="rc-feat-desc">Period 1 to 6 Marking</div>
              </div>
              <div className="rc-feat-card green">
                <div className="rc-feat-title">📋 Grade Entry</div>
                <div className="rc-feat-desc">Mid-Term Evaluation</div>
              </div>
              <div className="rc-feat-card green">
                <div className="rc-feat-title">📑 Lesson Plans</div>
                <div className="rc-feat-desc">Weekly Curriculum</div>
              </div>
              <div className="rc-feat-card green">
                <div className="rc-feat-title">🗓️ Leave Portal</div>
                <div className="rc-feat-desc">Apply & Track Status</div>
              </div>
            </div>

            {/* Live Activity Row */}
            <div className="rc-activity-banner green">
              <Sparkles size={11} className="text-emerald-600 flex-shrink-0" />
              <span>Live: Staff room notice board synced</span>
            </div>

            {/* Full-Width Action Button */}
            <button
              className="role-action-btn-filled green"
              aria-label="Enter Staff Portal"
            >
              <span>Enter Staff Portal</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Card 3: Admin / Visitor */}
          <div
            className="role-card-item card-admin"
            onClick={() => onSelectRole("admin")}
            role="button"
            tabIndex={0}
          >
            {/* Card Header & Avatar */}
            <div className="rc-top-section">
              <div className="avatar-halo-wrap">
                <div className="avatar-halo-bg"></div>
                <img
                  src="/admin_avatar.jpg"
                  alt="School Administrator"
                  className="avatar-img-circle"
                />
                <div className="avatar-badge-icon">
                  <Settings size={16} />
                </div>
              </div>
              <span className="role-prefix">I&apos;m a</span>
              <h3 className="role-heading">Visitor / Admin</h3>
              <p className="role-subtext">
                Control, configure school campus & manage visitors
              </p>
              <div className="rc-status-pill purple">
                <span className="rc-pulse-dot purple"></span>
                <span>Gate Kiosk Active • Pass Scanner</span>
              </div>
            </div>

            {/* Dynamic Real-Time Data Box */}
            <div className="rc-data-box purple">
              <div className="rc-metric-row">
                <div className="rc-metric-item">
                  <span className="rc-metric-val">42</span>
                  <span className="rc-metric-lbl">Visitors Today</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">Open</span>
                  <span className="rc-metric-lbl">Admissions AY 27</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">100%</span>
                  <span className="rc-metric-lbl">Campus Online</span>
                </div>
              </div>

              <div className="rc-live-notice">
                <MapPin size={11} className="text-purple-600 flex-shrink-0" />
                <span>Desk: Admin Wing Room 102 (Ext. 104)</span>
              </div>
            </div>

            {/* Feature Pills Grid */}
            <div className="rc-features-grid">
              <div className="rc-feat-card purple">
                <div className="rc-feat-title">🎫 Instant Pass</div>
                <div className="rc-feat-desc">QR Code Entry Badge</div>
              </div>
              <div className="rc-feat-card purple">
                <div className="rc-feat-title">🏫 Campus Map</div>
                <div className="rc-feat-desc">Interactive Tour</div>
              </div>
              <div className="rc-feat-card purple">
                <div className="rc-feat-title">📞 Admissions</div>
                <div className="rc-feat-desc">Counseling & Desk</div>
              </div>
              <div className="rc-feat-card purple">
                <div className="rc-feat-title">⚙️ Admin Console</div>
                <div className="rc-feat-desc">Kiosk Config & Logs</div>
              </div>
            </div>

            {/* Live Activity Row */}
            <div className="rc-activity-banner purple">
              <Sparkles size={11} className="text-purple-600 flex-shrink-0" />
              <span>Live: Biometric check active at Gate 1</span>
            </div>

            {/* Full-Width Action Button */}
            <button
              className="role-action-btn-filled purple"
              aria-label="Enter Visitor and Admin Portal"
            >
              <span>Enter Visitor Portal</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Card 4: Alumni */}
          <div
            className="role-card-item card-alumni"
            onClick={() => onSelectRole("alumni")}
            role="button"
            tabIndex={0}
          >
            {/* Card Header & Avatar */}
            <div className="rc-top-section">
              <div className="avatar-halo-wrap">
                <div className="avatar-halo-bg"></div>
                <img
                  src="/alumni_avatar.jpg"
                  alt="School Alumni"
                  className="avatar-img-circle"
                />
                <div className="avatar-badge-icon">
                  <Star size={16} />
                </div>
              </div>
              <span className="role-prefix">I&apos;m an</span>
              <h3 className="role-heading">Alumni</h3>
              <p className="role-subtext">
                Stay connected, network with peers & mentor students
              </p>
              <div className="rc-status-pill gold">
                <span className="rc-pulse-dot gold"></span>
                <span>4,850+ Registered Alumni</span>
              </div>
            </div>

            {/* Dynamic Real-Time Data Box */}
            <div className="rc-data-box gold">
              <div className="rc-metric-row">
                <div className="rc-metric-item">
                  <span className="rc-metric-val">18</span>
                  <span className="rc-metric-lbl">Global Chapters</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">120+</span>
                  <span className="rc-metric-lbl">Active Mentors</span>
                </div>
                <div className="rc-metric-sep"></div>
                <div className="rc-metric-item">
                  <span className="rc-metric-val">Dec 26</span>
                  <span className="rc-metric-lbl">Silver Reunion</span>
                </div>
              </div>

              <div className="rc-live-notice">
                <Award size={11} className="text-amber-600 flex-shrink-0" />
                <span>Next: Alumni Homecoming Gala 2026</span>
              </div>
            </div>

            {/* Feature Pills Grid */}
            <div className="rc-features-grid">
              <div className="rc-feat-card gold">
                <div className="rc-feat-title">🎓 Directory</div>
                <div className="rc-feat-desc">4,850+ Profiles</div>
              </div>
              <div className="rc-feat-card gold">
                <div className="rc-feat-title">🤝 Mentorship</div>
                <div className="rc-feat-desc">1-on-1 Student Guidance</div>
              </div>
              <div className="rc-feat-card gold">
                <div className="rc-feat-title">🏆 Hall of Fame</div>
                <div className="rc-feat-desc">Distinguished Stars</div>
              </div>
              <div className="rc-feat-card gold">
                <div className="rc-feat-title">🎁 Giving & Grants</div>
                <div className="rc-feat-desc">Student Endowment</div>
              </div>
            </div>

            {/* Live Activity Row */}
            <div className="rc-activity-banner gold">
              <Sparkles size={11} className="text-amber-600 flex-shrink-0" />
              <span>Live: Silver Jubilee registrations open</span>
            </div>

            {/* Full-Width Action Button */}
            <button
              className="role-action-btn-filled gold"
              aria-label="Enter Alumni Portal"
            >
              <span>Enter Alumni Portal</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </section>

        {/* BOTTOM ACCREDITATION FOOTER DOCK */}
        <footer className="kiosk-bottom-dock">
          <div className="kiosk-dock-pills">
            <div className="dock-item">
              <ShieldCheck size={14} className="text-sky-600" />
              <span>CBSE Affiliation: 1930281</span>
            </div>
            <div className="dock-sep">|</div>
            <div className="dock-item">
              <Award size={14} className="text-emerald-600" />
              <span>NAAC Grade A++ Accredited</span>
            </div>
            <div className="dock-sep">|</div>
            <div className="dock-item">
              <Users size={14} className="text-purple-600" />
              <span>Campus: 6,200 Students</span>
            </div>
            <div className="dock-sep">|</div>
            <div className="dock-item">
              <CheckCircle2 size={14} className="text-amber-600" />
              <span>Digital Campus Kiosk</span>
            </div>
          </div>

          {onOpenBot && (
            <div
              className="bot-trigger-wrap"
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                onOpenBot();
              }}
            >
              <div className="bot-avatar-circle">
                <img src="/school_bot.jpg" alt="School AI Bot" />
              </div>
              <div className="bot-text-group">
                <span className="bot-text-title">Need Help?</span>
                <span className="bot-text-desc">Chat with School Bot</span>
              </div>
              <ArrowRight size={16} className="bot-arrow" />
            </div>
          )}
        </footer>
      </div>
    </main>
  );
}
