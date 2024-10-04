import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import { HideProvider } from "../context/HideContext";
import Work from "../components/Work";
import Floatingwindow from "../components/FLoatingWindow/Floatingwindow";
import { ModalProvider } from "../context/modalContext";
import { ChatProvider } from "../context/ChatContext";
import Draggable from "react-draggable";
import { isMobile } from "react-device-detect";
export default function Home() {
  return (
    <ChatProvider>
      <HideProvider>
        <ModalProvider>
          <Head>
            <title>Louis Muriuki | Software Developer Portfolio</title>
            <meta
              name="description"
              content="About Louis Muriuki - React Native, Expo, and Next.js Developer
Louis Muriuki is an experienced software developer specializing in mobile app development with React Native and Expo, as well as web development using Next.js and React.js. With a strong focus on building user-friendly, high-performance applications, Louis has a proven track record of delivering production-ready mobile and web solutions.
Explore Louis' projects, technical skills, and professional work experience to see how he can help bring your next digital project to life."
            />
            <meta
              name="keywords"
              content="Louis Muriuki, senior software developer, software Engineer, React-Native developer, Mobile Engineer, Mobile development, web development, React Native, Expo, Next.js, React.js, Rust, Docker, Nginx, EC2, AWS, DevOps, CI/CD, Cashlet"
            />
            <meta name="author" content="Louis Muriuki" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              property="og:title"
              content="Louis Muriuki | Software Developer Portfolio"
            />
            <meta
              property="og:description"
              content="Explore the projects and skills of Louis Muriuki, a professional software developer."
            />
            <meta
              property="og:image"
              content="https://yourdomain.com/og-image.jpg"
            />
            <meta property="og:url" content="https://github.com/LouisMuriuki" />
            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            <link rel="canonical" href="https://louismuriuki.dev" />
            <link rel="icon" href="/Louis.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Kalam:wght@300&family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&family=Poppins&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <div className="flex flex-col ">
            <Main />
            <About />
            <Work />
            {/* {isClient && isMobile ? <div></div> : <Work />} */}
            <Skill />
            <Projects />
            {/* <Contact /> */}
            {isMobile ? (
              <div className="fixed z-50 bottom-1 right-0">
                <Floatingwindow />
              </div>
            ) : (
              <Draggable>
                <div className="fixed z-50 bottom-1 right-0">
                  <Floatingwindow />
                </div>
              </Draggable>
            )}
          </div>
        </ModalProvider>
      </HideProvider>
    </ChatProvider>
  );
}
