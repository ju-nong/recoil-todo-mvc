import { Filter } from "./type";
import { atom } from "recoil";

const filterState = atom<Filter>({
    key: "filter",
    default: "all",
});

export { filterState };
