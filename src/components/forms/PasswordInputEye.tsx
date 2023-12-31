import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { PasswordInputEyeInterface } from "../../types";

export default function PasswordInputEye({visible, toggleVisibility}:PasswordInputEyeInterface ) {
  return (
    <button
      className="focus:outline-none"
      type="button"
      onClick={toggleVisibility}
    >
      {visible ? (
        <FontAwesomeIcon
          icon={faEyeSlash}
          className="text-2xl text-default-400 pointer-events-none"
        />
      ) : (
        <FontAwesomeIcon
          icon={faEye}
          className="text-2xl text-default-400 pointer-events-none"
        />
      )}
    </button>
  );
}
