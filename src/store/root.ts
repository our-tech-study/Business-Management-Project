import { createAction, createReducer } from "@reduxjs/toolkit"

interface IRootState {
  alert: IAlert | null
}

export interface IAlert {
  type: "warning" | "announcement"
  description: string
}

const root: IRootState = {
  alert: null,
}

interface IAlertPayload extends IAlert {}

export const showAlert = createAction<IAlertPayload>("showAlert")
export const hideAlert = createAction("hieAlert")

const rootReducer = createReducer(root, builder => {
  builder
    .addCase(showAlert, (state, action) => {
      const { type, description } = action.payload
      state.alert = {
        type,
        description,
      }
    })
    .addCase(hideAlert, (state, action) => {
      state.alert = null
    })
})

export default rootReducer
