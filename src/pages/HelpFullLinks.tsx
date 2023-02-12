import { useQuery } from 'react-query';
import { IUseFullLink } from '../models/useFullLinks.model';
import Layout from '../components/shared/Layout';
import PageTitle from '../components/shared/PageTitle';
import { getUseFullLinks } from '@/api/usefulLinks.service';

const HelpFullLinks = () => {
  const { data, isLoading } = useQuery<IUseFullLink[]>(
    'usefullLinks',
    getUseFullLinks,
  );

  return (
    <Layout>
      <PageTitle title="Yararli Linkler" />
      {!isLoading && (
        <ol className=" border rounded-lg">
          {data?.map(({ title, description, url }, index) => (
            <li
              className="border-b p-4"
              key={title}
            >
              <div className="">
                <span>{index + 1} - </span>
                <a
                  href={url}
                  className="underline text-[#0d6efd]"
                >
                  {title}
                </a>
              </div>
              <div className="">{description}</div>
            </li>
          ))}
        </ol>
      )}
    </Layout>
  );
};

export default HelpFullLinks;
