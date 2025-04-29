package com.hotelita.hoteis.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Hotel implements Serializable {

    @Id
    private Long id;
    private String nome;
    private String imagem;
    private String descricao;
    private String telefone;
    private int visitas;

    @Version
    private Long version = 0L;

    public Hotel(){

    }

    public Hotel(Long id, String nome, String imagem, String descricao, String telefone, int visitas) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.telefone = telefone;
        this.visitas = visitas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public int getVisitas() {
        return visitas;
    }

    public void setVisitas(int visitas) {
        this.visitas = visitas;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        Hotel hotel = (Hotel) o;
        return Objects.equals(id, hotel.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
