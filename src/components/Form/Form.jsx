import { useForm, Controller } from "react-hook-form";
import ProductHandler from "../../handler/ProductHandler";
import "./form.css";
import { Cloudinary } from "@cloudinary/url-gen";

function Form() {
  const { register, handleSubmit: pHandleSubmit, formState: { errors }, watch, control, reset } = useForm();

  /*
    Some useForm() options:
    - register('nombreDelInput', {objetoDeOpciones} ): Registra e identifica cada elemento/input del formulario.

    - handleSubmit: Maneja el envío el formulario; por ejemplo, para que no se cargue solo o para que se pueda comprobar antes de enviarlo.

    - formState (es un objeto): El valor actual de cómo está el formulario. Registra todos los valores del formulario y si alguno falla, crea un objeto Error y ese Error identifica qué input es el que ha fallado.

    - watch: Propiedad/función que al ejecutarse trae el estado actual del formulario. Eso nos sirve para validaciones y para condicionalmente mostrar, por ejemplo, otro input.

    - setValue: Propiedad/función que permite establecer el valor de un input.
    */

  // const [imageUrl, setImageUrl] = useState('');

  // const handleUploadClick = () => {
  //   const widget = window.cloudinary.createUploadWidget({
  //     cloudName: 'lerolore',
  //     uploadPreset: 'lore',
  //   }, (error, result) => {
  //     if (result.event === 'success') {
  //       const url = result.info.secure_url;
  //       console.log(url);
  //       setImageUrl(url);
  //     }
  //   })
  //   widget.open();
  // };

  const onSubmit =
    pHandleSubmit((data) => {
      ProductHandler.submitProduct(data);
      reset(); // Llamada directa a la función
    });

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <h1>añade un nuevo producto</h1>

      <div className="form-input">
        <label htmlFor="productName"></label>
        <input
          type="text"
          placeholder="Nombre del producto"
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
      </div>

      <div className="form-input">
        <label htmlFor="productDescription"></label>
        <input
          type="text"
          placeholder="Descripción del producto"
          id="productDescription"
          {...register("productDescription", {
            required: {
              value: true,
              message: "E-mail is required, please.",
            },
          })}
        />
        {errors.productDescription && (
          <span>{errors.productDescription.message}</span>
        )}
      </div>

      <div className="input-container">
        <div className="form-input">
          <label htmlFor="productPrice"></label>
          <input
            type="number"
            placeholder="Precio"
            id="productPrice"
            {...register("productPrice", {
              required: {
                value: true,
                message: "Price is required, please.",
              },
            })}
          />
          {errors.productPrice && <span>{errors.productPrice.message}</span>}
        </div>

        <div className="form-input">
          <label htmlFor="productStock"></label>
          <input
            type="number"
            placeholder="Stock"
            id="productStock"
            {...register("productStock", {
              required: {
                value: true,
                message: "Stock is required, please.",
              },
              validate: (value) => { return value === 0 ? "Stock must be equal to  0." : true; }
            })}
          />
          {errors.productStock && <span>{errors.productStock.message}</span>}
        </div>
      </div>

      <div className="form-categories">
      <Controller
        name="productCategory"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div className="form-cat1">
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
        name="productSubcategory"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div className="form-cat2">
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
      </div>

      {/* <div className="form-input">
        <label htmlFor="productImage"></label>
        <input
          value={imageUrl}
          type="file"
          placeholder="Imágenes"
          id="productImage"
          {...register("productImage", {
            required: {
              value: true,
              message: "Image is required, please.",
            },
            validate: (value) => { return value === 0 ? "Stock must be equal to  0." : true; }
          })}
        />
        {errors.productImage && <span>{errors.productImage.message}</span>}
        <button onClick={handleUploadClick()}>Seleccionar imagen</button>
      </div>

      import {Cloudinary} from "@cloudinary/url-gen"; */}

{/* const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dchd7k6oh'}});
}; */}



      <button className="form-button" type="submit">añadir producto</button>

    </form>
  );
}

export default Form;