// import { Add } from '@mui/icons-material';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
 import * as yup from 'yup';


export function AddRecipe(params) {
    const history=useHistory();
   const formValidation=yup.object({
       name:yup
       .string().required().min(2,"atleast 2 char for name"),
       pic:yup
       .string().required().min(6,"atlest 6 char url")
    })

    async function Add(values){
        const data=await fetch(
            "https://node-movies-app.herokuapp.com/recipes",
            {
                method:"POST",
                body:JSON.stringify(values),
                headers:{"Content-Type":"application/json"}
            }
            )
        console.log("onsubmit is called",data);
        history.push("/recipes")
    }
    const {handleSubmit,handleChange,handleBlur,errors,values,touched}=useFormik({
        initialValues:{name:" ",pic:" "},
        validationSchema:formValidation,
        onSubmit:(values)=>Add(values)
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
