/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from './api';
import Loader from './components/Shared/Loader';
import ErrorView from './components/Shared/ErrorView';
import ListContainer from './components/ListContainer';

function App() {
  const dispatch = useDispatch();
  const { lists, status, error } = useSelector(state => state.lists);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLists();
        dispatch(setLists(data));
      } catch (err) {
        // Handle error
      }
    };
    fetchData();
  }, [dispatch]);

  if (status === 'loading') return <Loader />;
  if (error) return <ErrorView onRetry={fetchData} />;

  return (
    <div className="app-container">
      <button className="create-btn">Create a new list</button>
      <div className="lists-wrapper">
        {lists.map(list => (
          <ListContainer key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
}

export default App;