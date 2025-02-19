export const CropReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_CROP':
            return {
                ...state,
                crop: [...state.crop, action.payload],
            };
        case 'GET_CROP':
            return {
                ...state,
                crop: action.payload,
            };
        case 'UPDATE_CROP':
            return {
                ...state,
                crop: state.crop.map((crop: any) =>
                    crop.id === action.payload.id ? action.payload : crop
                ),
            };
        case 'DELETE_CROP':
            return {
                ...state,
                crop: state.crop.filter((crop: any) => crop.id !== action.payload),
            };
        default:
            return state;
    }
}; 
