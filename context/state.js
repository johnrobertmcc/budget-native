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
 * @param  {object}      props              The component as props.
 * @param  {object}      props.children     The app.
 * @returns {Element}                       The AppWrapper context component.
 */
export function AppWrapper({children}) {
  const [uid, setUid] = useState(null);
  const state = {
    uid,
    setUid
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
