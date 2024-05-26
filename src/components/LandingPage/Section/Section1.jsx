import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import OutlinedInput from '@mui/material/OutlinedInput'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Stack from '@mui/material/Stack'

function Section1() {
  return (
    <Box
      sx={{
        background: 'url(//images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266e…/white-wave-bg.svg) center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170)'
      }}
    >
      {/* background layer */}

      {/* content layer */}
      <Container >
        <Box>
          <Grid container wrap='no-wrap'>
            <Grid item xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2
              }}>
              <Stack
                sx={{
                  gap: 3
                }}
              >
                <Box>
                  <Typography variant='h3' sx={{ mb: 1, color: 'white' }}>Trello brings all your tasks, teammates, and tools together</Typography>
                  <Typography variant='h6' sx={{ color: 'white' }}>Keep everything in the same place—even if your team isn’t.</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    pt: 1
                  }}
                >
                  <OutlinedInput placeholder="Email" variant="outlined" sx={{ minWidth: '300px', background: 'white', borderRadius: 1 }} />
                  <Button variant='contained' sx={{ padding: '0.7rem 1rem 0.8rem' }}>Sign up - it’s free!</Button>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    cursor: 'pointer',
                    width: 'fit-content'
                  }}
                >
                  <Link sx={{ color: 'white' }}>Watch Video</Link>
                  <PlayCircleOutlineIcon sx={{ color: 'white' }} />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={7}
              sx={{
                position: 'relative',
                marginLeft: '-16.6667%',
                left: '16.6667%',
                pt: '8rem'
              }}
            >
              <CardMedia
                component="img"
                alt="section1"
                width="633"
                height="559"
                overflowX="auto"
                image="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
              />
            </Grid>
          </Grid>
          <Box></Box>
        </Box>
      </Container >
    </Box >
  )
}

export default Section1