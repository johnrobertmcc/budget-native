import React, {createContext, useContext, useState} from 'react';

// Initialize context object.
const AppContext = createContext();

/**
 * Export useContext Hook.
 *
 * @return {Function} App context.
 */
export function useAppContext() {
  return useContext(AppContext);
}

/**
 * Provide site context for components.
 *
 * @return {Element}                 The AppWrapper context component.
 */
export function AppWrapper({children}) {
  const [uid, setUid] = useState(null);
  const state = {
    uid,
    setUid
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
