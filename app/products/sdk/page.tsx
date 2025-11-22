"use client";
import { useState } from "react";
import { ChevronDown, Settings, Key, Clock, Monitor, Smartphone, ExternalLink, Copy, Check } from "lucide-react";

export default function HyperkitSDK() {
  const [selectedPlatform, setSelectedPlatform] = useState("web");
  const [selectedFramework, setSelectedFramework] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const webFrameworks = [
    { id: "react", name: "React" },
    { id: "javascript", name: "JavaScript" },
    { id: "wagmi", name: "Wagmi" },
    { id: "nextjs", name: "Next.js" },
  ];

  const mobileFrameworks = [
    { id: "react-native", name: "React Native" },
  ];

  const frameworks = selectedPlatform === "web" ? webFrameworks : mobileFrameworks;

  const codeSnippets: Record<string, string> = {
    react: `"use client"; // only for App Router

import { useEffect, useState } from "react";
import { HyperkitSDK } from "@hyperkit/sdk";

const HyperkitPage = () => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const connectHyperkit = async () => {
      try {
        const HKSDK = new HyperkitSDK({
          dappMetadata: {
            name: "React Dapp",
            url: typeof window !== "undefined" ? window.location.href : "",
          },
          infuraAPIKey: "d3d8b66c6e7f4afaa6c048a44e8a031c",
        });

        const ethereum = HKSDK.getProvider();
        const accounts = await HKSDK.connect();
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Hyperkit connection failed", err);
      }
    };

    connectHyperkit();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Hyperkit Connect in React</h2>
      {account ? <p>Connected: {account}</p> : <p>Connecting...</p>}
    </main>
  );
};

export default HyperkitPage;`,
    javascript: `import { HyperkitSDK } from "@hyperkit/sdk";

const HKSDK = new HyperkitSDK({
  dappMetadata: {
    name: "JavaScript Dapp",
    url: window.location.href,
  },
  infuraAPIKey: "d3d8b66c6e7f4afaa6c048a44e8a031c",
});

async function connect() {
  try {
    const accounts = await HKSDK.connect();
    console.log("Connected:", accounts[0]);
  } catch (err) {
    console.error("Hyperkit connection failed", err);
  }
}

connect();`,
    wagmi: `import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { hyperkitConnector } from "@hyperkit/wagmi-connector";

const config = createConfig({
  chains: [mainnet],
  connectors: [
    hyperkitConnector({
      dappMetadata: {
        name: "Wagmi Dapp",
      },
      infuraAPIKey: "d3d8b66c6e7f4afaa6c048a44e8a031c",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});

export default config;`,
    nextjs: `"use client"; // only for App Router

import { useEffect, useState } from "react";
import { HyperkitSDK } from "@hyperkit/sdk";

const HyperkitPage = () => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const connectHyperkit = async () => {
      try {
        const HKSDK = new HyperkitSDK({
          dappMetadata: {
            name: "Next.js Dapp",
            url: typeof window !== "undefined" ? window.location.href : "",
          },
          infuraAPIKey: "d3d8b66c6e7f4afaa6c048a44e8a031c",
        });

        const ethereum = HKSDK.getProvider();
        const accounts = await HKSDK.connect();
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Hyperkit connection failed", err);
      }
    };

    connectHyperkit();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Hyperkit Connect in Next.js</h2>
      {account ? <p>Connected: {account}</p> : <p>Connecting...</p>}
    </main>
  );
};

export default HyperkitPage;`,
    "react-native": `import { HyperkitSDK } from "@hyperkit/react-native-sdk";
import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const HKSDK = new HyperkitSDK({
  dappMetadata: {
    name: "React Native Dapp",
  },
  infuraAPIKey: "d3d8b66c6e7f4afaa6c048a44e8a031c",
});

export default function App() {
  const [account, setAccount] = useState(null);

  const connect = async () => {
    try {
      const accounts = await HKSDK.connect();
      setAccount(accounts[0]);
    } catch (err) {
      console.error("Hyperkit connection failed", err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Hyperkit Connect in React Native
      </Text>
      {account ? (
        <Text>Connected: {account}</Text>
      ) : (
        <Button title="Connect Wallet" onPress={connect} />
      )}
    </View>
  );
}`,
  };

  const handleCopy = () => {
    if (selectedFramework && codeSnippets[selectedFramework]) {
      navigator.clipboard.writeText(codeSnippets[selectedFramework]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNext = () => {
    if (selectedFramework) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-200">
            <Key size={16} className="text-gray-400" />
            <span className="text-sm font-medium">My First Key</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
            <Settings size={16} />
            Configure
          </button>
        </div>

        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-[#1a1a2e] to-[#1a1a1a] rounded-xl overflow-hidden mb-10">
          <div className="absolute bottom-0 left-0 right-0 h-1">
            <div className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-violet-400 opacity-80"></div>
          </div>
          

          <div className="relative z-10 p-8 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-3">Hyperkit SDK</h1>
              <p className="text-gray-400 mb-4">
                Connect your dapp to wallets securely using Hyperkit SDK
              </p>
              <p className="text-gray-500 text-sm">
                Multi-platform support | Seamless mobile integration | RPC request batching
              </p>
            </div>
          </div>
        </div>

        {/* Quickstart Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Quickstart</h2>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-sm">
              <Clock size={14} />
              5 min
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              This quickstart shows you how to best integrate your dapp with Hyperkit SDK.
            </p>
            <a href="#" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
              View Hyperkit SDK documentation
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Quickstart Card */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800/50 overflow-hidden">
          <div className="flex">
            {/* Steps Sidebar */}
            <div className="w-56 border-r border-gray-800 p-6">
              <h3 className="font-semibold mb-6">Complete these quick steps</h3>
              
              <div className="space-y-0">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                      currentStep >= 1 
                        ? "border-indigo-500 text-indigo-400" 
                        : "border-gray-700 text-gray-500"
                    }`}>
                      1
                    </div>
                    <div className="w-0.5 h-8 bg-gray-800"></div>
                  </div>
                  <span className={`pt-1 text-sm ${currentStep >= 1 ? "text-indigo-400" : "text-gray-500"}`}>
                    Select Platform
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                      currentStep >= 2 
                        ? "border-indigo-500 text-indigo-400" 
                        : "border-gray-700 text-gray-500"
                    }`}>
                      2
                    </div>
                  </div>
                  <span className={`pt-1 text-sm ${currentStep >= 2 ? "text-indigo-400" : "text-gray-500"}`}>
                    Code snippet
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {currentStep === 1 ? (
                <>
                  {/* Platform Selection */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4">What platform are you building for?</h4>
                    <div className="flex gap-4">
                      <button
                        onClick={() => { setSelectedPlatform("web"); setSelectedFramework(""); }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedPlatform === "web"
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <Monitor size={18} className="text-gray-400" />
                        <span>Web</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlatform === "web" ? "border-indigo-500" : "border-gray-600"
                        }`}>
                          {selectedPlatform === "web" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                          )}
                        </div>
                      </button>

                      <button
                        onClick={() => { setSelectedPlatform("mobile"); setSelectedFramework(""); }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedPlatform === "mobile"
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <Smartphone size={18} className="text-gray-400" />
                        <span>Mobile</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlatform === "mobile" ? "border-indigo-500" : "border-gray-600"
                        }`}>
                          {selectedPlatform === "mobile" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Framework Selection */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4">What framework do you use?</h4>
                    <div className="flex gap-4 flex-wrap">
                      {frameworks.map((framework) => (
                        <button
                          key={framework.id}
                          onClick={() => setSelectedFramework(framework.id)}
                          className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                            selectedFramework === framework.id
                              ? "border-indigo-500 bg-indigo-500/10"
                              : "border-gray-700 hover:border-gray-600"
                          }`}
                        >
                          <span>{framework.name}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedFramework === framework.id ? "border-indigo-500" : "border-gray-600"
                          }`}>
                            {selectedFramework === framework.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleNext}
                    disabled={!selectedFramework}
                    className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                      selectedFramework 
                        ? "bg-indigo-600 hover:bg-indigo-500 hover:scale-105" 
                        : "bg-gray-700 cursor-not-allowed opacity-50"
                    }`}
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  {/* Code Snippet View */}
                  <div className="relative">
                    <button
                      onClick={handleCopy}
                      className="absolute top-4 right-4 p-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all duration-200 z-10"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                    <div className="bg-[#0d0d0d] rounded-lg border border-gray-800 p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300 font-mono whitespace-pre">
                        {codeSnippets[selectedFramework]}
                      </pre>
                    </div>
                  </div>

                  <a href="#" className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                    Check out the docs
                  </a>

                  <div className="flex items-center justify-between mt-6">
                    <button 
                      onClick={handlePrevious}
                      className="px-6 py-2.5 border border-gray-700 hover:border-gray-600 rounded-lg font-medium transition-all duration-200"
                    >
                      Previous
                    </button>
                    <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                      Configure API key
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}