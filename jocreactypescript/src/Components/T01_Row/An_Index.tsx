// Type Script Column
type TS_Row={
// Properties of Each Column
    Key:number,         // DEFAULT: Math.random()
                        // Unique Key
    Next:number,        // Key's of the next TS_Row
                        // If not exist, then Next = this Key
    Array:string[],     // Contains data.
    Display?:0|1|2|3|4, // Display State
        // 0 = Default State
        // 1 = Rename
        // 2 = Delete
        // 3 = ?
        // 4 = Start of Linked List
}

export default TS_Row