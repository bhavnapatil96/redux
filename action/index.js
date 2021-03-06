import axios from 'axios'
export const AllData=()=>{
    return function (dispatch) {
        return axios.get('http://localhost:5000/fetchdata').then((res)=>{
            console.log(res);
            dispatch({type:"Fetch_User", res:res.data});
        })
    }
}

export const stateData=()=>{
    return function (dispatch) {
        return axios.get('http://localhost:5000/statefetch').then((res)=>{
                console.log("In action",res);
                dispatch({type:"State_fetch",res:res.data})
            }
        )
    }
}

export const cityData=(state)=>{
    return function (dispatch) {
        return axios.post('http://localhost:5000/cityfetch/'+state).then((res)=>{
                console.log("In action",res);
                dispatch({type:"City_fetch",res:res.data})
            }
        )
    }
}

export const deldata=(deleteId)=>{
    return function (dispatch) {
        return   axios.post('http://localhost:5000/del',{
        id:deleteId
        }).then((sucess)=>{
            console.log("In delete",sucess);
            dispatch({type:"Delete_Data",res:sucess.data})
    })
    }
}

export const insertData=(name,age,contact,password,gender,email,hobyArr,state,city,photo1)=>{
    return function (dispatch) {
        return axios.post( 'http://localhost:5000/insert',{
            sname:name,
            age:age,
            contact:contact,
            password:password,
            gender:gender,
            email:email,
            hobbies:hobyArr,
            state:state,
            city:city,
            photo:photo1,
            flag:1
        }).then((res)=>{
            console.log(res)
            dispatch({type:"Insert_Data",res:res.data})
        })
    }
}
export const upadteData=(id,name,age,contact,password,gender,email,hobyArr,state,city,photo1)=> {
  return function (dispatch) {
      return axios.post('http://localhost:5000/upd',{
        id:id,
        age:age,
        password:password,
        gender:gender,
        sname:sname,
        state:state,
        city:city,
        email:email,
        photo:photo1,
        contact:contact,
        hobbies:hobbies
    }).then((sucess)=>{
        console.log('after back from update=',sucess.data)
          dispatch({type:"Update_data",res:sucess.data})
  })
 }
}

export const edtInfo=(e)=>{
return function (dispatch) {
    axios.post('http://localhost:5000/fetchid', {id:e}).then((res)=>{
        dispatch({type:"Edit_Info",res:res.data})
    })

}


