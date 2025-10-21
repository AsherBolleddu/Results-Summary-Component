export default function ResultCard() {
  return (
    // Results Section
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue w-full md:w-[21.125rem] lg:w-[23rem] h-[22.25rem] md:h-[32rem] rounded-b-4xl md:rounded-4xl shadow-[0_30px_60px_0_rgba(61,108,236,0.15)] md:shadow-none">
      {/* Results Content */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-[16.25rem] md:w-[12.5rem] lg:w-[16.25rem]">
        <h1 className="text-navy-200 text-preset-5-bold md:text-preset-4 text-center">
          Your result
        </h1>
        {/* Score Container */}
        <div className="flex flex-col items-center justify-center w-[8.75rem] md:w-[12.5rem] h-[8.75rem] md:h-[12.5rem] rounded-full bg-gradient-to-b from-violet-blue to-persian-blue">
          <span className="text-white text-preset-2 md:text-preset-1">76</span>
          <span className="text-navy-200 text-preset-6-bold md:text-preset-5-bold opacity-[0.5168]">
            {" "}
            of 100{" "}
          </span>
        </div>
        {/* Feedback Container */}
        <div>
          <p className="text-white text-preset-4 md:text-preset-3 text-center">
            Great
          </p>
          <p className="text-navy-200 text-preset-6-md md:text-preset-5-md text-center">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}
