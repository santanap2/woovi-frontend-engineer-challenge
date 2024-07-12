'use client'

import React, { useEffect } from 'react'
import ArrowDownIcon from './ArrowDownIcon'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  creditCardMask,
  credCardDateMask,
  cvvMask,
  cpfMask,
} from '@/helpers/masks'

export default function CreditCardForm() {
  const formSchema = z.object({
    cardName: z.string().min(1, 'Informe o nome presente no cartão de crédito'),
    cpf: z.string().min(1, 'Informe seu CPF'),
    cardNumber: z
      .string()
      .min(16, 'Informe um número de cartão válido')
      .max(19, 'Informe um número de cartão válido'),
    cardDate: z
      .string()
      .min(4, 'Informe uma data válida')
      .max(5, 'Informe uma data válida'),
    cardCvv: z
      .string()
      .min(3, 'Informe um número válido')
      .max(3, 'Informe um número válido'),
    cardPortions: z.string(),
  })

  type FormProps = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormProps>({
    resolver: zodResolver(formSchema),
    criteriaMode: 'all',
    mode: 'onSubmit',
    defaultValues: {
      cardName: '',
      cpf: '',
      cardNumber: '',
      cardDate: '',
      cardCvv: '',
      cardPortions: '1',
    },
  })

  const cardNumberValue = watch('cardNumber')
  const cpfValue = watch('cpf')
  const cardDateValue = watch('cardDate')
  const cardCvvValue = watch('cardCvv')

  useEffect(() => {
    setValue('cpf', cpfMask(cpfValue))
  }, [cpfValue, setValue])

  useEffect(() => {
    setValue('cardNumber', creditCardMask(cardNumberValue))
  }, [cardNumberValue, setValue])

  useEffect(() => {
    setValue('cardDate', credCardDateMask(cardDateValue))
  }, [cardDateValue, setValue])

  useEffect(() => {
    setValue('cardCvv', cvvMask(cardCvvValue))
  }, [cardCvvValue, setValue])

  return (
    <form
      onSubmit={handleSubmit((data: FormProps) => console.log(data))}
      className="mt-7 w-full text-main-text space-y-7"
    >
      <div className="relative">
        <input
          {...register('cardName')}
          type="text"
          id="cardName"
          name="cardName"
          className={`rounded-lg border-2 ${errors.cardName ? 'border-red-700' : 'border-woovi-border'} w-full p-5 text- font-semibold text-lg focus:outline-woovi-green placeholder:text-softer-gray placeholder:text-sm placeholder:font-semibold`}
          placeholder="Digite seu nome"
        />

        <label
          htmlFor="cardName"
          className={`absolute -top-2 left-5 bg-white text-sm font-semibold ${errors.cardName && ' text-red-700'}`}
        >
          Nome completo
        </label>
      </div>

      <div className="relative">
        <input
          {...register('cpf')}
          type="text"
          id="cpf"
          name="cpf"
          className={`rounded-lg border-2 ${errors.cpf ? 'border-red-700' : 'border-woovi-border'} w-full p-5 text- font-semibold text-lg focus:outline-woovi-green placeholder:text-softer-gray placeholder:text-sm placeholder:font-semibold`}
          placeholder="000.000.000-00"
        />

        <label
          htmlFor="cpf"
          className={`absolute -top-2 left-5 bg-white text-sm font-semibold ${errors.cpf && ' text-red-700'}`}
        >
          CPF
        </label>
      </div>

      <div className="relative">
        <input
          {...register('cardNumber')}
          type="text"
          id="cardNumber"
          name="cardNumber"
          maxLength={19}
          className={`rounded-lg border-2 ${errors.cardNumber ? 'border-red-700' : 'border-woovi-border'} w-full p-5 text- font-semibold text-lg focus:outline-woovi-green placeholder:text-softer-gray placeholder:text-sm placeholder:font-semibold`}
          placeholder="0000 0000 0000 0000"
        />

        <label
          htmlFor="cardNumber"
          className={`absolute -top-2 left-5 bg-white text-sm font-semibold ${errors.cardNumber && ' text-red-700'}`}
        >
          Número do cartão
        </label>
      </div>

      <div className="w-full flex space-x-[22px]">
        <div className="relative w-full">
          <input
            {...register('cardDate')}
            type="text"
            id="cardDate"
            name="cardDate"
            maxLength={5}
            className={`rounded-lg border-2 ${errors.cardDate ? 'border-red-700' : 'border-woovi-border'} w-full p-5 text- font-semibold text-lg focus:outline-woovi-green placeholder:text-softer-gray placeholder:text-sm placeholder:font-semibold`}
            placeholder="00/00"
          />

          <label
            htmlFor="cardDate"
            className={`absolute -top-2 left-5 bg-white text-sm font-semibold ${errors.cardDate && ' text-red-700'}`}
          >
            Vencimento
          </label>
        </div>

        <div className="relative w-full">
          <input
            {...register('cardCvv')}
            type="text"
            id="cardCvv"
            name="cardCvv"
            maxLength={3}
            className={`rounded-lg border-2 ${errors.cardCvv ? 'border-red-700' : 'border-woovi-border'} w-full p-5 text- font-semibold text-lg focus:outline-woovi-green placeholder:text-softer-gray placeholder:text-sm placeholder:font-semibold`}
            placeholder="000"
          />

          <label
            htmlFor="cardCvv"
            className={`absolute -top-2 left-5 bg-white text-sm font-semibold ${errors.cardCvv && ' text-red-700'}`}
          >
            CVV
          </label>
        </div>
      </div>

      <div className="relative">
        <select
          {...register('cardPortions')}
          id="cardPortions"
          name="cardPortions"
          className="rounded-lg border-2 border-woovi-border w-full p-5 text- font-semibold text-lg focus:outline-woovi-green placeholder:text-softer-gray placeholder:text-sm placeholder:font-semibold relative"
        >
          <option value={1}>1x de R$ 15.300,00</option>
        </select>
        <ArrowDownIcon className="absolute top-1/2 right-5" />

        <label
          htmlFor="cardPortions"
          className={`absolute -top-2 left-5 bg-white text-sm font-semibold ${errors.cardName && ' text-red-700'}`}
        >
          Parcelas
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-woovi-blue text-white text-lg font-semibold text-center h-[39px]"
      >
        Pagar
      </button>
    </form>
  )
}
