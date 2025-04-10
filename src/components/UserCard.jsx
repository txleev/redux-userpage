import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  const { id, name, email, address } = user;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
      <img
        src={`https://i.pravatar.cc/150?img=${id}`}
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold text-center">{name.firstname} {name.lastname}</h2>
      <p className="text-center text-gray-500">{email}</p>
      <p className="text-center text-sm text-gray-400">{address.city}, {address.street}</p>
      <div className="text-center mt-4">
        <Link to={`/users/${id}`} className="text-blue-500 hover:underline">
          Подробнее
        </Link>
      </div>
    </div>
  );
}
