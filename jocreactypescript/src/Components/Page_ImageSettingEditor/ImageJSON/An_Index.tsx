type TS_ImageJSON={
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

export default TS_ImageJSON