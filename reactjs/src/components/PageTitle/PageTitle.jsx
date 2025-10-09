import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [pageTitle, setPageTilte] = useState("");

    useEffect(() =>{
        setPageTilte(document.title || "Hi")
    }, []);
  return (
    <p>Page title: {pageTitle}</p>
  )
}
