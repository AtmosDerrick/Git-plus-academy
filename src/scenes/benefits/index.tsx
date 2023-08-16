import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Hands-On Learning",
    description:
      "Unlike traditional lessons, GIT Plus Academy immerses you in hands-on experiences. Dive into practical coding exercises that solidify your understanding of tech concepts and equip you with the skills to tackle real-world challenges.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Real-World Projects",
    description:
      "Gain a competitive edge by working on real-world projects that mirror industry scenarios. Apply your knowledge to solve authentic problems, building a portfolio that showcases your practical expertise to potential employers.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Guidance",
    description:
      "Benefit from expert instructors who guide you through every step of your learning journey. Receive personalized feedback on your coding exercises and projects, ensuring you grasp concepts thoroughly and refine your skills effectively.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>EXPERIENCE THE DIFFERENCE: NOT JUST ANOTHER LESSON</HText>
          <p className="my-5 text-sm">
            Discover a transformative learning journey at GIT Plus Academy. We
            go beyond traditional lessons, offering hands-on experiences that
            empower you with practical tech skills. Elevate your expertise
            through immersive coding exercises and real-world projects, setting
            you apart in a competitive tech landscape
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>Empowering Millions: Our Happy Trained Students</HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Join our ever-growing family of over a million satisfied
                students who have embarked on their learning journey with GIT
                Plus Academy. We're dedicated to transforming aspirations into
                accomplishments, as evidenced by the multitude of success
                stories within our community. Our practical teaching
                methodology, backed by expert guidance, has empowered countless
                individuals to not only grasp complex tech subjects but also
                apply their knowledge effectively. Experience the impact of
                quality education as millions of our trained students thrive in
                diverse tech roles worldwide.
              </p>
              <p className="mb-5">
                Amidst this expansive network of learners, you'll find a
                supportive and collaborative environment that fosters growth.
                Our alumni, now integral parts of various industries,
                consistently emphasize the real-world applicability of the
                skills they've honed here. By choosing GIT Plus Academy, you're
                not just enrolling in a program; you're becoming a valued member
                of a community that celebrates achievements, encourages
                innovation, and continues to evolve alongside the ever-changing
                tech landscape. Join us today and become a part of this
                extraordinary journey toward tech excellence.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
