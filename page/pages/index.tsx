import type { NextPage } from "next"
import { useState } from "react"
import axios from "axios"

const Index: NextPage = () => {
    const [result, setResult] = useState("")
    const [url, setUrl] = useState("")
    const post = async () => {
        const res = await axios.post("http://127.0.0.1:5000/create", {
            body: JSON.stringify({"url":url})
        })
        setResult(res.data.url)
    }
    return <div>
        <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" />
        <p>{result}</p>
        <button onClick={post}>create</button>
    </div>
}
export default Index