import Image from 'next/image';
import logo from '../../public/DD_logo128x128.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-Dark2">
      <div className="flex">
        <h1 className="text-5xl pt-2 pr-3">Desktop Defender</h1>
        <Image src={logo} alt="Logo" width={64} height={64} className="rounded-sm"/>
      </div>

      <div className="w-2/3 pt-14">
        <h3 className="text-3xl pb-5">About</h3>
        <p>
          Hey there! We're three friends from Reykjavik University on a mission from our 'Cyber Security: Defense Against the Dark Arts' class. Inspired by a challenge to lock down our networks, we created Desktop Defender. It's a simple tool to help you understand and protect your home network from those sneaky security threats. With Desktop Defender, managing your home network is a breeze!
        </p>
      </div>

      <div className="w-2/3 pt-14">
        <h3 className="text-3xl pb-5">Features</h3>
        <ul className="list-disc pl-10">
          <li>Poop</li>
          <li>Pee</li>
          <li>Some more poop</li>
        </ul>
      </div>

      <p className="text-xl pt-20">Click here to download</p>
    </main>
  );
}
