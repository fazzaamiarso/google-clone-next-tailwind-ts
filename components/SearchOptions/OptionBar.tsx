import OptionItem from "./OptionItem";
import {
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";

const OptionBar = () => {
  return (
    <ul className="flex gap-5  ">
      <OptionItem Icon={SearchIcon} text="All" selected />
      <OptionItem Icon={PhotographIcon} text="Images" />
      <OptionItem Icon={NewspaperIcon} text="News" />
      <OptionItem Icon={PlayIcon} text="Videos" />
      <OptionItem Icon={MapIcon} text="Maps" />
      <OptionItem Icon={DotsVerticalIcon} text="More" />
    </ul>
  );
};

export default OptionBar;
