/* eslint-disable prettier/prettier */
import React from 'react';
import { Action, DefaultValueMenuContext } from '@interfaces/Contexts.interface';
import CreateOwnContext from '../CreateOwnContext';
import { ACTION_CHANGE_SCREEN, ACTION_GO_BACK, ACTION_TOUCH_MENU } from '@Constants/Contexts/MenuContext';

const defaultState: DefaultValueMenuContext = {
    activeScreen: 'Home',
    arrowBack: false,
    open: false,
    paramsActiveScreen: {},
    prevScreen: '',
    onBack: () => { },
    onChangeScreen: () => { },
    onTouchMenu: () => { }
}

const menuReducer = (state: DefaultValueMenuContext, action: Action<any>): DefaultValueMenuContext => {
    console.log(state, action)
    switch (action.type) {
        case ACTION_CHANGE_SCREEN:
            return {
                ...state,
                activeScreen: action.payload.screen,
                open: false,
                paramsActiveScreen: action.payload.params ?? {}
            };
        case ACTION_TOUCH_MENU:
            return {
                ...state,
                open: !state.open,
            };
        case ACTION_GO_BACK:
            return {
                ...state,
                activeScreen: state.prevScreen,
            };
        default:
            return state;
    }
};

const onChangeScreen = (dispatch: React.Dispatch<Action<any>>) => {
    return (screen: string) => {
        return () => {
            dispatch({
                type: ACTION_CHANGE_SCREEN,
                payload: {
                    params: {},
                    screen
                }
            });
        };
    };
};

const onTouchMenu = (dispatch: React.Dispatch<Action<undefined>>) => {
    return () => {
        dispatch({ type: ACTION_TOUCH_MENU });
    };
};

const onBack = (dispatch: React.Dispatch<Action<undefined>>) => {
    return () => {
        dispatch({ type: ACTION_GO_BACK });
    };
};



export const { Context, Provider } = CreateOwnContext({
    action: { onBack, onChangeScreen, onTouchMenu },
    defaultValue: defaultState,
    reducer: menuReducer
})

export default menuReducer;
