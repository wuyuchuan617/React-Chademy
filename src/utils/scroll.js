// // ref: https://stackoverflow.com/questions/57088861/react-setstate-hook-from-scroll-event-listener

// import { useEffect, useState, useRef } from 'react'

// const useWindowScroll = () => {
//   const prevScrollY = useRef(0)

//   const [goingUp, setGoingUp] = useState(false)
//   const [scrollYState, setScrollYState] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY

//       console.log(prevScrollY.current, currentScrollY)
//       const over100 = currentScrollY > 100
//       if (prevScrollY.current < currentScrollY && goingUp) {
//         setGoingUp(false)
//       }
//       if (prevScrollY.current > currentScrollY && !goingUp) {
//         setGoingUp(true)
//       }

//       prevScrollY.current = currentScrollY

//       // scroll-y === 0 觸發
//       if (prevScrollY.current === 0) {
//         setGoingUp(true)
//       }
//     }

//     const isBrowser = typeof window !== `undefined`
//     if (!isBrowser) return

//     window.addEventListener('scroll', handleScroll, { passive: true })

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [goingUp])

//   return { goingUp, prevScrollY }
// }

// export default useWindowScroll

// ref: https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4
import { useEffect, useState } from 'react'

export const DIRECTION = {
  down: 'DOWN',
  up: 'UP',
  unset: 'UNSET',
}

const getDocumentBoundingClientRect = (documentElement) =>
  typeof documentElement.getBoundingClientRect === 'function'
    ? documentElement.getBoundingClientRect()
    : {
        top: 0,
        left: 0,
      }

const getDocumentElement = (isServer) =>
  !isServer
    ? document.documentElement
    : {
        scrollHeight: 0,
        scrollWidth: 0,
        getBoundingClientRect: getDocumentBoundingClientRect,
      }

const getWindowSize = (isServer) => ({
  innerHeight: !isServer ? window.innerHeight : 0,
  innerWidth: !isServer ? window.innerWidth : 0,
})

const createScrollState = (lastScrollTop) => {
  const isServer = !process.browser
  const documentElement = getDocumentElement(isServer)
  const bodyBoundingRect = documentElement.getBoundingClientRect()
  const windowSize = getWindowSize(isServer)

  const scrollY = bodyBoundingRect.top
  const scrollX = bodyBoundingRect.left
  const scrollYMax = documentElement.scrollHeight - windowSize.innerHeight
  const scrollXMax = documentElement.scrollWidth - windowSize.innerWidth
  const scrollDirection =
    lastScrollTop > bodyBoundingRect.top ? DIRECTION.down : DIRECTION.up

  return {
    scrollY,
    scrollX,
    scrollDirection,
    scrollYMax,
    scrollXMax,
  }
}

const useWindowScroll = () => {
  const [state, setState] = useState(createScrollState(0))

  useEffect(() => {
    const listener = () =>
      setState((previousState) => createScrollState(previousState.scrollY))

    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return state
}

export default useWindowScroll
