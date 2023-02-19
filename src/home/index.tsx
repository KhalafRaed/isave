import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import useAuthorized from "@/hooks/useAuthorized";
import styles from "@/pages/home/styles.module.css";
import { Row, Col, Space } from "antd";
import History from "@/components/History";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useUserContext } from "@/lib/User";
import { createTransactionDocument } from "@/lib/firebase/utils";
import { useEffect } from "react";

const Home = () => {
  useAuthorized();
  const { user } = useUserContext();

  const [value, loading, error] = useDocument(
    doc(firestore, "hooks", user?.uid ?? ""),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (!loading && !error && !value?.data() && user) {
      console.log("CREATE NEW TRANSACTION DOC");
      void createTransactionDocument(user.uid);
    }
  }, [loading, value, error, user]);

  console.log(value, loading, error);

  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <Row>
          <Col xs={1} sm={2}></Col>
          <Col xs={22} sm={20}>
            <Cards loading={loading} />
            <br />
            <br />
            <History />
          </Col>
          <Col xs={1} sm={2}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
