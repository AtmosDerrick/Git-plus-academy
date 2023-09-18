import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Web Development",
    image: image1,
    courseOutlined: ["Html & Css", "JavaScript", "React", "BootStrap"],
    preRequisite: ["Basic Computer Skill", "Working with Browsers"],
    career: ["Aspiring Software Enginer", "Aspiring Web Developer"],
  },
  {
    name: "Mobile App Development",
    image: image2,
    courseOutlined: [
      "Fundamental of Android Dev",
      "Building UI XML",
      "Store and Retrieve SQLLite",
      "Remote Server Connection",
      "AppStore Deployment",
      "Git and GitHub",
    ],
    preRequisite: ["Basic Computer Skill", "Basic Programming Skills"],
    career: ["Aspiring Software Enginer", "Aspiring Mobile Dev"],
  },
  {
    name: "Python Programming",
    image: image3,
    courseOutlined: ["Html & Css", "JavaScript", "React", "BootStrap"],
    preRequisite: ["Basic Computer Skill", "IT Literate", ""],
    career: [
      "Python Developer",
      "Software Engineering",
      "Data Scientist / Data Analyst",
      "Machine Learning Engineer",
    ],
  },
  {
    name: "Microsoft Office",
    image: image4,
    courseOutlined: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Powerpoint",
      "MicroSoft Outlook",
      "Microsoft Access",
      "Productive Tools",
    ],
    preRequisite: ["Basic Computer Skill"],
    career: ["IT Literate", "Secertary"],
  },
  {
    name: "Graphic Design",
    image: image5,
    courseOutlined: [
      "Principle of Design",
      "App Usage(Photoshop)",
      "Brand Identity",
      "Social Media Posts",
      "Package Design",
    ],
    preRequisite: ["Basic Computer Skill"],
    career: [
      "Graphic Designer",
      "User experience (UX) designer",
      "User interface (UI) designer",
    ],
  },
  {
    name: "Digital Marketting",

    image: image6,
    courseOutlined: [
      "Overview of Digital Marketing",
      "Building Strong Online Presence",
      "Social Media Marketting",
      "Building Strong Online Presence",
      "Analytics and Interpretation",
      "Photography",
    ],
    preRequisite: ["Basic Computer Skill", "Working with Browsers"],
    career: ["Digital Marketer", "Content Creater", "Social Media Marketer"],
  },
  {
    name: "USSD",

    image: image7,
    courseOutlined: [
      "Designing USSD Menu",
      "USSD Menu Navigation",
      "Handling USSD to Database",
      "Connecting USSD to Database",
      "Connecting USSD to App Logic",
      "Adding SMS to USSD Functionality",
      "Testing USSD App",
      "Simulation USSD Apps",
    ],
    preRequisite: ["Basic Computer Skill", "Working with Browsers"],
    career: ["Aspiring Software Enginer", "USSD Developer"],
  },

  {
    name: "Microsoft Power Bi",

    image: image8,
    courseOutlined: [
      "Overview of Digital Marketting",
      "Building Strong Online Presence",
      "Social Media Marketting",
      "Building Strong Online Presence",
      "Analytics and Interpretation",
      "Photography",
    ],
    preRequisite: ["Basic Computer Skill", "Working with Browsers"],
    career: [
      "Power BO Data Analyst",
      "Power BI Developer",
      "Power BI Software Enginner",
    ],
  },
  {
    name: "Database Managment",

    image: image9,
    courseOutlined: [
      "Overview of Digital Marketting",
      "Building Strong Online Presence",
      "Social Media Marketting",
      "Building Strong Online Presence",
      "Analytics and Interpretation",
      "Photography",
    ],
    preRequisite: ["Basic Computer Skill", "Working with Browsers"],
    career: [
      "Aspiring Software Enginer",
      "Database Analyst",
      "Database Manager",
      "Data Administrator",
    ],
  },

  {
    name: "Data",

    image: image9,
    courseOutlined: [
      "Overview of Digital Marketting",
      "Building Strong Online Presence",
      "Social Media Marketting",
      "Building Strong Online Presence",
      "Analytics and Interpretation",
      "Photography",
    ],
    preRequisite: ["Basic Computer Skill", "Working with Browsers"],
    career: [
      "Aspiring Software Enginer",
      "Database Analyst",
      "Database Manager",
      "Data Administrator",
    ],
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-primary-200 w-full py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Explore Our Classes</HText>
            <p className="py-5">
              Discover a world of learning with GIT Plus Academy's thoughtfully
              curated classes. Through immersive hands-on experiences, our
              courses empower you with practical skills across various tech
              domains. Whether you're a beginner or looking to advance, our
              diverse range of classes ensures personalized growth. Join us to
              elevate your tech journey and thrive in the dynamic world of
              technology.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-auto w-full md:mx-auto  ">
          <ul className="">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                course={item.courseOutlined}
                preRequisite={item.preRequisite}
                career={item.career}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
