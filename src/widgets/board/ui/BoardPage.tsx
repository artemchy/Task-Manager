import { Outlet } from 'react-router-dom';
import { Board } from './Board';

export const BoardPage = () => {
  return (
    <>
      <Board />;
      <Outlet />
    </>
  );
};
