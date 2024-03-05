import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '&:hover': {
    bgColor: 'primary.50'
  },
  '& .MuiSvgIcon-root': {
    color: 'white'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
        paddingX: 2,
        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip icon={<DashboardIcon />} label="NguyenDev Trello Dashboard"
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<VpnLockIcon />} label="Public/Private Workspace"
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<AddToDriveIcon />} label="Add To Google Drive+"
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<BoltIcon />} label="Automation"
          clickable
          sx={MENU_STYLES}
        />
        <Chip icon={<FilterListcon />} label="Filters"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup max={5} total={24}
          sx={{
            gap: '8px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='NguyenDev' sx={{ cursor: 'pointer' }}>
            <Avatar alt="NguyenDev" src='src/assets/userAvatar.jpg' />
          </Tooltip>
          <Tooltip title='VietDev' sx={{ cursor: 'pointer' }}>
            <Avatar alt="VietDev" src='src/assets/vietDev.jpg' />
          </Tooltip>
          <Tooltip title='ThienDev' sx={{ cursor: 'pointer' }}>
            <Avatar alt="ThienDev" src='src/assets/thienDev.jpg' />
          </Tooltip>
          <Tooltip title='GiaBaoDev' sx={{ cursor: 'pointer' }}>
            <Avatar alt="GiaBaoDev" src='src/assets/baoDev.jpg' />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
