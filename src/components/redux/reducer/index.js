import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import vibility from "./vibility";
export default combineReducers({
    todos,
    vibility
})