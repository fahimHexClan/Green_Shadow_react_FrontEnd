export const EQUIPMENTReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_EQUIPMENT':
            return {
                ...state,
                equipment: [...state.equipment, action.payload],
            };
        case 'GET_EQUIPMENT':
            return {
                ...state,
                equipment: action.payload,
            };
        case 'UPDATE_EQUIPMENT':
            return {
                ...state,
                equipment: state.equipment.map((equipment: any) =>
                    equipment.id === action.payload.id ? action.payload : equipment
                ),
            };
        case 'DELETE_EQUIPMENT':
            return {
                ...state,
                equipment: state.equipment.filter((equipment: any) => equipment.id !== action.payload),
            };
        default:
            return state;
    }
}; 
