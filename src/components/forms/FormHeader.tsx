import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardHeader, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ThemeHeader } from "../../types";

export default function FormHeader({
  title,
  showSwitch,
  className,
}: ThemeHeader) {
  const { setTheme } = useTheme();
  return (
    <CardHeader className={className}>
      <span>{title}</span>
      {showSwitch ? (
        <span>
          <Switch
            defaultSelected
            size="sm"
            color="secondary"
            onChange={(event) => {
              event.target.checked ? setTheme("dark") : setTheme("light");
            }}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <FontAwesomeIcon icon={faMoon} className={className} />
              ) : (
                <FontAwesomeIcon icon={faSun} className={className} />
              )
            }
          />
        </span>
      ) : null}
    </CardHeader>
  );
}
