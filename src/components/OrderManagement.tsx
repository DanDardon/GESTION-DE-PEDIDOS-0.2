import React, { useState } from 'react';
import { Timeline } from './Timeline';
import { OrderHistory, OrderHistoryItem } from './OrderHistory';
import { AdminControls } from './AdminControls';
import { Package2 } from 'lucide-react';

const initialHistory: OrderHistoryItem[] = [
  { id: '1', date: '2024-07-07T10:00:00', status: 'En proceso', comment: 'Orden iniciada' },
  { id: '2', date: '2024-07-08T09:30:00', status: 'Empacada', comment: 'Producto empacado y listo' },
  { id: '3', date: '2024-07-09T08:15:00', status: 'En ruta de Entrega', comment: 'Orden en ruta (CV)' },
];

export function OrderManagement() {
  const [orderHistory, setOrderHistory] = useState<OrderHistoryItem[]>(initialHistory);
  const [searchOrderId, setSearchOrderId] = useState('');
  const currentStatus = orderHistory[orderHistory.length - 1]?.status || 'En proceso';

  const handleStatusUpdate = (newStatus: string, comment: string) => {
    const newHistoryItem: OrderHistoryItem = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: newStatus,
      comment: comment
    };

    setOrderHistory([...orderHistory, newHistoryItem]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Package2 className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-800">Gestión de Pedidos</h1>
          </div>
          
          <div className="mb-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Buscar por ID de pedido"
                value={searchOrderId}
                onChange={(e) => setSearchOrderId(e.target.value)}
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button 
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800">Estado del Pedido</h2>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Estado actual: {currentStatus}
            </span>
          </div>

          <Timeline currentStatus={currentStatus} />
          
          <AdminControls 
            currentStatus={currentStatus}
            onStatusUpdate={handleStatusUpdate}
          />

          <OrderHistory history={orderHistory} />

          <div className="mt-6 flex justify-end gap-4">
            <button
              className="bg-gray-100 text-gray-600 px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
              onClick={() => window.location.href = '/manage-orders'}
            >
              Volver
            </button>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => window.print()}
            >
              Imprimir Factura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}