import { ServiceCarusel } from "./ServiceCarusel";

export const Services = () => {

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden">
        <h1 className="font-bold text-xl xl:text-3xl m-4 text-emerald-500 uppercase text-center">
          Services & Support
        </h1>
        <p></p>
        <ServiceCarusel />
      </div>
    </div>
  );
};
