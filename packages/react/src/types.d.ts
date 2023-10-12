import "@tanstack/react-table";
import { Field } from "react-querybuilder/dist/cjs/react-querybuilder.cjs.development";

declare module "@tanstack/table-core" {
  // TTQDMeta
  interface ColumnMeta<TData extends RowData, TValue> {
    optionalFields?: Partial<Field>;
  }
}
