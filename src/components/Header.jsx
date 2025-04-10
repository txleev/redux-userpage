import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link to="/users" className="text-xl font-bold text-red-600">
          List of users
        </Link>
      </div>
    </header>
  );
}