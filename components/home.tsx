'use client';

import React, { useState } from 'react';
import { Settings, Copy, Key, TrendingUp, BarChart3, Crown, ChevronRight, Info } from 'lucide-react';

export default function MetaMaskHome() {
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCopyKey = () => {
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const productUpdates = [
    { type: 'Feature', title: 'Hemi Endpoints Available', description: 'New blockchain network support' },
    { type: 'Feature', title: 'Sei Endpoints Available to All', description: 'Expanded network access' },
    { type: 'Feature', title: 'MEV Protection Available', description: 'Enhanced transaction security' },
    { type: 'Feature', title: 'Scroll Endpoints Available to All', description: 'Layer 2 scaling solution' },
    { type: 'Update', title: 'Credit Pricing Policy Update', description: 'Revised pricing structure' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">API Keys</h1>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-200 hover:scale-105">
            <Crown size={18} />
            Create new API key
          </button>
        </div>

        {/* API Keys Table */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800/50 overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Name</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Daily Request Health %</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Daily Requests</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Daily Credit Usage</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Updated</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                <td className="px-6 py-4 font-medium">My First Key</td>
                <td className="px-6 py-4">
                  <div className="w-40 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 w-0"></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-400">0</td>
                <td className="px-6 py-4 text-gray-400">0</td>
                <td className="px-6 py-4 text-gray-400">Nov 22, 2025</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                      <Settings size={16} />
                      Configure
                    </button>
                    <button 
                      onClick={handleCopyKey}
                      className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                    >
                      <Copy size={16} />
                      {copiedKey ? 'Copied!' : 'Copy Key'}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Analytics Overview */}
        <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Daily Request Health */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-gray-400" />
                <h3 className="text-lg font-semibold">Daily Request Health</h3>
              </div>
              <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                View Stats
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative w-48 h-48 mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-gray-800"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold">0</div>
                  <div className="text-gray-400 text-sm">Total</div>
                </div>
              </div>
              
              <p className="text-center text-gray-400 text-sm max-w-xs">
                No data available yet. Send requests to see your daily request health for today.
              </p>
            </div>
          </div>

          {/* Daily Credit Usage */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 size={20} className="text-gray-400" />
                <h3 className="text-lg font-semibold">Daily Credit Usage</h3>
                <Info size={16} className="text-gray-500" />
              </div>
              <div className="flex items-center gap-3">
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                  Add Credits
                </button>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                  View Usage
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">0</span>
                <span className="text-gray-400">of 3M used</span>
                <span className="ml-auto text-gray-400 text-sm flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-600"></span>
                  3M available
                </span>
              </div>
              
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/3 border-r border-gray-700"></div>
                  <div className="w-1/3 border-r border-gray-700"></div>
                  <div className="w-1/3"></div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-400 text-sm mt-8">
              No data available yet. Send requests to see your daily request usage for today.
            </p>
          </div>
        </div>

        {/* Product Updates */}
        <h2 className="text-2xl font-bold mb-6">Product updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {productUpdates.map((update, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800/50 p-6 hover:border-gray-700/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer group"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                update.type === 'Feature' 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }`}>
                {update.type}
              </span>
              <h3 className="text-base font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {update.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {update.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}