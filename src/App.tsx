import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { ThemeProvider } from 'styled-components'
import light from './themes/light'
import { EstiloGlobal, Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={light}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
