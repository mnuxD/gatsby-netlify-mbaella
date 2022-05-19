import React, { useState, useEffect } from "react"
import axios from "axios"
export default function Component() {
  const [message, setMessage] = useState("")

  const fetchData = async () => {
    const data = await axios.get("../api/hello-world")
    console.log("DATA", data)
    setMessage(data.data.message)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h1>El texto del services es: {message}</h1>
}
