import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <Image src = "/blue/logo.png" width ="50" height="50" />
      <Image src = "/blue/logo_toi.png" width ="100" height="30" />
       <ul>
        <li>
        <Link href="/products">Products</Link>
        </li>
        <li>
        <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/energy/Energy">Energy</Link>
        </li>
        <li >
            <Link href="/graphics/Graphics">Graphics</Link>
        </li>
        <li >
            <Link href="/realTime/Realtime">RealTime</Link>
        </li>
        <li >
            <Link href= "/schedule/Schedule">Schedule</Link>
        </li>
        <li >
            <Link href= "/users/Users"> Users</Link>
        </li>
        <li>
        <Link href="/">Voltar</Link>
        </li>
       </ul>

       </>
      
    )
  }
  