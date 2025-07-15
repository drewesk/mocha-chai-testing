module.exports = {
    sayHello: () => 'hello',

    addNumbers: (x, y) => x + y,

    isEven: (num) => num % 2 === 0,

    reverseString: (str) => str.split('').reverse().join(''),

    getUser: () => ({
        id: 1,
        name: 'Alice',
        role: 'admin'
    }),

    fetchItems: () => ['apple', 'banana', 'carrot'],

    isNull: () => null,

    throwIfNegative: (num) => {
        if (num < 0) throw new Error('Negative number not allowed');
        return num;
    }
};