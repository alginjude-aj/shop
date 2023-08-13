import api from './api';

export const fetchProducts = (searchProduct) =>{
        return(
            api.get('products?q='+ searchProduct.q).then((response)=>{
                if(response){
                    return response.data;
                }
            }).catch((error) =>{
                if (error.response && error.response.status === 404) {
                    throw new Error("No data found");
                  } else {
                    throw new Error("An error occurred");
                  }
            })
        )
}