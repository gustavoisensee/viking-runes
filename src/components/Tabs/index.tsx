import React, { useState } from 'react';
import List from '../List';
import CircleView from '../CircleView'; // Import CircleView

type TabState = 'list' | 'circle';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabState>('list');

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-center mb-6">
        <button
          onClick={() => setActiveTab('list')}
          className={`px-6 py-3 m-1 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
            ${
              activeTab === 'list'
                ? 'bg-yellow-500 text-gray-900 shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          List View
        </button>
        <button
          onClick={() => setActiveTab('circle')}
          className={`px-6 py-3 m-1 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
            ${
              activeTab === 'circle'
                ? 'bg-yellow-500 text-gray-900 shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          Circle View
        </button>
      </div>

      <div className="p-4 bg-gray-800 rounded-lg shadow-inner min-h-[400px]">
        {activeTab === 'list' && <List />}
        {activeTab === 'circle' && <CircleView />}
      </div>
    </div>
  );
};

export default Tabs;
