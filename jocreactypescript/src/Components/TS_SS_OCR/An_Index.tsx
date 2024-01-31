import { uLANGUAGE } from "../utility/uLANGUAGE"
import { uPSM } from "../utility/uPSM"

export type TS_SS_OCR={
Operate:   boolean
Languages:  typeof uLANGUAGE[number][]|null
PSM:       typeof uPSM[number]
}
