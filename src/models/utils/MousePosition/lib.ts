import { MouseActionKeyValues, MouseModeKeyValues, MousePosition } from "./type";

export const initialMousePosition: MousePosition = {
    x: 0,
    y: 0,
    className: "",
    id: "",
    action: MouseActionKeyValues.MouseMove,
    mode: MouseModeKeyValues.Normal
}