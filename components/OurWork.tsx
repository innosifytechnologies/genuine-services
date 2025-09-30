import BeforeAfterCard from "./BeforeAfterCard";

const OurWork = () => {
  return (
    <div className="ourWork">
      <div className="flex items-center gap-x-10 my-5">
        <p className="w-10 h-0.5 bg-black"></p>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-blue-500 to-black bg-clip-text text-transparent">
          Our Works
        </h1>
      </div>
      <div className="flex items-center justify-center gap-5 sm:h-140 flex-wrap h-fit my-10">
        <BeforeAfterCard
          beforeImg="https://tse3.mm.bing.net/th/id/OIP.I5axEIJA0dSJb9kJop2DWwHaHa?pid=Api&P=0&h=180"
          afterImg="https://tse1.mm.bing.net/th/id/OIP.npw-sN17Ppg3xjEEFSqpZwHaHa?pid=Api&P=0&h=180"
        />
        <BeforeAfterCard
          beforeImg="https://tse3.mm.bing.net/th/id/OIP.I5axEIJA0dSJb9kJop2DWwHaHa?pid=Api&P=0&h=180"
          afterImg="https://tse1.mm.bing.net/th/id/OIP.npw-sN17Ppg3xjEEFSqpZwHaHa?pid=Api&P=0&h=180"
        />
        <BeforeAfterCard
          beforeImg="https://tse3.mm.bing.net/th/id/OIP.I5axEIJA0dSJb9kJop2DWwHaHa?pid=Api&P=0&h=180"
          afterImg="https://tse1.mm.bing.net/th/id/OIP.npw-sN17Ppg3xjEEFSqpZwHaHa?pid=Api&P=0&h=180"
        />
        <BeforeAfterCard
          beforeImg="https://tse3.mm.bing.net/th/id/OIP.I5axEIJA0dSJb9kJop2DWwHaHa?pid=Api&P=0&h=180"
          afterImg="https://tse1.mm.bing.net/th/id/OIP.npw-sN17Ppg3xjEEFSqpZwHaHa?pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
};

export default OurWork;
