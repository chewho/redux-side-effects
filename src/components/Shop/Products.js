import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "i1",
    title: "Quantum Resonance Accelerator",
    description: "Unleash the power of quantum resonance with this cutting-edge accelerator.",
    price: 1999,
  },
  {
    id: "i2",
    title: "Eclipse Nebula Projector",
    description: "Experience the wonders of the universe with this mesmerizing nebula projector.",
    price: 149,
  },
  {
    id: "i3",
    title: "ChronoSphere Time Capsule",
    description: "Capture moments and relive memories with this revolutionary time capsule.",
    price: 299,
  },
  {
    id: "i4",
    title: "Phoenix Fire Elixir",
    description: "Ignite your senses with the mythical properties of this ancient fire elixir.",
    price: 49,
  },
  {
    id: "i5",
    title: "Dreamweaver's Reality Shifter",
    description: "Shape your dreams with the extraordinary capabilities of this reality shifter.",
    price: 129,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
