import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package2, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const rolId = localStorage.getItem('rolId');

  const handleLogout = () => {
    localStorage.removeItem('rolId');
    navigate('/login');
  };

  if (!rolId) return null;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Package2 className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">OrderTrack</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/manage-orders"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-500"
              >
                Pedidos
              </Link>
              <Link
                to="/customer-managment"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-500"
              >
                Clientes
              </Link>
              <Link
                to="/product-managment"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-500"
              >
                Productos
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;