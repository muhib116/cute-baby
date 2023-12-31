import { fetchData } from "./apiConfig"
import { get } from 'lodash'

export const pricePrint = (price: number) => {
    return '৳ '+price
}

export const getBanner = async (bannerLocation?: string) => {
    const { data } = await fetchData('banners/list')
    return bannerLocation ? get(data, bannerLocation) : null
}