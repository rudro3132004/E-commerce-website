import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataObj from '../context/DataObject'
import PopupProduct from '../components/PopupProduct'
import ProductImageBox from '../components/ProductImageBox'
import ProductConfig from '../components/ProductConfig'
import ProductDetails from '../components/ProductDetails'

const MainProduct = () => {

    const {id} = useParams()
    const findData = DataObj.filter((elm)=>{
        return elm.id == id;
    });
    const product = findData[0]
    const findProducts = DataObj.filter((elm)=>{
        return elm.brand == findData[0].brand;
    });
    const [swithImage, setSwithImage] = useState(product.image)
    const [ popProduct, setPopProduct ] = useState(false)
  return (
  <div className="w-full my-10 mx-auto md:w-[90%] xl:w-[80%]">

        <div className='w-full  flex flex-col gap-5 items-center justify-center md:flex-row mb-5'>

            {/* Poduct image box */}
            <div className="w-full lg:w-1/3">
            <ProductImageBox popProduct={popProduct} setPopProduct={setPopProduct} swithImage={swithImage} setSwithImage={setSwithImage} imgarry={product.galarry} />
            </div>


            {/* Product Details */}
            <div className="w-full h-full p-5 bg-white lg:w-2/3 rounded">
                <ProductConfig findData={findData}/>
            </div>

            {/* Popup img */}
            <PopupProduct popProduct={popProduct} setPopProduct={setPopProduct} swithImage={swithImage} setSwithImage={setSwithImage} imgarry={product.galarry} />

        </div>

        <div className="w-full flex flex-col gap-3 justify-center items-start bg-white p-2 md:flex-row">
            <div className="w-full md:w-2/3 h-fit rounded bg-indigo-100 p-2">
                <ProductDetails/>
            </div>
            <div className="w-full md:w-1/3 h-full p-5 rounded bg-purple-100">
                <div className="w-full h-fit max-h-[600px] overflow-auto relative">
                  <h2 className='text-xl font-bold mb-2'>Related Product</h2>
                    {
                        findProducts ? 
                         findProducts.map((elm, idx)=>(
                            <div key={idx} className="flex p-1 bg-white my-2 rounded">
                                 <img className='w-24 h-fit md:w-28' src={elm.image} alt="" />
                                 <div className="m-2">
                                    <p className='text-lg font-semibold'> {elm.name} </p>
                                    <p>$ {elm.price} </p>
                                    <Link to={`/brand-/${elm.brand}`} className='text-sm px-5 py-1 bg-sky-500 rounded text-white font-semibold block mt-2'> View Product </Link>
                                 </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </div>
  </div>
  )
}

export default MainProduct



const imgarry = [ 
    "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-16-Pro-Max---16-Pro-Desert-Titanium-1929.jpg",
    "https://rossellimac.es/cdn/shop/files/iPhone_16_Pro_Max_White_Titanium_PDP_Image_Position_1__ESES.jpg?v=1727253553",
    "https://img.leboncoin.fr/api/v1/lbcpb1/images/93/58/38/9358384030cd9b34dbdf7418b235c952497ddd17.jpg?rule=ad-large",
    "https://cdn.media.amplience.net/i/xcite/659316-01",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpjo3kGFeN1T1PSemkFc1g0z_pCSKx1Y_iiRBXtJvE3ps5hDElOBGV4sXXT6Da0B8FtA&usqp=CAU",
]