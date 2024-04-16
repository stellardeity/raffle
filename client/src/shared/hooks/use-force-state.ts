import { useCallback, useState } from "react";

export const useForceSetState = () => {
  const [keyForRerender, setFullState] = useState("__");
  const reloadComponent = useCallback(() => setFullState(Math.random().toString()), []);

  return { keyForRerender, reloadComponent };
};
