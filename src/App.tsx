import React, { useState } from 'react';
import { Table } from './components/Table';
import { Tabs } from './components/Tabs';
import { ToggleGroup } from './components/ToggleGroup';
import { financialData } from './data/financialData';

function App() {
  const [activeTab, setActiveTab] = useState('income-statement');
  const [period, setPeriod] = useState('annual');
  const [view, setView] = useState('consolidated');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="flex gap-4">
              <ToggleGroup
                options={[{ id: 'quarterly', label: 'Quarterly' }, { id: 'annual', label: 'Annual' }]}
                value={period}
                onChange={setPeriod}
              />
              <ToggleGroup
                options={[{ id: 'consolidated', label: 'Consolidated' }, { id: 'standalone', label: 'Standalone' }]}
                value={view}
                onChange={setView}
              />
            </div>
          </div>
          <div className="text-right text-sm text-gray-500 mb-4">All values in Cr</div>
          <Table data={financialData} />
        </div>
      </div>
    </div>
  );
}

export default App;