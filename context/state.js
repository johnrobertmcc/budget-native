import React, {createContext, useContext, useState} from 'react';

// Initialize context object.
const AppContext = createContext();

/**
 * Export useContext Hook.
 *
 * @returns {Function} App context.
 */
export function useAppContext() {
  return useContext(AppContext);
}

/**
 * Provide site context for components.
 *
 * @param  props0
 * @param  props0.children
 * @returns {Element}                 The AppWrapper context component.
 */
export function AppWrapper({children}) {
  const [uid, setUid] = useState(null);
  const state = {
    uid,
    setUid
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
