const ThreeColumnsSection = ({ threeSectionData }) => {
  return (
    <div className="container py-10 lg:py-32">
      <div className="mx-auto grid gap-20 md:w-3/4 lg:grid-cols-3 lg:gap-24">
        {threeSectionData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-5"
          >
            <div className="grid h-20 place-items-center">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="heading-three mb-4 mt-12">{card.title}</div>
            <div className="text-center leading-6 opacity-65">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ThreeColumnsSection;
