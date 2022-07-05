import React from 'react'

function Tab() {
    return (
        <div class="mt-4 mb-4">
            <nav className="navbar navbar-expand-lg navbar-custom sticky-top text-center">
                <ul className="nav nav-pills pill d-flex mx-auto text-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Categories</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Our Traines/Speakers</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Support Us</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact Us</button>
                    </li>
                </ul>
            </nav>
            <div className="tab-content" id="pills-tabContent">
                <div className="container tab-pane fade show active panes" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <h4>Top Categories</h4>
                            <ul className="cat-menu unstyled">
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center">
                            <h4>Top Categories</h4>
                            <ul className="cat-menu unstyled">
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center">
                            <h4>Top Categories</h4>
                            <ul className="cat-menu unstyled">
                                <li className>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Category 1
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Tab