import React from 'react';

export interface OrderHistoryItem {
  id: string;
  date: string;
  status: string;
  comment: string;
}

interface OrderHistoryProps {
  history: OrderHistoryItem[];
}

export function OrderHistory({ history }: OrderHistoryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha Agregada
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Comentario
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {history.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {new Date(item.date).toLocaleString('es-ES', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.comment || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}