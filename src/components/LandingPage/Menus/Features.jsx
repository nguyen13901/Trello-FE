import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Features() {
  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon sx={{ marginLeft: '-8px' }} />}
      >
        Features
      </Button>
    </Box>
  )
}

export default Features