import { ReactNode } from "react";
import { PersonalDetailContainer } from "./styles";

interface Props {
  label: string;
  icon: ReactNode;
  variant: "full" | "transparent";
  info: string;
}

export function PersonalDetail({ label, icon, variant, info }: Props) {
  return (
    <PersonalDetailContainer variant={variant}>
      <div>{icon}</div>
      <div>
        <p>{label}</p>
      </div>
      <div>
        <p>{info}</p>
      </div>
    </PersonalDetailContainer>
  );
}
