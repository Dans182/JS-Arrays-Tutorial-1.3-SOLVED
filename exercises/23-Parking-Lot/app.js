let parking_state = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 2]
]

  let state = {

    "availableSlots": 0,
    "occupiedSlots": 0,
    "totalSlots": 0,
  }

const getParkingLotState = () => {

  for (let value of parking_state) {
      for (let valor of value) {
        if (valor == 1) {
          state.occupiedSlots += 1
        }
        if (valor == 2) {
        state.availableSlots += 1
        }
      }
  }
  state.totalSlots = state.occupiedSlots + state.availableSlots
  return state
}

console.log(getParkingLotState(parking_state))