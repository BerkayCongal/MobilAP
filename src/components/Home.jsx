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
        </div>
        </>
    )
}