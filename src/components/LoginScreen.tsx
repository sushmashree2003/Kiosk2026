"use client";

import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Leaf,
  Star,
  Users,
} from "lucide-react";

export type RoleType = "student" | "staff" | "admin" | "alumni";

interface LoginScreenProps {
  role: RoleType;
  onLoginSuccess: () => void;
  onBackToKiosk: () => void;
  onSwitchRole: (newRole: RoleType) => void;
}

const roleConfig: Record<
  RoleType,
  {
    title: string;
    subtitle: string;
    defaultUser: string;
    userPlaceholder: string;
    roleBadge: string;
    accentColor: string;
  }
> = {
  staff: {
    title: "Staff Login",
    subtitle: "Welcome back! Sign in to continue.",
    defaultUser: "ramesh.kumar@gvps.edu",
    userPlaceholder: "Username / Staff ID",
    roleBadge: "Faculty & Staff",
    accentColor: "#059669",
  },
  student: {
    title: "Student & Parent Login",
    subtitle: "Welcome back! Sign in to view learning portal.",
    defaultUser: "GVPS-1023",
    userPlaceholder: "Admission No / Roll No",
    roleBadge: "Student & Parent",
    accentColor: "#0284c7",
  },
  admin: {
    title: "Administrator Login",
    subtitle: "Authorized school administrative access only.",
    defaultUser: "admin.director@gvps.edu",
    userPlaceholder: "Admin Username / Key",
    roleBadge: "School Management",
    accentColor: "#9333ea",
  },
  alumni: {
    title: "Alumni Portal Login",
    subtitle: "Stay connected with fellow GVians and chapters.",
    defaultUser: "rohan.sharma.2015",
    userPlaceholder: "Alumni ID / Email",
    roleBadge: "GVian Alumni",
    accentColor: "#ea580c",
  },
};

export default function LoginScreen({
  role,
  onLoginSuccess,
  onBackToKiosk,
  onSwitchRole,
}: LoginScreenProps) {
  const config = roleConfig[role];
  const [username, setUsername] = useState(config.defaultUser);
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess();
    }, 450);
  };

  const handleSecureAccess = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess();
    }, 350);
  };

  return (
    <div className="login-page-container">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div
        className="login-bg-layer"
        style={{ backgroundImage: `url('/login_bg.jpg')` }}
      />
      <div className="login-gradient-overlay" />

      {/* TOP HEADER */}
      <header className="login-top-navbar">
        <div className="login-school-logo" onClick={onBackToKiosk}>
          <div className="login-logo-mark">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
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
          <div className="login-school-names">
            <h1>Green Valley Public School</h1>
            <p>Learn • Grow • Excel</p>
          </div>
        </div>

        <div className="login-nav-right">
          <div className="login-motto-tag">
            <GraduationCap size={15} style={{ color: "#0c3558" }} />
            <span>Better Students | Brighter Future</span>
          </div>
          <button className="login-back-kiosk-pill" onClick={onBackToKiosk}>
            <ArrowLeft size={13} /> Back to Kiosk
          </button>
        </div>
      </header>

      {/* MAIN CENTER SPLIT */}
      <main className="login-center-content">
        {/* LEFT HERO TEXT & BRANDING */}
        <div className="login-left-hero">
          <span className="login-welcome-tag">WELCOME BACK</span>
          <h2 className="login-hero-headline">
            Same Purpose<br />
            <span className="login-hero-highlight">A Brighter Tomorrow</span>
          </h2>
          <div className="login-hero-line" />
          <p className="login-hero-subtext">
            Access your dashboard and continue making a difference.
          </p>

          {/* Quick Role Switcher Chips */}
          <div className="login-role-chips">
            <button
              className={`login-role-chip ${role === "staff" ? "active" : ""}`}
              onClick={() => {
                onSwitchRole("staff");
                setUsername(roleConfig.staff.defaultUser);
              }}
            >
              Staff
            </button>
            <button
              className={`login-role-chip ${role === "student" ? "active" : ""}`}
              onClick={() => {
                onSwitchRole("student");
                setUsername(roleConfig.student.defaultUser);
              }}
            >
              Student / Parent
            </button>
            <button
              className={`login-role-chip ${role === "admin" ? "active" : ""}`}
              onClick={() => {
                onSwitchRole("admin");
                setUsername(roleConfig.admin.defaultUser);
              }}
            >
              Admin
            </button>
            <button
              className={`login-role-chip ${role === "alumni" ? "active" : ""}`}
              onClick={() => {
                onSwitchRole("alumni");
                setUsername(roleConfig.alumni.defaultUser);
              }}
            >
              Alumni
            </button>
          </div>
        </div>

        {/* RIGHT GLASSMORPHIC LOGIN CARD */}
        <div className="login-glass-card">
          {/* Logo Crest Emblem */}
          <div className="login-card-crest">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
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

          <h3 className="login-card-title">{config.title}</h3>
          <p className="login-card-sub">{config.subtitle}</p>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Username Input */}
            <div className="login-input-group">
              <User size={16} className="login-input-icon" />
              <input
                type="text"
                className="login-input-field"
                placeholder={config.userPlaceholder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="login-input-group">
              <Lock size={16} className="login-input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                className="login-input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="login-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="login-remember-row">
              <label className="login-remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="login-forgot-link" onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </a>
            </div>

            {/* Primary Sign In Button */}
            <button
              type="submit"
              className="login-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Divider OR */}
            <div className="login-divider">
              <span className="login-divider-line" />
              <span className="login-divider-text">OR</span>
              <span className="login-divider-line" />
            </div>

            {/* Login with Secure Access Button */}
            <button
              type="button"
              className="login-secure-btn"
              onClick={handleSecureAccess}
              disabled={isSubmitting}
            >
              <ShieldCheck size={16} style={{ color: "#0284c7" }} />
              <span>Login with Secure Access</span>
            </button>
          </form>
        </div>
      </main>

      {/* BOTTOM DOCK VALUES & FOOTER */}
      <footer className="login-bottom-dock">
        <div className="login-dock-pill">
          <div className="login-dock-item">
            <div className="login-dock-icon" style={{ background: "#e0f2fe", color: "#0284c7" }}>
              <BookOpen size={14} />
            </div>
            <div className="login-dock-text">
              <span className="login-dock-bold">Learn</span>
              <span className="login-dock-sub">New Skills</span>
            </div>
          </div>

          <div className="login-dock-separator" />

          <div className="login-dock-item">
            <div className="login-dock-icon" style={{ background: "#dcfce7", color: "#16a34a" }}>
              <Leaf size={14} />
            </div>
            <div className="login-dock-text">
              <span className="login-dock-bold">Grow</span>
              <span className="login-dock-sub">With Confidence</span>
            </div>
          </div>

          <div className="login-dock-separator" />

          <div className="login-dock-item">
            <div className="login-dock-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
              <Star size={14} />
            </div>
            <div className="login-dock-text">
              <span className="login-dock-bold">Excel</span>
              <span className="login-dock-sub">In Life</span>
            </div>
          </div>

          <div className="login-dock-separator" />

          <div className="login-dock-item">
            <div className="login-dock-icon" style={{ background: "#fce7f3", color: "#db2777" }}>
              <Users size={14} />
            </div>
            <div className="login-dock-text">
              <span className="login-dock-bold">Collaborate</span>
              <span className="login-dock-sub">For a Better Future</span>
            </div>
          </div>
        </div>

        <div className="login-bottom-motto">
          — People | Knowledge | Possibilities
        </div>
      </footer>
    </div>
  );
}
