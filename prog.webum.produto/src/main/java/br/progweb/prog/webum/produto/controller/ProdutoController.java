package br.progweb.prog.webum.produto.controller;

import br.progweb.prog.webum.produto.dto.ProdutoDTO;
import br.progweb.prog.webum.produto.dto.ProdutoDadosAlterarDTO;
import br.progweb.prog.webum.produto.dto.ProdutoListaDTO;
import br.progweb.prog.webum.produto.mapper.ProdutoMapper;
import br.progweb.prog.webum.produto.model.Produto;
import br.progweb.prog.webum.produto.service.ProdutoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*@Api(tags = "Produto API")*/
@RestController
@RequestMapping(path = "${app.api.base}/produto")
public class ProdutoController {

    @Autowired
    private ProdutoMapper produtoMapper;

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    @Operation(description = "Listagem geral de produtos")
    public List<ProdutoListaDTO> listAll(){
        List<Produto> produtos = produtoService.listarTodos();
        return this.produtoMapper.toListaDTO(produtos);
    }

    @PostMapping
    @Operation(description = "Método utilizado para realizar a inclusao de um produto")
    public ProdutoDTO incluir(@RequestBody ProdutoDadosAlterarDTO produto){
        Produto produtoIncluir = this.produtoMapper.toModelo(produto);
        produtoIncluir = this.produtoService.incluir(produtoIncluir);
        ProdutoDTO retorno = this.produtoMapper.toProdutoDTO(produtoIncluir);
        return retorno;
    }

    @PutMapping(path = "/{produtoCodigo}")
    @Operation(description = "Método utilizado para realizar a alteracao dos dados de um produto")
    public ProdutoDTO alterar(@RequestBody() ProdutoDadosAlterarDTO produto, @PathVariable(name = "produtoCodigo") Long codigo ){
        Produto produtoP = produtoMapper.toModelo(produto);
        Produto alterar = produtoService.alterar(produtoP, codigo);
        return produtoMapper.toProdutoDTO(alterar);
    }

    @DeleteMapping(path = "/{produtoCodigo}")
    @Operation(description = "Método utilizado para realizar a exclusao de um produto")
    public ProdutoDTO remover(@PathVariable(name = "produtoCodigo") Long codigo){
        Produto produtoExcluido = this.produtoService.excluir(codigo);

        return produtoMapper.toProdutoDTO(produtoExcluido);
    }

    @GetMapping(path = "/{produtoCodigo}")
    @Operation(description = "Método utilizado para obter todos os dados de um produto por codigo")
    public ProdutoDTO ObterPorCodigo (@PathVariable(name = "produtoCodigo") Long codigo){
        Produto produto = this.produtoService.obterProdutopeloCodigo(codigo);
        return this.produtoMapper.toProdutoDTO(produto);
    }




}
