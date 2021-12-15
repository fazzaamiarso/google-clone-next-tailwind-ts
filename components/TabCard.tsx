import { DotsVerticalIcon } from "@heroicons/react/solid";

interface Props {
  text: string;
}

const TabCard = ({ text }: Props) => {
  return (
    <li className="relative group flex flex-col items-center p-4 space-y-4 rounded-sm hover:bg-gray-200 cursor-pointer">
      <div className="absolute p-1 top-2 right-3 rounded-full group-hover:hover:bg-gray-300">
        <DotsVerticalIcon className="h-4 text-transparent group-hover:text-gray-500 " />
      </div>
      <div className="aspect-square rounded-full w-10 bg-gray-800" />
      <p className="text-sm">{text}</p>
    </li>
  );
};

export default TabCard;
