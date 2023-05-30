// Faça um programa que solicite ao usuário um número e exiba todos os números pares de 0 até o número informado.

using System;

class Program
{
    public static void numerosPares(string[] args)
    {
        int numero;
        Console.WriteLine("Escreva um número: ");
        numero = int.Parse(Console.ReadLine());
        for (int i = 0; i <= numero; i++)
        {
            if (i % 2 == 0)
            {
                Console.WriteLine(i);
            }
        }
    }
}