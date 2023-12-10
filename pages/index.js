import Head from "next/head";
import Contact from "../components/Contact";
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

export default function Home() {
  return (
    <ChatProvider>
      <HideProvider>
        <ModalProvider>
          <Head>
            <title>Louis Muriuki MERN Full Stack Developer</title>
            <meta name="louis muriuki" content="louis muriuki's portfolio" />
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
          <div className="flex flex-col">
            <Main />
            <About />
            <Work />
            {/* {isClient && isMobile ? <div></div> : <Work />} */}
            <Skill />
            <Projects />
            <Contact />
            <Draggable >
              <div className="fixed z-50 bottom-1 right-0">
                <Floatingwindow />
              </div>
            </Draggable>
          </div>
        </ModalProvider>
      </HideProvider>
    </ChatProvider>
  );
}
