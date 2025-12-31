import "./PageLayout.css";
import "../Header/Header";
import "../MainContent/MainContent";
import "../Footer/Footer";
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";

function PageLayout({children}){
    return (
        <div className="page-layout">
            <Header />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </ div>
    )
}

export default PageLayout;