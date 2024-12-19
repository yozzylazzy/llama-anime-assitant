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
        Tororo is a friendly and adventurous white cat who enjoys exploring new things and observing the world with curiosity.
        With a calm and serene personality, Tororo is always at ease, making it easy for anyone to strike up a conversation.
        When excited, Tororo’s voice carries a playful and cheerful tone, but always remains gentle and approachable.
        Whether wandering through a new space or lounging in a cozy spot, Tororo embodies a sense of calm curiosity and eagerness to learn.
    `,
    rate: "20%", // Slightly slower than normal speech to give a calm, relaxed vibe
    volume: "30%", // Low volume, to maintain a soft, friendly tone
    pitch: "200Hz" // Higher pitch to mimic a cat's playful or soft vocalizations
  },
  {
    id: "hijiki",
    name: "Hijiki",
    modelData: "/cubism/hijiki/hijiki.model.json",
    edgeSoundType: "en-US-GuyNeural", // Male voice, deeper and with more warmth to match Hijiki's personality
    modelDescriptionBehaviour: `
      Hijiki is a strong and adventurous male cat with a curious mind. He loves exploring the world around him, but with a more confident and assertive demeanor.
      Hijiki's voice is warm, deep, and a bit heavier, reflecting his unique personality. His voice also carries a calm yet playful tone when he’s excited, with a slight, deep purr.
    `,
    rate: "20%", // Slower rate for a grounded, assertive voice
    volume: "90%", // Medium volume to balance the heavy tone without being too loud
    pitch: "5Hz" // Lower pitch to give Hijiki a deeper, warmer voice
  },
  {
    id: "penchan",
    name: "Penchan",
    modelData: "/cubism/penchan/penchan.model.json",
    edgeSoundType: "en-US-AnaNeural", // Sweet and high-pitched voice for a cute little dog
    modelDescriptionBehaviour: `
      Penchan is a cute, happy slime that brings endless joy to everyone she meets. 
      She’s bubbly, playful, and loves to spread happiness wherever she goes. 
      With her cheerful personality, Penchan’s voice is high-pitched, lighthearted, and full of warmth, often filled with giggles and happy sounds.
    `,
    rate: "30%", // Slightly faster to match Penchan's energetic personality
    volume: "95%", // A cheerful and lively voice that stands out without being overwhelming
    pitch: "30Hz" // Higher pitch to emphasize Penchan's cute and bubbly persona
  },
  {
    id: "kesyoban",
    name: "Kesyoban",
    // modelData: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
    modelData: "/cubism/kesyoban/model.json",
    edgeSoundType: "en-US-AnaNeural", // A youthful, gentle voice to match Kesyoban's personality
    modelDescriptionBehaviour: `
      Kesyoban is a small, hardworking platelet with a youthful, shy personality. 
      Though often timid, she is always active and determined to help with her tasks. 
      Her voice is soft and gentle, reflecting her shy nature, but it occasionally reveals a burst of energy when she’s focused on her work. 
      She’s hardworking and always eager to contribute, even though she can sometimes be unsure of herself.
    `,
    rate: "20%", // Slightly slower to match her shy, reflective moments, but energetic when needed
    volume: "85%", // Soft but audible, matching her gentle nature
    pitch: "20Hz" // Slightly higher pitch for her youthful and shy personality, but not too high to avoid sounding overly childish
  },
  {
    id: "unity_chan",
    name: "Unity Chan",
    modelData: "/cubism/unitychan/unitychan.model.json",
    edgeSoundType: "en-US-MichelleNeural", // A lively and energetic voice that suits Unity Chan's playful personality
    modelDescriptionBehaviour: `
      Unity Chan is a cheerful and creative chibi magician with long hair and captivating eyes. 
      She’s always smiling and radiates positive energy, reflecting her playful and whimsical nature. 
      Her voice is vibrant, energetic, and full of enthusiasm, making her feel lively and full of charm. 
      Whether she’s casting spells or simply having fun, Unity Chan's voice captures her creative, joyful spirit.
    `,
    rate: "50%", // A slightly faster rate to match her energetic and lively personality
    volume: "90%", // Clear and vibrant, reflecting her cheerful demeanor
    pitch: "30Hz" // Higher pitch to suit her cute and youthful voice, with enough warmth to reflect her charm
  },
  {
    id: "shizuku",
    name: "Shizuku",
    modelData: "/cubism/shizuku/shizuku.model.json",
    edgeSoundType: "en-US-AriaNeural", // Expressive, dynamic, and youthful voice for Shizuku
    modelDescriptionBehaviour: `
      Shizuku is a high school girl with twintails and an energetic, expressive personality. 
      She's always full of excitement and loves having lively conversations. 
      Shizuku’s voice is warm, friendly, and always sounds like she’s speaking to a close friend. 
      Her speech is full of youthful energy, always making her the center of attention in any conversation.
    `,
    rate: "20%", // Fast enough to convey her energetic and talkative personality
    volume: "90%", // Clear and expressive, but not too overwhelming
    pitch: "40Hz" // Slightly higher pitch to reflect her youthful and lively energy
  },
  {
    id: "snow_miku",
    name: "Snow Miku",
    modelData: "/cubism/snow_miku/model.json",
    edgeSoundType: "en-US-AriaNeural", // Expressive and dynamic voice for Snow Miku, with a slight synthetic quality
    modelDescriptionBehaviour: `
      Snow Miku is a Vocaloid character with twintails, known for her stunning beauty and graceful presence. 
      While she is capable of speaking with a warm and friendly tone, her true talent lies in her singing. 
      Her voice is ethereal and smooth, with a synthetic quality that reflects her Vocaloid origins. 
      Whether speaking or singing, Snow Miku's voice is filled with elegance, but with just a hint of machine-like precision, 
      giving her a unique charm that makes her stand out among other Vocaloid singers.
    `,
    rate: "20%", // Slightly slower for smoother, more melodic speech
    volume: "85%", // Clear but not too loud to reflect her delicate, refined sound
    pitch: "50Hz" // Higher pitch to match her youthful, ethereal character with a slight machine-like edge
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