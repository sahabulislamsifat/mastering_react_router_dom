const ReusableHeading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="font-thin mb-4 text-xl md:text-2xl lg:text-4xl">
        {title}
      </h1>
      <p className="font-thin text-center text-gray-300 text-xs md:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default ReusableHeading;
