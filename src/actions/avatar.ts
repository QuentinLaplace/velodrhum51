import { PayloadAction } from '@reduxjs/toolkit';
import { AvatarActionType } from "../actionType/avatar";

export function test(bool: string): PayloadAction<string> {
    return {
        type: AvatarActionType.AVATAR_CHANGE,
        payload: bool
    }
}

