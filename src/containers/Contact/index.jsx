import { Container, ContainerItems, Inputs } from './styles'

function Contact() {
  return (
    <Container id="fale-comigo">
      <ContainerItems>
        <h5>Renan Vicentim</h5>
        <p>Para mais Informações</p>

        <Inputs>
          <div className="field">
            <div className="fields">
              <input
                className="field-name"
                type="text"
                placeholder="Nome"
                required
              />
            </div>
            <div className="fields">
              <input
                className="field-email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="fields">
              <textarea
                className="field-textarea"
                placeholder="Digite sua mensagem aqui..."
                required
              ></textarea>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </Inputs>
      </ContainerItems>
    </Container>
  )
}

export default Contact
