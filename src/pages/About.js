
const data = [
    {
        title: "Wheat Penny Capital charges no fees toward investors.",
        description: "That's right!  Wheat Penny Capital charges no fees to anyone who chooses to invest with us."
    },
    {
        title: "Each partner can invest a maximum of $100 into Wheat Penny Capital",
        description: "Because Wheat Penny Capital charging no money, there is a maximum investment of $100.  You are free to invest from $20 to $100 in Wheat Penny Capital."
    },
    {
        title: "I began with $10,000, which is a 'parental grant' that is mine to invest.",
        description: "Wheat Penny Capital started out by investing around $10,000, but the number continues to grow as more and more people invest in Wheat Penny Capital."
    },
    {
        title: "I will write bi-annual letters, but I welcome communication anytime",
        description: "Once investing in Wheat Penny Capital, you will receive two letters each year regarding how our stocks have done.  You can also contact Austin Smith by clicking the Contact button at the bottom of the page."
    }
]
function SlideUpBox(props) {
    return (
        <div className="col">
            <div className="box">
                <div className="visible-box">
                    {props.title}
                </div>
                <div className="hid-box">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div>
            <div className="bg" >

                <div className="about" >
                    <h1>Meet Austin Smith</h1>
                    <div className="col-sm-6">
                        <div className="subtitle">
                            <p>Owner and Operator of Wheat Penny Capital</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="two">
                        <div className="col-sm-8">
                            <div behavior="slide">
                                <p> <b>Wheat Penny Capital</b> was established by Austin Smith on January 3, 2023.   Ever since then, Austin has been the sole member of the company. He has a lot of experience in investing and stock picking, which has helped him consistently outperform the market. Austin's dedication and persistent effort have driven Wheat Penny Capital's impressive success so far. His devotion and superb strategy have shown to be very effective and have driven up profits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        {
                            data.map((item) => (
                                <SlideUpBox title={item.title} description={item.description} />
                            ))
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="two">
                        <div className="col-sm-6">
                            <h4>What is a Wheat Penny?
                            </h4>
                            <p>A wheat penny is a very rare type of penny.  As an amateur coin collector, I chose the name Wheat Penny Capital for multiple reasons.  Wheat Pennies are rare and unique, just like the opportunities that I am looking to capitalize on. They have also weathered the test of time, staying consistent and growing in value.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="contact">
                            <h2>Contact Us</h2>
                            <div className="cuf">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
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
            </div >
        </div >

    )
}