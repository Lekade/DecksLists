export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "APP/SET-APP-STATUS":
      return {...state, status: action.status}
    case "APP/APP-ERROR":
      return {...state, error: action.error}
    default:
      return state
  }
}

export const setAppStatus = (status: RequestStatusType) => ({
  type: 'APP/SET-APP-STATUS',
  status
} as const)

export const setAppError = (error: string | null) => ({
  type: 'APP/APP-ERROR',
  error
} as const)


type ActionsType =
    ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppError>

