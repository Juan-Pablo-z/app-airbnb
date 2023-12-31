import { Navbar } from "./components/Navbar"
import { Filters } from "./components/Filters"
import { Rentals } from "./components/Rentals"
import { Footer } from "./components/Footer"


function App() {
 
  return (
    <>
      {/* Navbar */}
        <Navbar />
      {/* Filters */}
      <div className="sm:mx-6 sm:w-fullmx-auto md:mx-10 lg:mx-10">
        <Filters />
      {/* Rentals */}
        <Rentals />
      </div>
      {/* Footer */}
      <Footer />
      
    </>
  )
}

export default App
