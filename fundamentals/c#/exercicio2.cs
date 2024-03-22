// Considere a classe ponto para representar uma coordenada(x, y), a classe possui o metodo igual(ponto p) que verifica se dois pontos são iguais, o método recebe um parâmetro de forma explícita (ponto p) e outro de forma implicita. 

// public class Ponto
// {
//     private int x, y;
//     public Ponto(int x, int y)
//     {
//         this.x = x; this.y = y;
//     }
//     public boolean igual(Ponto p)
//     {
//         return this.x == p.x && this.y == p.y;
//     }
// }

// A seguir temos a classe Circuito para representar a figura geométrica círculo, note que a classe Circulo foi modelada usando herança, o centro do círculo será uma coordenada (x, y) deifinida na classe pai e raio é um atributo float. 

// public class Circulo extends Ponto
// {
//     private float raio;
// public Circulo(int x, int y, float raio)
// {
//     super(x, y);
//     this.raio = raio;
// } 
//     } 

// A sua tarefa é finalizar a implementação da classe circulo sobrescrevendo o método igual () da classe Ponto para que agora o metodo verifique se dois circulos sao iguais, ou seja, se estão na mesma coordenada (x, y) e se tem o mesmo raio. Nesse exercício não é permitido modificar a classe Ponto para atender as necessidades da classe circulo

public class Ponto extends Ponto
{
    private float raio;

    public Circulo(int x, int y, float raio){
        super(x, y);
        this.raio = raio;
    }
    @Override
    public boolean igual(Ponto outro) {
        if(outro instanceof Circulo){
            Circulo outroCirculo = (Circulo) outro; 
            return super.igual(outro) && this.raio == outroCirculo.raio;
        }
        return false;
    }
}