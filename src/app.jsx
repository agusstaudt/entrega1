import './app.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// // you can import the whole pack.
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { ItemListContainer } from './components/itemListContainer'
import { NavBar } from './components/navBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
  )
}

export default App