interface UnitProps {
  name: string;
  badgeColor: string;
  borderColor: string;
  number: string;
}
function Unit({ name, badgeColor, borderColor, number }: UnitProps) {
  return (
    <div className="indicator mt-3.5 md:mt-6">
      <span
        className={`indicator-item text-[.6rem] badge badge-xs md:badge-sm ${badgeColor}`}
      >
        Priority No.{number}
      </span>
      <div
        className={`border-2 ${borderColor} text-[.8rem] md:text-[1rem] h-content  py-1 px-6 md:py-2 md:px-8 rounded-full `}
      >
        {name}
      </div>
    </div>
  );
}

export default Unit;
