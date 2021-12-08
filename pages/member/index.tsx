import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, PlayerTypes } from "../../services/data-types";

export default function Member() {
    return (
        <section className="overview overflow-auto">
            <Sidebar activeMenu="overview" />
            <OverviewContent />
        </section>
    )
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
        
        player.avatar = `${process.env.NEXT_PUBLIC_IMAGE}/${player.avatar}`;
  
    return {
      props: {
        user: player
      },
    }
  }