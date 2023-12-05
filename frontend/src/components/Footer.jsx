import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Row>
        <Col className='text-center py3'>
          <p>EMart &copy; { currentYear }</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer