export default function SummaryItem({
  category,
  score,
  icon,
  bgColor,
  textColor,
}) {
  return (
    <li
      className={`flex justify-center items-center ${bgColor} rounded-xl h-14`}
    >
      <div className="w-[17.6875rem] md:w-[14.6875rem] lg:w-[15.625rem] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={icon} alt={`${category} icon`} className="w-5 h-5" />
          <span className={`${textColor} text-preset-6-md md:text-preset-5-md`}>
            {category}
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-navy-950 text-preset-6-bold md:text-preset-5-bold">
            {score}
          </span>
          <span className="text-navy-950 text-preset-6-bold md:text-preset-5-bold opacity-50">
            / 100
          </span>
        </div>
      </div>
    </li>
  );
}
