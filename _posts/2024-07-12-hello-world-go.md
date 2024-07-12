---
layout: post
title:  "Go com testes - Hello, World"
category: "GoLang"
---

# Hello, Go :)

Estarei documentando meu aprendizado em Go durante os próximos dias.

Vou aplicar a prática de learn in public e postar minhas evoluções aqui no blog e no twitter.

Estarei então começando pelo famoso hello world após instalar a CLI do Go no meu computador.

Estarei seguindo a ideia de estudos de aprender a linguagem através dos testes o que já irá me facilitar aprender como a linguagem funciona e sua sintaxe como também já vai ajudar a aprender a fazer testes com ela.

O site que eu estarei seguindo é o [Learn Go With Tests](https://quii.gitbook.io/learn-go-with-tests)

Então... vamos lá!

## Como que funciona a "coisa"?

Basicamente o Go o esquema de pacotes, ou seja, dentro de uma aplicação Go nos temos o pacote principal que seria o main que tem uma função principal que se chama main.

E pacotes basicamente são a forma de agroupar o código Go de modo que o programa se extenda.

Eu gostei disso porque sempre que vou fazr um script JavaScript eu acabo chamando a função principal de main :D

E pacotes são basicamente os módulos da aplicação.

A palavra func determina que estamos instanciando uma função e com import "fmt" a gente importa um pacote que por sua vez possui uma função chamada Println para escrevermos no console.

Vamos criar na nossa pasta um arquivo chamado hello.go:

```go
package main

import "fmt"

func Hello() string {
	return "Hello, world"
}

func main() {
	fmt.Println(Hello())
}
```

## Como que testa?

Uma boa prática pra gente testar código Go é separar a regra de negócio do externo da aplicação. 

Por exemplo: O Println é um side-effect da aplicação que interage entregando o texto pro stdout e o Hello World é a nossa string que representa a regra de negócio.

Neste caso, é melhor a gente separar a regra igual o Chris mostra no tutorial:

```go
package main

import "fmt"

func Hello() string {
	return "Hello, world"
}

func main() {
	fmt.Println(Hello())
}
```

Assim fica mais easy de testar.

Podemos criar o arquivo de testes chamado hello_test.go:

```go
package main

import "testing"

func TestHello(t *testing.T) {
    got := Hello()
    want := "Hello, world"

    if got != want {
        t.Errorf("got %q want %q", got, want)
    }
}
```

Se a gente rodar apenas um `go test` na pasta não irá surtir efeito, na verdade vai dar um erro falando que não encontrou o arquivo go.mod.

Desta forma a gente precisa inicializar o nosso Go modules digitando `go mod init hello` no terminal.

O arquivo go.mod será criado:
```go
module hello

go 1.22.5
```

Vamos deixar ele assim por enquanto.

Agora já conseguimos executar o comando go test!


```bash
joao@debian:~/learn-go/01-hello-world$ go test
PASS
ok      hello   0.001s
```

### Pequenas regras a respeito de testes

- O arquivo sempre precisa ser escrito no padrão xxx_test.go;
- A função do teste sempre precisa iniciar com a palavra **Test**;
- A função do teste recebe apenas 1 argumento que é o `t *testing.T`;
- Pra usar o `t *testing.T` a gente precisa importar o pacote testing `import "testing"`.

## Alterando o código de maneira segura

Vamos dizer que agora o nosso código precisa mudar e precisamos em vez de World exibir a palavra que for passada por parâmetro na função Hello, ou seja, preicsamos que esta função receba um argumento por parâmetro e exiba ele na mensagem.

Uma boa prática que podemos adotar para fazer isso é alterar primeiro o nosso teste, de modo que a gente espere que aconteça isso no nosso código sem alterar ele e o resultado?

PAMMMMMMMMMMM. ERRO.

Quer ver?

Alterando o teste para:

```go
package main

import "testing"

func TestHello(t *testing.T) {
	got := Hello("Agropesca Jacaré")
	want := "Hello, Agropesca Jacaré"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
```

E executando go test temos:

```bash
joao@debian:~/learn-go/01-hello-world$ go test
# hello [hello.test]
./hello_test.go:6:15: too many arguments in call to Hello
        have (string)
        want ()
FAIL    hello [build failed]
```

Isso quer dizer que estamos passando mais argumentos do que a função espera.

Assim, sabemos que precisamos incluir o parâmetro na função Hello:

```go
package main

import "fmt"

func Hello(message string) string {
	return "Hello, world"
}

func main() {
	fmt.Println(Hello())
}
```

Rodando o teste novamente temos:

```bash
joao@debian:~/learn-go/01-hello-world$ go test
# hello [hello.test]
./hello.go:10:14: not enough arguments in call to Hello
        have ()
        want (string)
FAIL    hello [build failed]
```

Agora recebemos a mensagem que faltam argumentos na chamada da função e para isso precisamos alterar dentro da função main a chamada para a nossa função, passando a string que o teste espera e então...

```go
package main

import "fmt"

func Hello(message string) string {
	return "Hello, world"
}

func main() {
	fmt.Println(Hello("Agropesca Jacaré"))
}
```

```bash
--- FAIL: TestHello (0.00s)
    hello_test.go:10: got "Hello, world" want "Hello, Agropesca Jacaré"
FAIL
exit status 1
FAIL    hello   0.001s
```

Falhou de novo... shit...

É bem básico mas isso está acontecendo porque recebemos a mensagem no parâmetro mas não estamos fazendo nada com ele e continuamos retornando Hello, World.

Concatenando as palávras 'Hello, ' e a mensagem, podemos verificar novamente os testes:

```go
package main

import "fmt"

func Hello(message string) string {
	return "Hello, " + message
}

func main() {
	fmt.Println(Hello("Agropesca Jacaré"))
}
```

tantantan....

```bash
joao@debian:~/learn-go/01-hello-world$ go test
PASS
ok      hello   0.001s
```

NICEEEEEEEE xD

Desta forma a gente completa um ciclo do TDD. Agora é a hora que podemos olhar pro código e ver o que da pra refatorar e/ou seguir em frente em uma nova melhoria, correção ou feature.

No caso do arquivo hello.go podemos separar a string "Hello, " em uma constante, para facilitar a leitura e entendimento do código, assim como, sua manipulação.

Ficaria desta forma:

```go
package main

import "fmt"

const englishHelloPrefix = "Hello, "

func Hello(message string) string {
	return englishHelloPrefix + message
}

func main() {
	fmt.Println(Hello("Agropesca Jacaré"))
}
```

Garanta que o teste esteja passando.

## Repita o ciclo

Para garantir uma melhor funcionalidade, é melhor que a gente exiba o World em vez de só "Hello, " quando alguém não enviar nenhum parâmetro para a função Hello.

Para que a gente garanta que exista testes automatizados para isso também, podemos repetir o ciclo, criando um novo teste e fazendo ele falhar, para que então a gente possa implementar no arquivo hello.go o comportamento que estamos esperando no teste.

Vamos então criar o nosso teste para garantir casos sem o parâmetro:

```go
package main

import "testing"

func TestHello(t *testing.T) {
	t.Run("print Hello message with param", func(t *testing.T) {
		got := Hello("Agropesca Jacaré")
		want := "Hello, Agropesca Jacaré"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
	t.Run("print Hello message with empty param", func(t *testing.T) {
		got := Hello("")
		want := "Hello, World"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
}
```

Agora, o arquivo de teste está utilizando a função t.Run que recebe string e uma função de teste, para que possamos aninhar os testes em um unico arquivo.

Na string declaramos o que o teste faz e a função é o teste propriamente dito.

Se executarmos o comando `go test` veremos o erro do teste que incluimos e em qual linha se encontra, além, da mensagem que definimos no teste:

```bash
joao@debian:~/learn-go/01-hello-world$ go test
--- FAIL: TestHello (0.00s)
    --- FAIL: TestHello/print_Hello_message_with_empty_param (0.00s)
        hello_test.go:19: got "Hello, " want "Hello, World"
FAIL
exit status 1
FAIL    hello   0.001s
```

Agora podemos corrigir o arquivo hello.go adicionando uma condição IF:

```go
package main

import "fmt"

const englishHelloPrefix = "Hello, "

func Hello(message string) string {
	if message == "" {
		message = "World"
	}
	return englishHelloPrefix + message
}

func main() {
	fmt.Println(Hello("Agropesca Jacaré"))
}
```

Rodando o teste temos:

```bash
joao@debian:~/learn-go/01-hello-world$ go test
PASS
ok      hello   0.001s
```

## Repita o ciclo novamente

Agora, vamos implementar a versão do olá em espanhol, e então, vamos repetir o ciclo: teste, quebra e refatora.

**Teste**
```go
	t.Run("should return spanish hello with language param", func(t *testing.T) {
		got := Hello("Amigo", "Spanish")
		want := "Hola, Amigo"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
```
**Erro**
```bash
joao@debian:~/learn-go/01-hello-world$ go test
# hello [hello.test]
./hello_test.go:23:25: too many arguments in call to Hello
        have (string, string)
        want (string)
FAIL    hello [build failed]
```
**Refactor**
```go
package main

import "fmt"

const englishHelloPrefix = "Hello, "
const spanishHelloPrefix = "Hola, "

func Hello(message, language string) string {
	if message == "" {
		message = "World"
	}
	if language == "Spanish" {
		return spanishHelloPrefix + message
	}
	return englishHelloPrefix + message
}

func main() {
	fmt.Println(Hello("Agropesca Jacaré", "English"))
}
```

**Refactor - teste**

```go
package main

import "testing"

func TestHello(t *testing.T) {
	t.Run("print Hello message with param", func(t *testing.T) {
		got := Hello("Agropesca Jacaré", "English")
		want := "Hello, Agropesca Jacaré"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
	t.Run("print Hello message with empty param", func(t *testing.T) {
		got := Hello("", "English")
		want := "Hello, World"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
	t.Run("should return spanish hello with language param", func(t *testing.T) {
		got := Hello("Amigo", "Spanish")
		want := "Hola, Amigo"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
}

```

**Resultado**

```bash
joao@debian:~/learn-go/01-hello-world$ go test
PASS
ok      hello   0.001s
```

## E a última vez pra fixar... 

Agora vamos implementar a versão do BRAZA PORRA

**Teste**

```go
	t.Run("should return brazilian hello with language param", func(t *testing.T) {
		got := Hello("BRASIL", "Portuguese")
		want := "Olá, BRASIL"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
```

**Erro**

```bash
joao@debian:~/learn-go/01-hello-world$ go test
--- FAIL: TestHello (0.00s)
    --- FAIL: TestHello/should_return_brazilian_hello_with_language_param (0.00s)
        hello_test.go:35: got "Hello, BRASIL" want "Olá, BRASIL"
FAIL
exit status 1
FAIL    hello   0.001s
```

**Refactor**

```go
package main

import "fmt"

const spanish = "Spanish"
const portuguese = "Portuguese"

const englishHelloPrefix = "Hello, "
const spanishHelloPrefix = "Hola, "
const portugueseHelloPrefix = "Olá, "

func Hello(message, language string) string {
	if message == "" {
		message = "World"
	}
	if language == spanish {
		return spanishHelloPrefix + message
	}
	if language == portuguese {
		return portugueseHelloPrefix + message
	}
	return englishHelloPrefix + message
}

func main() {
	fmt.Println(Hello("Agropesca Jacaré", "English"))
}
```

Neste caso também adicionei o Spanish e Portuguese em constantes para uma melhor mantenabilidade do código u know? :B

**Resultado**

```bash
joao@debian:~/learn-go/01-hello-world$ go test
PASS
ok      hello   0.001s
```
**PASSSSSSSSSSSSSSSSSSSSSSSS**

Então é isso para um primeiro dia de estudos em GoLang utilizando TDD.

Fizemos um Hello World de respeito e também aprendemos juntos vários conceitos legais do Go.

Particularmente estou tendo uma experiência muito legal de desenvolvimento com esta linguagem que é muito poderosa então estou bem feliz com isso.

<br>

***

Um abraço para todos, menos pra alguns <3

Assinado João Longo.
