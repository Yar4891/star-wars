import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./components/utils/constants.js";
import {SWContext} from "./components/utils/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'mx-2'}>
            <SWContext value={{page, setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App
