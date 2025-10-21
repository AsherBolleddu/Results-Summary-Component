import SummaryItem from "./SummaryItem";

export default function SummaryCard({ data }) {
  const categoryStyles = {
    Reaction: { bgColor: "bg-red-50", textColor: "text-red-400" },
    Memory: { bgColor: "bg-yellow-50", textColor: "text-yellow-400" },
    Verbal: { bgColor: "bg-green-50", textColor: "text-green-500" },
    Visual: { bgColor: "bg-blue-50", textColor: "text-blue-800" },
  };

  return (
    // Summary Container
    <div className="flex flex-col justify-center items-center md:bg-white w-full md:w-[21.75rem] lg:w-[23rem] md:h-[32rem]">
      {/* Summary Content */}
      <div className="flex flex-col gap-6 md:gap-8 w-[19.6875rem] md:w-[16.79481rem] lg:w-72">
        <h2 className="text-navy-950 text-preset-5-bold md:text-preset-4">
          Summary
        </h2>
        <ul className="flex flex-col gap-4">
          {data.map((item) => (
            <SummaryItem
              key={item.category}
              category={item.category}
              score={item.score}
              icon={item.icon}
              bgColor={categoryStyles[item.category].bgColor}
              textColor={categoryStyles[item.category].textColor}
            />
          ))}
        </ul>
        <button className="bg-navy-950 text-white text-center text-preset-5-bold rounded-full h-14 w-full hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
}
