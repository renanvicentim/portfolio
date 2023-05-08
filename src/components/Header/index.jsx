import { HiMenu } from 'react-icons/hi'

import { Container } from './styles'

function Header() {
  return (
    <Container>
      <p>
        Portfó<span>lio</span>
      </p>
      <ul>
        <li>
          <a className="link-menu" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="link-menu" href="#sobre">
            Sobre
          </a>
        </li>
        <li>
          <a className="link-menu" href="#projetos">
            Projetos
          </a>
        </li>
        <li>
          <a className="contact" href="#fale-comigo">
            Contato
          </a>
        </li>
      </ul>
      <div className="menu">
        <HiMenu />
      </div>
    </Container>
  )
}

export default Header
