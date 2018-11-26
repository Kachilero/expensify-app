# BoilerPlate with React

## To run the program locally without webpack
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

In another console, in the indecision_app folder run
```
live-server public
```

## Adding a `--watch` flag
We can't just add `--watch` to `yarn test` as it then gets associated with `yarn` not `test`. So we need to pass the `--watch` flag down to the script by doing:
```bash
yarn test -- --watch
```
The extra `--` says that it applies to the first argument, and the second to the second.