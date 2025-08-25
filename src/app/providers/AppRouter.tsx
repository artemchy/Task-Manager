import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BoardPage } from '@/widgets/board/ui/BoardPage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
