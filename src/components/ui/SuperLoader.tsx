import { Spinner } from "@nextui-org/react";

export default function SuperLoader() {
  return (
    <div className="flex justify-center w-full h-screen">
      <Spinner
        label="Looking For Superuser Account..."
        color="success"
        labelColor="success"
      />
    </div>
  );
}
