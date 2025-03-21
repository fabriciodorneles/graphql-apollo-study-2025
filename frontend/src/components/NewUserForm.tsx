import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../services/queries";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
    mutation createUser($name: String!) {
        createUser(name: $name) {
            id
            name
        }
    }
`


export const NewUserForm = () => {
    const [name, setName] = useState("")
    const [createUser ] = useMutation(CREATE_USER)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if(!name) return

        const { data: {createUser: datum}} = await createUser({
            variables: { name },
            // refetchQueries: [GET_USER]
            update: (cache, { data: { createUser } }) => {
                const { users } = client.readQuery({ query: GET_USER })!

                cache.writeQuery({
                    query: GET_USER,
                    data: {
                        users: [
                            ...users, 
                            createUser
                    ]}
                })
            }
        })
        setName("")

        console.log(datum)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Create User</button>
        </form> 

    )
}