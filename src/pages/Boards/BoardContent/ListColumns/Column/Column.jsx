import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'

function Column({ column, createNewCard, deleteColumnDetails }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable(
    {
      id: column?._id,
      data: { ...column },
      height: '100%'
      // Set height 100% để tránh bug flickering và phải boc div ngoài cùng, sau đó cho box ở bên trong tag listener
    })

  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined
  }


  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // Card đã được sắp xếp ở component cha
  // const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  const orderedCards = column?.cards

  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const [newCardTitle, setnewCardTitle] = useState('')

  const addNewCard = () => {
    if (!newCardTitle) {
      toast.error('Please enter card title!')
      return
    }

    // Tạo dữ liệu Column để gọi API
    const newCardData = {
      title: newCardTitle,
      columnId: column?._id
    }

    createNewCard(newCardData)

    // Đóng trạng thái thêm Column mới & Clear Input
    toggleOpenNewCardForm()
    setnewCardTitle('')
  }

  const confirmDeleteColumn = useConfirm()

  // Xử lý xóa column và cards ở bên trong nó
  const handleDeleteColumn = () => {
    confirmDeleteColumn({
      title: 'Delete Column?',
      description: 'This action permanently delete your Column and its Cards! Are you sure?'
    }).then(() => {
      /**
       * 
       */
      deleteColumnDetails(column._id)
    }).catch(() => { })
  }

  return (
    <div ref={setNodeRef} style={dndKitColumnStyles}{...attributes}>
      < Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }
        }
      >
        {/* Column Header */}
        <Box sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2
        }}>
          <Typography variant='h6'
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >{column?.title}</Typography>
          <Tooltip title='More options'>
            <ExpandMoreIcon
              sx={{
                color: 'text.primary',
                cursor: 'pointer'
              }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                onClick={toggleOpenNewCardForm}
              >Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive column</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleDeleteColumn}
            >
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        {/* List Card */}
        <ListCards cards={orderedCards} />
        {/* Column Footer */}
        <Box sx={{
          px: 2,
          height: (theme) => theme.trello.columnFooterHeight
        }}>
          {!openNewCardForm ?
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button startIcon={<AddCardIcon />} onClick={toggleOpenNewCardForm}>Add new card</Button>
              <Tooltip title='Drag to move'>
                <DragHandleIcon sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Box>
            :
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <TextField
                label="Enter card title..."
                type="text"
                size='small'
                variant='outlined'
                autoFocus
                data-no-dnd='true'
                value={newCardTitle}
                onChange={(event) => setnewCardTitle(event.target.value)}
                sx={{
                  '& label': { color: 'text.primary' },
                  '& input': {
                    color: (theme) => theme.palette.primary.main,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : 'white')
                  },
                  '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: (theme) => theme.palette.primary.main
                    },
                    '&:hover fieldset': {
                      borderColor: (theme) => theme.palette.primary.main
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: (theme) => theme.palette.primary.main
                    }
                  },
                  '& .MuiOutlinedInput-input': {
                    borderRadius: 1
                  }
                }}
              />
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Button
                  onClick={addNewCard}
                  variant='contained'
                  color='success'
                  size='small'
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                  }}
                >Add</Button>
                <CloseIcon
                  sx={{
                    color: (theme) => theme.palette.warning.light,
                    cursor: 'pointer'
                  }}
                  fontSize='small'
                  onClick={toggleOpenNewCardForm}
                />
              </Box>
            </Box>
          }
        </Box>
      </Box >
    </div>
  )
}

export default Column