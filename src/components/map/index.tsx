import { Icon } from 'leaflet';
import { useCallback, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { toast } from 'react-hot-toast';
import { useFormContext } from 'react-hook-form';
import { useGeolocationReducer } from '@/context/geolocation.context';
import MarkerIcon from '../../assets/marker.svg';

type LatLng = [number, number];

const Map = () => {
  const { setValue } = useFormContext();
  const [, dispatchGeoContext] = useGeolocationReducer();
  const [positionState, setPositionState] = useState<LatLng | null>(null);
  const icon = new Icon({
    iconUrl: MarkerIcon,
    iconSize: [32, 32],
  });

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
        setValue('lat', latitude);
        setValue('lng', longitude);
      },
      () => {
        dispatchGeoContext({ type: 'REJECT_LOCATION' });
        toast.error(
          'Bunu yapabilmek için konum bilgilerini paylaşmaya izin vermelisiniz.',
        );
        setPositionState(null);
      },
    );
  }, [dispatchGeoContext, setValue]);

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
      {positionState && (
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
      )}
    </>
  );
};

export default Map;
