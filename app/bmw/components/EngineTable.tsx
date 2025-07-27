import React from "react";

type Column = {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type EngineTableProps = {
  columns: Column[];
  data: any[];
};

const EngineTable: React.FC<EngineTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full text-gray-900">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left font-semibold bg-gray-100 text-gray-900 border-b border-gray-200"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={
                i % 2 === 0
                  ? "bg-white border-b border-gray-100 hover:bg-blue-50"
                  : "bg-gray-50 border-b border-gray-100 hover:bg-blue-50"
              }
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 align-middle">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EngineTable;
