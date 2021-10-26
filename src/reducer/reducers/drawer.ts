import { PayloadAction } from '@reduxjs/toolkit';
import { DrawerActionType } from "../../actionType/drawer"; 

interface DrawerState {
  isOpen: boolean | null;
}

interface DrawerChangeAction extends PayloadAction<boolean> {
  type: DrawerActionType.DRAWER_SET_VALUE,
}

type DrawerAction =  DrawerChangeAction;

export default function drawerReducer(state = { isOpen: null, }, action: DrawerAction): DrawerState {
  switch (action.type) {
    case DrawerActionType.DRAWER_SET_VALUE:
      return { ...state, isOpen: action.payload };
    default:
      return state
  }
}