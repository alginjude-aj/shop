import api from './api';

export const fetchCustomers = (searchData) =>{
        return(
            api.get('customers?q='+ searchData.q).then((response) =>{
                if(response){
                    return response.data
                }
            })
        )
}