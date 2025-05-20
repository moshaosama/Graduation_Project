import clsx from "clsx";

interface SecurityType {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  data: SecurityType[];
  NumberGrid: number;
}

const ServiceCard = ({ data, NumberGrid }: ServiceCardProps) => {
  return (
    <div
      className={clsx(
        `grid grid-cols-${NumberGrid}  gap-10 max-sm:grid-cols-1  mt-10`
      )}
    >
      {data?.map((data: SecurityType) => (
        <div key={data.id} className="bg-[#1f40c35d] rounded-xl p-5">
          <div className="flex gap-2 items-center">
            <i>{data.icon}</i>
            <h1 className="text-2xl font-bold text-[#1F3FC3]">{data.title}</h1>
          </div>
          <p className="text-sm text-[#464646] mt-5">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
