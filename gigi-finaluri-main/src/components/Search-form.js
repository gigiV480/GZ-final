import { useRef } from "react";
import { useForm } from "react-hook-form";

const SearchForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const countryRef = useRef(null);
  const handleFormSubmit = (data) => {
    // Ensure that 'data' is not undefined before accessing 'countryName'
    console.log(data, "data");
    if (data && data.countryName) {
      onSubmit(data.countryName);
    }
  };
  const { ref, ...rest } = register("countryName");

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        {...rest}
        name="countryName"
        ref={(e) => {
          ref(e);
          countryRef.current = e; // you can still assign to ref
        }}
      />

      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
