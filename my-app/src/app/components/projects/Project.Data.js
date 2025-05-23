export const projectData = [
  {
    title: "AR+AI CartOptics",
    description:
      "An AR grocery assistant built with Unity and Snapdragon Spaces that uses YOLOv8 via Sentis to recognize products in real time. It overlays price, nutritional facts, and allergen information using generative AI, and lets users add items to a persistent AR shopping cart for a seamless, hands-free experience.",
    imageSrc: "/images/CartOptics.jpg",
    githubUrl: "https://github.com/kbeck473/CartOptics",
    technologies: [
      { name: "Unity", iconSrc: "mdi:unity" },
      { name: "C#", iconSrc: "devicon:csharp" },
      { name: "Snapdragon Spaces", iconSrc: "simple-icons:snapdragon", sizeMultiplier: 0.9 },
      { name: "ONNX", iconSrc: "simple-icons:onnx", sizeMultiplier: 0.8 },
      { name: "GCP", iconSrc: "material-icon-theme:gcp", sizeMultiplier: 1 },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive, modern portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. Features dynamic project cards, smooth animations, and a clean layout optimized for both desktop and mobile viewing.",
    imageSrc: "/images/portfolio.png",
    githubUrl: "https://github.com/yourusername/portfolio",
    technologies: [
      { name: "React", iconSrc: "logos:react" },
      { name: "Next.js", iconSrc: "logos:nextjs-icon" },
      { name: "Tailwind CSS", iconSrc: "logos:tailwindcss-icon" },
      { name: "Framer Motion", iconSrc: "simple-icons:framer" },
    ],
  },
  {
    title: "3D-Printed Home Server Rack",
    description:
      "A custom 10\" server rack, 3D-printed to house a ProDesk 600 G2, Raspberry Pi 5, pfSense firewall, and a Netgear smart switch. Designed for compact virtualization (via Proxmox) and reliable local network services, with tailor-made brackets and mounts.",
    imageSrc: "/images/serverrack.png",
    technologies: [
      { name: "Proxmox", iconSrc: "simple-icons:proxmox", sizeMultiplier: 0.9 },
      { name: "pfSense", iconSrc: "simple-icons:pfsense", sizeMultiplier: 0.9 },
      { name: "Raspberry Pi", iconSrc: "logos:raspberry-pi" },
      { name: "3D Printing", iconSrc: "mdi:printer-3d" },
      { name: "Networking", iconSrc: "mdi:ethernet" },
    ],
  },
  {
    title: "CSUSM Fitness – Membership Management",
    description:
      "A Java desktop application for fitness facility administrators. Manage member check-ins/outs, view status, edit personal details, and monitor real-time occupancy. Integrates MySQL for robust data storage and retrieval.",
    imageSrc: "/images/csusmfitness.png",
    githubUrl: "https://github.com/kbeck473/CSUSMFitness",
    technologies: [
      { name: "Java", iconSrc: "logos:java" },
      { name: "MySQL", iconSrc: "logos:mysql" },
    ],
  },
];
