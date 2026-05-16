const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const words = [
  { text: "Photos", imgPath: "/images/ideas.svg" },
  { text: "Videos", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Moments", imgPath: "/images/code.svg" },
  { text: "Photos", imgPath: "/images/ideas.svg" },
  { text: "Videos", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Moments", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years Learning" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 500, suffix: "+", label: "Photos Taken" },
  { value: 100, suffix: "%", label: "Passion & Dedication" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Photography",
    desc: "প্রতিটি মুহূর্তকে ক্যামেরায় ধরে রাখি — আলো, ছায়া আর গল্পের মিশেলে।",
  },
  {
    imgPath: "/images/chat.png",
    title: "Web Design",
    desc: "HTML, CSS দিয়ে সুন্দর ও functional website তৈরি করি।",
  },
  {
    imgPath: "/images/time.png",
    title: "Creative Thinking",
    desc: "প্রতিটি কাজে নতুন আইডিয়া নিয়ে আসি — শেখা থেমে নেই।",
  },
];

const techStackImgs = [
  { name: "HTML & CSS", imgPath: "/images/logos/react.png" },
  { name: "JavaScript", imgPath: "/images/logos/python.svg" },
  { name: "Three.js", imgPath: "/images/logos/three.png" },
  { name: "Git & GitHub", imgPath: "/images/logos/git.svg" },
  { name: "Photography", imgPath: "/images/logos/node.png" },
];

const techStackIcons = [
  { name: "HTML & CSS", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "JavaScript", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Three.js", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Git & GitHub", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
  { name: "Node.js", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
];

const expCards = [
  {
    review: "নিজেই শিখছি, নিজেই বানাচ্ছি। প্রতিটি project আমার কাছে একটি নতুন অভিজ্ঞতা।",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer (Self-learning)",
    date: "2024 - Present",
    responsibilities: [
      "HTML, CSS ও JavaScript দিয়ে responsive website তৈরি করছি।",
      "GitHub-এ project host করা ও Netlify/Vercel-এ deploy করা শিখেছি।",
      "Three.js দিয়ে 3D interactive experience তৈরি করছি।",
    ],
  },
  {
    review: "Photography আমার আবেগ — প্রকৃতি, মানুষ আর মুহূর্তকে ধরে রাখি লেন্সে।",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Photographer",
    date: "2022 - Present",
    responsibilities: [
      "Portrait, landscape ও event photography করি।","Adobe Lightroom দিয়ে photo editing করি।",
      "নিজের portfolio website-এ কাজ showcase করছি।",
    ],
  },
  {
    review: "প্রতিটি নতুন tool শেখা আমাকে আরও এগিয়ে নিয়ে যায়।",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Creative Designer",
    date: "2023 - Present",
    responsibilities: [
      "Graphic design ও visual content তৈরি করি।",
      "Web-based tools দিয়ে cover ও banner design করি।",
      "Canva, Figma basics শিখছি।",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "মোঃ যুনাইদ খান",
    mentions: "@junaid.khan.097",
    review: "আমি বিশ্বাস করি — শেখার কোনো শেষ নেই। প্রতিদিন নতুন কিছু শিখছি, নতুন কিছু বানাচ্ছি।",
    imgPath: "/images/client1.png",
  },
  {
    name: "My Philosophy",
    mentions: "@junaidkhan",
    review: "ক্যামেরা হাতে নিলে দুনিয়াটা অন্যরকম দেখায়। আলো-ছায়ার খেলায় প্রতিটি মুহূর্ত অনন্য।",
    imgPath: "/images/client2.png",
  },
  {
    name: "My Goal",
    mentions: "@mdjunaidkhan097",
    review: "একদিন এমন website বানাব যা মানুষ দেখে অবাক হবে। সেই স্বপ্নই আমাকে এগিয়ে যেতে অনুপ্রাণিত করে।",
    imgPath: "/images/client3.png",
  },
];

const socialImgs = [
  { name: "fb", imgPath: "/images/fb.png", url: "https://www.facebook.com/Junaid.Khan.097" },
  { name: "insta", imgPath: "/images/insta.png", url: "#" },
  { name: "x", imgPath: "/images/x.png", url: "#" },
];

export {
  words, abilities, logoIconsList, counterItems,
  expCards, expLogos, testimonials, socialImgs,
  techStackIcons, techStackImgs, navLinks,
};
