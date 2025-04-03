interface CardLineTempProps {
  srcImg: string;
  description: string;
  ano: string;
}

export default function CardLineTemp({
  srcImg,
  description,
  ano,
}: CardLineTempProps) {
  return (
    <div className="z-10 h-30 w-30 mt-8 bg-blue-800 border-2 border-black rounded-full flex items-center justify-center relative cursor-pointer">
      <div className="absolute -top-12">
        <p className="text-3xl">{ano}</p>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-14 object-cover "
          width={100}
          src={srcImg}
          alt="logo"
        />
      </div>
      <div className="absolute w-[150%] top-40 text-black bg-white p-2 rounded-bl-3xl rounded-tr-3xl">
        <p className="text-1xl font-sans-serif">{description}</p>
      </div>
    </div>
  );
}
