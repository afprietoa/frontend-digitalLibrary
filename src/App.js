import React, { useState } from 'react'
import CardSubsc from './Components/CardSubsc'
import { Container } from "react-bootstrap";
import SearchBar from './Components/SearchBar';
import NavbarOffcanvas from './Components/NavbarOffcanvas';
import data from "./data/data"

const App = () => {

  const [institut, setInstitut] = useState(data)

  
  console.log(institut)
  return (
    <>
      <NavbarOffcanvas />
      <Container className="mt-5">
        <div className="title-main">
          <h2>Tus institutos (Sedes)</h2>
          <h4>4/5 sedes asignadas</h4>
        </div>

        <div className="box-aviso"><strong>Su subscripción finaliza el<br /> 22-09-15</strong></div>

        <div className="title-searcher"><h5>Filtra por institutos y podras ver los cursos asignados</h5></div>

        <SearchBar setInstitut = {setInstitut} />
        <CardSubsc institut={institut} />

      </Container>
    </>
  )
}

export default App

