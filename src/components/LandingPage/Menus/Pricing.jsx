import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Pricing() {
  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon sx={{ marginLeft: '-8px' }} />}
      >
        Pricing
      </Button>
    </Box>
  )
}

export default Pricing