import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Resources() {
  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon sx={{ marginLeft: '-8px' }} />}
      >
        Resources
      </Button>
    </Box>
  )
}

export default Resources