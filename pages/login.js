import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/client"
import Redirect from '../src/components/Redirect'
import { Container, LoginBox, LogoContainer, LoginButton } from '../styles/pages/login'

export default function login() {
	const [session] = useSession()

	if (session) {{
		return <Redirect to="/"/>
	}} 
	return (
		<Container>
			<Head>
				<title>Login | Controle Financeiro</title>
				<meta name="description" content="Acessar a plataforma para seu controle 
					financeiro" 
				/>
        <link rel="icon" href="/fav-2.ico" />
			</Head>

			<LoginBox>
				<LogoContainer>
					<img src="/logo_size_invert.jpg" alt="logo" />
				</LogoContainer>
				Acesse sua conta
				<LoginButton onClick={() => signIn("auth0")}>Fazer login</LoginButton>
			</LoginBox>
		</Container>
	)
}
