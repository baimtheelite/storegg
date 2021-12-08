import jwtDecode from "jwt-decode";
import React, { useCallback, useEffect, useState } from "react";
import { JWTPayloadTypes, PlayerTypes, TopupCategoriesTypes } from "../../../services/data-types";
import { getHistory} from "../../../services/player";
import { getMemberOverview } from "../../../services/member";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState([]);
  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  const getMemberOverviewAPI = useCallback(async () => {
    const data = await getMemberOverview();
    setHistory(data.data.data);  
    setCount(data.data.count);
  }, [getMemberOverview])
  
  useEffect(() => {
    getMemberOverviewAPI();
  }, [])
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopupCategoriesTypes) => (
                <Category nominal= {item.value} icon="ic-desktop">
                  Game <br />
                  {item.name}
                </Category>
              ))}
              {/* <Category nominal={8455000} icon="ic-mobile">
                Game
                <br /> Mobile
              </Category>
              <Category nominal={8455000} icon="ic-mobile">
                Others
                <br /> Categories
              </Category> */}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                { history.map((item) => (
                  <TableRow
                    key={item._id}
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`} 
                    title={item.historyVoucherTopup.gameName} 
                    category={item.historyVoucherTopup.category} 
                    item={item.historyVoucherTopup.coinQuantity} 
                    price={item.historyVoucherTopup.price} 
                    status={item.status} 
                  />
                ))}
                {/* <TableRow image="overview-2" title="Call Of Duty Modern Warfare" category="Desktop" item={200} price={290000} status="Success" />
                <TableRow image="overview-3" title="Clash of Clans" category="Mobile" item={100} price={120000} status="Failed" />
                <TableRow image="overview-4" title="The Royal Game" category="Mobile" item={100} price={120000} status="Pending" /> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  }
}

export async function getServerSideProps({req} : getServerSideProps) {
  const {token} = req.cookies; 
  if(!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false
      }
  }
}

      const jwtToken = Buffer.from(token, 'base64').toString('ascii');    
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const player: PlayerTypes = payload.player;
      console.log(player);
      
      player.avatar = `${process.env.NEXT_PUBLIC_IMAGE}/${player.avatar}`;

  return {
    props: {
      user: player
    },
  }
}
