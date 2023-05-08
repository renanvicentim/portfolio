import { Container } from './styles'

function Button({ children, styles }) {
  return (
    <>
      {styles ? (
        <Container style={{ width: 120, borderRadius: 25, fontSize: 16 }}>
          {children}
        </Container>
      ) : (
        <Container>{children}</Container>
      )}
    </>
  )
}

export default Button
