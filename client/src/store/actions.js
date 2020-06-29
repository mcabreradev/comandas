import {fetchProducts, fetchMarkets} from '../services/apiService'
import {saveMarkets, saveProducts} from './actions'

export const getMarkets = async (location, dispatch) => {
 const markets = await fetchMarkets(location)
  dispatch(saveMarkets(markets))
}

export const getProducts = async (markets, dispatch) => {
  const products = await fetchProducts(markets)
  dispatch(saveProducts(products))
}

dispatch({
  type: FETCH_POKEDEX,
  payload: pokedex
});
