/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import WooviLogo from '../../components/WooviLogo'
import { IPixPortions, pixOptions } from '@/helpers/pixOptions'
import WooviLogoSmall from '@/components/WooviLogoSmall'
import SecureBadge from '@/components/SecureBadge'
import CheckIcon from '@/components/CheckIcon'

export default function PaymentMethod() {
  const [portionSelected, setPortionSelected] = useState<number>(2)

  return (
    <div className="flex flex-col items-center justify- w-full h-full bg-white pl-[15px] pr-5">
      <div className="min-w-full w-full flex justify-center items-center">
        <WooviLogo className="mt-9 h-full" />
      </div>

      <h1 className="mt-10 font-extrabold text-xl text-main-text">
        João, como você quer pagar?
      </h1>

      <div
        className={`border-2 w-full rounded-woovi p-5 relative mt-8 ${portionSelected === 1 ? 'border-woovi-green' : 'border-woovi-border'}`}
        onClick={() => setPortionSelected(1)}
      >
        <div className="text-main-text text-base font-extrabold bg-woovi-border rounded-full w-fit px-5 absolute -top-3">
          Pix
        </div>
        <div className="text-main-text flex justify-between items-end text-lg">
          <div>
            <span className="font-extrabold">1x </span>
            <span className="font-semibold">R$ 30.500,00</span>
          </div>

          <div
            className={`rounded-full w-[26px] h-[26px] flex items-center justify-center border-2 ${portionSelected === 1 ? 'bg-woovi-green border-woovi-green' : 'border-woovi-border'} `}
          >
            {portionSelected === 1 && <CheckIcon />}
          </div>
        </div>

        <div className="text-woovi-green font-semibold">
          <span>Ganhe </span>
          <span className="font-extrabold text-base">3% </span>
          <span>de Cashback</span>
        </div>

        <div className="text-sm font-semibold text-white relative w-full h-full">
          <img src="/Rectangle.png" alt="" className="absolute top-0 z-0" />
          <span className="text-transparent">a</span>
          <div className="absolute z-10 top-1 left-2">
            <span>🤑 </span>
            <span className="font-extrabold">R$ 300,00 </span>
            <span>de volta no seu Pix na hora</span>
          </div>
        </div>
      </div>

      <div className="mt-[34px] text-main-text rounded-woovi w-full relative">
        <div className="text-main-text text-base font-extrabold bg-woovi-border rounded-full w-fit px-5 absolute -top-3 left-[21px]">
          Pix parcelado
        </div>
        {pixOptions.map((item: IPixPortions, index) => (
          <div
            key={item.portionsNumber}
            className={`${index === 0 ? 'pt-5 pb-3 px-5 rounded-t-woovi' : 'py-3 px-5'} ${index === 5 && 'rounded-b-woovi border-b-2'} ${portionSelected === item.portionsNumber ? 'border-woovi-green border-b-2' : 'border-woovi-border'} ${portionSelected - 1 === item.portionsNumber && 'border-b-0'} ${portionSelected + 1 === item.portionsNumber && index !== 0 && 'border-t-0'} border-t-2 border-r-2 border-l-2 border-woovi-border`}
            // first item has more vertical padding and rounded-top
            // last item has rounded-bottom
            // selected item has green borders
            // items around the selected one has no top or bottom borders depending on the position
            // by default, items has no bottom border
            onClick={() => setPortionSelected(item.portionsNumber)}
          >
            <div className="text-main-text font-semibold flex justify-between items-end text-lg">
              <div>
                <span className="font-extrabold">{`${item.portionsNumber}x `}</span>
                <span>
                  {item.portion.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>

              <div
                className={`rounded-full w-[26px] h-[26px] flex items-center justify-center border-2 ${portionSelected === item.portionsNumber ? 'bg-woovi-green border-woovi-green' : 'border-woovi-border'} `}
              >
                {portionSelected === item.portionsNumber && <CheckIcon />}
              </div>
            </div>

            <div className="text-soft-gray text-base font-semibold">
              <span>Total: </span>
              <span>
                {item.total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>

            {item.portionsNumber === 4 && (
              <div className="text-sm font-semibold text-white relative w-full h-full mt-1 mb-3">
                <img
                  src="/Rectangle.png"
                  alt=""
                  className="absolute top-0 z-0"
                />
                <span className="text-transparent">a</span>
                <div className="absolute z-10 top-1 left-2">
                  <span className="font-extrabold"> -3% de juros: </span>
                  <span>Melhor opção de parcelamento</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-softer-gray flex space-x-1 text-sm mt-10 pb-7">
        <SecureBadge />
        <span>Pagamento 100% seguro via:</span>
        <WooviLogoSmall />
      </div>
    </div>
  )
}
