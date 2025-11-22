'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, TrendingUp, Box, Smartphone, Key, Activity, BookOpen, Droplet, HelpCircle, Settings, Crown, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
  section: 'main' | 'products' | 'bottom';
  badge?: string;
  hasChevron?: boolean;
}

export function Sidebar() {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { id: 'home', icon: Home, label: 'Home', href: '/', section: 'main' },
    { id: 'stats', icon: TrendingUp, label: 'Stats', href: '/stats', section: 'main' },
    { id: 'infura', icon: Box, label: 'Infura RPC', href: '/products/infura', section: 'products' },
    { id: 'sdk', icon: Smartphone, label: 'Hyperkit SDK', href: '/products/sdk', section: 'products' },
    { id: 'apis', icon: Key, label: 'Developer APIs', href: '/products/apis', section: 'products' },
    { id: 'web3auth', icon: Box, label: 'web3auth', href: '/products/web3auth', section: 'products', badge: 'New' },
    { id: 'status', icon: Activity, label: 'Status', href: '/status', section: 'bottom' },
    { id: 'docs', icon: BookOpen, label: 'Docs', href: '/docs', section: 'bottom' },
    { id: 'faucet', icon: Droplet, label: 'Faucet', href: '/faucet', section: 'bottom' },
    { id: 'help', icon: HelpCircle, label: 'Help', href: '/help', section: 'bottom' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '/settings', section: 'bottom', hasChevron: true },
  ];

  const mainItems = menuItems.filter(item => item.section === 'main');
  const productItems = menuItems.filter(item => item.section === 'products');
  const bottomItems = menuItems.filter(item => item.section === 'bottom');

  const MenuLink = ({ item }: { item: MenuItem }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        href={item.href}
        className={`group w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 rounded-lg mx-2 my-0.5 ${
          isActive
            ? 'text-white bg-gradient-to-r from-indigo-600/20 to-indigo-500/10 shadow-lg shadow-indigo-500/10'
            : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800/60'
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon size={19} className="transition-all group-hover:scale-110" strokeWidth={2.5} />
          <span className="font-medium text-[13px]">{item.label}</span>
        </div>
        <div className="flex items-center gap-2">
          {item.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold text-amber-300 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-full border border-amber-400/30 shadow-sm">
              {item.badge}
            </span>
          )}
          {item.hasChevron && <ChevronRight size={16} className="text-gray-500 transition-all group-hover:translate-x-1 group-hover:text-gray-400" />}
        </div>
      </Link>
    );
  };

  return (
    <div className="sticky top-0 w-80 h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#050505] text-white flex flex-col border-r border-gray-800/50 backdrop-blur-xl flex-shrink-0">
      {/* Header */}
      <div className="p-6 pb-8 border-b border-gray-800/50">
        <Link href="/" className="block group">
          <h1 className="text-4xl font-bold leading-tight transition-colors group-hover:text-indigo-400">
            Hyperkit
          </h1>
          <p className="text-lg text-gray-400 mt-1 transition-colors group-hover:text-gray-300">Developer</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Main Items */}
        <div className="mb-8">
          {mainItems.map(item => (
            <MenuLink key={item.id} item={item} />
          ))}
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="px-6 py-2 mb-1 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Products
          </div>
          {productItems.map(item => (
            <MenuLink key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Items */}
        <div>
          {bottomItems.map(item => (
            <MenuLink key={item.id} item={item} />
          ))}
        </div>
      </nav>

      {/* Upgrade Button */}
      <div className="p-4 border-t border-gray-800/50">
        <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]">
          <Crown size={20} />
          <span>Upgrade</span>
        </button>
      </div>
    </div>
  );
}