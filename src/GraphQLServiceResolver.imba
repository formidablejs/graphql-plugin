import { Resolver } from './Resolver'
import { join } from 'path'
import { ServiceResolver } from '@formidablejs/framework'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import mercurius from 'mercurius'

export class GraphQLServiceResolver < ServiceResolver

	def boot
		const source = self.app.config.get('graphql.source')

		const schema = loadSchemaSync source, {
			loaders: [new GraphQLFileLoader()]
		}

		const resolvers = self.app.config.get('graphql.resolvers').default

		self.app.intercept do(server)
			server.register(mercurius, {
				schema
				resolvers
			})
