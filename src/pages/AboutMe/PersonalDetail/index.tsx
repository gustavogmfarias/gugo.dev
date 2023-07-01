import { ReactNode } from "react";

interface Props {
  label: string;
  icon: ReactNode;
  variant: "full" | "transparent";
  info: string;
}

export function PersonalDetail({ label, icon, variant, info }: Props) {
  return (
    <p>
      {label}, {icon}, {variant}, {info}
    </p>
  );
}
