export const VehicleReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_Vehicle':
            return {
                ...state,
                vehicle: [...state.vehicle, action.payload],
            };
        case 'GET_Vehicle':
            return {
                ...state,
                vehicle: action.payload,
            };
        case 'UPDATE_Vehicle':
            return {
                ...state,
                vehicle: state.vehicle.map((vehicle: any) =>
                    vehicle.id === action.payload.id ? action.payload : vehicle
                ),
            };
        case 'DELETE_Vehicle':
            return {
                ...state,
                vehicle: state.vehicle.filter((vehicle: any) => vehicle.id !== action.payload),
            };
        default:
            return state;
    }
}; 
