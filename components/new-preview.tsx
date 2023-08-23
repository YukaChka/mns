import { da } from "date-fns/locale";
import Link from "next/link";
type NewPreviewProps = {
  params: {
    id: number;
    date: string;
    title: string;
    preview: string;
  };
};

export default function NewPreview({ params }: NewPreviewProps) {
  const ROUTE_POST_ID = `news/${params.id}`;

  const CurrentDate = new Date(params.date);
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    day: "numeric",
  });
  const date = formatter.format(CurrentDate).split(" ");
  return (
    <>
      <div className="containerNews mb-14">
        <div className="">
          <div className=" text-6xl lg:text-9xl font-bold container flex justify-center">
            {date[0]}
          </div>

          <div className="text-lg lg:text-3xl mx-auto">{date[1]}</div>
        </div>

        <div>
          <div className="ml-11 font-bold text-[20px] lg:text-[30px] ">{params.title}</div>
          <div className="ml-11 text-[15px] lg:text-[20px] ">
            {params.preview}
            <span className="font-bold nobr text-[15px] lg:text-[20px]">
              <Link  href={ROUTE_POST_ID}> Подробнее...</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
