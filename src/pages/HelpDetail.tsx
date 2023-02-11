import { useState } from 'react';
import PageTitle from '../components/shared/PageTitle';
import Layout from '../components/shared/Layout';
import Modal from '../components/shared/Modal/Modal';

const HelpDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <Layout>
      <PageTitle title="Yardim Talebi Detayi" />
      <div className="flex justify-end">
        <div className="text-base font-bold bg-amber-300 p-4 rounded-lg">
          Yardim Bekliyor!!
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="shadow-md p-4 rounded">
          <p className="text-base font-bold">İsim</p>
          <p className="text-base"> Sercan Turkoglu</p>
        </div>
        <div className="shadow-md p-4 rounded">
          <p className="text-base font-bold">İhtiyaç Türü</p>
          <p className="text-base"> Barınma</p>
        </div>
        <div className="shadow-md p-4 rounded">
          <p className="text-base font-bold">İhtiyaç Türü Detayı</p>
          <p className="text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt
            nihil voluptate possimus ex nobis accusantium nam, fuga quis
            dolorem, quisquam totam ipsam odit explicabo sequi. Vitae animi
            autem soluta sint modi facere reprehenderit eum aut laboriosam
            itaque veniam voluptatum, eveniet voluptatibus ab id. Explicabo
            laudantium est sapiente temporibus? Quasi.
          </p>
        </div>
        <p className="text-base text-red-600">
          Yardıma gidiyorsan veya yardım ettiysen aşağıdaki buton aracılığı ile
          bize bildir. Yardıma ihtiyacı olanlara doğru veriyi aktarabilmemiz
          için gerekli
        </p>
      </div>
      <div className="flex justify-center mt-6">
        {/* TODO: change it with button component!! */}
        <button
          type="button"
          className="bg-green-600 rounded-lg text-white p-4 w-2/3"
          onClick={handleModalOpen}
        >
          Yardim Et
        </button>
      </div>
      <Modal
        title="Yardım Başlatılacak!"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div>
          <p className="">
            Aşağıda bulunan bilgileri doldurduktan sonra yardımı
            başlatabilirsiniz.
          </p>
          <p className="text-red-500">
            Yardımı başlattığınız takdirde yardım talep edenin iletişim
            bilgilerine ulaşabilirsiniz.
          </p>

          <form className="mt-5">
            <div className="flex flex-col gap-6">
              <input
                name="name"
                type="text"
                placeholder="Adınız"
                className="border-black border rounded-md p-4 w-full"
              />
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="E-Posta Adresiniz"
                  className="border-black border rounded-md p-4 w-full"
                />
                <p className="text-gray-500 text-sm">
                  Bu alan zorunlu değildir. Ancak e-posta adresinizi girdiğiniz
                  takdirde yeni oluşan talepleri mail olarak sizlere
                  bildiriyoruz.
                </p>
              </div>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Telefon Numaranız"
                  className="border-black border rounded-md p-4 w-full"
                />
                <p className="text-gray-500 text-sm">
                  Lütfen numaranızı başında sıfır olmadan girin.
                </p>
              </div>
            </div>
          </form>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {}}
            >
              Vazgeç
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              onClick={() => {}}
            >
              Yardımı Başlat
            </button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default HelpDetail;
