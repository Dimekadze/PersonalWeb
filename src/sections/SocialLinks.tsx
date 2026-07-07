import { FaTelegramPlane, FaGithub, FaCodepen } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function SocialLinks() {
  return (
    <>
      <aside className="social-links">
        <a href="https://t.me/Dimekadze" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="social-link" size={42} />
        </a>
        
        <a href="https://github.com/Dimekadze" target="_blank" rel="noreferrer">
          <FaGithub className="social-link" size={42} />
        </a>
        
        <a href="https://codepen.io/Dimekadze" target="_blank" rel="noreferrer">
          <FaCodepen className="social-link" size={42} />
        </a>
        
        <a href="mailto:dimab8371@gmail.com" target="_blank" rel="noreferrer">
          <IoMdMail className="social-link" size={42} />
        </a>
      </aside>
    </>
  )
}

export default SocialLinks