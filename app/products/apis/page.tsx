"use client";
import { useState } from "react";
import { ChevronDown, Settings, Copy, Check, Key, Globe, FileText } from "lucide-react";

export default function InfuraDashboard() {
  const [gasApiEnabled, setGasApiEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const apiKey = "d3d8b66c6e7f4afaa6c048a44e8a031c";
  const apiUrl = `https://gas.api.infura.io/v3/${apiKey}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(apiUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-200"
          >
            <Key size={16} className="text-gray-400" />
            <span className="text-sm font-medium">My First Key</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
            <Settings size={16} />
            Configure
          </button>
        </div>

        {/* API Card */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800/50 overflow-hidden">
          {/* Table Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
            <span className="text-sm font-medium text-gray-400">All APIs</span>
            <span className="text-sm font-medium text-gray-400">Enabled</span>
          </div>

          {/* Gas API Row */}
          <div className="px-6 py-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {/* API Info */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Globe size={20} className="text-indigo-400" />
                  </div>
                  <span className="font-medium">Gas API</span>
                  <span className="text-gray-700">|</span>
                  <a 
                    href="#" 
                    className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                  >
                    <FileText size={14} />
                    Docs
                  </a>
                </div>

                {/* API URL Copy Field */}
                <div className="flex items-center max-w-2xl">
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center w-12 h-12 bg-indigo-600 hover:bg-indigo-500 rounded-l-lg transition-all duration-200 hover:scale-105"
                  >
                    {copied ? (
                      <Check size={18} className="text-white" />
                    ) : (
                      <Copy size={18} className="text-white" />
                    )}
                  </button>
                  <div className="flex-1 bg-gray-900 border border-gray-800 border-l-0 h-12 flex items-center px-4 rounded-r-lg">
                    <code className="text-gray-300 text-sm font-mono truncate">{apiUrl}</code>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 ml-8 pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={gasApiEnabled}
                      onChange={() => setGasApiEnabled(!gasApiEnabled)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                      gasApiEnabled 
                        ? "bg-indigo-600 border-indigo-600" 
                        : "bg-transparent border-gray-600 group-hover:border-gray-500"
                    }`}>
                      {gasApiEnabled && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                  </div>
                  <span className="text-gray-300 text-sm">Gas API enabled</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}