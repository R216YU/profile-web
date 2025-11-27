import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

type AppTextTooltipProps = {
  children?: React.ReactNode;
  text: string;
  side?: "top" | "right" | "bottom" | "left";
};

const AppTextTooltip = ({
  children,
  text,
  side = "bottom",
}: AppTextTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent side={side}>{text}</TooltipContent>
    </Tooltip>
  );
};

export default AppTextTooltip;
