import './App.css'
import { Navigation } from './Navbar';
function App() {

  return (
    <>
    <Navigation />
    <div className='card flex flex-col items-center justify-items-center'>
      <h1 className="title">Kvack Cafe</h1>
      <img className='kvack' src="/kvack.png" />
    </div>
    </>
  )
}

export default App
