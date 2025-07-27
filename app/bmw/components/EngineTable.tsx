import React from "react";
import { TableProps } from "../types/engine";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type EngineTableProps<T = Record<string, unknown>> = TableProps<T>;

const EngineTable = <T extends Record<string, unknown>>({
  columns,
  data,
}: EngineTableProps<T>) => {
  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden lg:block bg-card rounded-2xl shadow-lg mb-5 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border">
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className="px-4 py-3 text-left font-semibold bg-royal-blue/85 text-white"
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
                    className="px-4 py-2 text-foreground"
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
          <div
            key={i}
            className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-4 space-y-3">
              {columns.map((col) => {
                // Skip action column in mobile view as it will be at the bottom
                if (col.key === "action") return null;

                return (
                  <div
                    key={col.key}
                    className="flex justify-between items-start"
                  >
                    <span className="text-sm font-medium text-muted-foreground min-w-[120px]">
                      {col.label}:
                    </span>
                    <span className="text-sm text-foreground text-right flex-1">
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key] || "")}
                    </span>
                  </div>
                );
              })}

              {/* Action button at the bottom for mobile */}
              {columns.find((col) => col.key === "action") && (
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-center">
                    {columns
                      .find((col) => col.key === "action")
                      ?.render?.(row["action"], row)}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EngineTable;
