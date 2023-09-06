import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="apply" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Apply)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Fill the form to Apply Now</HText>
          <p className="my-5">
            At Git Plus Academy, we're always eager to hear from you. Whether
            you have questions, need assistance, or wish to explore
            collaboration opportunities, we're just a message away. Your journey
            with Git Plus Academy begins with a simple conversation. Reach out
            through our contact channels, and let's start exploring the
            possibilities together. We're here to support you every step of the
            way.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/19e15faa1b8978e4d50e58ad6add964d"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="First Name"
                {...register("First name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.firstname && (
                <p className="mt-1 text-primary-500">
                  {errors.firstname.type === "required" &&
                    "This field is required."}
                  {errors.firstname.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Last Name"
                {...register("Last name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.lastname && (
                <p className="mt-1 text-primary-500">
                  {errors.lastname.type === "required" &&
                    "This field is required."}
                  {errors.lastname.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Other Name"
                {...register("Other name", {
                  required: false,
                  maxLength: 100,
                })}
              />
              {errors.othername && (
                <p className="mt-1 text-primary-500">
                  {errors.othername.type === "required" &&
                    "This field is required."}
                  {errors.othername.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <div>
                {" "}
                <h3>Gender</h3>
                <div className="flex">
                  <input
                    className="mx-2 py-4"
                    type="radio"
                    value="male"
                    {...register("Gender", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <h3>Male</h3>
                  <input
                    className="mx-2 py-4"
                    type="radio"
                    value="female"
                    {...register("Gender", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <h3>Female</h3>

                  <input
                    className="mx-2 py-4"
                    type="radio"
                    value="other"
                    {...register("Gender", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <h3>Other</h3>
                  {errors.gender && (
                    <p className="mt-1 text-primary-500">
                      {errors.gender.type === "required" &&
                        "This field is required."}
                      {errors.gender.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <h3>Date of Birth</h3>
                  <input
                    className={inputStyles}
                    type="date"
                    placeholder="Other Name"
                    {...register("Other name", {
                      required: false,
                      maxLength: 100,
                    })}
                  />
                  {errors.othername && (
                    <p className="mt-1 text-primary-500">
                      {errors.othername.type === "required" &&
                        "This field is required."}
                      {errors.othername.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>
              </div>

              <input
                className={inputStyles}
                type="text"
                placeholder="PHONE NUMBER"
                {...register("phone", {
                  required: true,
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-primary-500">
                  {errors.phone.type === "required" &&
                    "This field is required."}
                  {errors.phone.type === "pattern" && "Invalid Phone number."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="School"
                {...register("School", {
                  required: false,
                })}
              />
              {errors.school && (
                <p className="mt-1 text-primary-500">
                  {errors.school.type === "required" &&
                    "This field is required."}
                  {errors.school.type === "pattern" && "Invalid Phone number."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Program"
                {...register("Program", {
                  required: true,
                })}
              />
              {errors.progrm && (
                <p className="mt-1 text-primary-500">
                  {errors.progrm.type === "required" &&
                    "This field is required."}
                  {errors.progrm.type === "pattern" && "Invalid Phone number."}
                </p>
              )}

              <h3>Guardian Information</h3>

              <input
                className={inputStyles}
                type="text"
                placeholder="Guardian Name"
                {...register("Gurdian", {
                  required: true,
                })}
              />
              {errors.guardian && (
                <p className="mt-1 text-primary-500">
                  {errors.guardian.type === "required" &&
                    "This field is required."}
                  {errors.guardian.type === "pattern" &&
                    "Invalid Phone number."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="PHONE NUMBER"
                {...register("Guardian phone", {
                  required: true,
                })}
              />
              {errors.gphone && (
                <p className="mt-1 text-primary-500">
                  {errors.gphone.type === "required" &&
                    "This field is required."}
                  {errors.gphone.type === "pattern" && "Invalid Phone number."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
