import { useState, useEffect } from 'react';
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home () {
    const [items, seItems] = useState(null);

    useEffect (() => {
        fetch('https://api.escuelajs.co/api/v1/products')//solicitamos informacion
        .then((res) => res.json())//resolvemos la respuesta y q la devuelva en json
        .then((data) => {
            seItems(data);
        })
    }, [])

    return (
        <Layout>
            <h1>Home</h1>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {//lógica para renderizar las cartas
                    items?.map(item =>
                    // eslint-disable-next-line react/jsx-key
                    <Card key={item.id} data={item} />
                )
            }
            </div>
        </Layout>
    )
}

export default Home;
