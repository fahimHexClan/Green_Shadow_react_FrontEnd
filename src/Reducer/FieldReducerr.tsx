export const FieldReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_Field':
            return {
                ...state,
                field: [...state.field, action.payload],
            };
        case 'GET_Field':
            return {
                ...state,
                field: action.payload,
            };
        case 'UPDATE_Field':
            return {
                ...state,
                field: state.field.map((field: any) =>
                    field.id === action.payload.id ? action.payload : field
                ),
            };
        case 'DELETE_Field':
            return {
                ...state,
                field: state.field.filter((field: any) => field.id !== action.payload),
            };
        default:
            return state;
    }
}; 
