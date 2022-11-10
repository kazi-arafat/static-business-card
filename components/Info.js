import React from "react";

export default function Info(){
    return (
        <section className="section--info">
            <img className="section--info--banner" src="../assets/images/ig.jpeg" alt="" />
            <h4 className="section--info--clientName">Kazi Arafat</h4>
            <h5 className="section--info--clientRole">Fullstack Developer</h5>
            <h6 className="section--info--clientWebsite">personal.website</h6>
            <span className="section--info--clientContact">
                
                    <button type="button" className="section--info--clientContact--email">
                        <i className="fa fa-envelope" aria-hidden="true"></i> Email
                    </button>
                <button type="button" className="section--info--clientContact--LkIn">
                    <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
                </button>
            </span>
        </section>
        )
}