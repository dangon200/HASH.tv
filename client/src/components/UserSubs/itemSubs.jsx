import React from 'react';
import s from './itemSub.module.css'
// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
function ItemSubs(props) {
    return (
        <div>
    <Row className='w-150 p-3 mb-0 border border-success rounded-4 fs-3 mt-5'>
            <Row className='border-bottom mb-4'>
            <Row>
            <Col className='text-start'>
                {props.title}
            </Col>
            </Row>
            <Col className={s.dataContainer}>
            <Row>
            <Col>
                Valor de la compra: ${props.totalAmount}
            </Col>
            <Col>
                Metodo de pago: {props.paymentMethod}
            </Col>
            </Row>
        <Row>
              
          </Row>

          </Col>
      </Row>
      <Col className={s.dataContainer}>
          Fecha de expiracion: {props.expireDate.slice(0, 10)}
      </Col>
    </Row>
        </div>
    );
}

export default ItemSubs;