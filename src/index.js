import ReactDOM from "react-dom"
import Button from "./components/emailButton.js"
import About from "./components/about.js"
import Interest from "./components/interests.js"
import Face from "./components/photo.js"
import Information from "./components/name.js"

function App() {
    return(
        <page>
            <Face />
            <Information />
            <Button />
            <About />
            <Interest />
        </page>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))