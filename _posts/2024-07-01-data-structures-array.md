---
layout: post
title:  "Estrutura de dados - Arrays"
category: "Estutura de dados"
---

# Fundamentos da Estrutura de Dados Array em Rust

### O que é um arrray?

Um array é uma coleção de elementos do mesmo tipo que são armazenados em locais de memória juntos, de forma sequencial.

### Como declarar um array
Em Rust, para que possamos declarar um array, utilizamos o símbolo de colhcetes '[]' e declaramos o tamanho do array, seguido pelos dados do mesmo:

Exemplo:

```rust
  fn main() {
    let arr: [i32; 5] = [1, 2, 3, 4, 5];
    println!("{:?}", arr);
  }
```

Neste código `arr`é um array do tipo inteiro `i32`com 5 elementos.

o `println!("{:?}", arr)` serve para efetuar o log do array no terminal.

### Acessar elementos

Para acessar elementos de um array no Rust, podemos usar os indíces, que começam no 0 (Zero). Para quem é acostumado com o JavaScript o acesso é bem similar.

```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    println!("O primeiro elemento é: {}", arr[0]);
    println!("O segundo elemento é: {}", arr[1]);
}
```

Basta utilizarmos a variável e informar o indíce entre os colchetes.

### Iteração de arrays

Podemos fazer a iteração de arrays utilizando a estrutura for combinado com a função `iter` que é disponibilizada na variável de alocação do array.

```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    for element in arr.iter() {
        println!("O elemento é: {}", element);
    }
}
```

### Array multidimensional (matriz)

Podemos também ter um array de arrays, que seria uma matriz.

Podemos definir no Rust da seguinte maneira:

```rust
fn main() {
    let matrix: [[i32; 3]; 2] = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    println!("{:?}", matrix);
}
```
Neste exemplo é definido uma variável matrix que é um array de arrays onde a variável matrix tem o tamanho de 2 arrays contendo 3 elementos que são números inteiros.

## Projeto exemplo para lidar com funções de array

Vamos iniciar o projeto utilizando o cargo

```bash
cargo new array-operations
cd array-operations
```

Agora, vamos editar o arquivo **src/main.rs** e criar a nossa estrutura de array.

```rust
fn main() {
    println!("Operações com arrays");

    let arr: [i32; 5] = [1, 2, 3, 4, 5];

    println!("Original array: {:?}", arr);

    // Acessando um elemento do array
    println!("Primeiro elemento: {}", arr[0]);

    // Modificando um elemento do array
    let mut arr2: [i32; 5] = arr;
    arr2[0] = 10;
    println!("Array modificado: {:?}", arr2);

    // Somando os elementos do array
    let sum: i32 = arr.iter().sum();
    println!("Soma dos elementos: {}", sum);

    // Encontrar o maior valor
    let max: &i32 = arr.iter().max().unwrap();
    println!("Maior valor: {}", max);

    // Encontrar o menor valor
    let min: &i32 = arr.iter().min().unwrap();
    println!("Menor valor: {}", min);

    // Reverter os elementos do array
    let mut reversed_arr: [i32; 5] = arr;
    reversed_arr.reverse();
    println!("Array reverso: {:?}", reversed_arr);
}
```
podemode executar o código executando `cargo run` no diretório do nosso projeto.

O resultado deve ser algo como:

```bash
❯ cargo run
   Compiling array-operations v0.1.0 (/home/user/projects/array-operations)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.18s
     Running `target/debug/array-operations`
Operações com arrays
Original array: [1, 2, 3, 4, 5]
Primeiro elemento: 1
Array modificado: [10, 2, 3, 4, 5]
Soma dos elementos: 15
Maior valor: 5
Menor valor: 1
Array reverso: [5, 4, 3, 2, 1]
```

Para mais recursos de array podemos seguir a doc :D ⬇

[Documentação do Rust sobre Arrays](https://doc.rust-lang.org/std/primitive.array.html)
