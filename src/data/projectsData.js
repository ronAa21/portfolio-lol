// Portfolio Projects Data
// Replace this placeholder data with your actual projects

export const projectsData = [
  {
    id: 1,
    title: "Epic Gaming Montage",
    category: "mid", // cinematic
    thumbnail: "https://via.placeholder.com/300x200/0A323C/C8AA6E?text=Project+1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A cinematic montage showcasing high-level gameplay moments with dramatic music and effects.",
    software: ["Adobe Premiere Pro", "After Effects"],
    techniques: ["Color Grading", "Motion Graphics", "Sound Design"],
    duration: "3:45",
    role: "Lead Editor",
    client: "Gaming Channel",
    featured: true
  },
  {
    id: 2,
    title: "Product Launch Video",
    category: "bot", // short-form
    thumbnail: "https://via.placeholder.com/300x200/091428/F0E6D2?text=Project+2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "30-second product reveal optimized for social media platforms with punchy transitions.",
    software: ["DaVinci Resolve", "Adobe After Effects"],
    techniques: ["Fast-paced Editing", "Typography Animation", "Color Correction"],
    duration: "0:30",
    role: "Video Editor",
    client: "Tech Startup",
    featured: true
  },
  {
    id: 3,
    title: "Documentary Series Ep. 1",
    category: "top", // long-form
    thumbnail: "https://via.placeholder.com/300x200/1E282D/C8AA6E?text=Project+3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "First episode of a documentary series about urban exploration. Storytelling-focused edit.",
    software: ["Adobe Premiere Pro", "Adobe Audition"],
    techniques: ["Narrative Editing", "Audio Mixing", "Color Grading"],
    duration: "15:20",
    role: "Editor & Colorist",
    client: "Documentary Channel",
    featured: false
  },
  {
    id: 4,
    title: "Brand Identity Animation",
    category: "support", // motion graphics
    thumbnail: "https://via.placeholder.com/300x200/0397AB/F0E6D2?text=Project+4",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Animated logo reveal and brand identity package for a creative agency.",
    software: ["Adobe After Effects", "Cinema 4D"],
    techniques: ["3D Animation", "Motion Design", "Visual Effects"],
    duration: "0:15",
    role: "Motion Designer",
    client: "Creative Agency",
    featured: true
  },
  {
    id: 5,
    title: "Experimental Art Film",
    category: "jungle", // creative
    thumbnail: "https://via.placeholder.com/300x200/010A13/785A28?text=Project+5",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Abstract visual storytelling piece exploring themes of time and memory.",
    software: ["DaVinci Resolve", "Adobe Premiere Pro"],
    techniques: ["Experimental Editing", "VFX", "Sound Design"],
    duration: "4:12",
    role: "Director & Editor",
    client: "Personal Project",
    featured: false
  },
  {
    id: 6,
    title: "Corporate Event Highlights",
    category: "mid", // cinematic
    thumbnail: "https://via.placeholder.com/300x200/0A323C/C8AA6E?text=Project+6",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Professional event coverage with cinematic b-roll and testimonials.",
    software: ["Adobe Premiere Pro", "Adobe Audition"],
    techniques: ["Multi-cam Editing", "Color Correction", "Audio Mixing"],
    duration: "5:30",
    role: "Video Editor",
    client: "Fortune 500 Company",
    featured: false
  },
  {
    id: 7,
    title: "TikTok Ad Campaign",
    category: "bot", // short-form
    thumbnail: "/src/visuals/tiktok-vid1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Series of 15-second ads optimized for TikTok algorithm and trending formats.",
    software: ["Adobe Premiere Pro", "After Effects"],
    techniques: ["Vertical Video", "Trend Analysis", "Hook Creation"],
    duration: "0:15",
    role: "Social Media Editor",
    client: "Fashion Brand",
    featured: true
  },
  {
    id: 8,
    title: "Music Video",
    category: "mid", // cinematic
    thumbnail: "https://via.placeholder.com/300x200/1E282D/C8AA6E?text=Project+8",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Narrative-driven music video with performance footage and storytelling elements.",
    software: ["DaVinci Resolve", "After Effects"],
    techniques: ["Rhythm Editing", "Color Grading", "VFX"],
    duration: "3:28",
    role: "Editor & Colorist",
    client: "Independent Artist",
    featured: false
  }
];

// Category display names
export const categories = {
  top: {
    name: "LONG-FORM EDITING",
    description: "YouTube videos, documentaries, educational content",
    icon: "⚔️"
  },
  jungle: {
    name: "CREATIVE PROJECTS",
    description: "Experimental videos, creative storytelling, concept pieces",
    icon: "🌿"
  },
  mid: {
    name: "CINEMATIC EDITING",
    description: "Cinematic montages, trailers, gaming cinematics",
    icon: "⚡"
  },
  bot: {
    name: "SHORT-FORM CONTENT",
    description: "TikTok, Instagram Reels, YouTube Shorts, ads",
    icon: "🎯"
  },
  support: {
    name: "MOTION GRAPHICS",
    description: "Motion graphics, visual effects, animated graphics",
    icon: "✨"
  }
};

// Software projects (if applicable)
export const softwareProjects = [
  {
    id: 101,
    title: "Portfolio Website",
    category: "web",
    thumbnail: "https://via.placeholder.com/300x200/0A323C/C8AA6E?text=Software+1",
    description: "This interactive League of Legends-inspired portfolio website built with React.",
    technologies: ["React", "CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true
  },
  {
    id: 102,
    title: "Pet Adoption Management System",
    category: "fullstack",
    thumbnail: "/src/visuals/pet-ad-icon.jpg",
    description: "A comprehensive web application for managing pet adoption processes, connecting potential adopters with pets in need of homes. Features include pet listings, user authentication, adoption applications, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://pet-adoption-system-frontend.onrender.com/",
    githubUrl: "https://github.com/ronAa21/Pet-Adoption-System",
    featured: true
  },
  {
    id: 103,
    title: "Notes",
    category: "fullstack",
    thumbnail: "/src/visuals/notes-icon.jpg",
    backgroundImage: "/src/visuals/notes-pic.png",
    description: "For learning purposes",
    technologies: ["HTML/CSS", "JavaScript", "Node.js", "MySQL"],
    liveUrl: "https://first-notes.onrender.com/index.html",
    githubUrl: "https://github.com/ronAa21/Notes-Website",
    featured: true
  },
  {
    id: 104,
    title: "Decision App",
    category: "fullstack",
    thumbnail: "/src/visuals/decisionSS.png",
    description: "An interactive web application designed to help users make decisions through a simple and intuitive interface. Features random decision generation and user-friendly interactions.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/ronAa21/Decision-app",
    featured: true
  },
  {
    id: 105,
    title: "About Me Page",
    category: "frontend",
    thumbnail: "/src/visuals/megacat.png",
    description: "A creative and interactive personal about me website showcasing frontend development skills. Features engaging animations, modern design principles, and responsive layout.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://about-me-website-five.vercel.app/",
    githubUrl: "https://github.com/ronAa21/About-me-website",
    featured: true
  },
  {
    id: 106,
    title: "Gutenverse Clone",
    category: "frontend",
    thumbnail: "/src/visuals/gutenverse.png",
    description: "A pixel-perfect clone of the Gutenverse website showcasing advanced frontend development skills. Features modern design implementation, responsive layouts, and attention to detail in recreating the original design.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://gutenverse-clone-3q4z.vercel.app/",
    githubUrl: "https://github.com/ronAa21/Gutenverse-Clone-",
    featured: true
  },
  {
    id: 107,
    title: "Threads Social Platform",
    category: "fullstack",
    thumbnail: "/src/visuals/threads-pic.png",
    backgroundImage: "/src/visuals/threads-pic.png",
    description: "A modern social media platform inspired by Threads, featuring real-time conversations, user interactions, and a sleek interface. Built with focus on performance and user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 108,
    title: "Pet Adoption",
    category: "fullstack",
    thumbnail: "/src/visuals/pet-ad-icon.jpg",
    backgroundImage: "/src/visuals/pet-ad.png",
    description: "My first ML-integrated project",
    technologies: ["React", "JavaScript", "Node.js", "MySQL", "Python"],
    software: ["Final Cut Pro"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  // Add more software projects here if needed
];
