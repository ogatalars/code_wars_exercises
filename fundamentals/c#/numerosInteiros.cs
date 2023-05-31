// Elabore um programa que informa o maior número inteiro dentre 10 números inteiros informados pelo usuário
using System;

// class Program
// {
//     public static void Main(string[] args)
//     {
//         int[] numbers = new int[10];
//         int max = 0;
//         for (int i = 0; i < 10; i++)
//         {
//             Console.WriteLine("Digite um número inteiro: ");
//             numbers[i] = int.Parse(Console.ReadLine());
//             if (numbers[i] > max)
//             {
//                 max = numbers[i];
//             }
//         }
//         Console.WriteLine("O maior número é: " + max);


//     }
// }

using System;

class Program
{
    public static void Main(string[] args)
    {
        int number = 0;
        int max = 0;
        for (int i = 0; i < 10; i++)
        {
            Console.WriteLine("Digite um número inteiro: ");
            number = int.Parse(Console.ReadLine());
            if (number > max)
            {
                max = number;
            }
        }
        Console.WriteLine("O maior número é: " + max);
    }
}


// E se fosse o menor?

class Program
{
    public static void Main(string[] args)
    {
        int menor = 0;
        int numero = 0;
        for (int j = 0; j < 10; j++)
        {
            Console.WriteLine("Digite um número Inteiro: ");
            numero = int.Parse(Console.ReadLine());
            if (numero < menor)
            {
                menor = numero;
            }
        }
        Console.WriteLine("O menor número é: " + menor);
    }
}

