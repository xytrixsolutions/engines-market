import { TableProps } from "../types/engine";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { easeOut, motion } from "framer-motion";

const tableContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const tableRowAnim = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};
type EngineTableProps<T = Record<string, unknown>> = TableProps<T> & {
  tableType?:
    | "models"
    | "engine_codes"
    | "models_engines"
    | "replacement_costs";
};

const EngineTable = <T extends Record<string, unknown>>({
  columns,
  data,
  tableType,
}: EngineTableProps<T>) => {
  // Add function to determine if cell should be bold
  const shouldBeBold = (columnKey: string) => {
    switch (tableType) {
      case "models":
        return columnKey === "model_name";
      case "engine_codes":
        return columnKey === "engineCode";
      case "models_engines":
        return columnKey === "engineCode";
      case "replacement_costs":
        return columnKey === "model";
      default:
        return false;
    }
  };

  const getWidthClass = () => {
    if (tableType === "engine_codes") {
      return "w-full";
    }
    return "w-4xl";
  };

  const tableContainerClass = `hidden lg:block bg-card rounded-2xl shadow-lg mb-5 overflow-hidden ${getWidthClass()} mx-auto`;

  return (
    <>
      {/* Desktop Table View */}
      <motion.div
        className={tableContainerClass}
        variants={tableContainer}
        initial="hidden"
        animate="visible"
      >
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
                {columns.map((col) => {
                  return (
                    <TableCell
                      key={col.key}
                      className={`px-4 py-2 text-foreground ${
                        shouldBeBold(col.key) ? "font-bold" : ""
                      } ${col.key === "action" ? "text-right" : ""}`}
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key] || "")}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {/* Mobile Card View */}
      <motion.div
        variants={tableContainer}
        initial="hidden"
        animate="visible"
        className="lg:hidden space-y-4"
      >
        {data.map((row, i) => (
          <motion.div
            key={i}
            variants={tableRowAnim}
            className="bg-card rounded-xl shadow-lg p-4 space-y-3"
          >
            {columns.map((col) => (
              <div key={col.key} className="flex justify-between items-start">
                <span className="font-semibold text-foreground">
                  {col.label}
                </span>
                <div
                  className={`text-foreground ${
                    shouldBeBold(col.key) ? "font-bold" : ""
                  } ${
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
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default EngineTable;
