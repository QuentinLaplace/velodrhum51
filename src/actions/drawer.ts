import { PayloadAction } from '@reduxjs/toolkit';
import { DrawerActionType } from "../actionType/drawer";

export function setDrawer(isOpen: boolean): PayloadAction<boolean> {
    return {
        type: DrawerActionType.DRAWER_SET_VALUE,
        payload: isOpen
    }
}

