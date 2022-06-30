import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel";

export interface Model<T> extends Imprimivel , Comparavel<T> {
    
}