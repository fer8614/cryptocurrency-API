import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"


function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Cryptocurrency</span> quote
        </h1>
        
        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App