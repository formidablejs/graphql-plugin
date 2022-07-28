import { join } from "path";

export default {

    /**
     * --------------------------------------------------------------------------
     * Source
     * --------------------------------------------------------------------------
     *
     * Here you can specify the source directory of your GraphQL schema files.
     */

    source: join(process.cwd(), 'app', '**', '*.graphql'),

    /**
     * --------------------------------------------------------------------------
     * Resolvers
     * --------------------------------------------------------------------------
     *
     * Here you can specify the path to your resolvers that will be used by
     * GraphQL.
     */

    resolvers: require('../app/GraphQL/resolvers')
}
