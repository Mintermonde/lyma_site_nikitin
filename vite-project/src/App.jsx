import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Page1 from './Page/Page1/Page1'
import Footer from './components/Footer'
import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page1" index element={<Page1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
