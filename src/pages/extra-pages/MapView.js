import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Функція для створення іконки маркера, якщо потрібно
const markerIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapView = ({ routes }) => {
  // Визначте початкову позицію для карти
  const position = [50.4501, 30.5234]; // Київ, приклад

  return (
    <MapContainer center={position} zoom={5} style={{ height: '400px', width: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {routes.map((route, index) => {
        // Перетворити маршрут у список координат для Polyline
        const routeLatLngs = route.map(order => [order.lat, order.lng]);

        return (
          <React.Fragment key={index}>
            {/* Відображення маркерів для кожної адреси */}
            {route.map((order, orderIndex) => (
              <Marker
                key={orderIndex}
                position={[order.lat, order.lng]}
                icon={markerIcon}
              />
            ))}
            {/* Лінія, що з'єднує маркери в маршрут */}
            <Polyline positions={routeLatLngs} />
          </React.Fragment>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
