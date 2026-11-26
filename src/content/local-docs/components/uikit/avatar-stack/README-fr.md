<!--GITHUB_BLOCK-->

# AvatarStack

<!--/GITHUB_BLOCK-->

Ce composant est utilisé pour une pile d'images qui se chevauchent et, éventuellement, un contrôle. Il fait généralement référence aux avatars des utilisateurs.

```ts
import {AvatarStack} from '@gravity-ui/uikit';
```

## Utilisation

Fondamentalement, `AvatarStack` n'a aucune limitation quant aux composants à rendre. Voir un exemple de son utilisation courante ci-dessous :

```tsx
<AvatarStack>
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login1`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login2`} />
  <Avatar imgUrl={`https://i.pravatar.cc/150?u=login3`} />
</AvatarStack>
```

## Propriétés

| Nom        | Description                                                                                                                                                      |                        Type                        |  Défaut  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-------: | --- |
| max         | Détermine combien d'avatars sont visibles avant le bouton `More`. Si le nombre d'avatars est à seulement 1 de `max`, le bouton `More` sera remplacé par un avatar. |                      `number`                      |     3     |
| overlapSize | Détermine à quel point chaque élément doit chevaucher le suivant. Vous pourriez vouloir utiliser `s` pour les `Avatar`s de taille `xs` à `m`, `m` pour la taille `l`, et `l` pour la taille `xl`. |                   `s`, `m`, `l`                    |    `s`    |
| size        | Taille du contrôle affichant les avatars supplémentaires. Sa valeur est la même que la taille de l'`Avatar`.                                                                       |                    `AvatarSize`                    |           |
| className   | Nom de classe du nœud DOM racine                                                                                                                                  |                      `string`                      |           |
| children    | Liste d'avatars qui peuvent également avoir des wrappers supplémentaires                                                                                                                |                     `Object[]`                     |           |
| renderMore  | Rendu personnalisé pour le contrôle affichant les avatars supplémentaires                                                                                                           | `function(options: {count: number}): ReactElement` |           |
| moreVariant | Variante du contrôle par défaut affichant le 'compteur' supplémentaire                                                                                                            |                  `counter`,`dots`                  | `counter` |     |

### AvatarStack.MoreButton

Composant pour remplacer le bouton `More`

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