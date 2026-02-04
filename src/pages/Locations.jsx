import React, { useState, useEffect, useMemo } from 'react';
import { CLUBS_DATA, CITIES } from '../components/locations/locationsData';
import LocationsHeader from '../components/locations/LocationsHeader';
import LocationsFilterBar from '../components/locations/LocationsFilterBar';
import LocationsMapSection from '../components/locations/LocationsMapSection';
import LocationsStyles from '../components/locations/LocationsStyles';

const Locations = () => {
  const [activeCity, setActiveCity] = useState('Sve');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredClubId, setHoveredClubId] = useState(null);
  const cities = CITIES;

  const filteredClubs = useMemo(() => {
    return CLUBS_DATA.filter(club => {
      const matchesCity = activeCity === 'Sve' || club.city === activeCity;
      const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           club.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesSearch;
    });
  }, [activeCity, searchTerm]);

  useEffect(() => {
    const handleClickOutside = () => setIsDropdownOpen(false);
    if (isDropdownOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <LocationsHeader />
      <LocationsFilterBar
        activeCity={activeCity}
        setActiveCity={setActiveCity}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        cities={cities}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <LocationsMapSection
        clubs={filteredClubs}
        allClubs={CLUBS_DATA}
        hoveredClubId={hoveredClubId}
        setHoveredClubId={setHoveredClubId}
      />
      <LocationsStyles />
    </>
  );
};

export default Locations;
