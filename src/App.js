import { Routes, Route, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import { Layout } from "antd";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
          <h1
            style={{
              fontSize: 28,
              textAlign: "center",
              color: "white",
              fontWeight: "800",
            }}
          >
            Restaurant Finder
          </h1>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/details/:id" element={<RestaurantDetails />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
}

export default App;
