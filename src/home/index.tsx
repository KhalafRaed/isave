import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import useAuthorized from "../hooks/useAuthorized";
import { Row, Col } from "antd";
import History from "../components/History";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { firestore } from "../lib/firebase";
import { useUserContext } from "../lib/User";
import { createTransactionDocument } from "../lib/firebase/utils";
import { useEffect } from "react";
import "./styles.css";
import { UserDocumentType } from "../types";

const Home = () => {
  useAuthorized();
  const { user } = useUserContext();

  const [value, loading, error] = useDocumentData(
    doc(firestore, "transaction", user?.uid ?? "")
  );
  const typedValue = value as UserDocumentType;

  useEffect(() => {
    if (!loading && !error && !value && user) {
      console.log("CREATE NEW TRANSACTION DOC");
      void createTransactionDocument(user.uid);
    }
  }, [loading, value, error, user]);

  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Row>
          <Col xs={1} sm={2}></Col>
          <Col xs={22} sm={20}>
            <Cards loading={loading} values={{ ...typedValue }} />
            <br />
            <br />
            <History
              loading={loading}
              incomeHistory={typedValue?.incomeHistory}
              expenseHistory={typedValue?.expenseHistory}
            />
          </Col>
          <Col xs={1} sm={2}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
