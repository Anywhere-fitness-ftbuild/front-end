import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAILURE,
    FETCH_USER_ROLE_START,
    FETCH_USER_ROLE_SUCCESS,
    FETCH_USER_ROLE_FAILURE,
    FETCH_ALL_USERS_START,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    SET_ACTIVE_USER,
    SET_MY_CLASS,
    FETCH_MY_CLASSES,
    SET_CLASSES
} from '../actions';

const initialState = {
    IsLoading: false,
    Error: '',
    ActiveUser: {},
    AllUsers: [],
    Classes: [],
    MyClasses: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES_START:
            return {
                ...state,
                IsLoading: true,
                Error: '',
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: state.MyClasses
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                IsLoading: false,
                Error: '',
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: action.payload,
                MyClasses: state.MyClasses
            };
        case FETCH_CLASSES_FAILURE:
            return {
                ...state,
                IsLoading: false,
                Error: action.payload,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: [],
                MyClasses: state.MyClasses
            };
        case FETCH_USER_ROLE_START:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes ,
                MyClasses: state.MyClasses               
            }
        case FETCH_USER_ROLE_SUCCESS:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: {
                    Username: action.payload.Username,
                    Role: action.payload.Role
                },
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: state.MyClasses              
            }
        case FETCH_USER_ROLE_FAILURE:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: state.MyClasses              
            }
        case FETCH_ALL_USERS_START:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: state.MyClasses
            }
        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: action.payload,
                Classes: state.Classes,
                MyClasses: state.MyClasses
            }
        case FETCH_ALL_USERS_FAILURE:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: state.MyClasses
            }
        case SET_ACTIVE_USER:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: {
                    Username: action.payload.Username,
                    Role: action.payload.Role
                },
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: state.MyClasses
            };
        case SET_MY_CLASS:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: [
                    ...state.MyClasses,
                    {
                        ClassId: action.payload.ClassId,
                        Name: action.payload.Name,
                        Type: action.payload.Type,
                        StartTime: action.payload.StartTime,
                        Duration: action.payload.Duration,
                        IntensityLevel: action.payload.IntensityLevel,
                        Location: action.payload.Location,
                        Attendees: action.payload.Attendees,
                        MaxClassSize: action.payload.MaxClassSize
                    }
                ]
            };
        case FETCH_MY_CLASSES:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes,
                MyClasses: action.payload
            };
        case SET_CLASSES:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: action.payload,
                MyClasses: state.MyClasses
            };
        default:
            return state;
    }
};