/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import WooviLogo from '../components/WooviLogo'
import GithubLogo from '../components/GithubLogo'
import LinkedinLogo from '../components/LinkedinLogo'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start px-5 pb-32 text-main-text">
      <div className="min-w-full w-full flex justify-center items-center">
        <WooviLogo className="mt-9" />
      </div>
      <h1 className="text-lg font-bold mt-4 text-center">
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

      <div className="mt-12 w-full sm:w-2/3 md:w-[500px] flex flex-col items-center justify-center space-y-4">
        <Link
          href="/payment-method"
          className="bg-woovi-green py-2 w-full rounded-md text-sm text-center font-bold text-white shadow-md"
        >
          Payment Method
        </Link>

        <Link
          href="/payment-method/pix"
          className="bg-woovi-green py-2 w-full rounded-md text-sm text-center font-bold text-white shadow-md"
        >
          PIX
        </Link>

        <Link
          href="/payment-method/credit-card"
          className="bg-woovi-green py-2 w-full rounded-md text-sm text-center font-bold text-white shadow-md"
        >
          Credit Card
        </Link>

        <p className="text-sm text-soft-gray text-center">
          Para retornar para essa página, clique na logo da Woovi no topo da
          tela.
        </p>
      </div>

      <div className="absolute bottom-6">
        <span className="text-xs text-soft-gray">Julho de 2024</span>
      </div>
    </main>
  )
}
