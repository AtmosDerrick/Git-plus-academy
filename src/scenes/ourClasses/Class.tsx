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
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 opacity-80 hover:opacity-90`;

  return (
    <li>
      <div className="flex w-full justify-between gap-4">
        {" "}
        <div className="lg:w-[450px] relative mx-5   mb-4  w-[350px]">
          <div>
            <div className={overlayStyles}>
              <p className="text-2xl">{name}</p>
              <p className="mt-5">{description}</p>
            </div>
            <img alt={`${image}`} src={image} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 border-b-2 border-red-600 ">
          <div className="my-2   w-full border-r-2 border-primary-500">
            <div className="mb-4 basis-4/5 font-montserrat text-lg font-bold underline">
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
          <div className="my-2 w-full  border-r-2 px-4">
            <div className="mb-4 basis-3/5 font-montserrat text-lg font-bold underline">
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
          <div className="my-2 w-full  border-l-2 border-primary-500 p-2">
            <div className="mb-4 basis-3/5 font-montserrat text-lg font-bold underline">
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
