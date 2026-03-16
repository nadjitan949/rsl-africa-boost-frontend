import Link from "next/link"

function Header() {
  return (
    <>
    <header className="border w-full">
        <div className="border"></div>
        <ul>
            <li><Link href="Yo">Salut</Link></li>
        </ul>

        <div className="border">
            
        </div>
    </header>
    </>
  )
}

export default Header
