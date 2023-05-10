// Faça um programa que solicite o raio de um círculo do usuário e imprima a área do círculo.
using System;

public class raio
{
    public static void Main(string[] args)
    {
        double raio, area;
        Console.WriteLine("Digite o raio do Círculo:");
        raio = double.Parse(Console.ReadLine());
        area = Math.PI * Math.Pow(raio, 2);
        Console.WriteLine("A área do círculo é: " + area);

    }
}