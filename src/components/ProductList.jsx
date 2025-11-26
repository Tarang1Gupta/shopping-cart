import ProductCard from "./ProductCard";
const products = [
    {id:1, name: "Laptop", price: 50800},
    {id:2, name: "Phone", price: 18000},
    {id:3, name: "Headphone", price: 3999},
    {id:4, name: "Keybord", price: 2800},
    {id:5, name: "Mouse", price: 300},
]

export default function ProductList() {
  return (
    <div className="row">
        {products.map((p)=>(
            <div key={p.id} className="col-md-3 mb-4">
                <ProductCard product={p} />
            </div>
        ))}
      </div>
    
  );
}
