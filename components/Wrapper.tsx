import type { NextPage } from 'next'
import Link from 'next/link'

const Wrapper: NextPage = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/" passHref>
            <a className="text-lg tracking-widest">trackr.</a>
          </Link>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default Wrapper
