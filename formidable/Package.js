exports.Package = class Package {
  publish(language = 'imba') {
    const path = language.toLowerCase() == 'imba'
      ? 'imba' : (
        language.toLowerCase() == 'typescript' ? 'ts' : 'imba'
      )

    return {
      config: {
        paths: {
          [`config/graphql.${path}`]: `./formidable/vendor/${path}/config/graphql.${path}`,
        }
      },
      'schema-resolvers': {
        paths: {
          'app/GraphQL': `./formidable/vendor/${path}/app/GraphQL`,
        }
      }
    }
  }
}