import React from "react";
function FooterComponent() {
    return (
        <footer className="bg-dark text-light text-center py-3" 
                style={{ position: "fixed", bottom: 0, width: "100%" }}>
            <span className="fw-light">
                © {new Date().getFullYear()} Employee Management System — All Rights Reserved
            </span>
        </footer>
    );
}

export default FooterComponent;
