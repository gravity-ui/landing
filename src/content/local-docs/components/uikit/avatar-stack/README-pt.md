<!--GITHUB_BLOCK-->

# AvatarStack

<!--/GITHUB_BLOCK-->

Este componente é usado para uma pilha de imagens com sobreposição umas sobre as outras e, opcionalmente, um controle. Geralmente se refere a avatares de usuários.

```ts
import {AvatarStack} from '@gravity-ui/uikit';
```

## Uso

Basicamente, `AvatarStack` não tem limitações em termos de quais componentes renderizar. Veja um exemplo de seu uso comum abaixo:

```tsx
<AvatarStack>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```

## Propriedades

| Nome        | Descrição                                                                                                                                                      |                        Tipo                        |  Padrão  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-------: | --- |
| max         | Determina quantos avatares são visíveis antes do botão `Mais`. Se a contagem de avatares for apenas 1 a menos que `max`, o botão `Mais` será substituído por um avatar. |                      `number`                      |     3     |
| overlapSize | Determina o quanto cada item deve se sobrepor ao próximo. Você pode querer usar `s` para `Avatar`s de tamanho `xs` a `m`, `m` para `l`, e `l` para `xl`. |                   `s`, `m`, `l`                    |    `s`    |
| size        | Tamanho para o controle que exibe avatares extras. Seu valor é o mesmo que o tamanho do `Avatar`.                                                                       |                    `AvatarSize`                    |           |
| className   | Nome da classe do nó DOM raiz                                                                                                                                  |                      `string`                      |           |
| children    | Lista de avatares que também podem ter wrappers extras                                                                                                                |                     `Object[]`                     |           |
| renderMore  | Renderização personalizada para o controle que exibe avatares extras                                                                                                           | `function(options: {count: number}): ReactElement` |           |
| moreVariant | Variante do controle padrão que exibe o 'contador' extra                                                                                                            |                  `counter`,`dots`                  | `counter` |     |

### AvatarStack.MoreButton

Componente para substituir o botão `Mais`

```tsx
<AvatarStack
  renderMore={({count}) => (
    <Tooltip content={'More users'}>
      <AvatarStack.MoreButton count={count} />
    </Tooltip>
  )}
>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```
