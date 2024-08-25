import Layout from "./components/Layout"
import Home from './pages/Home'
import Members from "./pages/Members";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="members" element={<Members />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
