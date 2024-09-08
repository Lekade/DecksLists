import {Deck} from "./decks-api.ts";

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "DECKS/SET-DECKS":
      return {...state, decks: action.decks}
    case 'DECKS/ADD-DECK':
      return {...state, decks: [action.deck, ...state.decks]}
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS',
  decks
}as const)

export const addDeckAC = (deck: Deck) => ({
  type: 'DECKS/ADD-DECK',
  deck
} as const)


type DecksActions =
  ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>
