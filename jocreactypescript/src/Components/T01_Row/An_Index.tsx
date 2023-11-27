// Type Script Column
type TS_Row={
// Properties of Each Column
    Key:number,         // DEFAULT: Math.random()
                        // Unique Key

    Name:string,        // DEFAULT: have no default
                        // Unique Column Name 
                        // (Less than 50 letters)
    Price:number,
    Amount:number,
    Display?:0|1|2|3,     // Display State
}

export default TS_Row