import Container from '@mui/material/Container'
import LandingPageBar from './LandingPageBar'
import Section1 from './Section/Section1'

function LandingPage() {
  return (
    <Container
      disableGutters
      sx={{
        height: '100vh',
        minWidth: '100vw'
      }}
    >
      {/* HEADER */}
      <LandingPageBar />

      {/* BODY */}
      <Section1 />

    </Container>
  )
}

export default LandingPage