// Styles
import styles from "./styles.module.scss";

// Hooks
import { useRef, useState, useEffect } from "react";
const NewOffertForm = () => {
  const [offert, setOffert] = useState({
    title: "",
    uri: "",
    category: "Nintendo",
    subcategory: "",
  });
  const titleRef = useRef();
  const uriRef = useRef();
  const categoryRef = useRef();
  const subcategoryRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/offerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(offert),
    });
    console.log(offert);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.title}>
        Titulo
        <input
          type="text"
          name="title"
          ref={titleRef}
          onChange={() =>
            setOffert({ ...offert, title: titleRef.current.value })
          }
        />
      </label>
      <label className={styles.uri}>
        URL
        <textarea
          cols="30"
          rows="5"
          type="text"
          name="uri"
          ref={uriRef}
          onChange={() => setOffert({ ...offert, uri: uriRef.current.value })}
        />
      </label>
      <div className={styles.categorys}>
        <label>
          Categoría
          <select
            name="category"
            ref={categoryRef}
            onChange={() =>
              setOffert({ ...offert, category: categoryRef.current.value })
            }
          >
            <option value="Nintendo">Nintendo</option>
            <option value="Playstation">Playstation</option>
            <option value="Xbox">Xbox</option>
            <option value="PC">PC</option>
          </select>
        </label>
        <label>
          Subcategoría
          <input
            type="text"
            name="subcategory"
            ref={subcategoryRef}
            onChange={() =>
              setOffert({
                ...offert,
                subcategory: subcategoryRef.current.value,
              })
            }
          />
        </label>
      </div>
      <button type="submit" className={styles.button}>
        Añadir
      </button>
    </form>
  );
};
export default NewOffertForm;
