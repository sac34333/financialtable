import React from 'react';

interface ToggleGroupProps {
  options: { id: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function ToggleGroup({ options, value, onChange }: ToggleGroupProps) {
  return (
    <div className="inline-flex rounded-full border">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`px-4 py-1 text-sm font-medium first:rounded-l-full last:rounded-r-full transition-colors
            ${
              value === option.id
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}