import { PayloadAction } from '@reduxjs/toolkit';
import { AvatarActionType } from "../../actionType/avatar"; 

interface AvatarState {
  name: string | null,
  img: string | null
}

interface AvatarChangeAction extends PayloadAction<string> {
  type: AvatarActionType.AVATAR_CHANGE,
}

type AvatarAction =  AvatarChangeAction;

export default function avatarReducer(state = { name: null, img: null }, action: AvatarAction): AvatarState {
  switch (action.type) {
    case AvatarActionType.AVATAR_CHANGE:
      return { ...state, img: action.payload };
    default:
      return state
  }
}