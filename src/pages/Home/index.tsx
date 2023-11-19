import { NextPage } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Main } from "./styles";
import useProducts from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

const Home: NextPage = (): JSX.Element => {
  const { products, isFetched, isFetching } = useProducts();
  return (
    <Container>
      <Header />
      <Main>
        {!isFetched && isFetching && <p>Loading...</p>}
        {isFetched && Array.isArray(products) && products && (
          products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        )}
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;