import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  Reducer,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type GeolocationContextType = {
  state: IGeolocationState;
  dispatch: Dispatch<any>;
};

type GeolocationContextProviderProps = {
  children: ReactNode;
};

type ActionType = {
  type: 'GET_LOCATION' | 'REJECT_LOCATION';
  payload?: any;
};

interface IGeolocationState {
  state?: {
    lat?: number;
    lng?: number;
  };
}

const GeolocationContext = createContext<GeolocationContextType | undefined>(
  undefined,
);

const initialState: IGeolocationState = {};

function reducer(state: IGeolocationState, { type, payload }: ActionType) {
  switch (type) {
    case 'GET_LOCATION':
      return {
        ...state,
        state: payload,
      };
    case 'REJECT_LOCATION':
      return {
        ...state,
        state: {},
      };
    default:
      return state;
  }
}

export const GeolocationContextProvider: FC<
  GeolocationContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<IGeolocationState, ActionType>>(
    reducer,
    initialState,
  );
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return (
    <GeolocationContext.Provider value={value}>
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocationReducer = () =>
  useReducer<Reducer<IGeolocationState, ActionType>>(reducer, initialState);

export const useGeolocationContext = () => {
  const context = useContext(GeolocationContext);

  if (context === undefined) {
    throw new Error(
      'useGeolocationContext must be used within a GeolocationContextProvider!',
    );
  }

  return context;
};
