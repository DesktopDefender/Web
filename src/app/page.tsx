import Image from 'next/image';
import logo from '../../public/DD_logo128x128.png'
import homeScreen from '../../public/DD_HomeScreen.png'
import networkGraph from '../../public/DD_NetworkChart.png'
import networkPie from '../../public/DD_NetworkPie.png'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-Dark2">
      <div className="flex">
        <h1 className="text-5xl pt-2 pr-3">Desktop Defender</h1>
        <Image src={logo} alt="Logo" width={64} height={64} className="rounded-sm" />
      </div>

      <div className="mt-10 flex items-center justify-center h-12 w-80 bg-DDOrange rounded-full transition-transform duration-500 ease-in-out hover:scale-105">
        <Link href="/download" passHref>
          <p className="text-xl font-medium text-center w-full h-full flex items-center justify-center">
            Click here to download
          </p>
        </Link>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between md:w-2/3">
        <Image src={homeScreen} alt="Home Screen" width={280} height={280} className="mb-4 md:mb-0 rounded shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        <Image src={networkGraph} alt="Network Graph" width={280} height={280} className="mb-4 md:mb-0 rounded shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        <Image src={networkPie} alt="Network Pie" width={280} height={280} className="mb-4 md:mb-0 rounded shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
      </div>

      <div className="w-2/3 pt-14">
        <h3 className="text-3xl font-semibold pb-5">About</h3>
        <p>
          Hey there! We're three friends from Reykjavik University on a mission from our 'Cyber Security: Defense Against the Dark Arts' class. Inspired by a challenge to lock down our networks, we created Desktop Defender. It's a simple tool to help you understand and protect your home network from those sneaky security threats. With Desktop Defender, managing your home network is a breeze!
        </p>
      </div>

      <div className="w-2/3 pt-14">
        <h3 className="text-3xl font-semibold pb-5">Features</h3>
        <ul className="list-none pl-10">
          <li className="flex items-center mb-4">
            <span className="text-DDOrange mr-2">•</span>
            <p className="text-lg font-medium hover:text-DDOrange transition-colors duration-300">Network Traffic Monitor</p>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-DDOrange mr-2">•</span>
            <p className="text-lg font-medium hover:text-DDOrange transition-colors duration-300">Devices Insight View</p>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-DDOrange mr-2">•</span>
            <p className="text-lg font-medium hover:text-DDOrange transition-colors duration-300">Router Security</p>
          </li>
        </ul>
      </div>



    </main>
  );
}
