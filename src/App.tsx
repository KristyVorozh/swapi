import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Peoples from "./pages/Peoples";
import Favorites from "./pages/Favorites";
import PeoplesItem from "./pages/PeoplesItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Main />} path='*' index />
          <Route element={<Peoples />} path='/peoples' />
          <Route element={<PeoplesItem />} path='/peoples/:id' />
          <Route element={<Favorites />} path='/favorites' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
