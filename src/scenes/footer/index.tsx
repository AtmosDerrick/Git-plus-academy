import Logo from "@/assets/Logo.png";
import { BenefitType, SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer id="contactus" className="bg-primary-100 py-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
              Empowering Tech Learners Through Practical Education
            </p>
            <p>gitplus All Rights Reserved.</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">info@gpa.edu.gh</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">
              Reach out to us for any inquiries or assistance – we're here to
              help at GitPlus Academy.
            </p>
            <p>(+233) 05 124 9447</p>
            <p>(+233) 20 462 8191</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
