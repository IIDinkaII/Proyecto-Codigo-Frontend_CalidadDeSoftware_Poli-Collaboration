import React from 'react'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const Login = () => {
    return(
        <div>
            <Text fontSize="50px" color="black" align="center">
                Login
            </Text>
            <div>
                <Text color="gray.500" isTruncated>
                    Usuario:
                </Text>
                <Input w ="400px" placeholder="Ingresa el usuario" isRequired = "true" />
                <br></br>
                <Text color="gray.500" isTruncated>
                    Contraseña:
                </Text>
                <Input w ="400px" placeholder="Ingresa su contraseña" isRequired = "true" />
            </div>

            <div>
                <Button colorScheme="blue">Button</Button>
            </div>
        </div>
    )
}

  export default Login