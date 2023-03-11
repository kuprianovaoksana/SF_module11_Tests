const getPercent = require('../task11.6.4');

describe('getting percent of number', ()=>{
    it ('get percent if two numbers', ()=>{
        const resultat = getPercent(30, 200);
        expect(resultat).toBe(60);
    }),
    it ('one is a string', ()=>{
        const resultat = getPercent("20", 200);
        expect(resultat).toBe("Данные неверны");
    }),
    it ('number is a zero', ()=>{
        const result = getPercent(30, 0);
        expect(result).toBe(0);
    })
});
