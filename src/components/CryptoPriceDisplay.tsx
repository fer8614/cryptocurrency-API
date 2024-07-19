import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore( ( state ) => state.result ) 
    const hasResult = useMemo( () => Object.values( result ).length > 0, [ result ] )

  return (
    <div>
        { hasResult && (
            <div>
                <h2>Price</h2>
                <div className="result">
                    <div>
                        <p>The price is: <span>{ result.PRICE }</span></p>

                    </div>
                </div>
            </div>
        )}    
    </div>
  )
}
