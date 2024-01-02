const baseURL = process.env.API_URL
export const fetchData = async (url: string, config?: object) => {
    url = `${baseURL}${url}`
    const res = await fetch(url, {
        headers: {
            authorization: '',
            ...config
        },
        next: {
            revalidate: 10
        }
    })
    const data = await res.json()
    return data
}