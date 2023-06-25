import { RootState } from ".."

export const selectAlert = (state: RootState) => {
  return state.alert
}
