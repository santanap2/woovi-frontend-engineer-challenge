/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import WooviLogo from './components/WooviLogo'
import GithubLogo from './components/GithubLogo'
import LinkedinLogo from './components/LinkedinLogo'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start p-6 text-slate-700">
      <WooviLogo className="mt-12" />
      <h1 className="text-lg font-bold mt-4">
        Woovi Frontend Engineer Challenge
      </h1>

      <div className="mt-12 flex flex-col items-center space-y-2">
        <img
          src="https://avatars.githubusercontent.com/santanap2"
          alt="Pedro Santana"
          className="rounded-full w-48 border-[3px] border-slate-300 shadow-md"
        />
        <h2 className="font-semibold">Pedro Santana</h2>
        <div className="flex items-center space-x-4">
          <Link href="http://www.github.com/santanap2" target="_blank">
            <GithubLogo className="w-6 bg-slate-200 rounded-full" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pedro-santana-dev/"
            target="_blank"
          >
            <LinkedinLogo className="w-6 bg-slate-200 rounded" />
          </Link>
        </div>
      </div>

      <div className="mt-12  w-full flex flex-col items-center justify-center space-y-4">
        <Link
          href="/payment-method"
          className="bg-[#03D69D] py-2 w-full rounded-md text-sm text-center font-bold text-white shadow-md"
        >
          Payment Method
        </Link>

        <Link
          href="/payment-method/pix"
          className="bg-[#03D69D] py-2 w-full rounded-md text-sm text-center font-bold text-white shadow-md"
        >
          PIX
        </Link>

        <Link
          href="/payment-method/credit-card"
          className="bg-[#03D69D] py-2 w-full rounded-md text-sm text-center font-bold text-white shadow-md"
        >
          Credit Card
        </Link>
      </div>

      <div className="absolute bottom-6">
        <span className="text-xs text-slate-400">Julho de 2024</span>
      </div>
    </main>
  )
}
