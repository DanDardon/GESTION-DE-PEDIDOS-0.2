import React from 'react';
import { Link } from 'react-router-dom';
import { Package2, Users, ShoppingCart, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Panel de Administración</h1>
          <p className="text-lg text-gray-600">Gestione sus pedidos, clientes y productos desde un solo lugar</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/manage-orders" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <Package2 className="w-12 h-12 text-orange-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Pedidos</h2>
              <p className="text-gray-600">Administre y rastree todos los pedidos en tiempo real</p>
            </div>
          </Link>

          <Link to="/customer-managment" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Clientes</h2>
              <p className="text-gray-600">Administre la información y pedidos de sus clientes</p>
            </div>
          </Link>

          <Link to="/product-managment" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <ShoppingCart className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Productos</h2>
              <p className="text-gray-600">Administre su catálogo de productos y stock</p>
            </div>
          </Link>

          <Link to="/categories-managment" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
              <Settings className="w-12 h-12 text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Configuración</h2>
              <p className="text-gray-600">Configure categorías y ajustes del sistema</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;