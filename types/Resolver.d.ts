export class Resolver {
    static getResolvers(): {
        Query: any;
    };
    /**
    @param {string} name
    @param {function} handler
    */
    static add(name: string, handler: Function): typeof Resolver;
}
