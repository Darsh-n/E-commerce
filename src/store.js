import { createStore } from "redux";
import rootred from "./redux/Reducer/main";


const store = createStore(
    rootred
);


export default store;