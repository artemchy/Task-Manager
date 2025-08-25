import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">Йой! Сторінка не знайдена</p>
      <Link
        to="/"
        className="mt-6 rounded-sm bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700"
      >
        Повернутись на головну
      </Link>
    </div>
  );
};
