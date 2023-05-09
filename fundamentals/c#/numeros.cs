// Faça um programa que solicite dois números inteiros do usuário e imprima a soma.

using System;

public class main
{
    public static void Main(string[] args)
    {
        double a, b, soma;
        Console.WriteLine("Digite o primeiro número: ");
        a = int.Parse(Console.ReadLine());
        Console.WriteLine("Digite o segundo número: ");
        b = int.Parse(Console.ReadLine());
        soma = a + b;
        Console.WriteLine("A soma dos números é: " + soma);
    }
}