const { render } = require("react-dom");
const { BrowserRouter } = require("react-router-dom");
const { default: App } = require("./App");
require('./Index.css')

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)