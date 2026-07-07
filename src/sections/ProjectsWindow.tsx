import empImg from '../assets/emp-logo1.svg'
import vdpImg from '../assets/vdp-logo1.svg'
import passgenImg from '../assets/passgen-logo1.svg'

function ProjectsWindow() {
  return (
    <>
      <section className="projects-window">
        <div className="projects-title">
          <h2 className="title">My works</h2>
          <p className="title-text">It Ain't Much But It's Honest Work</p>
        </div>
        <div className="projects-images">
          <div className="project-photo">
            <a href="https://github.com/Dimekadze/EMP" target="_blank">
              <img src={empImg} alt="Easy Music Player"/>
              <div className="image-overlay">
                <p className="image-text">Easy Music Player</p>
              </div>
            </a>
          </div>

          <div className="project-photo">
            <a href="https://github.com/Dimekadze/VDP" target="_blank">
              <img src={vdpImg} alt="Vehicle Detection and Prediction"/>
              <div className="image-overlay">
                <p className="image-text">Vehicle Detection and Prediction</p>
              </div>
            </a>
          </div>

          <div className="project-photo">
            <a href="https://github.com/Dimekadze/PassGen" className="image-link" target="_blank">
              <img src={passgenImg} alt="Password Generator"/>
              <div className="image-overlay">
                <p className="image-text">Password Generator</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsWindow