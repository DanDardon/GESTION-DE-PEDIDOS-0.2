import React, { useState } from 'react';

interface AdminControlsProps {
  currentStatus: string;
  onStatusUpdate: (status: string, comment: string) => void;
}

const statusOptions = [
  'En proceso',
  'Empacada',
  'En ruta de Entrega',
  'Entregada',
  'Facturada'
];

export function AdminControls({ currentStatus, onStatusUpdate }: AdminControlsProps) {
  const [comment, setComment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStatus === currentStatus) {
      alert('Por favor seleccione un estado diferente al actual');
      return;
    }
    onStatusUpdate(selectedStatus, comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Actualizar Estado</h2>
      <div className="grid gap-4">
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Nuevo Estado
          </label>
          <select
            id="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comentario
          </label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Agregar un comentario (opcional)"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Actualizar Estado
        </button>
      </div>
    </form>
  );
}