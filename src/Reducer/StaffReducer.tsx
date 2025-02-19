export const StaffReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_Staff':
            return {
                ...state,
                staff: [...state.staff, action.payload],
            };
        case 'GET_Staff':
            return {
                ...state,
                staff: action.payload,
            };
        case 'UPDATE_Staff':
            return {
                ...state,
                staff: state.staff.map((staff: any) =>
                    staff.id === action.payload.id ? action.payload : staff
                ),
            };
        case 'DELETE_Staff':
            return {
                ...state,
                staff: state.staff.filter((staff: any) => staff.id !== action.payload),
            };
        default:
            return state;
    }
}; 
