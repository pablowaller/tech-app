import React, {useState, useEffect} from 'react'
import ItemList from "../ItemList/ItemList"


const StyleUnderDiv = {
    marginTop: "1em",
};

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [{id:1, 
            title:'Xiaomi Airdots', 
            description: "Auriculares inalámbricos ",
            price: 2599, 
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXp5t_xqZiEOzIL4r57ht3RsV1E_YkK9Bh5pe80VyesL-IKZW8YWrwG2d3Rn7Rf8x61WvWCkB&usqp=CAc",
            stock: 7},
            {id:2, 
            title:"Lenovo Yoga C940",
            description:"Rendimiento y versatilidad móvil", 
            price: 215.999, 
            pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR75v6HkcMRd0f__SQH6TQmaWrwyTiSiM9g8WJN63LgvcMhD8rZRHShT-W-8fN8639hNCM8-I&usqp=CAc",
            stock: 12},
            {id:3, 
            title:"Powebank TP-LINK", 
            description:"Potencia para todo el día",
            price: 3000, 
            pictureURL:"data:image/jpeg;base64,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TaK9UvIxWvMxjr7/AEj+UOIM3PB9DVH+7VZu5Ruj8Tc/CTmD2NQpepSUHme038xzldtTWPbmysXo+a3O0xEfu55hNl1qnqUnI523R+LWEm8L0PqHOrUVByUbx/E2A/ObxaVEotqbz7cmxxekYa9W8oLCdFsOmZUuebm4/l0/KTNKkqiyqAOQsB+Uuykpm1re8tjjwY8cbUrEPUREitIiICQvSrYwxmFq4ckAuvYY/VqKd5G8AwHleTUQPl/ZxehWanWVkdW3XVsipGoP9+IzkltzZtTfRqdNnNayoq5s7ngBO57Z6OYPFENiqFN2AsHzRwOW+pDW7ryuy9h4XDkGjTUMBuhmZqjqp1UM5JA7hAgPR/0IXBL11ezYph2jqtBTrTQ8+bcfCbzLfWr9oSvWLzED3E8hgdDPUBERAREQEREBKESsQIzamxaOIFqtME8GGTDwYZiR+H6I4dbE772sBvHgBbQAXmwyslFrRG0Sptp8V54rVjdYw+FRBZEVRyUBfhL1pWJFbEREbQSsRD0iIgIiICIiAiIgJ5Zbi09RAwamAv8AWMsnZI+23+eclIgRX+kD7bf55z0uygPrtJOIGLQwu79YmZURAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDzERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQKxEQP/Z",
            stock: 9},
            {id:4,
            title:"Mouse GM-Aorus RGB",
            description:"Mouse gamer", 
            price:4930, 
            pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy61SX2vK_n9RJdx-ZcB0l7oh5Xeak2t9_X2asNc4rs3D396K1rErnuWEiRGtXn6JW1S6LDkw&usqp=CAc",
            stock: 3}]
        ), 2000)
    })
}

const ItemListContainer = props => {

    const [articulos, setArticulos] = useState([]);

    const ejecutarItemList= ()=>{
        myPromise().then(dataArray=>{
            setArticulos(dataArray)
        })
    }

    useEffect(()=>{
        ejecutarItemList()
    },[])



    return (  
        <div style={StyleUnderDiv}>
            <ItemList articulos={articulos}/>
        </div>
    );
}
 
export default ItemListContainer;