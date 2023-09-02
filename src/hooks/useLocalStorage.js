import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialItem) => {
    const [item, setItem] = useState(() => {
        try {
            let item = localStorage.getItem(key)

            return item ? JSON.parse(item) : initialItem
        } catch (error) {
            return initialItem
        }
    }) 

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(item))
    }, [key, item])

    return [item, setItem]
}