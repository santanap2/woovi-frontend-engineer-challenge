'use client'
import React from 'react'
import ClipboardIcon from './ClipboardIcon'
import { toast } from 'sonner'

export default function CopyButton() {
  const copy = () => {
    toast('QR CODE copiado com sucesso!')
  }

  return (
    <button
      onClick={copy}
      type="button"
      className="bg-woovi-blue flex items-start space-x-2 px-5 py-[7px] rounded-lg text-white font-semibold text-lg"
    >
      <span>Clique para copiar QR CODE </span>
      <ClipboardIcon />
    </button>
  )
}
