package br.progweb.prog.webum.produto;

import br.progweb.prog.webum.produto.model.Produto;
import br.progweb.prog.webum.produto.repository.ProdutoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	//Cria um metodo para ser testado assim que a aplicacao comeca a rodar
	//o @Bran CommandLineRunner cria o objeto
	// injecao de dependencia, o spring boot cria o objeto
	@Bean
	public CommandLineRunner commandLineRunner(ProdutoRepository produtoRepository){
		return args -> {
			Produto p1 = new Produto();
			p1.setProdutoNome("Teste");
			p1.setProdutoCategoria("Test eDoProduto");
			p1.setProdutoMarca("ProdutoTestado");
			p1.setProdutoValorCusto(new BigDecimal(225.30));
			p1.setProdutoValorVenda(new BigDecimal(100));
			p1.setProdutolancamento(LocalDate.now());

			try{
				produtoRepository.save(p1);
			}catch(Exception e) {
				e.printStackTrace();
			}
			p1.setProdutolancamento(LocalDate.of(2023,04,13));
			p1 = produtoRepository.save(p1);

			p1 = new Produto();
			p1.setProdutoNome("Teste");
			p1.setProdutoCategoria("Produto2");
			p1.setProdutoMarca("Produto22");
			p1.setProdutoValorCusto(new BigDecimal(565));
			p1.setProdutoValorVenda(new BigDecimal(250));
			p1.setProdutolancamento(LocalDate.now());
			//boolean nome_duplicado = false;

			Integer totalUsoNome = produtoRepository.countUtilizacaoNome((p1.getProdutoNome()));
			if(totalUsoNome>0){
				System.out.println("Nome usado");
			}
			else{
				p1 = produtoRepository.save(p1);
			}

			/*Optional<Produto> produtoLocalizado = produtoRepository.findProdutoByprodutoNome(p1.getProdutoNome());
			if(produtoLocalizado.isPresent()){
				System.out.println("Nome já utilizado");
			} else{
				p1 = produtoRepository.save(p1);
			}*/
            /*try{
				produtoRepository.save(p1);
			}catch(Exception e)
			{
				System.out.println("teste"+e.getMessage());
				nome_duplicado = e.getMessage().contains(Produto.UK_LOJA_NOME_PRODUTO);
			}*/

			//produtoRepository.delete(p1);
			listarProduto(produtoRepository);
			produtoRepository.delete(p1);
			listarProduto(produtoRepository);
		};
	}

	private static void listarProduto(ProdutoRepository produtoRepository) {
		List<Produto> lista = produtoRepository.findAll();
		lista.forEach(item -> {
			System.out.println("Produto" + item);
		});
	}
}

/*
{
  "produtoNome": "Headset",
  "produtoMarca": "JBL",
  "produtoCategoria": "Fone de Ouvido",
  "produtoValorVenda": 199.25,
  "produtoValorCusto": 99.36
}
 */
