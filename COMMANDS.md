# NPM

## init
---
```
npm init
```
> inicia um projeto, utilizando perguntas para melhorar a configuração

```
npm init -y
```
> inicia um projeto rápidamente, sem nenhuma pergunta

## install
---
```
npm install <package> [...<package>]
```
> instala uma dependencia no projeto declarando ela no package.json

```
npm install -D <package> [...<package>]
```
ou
```
npm install --save-dev <package> [...<package>]
```
> instala uma dependencia de desenvolvimento no projeto declarando ela no package.json para desenvolvimento

```
npm uninstall <package> [...<package>]
```
> desinstala uma dependencia do projeto, removendo tambem do package.json em qualquer lugar que esteja

# YARN

## init
---
```
yarn init
```
> inicia um projeto, utilizando perguntas para melhorar a configuração
```
yarn init -y
```
> inicia um projeto rápidamente, sem nenhuma pergunta

## add
---
```
yarn add <package> [...<package>]
```
> instala uma dependencia no projeto declarando ela no package.json

```
yarn add -D <package> [...<package>]
```
> instala uma dependencia de desenvolvimento no projeto declarando ela no package.json para desenvolvimento

```
yarn remove <package> [...<package>]
```
> desinstala uma dependencia do projeto, removendo tambem do package.json em qualquer lugar que esteja

# Instalando dependencia globais

Muitas vezes precisamos instalar uma depencia global para utilizar o comando de lina ( cmd ) que vem junto com a biblioteca.

Então para isso utilizando npm podemos usar
```
npm install -g <package> [...<package>]
```
ou no caso de yarn
```
yarn global add <package> [...<package>]
```
