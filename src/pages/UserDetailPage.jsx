import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserById } from '../store/async/usersAsync';

export default function UserDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedUser: user, loading, error } = useSelector((state) => state.users);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  if (loading) return <p className="text-center mt-10">Загрузка...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Ошибка: {error}</p>;
  if (!user) return null;

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt="avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-center">{user.name.firstname} {user.name.lastname}</h2>
      <p className="text-center text-gray-500 mb-4">{user.email}</p>
      <ul className="text-sm text-gray-600 space-y-2">
        <li><strong>Адрес:</strong> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</li>
        <li><strong>Телефон:</strong> {user.phone}</li>
        <li><strong>Геолокация:</strong> {user.address.geolocation.lat}, {user.address.geolocation.long}</li>
        <li>
          <strong>Логин:</strong> {user.username}
        </li>
        <li>
          <strong>Пароль:</strong> {showPassword ? user.password : '••••••••'}
          <button onClick={() => setShowPassword(!showPassword)} className="ml-2 text-blue-500">
            {showPassword ? 'Скрыть' : 'Показать'}
          </button>
        </li>
      </ul>
      <div className="text-center mt-6">
        <button onClick={() => navigate('/users')} className="text-blue-600 hover:underline">
          ← Назад к списку пользователей
        </button>
      </div>
    </div>
  );
}
