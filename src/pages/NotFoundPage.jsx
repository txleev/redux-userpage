import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl">Страница не найдена</p>
      <Link to="/users" className="mt-6 inline-block text-blue-500 hover:underline">
        Вернуться на главную
      </Link>
    </div>
  );
}