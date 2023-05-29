import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPostAction } from '../redux/actions';
const Header = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state);
  const [value, setValue] = useState('');
    
    
  // на нажатия поиска
  const handleClickSearch  = () => {
    const searchPost = posts.filter(item => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    })
    dispatch(setPostAction(searchPost))
  }
  return (
    <Navbar bg="light" expand="lg" className='my-sticky'>
      <Container>
        <Navbar.Brand>
          <Link className='title' to='/'>Тест Проект</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <NavLink to='/' style={({ isActive }) => ({
              color: isActive ? "#d63031" : "#636e72",
              borderBottom: isActive ? '2px solid #d63031' : 'none'
            })} >Список постов</NavLink>
            <NavLink to='/both-me' style={({ isActive }) => ({
              color: isActive ? "#d63031" : "#636e72",
              borderBottom: isActive ? '2px solid #d63031' : 'none'
            })}>Обо мне</NavLink>
          </Nav>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Поиск"
                className="me-2"
                aria-label="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {value && (
                <Button 
                  variant="link" 
                  className="text-decoration-none" 
                  onClick={() => {
                    setValue('')
                  }}>
                  x
                </Button>
              )}
            </InputGroup>
            <Button 
              onClick={handleClickSearch}
              variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;