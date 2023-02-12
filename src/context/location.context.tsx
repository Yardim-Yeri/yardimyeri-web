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

type LocationContextType = {
  state: ILocationState;
  dispatch: Dispatch<any>;
};

type ActionType = {
  type: 'SET_PROVINCE' | 'SET_DISTRICT' | 'SET_NEIGHBORHOOD' | 'SET_STREET';
  payload?: any;
};

interface ILocationContextProviderProps {
  children: ReactNode;
}

interface ILocationState {
  province?: string | number;
  district?: string | number;
  neighborhood?: string | number;
  street?: string | number;
}

const initialState: ILocationState = {
  province: '',
  district: '',
  neighborhood: '',
  street: '',
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

function reducer(state: ILocationState, { type, payload }: ActionType) {
  switch (type) {
    case 'SET_PROVINCE':
      return {
        ...state,
        province: payload,
      };
    case 'SET_DISTRICT':
      return {
        ...state,
        district: payload,
      };
    case 'SET_NEIGHBORHOOD':
      return {
        ...state,
        neighborhood: payload,
      };
    case 'SET_STREET':
      return {
        ...state,
        street: payload,
      };
    default:
      return state;
  }
}

export const LocationContextProvider: FC<ILocationContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<ILocationState, ActionType>>(
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
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationReducer = () =>
  useReducer<Reducer<ILocationState, ActionType>>(reducer, initialState);

export const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error(
      'useLocationContext must be used within a locationContextProvider!',
    );
  }

  return context;
};
