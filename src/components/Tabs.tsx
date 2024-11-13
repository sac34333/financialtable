import React from 'react';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = [
    { id: 'income-statement', label: 'Income Statement' },
    { id: 'balance-sheet', label: 'Balance sheet' },
    { id: 'cash-flow', label: 'Cash flow' },
    { id: 'ratio', label: 'Ratio' },
    { id: 'shareholding', label: 'Shareholding' },
  ];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600 border hover:bg-gray-50'
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}