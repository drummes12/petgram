import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { useRegisterMutation } from '../container/useRegisterMutation'
import { useLoginMutation } from '../container/useLoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)

  const {
    register,
    loading: loadingRegister,
    error: errorRegister,
  } = useRegisterMutation()
  const { 
    login, 
    loading: loadingLogin, 
    error: errorLogin 
  } = useLoginMutation()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables })
  }
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables })
      .then(({ data }) => {
        const { login } = data
        login && activateAuth(login)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <UserForm
        onSubmit={onSubmitRegister}
        title='Registrarse'
        error={errorRegister && 'El usuario ya existe o hay algun problema'}
        disabled={loadingRegister}
      />
      <UserForm
        onSubmit={onSubmitLogin}
        title='Iniciar Sesion'
        error={errorLogin && 'El usuario no existe o hay algun problema'}
        disabled={loadingLogin}
      />
    </>
  )
}
