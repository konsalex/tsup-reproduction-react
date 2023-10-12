import { useTTQuery } from "@test-lib/react";

export const ReproduceComp = () => {
  const { test } = useTTQuery();

  return <div className="flex flex-col gap-4">Bug</div>;
};

export default ReproduceComp;
