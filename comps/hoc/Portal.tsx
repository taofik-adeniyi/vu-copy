import { useEffect, useState } from "react"
{/*
 // @ts-ignore */}
import { createPortal } from "react-dom"
{/*
 // @ts-ignore */}
const Portal= ({ children }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#myportal"))
      : null
}

export default Portal