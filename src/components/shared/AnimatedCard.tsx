import { cn } from "@/lib/utils";
import Image from "next/image";

export const AnimatedCard = ({
  data,
  className,
}: {
  data: any;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 p-1",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      <div className="relative z-10 bg-white dark:bg-gray-900 p-6 rounded-xl h-full flex flex-col transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={data.img}
            width={600}
            height={400}
            alt={data.title}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {data.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
          {data.description}
        </p>

        {/* <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
            Learn More
          </span>
          <ArrowUpRight className="text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div> */}
      </div>
    </div>
  );
};
