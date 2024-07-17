import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { CryptoCurrency, Pair } from './types'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : Pair) => Promise<void>
}

export const useCryptoStore = create <CryptoStore> () ( devtools ( ( set ) => ({
    cryptoCurrencies : [],
    fetchCryptos : async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({ cryptoCurrencies }))
    },

    fetchData : async ( pair ) => {
        fetchCurrentCryptoPrice( pair )
    }


})))

