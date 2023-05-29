// Crie um programa que solicite ao usuário seu nome e, em seguida, exiba uma saudação com base no nome fornecido.

using System;

class Program
{
    public static void seunome(string[] args)
    {
        string seuNome;
        Console.WriteLine("Escrea seu nome: ");
        seuNome = Console.Readline();
        Console.WriteLine(seuNome);

    }
}