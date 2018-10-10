import React, { Component } from 'react';
import '../../styles/footer.css';

class Footer extends Component {
    render() {
        return (
        <div className="wrapperFooter">
            <div className="wrapperFooterItems">
                <div className="footerItems">
                    <div className="contact">
                        <h2 className="footerHeaderText">CONTACT</h2>
                        <div className="footerSubText">
                            <p>Hogeschool Rotterdam, Nederland</p>
                            <p>010-421910511</p>
                            <p>0950140@hr.nl</p>
                        </div>
                    </div>
                    <div className="contact">
                        <h2 className="footerHeaderText">MENU</h2>
                        <div className="footerSubText">
                            <p>Home</p>
                            <p>Mijn profiel</p>
                            <p>Winkelwagen</p>
                            <p>Favorieten</p>
                        </div>
                    </div>
                    <div className="contact">
                        <h2 className="footerHeaderText">VOLG ONS</h2>
                        <div className="footerSubText">
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;