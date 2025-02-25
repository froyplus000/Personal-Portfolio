interface HeadingProps {
  title: string;
}
function SectionHeading({ title }: HeadingProps) {
  return (
    <h1 className="text-3xl font-bold font-primary text-success border-2 rounded-4xl px-10 py-2 shadow-lg shadow-primary inset-shadow-sm inset-shadow-primary hover:bg-success hover:text-success-content hover:-rotate-3 hover:text-6xl hover:shadow-2xl basetransition">
      {title}
    </h1>
  );
}

export default SectionHeading;
