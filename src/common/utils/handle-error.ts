import {Dispatch} from "redux";
import {isAxiosError} from "axios";
import {setAppError} from "../../app/app-reducer.ts";

export const handleError = (error: unknown, dispatch: Dispatch) => {
    let errorMessage: string
    if(isAxiosError<ServerError>(error)){
        errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
    }else {
        errorMessage = (error as Error).message
    }
    dispatch(setAppError(errorMessage))
}

type ServerError = {
    errorMessages: Array<{field: string, message: string}>
}