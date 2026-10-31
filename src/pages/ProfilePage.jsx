import { useState, useEffect, useRef } from "react";
import { SquarePlay, CodeXml, Trophy, ShieldHalf, ShieldCheck, Certificate, FlagTriangleRight, X, ExternalLink, Download, Award, PhoneLog, MailDot, Link, GitMerge, Medal } from 'lucide-react';
import { projectsData, softwareProjects } from '../data/projectsData';

// ---- PROJECTS: Combined video and software projects ----
const PROJECTS = [
  // Software/Development Projects
  { 
    title: "Pet Adoption Management System", 
    type: "dev", 
    desc: "A comprehensive web application for managing pet adoption processes, connecting potential adopters with pets in need of homes.", 
    tags: ["React", "Node.js", "Express", "MongoDB"], 
    link: "https://pet-adoption-system-frontend.onrender.com/",
    image: "/src/visuals/pet-ad-icon.jpg"
  },
  { 
    title: "Threads Social Platform", 
    type: "dev", 
    desc: "A modern social media platform inspired by Threads, featuring real-time conversations and user interactions.", 
    tags: ["React", "Node.js", "MongoDB", "Socket.io"], 
    link: "#",
    image: "/src/visuals/threads-icon.jpg"
  },
  { 
    title: "Notes Website", 
    type: "dev", 
    desc: "Full-stack note-taking application with user authentication and database storage.", 
    tags: ["HTML/CSS", "JavaScript", "Node.js", "MySQL"], 
    link: "https://first-notes.onrender.com/index.html",
    image: "/src/visuals/notes-icon.jpg"
  },
  { 
    title: "Decision App", 
    type: "dev", 
    desc: "An interactive web application designed to help users make decisions through a simple and intuitive interface.", 
    tags: ["JavaScript", "HTML", "CSS"], 
    link: "https://github.com/ronAa21/Decision-app",
    image: "/src/visuals/decision-icon.jpg"
  },
  { 
    title: "Gutenverse Clone", 
    type: "dev", 
    desc: "A pixel-perfect clone showcasing advanced frontend development skills and attention to design detail.", 
    tags: ["HTML", "CSS"], 
    link: "https://gutenverse-clone-3q4z.vercel.app/",
    image: "/src/visuals/gutenverse-icon.png"
  },
  { 
    title: "About Me Page", 
    type: "dev", 
    desc: "A creative and interactive personal website showcasing frontend development skills with engaging animations.", 
    tags: ["HTML", "CSS"], 
    link: "https://about-me-website-five.vercel.app/",
    image: "/src/visuals/megacat-icon.png"
  },
  
  // Video Projects
  { 
    title: "Faceless YouTube Channel", 
    type: "video", 
    desc: "Automated content creation for faceless YouTube channel with voiceover, editing, and optimization.", 
    tags: ["Premiere Pro", "After Effects", "Content Strategy"], 
    link: "#",
    image: "/src/visuals/faceless-channel-pic.jpg",
    videoUrl: "/src/media/faceless-channel-vid.mp4"
  },
  { 
    title: "Typography Animation", 
    type: "video", 
    desc: "Dynamic text animations and kinetic typography showcasing motion design principles.", 
    tags: ["After Effects", "Motion Graphics"], 
    link: "#",
    image: "/src/visuals/typography-icon.jpg",
    videoUrl: "/src/media/typography.mp4"
  },
  { 
    title: "Transitional Effects", 
    type: "video", 
    desc: "Seamless transition pack with creative cuts and visual effects for professional video editing.", 
    tags: ["Premiere Pro", "DaVinci Resolve"], 
    link: "#",
    image: "/src/visuals/transitional-pic.jpg",
    videoUrl: "/src/media/transitional-vid.mp4"
  },
  { 
    title: "Lyric Video Production", 
    type: "video", 
    desc: "Synchronized lyric video with creative typography and visual elements matching the music rhythm.", 
    tags: ["After Effects", "Typography", "Music Sync"], 
    link: "#",
    videoUrl: "/src/media/lyric-vid.mp4"
  },
  { 
    title: "UGC Content Sample", 
    type: "video", 
    desc: "User-generated content style editing for authentic social media marketing campaigns.", 
    tags: ["Premiere Pro", "Mobile Editing"], 
    link: "#",
    image: "/src/visuals/ucg-pic.jpg",
    videoUrl: "/src/media/UGC-Sample.mp4"
  },
  { 
    title: "TikTok Ad Campaign", 
    type: "video", 
    desc: "Series of 15-second ads optimized for TikTok algorithm and trending formats.", 
    tags: ["Vertical Video", "Trend Analysis", "Fast-paced Editing"], 
    link: "#",
    image: "/src/visuals/tiktok-vid1.jpg"
  },
];

const CERTS = [
  { 
    name: "Film Making Contest - Virtual vs. Reality", 
    issuer: "QCU - League of Excellent Students in Information Technology", 
    year: "2025",
    image: "/src/visuals/cert-virtual-reality.png",
    pdfLink: "/src/visuals/cert-virtual-reality.png",
    description: "Certificate of Participation in 'Show IT to the World: A Film Making Contest of Stories Beyond the Screen'"
  },
  { 
    name: "Introduction to Cybersecurity", 
    issuer: "Cisco Networking Academy", 
    year: "2026",
    image: "/src/visuals/intro-cybersec.png", // temporary - replace with actual cert image
    pdfLink: "/src/visuals/cert-cybersecurity.pdf",
    description: "Completed comprehensive cybersecurity fundamentals course covering network security and cyber threats"
  },
  { 
    name: "CSS National Certificate II (NCII)", 
    issuer: "TESDA - Technical Education and Skills Development Authority", 
    year: "2025",
    image: "/src/visuals/ncii-img-placeholder.jpg", // temporary - replace with actual cert image
    pdfLink: "/src/visuals/ncII-ss.png",
    description: "National Certification for technical competency and skills assessment"
  },
  { 
    name: "Fundamentals of Python Programming", 
    issuer: "Data Analytics", 
    year: "2025",
    image: "/src/visuals/python-cert.png", // temporary - replace with actual cert image
    pdfLink: "/src/visuals/cert-nc-ii.pdf",
    description: "Advanced level national certification demonstrating technical proficiency"
  },
];

const RESUME = {
  summary: "Video editor and 4th-year IT student experienced in producing stick-figure explainer content and short-form videos using CapCut, Canva, ibisPaint, and AI tools (Gemini, Suno). Skilled at turning scripts into clear, engaging visuals. Technical background enables fast learning and efficient, repeatable workflows. Reliable, adaptable, and ready to deliver consistent output on deadline.",
  experience: [
    { 
      role: "Video Editor", 
      org: "Suno - Intern", 
      period: "Oct 2025 - Jun 2026", 
      points: [
        "Produced transitional content using Capcut to enhance storytelling",
        "Utilized AI in producing quality content particularly in generating music and story"
      ] 
    },
    { 
      role: "Animator / Stick-Figure / Stickman Animation", 
      org: "Freelancing (Trial)", 
      period: "Mar 2026", 
      points: [
        "Illustrated and animated stick-figure scenes to visualize historical events",
        "Translated scripts into scene-by-scene visuals under client conditions"
      ] 
    },
    { 
      role: "Chat Support", 
      org: "Synagie - Intern", 
      period: "Mar 2023 - Nov 2023", 
      points: [
        "Adjusted to a cyclical schedule, from night-shift to graveyard",
        "Gain knowledge in handling multiple inquiries, providing appropriate solutions"
      ] 
    },
    { 
      role: "Receptionist", 
      org: "Prince Jun Devt. Corp - Project-based", 
      period: "Jun 2026 - Aug 2026", 
      points: [
        "Collaborated with coworkers and assist clients",
        "Gain knowledge on strong communication and interpersonal skills",
        "Practiced performing well under pressure"
      ] 
    },
    { 
      role: "Full-stack Developer", 
      org: "Cloudwalk Inc. - Intern", 
      period: "Sept 2026 - Oct 2026", 
      points: [
        "Gained knowledge in deploying website on Git",
        "Able to learn new technologies"
      ] 
    },
  ],
  skills: [
    "JavaScript", "Python", "HTML/CSS", "React.js", "Node.js", "Express.js", "MySQL",
    "CapCut", "Canva", "ibisPaint", "Gemini", "Suno", "Claude", "Kiro",
    "REST APIs", "MVC Architecture", "GitHub", "Postman", "VS-Code"
  ],
  education: { 
    school: "Quezon City University", 
    detail: "Bachelor of Science in Information Technology, August 2023 - June 2027",
    note: "CRT - Scholarship Program"
  },
  projects: [
    {
      title: "Threads",
      tech: "JavaScript, Node.js, Express.js, MySQL",
      points: [
        "A web-application that allows customers to track their orders through a live-status update",
        "Integrated a live-chat feature similar to Messenger, ensuring smooth manager-customer communication",
        "Worked in both frontend, backend, and database during development phase"
      ]
    },
    {
      title: "E-ALS",
      tech: "React.js, Node.js, MySQL",
      points: [
        "An educational web-app designed for ALS student to identify whether they're qualified in partaking the A&E assessment test",
        "Worked with an actual client at DepEd during the planning and development phase"
      ]
    },
    {
      title: "Pet Adoption",
      tech: "React.js, Node.js, Express.js, MySQL, Python",
      points: [
        "A pet-adoption integrated with machine-learning, recommending pets based on user's test results",
        "UI designed similar to that of a dating-app, with swipe-left for rejection and right for adopting"
      ]
    }
  ],
  contact: {
    phone: "0926 444 6769",
    email: "aaronpagente19@gmail.com",
    github: "https://github.com/ronAa21",
    linkedin: "https://l1nk.dev/x87acis"
  }
};

const MODAL_META = {
  projects: { title: "Projects", sub: "Selected work in development and video" },
  certs: { title: "Certifications", sub: "Credentials and training" },
  resume: { title: "Resume", sub: "Experience, skills and education" },
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Spectral:wght@400;600&display=swap');

.ap-root {
  --ap-bg: #070d17; --ap-gold: #c8aa6e; --ap-gold-hi: #f0e6d2; --ap-teal: #0ac8b9;
  --ap-wine: #3b1526; --ap-wine-dark: #1a0b17;
  position: relative; width: 100%; height: 100vh; min-height: 640px; overflow: hidden;
  background: var(--ap-bg); color: var(--ap-gold-hi);
  font-family: "Spectral", Georgia, serif; box-sizing: border-box;
}
.ap-root *, .ap-root *::before, .ap-root *::after { box-sizing: border-box; }
.ap-label { font-family: "Cinzel", Georgia, serif; text-transform: uppercase; letter-spacing: .14em; }

.ap-stage { position: relative; height: 100%; display: grid; grid-template-columns: 290px 1fr; }
.ap-backdrop {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 38% 46% at 62% 30%, rgba(190,225,255,.55), rgba(70,130,190,.18) 55%, transparent 75%),
    radial-gradient(ellipse 60% 60% at 70% 40%, #14304a, transparent 70%),
    linear-gradient(180deg, #0a1626, var(--ap-bg) 85%);
}
.ap-backdrop::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 45%, var(--ap-bg) 92%); }
.ap-monogram {
  position: absolute; left: 62%; top: 30%; transform: translate(-50%, -50%);
  font-family: "Cinzel", serif; font-weight: 700; font-size: clamp(8rem, 22vw, 20rem);
  letter-spacing: .05em; color: rgba(240,230,210,.07); user-select: none;
}

.ap-card-wrap { position: relative; z-index: 2; padding: 14px 0 0 14px; }
.ap-card {
  position: relative; isolation: isolate; height: calc(100% - 100px); min-height: 520px;
  text-align: center; padding-top: 30px;
}
/* the banner "cloth": only this layer is rippled, so text stays crisp */
.ap-cloth {
  position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background: radial-gradient(ellipse at 50% 20%, #4a1a30, var(--ap-wine) 40%, var(--ap-wine-dark));
  border: 2px solid transparent;
  border-image: linear-gradient(180deg, #a2455a, #6a2a40 60%, #d3703a) 1;
  box-shadow: 0 0 40px rgba(0,0,0,.6), inset 0 0 40px rgba(0,0,0,.45);
  filter: url(#ap-wave);
}
.ap-level { display: inline-flex; align-items: center; gap: 6px; padding: 3px 14px; background: #061018; border: 1px solid #1b4c58; border-radius: 4px; font-family: "Cinzel", serif; font-weight: 700; font-size: .85rem; }
.ap-level i { width: 11px; height: 11px; border: 2px solid var(--ap-teal); border-right-color: transparent; border-radius: 50%; }
.ap-emblem-wrap { position: relative; width: 220px; height: 220px; margin: 14px auto 0; }
.ap-emblem { position: relative; z-index: 1; width: 220px; height: 220px; display: block; filter: drop-shadow(0 6px 14px rgba(0,0,0,.6)); animation: ap-breathe 3s ease-in-out infinite; }
@keyframes ap-breathe {
  0%, 100% { filter: drop-shadow(0 6px 14px rgba(0,0,0,.6)) drop-shadow(0 0 3px rgba(240,200,120,.15)); }
  50%      { filter: drop-shadow(0 6px 14px rgba(0,0,0,.6)) drop-shadow(0 0 16px rgba(255,215,130,.6)); }
}
.ap-name { font-family: "Cinzel", serif; font-weight: 700; font-size: 1.15rem; margin: 6px 0 4px; letter-spacing: .04em; }
.ap-title { color: #8d8a85; font-size: 1.05rem; margin: 0; }
.ap-badges { display: flex; justify-content: center; gap: 12px; margin-top: 26px; }
.ap-badge {
  width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center;
  background: radial-gradient(circle at 50% 35%, #1c4a58, #0a1f2a); border: 2px solid #8d7a4a;
  box-shadow: 0 0 0 2px #0a0f16, 0 4px 10px rgba(0,0,0,.5); transition: transform .2s, box-shadow .2s;
}
.ap-badge:hover { transform: translateY(-3px); box-shadow: 0 0 0 2px #0a0f16, 0 0 16px rgba(10,200,185,.5); }
.ap-badge svg { width: 26px; height: 26px; stroke: #bfe9ec; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.ap-crest { position: absolute; left: -12px; right: -12px; bottom: -42px; width: calc(100% + 24px); height: 90px; pointer-events: none; }
.ap-mini { position: absolute; left: 70px; bottom: -150px; display: flex; gap: 32px; color: #a8a49a; font-size: .8rem; text-align: center; }
.ap-mini svg { width: 26px; height: 26px; stroke: #cfd3d6; fill: none; stroke-width: 1.8; display: block; margin: 0 auto 4px; }

.ap-stats { position: absolute; z-index: 2; left: 330px; right: 24px; bottom: 24px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; text-align: center; align-items: start; }
.ap-stat h3 { margin: 0; font-size: .75rem; font-weight: 600; color: #cfc8b8; }
.ap-sub { font-family: "Cinzel", serif; font-size: .7rem; font-weight: 700; letter-spacing: .08em; margin-top: 4px; text-transform: uppercase; min-height: 1em; }
.ap-big { font-family: "Cinzel", serif; font-weight: 700; font-size: 1.7rem; height: 34px; line-height: 34px; }
.ap-ico { width: 110px; height: 110px; margin: 14px auto 0; display: block; transition: transform .25s, filter .25s; }
.ap-stat:hover .ap-ico { transform: translateY(-4px); filter: drop-shadow(0 0 12px rgba(200,170,110,.55)); }
.ap-stat.ap-muted .ap-ico { opacity: .35; }

.profile-back-btn {
  position: absolute; bottom: 24px; left: 24px; z-index: 10;
  padding: 12px 24px; background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--ap-gold); color: var(--ap-gold-hi);
  font-family: "Cinzel", serif; font-size: 0.9rem; font-weight: 600;
  letter-spacing: 0.05em; cursor: pointer; transition: all 0.3s ease;
}
.profile-back-btn:hover { background: var(--ap-gold); color: #000; transform: translateX(-4px); }

.ap-clickable { cursor: pointer; outline: none; }
.ap-clickable:focus-visible { outline: 1px solid var(--ap-gold); outline-offset: 6px; }
.ap-clickable:hover h3 { color: var(--ap-gold-hi); }

/* ---------- modal ---------- */
.ap-overlay {
  position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 24px;
  background: rgba(2, 6, 12, .8); backdrop-filter: blur(3px); animation: ap-fade .2s ease-out;
}
.ap-modal {
  position: relative; width: min(880px, 100%); max-height: min(84vh, 740px); display: flex; flex-direction: column;
  background: radial-gradient(ellipse at 50% 0%, #14304a, #0a1626 45%, #070d17);
  border: 2px solid transparent; border-image: linear-gradient(180deg, #c8aa6e, #5b4a24) 1;
  box-shadow: 0 0 60px rgba(0,0,0,.85), 0 0 30px rgba(200,170,110,.12); animation: ap-pop .25s cubic-bezier(.2,.8,.2,1);
}
.ap-modal-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding: 22px 28px 16px; border-bottom: 1px solid rgba(200,170,110,.28); }
.ap-modal-title { margin: 0; font-size: 1.25rem; font-weight: 700; color: var(--ap-gold-hi); }
.ap-modal-sub { margin: 4px 0 0; color: #8d8a85; font-size: .95rem; }
.ap-modal-close { background: #05090f; border: 1px solid #5b4a24; color: var(--ap-gold); width: 34px; height: 34px; display: grid; place-items: center; cursor: pointer; transition: background .2s, color .2s; }
.ap-modal-close:hover { background: var(--ap-gold); color: #000; }
.ap-modal-close:focus-visible { outline: 1px solid var(--ap-gold-hi); outline-offset: 3px; }
.ap-modal-body { overflow-y: auto; padding: 22px 28px 28px; scrollbar-width: thin; scrollbar-color: #5b4a24 transparent; }
@keyframes ap-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ap-pop { from { opacity: 0; transform: translateY(14px) scale(.97); } to { opacity: 1; transform: none; } }

.ap-filters { display: flex; gap: 10px; margin-bottom: 18px; flex-wrap: wrap; }
.ap-chip { background: none; border: 1px solid #3a3320; color: #a09b8c; padding: 7px 16px; font-family: "Cinzel", serif; font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; transition: all .2s; }
.ap-chip:hover { color: var(--ap-gold-hi); border-color: var(--ap-gold); }
.ap-chip[aria-pressed="true"] { color: var(--ap-gold-hi); border-color: var(--ap-gold); background: linear-gradient(90deg, rgba(200,170,110,.22), transparent); }

.ap-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
.ap-pcard { background: #0a1626; border: 1px solid #3a3320; transition: transform .2s, border-color .2s, box-shadow .2s; display: flex; flex-direction: column; }
.ap-pcard:hover { transform: translateY(-3px); border-color: var(--ap-gold); box-shadow: 0 0 18px rgba(200,170,110,.2); }
.ap-pthumb { height: 110px; display: grid; place-items: center; color: #bfe9ec; background: radial-gradient(circle at 50% 40%, #1c4a58, #0a1f2a); border-bottom: 1px solid #3a3320; background-size: cover; background-position: center; }
.ap-pbody { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.ap-ptitle { margin: 0; font-family: "Cinzel", serif; font-size: .95rem; letter-spacing: .04em; color: var(--ap-gold-hi); }
.ap-pbody p { margin: 0; color: #a8a49a; font-size: .92rem; line-height: 1.45; }
.ap-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.ap-tag { font-size: .72rem; padding: 2px 8px; color: #bfe9ec; border: 1px solid #1b4c58; background: #061018; }
.ap-link { margin-top: auto; padding-top: 6px; display: inline-flex; align-items: center; gap: 6px; color: var(--ap-gold); font-family: "Cinzel", serif; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; }
.ap-link:hover { color: var(--ap-gold-hi); }

.ap-cert { display: flex; align-items: center; gap: 16px; padding: 14px 16px; background: #0a1626; border: 1px solid #3a3320; transition: border-color .2s, transform .2s; }
.ap-cert + .ap-cert { margin-top: 12px; }
.ap-cert:hover { border-color: var(--ap-gold); transform: translateX(3px); }
.ap-cert-ico { width: 48px; height: 48px; flex: none; border-radius: 50%; display: grid; place-items: center; color: #bfe9ec; background: radial-gradient(circle at 50% 35%, #1c4a58, #0a1f2a); border: 2px solid #8d7a4a; }
.ap-cert-main { flex: 1; min-width: 0; }
.ap-cert-main h3 { margin: 0; font-family: "Cinzel", serif; font-size: .95rem; letter-spacing: .04em; }
.ap-cert-main span { color: #8d8a85; font-size: .9rem; }

.ap-resume { display: grid; grid-template-columns: 1.6fr 1fr; gap: 28px; }
.ap-rsec + .ap-rsec { margin-top: 22px; }
.ap-rsec h3 { margin: 0 0 10px; padding-bottom: 6px; border-bottom: 1px solid rgba(200,170,110,.25); font-size: .8rem; color: var(--ap-gold); }
.ap-rsec p { margin: 0; color: #cfc8b8; line-height: 1.55; }
.ap-job + .ap-job { margin-top: 14px; }
.ap-job strong { font-family: "Cinzel", serif; font-size: .92rem; letter-spacing: .04em; }
.ap-job em { display: block; color: #8d8a85; font-size: .88rem; font-style: normal; margin: 2px 0 6px; }
.ap-job ul { margin: 0; padding-left: 18px; color: #bdb7a8; font-size: .92rem; line-height: 1.5; }
.ap-btn { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; padding: 11px 20px; background: rgba(0,0,0,.7); border: 2px solid var(--ap-gold); color: var(--ap-gold-hi); font-family: "Cinzel", serif; font-size: .8rem; letter-spacing: .08em; text-transform: uppercase; text-decoration: none; transition: all .3s; }
.ap-btn:hover { background: var(--ap-gold); color: #000; }

@media (max-width: 900px) {
  .ap-root { height: auto; overflow: visible; }
  .ap-stage { grid-template-columns: 1fr; height: auto; }
  .ap-card-wrap { padding: 70px 16px 0; }
  .ap-card { height: auto; min-height: 0; padding-bottom: 90px; }
  .ap-mini { display: none; }
  .profile-back-btn { left: 50%; transform: translateX(-50%); bottom: 16px; }
  .profile-back-btn:hover { transform: translateX(-50%) translateY(-2px); }
  .ap-overlay { padding: 12px; }
  .ap-modal-head, .ap-modal-body { padding-left: 18px; padding-right: 18px; }
  .ap-resume { grid-template-columns: 1fr; }
  .ap-stats { position: relative; left: auto; right: auto; bottom: auto; grid-template-columns: repeat(2, 1fr); padding: 80px 16px 24px; }
}
@media (prefers-reduced-motion: reduce) { .ap-root * { transition: none !important; animation: none !important; } }
`;

export default function ProfileOverview({
  name = "Aaron Pagente",
  role = "Software Developer",
  level = 5,
  projects = 12,
  resumeUrl = "/src/visuals/Aaron-Pagente-Resume.pdf", // link to your resume PDF
  onBackClick,
}) {
  const [tab, setTab] = useState("Overview");
  const [animate, setAnimate] = useState(true);
  const [modal, setModal] = useState(null); // null | "projects" | "certs" | "resume"
  const [filter, setFilter] = useState("all");
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  // Esc closes the modal, focus moves into it and returns to the tile afterwards
  useEffect(() => {
    if (!modal) return;
    lastFocus.current = document.activeElement;
    closeRef.current && closeRef.current.focus();
    const onKey = (e) => e.key === "Escape" && setModal(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lastFocus.current && lastFocus.current.focus && lastFocus.current.focus();
    };
  }, [modal]);

  // makes a stat tile behave like a button
  const tile = (key) => ({
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    onClick: () => setModal(key),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setModal(key); }
    },
  });

  const shownProjects = PROJECTS.filter((p) => filter === "all" || p.type === filter);

  // respect "reduce motion": the banner stays still for those users
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // rotate around the icon centre (110,100); dir = 1 clockwise, -1 counter-clockwise
  const spin = (dur, dir = 1) =>
    animate && (
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={dir === 1 ? "0 110 100" : "360 110 100"}
        to={dir === 1 ? "360 110 100" : "0 110 100"}
        dur={dur}
        repeatCount="indefinite"
      />
    );

  return (
    <div className="ap-root">
      <style>{CSS}</style>

      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="ap-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f4dfa3" />
            <stop offset="1" stopColor="#8a6a2b" />
          </linearGradient>
          <linearGradient id="ap-wing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e9b865" />
            <stop offset=".5" stopColor="#8a4fd0" />
            <stop offset="1" stopColor="#e0434f" />
          </linearGradient>
          <linearGradient id="ap-ember" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffd27a" />
            <stop offset="1" stopColor="#d3481f" />
          </linearGradient>
          <radialGradient id="ap-icon-bg" cx="50%" cy="45%" r="65%">
            <stop offset="0" stopColor="#1f5a86" />
            <stop offset="1" stopColor="#081226" />
          </radialGradient>
          <radialGradient id="ap-icon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ffe9a8" stopOpacity=".85" />
            <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ap-sweepL" x1="0" y1="0" x2="1" y2="0">
            <stop offset=".3" stopColor="#fff" stopOpacity="0" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".85" />
            <stop offset=".7" stopColor="#fff" stopOpacity="0" />
            {animate && <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3.2s" repeatCount="indefinite" />}
          </linearGradient>
          <linearGradient id="ap-sweepR" x1="0" y1="0" x2="1" y2="0">
            <stop offset=".3" stopColor="#fff" stopOpacity="0" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".85" />
            <stop offset=".7" stopColor="#fff" stopOpacity="0" />
            {animate && <animateTransform attributeName="gradientTransform" type="translate" from="1 0" to="-1 0" dur="3.2s" repeatCount="indefinite" />}
          </linearGradient>
          <filter id="ap-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="ap-wave" x="-10%" y="-5%" width="120%" height="115%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.014" numOctaves="1" seed="3" result="noise">
              {animate && (
                <animate
                  attributeName="baseFrequency"
                  dur="4s"
                  values="0.006 0.014;0.009 0.019;0.006 0.014"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            {/* scale = ripple strength in px; raise for a stronger wave */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="ap-stage">
        <div className="ap-backdrop" />
        <div className="ap-monogram" aria-hidden="true">AP</div>

        <aside className="ap-card-wrap">
          <div className="ap-card">
            <div className="ap-cloth">
              <svg className="ap-crest" viewBox="0 0 290 90" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 10 Q40 20 90 48 L145 40 L200 48 Q250 20 290 10 Q250 60 175 82 L145 88 L115 82 Q40 60 0 10Z" fill="url(#ap-ember)" stroke="#f6c26b" strokeWidth="2" />
                <path d="M145 6 L162 44 L145 58 L128 44Z" fill="url(#ap-ember)" stroke="#fff0c2" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="ap-level"><i />{level}</span>

            <div className="ap-emblem-wrap">
            <svg className="ap-emblem" viewBox="0 0 220 220" aria-hidden="true">
              {/* wings: gentle sway + glow pulse (border animation) */}
              <g>
                {animate && <animateTransform attributeName="transform" type="rotate" values="0 74 128;-6 74 128;0 74 128" dur="2.4s" repeatCount="indefinite" />}
                <path d="M18 40 Q36 90 58 150 L74 122 Q50 90 18 40Z" fill="url(#ap-wing)" stroke="#f1d08a" strokeWidth="2">
                  {animate && <animate attributeName="opacity" values=".7;1;.7" dur="2.4s" repeatCount="indefinite" />}
                </path>
                <path d="M18 40 Q36 90 58 150 L74 122 Q50 90 18 40Z" fill="url(#ap-sweepL)" />
              </g>
              <g>
                {animate && <animateTransform attributeName="transform" type="rotate" values="0 146 128;6 146 128;0 146 128" dur="2.4s" repeatCount="indefinite" />}
                <path d="M202 40 Q184 90 162 150 L146 122 Q170 90 202 40Z" fill="url(#ap-wing)" stroke="#f1d08a" strokeWidth="2">
                  {animate && <animate attributeName="opacity" values=".7;1;.7" dur="2.4s" repeatCount="indefinite" />}
                </path>
                <path d="M202 40 Q184 90 162 150 L146 122 Q170 90 202 40Z" fill="url(#ap-sweepR)" />
              </g>

              {/* gem: colour shimmer + sparkle */}
              <path d="M70 150 Q110 120 150 150 L110 205Z" fill="#2b7bd8" stroke="url(#ap-gold)" strokeWidth="4">
                {animate && <animate attributeName="fill" values="#2b7bd8;#9ddcff;#2b7bd8" dur="2s" repeatCount="indefinite" />}
              </path>
              <path d="M110 128 L130 150 L110 198 L90 150Z" fill="#ffffff" opacity="0">
                {animate && <animate attributeName="opacity" values="0;.35;0" dur="2s" repeatCount="indefinite" />}
              </path>
              <path d="M110 160 L112 168 L120 170 L112 172 L110 180 L108 172 L100 170 L108 168Z" fill="#ffffff" opacity="0">
                {animate && <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />}
              </path>

              {/* ring: pulsing aura + gold base + two travelling glints each way */}
              <circle cx="110" cy="100" r="60" fill="none" stroke="#ffd98a" strokeWidth="9" opacity=".25" filter="url(#ap-glow)">
                {animate && <animate attributeName="opacity" values=".15;.6;.15" dur="2s" repeatCount="indefinite" />}
              </circle>
              <circle cx="110" cy="100" r="56" fill="none" stroke="url(#ap-gold)" strokeWidth="7" />
              <g filter="url(#ap-glow)">
                <circle cx="110" cy="100" r="56" fill="none" stroke="#fff6d0" strokeWidth="6" strokeLinecap="round" strokeDasharray="70 105.93 70 105.93">
                  {spin("3s", 1)}
                </circle>
              </g>
              <circle cx="110" cy="100" r="56" fill="none" stroke="#7ff0ea" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="26 149.93 26 149.93" opacity=".95">
                {spin("5s", -1)}
              </circle>

              {/* sparkles orbiting just outside the ring */}
              {[["6s", 1, 0], ["9s", -1, 0.9], ["7.5s", 1, 1.7]].map(([dur, dir, delay], i) => (
                <g key={i}>
                  <g transform="translate(110 38)">
                    <path d="M0 -5 L1.3 -1.3 L5 0 L1.3 1.3 L0 5 L-1.3 1.3 L-5 0 L-1.3 -1.3Z" fill="#fff3c4">
                      {animate && <animate attributeName="opacity" values=".2;1;.2" dur="1.2s" begin={`${delay}s`} repeatCount="indefinite" />}
                    </path>
                  </g>
                  {animate && (
                    <animateTransform attributeName="transform" type="rotate" from={dir === 1 ? `${i * 120} 110 100` : `${360 + i * 120} 110 100`} to={dir === 1 ? `${360 + i * 120} 110 100` : `${i * 120} 110 100`} dur={dur} repeatCount="indefinite" />
                  )}
                </g>
              ))}

              <circle cx="110" cy="100" r="47" fill="#2a1a12" stroke="#7a5a25" strokeWidth="2" />
              <clipPath id="ap-avatar"><circle cx="110" cy="100" r="46" /></clipPath>

              <g clipPath="url(#ap-avatar)">
                <rect x="60" y="50" width="100" height="100" fill="#35506b" />
                <ellipse cx="110" cy="148" rx="42" ry="30" fill="#14202e" />
                <circle cx="110" cy="94" r="22" fill="#c9a07a" />
                <path d="M86 90 Q90 66 112 68 Q134 66 134 90 Q124 78 110 80 Q96 78 86 90Z" fill="#1b1410" />
              </g>
            </svg>
            </div>

            <div className="ap-name">{name}</div>
            <p className="ap-title">{role}</p>

            <div className="ap-badges">
              <div className="ap-badge" title="Video editing">
                <SquarePlay />
              </div>
              <div className="ap-badge" title="Development">
                <CodeXml />
              </div>
            </div>

            <div className="ap-mini">
              <div>
                <svg viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="14" rx="2" /><path d="M12 11v6M9 14h6M9 3h6" /></svg>3
              </div>
              <div>
                <svg viewBox="0 0 24 24"><path d="M5 15l7-7 7 7M5 20l7-7 7 7" /></svg>
              </div>
              <div>
                <svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2M20 4v5h-5M4 20v-5h5" /></svg>1
              </div>
            </div>
          </div>
        </aside>

        <section className="ap-stats" aria-label="Profile stats">
          <div className="ap-stat">
            <h3 className="ap-label">Main Role</h3>
            <div className="ap-sub">Software Developer</div>
            <div className="ap-big" />
            <Trophy className="ap-ico" size={100} />
          </div>

          <div className="ap-stat">
            <h3 className="ap-label">Side Class</h3>
            <div className="ap-sub">Video Editor</div>
            <div className="ap-big" />
            <ShieldHalf className="ap-ico" size={100} />
          </div>

          <div className="ap-stat ap-clickable" {...tile("projects")}>
            <h3 className="ap-label">Projects</h3>
            <div className="ap-sub">Overall Projects</div>
            <div className="ap-big">{projects}</div>
            <ShieldCheck className="ap-ico" size={100} />
          </div>

          <div className="ap-stat ap-clickable" {...tile("certs")}>
            <h3 className="ap-label">Certifications</h3>
            <div className="ap-sub" />
            <div className="ap-big" />
            <Certificate className="ap-ico" size={100} />
          </div>

          <div className="ap-stat ap-clickable" {...tile("resume")}>
            <h3 className="ap-label">CV</h3>
            <div className="ap-sub">Resume</div>
            <div className="ap-big" />
            <FlagTriangleRight className="ap-ico" size={100} />
          </div>
        </section>

        <button className="profile-back-btn" onClick={onBackClick} aria-label="Back">
          ←
        </button>

        {modal && (
          <div className="ap-overlay" onMouseDown={(e) => e.target === e.currentTarget && setModal(null)}>
            <div className="ap-modal" role="dialog" aria-modal="true" aria-labelledby="ap-modal-title">
              <header className="ap-modal-head">
                <div>
                  <h2 id="ap-modal-title" className="ap-label ap-modal-title">{MODAL_META[modal].title}</h2>
                  <p className="ap-modal-sub">{MODAL_META[modal].sub}</p>
                </div>
                <button ref={closeRef} className="ap-modal-close" aria-label="Close" onClick={() => setModal(null)}>
                  <X size={18} />
                </button>
              </header>

              <div className="ap-modal-body">
                {modal === "projects" && (
                  <>
                    <div className="ap-filters">
                      {[["all", "All"], ["dev", "Development"], ["video", "Video"]].map(([k, label]) => (
                        <button key={k} className="ap-chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>{label}</button>
                      ))}
                    </div>
                    <div className="ap-grid">
                      {shownProjects.map((p) => (
                        <article className="ap-pcard" key={p.title}>
                          <div className="ap-pthumb" style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}>
                            {!p.image && (p.type === "dev" ? <CodeXml size={36} /> : <SquarePlay size={36} />)}
                          </div>
                          <div className="ap-pbody">
                            <h3 className="ap-ptitle">{p.title}</h3>
                            <p>{p.desc}</p>
                            <div className="ap-tags">{p.tags.map((t) => <span className="ap-tag" key={t}>{t}</span>)}</div>
                            {p.videoUrl ? (
                              <a className="ap-link" href={p.videoUrl} target="_blank" rel="noreferrer">Watch Video <SquarePlay size={13} /></a>
                            ) : (
                              <a className="ap-link" href={p.link} target="_blank" rel="noreferrer">View {p.type === "dev" ? "Live" : "Project"} <ExternalLink size={13} /></a>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </>
                )}

                {modal === "certs" && (
                  <div className="ap-grid">
                    {CERTS.map((c, i) => (
                      <article className="ap-pcard" key={i}>
                        <div className="ap-pthumb" style={{ 
                          backgroundImage: `url(${c.image})`, 
                          backgroundSize: 'cover', 
                          backgroundPosition: 'center',
                          height: '160px'
                        }}>
                        </div>
                        <div className="ap-pbody">
                          <h3 className="ap-ptitle">{c.name}</h3>
                          <p style={{ fontSize: '.88rem', marginBottom: '8px' }}>{c.issuer}</p>
                          <div className="ap-tags" style={{ marginBottom: '8px' }}>
                            <span className="ap-tag">
                              <Award size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                              {c.year}
                            </span>
                          </div>
                          <a className="ap-link" href={c.pdfLink} target="_blank" rel="noreferrer">
                            View Certificate <ExternalLink size={13} />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {modal === "resume" && (
                  <div className="ap-resume">
                    <div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Contact</h3>
                        <p style={{ fontSize: '.92rem', lineHeight: '1.8' }}>
                          <PhoneLog /> {RESUME.contact.phone}<br />
                          <MailDot /> {RESUME.contact.email}<br />
                          <GitMerge /> <a href={RESUME.contact.github} target="_blank" rel="noreferrer" style={{ color: 'var(--ap-gold)' }}>GitHub</a><br />
                          <Link /> <a href={"https://www.linkedin.com/in/aaron-philip-pagente-a606283a5"} target="_blank" rel="noreferrer" style={{ color: 'var(--ap-gold)' }}>LinkedIn</a>
                        </p>
                      </div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Summary</h3>
                        <p>{RESUME.summary}</p>
                      </div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Experience</h3>
                        {RESUME.experience.map((j) => (
                          <div className="ap-job" key={j.role + j.period}>
                            <strong>{j.role}</strong>
                            <em>{j.org} · {j.period}</em>
                            <ul>{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                          </div>
                        ))}
                      </div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Key Projects</h3>
                        {RESUME.projects.map((proj) => (
                          <div className="ap-job" key={proj.title}>
                            <strong>{proj.title}</strong>
                            <em>{proj.tech}</em>
                            <ul>{proj.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Technical Skills</h3>
                        <div className="ap-tags">{RESUME.skills.map((k) => <span className="ap-tag" key={k}>{k}</span>)}</div>
                      </div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Soft Skills</h3>
                        <div className="ap-tags">
                          {["Problem-solving", "Adaptable", "Collaborative", "Testing/Debugging", "Project Documentation"].map((k) => <span className="ap-tag" key={k}>{k}</span>)}
                        </div>
                      </div>
                      <div className="ap-rsec">
                        <h3 className="ap-label">Education</h3>
                        <p>
                          <strong>{RESUME.education.school}</strong><br />
                          {RESUME.education.detail}<br />
                          <span style={{ color: 'var(--ap-gold)', fontSize: '.9rem' }}><Medal /> {RESUME.education.note}</span>
                        </p>
                      </div>
                      <a className="ap-btn" href={resumeUrl} download target="_blank" rel="noreferrer">
                        <Download size={16} /> Download Resume
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}