import { TableProps } from "../types/engine";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type EngineTableProps<T = Record<string, unknown>> = TableProps<T> & {
  tableType?: "models" | "engine_codes" | "models_engines";
};

const EngineTable = <T extends Record<string, unknown>>({
  columns,
  data,
  tableType,
}: EngineTableProps<T>) => {
  const getWidthClass = () => {
    if (tableType === "models" || tableType === "models_engines") {
      return "w-4xl";
    }
    return "w-full";
  };

  const tableContainerClass = `hidden lg:block bg-card rounded-2xl shadow-lg mb-5 overflow-hidden ${getWidthClass()} mx-auto`;

  return (
    <>
      {/* Desktop Table View */}
      <div className={tableContainerClass}>
        <Table className="w-full table-auto">
          <TableHeader>
            <TableRow className="border-b border-border">
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className="px-4 py-3 text-left font-semibold bg-neon-red/85 text-white"
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                className={
                  i % 2 === 0
                    ? "border-b border-border hover:bg-accent/50"
                    : "bg-muted/30 border-b border-border hover:bg-accent/50"
                }
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className={`px-4 py-2 text-foreground ${
                      i === 0 ? "" : ""
                    } ${col.key === "action" ? "text-right" : ""}`}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] || "")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {data.map((row, i) => (
          <div key={i} className="bg-card rounded-xl shadow-lg p-4 space-y-3">
            {columns.map((col) => (
              <div key={col.key} className="flex justify-between items-start">
                <span className="font-semibold text-foreground">
                  {col.label}
                </span>
                <div
  className={`text-foreground ${
    (col.key === "model" && col.render) || col.key === "image"
      ? "flex justify-center w-full"
      : col.key === "action"
      ? "flex justify-center w-full"
      : "text-right"
  }`}
>

                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] || "")}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default EngineTable;
