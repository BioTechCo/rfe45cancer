'use client';

import React from 'react';

interface MdxTableProps {
  markdown: string;
}

export default function MdxTable({ markdown }: MdxTableProps) {
  // Parse markdown table to React component
  const parseMarkdownTable = (markdownTable: string) => {
    if (!markdownTable || typeof markdownTable !== 'string') {
      console.error('Invalid markdown provided to MdxTable');
      return <div className="text-red-500">Error: Invalid table data</div>;
    }

    // Split the markdown table into lines
    const lines = markdownTable.trim().split('\n');
    
    // Need at least 3 lines for a markdown table (header, separator, and at least one row)
    if (lines.length < 3) {
      return <div className="text-red-500">Error: Invalid table format</div>;
    }

    // Parse header row
    const headerCells = lines[0].split('|')
      .filter(cell => cell.trim() !== '')
      .map(cell => cell.trim());

    // Parse data rows (skip the separator line)
    const dataRows = lines.slice(2).map(line => 
      line.split('|')
        .filter(cell => cell.trim() !== '')
        .map(cell => cell.trim())
    );

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100">
              {headerCells.map((cell, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2 font-semibold">{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="my-4">
      {parseMarkdownTable(markdown)}
    </div>
  );
}