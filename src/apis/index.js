import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

/**
 * Lưu ý: Tại sao các function bên FE chỉ request và lấy data luôn, mà k có try catch để bắt lỗi
 * Lý do là ở phía front end chúng ta không cần thiết làm như vậy đối với mọi request bởi vì nó
 * sẽ gây ra việc thừa code try catch quá nhiều
 * Giải pháp Clean Code gọn gàng đó là chúng ta sẽ catch lỗi tập trung tại một nơi bằng cách tận dụng
 * một thứ cực kỳ mạnh mẽ trong axios đó là Interceptors
 * Hiểu đơn giản Interceptors là cách mà chúng ta sẽ đánh chặn vào giữa request hoặc response để xử lý
 * logic mà chúng ta muốn
 */

/* Board */
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/api/v1/boards/${boardId}`)
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.put(`${API_ROOT}/api/v1/boards/${boardId}`, updateData)
  return response.data
}

/* Column */
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}/api/v1/columns`, newColumnData)
  return response.data
}

/* Card */
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/api/v1/cards`, newCardData)
  return response.data
}