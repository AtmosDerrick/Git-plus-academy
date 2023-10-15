import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "@/scenes/KidsHome";
import ContactUs from "@/scenes/contactUs";

import { SelectedPage } from "@/shared/types";

interface Props {}

export const KidsCanCode = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="mt-24">
      <Home setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
};
