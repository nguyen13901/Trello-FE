import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card({ showMedia }) {
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      {showMedia &&
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="src/assets/cardBackground.jpg"
        />
      }
      <CardContent
        sx={{
          p: 1.5, '&:last-child': { p: 1.5 }
        }}
      >
        {
          showMedia ?
            <Typography>NguyenPham Dev</Typography>
            : <Typography>Card 01</Typography>
        }
      </CardContent>
      {
        showMedia &&
        <CardActions sx={{ p: '0px 4px 8px 4px' }}>
          <Button size="small" startIcon={<GroupIcon />}>20</Button>
          <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
          <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
        </CardActions>
      }
    </MuiCard>
  )
}

export default Card