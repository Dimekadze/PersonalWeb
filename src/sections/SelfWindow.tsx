import dorianImg from '../assets/dorian2.webp'

function SelfWindow() {
  return (
    <>
      <section className="main__window">
        <div className="about">
          <h2 className="title">About me</h2>
          <p className="bio__text">21 y/o writing code, not poetry 🥀</p>
        </div>
        <div className="bio__info">
          <img src={dorianImg} alt="me" className="self__photo"/>
          <div className="bio__activity">
            <div className="bio__block">
              <h2>Moving in</h2>
              <hr className="bio__line"/>
            </div>
            <div className="bio__stack">
              <ul className="stack__list">
                <li>Data Analysis</li>
                <li>AI/ML</li>
                <li>CV</li>
              </ul>
              <ul className="stack__list">
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