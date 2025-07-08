import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

interface AstuceItemsProps {
  label: string;
  icon: LucideIcon;
}

const AstuceItems = ({ label, icon: Icon }: AstuceItemsProps) => {
  return (
    <Button className="bg-[#4c4b9b] text-sm px-5 h-12 flex gap-x-1 w-full transition-all duration-500 hover:bg-[#c83d38] hover:text-white">
      <Icon className="w-4 h-4 text-white" />
      {label}
    </Button>
  );
};

export default AstuceItems;
