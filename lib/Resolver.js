Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
const resolvers = [];

class Resolver {
	
	
	static getResolvers(){
		
		return {
			Query: resolvers.reduce(function(r,c) { return Object.assign(r,c); })
		};
	}
	
	/**
	@param {string} name
	@param {function} handler
	*/
	static add(name,handler){
		
		resolvers[name] = handler;
		
		return this;
	}
};
exports.Resolver = Resolver;
