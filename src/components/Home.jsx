export default function Home() {
    return(
        <>
        <div className="home-container">
            <div className="home-main">
                <div className="home-header">
                    <span><img src="/src/img/Avatar.svg" alt=""/></span>
                    <span className="history">
                        <img src="/src/img/arrow down 2.svg" alt="" />
                        <p>October</p>
                    </span>
                    <img src="/src/img/notifiaction.svg" alt="" />
                </div>
                <div className="home-account">
                    <p>Account Balance</p>
                    <h2>$9400</h2>
                </div>
                <div className="expenses">
                    <div className="greenbtn">
                    <img src="/src/img/Grennewbtn.svg" alt="" />
                    <div>
                        <p>Income</p>
                        <span>$5000</span>
                    </div>
                    </div>
                    <div className="redbtn">
                    <img src="/src/img/Rednewbtn.svg" alt="" />
                        <div>
                            <p>Expenses</p>
                            <span>$1200</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-top">
                <div className="top-text">
                    <h3>Spend Frequency</h3>
                </div>
            </div>
            <img className="grafix" src="/src/img/Graph.jpg" alt="" />
            <div className="home-top">
                <div className="topmenu">
                    <ul>
                        <li>Today</li>
                        <li>Week</li>
                        <li>Month</li>
                        <li>Year</li>
                    </ul>
                </div>
                <div className="home-footer">
                    <h3>Recent Transaction</h3>
                    <span>See All</span>
                </div>
                <div className="purchased-container">
                    <div className="home-purchased">
                        <div className="purchased-main">
                            <img className="shop-img" src="/src/img/shopping bag.svg" alt="" />
                                <div className="purchased-shopping">
                                    <span>Shopping</span>
                                    <p>Buy some grocery</p>
                                </div>
                                <div className="purchased-price">
                                    <p>$-120</p>
                                    <span>10:00 AM</span>
                                </div>
                        </div>
                    </div>
                    <div className="home-purchased">
                        <div className="recurring-main">
                            <img src="/src/img/recurring-bill.svg" alt="" />
                                <div className="purchased-shopping">
                                    <span>Subscription</span>
                                    <p>Disney+ Anunal...</p>
                                </div>
                                <div className="purchased-price">
                                    <p>$-80</p>
                                    <span>03:30 PM</span>
                                </div>
                        </div>
                    </div>
                    <div className="home-purchased">
                        <div className="restaurant-main">
                            <img src="/src/img/restaurant.svg" alt="" />
                                <div className="purchased-shopping">
                                    <span>Food</span>
                                    <p>Buy a ramen</p>
                                </div>
                                <div className="purchased-price">
                                    <p>$-32</p>
                                    <span>07:30 PM</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-menu">
                <div className="footer-container">
                    <ul>
                        <li><img src="/src/img/home.svg" alt="" />Home</li>
                        <li><img src="/src/img/transaction.svg" alt="" />Transaction</li>
                        <li></li>
                        <img  className="open-menu" src="/src/img/close.svg" alt="" />
                        <li><img src="/src/img/pie-chart.svg" alt="" />Budget</li>
                        <li><img src="/src/img/user.svg" alt="" />Profile</li>
                        {/* <li><img  className="open-menu" src="/src/img/close.svg" alt="" /></li> */}
                    </ul>
                </div>
            </footer>
        </div>
        </>
    )
}