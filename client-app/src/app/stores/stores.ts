import { createContext, useContext } from "react";
import imovelStore from "./imovelStore";

interface Store{
    imoveisStore: imovelStore
}
export const store: Store = {
    imoveisStore: new imovelStore()
}
export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}