import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Timeline } from '../../components/Timeline';
import { Package2, Search, ArrowLeft } from 'lucide-react';

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [searchOrderId, setSearchOrderId] = useState(orderId || '');
  const [currentStatus] = useState('En ruta de Entrega');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchOrderId) {
      navigate(`/track/${searchOrderId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <Package2 className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Rastrear Pedido</h1>
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Ingrese su número de pedido"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                  className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <button 
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Buscar
              </button>
            </div>
          </form>

          {orderId && (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Pedido #{orderId}
                </h2>
                <p className="text-gray-600">
                  Estado actual: <span className="font-medium text-blue-600">{currentStatus}</span>
                </p>
              </div>

              <Timeline currentStatus={currentStatus} />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Detalles del Envío</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Fecha estimada de entrega: <span className="font-medium">24 de Marzo, 2024</span></p>
                  <p>Dirección de entrega: <span className="font-medium">Calle Principal 123, Ciudad</span></p>
                </div>
              </div>

              <button
                onClick={() => navigate('/')}
                className="mt-6 flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;