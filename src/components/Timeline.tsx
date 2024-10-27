import React from 'react';
import { Package2, Truck, CheckCircle, MoreHorizontal } from 'lucide-react';

const orderSteps = [
  { id: 1, title: 'En proceso', icon: MoreHorizontal },
  { id: 2, title: 'Empacada', icon: Package2 },
  { id: 3, title: 'En ruta de Entrega', icon: Truck },
  { id: 4, title: 'Entregada', icon: CheckCircle }
];

interface TimelineProps {
  currentStatus: string;
}

export function Timeline({ currentStatus }: TimelineProps) {
  const getStepStatus = (stepTitle: string) => {
    const currentIndex = orderSteps.findIndex(step => step.title === currentStatus);
    const stepIndex = orderSteps.findIndex(step => step.title === stepTitle);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'pending';
  };

  return (
    <div className="relative mb-12">
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-orange-500 -translate-y-1/2 transition-all duration-500"
           style={{
             width: `${(orderSteps.findIndex(step => step.title === currentStatus) + 1) * (100 / orderSteps.length)}%`
           }}></div>
      <div className="relative flex justify-between">
        {orderSteps.map((step) => {
          const Icon = step.icon;
          const status = getStepStatus(step.title);
          
          return (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300
                ${status === 'completed' ? 'bg-orange-500 text-white' : 
                  status === 'current' ? 'bg-orange-500 text-white ring-4 ring-orange-200' : 
                  'bg-gray-200 text-gray-400'}`}>
                <Icon size={24} />
              </div>
              <span className={`text-sm font-medium ${
                status === 'completed' || status === 'current' ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}