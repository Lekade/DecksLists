import {Decks} from "./decks-api.ts";

const initialState = {
  decks: [] as Decks[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "DECKS/SET-DECKS":
      return {...state, decks: action.decks}
    default:
      return state
  }
}

export const setDecksAC = (decks: Decks[]) => ({
  type: 'DECKS/SET-DECKS',
  decks
}as const)


type DecksActions =
  ReturnType<typeof setDecksAC>
