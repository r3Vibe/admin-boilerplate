import { Spinner } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="flex justify-center w-full h-screen bg-black opacity-75 fixed z-10 top-0 left-0">
      <Spinner
        label="Loading..."
        color="success"
        labelColor="success"
      />
    </div>
  );
}
