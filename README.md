# GraphQL Plugin

GraphQL support for the Formidable Framework.

## Requirements

 * [@formidablejs/framework](https://www.npmjs.com/package/@formidablejs/framework): `>=0.12.1`

## Install

npm:

```bash
npm i @formidablejs/graphql
```

yarn:

```bash
yarn add @formidablejs/graphql
```

## Publish

```bash
node craftsman package:publish --package="@formidablejs/graphql" --tag="config,schema-resolvers"
```

## Config

Add `GraphQLServiceResolver` in the `config/app.imba` or `config/app.ts` config under `resolvers`:

```js
...
import { GraphQLServiceResolver } from '@formidablejs/graphql'
...

export default {
	...
	resolvers: {
		...
		GraphQLServiceResolver
```

Then, register the `graphql.imba` config file in the `config/index.imba` or `config/index.ts` file.

#### `config/index.ts`

```ts title: config/index.ts
import graphql from './graphql';

export class Config extends ConfigRepository
{
	/**
	 * All of the configuration items.
	 *
	 * @type {Object}
	 */
	get registered() : Object
	{
		return {
			...
			graphql
```

#### `config/index.imba`

```py title: config/index.ts
import graphql from './graphql'

export class Config < ConfigRepository
{
	# All of the configuration items.
	#
	# @type {Object}

	get registered
		{
			...
			graphql
```

And finally test your GraphQL api:

```bash
# serve application
node craftsman serve --dev --port=3000

# test graphql
curl -H "Content-Type:application/graphql" -XPOST -d "query { add(x: 2, y: 2) }" http://localhost:3000/graphql
```

Security
-------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.
