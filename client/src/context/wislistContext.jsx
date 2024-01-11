import { createContext } from 'react';
import UseLocalStorage from '../hooks/UseLocalStorage';

export const wishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [fawProducts, setFawProducts] = UseLocalStorage("wishlist");
   
    const addToWislist=(product)=>{
        const existProduct=fawProducts.findIndex(x=>x._id === product._id)
        if (existProduct === -1) {
            setFawProducts([...fawProducts,{...product}])
        } else {
          setFawProducts(fawProducts.filter(x=> x._id !== product._id))
        }
    }

    const deleteWishlist=(id)=>{
      const existProduct=fawProducts.findIndex(x=>x._id === id)
      
  }

    return (
      <wishlistContext.Provider value={{addToWislist, fawProducts, deleteWishlist}}>
        {children}
      </wishlistContext.Provider>
    );
  };