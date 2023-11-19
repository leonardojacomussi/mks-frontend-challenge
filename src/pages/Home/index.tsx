import { NextPage } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Main } from "./styles";
import useProducts from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Home: NextPage = (): JSX.Element => {
  const { products, isFetched, isFetching } = useProducts();
  return (
    <Container>
      <Header />
      {
        !isFetched && isFetching &&
          <Main>
            {Array(8).fill(0).map((_, index) => <ProductCardSkeleton key={`skeleton-${index}`} />)}
          </Main>
      }
      {
        isFetched && products && Array.isArray(products) &&
          <Main
            variants={container}
            initial={!isFetched && isFetching ? "visible" : "hidden"}
            animate="visible"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variants={item}/>
            ))}
          </Main>
      }
      <Footer />
    </Container>
  );
};

export default Home;