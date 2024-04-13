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

                <div className="container">
                    <div className="row">

                        <div className="contact">
                            <h2>Contact Us</h2>
                            <div className="cuf">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                    </input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message Us</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                                </div>
                            </div>
                            <button type="button" className="btn btn-primary- btn-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}