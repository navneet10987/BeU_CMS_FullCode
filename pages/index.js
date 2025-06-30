
import { client } from '../sanity/sanity';
import ProductCard from '../components/ProductCard';

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <div>
      <h1>Be-U Homepage</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
