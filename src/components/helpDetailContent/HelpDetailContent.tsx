import { IHelpListItem } from '@/models/helpList.model';

const HelpDetailContent = ({ data }: { data: IHelpListItem | undefined }) => (
  <>
    <div className="flex justify-end">
      <div className="text-base font-bold bg-amber-300 p-4 rounded-lg">
        {data?.status}
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <div className="shadow-md p-4 rounded">
        <p className="text-base font-bold">İsim</p>
        <p className="text-base">{data?.name}</p>
      </div>
      <div className="shadow-md p-4 rounded">
        <p className="text-base font-bold">İhtiyaç Türü</p>
        <p className="text-base"> {data?.need.type}</p>
      </div>
      {data?.need.detail && (
        <div className="shadow-md p-4 rounded">
          <p className="text-base font-bold">İhtiyaç Türü Detayı</p>
          <p className="text-base">{data?.need.detail}</p>
        </div>
      )}
      <div className="shadow-md p-4 rounded">
        <p className="text-base font-bold">Kaç Kişilik</p>
        <p className="text-base"> {data?.how_many_person}</p>
      </div>
      <div className="shadow-md p-4 rounded">
        <p className="text-base font-bold">Adres</p>
        <p className="text-base"> {data?.address}</p>
      </div>
      {data?.for_directions && (
        <div className="shadow-md p-4 rounded">
          <p className="text-base font-bold">Adres Tarifi</p>
          <p className="text-base"> {data?.for_directions}</p>
        </div>
      )}
      <p className="text-base text-red-600">
        Yardıma gidiyorsan veya yardım ettiysen aşağıdaki buton aracılığı ile
        bize bildir. Yardıma ihtiyacı olanlara doğru veriyi aktarabilmemiz için
        gerekli
      </p>
    </div>
  </>
);

export default HelpDetailContent;
