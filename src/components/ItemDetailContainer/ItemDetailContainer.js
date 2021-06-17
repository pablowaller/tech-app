import React, {useState, useEffect} from 'react'
import ItemDetail from "./ItemDetail/ItemDetail"


// const StyleUnderDiv = {
//     marginTop: "1em",
// };

const myPromiseDetalles = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
            {
                id: 1, 
                title:'Xiaomi Airdots 2', 
                tipo: "In Ear (Inalámbricos) ",
                description: "Los auriculares bluetooth Xiaomi hacen que la música sea aún más agradable. A prueba de sudor y salpicaduras te permite disfrutar de actividades al aire libre. Este auricular cuenta con un diseño ultra elegante, mano de obra exquisita, ligero y portátil, fácil de llevar. La estructura dinámica de unidades de doble bobina te ofrecerá un sonido cristalino. • Compatibilidad con iOS y Android • Soporte para códec SBC • Resistencia al agua IPX5 • Cancelación de ruido",
                price: 2599, 
                pictureURL: "https://http2.mlstatic.com/D_NQ_NP_795014-MLA44069666558_112020-O.webp",
                stock: 7,
                tiempoReproduccion: "aprox. 3.5 h (depende de las llamadas y el volumen)",
                capacidadBateriaAuriculares: "40mAh",
                bateria: "li-ion",
                capacidadEstuche: "3.7V 300mAh",
                tiempoCarga: "aprox. 2 horas",
                compatibilidad: "Pc, teléfono móvil",
                conectividad: "Wireless",
            }]
        ), 2000)
    })
}

const ItemDetailContainer = props => {

    const [detalleArt, setDetalleArt] = useState([]);

    const ejecutarItemList= ()=>{
        myPromiseDetalles().then(dataArray=>{
            setDetalleArt(dataArray)
        })
    }

    useEffect(()=>{
        ejecutarItemList()
    },[])



    return (  
        <>
            {
            detalleArt.map((detalle) => <ItemDetail detalleArt={detalle}/> )
            }
            
            {/* <ItemDetail detalleArt={detalleArt}/> */}
        </>
    );
}
 
export default ItemDetailContainer;