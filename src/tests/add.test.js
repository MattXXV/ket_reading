const add = (a,b) => {
    return a + b;
}

const generateGreeting =(name) => `Hello ${name}`


test('should add two numbers', () => {
    const result = add(3, 4);

   expect(result).toBe(7)
})

test('correct greeting', () => {
    const result = generateGreeting('shit');

    expect(result).toBe('Hello shithead')
})