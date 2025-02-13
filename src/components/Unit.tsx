interface UnitProps {
  name: string;
  badgeColor: string;
  borderColor: string;
  number: string;
}
function Unit({ name, badgeColor, borderColor, number }: UnitProps) {
  return (
    <div className="indicator mt-4 md:mt-6">
      <span
        className={`indicator-item text-[.6rem] badge badge-sm ${badgeColor}`}
      >
        Priority No.{number}
      </span>
      <div
        className={`border-2 ${borderColor} text-[.6rem] lg:text-[1rem] h-content p-1 px-3 rounded-full `}
      >
        {name}
      </div>
    </div>
  );
}

export default Unit;
