import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentHeader from './components/ResidentHeader'
import ResidentList from './components/ResidentList'
import { numbersPage } from './utils/handlePagination'
import { getRandomNumber } from './Utils/handleRandom'

const RESIDENTS_FORPAGE = 12;

function App() {
  //ESTADO QUE ALMACENA INFORMACIÓN DE LA LOCATION
  const [location, setLocation] = useState()
  //ESTADO QUE ALMACENA EL VALOR DEL INPUT NO CONTROLADO
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  //FUNCIÓN QUE SE EJECUTA EN EL SUBMIT DEL FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () => {
    // if(!location) return [];
    const maxLimit = page * RESIDENTS_FORPAGE;
    const minLimit = maxLimit - RESIDENTS_FORPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents;
  }

  //EFECTO QUE SE EJECUTA EN EL PRIMER RENDER Y CUANDO CAMBIA LA LOCATION
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <ResidentHeader />
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination setPage={setPage} location={location} RESIDENTS_FORPAGE={RESIDENTS_FORPAGE} />
      <ResidentList pagination={pagination} />
      <Pagination setPage={setPage} location={location} RESIDENTS_FORPAGE={RESIDENTS_FORPAGE} />
    </div>
  )
}

export default App
