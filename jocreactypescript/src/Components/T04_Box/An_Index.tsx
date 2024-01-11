/*

+--------------+--------+-----------+--------+--------+--------+--------+--------+
| type (string)| id     | LineWidth | Color  | X      | Y      | W      | H      |
+--------------+--------+-----------+--------+--------+--------+--------+--------+
| Rectangle    | number | number    | string | number | number | number | number |
| Frame        | number | number    | string | number | number | number | number |
| Line         | number | number    | string | number | number | number | number |
| XLine        | number | number    | string | number | 0      | number | 0      |
| YLine        | number | number    | string | 0      | number | 0      | number |
+--------------+--------+-----------+--------+--------+--------+--------+--------+
*/

type TS_Box={
    Key:number,
    XYWH:number[],
    // 0 = PositionX
    // 1 = PositionY
    // 2 = Width
    // 3 = Height
    // 4 = LineWidth
    Type:string[],
    // 0 = Type
    // 1 = Color
    IsShow:boolean
}

export default TS_Box