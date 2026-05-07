# DIFF do src/app/projetos/page.tsx ANTES de aplicar o fix

## Estado Atual (com bug de hidratação)

### Linhas problemáticas atuais:

**Linha 52:** `const [activeCategory, setActiveCategory] = useState<CategoryID>('all');`

**Linhas 55-70:** useEffect que faz setActiveCategory baseado em searchParams:
```typescript
useEffect(() => {
  const project = searchParams.get('project');
  if (!project) return;

  const projectCategoryMap: Record<string, CategoryID> = {
    'valbao-odontologia': 'corporate',
    'eventos-estandes': 'corporate',
    'agya-sounds': 'web',
    'naturaiz-astral-labyrinth': 'audiovisual',
  };

  const initialCategory = projectCategoryMap[project] ?? 'all';
  if (initialCategory !== activeCategory) {
    setActiveCategory(initialCategory);
  }
}, [searchParams, activeCategory]);
```

**Linhas 72-77:** setTimeout/scroll hack:
```typescript
useEffect(() => {
  const scrollTimeout = setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
  return () => clearTimeout(scrollTimeout);
}, [activeCategory]);
```

## O que precisa ser mudado:

### 1. Inicialização do useState (linha 52)
**DE:** `const [activeCategory, setActiveCategory] = useState<CategoryID>('all');`

**PARA:** `const [activeCategory, setActiveCategory] = useState<CategoryID>(() => searchParams.get('category') || 'all');`

### 2. Remover useEffect que faz setActiveCategory (linhas 55-70)
**REMOVER COMPLETAMENTE** o useEffect que sincroniza searchParams com activeCategory.

### 3. Remover setTimeout/scroll hack (linhas 72-77)
**REMOVER COMPLETAMENTE** o useEffect com setTimeout e window.scrollTo.

## Análise do Bug:
O problema atual é que:
1. `useState('all')` inicializa com valor fixo 'all'
2. O `useEffect` roda APÓS a renderização inicial, causando uma mudança de estado durante a hidratação
3. Isso causa mismatch entre server e client, resultando em `/projetos` não renderizar na navegação client-side

## Solução proposta:
Inicializar o estado diretamente com o valor de `searchParams.get('category') || 'all'` usando uma função inicializadora no useState. Isso garante que o valor inicial seja consistente entre server e client durante a hidratação.