import { ServiceCarusel } from "./ServiceCarusel";

export const Services = () => {

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden">
        <h1 className="font-bold text-xl xl:text-5xl mb-10 colorswitch text-center">
          Services & Support
        </h1>
        <p></p>
        <ServiceCarusel />
      </div>
    </div>
  );
};
