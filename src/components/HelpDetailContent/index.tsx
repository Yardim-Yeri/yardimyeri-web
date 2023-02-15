import { FC } from 'react';

import Button from '../formElements/button';

import { IHelpListItem } from '@/models/HelpList';

interface IHelpDetailContentProps {
  data: IHelpListItem;
  isPhone?: boolean;
}

const HelpDetailContent: FC<IHelpDetailContentProps> = ({
  isPhone = false,
  data,
}) => {
  const replaceRegex = /[^0-9]/g;

  const callNumber = (phone: string) => () => {
    window.open(`tel:+90${phone.replace(replaceRegex, '')}`);
  };

  const whatsappNumber = (phone: string) => () => {
    window.open(`https://wa.me/+90${phone.replace(replaceRegex, '')}`);
  };

  const openGoogleMaps = (lat: string, lng: string) => () => {
    window.open(`https://www.google.com/maps/place/${lat},${lng}`);
  };

  const openAppleMaps = (lat: string, lng: string) => () => {
    window.open(`https://maps.apple.com/place?ll=${lat},${lng}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-md p-4 rounded">
        <p className="font-bold">İsim</p>
        <p className="">{data.name}</p>
      </div>
      {isPhone && (
        <div className="shadow-md p-4 rounded">
          <p className=" font-bold">Telefon</p>
          <div className="flex items-center gap-4">
            <div>{data.phone_number}</div>
            <Button
              size="small"
              label="Ara"
              type="info"
              onClick={callNumber(data.phone_number)}
            />
            <Button
              size="small"
              label="Whatsapp"
              type="success"
              onClick={whatsappNumber(data.phone_number)}
            />
          </div>
        </div>
      )}
      <div className="shadow-md p-4 rounded">
        <p className="font-bold">İhtiyaç Türü</p>
        <p className="">{data.need.type}</p>
      </div>
      {data?.need.detail && (
        <div className="shadow-md p-4 rounded">
          <p className="font-bold">İhtiyaç Türü Detayı</p>
          <p className="">{data.need.detail}</p>
        </div>
      )}
      <div className="shadow-md p-4 rounded">
        <p className="font-bold">Kaç Kişilik</p>
        <p className="">{data.how_many_person}</p>
      </div>
      <div className="shadow-md p-4 rounded">
        <p className="font-bold">Adres</p>
        <p className="">{data.address}</p>
        {data.lat && data.lng && (
          <div className="flex pt-1 gap-1">
            <Button
              size="small"
              label="Google Haritalar"
              type="success"
              onClick={openGoogleMaps(data.lat, data.lng)}
            />
            <Button
              size="small"
              label="Apple Haritalar"
              type="info"
              onClick={openAppleMaps(data.lat, data.lng)}
            />
          </div>
        )}
      </div>
      {data?.for_directions && (
        <div className="shadow-md p-4 rounded">
          <p className="font-bold">Adres Tarifi</p>
          <p className="">{data.for_directions}</p>
        </div>
      )}
      <p className=" text-red-600">
        Yardıma gidiyorsan veya yardım ettiysen aşağıdaki buton aracılığı ile
        bize bildir. Yardıma ihtiyacı olanlara doğru veriyi aktarabilmemiz için
        gerekli
      </p>
    </div>
  );
};

export default HelpDetailContent;
