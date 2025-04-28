export const projectData = [
  {
    title: "AR+AI CartOptics",
    description:
      "The AR Grocery Assistant is a Snapdragon Spaces-powered app built in Unity that uses YOLOv8 and Sentis to detect grocery items in real time through AR glasses. It overlays product information like price, nutrition, and allergens using GenAI, and lets users interact to add items to a persistent AR shopping cart. This creates a seamless, hands-free shopping experience that enhances decision-making and convenience.",
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
      "A 3D printed 10\" server rack housing a home lab with a ProDesk 600 G2, Raspberry Pi 5, pfSense firewall, and a managed Netgear switch. Includes 3D printed brackets and mounts for compact hardware. The rack supports virtualization (Proxmox),and local network services.",
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
      "A Java-based desktop application designed to manage user memberships for fitness facilities. It allows administrators to check users in/out, view member status, manage personal information, and monitor live occupancy. Go to the GitHub to learn more. ",
    imageSrc: "/images/csusmfitness.png", 
    githubUrl: "https://github.com/kbeck473/CSUSMFitness",
    technologies: [
      { name: "Java", iconSrc: "logos:java" },
      { name: "MySQL", iconSrc: "logos:mysql" }
 
    ],
  }
  
];
