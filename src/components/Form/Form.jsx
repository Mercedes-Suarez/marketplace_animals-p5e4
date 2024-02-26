import React, { useState, useEffect } from 'react';
// import { useForm, Controller } from "react-hook-form";
import './form.css'
import axios from 'axios';
import HandleSubmitProduct from "../../handler/ProductHandler";

function Form() {
   const { register, handleSubmit: pHandleSubmit, formState: { errors }, watch, control, reset } = useForm();

   const onSubmit = pHandleSubmit((data) => {
      HandleSubmitProduct(data);
    });

   return (
         <form onSubmit={onSubmit}>
           <label htmlFor="productName">Product name:</label>
           <input
             type="text"
             id="productName"
             {...register("productName", {
               required: {
                 value: true,
                 message: "Name is required, please.",
               },
               minLength: {
                 value: 2,
                 message: "Name must be at least 2 characters.",
               },
             })}
           />
           {errors.productName && <span>{errors.productName.message}</span>}
           <label htmlFor="productDescriptcion">Description:</label>
           <input
             type="text"
             id="productDescriptcion"
             {...register("productDescriptcion", {
               required: {
                 value: true,
                 message: "E-mail is required, please.",
               },
             })}
           />
           {errors.productDescriptcion && (
             <span>{errors.productDescriptcion.message}</span>
           )}
           <label htmlFor="productPrice">Price:</label>
           <input
             type="number"
             id="productPrice"
             {...register("productPrice", {
               required: {
                 value: true,
                 message: "Price is required, please.",
               },
             })}
           />
           {errors.productPrice && <span>{errors.productPrice.message}</span>}
           <label htmlFor="productStock">Stock:</label>
           <input
             type="number"
             id="productStock"
             {...register("productStock", {
               required: {
                 value: true,
                 message: "Stock is required, please.",
               },
               validate: (value) => { return value ===  0 ? "Stock must be equal to  0." : true; }
             })}
           />
           {errors.productStock && <span>{errors.productStock.message}</span>}
           <Controller
             name="cat1"
             control={control}
             defaultValue=""
             render={({ field }) => (
               <div>
                 cat1:
                 <label>
                   <input
                     type="radio"
                     value="gato"
                     checked={field.value === "gato"}
                     onChange={(e) => field.onChange(e.target.value)}
                   />
                   Gato
                 </label>
                 
                 <label>
                   <input
                     type="radio"
                     value="perro"
                     checked={field.value === "perro"}
                     onChange={(e) => field.onChange(e.target.value)}
                   />
                   Perro
                 </label>
               </div>
             )}
           />
           <Controller
             name="cat2"
             control={control}
             defaultValue=""
             render={({ field }) => (
               <div>
                 cat2:
                 <label>
                   <input
                     type="radio"
                     value="juguetes"
                     checked={field.value === "juguetes"}
                     onChange={(e) => field.onChange(e.target.value)}
                   />
                   Juguetes
                 </label>
                 <label>
                   <input
                     type="radio"
                     value="chuches"
                     checked={field.value === "chuches"}
                     onChange={(e) => field.onChange(e.target.value)}
                   />
                   Chuches
                 </label>
                 <label>
                   <input
                     type="radio"
                     value="camas"
                     checked={field.value === "camas"}
                     onChange={(e) => field.onChange(e.target.value)}
                   />
                   Camas
                 </label>
                 <label>
                   <input
                     type="radio"
                     value="correas"
                     checked={field.value === "correas"}
                     onChange={(e) => field.onChange(e.target.value)}
                   />
                   Correas
                 </label>
               </div>
             )}
           />
           {/* acá falta el input foto con Cloudinary */}
           <button type="submit">añadir producto</button>
           <pre>{JSON.stringify(watch(), null, 2)}</pre>
         </form>
       );
     }
     export default Form;