import L, { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerIcon from '../../assets/marker.svg';

const Map = () => {
  const position: LatLngTuple = [41, 29];

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl: MarkerIcon,
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
