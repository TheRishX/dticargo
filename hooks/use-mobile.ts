import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let mql: MediaQueryList | null = null;
    try {
      mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    } catch {
      // Ignore
    }
    
    if (!mql) return;
    
    // Set initial value inside effect, but wrapped in a slightly deferred way if needed
    // or just set it:
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mql.matches)

    const onChange = () => {
      setIsMobile(mql?.matches ?? false)
    }
    mql.addEventListener("change", onChange)
    return () => mql?.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
