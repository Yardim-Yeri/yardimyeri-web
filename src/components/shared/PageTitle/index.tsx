interface IPageTitle {
  title: string;
}

const PageTitle = ({ title }: IPageTitle) => (
  <div>
    <h1 className="text-3xl font-bold py-5">{title}</h1>
  </div>
);

export default PageTitle;
