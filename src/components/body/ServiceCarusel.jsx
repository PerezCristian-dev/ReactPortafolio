import { motion } from "framer-motion";
import { data } from "./../../data/data";

const services = data.Services;

export const ServiceCarusel = () => {
  // const carousel = useRef();
  // const [largo, setLargo] = useState(0);

  // useEffect(() => {
  //   setLargo(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <div className="flex w-screen">
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className=" overflow-hidden animate__animated animate__backInRight min-w-[350px] min-h-[400px] m-2 rounded-xl shadow-2xl bg-project text-white"
          >
            <img
              src={service.imgUrl}
              alt={service.name}
              className="w-full h-[60%]"
            />
            <div className="flex flex-col items-center justify-center h-[40%]">
              <h2 className="font-bold mt-2">{service.name}</h2>
              <p className="px-5 my-1 text-center">{service.description}</p>
              <button className="bg-emerald-500 p-2 m-2 rounded-lg animate-pulse">
                Learn More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
