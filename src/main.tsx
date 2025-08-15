import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router'
// import Login from './pages/auth/Login.tsx'
import ChattingPage from './pages/Dashboard/ChattingPage.tsx'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/auth/LoginPage.tsx'

const router = createBrowserRouter([
 {path: "/login", element: <LoginPage />},
 {path: "/", element: <ChattingPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </StrictMode>,
)
