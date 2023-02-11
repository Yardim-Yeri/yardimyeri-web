import RadioGroup from '../components/formElements/radioGroup';
import requestHelpType from '../mocks/requestHelpType';
import Layout from '../components/shared/Layout';
import Select from '../components/formElements/select';
import city from '../mocks/city';
import Map from '../components/map';
import Input from '../components/formElements/input';

const RequestHelp = () => (
  <Layout>
    <div className="flex justify-center items-center flex-col gap-7">
      <h1 className="text-lg sm:text-4xl font-bold w-3/4 text-center leading-relaxed">
        YARDIM TALEBİM VAR
      </h1>
      <div className="w-1/2 flex flex-col gap-4">
        <Input
          name="name"
          placeholder="Adınız"
        />
        <Input
          name="phoneNumber"
          placeholder="Telefon Numaranız"
        />
        <div className="border border-black rounded-md p-4">
          <h4 className="font-semibold mb-4">İhtiyaç Türü</h4>
          <RadioGroup items={requestHelpType} />
        </div>
        <Input
          name="detail"
          placeholder="Varsa İhtiyaç Türü Detayı"
        />
        <Input
          name="needHelpCount"
          placeholder="Kaç Kişinin İhtiyacı Var?"
        />
        <Map />
        <div className="grid grid-cols-4 gap-4">
          <Select items={city} />
          <Select
            items={city}
            disabled
          />
          <Select
            items={city}
            disabled
          />
          <Select
            items={city}
            disabled
          />
        </div>
        <Input
          name="apartment"
          placeholder="Apartman"
        />
        <Input
          name="address"
          placeholder="Adres Tarifi"
        />
      </div>
    </div>
  </Layout>
);

export default RequestHelp;
