import "reflect-metadata";

import { ApolloServer } from 'apollo-server';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./src/resolvers/userResolver";

async function main() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const server = new ApolloServer({ schema });

    const { url } = await server.listen();

    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main()