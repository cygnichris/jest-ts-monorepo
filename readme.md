**Install**

```
yarn install
```

**Build Package B**

```
yarn workspace @foo/packageb build
```

**Run Package A** 

```
yarn workspace @foo/packagea start
```

**Run Test from root**

```
yarn test
yarn snapshot
```

**Run Test from package**

```
yarn workspace @foo/packagea test
yarn workspace @foo/packageb test
yarn workspace @foo/packagea snapshot
yarn workspace @foo/packageb snapshot
```
