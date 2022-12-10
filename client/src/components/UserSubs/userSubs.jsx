import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { getSubscriptions } from "../../store/actions/actions"
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import s from './userSubs.module.css'
import ItemSubs from './itemSubs';

function UserSubs(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const subs = useSelector(state => state.subscriptions)
    useEffect(() => {
        dispatch(getSubscriptions(user._id))
    }, [dispatch, user._id])
    
    return (
        <div className='grid h-100 justify-content-center'>
      <Container fluid style={{ height: '100%' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className={s.container}>
            <h1>My Subscriptions</h1>
            {subs.length > 0 && subs.map((b, idx) => (
              <ItemSubs
                key={idx}
                title={b.title}
                totalAmount={b.totalAmount}
                paymentMethod={b.paymentMethod}
                createdDate={b.createdDate}
                expireDate={b.expireDate}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default UserSubs;