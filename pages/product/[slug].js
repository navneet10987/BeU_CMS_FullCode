
import { client } from '../../sanity/sanity';

export async function getStaticPaths() {
  const products = await client.fetch(`*[_type == "product"]{slug}`);
  const paths = products.map(p => ({ params: { slug: p.slug.current } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug: params.slug });
  return { props: { product } };
}

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
