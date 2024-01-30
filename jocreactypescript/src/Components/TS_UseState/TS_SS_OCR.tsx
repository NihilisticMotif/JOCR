import { uLANGUAGE } from "../utility/uLANGUAGE"
import { uPSM } from "../utility/uPSM"

export type TS_SS_OCR={
SSOCR_Operate:   'This'|'All'|'None'
SSOCR_Languages: typeof uLANGUAGE[number][]|null
const_LANGUAGE:  string[]
SSOCR_PSM:       typeof uPSM[number] 
const_PSM:       string[]
}
