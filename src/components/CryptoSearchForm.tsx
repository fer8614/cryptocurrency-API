import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CryptoSearchForm() {

  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)

  const [ pair, setPair ] = useState<Pair>({
    currency: '',
    cryptocurrency: ''
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const [ error, setError ] = useState( '' );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ( Object.values(pair).includes('') ) {
      setError('All fields are required')
      return
    }
    // Ckeck the API
  }

  return (
    <form 
      className="form"
      onSubmit={ handleSubmit }  
    >
      { error && <ErrorMessage>{ error }</ErrorMessage> }
      <div className="field">
        <label htmlFor="currency">Coin: </label>
        <select 
          name="currency" 
          id="currency"
          value={ pair.currency }
          onChange={ handleChange } 
        >
          <option value="">-- Select --</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency: </label>
        <select 
          name="cryptocurrency" 
          id="cryptocurrency"
          value={ pair.cryptocurrency }
          onChange={ handleChange }
        >
          <option value="">-- Select --</option>
          { cryptoCurrencies.map(crypto => (
            <option key={ crypto.CoinInfo.FullName} value={ crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="quote"/>
    </form>
  )
}
