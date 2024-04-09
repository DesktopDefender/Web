import Image from "next/image";
import logo from "../../../public/DD_logo128x128.png";

export default function Downloads() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-Dark2">
      <div className="flex">
        <h1 className="text-5xl pt-2 pr-3">Desktop Defender</h1>
        <Image
          src={logo}
          alt="Logo"
          width={64}
          height={64}
          className="rounded-sm"
        />
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-4">
          <a href="/download.txt" download="DesktopDefender">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-3xl transition-transform duration-500 ease-in-out hover:scale-110">
              <i className="devicon-apple-original text-6xl" />
              <span className="mt-4 text-xl">Mac Intel</span>
            </div>
          </a>

          <a href="/releases/0.1.0/Desktop Defender_0.1.0_aarch64.dmg">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-3xl transition-transform duration-500 ease-in-out hover:scale-110">
              <i className="devicon-apple-original text-6xl" />
              <span className="mt-4 text-xl">Mac ARM</span>
            </div>
          </a>

          <a href="/download.txt" download="DesktopDefender">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-3xl transition-transform duration-500 ease-in-out hover:scale-110">
              <i className="devicon-windows11-original colored text-6xl" />
              <span className="mt-4 text-xl">Windows</span>
            </div>
          </a>

          <a href="/download.txt" download="DesktopDefender">
            <div className="flex flex-col items-center p-5 bg-gray-800 rounded-3xl transition-transform duration-500 ease-in-out hover:scale-110">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
                className="h-16 w-16"
              />
              <span className="mt-4 text-xl">Linux</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
