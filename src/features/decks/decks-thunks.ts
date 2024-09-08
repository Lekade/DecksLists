import {Dispatch} from "redux";
import {decksAPI} from "./decks-api.ts";
import {setDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then((res) => {
        dispatch(setDecksAC(res.data.items))
    })
}