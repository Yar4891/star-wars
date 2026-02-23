import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./components/utils/constants.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

  return (
      <div className={'mx-2'}>
          <Header changePage={setPage}/>
          <Main page={page}/>
          <Footer/>
      </div>
  )
}

export default App
