# DIFF do src/components/HeroSection/HeroSection.tsx ANTES de aplicar o fix

## Estado Atual (linhas 65-67):

**Linhas 65-67:** Botão "SOLICITAR ORÇAMENTO" atual:
```jsx
<button className="px-8 py-3 rounded-xl bg-gradient-to-r from-white/40 to-emerald-400/50 dark:from-slate-800/60 dark:to-emerald-600/50 border border-emerald-500 text-slate-900 dark:text-white font-bold uppercase tracking-tight transition-all hover:shadow-lg backdrop-blur-sm text-sm">
  Solicitar Orçamento
</button>
```

## Linhas 59-64: Botão "VER PROJETOS" (já está correto):
```jsx
<Link
  href="/projetos"
  className="px-8 py-3 rounded-xl border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-300 font-bold uppercase tracking-tight transition-all hover:bg-blue-900 hover:text-white text-sm text-center"
>
  Ver Projetos
</Link>
```

## O que precisa ser mudado:

### 1. Trocar `<button>` por `<a>` no botão "SOLICITAR ORÇAMENTO"
**DE:**
```jsx
<button className="px-8 py-3 rounded-xl bg-gradient-to-r from-white/40 to-emerald-400/50 dark:from-slate-800/60 dark:to-emerald-600/50 border border-emerald-500 text-slate-900 dark:text-white font-bold uppercase tracking-tight transition-all hover:shadow-lg backdrop-blur-sm text-sm">
  Solicitar Orçamento
</button>
```

**PARA:**
```jsx
<a 
  href="https://wa.me/5511996670948?text=Oi!%20Quero%20solicitar%20um%20orçamento" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-8 py-3 rounded-xl bg-gradient-to-r from-white/40 to-emerald-400/50 dark:from-slate-800/60 dark:to-emerald-600/50 border border-emerald-500 text-slate-900 dark:text-white font-bold uppercase tracking-tight transition-all hover:shadow-lg backdrop-blur-sm text-sm"
>
  SOLICITAR ORÇAMENTO
</a>
```

### 2. Manter botão "VER PROJETOS" como está
O botão "VER PROJETOS" já está usando `<Link href="/projetos">` e funciona corretamente.

## Análise do Problema:
O botão "SOLICITAR ORÇAMENTO" atualmente é um `<button>` que não faz nada quando clicado. Precisa ser convertido para um link `<a>` que abre o WhatsApp com uma mensagem pré-definida para solicitação de orçamento.

## Solução proposta:
Substituir o elemento `<button>` por um elemento `<a>` com:
- `href` apontando para o WhatsApp com número e texto pré-definido
- `target="_blank"` para abrir em nova aba
- `rel="noopener noreferrer"` para segurança
- Mesma classe CSS para manter a aparência visual