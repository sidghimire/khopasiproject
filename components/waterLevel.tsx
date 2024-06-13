"use client";

export function WaterLevel({ randomPoint }:any) {
  return (
    <div className="flex flex-row">
      <div className=" h-[450px] w-[200px] ml-auto">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            className={`border-b border-b-[#fff] h-[90px] text-right`}
          >
            <p className="my-auto pt-4 -mr-7 text-[16px]">Level: {5 - index}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-300 border rounded-2xl  h-[450px] w-[200px] my-auto mx-auto flex flex-col">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            className={`border-b border-b-[#fff] h-[90px]  ${
              randomPoint <= 4 - index && "bg-gray-300"
            } ${index == 4 && "rounded-b-2xl"} ${
              index == 0 && "rounded-t-2xl"
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
}
