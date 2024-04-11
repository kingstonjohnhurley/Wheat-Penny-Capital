import { useNavigate } from "react-router-dom"
import PortfolioCard from "./PortfolioCard";

// import ApolloLogo from "images/apollo-logo.png"
// import Applelogo from "images/apple-logo.png"
// import BlackStoneLogo from "images/blackstone-logo.png"
// import DNowLogo from "images/dnow-logo.png"

const data = [
  {
    description: "Apple is the world's best consumer electronics company with a very devoted customer base. Their products never go on sale; you buy Apple products because of their quality and innovation. We bought Apple shares for similar reasons. We initiated our position at $127 in early 2023; we continue to hold the shares and remain optimistic about the company's future.",
    company: "Apple",
  },

  {
    description: "DNOW is a worldwide distributor of energy and industrial products that has been operating for more than 150 years. We believe oil demand will continue to grow, and DNOW's products are critical for oil production. We viewed DNOW shares as attractive under $13 when we initiated our position; when oil prices subsequently declined, we saw an opportunity and added to our position around $10.",
    company: "Dnow",
  },

  {
    description: "Apollo Global Management and Blackstone are two of the largest asset management firms. In early 2023, we bought shares of both at attractive levels -- Apollo at under $64 and Blackstone at under $76. Since that time, both stocks have comfortably eclipsed $100 as assets and earnings have grown. Both companies remain industry leaders and should continue to grow assets indefinitely.",
    company: "Apollo",
  },

  {
    description: "Liquidia is a pharmaceutical company that has grown into our biggest position at 2023-end. Liquidia developed an inhalable drug that counters Pulmonary Arterial Hypertension (PAH) disease. The company successfully defended its drug against their main competitor's lawsuit, an outcome we foresaw as highly likely. In addition to substantial stock appreciation, Wheat Penny also benefited from the sale of put options at a time when the share price was too focused on Liquidia's legal risks. We continue to have high conviction in Liquidia's future story.",
    company: "liquidia",
  },
  

]

export default function PortfolioCards() {

  const navigate = useNavigate();

  function onClick(companyId) {
    navigate("/portfolio/" + companyId)
  }

  return (
    <div className="container portfolio-cards">
      {
        data.map((entry) => (
          <PortfolioCard key={entry.company} companyDetails={entry} />
        ))
      }
    </div>
  )
}