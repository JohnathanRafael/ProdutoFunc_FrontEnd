package br.progweb.prog.webum.produto.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

public @Data class ProdutoDTO {
    private Long produtoCodigo;
    private String produtoNome;
    private String produtoMarca;
    private String produtoCategoria;
    private BigDecimal produtoValorVenda;
    private BigDecimal produtoValorCusto;
    private Date produtolancamento;
    private String statusProduto;
}

