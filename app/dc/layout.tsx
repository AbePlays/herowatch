import Link from 'next/link'
import React from 'react'

import Wrapper from '../../components/Wrapper'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen bg-[#EFEDE9] p-4 sm:px-8">
        <div className="mx-auto max-w-screen-lg">
          <header>
            <nav className="text-center ">
              <Link href="/" className="text-lg tracking-widest">
                trackr.
              </Link>
            </nav>
          </header>
          <Wrapper heading="dc">{children}</Wrapper>
        </div>
      </div>
    </>
  )
}
