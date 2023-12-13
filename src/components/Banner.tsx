import Button from "./Button";

type btnClick = () => void;

const Banner = ({
  buttonText,
  handleOnClick,
  title,
  desc,
}: {
  buttonText: string;
  handleOnClick: btnClick;
  title: string;
  desc: string;
}) => {
  let titleText = title.split(" ");
  return (
    <div className="flex flex-col justify-center items-start p-12">
      <h1 className="pt-4">
        <span className="pr-2 text-3xl font-bold">{titleText[0]}</span>
        <span className="text-orange-600 text-3xl font-bold">
          {titleText[1]}
        </span>
      </h1>
      <p className="py-4 text-lg">{desc}</p>
      <Button buttonText={buttonText} handleOnClick={handleOnClick} />
    </div>
  );
};

export default Banner;
