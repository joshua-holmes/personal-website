

function Footer() {
  
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span> Joshua Holmes
            </p>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a href="https://github.com/joshua-holmes" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joshua-phillip-holmes/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;