import { NextPage } from "next";
import { Container } from "./styles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useProducts from "@/hooks/useProducts";

const Home: NextPage = (): JSX.Element => {
  const { products, isFetched, isFetching } = useProducts();

  return (
    <Container>
      <Header />
      <h1>Home</h1>
      {!isFetched && isFetching && <p>Loading...</p>}
      {isFetched && Array.isArray(products) && products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
      <Footer />
    </Container>
  );
};

export default Home;