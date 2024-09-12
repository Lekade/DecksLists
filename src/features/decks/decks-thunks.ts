import {Dispatch} from 'redux'
import {decksAPI, UpdateDeckParams} from './decks-api.ts'
import {addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC} from './decks-reducer.ts'
import {setAppStatus} from "../../app/app-reducer.ts";
import {handleError} from "../../common/utils/handle-error.ts";

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const response = await decksAPI.fetchDecks()
        dispatch(setDecksAC(response.data.items))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        dispatch(setAppStatus('failed'))
    }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
    return decksAPI.addDeck(name).then((res) => {
        dispatch(addDeckAC(res.data))
    })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
    return decksAPI.deleteDeck(id).then((res) => {
        dispatch(deleteDeckAC(res.data.id))
    })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
    try {
        const response = await decksAPI.updateDeck(params)
        return dispatch(updateDeckAC(response.data))

    } catch (e) {
        handleError(e, dispatch)
    }
}



