import { FaTelegramPlane, FaGithub, FaCodepen } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function SocialLinks() {
  return (
    <>
      <aside className="social__links">
        <a href="https://t.me/Dimekadze" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="social__link" size={42} />
        </a>
        
        <a href="https://github.com/Dimekadze" target="_blank" rel="noreferrer">
          <FaGithub className="social__link" size={42} />
        </a>
        
        <a href="https://codepen.io/Dimekadze" target="_blank" rel="noreferrer">
          <FaCodepen className="social__link" size={42} />
        </a>
        
        <a href="mailto:dimab8371@gmail.com" target="_blank" rel="noreferrer">
          <IoMdMail className="social__link" size={42} />
        </a>
      </aside>
    </>
  )
}

export default SocialLinks