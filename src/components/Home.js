import React from 'react'
import {Container, Button} from 'react-bootstrap'

import firebaseApp from '../credentials'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(firebaseApp)


const Home = () => {
    return (
        
        <Container>
            <h4>Hola sesion iniciada</h4>
            <Button onClick= {signOut(auth)}> Cerrar sesion </Button>
        </Container>
            
        
    )
}

export default Home