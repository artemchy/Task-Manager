import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BoardPage } from '@/widgets/board/ui/BoardPage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFound';
import TaskDetails from '@/pages/task-details/TaskDetails';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/task-details/:id" element={<TaskDetails />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
