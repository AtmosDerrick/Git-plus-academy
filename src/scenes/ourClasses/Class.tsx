import HText from "@/shared/HText";

type Props = {
  name: string;
  description?: string;
  image: string;
  course: Array<string>;
  preRequisite: Array<string>;
  career: Array<string>;
};

const Class = ({
  name,
  description,
  image,
  course,
  preRequisite,
  career,
}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  lg:h-[340px] h-[265px]  w-[350px] lg:w-[450px] flex-col items-center justify-center
  whitespace-normal  text-center text-white
  opacity-0 transition duration-500 opacity-80 `;

  return (
    <li>
      <div className="mb-8 w-full justify-between gap-4 bg-white py-8  md:flex md:px-12">
        {" "}
        <div className="lg:w-[450px] relative mx-5   mb-4  w-[350px]">
          <div className="my-2 text-xl font-semibold">{name}</div>
          <div>
            <div className={overlayStyles}>
              <p className="absolute bottom-1  text-2xl ">{name}</p>
              <p className="mt-5">{description}</p>
            </div>
            <img alt={`${image}`} src={image} />
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-3  ">
          <div className="my-2   w-full pl-8  md:pl-0 ">
            <div className="mb-4 font-montserrat text-lg font-bold underline ">
              Course Outline
            </div>
            {course.map((item) => (
              <div>
                <ul className="list-disc">
                  <li>{item}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="my-2 w-full  pl-8  md:px-4  md:pl-0">
            <div className="mb-4 font-montserrat text-lg font-bold underline">
              Pre - Requisite Knowledge
            </div>

            {preRequisite.map((item) => (
              <ul className="list-disc">
                <li>
                  {" "}
                  <div>{item}</div>
                </li>
              </ul>
            ))}
          </div>
          <div className="my-2 w-full p-2  pl-8   md:pl-0">
            <div className="mb-4 font-montserrat text-lg font-bold underline md:basis-3/5">
              Career Options
            </div>

            {career.map((item) => (
              <ul className="list-disc px-4">
                <li>
                  <div>{item}</div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Class;
