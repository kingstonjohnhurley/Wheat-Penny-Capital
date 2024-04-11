export default function PortfolioCard(props) {

  return (
    <div className="portfolio-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {props.companyDetails.company}
        </div>
        <div className="flip-card-back">
          {props.companyDetails.description}
        </div>
      </div>
    </div>
  )
}