import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import Avatar from '@mui/material/Avatar'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          p={0}
          aria-controls={open ? 'basic-menu-Profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 30, height: 30 }}
            src='src/assets/userAvatar.jpg'
            alt='avatar'
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-Profile'
        }}
      >
        <MenuItem >
          <Avatar
            sx={{ width: 30, height: 30, mr: 2 }}
            src='src/assets/userAvatar.jpg'
            alt='avatar'
          />
          My Profile
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </Box>
  )
}

export default Profile
