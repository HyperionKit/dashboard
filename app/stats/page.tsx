'use client';

import React, { useState } from 'react';
import { Info, ChevronDown, Search, Settings } from 'lucide-react';

export default function StatsPage() {
  const [selectedKey, setSelectedKey] = useState('My First Key');
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 1 Hour');
  const [viewAllProjects, setViewAllProjects] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* Key Selector */}
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 hover:bg-[#202020] transition-colors">
            <span className="text-sm">{selectedKey}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
            <Settings size={16} />
            Configure
          </button>

          {/* View Stats Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={viewAllProjects}
              onChange={(e) => setViewAllProjects(e.target.checked)}
              className="w-4 h-4 rounded bg-[#1a1a1a] border-gray-700 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-300">View stats for all projects</span>
          </label>

          {/* Time Range Selector */}
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 hover:bg-[#202020] transition-colors">
            <span className="text-sm">{selectedTimeRange}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Requests Volume */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Requests Volume</h2>
          <Info size={16} className="text-gray-500" />
        </div>
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800/50 rounded-xl p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="mb-4">
                <Search size={48} className="text-gray-600 mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No data available for selected timeframe</h3>
              <p className="text-gray-400 text-sm mb-4">
                It's likely that you haven't sent any requests during this timeframe.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                Learn how to make requests
              </button>
            </div>
          </div>
          {/* Illustration placeholder */}
          <div className="flex justify-end mt-4">
            <div className="relative w-64 h-48">
              <svg viewBox="0 0 256 192" className="w-full h-full opacity-30">
                {/* Dashboard illustration */}
                <rect x="20" y="20" width="100" height="120" rx="8" fill="#374151" />
                <rect x="30" y="40" width="30" height="30" rx="4" fill="#4B5563" />
                <rect x="30" y="80" width="80" height="8" rx="4" fill="#4B5563" />
                <rect x="30" y="95" width="60" height="8" rx="4" fill="#4B5563" />
                <rect x="140" y="40" width="96" height="60" rx="8" fill="#4B5563" />
                <circle cx="188" cy="70" r="20" fill="#6366F1" opacity="0.3" />
                <circle cx="188" cy="70" r="15" fill="#818CF8" opacity="0.5" />
                <circle cx="188" cy="70" r="10" fill="#A5B4FC" opacity="0.7" />
                <rect x="140" y="110" width="96" height="30" rx="8" fill="#4B5563" />
                <rect x="140" y="150" width="96" height="30" rx="8" fill="#4B5563" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Method Request Volumes */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Method Request Volumes</h2>
            <Info size={16} className="text-gray-500" />
          </div>
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 hover:bg-[#202020] transition-colors text-sm">
            All products
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 text-sm">
            <Search size={20} className="text-gray-600" />
            <div>
              <p className="font-medium">No data available for selected timeframe</p>
              <p className="text-gray-400">It's likely that you haven't sent any requests during this timeframe.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Network Request Volumes */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Network Request Volumes</h2>
            <Info size={16} className="text-gray-500" />
          </div>
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-2 hover:bg-[#202020] transition-colors text-sm">
            All methods
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800/50 rounded-xl p-12">
          <div className="flex items-center justify-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        </div>
      </div>

      {/* Requests Activity */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Requests Activity</h2>
          <Info size={16} className="text-gray-500" />
        </div>
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 text-sm">
            <Search size={20} className="text-gray-600" />
            <div>
              <p className="font-medium">No data available for selected timeframe</p>
              <p className="text-gray-400">It's likely that you haven't sent any requests during this timeframe.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Eth_call activity */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Eth_call activity</h2>
          <span className="text-sm text-gray-400">(in the last 30 minutes)</span>
          <Info size={16} className="text-gray-500" />
        </div>
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 text-sm">
            <Search size={20} className="text-gray-600" />
            <div>
              <p className="font-medium">No data available for selected timeframe</p>
              <p className="text-gray-400">It's likely that you haven't sent any requests during this timeframe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}