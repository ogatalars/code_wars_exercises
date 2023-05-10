// Faça um programa que solicite três números inteiros do usuário e imprima o maior número.

using System;

public class maior
{
    public static void main(string[] args)
    {
        int num1, num2, num3;
        Console.WriteLine("Digite o primeiro número: ");
        num1 = int.Parse(Console.ReadLine());
        Console.WriteLine("Digite o segundo número: ");
        num2 = int.Parse(Console.ReadLine());
        Console.WriteLine("Digite o terceiro número: ");
        num3 = int.Parse(Console.ReadLine());
        if (num1 > num2 && num1 > num3)
        {
            Console.WriteLine("O maior número é: " + num1);
        }
        else if (num2 > num1 && num2 > num3)
        {
            Console.WriteLine("O maior número é: " + num2);
        }
        else
        {
            Console.WriteLine("O maior número é: " + num3);
        }


    }
}