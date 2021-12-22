import { useSession, signIn, signOut } from "next-auth/client"
import Redirect from '../src/components/Redirect'
import { Container, LoginBox, LogoContainer, LoginButton } from '../styles/pages/login'
import DefaultHeader from '../src/components/DefaultHeader';

export default function login() {
	const [session] = useSession()

	if (session) {{
		return <Redirect to="/"/>
	}} 
	return (
		<Container>
			<DefaultHeader pageTitle={'Login'} />

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
