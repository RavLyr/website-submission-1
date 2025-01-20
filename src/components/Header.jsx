// components/Header.js
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const Header = () => {
  return (
    <header className=" rounded-md shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="text-2xl text-stone-950 font-bold">Wekku</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full py-1 px-3"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="text-stone-950 hover:text-gray-900">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink className="text-stone-950 hover:text-gray-900">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" passHref>
                <NavigationMenuLink className="text-stone-950 hover:text-gray-900">
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button className="bg-sky-900 text-sm text-white py-3 px-5 rounded-l-lg shadow-xl rounded-r-lg">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
