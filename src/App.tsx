import { useRef } from 'react';
import ScreenLoader from './components/ScreenLoader'
import BgVideo from './components/BgVideo'
import SelfWindow from './sections/SelfWindow';
import ProjectsWindow from './sections/ProjectsWindow';
import SocialLinks from './sections/SocialLinks';
import Logo from './components/Logo'
import './styles/App.scss'
import './styles/Mixins.scss'

function App() {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <>
      <ScreenLoader videoRef={mainVideoRef} />
      <main className="main">
        <BgVideo/>
        <h1 className="title__big">Good to see you, I'm Dima</h1>
        <div className="top__windows">
          <SelfWindow/>
          <ProjectsWindow/>
        </div>
        <SocialLinks/>
        <Logo/>
    </main>
    </>
  )
}

export default App
