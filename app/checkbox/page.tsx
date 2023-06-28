"use client"

import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";

export default function Page() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <section className="mx-auto my-6 max-w-xl">
      <Checkbox
        label="I'm a checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </section>
  );
}
