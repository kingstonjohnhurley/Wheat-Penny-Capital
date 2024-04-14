import Navigation from "../components/navigation";
import Introduction from "../components/introduction";
import PortfolioCards from "../components/PortfolioCards";
import FAQs from "../components/faq";

export default function Home() {
    // this is just a comment

    // components to create:
    // TopSectioComponent, About, FAQs, Investment Holdings,
    return (
        <>
            <Introduction />
            <div className="bg">
                <PortfolioCards />


            </div>
        </>
    )
}