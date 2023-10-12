import { useEffect, useCallback, useMemo } from "react";
import { Table } from "@tanstack/react-table";

type TTQueryOptions = {
  initialQuery?: any;
  debug?: boolean;
};

export const useTTQuery = (table: Table<any>, options?: TTQueryOptions) => {
  const resolvedOptions: TTQueryOptions = {
    initialQuery: undefined,
    debug: false,
    ...options,
  };

  const fields = useMemo(() => resolvedOptions, [table]);

  const queryChange = useCallback(
    (query: any) => {
      console.log("Test");
    },
    [fields]
  );

  useEffect(() => {
    console.log("Effect");
  }, []);

  return { fields, queryChange };
};
