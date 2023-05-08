import { motion } from 'framer-motion'

import PhotoProfile from '../../assets/profile-remove-bg.png'
import Button from '../../components/Button'
import { fadeIn } from '../../variants'
import { Container, Image, ContainerItems } from './styles'

function About() {
  return (
    <Container id="sobre">
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        <Image src={PhotoProfile} alt="foto-perfil" />
      </motion.div>

      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        <ContainerItems>
          <h2>Sobre mim</h2>
          <p>
            Profissional apaixonado pela tecnologia, sempre buscando as melhores
            soluções e visando a mehor experiência do usuário. Atualmente sou
            Freelancer realizando projetos pessoais e de clientes, estou sempre
            em busca de aprendizado e desafios em que impulsiona a minha paixão
            pela resolução de problemas. Busco sempre ajudar as pessoas e
            apresentá-las ao mundo da tecnologia.
          </p>
          <Button>Entre em contato</Button>
        </ContainerItems>
      </motion.div>
    </Container>
  )
}

export default About
