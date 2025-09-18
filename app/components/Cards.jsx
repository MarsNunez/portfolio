import { data } from "../data";

const Cards = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.services.map((service) => (
        <div
          key={service.title}
          className="border border-emerald-900 border-l-4 p-9  hover:border-emerald-600 ease-out duration-300"
        >
          <h3 className="title text-2xl mb-2">{service.title}</h3>
          <p className="font-light leading-7 mb-7">{service.description}</p>
          <button className="uppercase text-xs tracking-widest text-green-500 font-medium">
            View All Plugins
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
