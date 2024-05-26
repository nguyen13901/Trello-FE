import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Plans() {
  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon sx={{ marginLeft: '-8px' }} />}
      >
        Plans
      </Button>
    </Box>
  )
}

export default Plans