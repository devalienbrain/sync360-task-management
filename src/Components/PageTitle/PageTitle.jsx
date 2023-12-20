const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-7 p-5 md:p-10 my-7">
        <h1 className="text-7xl font-bold">{title}</h1>
        <h5 className="text-sm text-zinc-400/50 max-w-xl">{subTitle}</h5>
      </div>
    </div>
  );
};

export default PageTitle;
