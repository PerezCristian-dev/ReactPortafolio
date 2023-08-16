import { useState } from "react";
import { data } from "../../data/data";
import { Services } from "./Services";

export const Education = ({ reference }) => {
  const [education, setEducation] = useState(data.education);
  //
  return (
    <div className="p-4 xl:p-20" id={"#about"} ref={reference}>
      <Services />
    </div>
  );
};
