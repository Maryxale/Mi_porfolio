const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Bienvenido a <span className="text-fuchsia-500">mi porfolio</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          optio labore, consequatur, officiis minus sit explicabo impedit, ipsum
          enim expedita cupiditate reiciendis amet in eveniet possimus nihil
          fuga reprehenderit aspernatur.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
