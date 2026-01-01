import "./MainContent.css"
import Container from "../Container/Container";

function MainContent({children}){
    return (
        <main className="main">
            <Container>
                {children}
            </Container>
        </main>
    );
}

export default MainContent;