import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { rootReducer } from "./modules/rootReducer";

const persistedReducer = persistReducer(
  {
    // a propriedade key é o nome de todo conjunto de dados que o oestado Global está armazenando
    key: "app-store",
    //a propriedade storage é AONDE que estaremos armazenando. Sempre será o "storage" que está sendo importado acima.
    storage: storage,
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
