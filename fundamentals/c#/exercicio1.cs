// Considere a classe abaixo (na linguagem C#), que representa parte da definição de um curso de uma universidade:

public class Curso
{
private string nome{get; private set; };
private List<string> disciplinas = new List<string>();
public Curso(string nome)
{
this.nome = nome;
}
public void AddDisciplina(string disciplina){
 disciplinas.Add(disciplina);
}

public override string toString() {
    return $"Curso: {nome}, disciplinas: [{string.Join(", ", disciplinas)}]"
}

}

//Modifique a classe Curso para que ela consiga armazenar os nomes das disciplinas que compõem o curso, lembre-se que a quantidade de disciplina de um curso pode variar de um curso para outro curso.
public class TestaCurso
{
public static void Main(string[ ] args)
{
Curso c1 = new Curso("Ciência da Computação");
c1.AddDisciplina("AlgProgII");
c1.AddDisciplina("SO");
c1.AddDisciplina("Grafos");

    Console.WriteLine(c1);
}

}