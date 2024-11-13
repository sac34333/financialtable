import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface TableProps {
  data: {
    id: string;
    label: string;
    values: number[];
    trend: number[];
    isPercentage?: boolean;
    isNested?: boolean;
  }[];
}

export function Table({ data }: TableProps) {
  const periods = ['Mar 2021', 'Mar 2022', 'Mar 2023', 'Mar 2024', 'TTM 2024'];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-medium text-gray-600 w-1/4">Particulars</th>
            {periods.map((period) => (
              <th key={period} className="text-right py-3 px-4 font-medium text-gray-600">
                {period}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className={`py-3 px-4 ${row.isNested ? 'pl-8' : ''}`}>{row.label}</td>
              {row.values.map((value, index) => (
                <td key={index} className="text-right py-3 px-4">
                  <div className="flex items-center justify-end gap-2">
                    {row.trend && row.trend[index] > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : row.trend && row.trend[index] < 0 ? (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    ) : null}
                    <span>
                      {row.isPercentage
                        ? value.toFixed(2)
                        : value.toLocaleString('en-IN', {
                            maximumFractionDigits: 0,
                          })}
                      {row.isPercentage ? '%' : ''}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}