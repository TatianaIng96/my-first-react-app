import scarecrow from './assets/scarecrow.png'
import './App.css'

function App() {

  return (
    <>
     <div className='body'>
      <h3 className="primary-header">404 NOT FOUND</h3>
        <section>
          <div>
            <img src={scarecrow} />
          </div>

          <div>
            <h1 className="primary"> I have bad news for you</h1>
            <p className="secondary"> The page you are looking for might be removed or is temporarily unavailable</p>
            <button> BACK TO HOMEPAGE</button>
          </div>
        </section>
        <footer>
          <div className="attribution">
            Coded by <a href="#">Cristian Jimenez y Tatiana Cardona</a>.
          </div>    
        </footer>
     </div>
    </>
  )
}

export default App
