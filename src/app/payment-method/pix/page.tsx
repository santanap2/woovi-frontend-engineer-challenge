/* eslint-disable @next/next/no-img-element */

import ArrowUpIcon from '@/components/ArrowUpIcon'
import CopyButton from '@/components/CopyButton'
import SecurePayment from '@/components/SecurePayment'
import WooviLogo from '@/components/WooviLogo'
import Link from 'next/link'
import React from 'react'

export default function PixPayment() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white px-[18px]">
      <div className="flex flex-col items-center w-full md:w-4/5 lg:w-3/5 xl:w-[800px]">
        <div className="min-w-full w-full flex justify-center items-center">
          <Link href="/">
            <WooviLogo className="mt-9 h-full" />
          </Link>
        </div>

        <h1 className="mt-10 font-extrabold text-xl text-main-text flex flex-col items-center">
          <span>João, pague a entrada de </span>
          <span>R$ 15.300,00 pelo Pix</span>
        </h1>

        <div className="rounded-woovi border-2 border-woovi-green p-1 mt-5">
          <img src="/qrcode.png" alt="QR Code" className="w-full h-full" />
        </div>

        <div className="mt-5">
          <CopyButton />
        </div>

        <div className="mt-5">
          <div className="flex flex-col items-center">
            <span className="text-base text-soft-gray font-semibold">
              Prazo de pagamento
            </span>
            <span className="text-base font-extrabold text-main-text">
              15/12/2021 - 08:17
            </span>
          </div>
        </div>

        <div className="mt-5 w-full space-y-4 pb-5 border-b-2 border-woovi-border">
          <div className="flex justify-between items-center text-base w-full text-main-text pl-6 relative">
            <div className="w-4 h-4 border-2 border-woovi-green rounded-full absolute left-0" />
            <span className=" font-semibold">1ª entrada no Pix</span>
            <span className="font-extrabold">R$ 15.300,00</span>
            <div className="border-l-2 border-woovi-border h-6 absolute left-[7px] top-5" />
          </div>

          <div className="flex justify-between items-center text-base w-full text-main-text pl-6 relative">
            <div className="w-4 h-4 border-2 border-woovi-border rounded-full absolute left-0" />
            <span className=" font-semibold">2ª no cartão</span>
            <span className="font-extrabold">R$ 15.300,00</span>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-baseline text-main-text w-full pb-5 border-b-2 border-woovi-border">
          <span className="text-sm font-semibold">CET: 0,5%</span>
          <span className="font-semibold text-lg">Total: R$ 30.600,00</span>
        </div>

        <div className="mt-[18px] w-full flex justify-between items-center text-main-text pb-5 border-b-2 border-woovi-border">
          <span className="font-extrabold text-base">Como funciona? </span>
          <ArrowUpIcon />
        </div>

        <div className="mt-5 flex flex-col justify-start items-center text-main-text">
          <span className="font-semibold text-sm text-soft-gray">
            Identificador
          </span>
          <span className="font-extrabold">
            2c1b951f356c4680b13ba1c9fc889c47
          </span>
        </div>

        <SecurePayment />
      </div>
    </div>
  )
}
