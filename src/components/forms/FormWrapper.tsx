import { Card } from "@nextui-org/react";
import { ReactNode } from "react";

export default function FormWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}): ReactNode {
  return <Card className={className}>{children}</Card>;
}
