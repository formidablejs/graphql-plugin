function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = require('./Resolver'/*$path$*/);
var $2 = require('path'/*$path$*/);
var $3 = require('@formidablejs/framework'/*$path$*/);
var $4 = require('@graphql-tools/load'/*$path$*/);
var $5 = require('@graphql-tools/graphql-file-loader'/*$path$*/);
var $6 = requireDefault$__(require('mercurius'/*$path$*/));

class GraphQLServiceResolver extends $3.ServiceResolver {
	
	
	boot(){
		
		const source = this.app.config.get('graphql.source');
		
		const schema = $4.loadSchemaSync(source,{
			loaders: [new $5.GraphQLFileLoader()]
		});
		
		const resolvers = this.app.config.get('graphql.resolvers').default;
		
		return this.app.intercept(function(server) {
			
			return server.register($6.default,{
				schema: schema,
				resolvers: resolvers
			});
		});
	}
};
exports.GraphQLServiceResolver = GraphQLServiceResolver;
