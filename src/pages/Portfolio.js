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
            <PortfolioCards />
            <div className="contact">
                    <h5>
                        Join Wheat Penny Capital Today!  Get in touch with Austin Smith and start your investing journey with us.
                    </h5>
                    <a href="mailto:austinwebbsmith100@gmail.com">
                        Contact Us
                    </a>
                </div>
        </>
    )
}