import Image from "next/image";

export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1">
      <div className="relative h-[300px] max-md:h-[220px] overflow-hidden">
        <Image
          src="/img/bowl.jpg"
          alt="Fresh grain bowl with golden beets and burrata"
          fill
          className="object-cover hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="relative h-[300px] max-md:h-[220px] overflow-hidden">
        <Image
          src="/img/cafe-counter.png"
          alt="Cafe counter with fresh sandwiches, bowls, and hand pies"
          fill
          className="object-cover hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="relative h-[300px] max-md:h-[220px] overflow-hidden">
        <Image
          src="/img/delivery.png"
          alt="Counterpart Foods delivery to The Daily Grind"
          fill
          className="object-cover hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
    </div>
  );
}
