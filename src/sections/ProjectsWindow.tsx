import empImg from '../assets/emp-logo1.svg'
import vdpImg from '../assets/vdp-logo1.svg'
import passgenImg from '../assets/passgen-logo1.svg'

function ProjectsWindow() {
  return (
    <>
      <section className="projects__window">
        <div className="projects__title">
          <h2 className="title">My works</h2>
          <a href="#" className='rainbow_link'>See More</a>
        </div>
        <div className="projects__images">
          <div className="project__photo">
            <a href="https://github.com/Dimekadze/EMP" target="_blank">
              <img src={empImg} alt="Easy Music Player"/>
              <div className="image__overlay">
                <p className="image__text">Easy Music Player</p>
              </div>
            </a>
          </div>

          <div className="project__photo">
            <a href="https://github.com/Dimekadze/VDP" target="_blank">
              <img src={vdpImg} alt="Vehicle Detection and Prediction"/>
              <div className="image__overlay">
                <p className="image__text">Vehicle Detection and Prediction</p>
              </div>
            </a>
          </div>

          <div className="project__photo">
            <a href="https://github.com/Dimekadze/PassGen" className="image__link" target="_blank">
              <img src={passgenImg} alt="Password Generator"/>
              <div className="image__overlay">
                <p className="image__text">Password Generator</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsWindow