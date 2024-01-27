export function uID(input: string): string {
    // by ChatGPT
    return input.replace(/[^a-zA-Z]/g, ''); 
    // Removes non-alphabetic characters
    // let message = "I'm 23 year old. I love Rock Japanese songs!"
    // OnlyAlphabet(message) == "Im23yearoldIloveRockJapanesesongs"
}