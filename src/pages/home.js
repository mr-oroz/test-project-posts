import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostAction } from '../redux/actions';
import ListItem from '../components/listItem';
import ListGroup from 'react-bootstrap/ListGroup';
import List from '../components/list';
import { MyPagination } from '../components/myPagination';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';
const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Изначально сортировка по возрастани
  const [sortDirection, setSortDirection] = useState('asc');

  const { posts, error } = useSelector(state => state);

  useEffect(() => {
    setIsLoading(true); // Устанавливаем isLoading в true перед запросом
    setTimeout(() => {
      dispatch(getPostAction(page));
    }, 500); // Искусственная задержка в 0.5 секунды
  }, [dispatch, page]);

  useEffect(() => {
    // После получения данных с сервера, устанавливаем isLoading в false
    setIsLoading(false);
  }, [posts]);

  // новый массив сортированный
  const sortPosts = () => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (sortDirection === 'asc') {
        return b.title.localeCompare(a.title);
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    return sortedPosts;
  };
  // которая меняет направление сортировки между "asc" (по возрастанию) и "desc" (по убыванию).

  const handleSortDirection = () => {
    const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newSortDirection);
  };

  // менять страничку по пагинация
  const handleChangePage = (page) => {
    setPage(page)
  }

  return (
    <div className='home'>
      <h1>Список постов {posts.length}</h1>
      <div className='sort d-flex gap-3 m-2'>
        <h3>сортировка:</h3>
        <Button variant='primary' onClick={handleSortDirection}>
          {sortDirection === 'asc' ? 'Вниз' : 'Вверх'}
        </Button>
      </div>
      {isLoading ? ( // Проверяем isLoading для отображения лоадера
        <Spinner animation="border" variant="primary" />
      ) : null}
      {
        error !== null ? <div>
          <h1>{error}</h1>
          <button onClick={() => { dispatch(getPostAction(page)) }}>обновить</button>
        </div> : null
      }
      <ListGroup>
        <List
          items={sortPosts()}
          renderItem={(item) => (
            <ListItem key={item.id} {...item} />
          )}
        />
      </ListGroup>
      <div className='pagination mt-3'>
        <MyPagination
          total={posts.length}
          current={page}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Home;