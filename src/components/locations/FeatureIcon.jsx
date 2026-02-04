import React from 'react';
import { Car, Wifi, Beer, Gem } from 'lucide-react';

const FeatureIcon = ({ type }) => {
  switch (type) {
    case 'bar':
      return <Beer size={14} className="text-amber-400" />;
    case 'parking':
      return <Car size={14} className="text-blue-400" />;
    case 'wifi':
      return <Wifi size={14} className="text-cyan-400" />;
    case 'jackpot':
      return <Gem size={14} className="text-fuchsia-400" />;
    default:
      return null;
  }
};

export default FeatureIcon;
