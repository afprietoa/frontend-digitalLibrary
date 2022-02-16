
import React from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";
import graduation from "../assets/iconos/birrete.svg";
import user from "../assets/iconos/usuario.svg";
import book from "../assets/iconos/libro.svg"
import teacher from "../assets/iconos/carita-redonda.svg"
import statistics from "../assets/iconos/estadisticas-barra.png"


const CardSubsc = ({institut}) => {

  console.log(institut)

  return (
    <div className="container-cards">
    {
      institut.map((institute,idx)=>(

        <Card key={idx} style={{ width: "30rem", margin: '1rem' }} className=" card text-black ">
        <Card.Header className="card__header text-center" style={{ background: institute.color }} >Sede primaria {institute.nombre}</Card.Header>
        <Card.Body>

          <Row className="m-2">
            <Col>
              <Card.Text>
              <img className="icon" src={graduation} alt="..."/> {institute.cursos.length} cursos
                </Card.Text>
            </Col>
            <Col>
              
              <Card.Text className="more-info">ver todos</Card.Text>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Card.Text>
              <img className="icon" src={user} alt="..."/> {institute.estudiantes.length} estudiantes
                </Card.Text>
            </Col>
            <Col>
              
              <Card.Text className="more-info">ver todos</Card.Text>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Card.Text>
              <img className="icon" src={book} alt="..."/> {institute.librosAsignados} libros asignados
                </Card.Text>
            </Col>
            <Col>
              
              <Card.Text className="more-info">ver todos</Card.Text>
            </Col>
          </Row>
          <Row className="m-2">
            
            <Col>
              <Card.Text>
              <img className="icon" src={teacher} alt="..."/> {institute.profesores} profesores
                </Card.Text>
            </Col>
            <Col>
              
              <Card.Text className="more-info">ver todos</Card.Text>
            </Col>
          </Row>
          
          <Row>

          <Card.Text className="statistics text-center m-2">
              <img className="icon statistic" src={statistics} alt="..."/> Ver estadísticas
                </Card.Text>

          </Row>
          <Row>
          <div className="text-center m-2">
          <Button className="button-update" variant="warning" >Editar sede</Button>
          </div>
          </Row>

        </Card.Body>
      </Card> 

      ))
        


    } 
    </div>
  )
}

export default CardSubsc
