'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 p-4 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Mole Identifier</div>
        <div className="flex space-x-4">
          <Link 
            href="/" 
            className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/')}`}
          >
            Home
          </Link>
          <Link 
            href="/identify" 
            className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/identify')}`}
          >
            Identify
          </Link>
          <Link 
            href="/disclaimers" 
            className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/disclaimers')}`}
          >
            Disclaimers
          </Link>
          <Link 
            href="/links" 
            className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/links')}`}
          >
            Further Reading
          </Link>
        </div>
      </div>
    </nav>
  );
} 