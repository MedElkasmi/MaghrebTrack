import react from "react";
import { Navigate } from "react-router-dom";

const Header = () => {
    return (
        <div className="header" style={{ background: '#2C2C2C' }}>
        <div className="header-content">
            <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
         
                </div>
                <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                    <a
                    className="nav-link "
                    href="#;"
                    data-bs-toggle="dropdown"
                    >
                    <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.8067 7.62358L20.1842 6.54349C19.6577 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83669 3.19795 9.63717 3.68456 9.63961 4.19109V4.19109C9.6246 5.23689 8.77248 6.07678 7.72657 6.07667C7.40421 6.07332 7.08846 5.98491 6.81123 5.82038V5.82038C5.89606 5.29598 4.72911 5.61126 4.20254 6.52519L3.53435 7.62358C3.00841 8.53636 3.3194 9.70258 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8067 7.63274V7.63274V7.62358Z"
                        fill="white"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="12.1751"
                        cy="11.889"
                        r="2.63616"
                        fill="white"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>

                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                    <div
                        id="DZ_W_TimeLine02"
                        className="widget-timeline dz-scroll style-1 p-3 height370"
                    >
                        <ul className="timeline">
                        <li>
                            <div className="timeline-badge primary" />
                            <a
                            className="timeline-panel text-muted"
                            href="#;"
                            >
                            <span>10 minutes ago</span>
                            <h6 className="mb-0">
                                Youtube, a video-sharing website, goes live{" "}
                                <strong className="text-primary">$500</strong>.
                            </h6>
                            </a>
                        </li>
                        <li>
                            <div className="timeline-badge info"></div>
                            <a
                            className="timeline-panel text-muted"
                            href="#;"
                            >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                                New order placed{" "}
                                <strong className="text-info">#XF-2356.</strong>
                            </h6>
                            <p className="mb-0">
                                Quisque a consequat ante Sit amet magna at volutapt...
                            </p>
                            </a>
                        </li>
                        <li>
                            <div className="timeline-badge danger"></div>
                            <a
                            className="timeline-panel text-muted"
                            href="#;"
                            >
                            <span>30 minutes ago</span>
                            <h6 className="mb-0">
                                john just buy your product{" "}
                                <strong className="text-warning">Sell $250</strong>
                            </h6>
                            </a>
                        </li>
                        <li>
                            <div className="timeline-badge success"></div>
                            <a
                            className="timeline-panel text-muted"
                            href="#;"
                            >
                            <span>15 minutes ago</span>
                            <h6 className="mb-0">
                                StumbleUpon is acquired by eBay.{" "}
                            </h6>
                            </a>
                        </li>
                        <li>
                            <div className="timeline-badge warning"></div>
                            <a
                            className="timeline-panel text-muted"
                            href="#;"
                            >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                                Mashable, a news website and blog, goes live.
                            </h6>
                            </a>
                        </li>
                        <li>
                            <div className="timeline-badge dark"></div>
                            <a
                            className="timeline-panel text-muted"
                            href="#;"
                            >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                                Mashable, a news website and blog, goes live.
                            </h6>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                    <a
                    className="nav-link"
                    href="#;"
                    role="button"
                    data-bs-toggle="dropdown"
                    >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                    <div
                        id="DZ_W_Notification1"
                        className="widget-media dz-scroll p-3"
                        style={{ height: 380 }}
                    >
                        <ul className="timeline">
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2">
                                <img alt="image" width={50} src="images/avatar/1.jpg" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-info">KG</div>
                            <div className="media-body">
                                <h6 className="mb-1">Resport created successfully</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-success">
                                <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2">
                                <img alt="image" width={50} src="images/avatar/1.jpg" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-danger">KG</div>
                            <div className="media-body">
                                <h6 className="mb-1">Resport created successfully</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-primary">
                                <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2">
                                <img alt="image" width={50} src="images/avatar/1.jpg" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-info">KG</div>
                            <div className="media-body">
                                <h6 className="mb-1">Resport created successfully</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-success">
                                <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2">
                                <img alt="image" width={50} src="images/avatar/1.jpg" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-danger">KG</div>
                            <div className="media-body">
                                <h6 className="mb-1">Resport created successfully</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-panel">
                            <div className="media me-2 media-primary">
                                <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">
                                29 July 2020 - 02:26 PM
                                </small>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <a className="all-notification" href="#;">
                        See all notifications <i className="ti-arrow-end" />
                    </a>
                    </div>
                </li>
   
                <li className="nav-item align-items-center header-border">
                   
                </li>
                <li className="nav-item ps-3">
                    <div className="dropdown header-profile2">
                    <a
                        className="nav-link"
                        href="#;"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <div className="header-info2 d-flex align-items-center">
                        <div className="header-media">
                            <img src="images/tab/1.jpg" alt="" />
                        </div>
                        <div className="header-info">
                            <h6>Elkasmi</h6>
                        </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" style={{}}>
                        <div className="card border-0 mb-0">
                        <div className="card-header py-2">
                            <div className="products">
                            <img
                                src="images/tab/1.jpg"
                                className="avatar avatar-md"
                                alt=""
                            />
                            <div>
                                <h6>Admin</h6>
                            </div>
                            </div>
                        </div>
                        <div className="card-footer px-0 py-2">
                            <a
                            href="#;"
                            className="dropdown-item ai-icon "
                            >
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.8066 7.62355L20.1842 6.54346C19.6576 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.0369 2.27801 10.5513 2.47985 10.194 2.83888C9.83666 3.19791 9.63714 3.68453 9.63958 4.19106V4.19106C9.62457 5.23686 8.77245 6.07675 7.72654 6.07664C7.40418 6.07329 7.08843 5.98488 6.8112 5.82035V5.82035C5.89603 5.29595 4.72908 5.61123 4.20251 6.52516L3.53432 7.62355C3.00838 8.53633 3.31937 9.70255 4.22997 10.2322V10.2322C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5457V13.5457C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2345C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2248 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7821C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.5869V19.5869C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7074 21.1317 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8066 7.63271V7.63271V7.62355Z"
                                stroke="var(--primary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                                <circle
                                cx="12.175"
                                cy="11.889"
                                r="2.63616"
                                stroke="var(--primary)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <span className="ms-2">Settings </span>
                            </a>
                            <a href="page-login.html" className="dropdown-item ai-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1={21} y1={12} x2={9} y2={12} />
                            </svg>
                            <span className="ms-2">Logout </span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    </div>

    )
}   

export default Header