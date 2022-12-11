import React, { useState } from "react";
import { FormDisplay } from "./FormDisplay";
import { InputForm } from "./InputForm";

export const Form = () => {
  const [data, setData] = useState("Display Comp: receving data from Form");
  return (
    <div>
      <InputForm setData={setData} />
      <FormDisplay data={data} />
    </div>
  );
};
