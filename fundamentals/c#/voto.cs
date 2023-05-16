using System;

public class voto
{
    public static void main(Strings[] args)
    {
        int idade;
        Console.WriteLine("Digite sua idade: ");
        idade = int.Parse(Console.ReadLine());
        if (idade >= 16)
        {
            Console.WriteLine("Você pode votar!");
        }
        else
        {
            Console.WriteLine("Você não pode votar!");
        }
    }
}