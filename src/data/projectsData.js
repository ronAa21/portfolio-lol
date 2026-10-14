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
    thumbnail: "https://via.placeholder.com/300x200/091428/F0E6D2?text=Project+7",
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
  // Add more software projects here if needed
];
