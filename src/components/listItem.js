import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ListItem = (props) => {
  const [show, setShow] = useState(false);
  const { title, body, userId, id, comments, avatar } = props;

  const showComments = () => {
    setShow(!show)
  }
  return (
    <ListGroup.Item action>
      <Row>
        <div className='image'>
          <Link to={`/users/${userId}`}>
            <Image src={avatar[0].thumbnailUrl} />
          </Link>
        </div>
        <div className='texts'>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Row>
      <Row>
        <div>
          <Button
            variant='primary'
            onClick={showComments}>
            Комментарии {show ? 'Скрыт' : 'Раскрыт'}</Button>
        </div>
        {show ? comments.map((comment, index) => (
          <div>
            <p key={index}>{
            index + 1}: {comment.body
            } <br /> <strong>email: {comment.email}</strong></p>
          </div>)
        ) : null}
      </Row>

    </ListGroup.Item >
  );
};

export default ListItem;