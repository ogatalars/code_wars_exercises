// Faça um programa que solicite o nome do usuário e imprima "Olá, [nome]!".

using System;

public class yourname
{
    public static void Main(string[] args)
    {
        string name;
        Console.WriteLine("Digite seu nome: ");
        name = Console.Readline();
        Console.WriteLine("Olá, " + name + "!");

    }

}
