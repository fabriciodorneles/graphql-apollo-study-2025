import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver {
    private data:User[] = [
        {
            id: "1",
            name: "John Doe"
        },
        {
            id: "2",
            name: "Jane Doe"
        }
    ]
    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg("name") name: string
    ) {
        const user = {
            id: crypto.randomUUID(),
            name: name
        }
        this.data.push(user);

        return user;
    }

}