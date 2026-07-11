import bgVidMp4 from '../videos/bg-vid-cut.mp4'

function BgVideo() {
  return (
    <>
      <figure className="video__bg">
        <video autoPlay loop muted playsInline>
          <source src={bgVidMp4} type="video/mp4"/>
        </video>
      </figure>
    </>
  )
}

export default BgVideo