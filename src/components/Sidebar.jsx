import React, { useState } from 'react';
import { LayoutDashboard, MessageSquare, FileText, User, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, text: 'Dashboard', path: '/' },
    { icon: MessageSquare, text: 'Chat', path: '/chat' },
    { icon: FileText, text: 'Documents', path: '/documents' },
    { icon: User, text: 'Account', path: '/account' },
  ];

  return (
    <div className={`flex flex-col ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen bg-space text-white transition-all duration-300 p-4`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="self-end mb-6 p-2 rounded hover:bg-slate-700 lg:hidden"
      >
        {isCollapsed ? <Menu size={20} /> : <X size={20} />}
      </button>

      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <span className="font-bold text-lg">V</span>
        </div>
        {!isCollapsed && (
          <span className="ml-3 font-semibold text-xl">Vitalis</span>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <a
            key={item.text}
            href={item.path}
            className="flex items-center py-3 px-4 rounded-lg mb-2 hover:bg-slate-700 transition-colors"
          >
            <item.icon size={20} className="text-slate-300" />
            {!isCollapsed && (
              <span className="ml-3">{item.text}</span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;