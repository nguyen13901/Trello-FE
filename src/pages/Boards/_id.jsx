
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mockData'

function Board() {
  return (
    <Container disableGutters
      sx={{
        height: '100vh',
        minWidth: '100vw'
      }}
    >
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container >
  )
}

export default Board
