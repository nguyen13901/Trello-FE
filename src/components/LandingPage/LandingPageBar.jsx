import Box from '@mui/material/Box'
import { ReactComponent as TrelloIcon } from '~/assets/trello2.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { Button, Link, Typography } from '@mui/material'
import Features from './Menus/Features'
import Solutions from './Menus/Solutions'
import Plans from './Menus/Plans'
import Pricing from './Menus/Pricing'
import Resources from './Menus/Resources'

function LandingPageBar() {
  return (

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'static'
      }}
    >
      <Box
        sx={{
          width: '86%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex'
          }}
        >
          {/* Trello logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 2
            }}
          >
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              sx={{
                color: 'white',
                width: 'auto',
                height: 'auto'
              }}
            />

          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Features />
            <Solutions />
            <Plans />
            <Pricing />
            <Resources />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          <Box>
            <Button
              sx={{
                padding: '1rem 2rem'
              }}
            >Login</Button>
          </Box>
          <Box>
            <Button
              sx={{
                padding: '1rem 2rem'
              }}
              variant="contained"
            >Get Trello for free</Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: (theme) => theme.trello.appBarHeight,
          bgcolor: '#DEEBFF',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '0 4rem',
            gap: 0.5
          }}
        >
          <Typography>Accelerate your teams work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise!</Typography>
          <Link
            sx={{
              cursor: 'pointer'
            }}
          >Learn more.</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPageBar