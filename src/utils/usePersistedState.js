import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function usePersistedState({key, initialState}) {
  if(key === undefined) key = 'theme';

  const [state, setState] = useState(() => {
    const cookiesValue = Cookies.get(key);

    if (cookiesValue) {
      return JSON.parse(cookiesValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    Cookies.set(key, JSON.stringify(state), { expires: 7 });
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;