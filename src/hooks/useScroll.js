import { useState, useEffect, useRef } from 'react'

export const useScroll = () => {
  const [xScroll, setXScroll] = useState(false)
  const stickyRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
        ? setXScroll(true)
        : setXScroll(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [xScroll])

  return {
    xScroll
  }
}
