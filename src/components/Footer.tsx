import React from 'react';
import { Package2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center">
            <Package2 className="h-6 w-6 text-orange-500" />
            <span className="ml-2 text-lg font-semibold text-gray-900">OrderTrack</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>por el equipo de OrderTrack</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} OrderTrack. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;