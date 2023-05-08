import ConvertMoney from '../../assets/convertmoney.png'
import GodOfWar from '../../assets/godofwar.png'
import LoginUsers from '../../assets/loginusers.png'
/* import Netflix from '../../assets/netflixback.png' */
import TerminalBurger from '../../assets/TB.png'
import ToDoList from '../../assets/TodoList.png'
import WheaterClimate from '../../assets/wheaterclimate.png'
import { Container, ContainerItems, Cards, Card } from './styles'

function Projects() {
  return (
    <Container id="projetos">
      <ContainerItems>
        <h2>Principais Projetos</h2>

        <Cards>
          <Card>
            <a
              href="https://github.com/renanvicentim/terminal-burger-interface"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TerminalBurger} />
              <div>Terminal Burger</div>
            </a>
          </Card>

          <Card>
            <a
              href="https://weather-climate.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WheaterClimate} />
              <div>Wheater Climate</div>
            </a>
          </Card>

          <Card>
            <a
              href="https://list-doto.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ToDoList} />
              <div>ToDoList</div>
            </a>
          </Card>
        </Cards>

        <Cards style={{ marginTop: 60 }}>
          <Card>
            <a
              href="https://convertmoney0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ConvertMoney} />
              <div>Conversor de Moedas</div>
            </a>
          </Card>

          <Card>
            <a
              href="https://login-users0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LoginUsers} />
              <div>Login de Usuários</div>
            </a>
          </Card>

          <Card>
            <a
              href="https://god-of-war0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GodOfWar} style={{ width: '115%' }} />
              <div>Landing Page God Of War</div>
            </a>
          </Card>
        </Cards>
      </ContainerItems>
    </Container>
  )
}

export default Projects
