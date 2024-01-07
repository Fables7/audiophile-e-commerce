import data from "@/data.json";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Item = ({
  thumbnail,
  name,
  slug,
  category,
}: {
  thumbnail: string;
  name: string;
  slug: string;
  category: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image src={thumbnail} alt="" width={350} height={318} />
      <h5>{name}</h5>
      <Link href={`/${category}/${slug}`}>
        <Button>see product</Button>
      </Link>
    </div>
  );
};

const ProductSuggestions = ({ slug }: { slug: string }) => {
  const products = [...data.headphones, ...data.speakers];
  const filteredProducts = products.filter((product) => product.slug !== slug);
  const randomProducts = filteredProducts
    .sort(() => 0.5 - Math.random())
    .filter((value, index, self) => self.indexOf(value) === index)
    .slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-16">
      <h3>you may also like</h3>
      <div className="flex justify-between w-full">
        {randomProducts.map((product, index) => {
          const category = data.headphones.find(
            (item) => item.slug === product.slug
          )
            ? "headphones"
            : "speakers";

          return (
            <Item
              key={index}
              thumbnail={product.thumbnail}
              name={product.name}
              slug={product.slug}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductSuggestions;
