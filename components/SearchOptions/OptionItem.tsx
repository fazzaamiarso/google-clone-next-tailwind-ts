interface Props {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  text: string;
  selected?: boolean;
}

const OptionItem = ({ Icon, text, selected = false }: Props) => {
  return (
    <li className={`py-2 ${selected ? "border-b-4 border-blue-500" : ""} `}>
      <a href="#" className="flex items-center space-x-1 text-gray-600">
        <Icon className="w-4 hidden sm:inline" />
        <span className="text-sm">{text}</span>
      </a>
    </li>
  );
};

export default OptionItem;
