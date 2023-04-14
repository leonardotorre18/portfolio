import React from 'react'

export default function useStorage(key: string, initialValue: any = null) {
  const [state, setState] = React.useState(initialValue);

  React.useEffect(() => {
    const currentValue = localStorage.getItem(key)

    // Validated current Value in LocalStorage
    currentValue ?
      setState(currentValue)
      : localStorage.setItem(key, initialValue)
  }, [])
  
  // Force New value in LocalStorage
  const setNewValue = (newValue: any ) => {
    localStorage.setItem(key, newValue)
    setState(newValue)
  }
  
  return [state, setNewValue]
}
