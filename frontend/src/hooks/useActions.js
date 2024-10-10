import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as basketActions } from "../store/basket/basket.slice.js";
import { actions as favoritesActions } from "../store/favorites/favorites.slice.js";

const rootActions = {
    ...basketActions,
    ...favoritesActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
