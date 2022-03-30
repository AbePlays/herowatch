import type { NextPage } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Wrapper: NextPage = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header>
        <nav>
          <Link href="/" passHref>
            <a className="text-lg tracking-widest">trackr.</a>
          </Link>
        </nav>
      </header>
      <div>{children}</div>
    </motion.div>
  )
}

export default Wrapper
