import { useEffect, useState } from "react"
import axios from "axios"
const UseFetch = (type, path, body) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const callApi = () => {
        setLoading(true)
        axios[type](`${path}`, body)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log("err", err);
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }

    return { loading, error, data, callApi }
}
export { UseFetch }