import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
 import * as yup from 'yup';


export function Edit(params) {
  const { id } = useParams();
  const [data,setdata]=useState({});

  useEffect(()=>{
      async function edit() {
          const data=await fetch(`https://node-movies-app.herokuapp.com/recipes/${id}`)
          const rsp=await data.json();
          console.log("data",data)
          setdata(rsp);
          console.log("fetched data",rsp)
      }
      edit();
  },[])

  return Object.keys(data).length>0?<Update data={data}/>:"loading";
}



function Update({data}) {
    // const data=data;
     console.log("update the data",data)
    const history=useHistory();
   const formValidation=yup.object({
       name:yup
       .string().required().min(2,"atleast 2 char for name"),
       pic:yup
       .string().required().min(6,"atlest 6 char url")
    })

    async function put(values){
        const d=await fetch(
            `https://node-movies-app.herokuapp.com/recipes/${data._id}`,
            {
                method:"PUT",
                body:JSON.stringify(values),
                headers:{"Content-Type":"application/json"}
            }
            )
        console.log("onsubmit is called",d);
        history.push("/recipes")
    }
    const {handleSubmit,handleChange,handleBlur,errors,values,touched}=useFormik({
        initialValues:{
          name:data.name,
          pic:data.pic
        },
        validationSchema:formValidation,
        onSubmit:(values)=>{
            console.log("updated values inside submit",values);
            put(values);
        }
    })
    return(
        <form onSubmit={handleSubmit}>
            <input 
            id="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
             />
             {errors.name&&touched.name&&errors.name}

             <input 
            id="pic"
            onChange={handleChange}
            value={values.pic}
            onBlur={handleBlur}
             />
             {errors.pic&&touched.pic&&errors.pic}

             <button type="submit">submit</button>

        </form>
    );
}