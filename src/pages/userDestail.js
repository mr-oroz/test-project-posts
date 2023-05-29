import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../redux/actions';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector(state => state);

  const { address, company, email, name, phone, username, website } = user;
  useEffect(() => {
    dispatch(getUserAction(userId))
  }, [userId])
  console.log(user)
  return (
    <Card className='mt-2'>
      <Card.Link className='m-2'>
      <Button 
        onClick={() => navigate('/')}
        variant="primary">Назад</Button>
      </Card.Link>
      <Card.Header>
        <Card.Title>Подробности о пользователе: {name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>name: {name}</Card.Text>
        <Card.Text>username: {username}</Card.Text>
        <Card.Text>phone: {phone}</Card.Text>
        <Card.Text>email: {email}</Card.Text>
        <Card.Text>website: {website}</Card.Text>
        <Row>
          <ListGroup className='w-50' action>
            <ListGroup.Item><h2>address</h2></ListGroup.Item>
            <ListGroup.Item>city: {address && address.city}</ListGroup.Item>
            <ListGroup.Item>street: {address && address.street}</ListGroup.Item>
            <ListGroup.Item>suite: {address && address.suite}</ListGroup.Item>
            <ListGroup.Item>zipcode: {address && address.zipcode}</ListGroup.Item>
          </ListGroup>
          <ListGroup className='w-50' action>
            <ListGroup.Item><h2>company</h2></ListGroup.Item>
            <ListGroup.Item>bs: {company && company.bs}</ListGroup.Item>
            <ListGroup.Item>catchPhrase: {company && company.catchPhrase}</ListGroup.Item>
            <ListGroup.Item>name: {company && company.name}</ListGroup.Item>
          </ListGroup>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserDetail;