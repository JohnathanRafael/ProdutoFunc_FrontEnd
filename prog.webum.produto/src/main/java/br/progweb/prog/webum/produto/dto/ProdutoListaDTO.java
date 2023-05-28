package br.progweb.prog.webum.produto.dto;

import lombok.Data;

import java.math.BigDecimal;

public @Data class ProdutoListaDTO {
    private Long produtoCodigo;
    private String produtoNome;
    private BigDecimal produtoValorVenda;
    private BigDecimal produtoValorCusto;
    private String statusProduto;
}
