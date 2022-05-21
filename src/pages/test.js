import React, { useState, useEffect } from "react"
import axios from "axios"
export default function Component() {
  const [data, setData] = useState({})
  const { title, description, items } = data || {}

  const fetchData = async () => {
    const data = await axios.get("/.netlify/functions/default-data-test")
    setData(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log("DATA", data)

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {items?.map(({ id, name, link }) => (
          <a href={link} key={id} target="_blank">
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}
