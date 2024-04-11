import { useParams } from "react-router-dom"
export default function CompanyDetails() {
  const { id } = useParams();
  return (
    <div className="container">
      This will render the details about a company whose id is <span>
        {id}
      </span>
      <div>
        John will add details about companies
      </div>
    </div>
  )
}