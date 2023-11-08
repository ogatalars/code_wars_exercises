// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
const min = (list: number[]): number => {
    let menor: number = list[0] ;
    for(let i = 0; i < list.length; i++) {
        if (list[i] < menor) {
            menor = list[i];
        }
    }
    return menor;
};

const max = (list: number[]): number => {
    let maior: number = list[0];
    for(let i = 0; i < list.length; i++) {
        if(list[i] > maior) {
            maior = list[i];
        }
    }
    return maior;
};
