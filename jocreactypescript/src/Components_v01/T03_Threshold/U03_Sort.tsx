import TS_Threshold from "./An_Index"

export function U03_Sort(
        THRESHOLDS:TS_Threshold[],
    ):TS_Threshold[]{
    // https://stackoverflow.com/questions/17684921/sort-json-object-in-javascript
    return THRESHOLDS.sort(function(a, b){
        return a.PositionY - b.PositionY;
    });
}