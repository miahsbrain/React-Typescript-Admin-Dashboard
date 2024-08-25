import React from 'react'

function ClientCard({ client }): React.ReactNode {
  return (
    <div className='p-6 bg-white rounded-xl space-y-4'>
      <div>
        <h3 className='text-xl font-semibold'>{client.name}</h3>
        <p className='text-sm text-slate-500'>{ client.title }</p>
      </div>
      <p className='text-xs text-slate-300'>{ client.date }</p>
    </div>
  )
}

export default ClientCard