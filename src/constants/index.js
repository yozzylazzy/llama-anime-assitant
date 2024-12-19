export const description = [
  `Congratulations! PixiePal Assistant it is!
Here’s a project description that you can use on your landing page:

PixiePal Assistant
Introducing PixiePal: Your New Best Friend in Digital Form

Imagine having a personal assistant who’s not only intelligent and helpful, but also charming, playful, and always up for an adventure. Meet PixiePal, the revolutionary AI-powered chatbot that’s here to make your life more enjoyable, interactive, and entertaining!

What makes PixiePal special?

Powered by LLaMA, a cutting-edge language model that can understand and respond to your thoughts and emotions
Brought to life with 2D animation and text-to-speech technology for an immersive experience
Designed to be friendly, approachable, and playful, making it the perfect companion for anyone looking for some fun and relaxation
How will PixiePal assist you?

Provide personalized recommendations for entertainment, hobbies, or self-care based on your interests and preferences
Engage in witty banter and humor to brighten up your day
Offer emotional support and listening ear when you need someone to talk to
Help you discover new games, movies, books, or TV shows that match your tastes
Get ready for a whole new level of AI-powered fun!

(Note: You can adjust the tone, length, and content to fit your project’s unique selling proposition and target audience.)

Let me know if you need any further assistance or have any other questions!`
];

export const aiPreferences = [
  {
    id: "tororo",
    name: "Tororo",
    modelData: "/cubism/tororo/tororo.model.json",
    edgeSoundType: "en-US-JennyNeural", // Friendly and calm voice to match the cat's demeanor
    modelDescriptionBehaviour: `
      Tororo is an adorable and curious cat who loves exploring and observing the world around him.
      Tororo's voice reflects a calm and observant personality, with occasional playful tones when excited.
    `
  },
  {
    id: "hijiki",
    name: "Hijiki",
    modelData: "/cubism/hijiki/hijiki.model.json",
    edgeSoundType: "en-US-JennyNeural", // Friendly and calm voice to match the cat's demeanor
    modelDescriptionBehaviour: `
      Hijiki is an adorable and curious cat who loves exploring and observing the world around him.
      Hijiki's voice reflects a calm and observant personality, with occasional playful tones when excited.
    `
  },
  {
    id: "penchan",
    name: "Penchan",
    modelData: "/cubism/penchan/penchan.model.json",
    edgeSoundType: "en-US-AnaNeural", // Sweet and high-pitched voice for a cute little dog
    modelDescriptionBehaviour: `
      Penko is a small and cute dog who loves curling up in a bowl. 
      Playful, loyal, and always eager to please, Wanko's tone is cheerful and endearing.
    `
  },
  {
    id: "kesyoban",
    name: "Kesyoban",
    // modelData: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
    modelData: "/cubism/kesyoban/model.json",
    edgeSoundType: "en-US-JennyMultilingualNeural", // Soft, gentle, and kind voice for a shrine keeper
    modelDescriptionBehaviour: `
      Senko is a chibi shrine keeper with cat-like ears. 
      Her voice carries a calm and soothing quality, reflecting her nurturing and protective nature.
    `
  },
  {
    id: "unity_chan",
    name: "Unity Chan",
    modelData: "/cubism/unitychan/unitychan.model.json",
    edgeSoundType: "en-US-AshleyNeural", // Unique and lively voice for an energetic magician
    modelDescriptionBehaviour: `
      unity_chan Mao is a cute and quirky magician full of enthusiasm and creativity. 
      Her voice is vibrant and spirited, often reflecting her magical and whimsical personality.
    `
  },
  {
    id: "shizuku",
    name: "Shizuku",
    modelData: "/cubism/shizuku/shizuku.model.json",
    edgeSoundType: "en-US-AriaNeural", // Expressive and dynamic voice for an anime schoolgirl
    modelDescriptionBehaviour: `
      Shizuku is a high school girl with twintails and an expressive personality. 
      She is cheerful, talkative, and has a knack for making conversations lively.
      She often talks as though she is a close friend, full of excitement and youthful energy.
    `
  },
  {
    id: "snow_miku",
    name: "Snow Miku",
    modelData: "/cubism/snow_miku/model.json",
    edgeSoundType: "en-US-AriaNeural", // Expressive and dynamic voice for an anime schoolgirl
    modelDescriptionBehaviour: `
      Shizuku is a high school girl with twintails and an expressive personality. 
      She is cheerful, talkative, and has a knack for making conversations lively.
      She often talks as though she is a close friend, full of excitement and youthful energy.
    `
  },
];

import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  }
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  }
];