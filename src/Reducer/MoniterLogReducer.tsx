export const MonitorLogReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_MonitorLog':
            return {
                ...state,
                monitorLog: [...state.monitorLog, action.payload],
            };
        case 'GET_MonitorLog':
            return {
                ...state,
                monitorLog: action.payload,
            };
        case 'UPDATE_MonitorLog':
            return {
                ...state,
                monitorLog: state.monitorLog.map((monitorLog: any) =>
                    monitorLog.id === action.payload.id ? action.payload : monitorLog
                ),
            };
        case 'DELETE_MonitorLog':
            return {
                ...state,
                monitorLog: state.monitorLog.filter((monitorLog: any) => monitorLog.id !== action.payload),
            };
        default:
            return state;
    }
}; 
