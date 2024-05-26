import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Solutions() {
  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon sx={{ marginLeft: '-8px' }} />}
      >
        Solutions
      </Button>
    </Box>
  )
}

export default Solutions