import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/CommonComponents/Loader'

const AdminPage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getProducts = async () => {
        const res = await axios.get("http://localhost:8000/api/product/")
        setProducts(res.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [])


    const nav=useNavigate()

    return (
        <div className=' py-16'>
            <h2 className=' text-center py-10 text-2xl  font-bold'>Admin Page</h2>

            <div className=' pb-10'>
                <button className='bg-light-green py-2 px-5  text-main-color' onClick={()=>nav('/add')} > Add new product</button>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? <Loader/>
                                :
                                products && products.map(product => (
                                    <tr>
                                        <th className=' text-start'>
                                            <img src={product.image} alt="" />
                                        </th>
                                        <td className=' text-start'>{product.title}</td>
                                        <td className=' text-start'>{product.price}</td>
                                        <td className=' text-start'>
                                            <button className=' btn'>delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminPage