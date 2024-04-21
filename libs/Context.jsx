'use client'
const { useContext } = require('react')
const { createContext, useState } = require('react')

const PageContext = createContext()

export const PageProvider = ({ children }) => {
  const [page, setpage] = useState(1)

  return (
    <PageContext.Provider value={{ page, setpage }}>
      {children}{' '}
    </PageContext.Provider>
  )
}

export const Usepagecontext = () => useContext(PageContext)
