import img_1 from '../../assets/img-1.png';

export const Info = () => {
  return (
    <section className="flex justify-around">
      <div className="flex flex-col max-w-lg gap-8">
        <div className="flex flex-col gap-3 ">
          <span>For Better Future</span>
          <span className="text-6xl uppercase">High quality games</span>
          <span className="text-xl tracking-wider">Find game what you like</span>
        </div>
        <div className="flex gap-4">
          <button className="w-[137px] h-[52px] border border-white rounded hover:border-purple-500 hover:text-purple-500 duration-300">
            Start now
          </button>
          <button className="w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">
            Learn more
          </button>
        </div>
      </div>
      <div>
        <img src={img_1} alt="" />
      </div>
    </section>
  );
};
