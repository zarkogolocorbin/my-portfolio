import styles from "../../styles/contactMe.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Unesi ime").trim(),
    message: yup.string().required("Unesi ime").trim(),
    email: yup
      .string()
      .required("Unesi imej")
      .email()
      .required("Unesi imejl")
      .trim(),
  })
  .required();

export default function ContactMeComponent() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  return (
    <section className={styles.contact}>
      <h2 className={styles["sub-title"]}>Contact Me</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit(async (data) => {
          fetch("https://formsubmit.co/ajax/zarkogolocorbin@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: `${data.email}`,
              name: `${data.name}`,
              message: `${data.message}`,
            }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
          reset();
        })}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <small className={styles.message}>{errors.name.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          {errors.email && (
            <small className={styles.message}>{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            rows={4}
            id="message"
            {...register("message")}
          />
          {errors.message && (
            <small className={styles.message}>{errors.message.message}</small>
          )}
        </div>
        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </section>
  );
}
