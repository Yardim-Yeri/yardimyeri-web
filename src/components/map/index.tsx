import { Icon } from 'leaflet';
import { useCallback, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useGeolocationReducer } from '@/context/geolocation.context';
import MarkerIcon from '../../assets/marker.svg';

type LatLng = [number, number];

const Map = () => {
  const [, dispatchGeoContext] = useGeolocationReducer();
  const [positionState, setPositionState] = useState<LatLng>([41, 29]);
  const icon = new Icon({
    iconUrl: MarkerIcon,
    iconSize: [24, 24],
  });

  console.log(positionState);

  const getLocation = useCallback(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPositionState([latitude, longitude]);
        dispatchGeoContext({
          type: 'GET_LOCATION',
          payload: { lat: latitude, lng: longitude },
        });
      },
      () => {
        dispatchGeoContext({ type: 'REJECT_LOCATION' });
        setPositionState([41, 29]);
      },
    );
  }, [dispatchGeoContext]);

  return (
    <>
      <div className="text-right text-xs">
        <button
          type="button"
          className="underline underline-offset-2"
          onClick={getLocation}
        >
          Konum bilgilerimi getir
        </button>
      </div>
      <div className="w-full h-[450px] overflow-hidden">
        <MapContainer
          center={positionState}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={positionState}
            icon={icon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
