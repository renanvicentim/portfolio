import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

import Curriculo from '../../assets/Currículo-Full-Stack-Renan-Vicentim- Att.pdf'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import PhotoProfile from '../../assets/profile-finish.png'
import Telefone from '../../assets/telefone.png'
import Button from '../../components/Button'
import { fadeIn } from '../../variants'
import { Container, Name, Image, Profile, Social } from './styles'

function Home() {
  return (
    <Container id="home">
      <Profile>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          <Name>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Renan <span>Vicentim</span>
            </motion.h1>
            <motion.h3
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Programador {/* <span>Full Stack</span> */}
              <TypeAnimation
                sequence={[
                  'Front End',
                  2000,
                  'Back End',
                  2000,
                  'Full Stack',
                  2000
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.h3>
          </Name>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <a href={Curriculo} download="Currículo Renan Vicentim">
              <Button>Download CV</Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src={PhotoProfile} />
        </motion.div>
      </Profile>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        /* viewport={{ once: false, amount: 0.7 }} */
      >
        <Social>
          <a
            href="https://www.linkedin.com/in/renanvicentim"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5511995995912&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Telefone} alt="" />
          </a>
          <a
            href="https://github.com/renanvicentim"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
        </Social>
      </motion.div>
    </Container>
  )
}

export default Home
