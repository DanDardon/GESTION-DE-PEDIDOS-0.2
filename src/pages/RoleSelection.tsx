import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Package2 } from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Sistema de Gestión de Pedidos
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/admin')}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-4"
          >
            <Users className="w-16 h-16 text-orange-500" />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Administrador</h2>
              <p className="text-gray-600">Gestionar y actualizar pedidos</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/track/search')}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-4"
          >
            <Package2 className="w-16 h-16 text-blue-500" />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Cliente</h2>
              <p className="text-gray-600">Rastrear estado de pedido</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;