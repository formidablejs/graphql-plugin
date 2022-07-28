const resolvers = []

export class Resolver

	static def getResolvers
		{
			Query: resolvers.reduce do(r, c) Object.assign(r, c)
		}

	static def add name\string, handler\function
		resolvers[name] = handler

		self
