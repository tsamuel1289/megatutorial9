import React, {useState} from 'react'
import {Stack, Container, Form, Button} from "react-bootstrap"

import firebaseApp from "../credentials"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
const auth = getAuth(firebaseApp)


const Logueo = () => {

    
    const [estaRegistrandose, setEstaRegistrandose] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        const correo = e.target.formBasicEmail.value;
        const contra = e.target.formBasicPassword.value;
     
          
        if (estaRegistrandose) {
            // si se registra
            const usuario = await createUserWithEmailAndPassword(auth, correo, contra)

        } else {

            // si esta iniciando sesion
            signInWithEmailAndPassword(auth, correo, contra);
        }

    }

    return (
        <Container>
            <Stack gap={3}>
                <h1>{estaRegistrandose ? "Registrate" : "Inicia sesion"}</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                    
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    
                    <Button variant="primary" type="submit">
                        {estaRegistrandose ? "Registrate" : "Inicia sesion"}
                    </Button>
                </Form>

                <Button variant="primary" type="submit">
                    Acceder con Google
                </Button>
                
                <Button variant="primary" onClick= {()=> setEstaRegistrandose(!estaRegistrandose)}>
                    {estaRegistrandose ? "Ya tienes cuenta?" : "No tienes cuenta, regsitrate"}
                </Button>
                <Button onClick={()=> signOut(auth)} >
                    Salir
                </Button>
            </Stack>
        </Container>
    )
}

export default Logueo