import { getFirestore, query, collection, onSnapshot } from 'firebase/firestore'
import firebaseApp from '../../services/firebase'
import { createContext, useEffect, useState } from 'react'

const HamburguersContext = createContext({})

const HamburguersProvider = ({ children }) => {

  const [foods,setFoods] = useState([])
  
  useEffect(() => {
    const db = getFirestore(firebaseApp)
    const q = query(collection(db, 'hamburguers'))

    onSnapshot(q, (querySnapshot) => {
      const aux = []
      querySnapshot.forEach((doc) => {
        aux.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setFoods(aux)
    })
  }, [])

  return (
    <HamburguersContext.Provider value={{foods}}>
      {children}
    </HamburguersContext.Provider>
  )
}
export { HamburguersContext, HamburguersProvider }
