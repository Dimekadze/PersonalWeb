import dorianImg from '../assets/dorian2.webp'

function SelfWindow() {
  return (
    <>
      <section className="main-window">
        <div className="about">
          <h2 className="title">About me</h2>
          <p className="bio-text">21 y/o writing code, not poetry 🥀</p>
        </div>
        <div className="bio-info">
          <img src={dorianImg} alt="me" className="self-photo"/>
          <div className="bio-activity">
            <div className="bio-block">
              <h2>Moving in</h2>
              <hr className="bio-line"/>
            </div>
            <div className="bio-stack">
              <ul className="stack-list">
                <li>Data Analysis</li>
                <li>AI/ML</li>
                <li>CV</li>
              </ul>
              <ul className="stack-list">
                <li>Frontend</li>
                <li>UX/UI</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SelfWindow