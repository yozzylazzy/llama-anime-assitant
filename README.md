# PIXIE-PAL ASSISTANT
**Your smart assistant**, available locally or through the PixiePal Assistant website. In this era of rapid technological advancement, especially in Artificial Intelligence (AI), we are not being replaced but empowered with tools **to enhance our productivity and creativity**.

Having **a personal assistant**, particularly for coding, **can be costly**. Humans are not machines—we can't remember every syntax or nuance of programming languages (trust me, it's exhausting! 😂). **With the power of AI**, especially advanced Large Language Models (LLMs) ,**we can get fast, accurate responses without spending excessive time searching for answers**.

**PixiePal Assistant** is designed to be a cute and visually delightful AI companion that doesn't just provide functionality but also adds a touch of joy and personality to your daily interactions

## Planned Features

- **Customizable AI Character Assistants:** Select from a variety of characters with unique personalities, voices, and speaking styles.
- **Pleasant and Minimalist Design:** A simple yet visually comforting color palette for a seamless user experience.
- **Responsive Design:** Fully accessible on both mobile and desktop platforms.
- **Robust Language Models:** Leveraging Ollama for local deployment and OpenAI for the hosted version to provide a powerful conversational AI experience.
- **Fast Text-to-Speech (TTS):** Integrates Edge-TTS for quick and natural voice synthesis.
- **Adorable Character Animations:** Utilizes Live2D Cubism models to bring cute, engaging characters to life.

## Character Selection Interface

This project provides an interactive character selection interface, allowing users to choose from a variety of **preloaded 2D character models**. The models are rendered using **Pixi.js** and **Live2D**, delivering high-quality visuals and smooth animations for an immersive experience.

### Features

- **Dynamic Character Rendering**: Select a character, and the model is dynamically displayed in the center of the screen.
- R**esponsive Design**: The canvas automatically adjusts to the screen size, ensuring a seamless experience on any device.
- **Model Scaling**: Characters are dynamically scaled to fit the screen while maintaining high visual fidelity.
- **Interactive Selection**: Users can easily switch between different characters with just a click.

## Technologies Used

- **Pixi.js**: A fast 2D WebGL renderer to display and animate Live2D models.
- **Live2D**: Enables 2D models to move and react, creating a lifelike experience.
- **React**: For building the user interface and managing state.
- **TailwindCSS**: Provides responsive styling and clean layouts.
- **Vite**: A fast development environment for modern web projects.
- **Ollama**: For deploying LLMs locally.
- **OpenAI**: For hosted AI capabilities.
- **Edge-TTS**: Facilitates fast and natural text-to-speech synthesis.
- **Express**: Backend framework for API handling.
- **Node.js**: Server-side runtime environment.

## Acknowledgments
This project, **PixiePal Assistant**, would not have been possible without the open-source libraries, tutorials, and tools that supported its development. I **extend my heartfelt thanks to the incredible developer community for their contributions and knowledge sharing**.

Please note that **PixiePal Assistant is not intended for commercial use due to asset licensing agreements**. However, it is free to use for anyone looking for an adorable and functional smart AI assistant.

## How To Run Locally
There's some easy step to run this project locally: 
1. Clone this repository to your local folder using `git clone https://github.com/yozzylazzy/llama-anime-assitant.git`
2. Before we trying to install and run the project, you need to install Ollama first here [link](https://www.ollama.com/download)
3. Then you need to ensure your cmd know the ollama env. Why? because we need it to install all the LLM Model on Ollama Apps. For this project I'm using the open source Illama 3 (which have 8B params). Run `ollama run llama3`
4. Then we can continue on our PixiePal Assistant Project
5. Run `npm install` on this project folder
6. Run `npm run dev` to run on development mode using Vite + React (Port 5173)
7. There you go, now you can run the project locally, free (no need to pay the API for LLM), however the respond time still depends on your computer specification.

Need to know, this step doesn't include the edge-TTS. I'm divide the edge-TTS to the Backend Project of PIXIEPAL ASSISTANT. (The repository still private because of the untidy ENV)
Why i need to seperate this one? 
1. When i'm trying to publish on vercel, it can't detect as an express API, so it's just run as VITE + REACT project that vercel know
2. I don't know but i have try the custom run command on vercel, however this one doesn't working
3. The edge-TTS express API need a tmp folder for making the temporary audio file, so that's why i prefer to seperate it from the FrontEnd version.
4. I don't want to ruin the Vite + React framework structure, and yet, when you deploy an express BE to Vercel (as Serverless Function), it's still need some refactoring and adjustment so Vercel can know that it's an Express Rest API

And that's the reason for the seperated project of FE and BE of PixiePal Assistant, however, the response from the LLM doesn't disturbed by it, because the LLM API I'm trying fetching it from the FE itself (For further improvement i think it would be better on the BackEnd Project) 

And... because of the untidy of the ENV (because i'm making it on a hurry - why? MANY FAILED ATTEMPT I'M DOING ON THE PROJECT HAHAHA), The BE Project still in private, however if you insist on looking for it, I can add you as a collaborator, thanks for the understanding 😊

## Motivational Note

>***Great ideas don’t come with perfect timing**—they arise from curiosity and the persistence to bring them to life. **Through hard work**, countless iterations, and leveraging the power of the open-source community, **PixiePal Assistant has transformed from a simple concept to a reality**. Let this project inspire you to believe in your creativity, no matter how limited your time or resources may seem.*
