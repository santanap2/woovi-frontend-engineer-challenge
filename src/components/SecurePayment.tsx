import React from 'react'
import SecureBadge from './SecureBadge'
import WooviLogoSmall from './WooviLogoSmall'

export default function SecurePayment() {
  return (
    <div className="text-softer-gray flex space-x-1 text-sm mt-10 pb-7">
      <SecureBadge />
      <span>Pagamento 100% seguro via:</span>
      <WooviLogoSmall />
    </div>
  )
}
