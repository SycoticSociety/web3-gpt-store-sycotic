import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import sytles from "../styles/Home.module.css";

const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            width: "100%",
        }}>
            <h2>Sycotic Society Web3 NFT Comic Book Store.</h2>
            <div>
                <Link href="/" style={{ marginRight: '1rem'}} className={sytles.navLink}>Collection</Link>
                <Link href="/shop" className={sytles.navLink}>Shop</Link>
            </div>
            <ConnectWallet
                detailsBtn={() => (
                    <div>
                        <img src="https://i.pravatar.cc/30?u=a042581f4e29026704d" style={{
                            borderRadius: "15px",
                        }} />
                    </div>
                )}
            />
        </div>
    )
};

export default Navbar;
