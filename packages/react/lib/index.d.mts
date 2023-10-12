import { Table } from '@tanstack/react-table';

type TTQueryOptions = {
    initialQuery?: any;
    debug?: boolean;
};
declare const useTTQuery: (table: Table<any>, options?: TTQueryOptions) => {
    fields: TTQueryOptions;
    queryChange: (query: any) => void;
};

export { useTTQuery };
