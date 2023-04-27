import { createContext, useEffect, useState } from "react";

let authContext = createContext();
let Parent = ({ children }) => {

  const [user, setUser] = useState(null)
  const [authMethod, setAuthMethod] = useState(null)
  const [signInComplete, setSignInComplete] = useState(0)


  return (
    <div>
      <authContext.Provider
        value={{ user, setUser, authMethod, setAuthMethod, signInComplete, setSignInComplete }}
      >
        {children}
      </authContext.Provider>
    </div>
  );
};

export { authContext };
export default Parent;
