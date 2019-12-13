// simple store used for store cones and user options.
import React from "react";

// we don't need initial value here because we will use reducer initializer.
const storeContext = React.createContext({});

export const Provider = storeContext.Provider;
export const Consumer = storeContext.Consumer;
export default storeContext;
