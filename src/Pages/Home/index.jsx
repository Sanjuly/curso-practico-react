import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext} from "../../Context";
import "./styles.css";

function Home () {
    const context = useContext(ShoppingCartContext);
    
    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <Card key={item.id} data={item} />
                ))
            )
                }
                else {
                    return (
                        <div>
                            <h2>No results found</h2></div>
                    )
                }
        } 
    

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
            type="text"
            placeholder="Search a product"
            className="rounded-lg border border-black w-80 mb-2 p-2 focus:outline-neutral-500" 
            onChange={(event) => context.setSearchByTitle(event.target.value)}/>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg scrollable-cards">
            {renderView()} 
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home;
