export const projectData = [
  {
    title: "AR+AI CartOptics",
    description:
      "An AR app that identifies grocery items using computer vision and delivers real-time information through GenAI, paired with shopping utilities.",
    imageSrc: "/images/ArGlasses.jpg",
    // ✅ GitHub link will trigger the "View Code" button in the UI
    githubUrl: "https://github.com/kbeck473/CartOptics",
    technologies: [
      { name: "Unity", iconSrc: "mdi:unity" },
      { name: "csharp", iconSrc: "devicon:csharp" },
      { name: "Snapdragon", iconSrc: "simple-icons:snapdragon", sizeMultiplier: 0.8 },
      { name: "Onnx", iconSrc: "simple-icons:onnx", sizeMultiplier: 0.8 },
      { name: "GCP", iconSrc: "material-icon-theme:gcp", sizeMultiplier: 1 },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and modern portfolio built with React, Tailwind CSS, Next.js, and Radix UI. Features dynamic project cards, icon integration via Iconify, and a clean layout optimized for both learning and showcasing personal projects.",
    imageSrc: "/images/portfolio.png",
    // ✅ GitHub link will trigger the "View Code" button in the UI
    githubUrl: "https://github.com/yourusername/portfolio",
    technologies: [
      { name: "React", iconSrc: "logos:react" },
      { name: "Next.js", iconSrc: "logos:nextjs-icon" },
      { name: "Tailwind CSS", iconSrc: "logos:tailwindcss-icon" },
      { name: "Radix UI", iconSrc: "radix-icons:component-1" },
      { name: "Iconify", iconSrc: "simple-icons:iconify" },
    ],
  },
  {
    title: "3D Printed Home Server Rack",
    description:
      "A 3D printed 10\" server rack housing a home lab with a ProDesk 600 G2, Raspberry Pi 5, pfSense firewall, and a managed Netgear switch. Includes custom 3D printed brackets and mounts for compact hardware and airflow optimization. The rack supports virtualization (Proxmox),and local network services.",
    imageSrc: "/images/serverrack.png",
    // ❌ No GitHub link — the button will not render for this project
    technologies: [
      { name: "Proxmox", iconSrc: "simple-icons:proxmox", sizeMultiplier: 0.9 },
      { name: "pfSense", iconSrc: "simple-icons:pfsense", sizeMultiplier: 0.9 },
      { name: "Raspberry Pi", iconSrc: "logos:raspberry-pi" },
      { name: "3D Printing", iconSrc: "mdi:printer-3d" },
      { name: "Networking", iconSrc: "mdi:ethernet" },
    ],
  },

  {
    title: "CSUSM Fitness - Membership Management System",
    description:
      "A Java-based desktop application designed to manage user memberships for fitness facilities. It allows administrators to check users in/out, view member status, manage personal information, and monitor live occupancy. The system uses a MySQL database for persistent storage and is structured with a modular front-end/back-end separation using Java Swing for the UI.",
    imageSrc: "/images/csusmfitness.png", 
    githubUrl: "https://github.com/kbeck473/CSUSMFitness",
    technologies: [
      { name: "Java", iconSrc: "logos:java" },
      { name: "MySQL", iconSrc: "logos:mysql" }
 
    ],
  }
  
];
