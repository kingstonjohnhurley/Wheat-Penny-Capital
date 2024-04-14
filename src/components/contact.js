export default function Contact() {
  return (
    <div className="container contact">
      <div className="row justify-content-center">
        <form className="col-lg-6">
          <h2 className="text-center">Contact Us</h2>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              name="Email"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message Us
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="Message"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary- btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
