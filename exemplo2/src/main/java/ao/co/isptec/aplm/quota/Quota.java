package ao.co.isptec.aplm.quota;

public class Quota {
    private Long id;
    private String autor;
    private String texto;

    public Quota() {}

    public void setId(Long id) { this.id = id; }
    public void setAutor(String autor) { this.autor = autor; }
    public void setTexto(String texto) { this.texto = texto; }

    @Override
    public String toString() {
        return id + " - " + autor + ": " + texto;
    }

    public static void main(String[] args) {
        System.out.println("Aplicação Quota em execução");
        Quota q = new Quota();
        q.setId(1L);
        q.setAutor("Joao Costa");
        q.setTexto("Deus é vida.");
        System.out.println(q);
    }
}
