import React from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button butttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <div class="footer-link">
                <div className="footer-link-wrapper">
                  <div class="footer-link-items">
                    <h2>About Us</h2>
                    <Link to="/sign-up">How it works</Link>
                    <Link to="/">The stats</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Private Life</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
                <div class="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to="/">Contact</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">New Boxeurs</Link>
                    <Link to="/">Idea</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Videos</h2>
                    <Link to="/">Submit Video</Link>
                    <Link to="/">Highlights</Link>
                    <Link to="/">Begining of the career</Link>
            </div>
                <div class="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Youtube</Link>
                    <Link to="/">Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        BOXING&nbsp;&nbsp;&nbsp;<i class="fas fa-plane-departure"/>
                    </Link>
                </div>
                <small className="website-rights">Boxing © 2021</small>
                <div className="social-icons">
                    <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
                        <i className="fab fa-facebook-f">&nbsp;&nbsp;&nbsp;</i>
                    </Link>
                    <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram">
                        <i className="fab fa-instagram">&nbsp;&nbsp;&nbsp;</i>
                    </Link>
                    <Link to="/" target="_blank" aria-label="Youtube" class="social-icon-link youtube">
                        <i class="fab fa-youtube">&nbsp;&nbsp;&nbsp;</i>
                    </Link>
                    <Link to="/" target="_blank" aria-label="Twitter" class="social-icon-link twitter">
                        <i class="fab fa-twitter">&nbsp;&nbsp;&nbsp;</i>
                    </Link>
                    <Link to="/" target="_blank" aria-label="LinkedIn" class="social-icon-link LinkeIn">
                        <i class="fab fa-linkedin">&nbsp;&nbsp;&nbsp;</i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Footer
