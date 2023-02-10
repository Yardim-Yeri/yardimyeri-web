import React from 'react';
import PageTitle from '../components/shared/PageTitle';
import Layout from '../components/shared/Layout';
import { yararliLinkler } from '../mocks/YararliLinkler';

const YararliLinkler = () => (
  <Layout>
    <PageTitle title="Yararli Linkler" />
    <ol className=" border rounded-lg">
      {yararliLinkler.map(({ title, description, url }, index) => (
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
  </Layout>
);

export default YararliLinkler;
