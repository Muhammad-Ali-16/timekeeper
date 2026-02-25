import NavBar from "./components/layout/NavBar"
import TobBar from "./components/layout/TobBar"

function App() {
  return (
    <>
      <header className='header-main relative w-full px-4 shadow-md'>
        <div className="header-content-main max-w-7xl mx-auto">
          <TobBar />
          <NavBar />
        </div>
      </header>
      <main>

      </main>
    </>
  )
}

export default App