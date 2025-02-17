// Define a TypeScript type for the props
interface TooltipProps {
  tooltipContent?: string;
  name: string;
  id: string;
}

// Accept props as an object
function Tooltips({ tooltipContent, name, id }: TooltipProps) {
  return (
    <section
      className={`${
        tooltipContent &&
        "tooltip tooltip-bottom tooltip-secondary hover:rotate-5 transition-all duration-500"
      }`}
      data-tip="👋"
    >
      {tooltipContent && (
        <div className="tooltip-content duration-500 font-normal">
          <div className="animate-pulse text-lg font-black">
            {tooltipContent}
          </div>
        </div>
      )}

      <a
        href={`#${id}`}
        className="btn btn-primary transition-all shadow-lg duration-500"
      >
        {name}
      </a>
    </section>
  );
}

export default Tooltips;
