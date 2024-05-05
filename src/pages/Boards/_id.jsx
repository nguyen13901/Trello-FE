
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'

function Board() {

  const [board, setBoard] = useState(null)

  useEffect(() => {
    // Sử dụng react-router-dom để lấy chuẩn boardId từ Url về
    const boardId = '6637840f53e1651f893bdb0f'
    // call API
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board)
    })
  }, [])

  return (
    <Container disableGutters
      sx={{
        height: '100vh',
        minWidth: '100vw'
      }}
    >
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container >
  )
}

export default Board
