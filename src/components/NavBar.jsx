import { Button } from '@/components/ui/button';
import Banner from '@/images/Banner.webp'; // Make sure the path is correct
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      className="z-10 p-6 bg-gradient-to-b from-black/60 to-transparent"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-[50%] container flex flex-col items-center space-y-6">
        <h1
          className="text-white text-6xl font-bold tracking-wider pt-[10%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
          style={{
            textShadow: `
      1px 1px 2px rgba(0, 0, 0, 0.9), 
      2px 2px 4px rgba(0, 0, 0, 0.7), 
      3px 3px 6px rgba(0, 0, 0, 0.5),
      4px 4px 8px rgba(0, 0, 0, 0.3)
    `,
          }}
        >
          CREATORVERSE
        </h1>
        <div className="flex space-x-12 pt-[20%] pb-[5%]">
          <Button className="w-64 px-8 py-8 text-lg bg-gray-800 hover:bg-gray-900">
            <Link to="/" className="text-white rounded-md">
              VIEW ALL CREATORS
            </Link>
          </Button>
          <Button className="w-64 px-8 py-8 text-lg bg-gray-800 hover:bg-gray-900">
            <Link to="/add" className="text-white rounded-md">
              ADD A CREATOR
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
