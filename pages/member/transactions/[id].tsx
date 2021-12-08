import Sidebar from "../../../components/organisms/Sidebar";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes } from "../../../services/data-types";
import { getMemberTransactionDetail } from "../../../services/member";

interface TransactionsDetailProps {
    transactionDetail: HistoryTransactionTypes;
}

export default function DetailTransaction(props: TransactionsDetailProps) {
    const { transactionDetail } = props;
    
    return (
        <section className="transactions-detail overflow-auto">
            <Sidebar activeMenu="transactions" />
            <TransactionDetailContent data={transactionDetail} />
        </section>
    )
}

interface getServerSideProps {
    req: {
      cookies: {
        token: string;
      };
    },
    params: {
        id: string;
    }
  }
  
  export async function getServerSideProps({ req, params }: getServerSideProps) {
    const {id} = params;
    const { token } = req.cookies;
    if (!token) {
      return {
        redirect: {
          destination: "/sign-in",
          permanent: false,
        },
      };
    }
    const jwtToken = Buffer.from(token, "base64").toString("ascii");
    const response = await getMemberTransactionDetail(id, jwtToken);
    
  
    return {
      props: {
          transactionDetail: response.data
      },
    };
  }