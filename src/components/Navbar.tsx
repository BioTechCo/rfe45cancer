import Link from 'next/link';
import './Navbar.css';
import { color } from 'echarts';

export default function Navbar() {
  return (
    <nav className="" style={{backgroundColor:"rgb(145, 177, 163)"}}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <Link href="/" className="text-2xl font-bold text-gray-800">
          Stat Blog
        </Link> */}
        <div className="space-x-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px', gap:'20px' }}>
          <Link href="/" >
            <button  className="Navbar-button">
              Home
            </button>
          </Link>
          <Link href="/about">
          <button className="Navbar-button">
              About
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
