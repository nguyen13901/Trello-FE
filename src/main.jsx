import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme'

// Cấu hình confirm MUI Dialog
import { ConfirmProvider } from 'material-ui-confirm'


// Set up react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CssVarsProvider theme={theme}>
    <ConfirmProvider>
      <CssBaseline />
      <App />
      <ToastContainer position='bottom-left' />
    </ConfirmProvider>
  </CssVarsProvider>
  // {/* </React.StrictMode> */ }
)
