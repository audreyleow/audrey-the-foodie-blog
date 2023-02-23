import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

export default function EmailUpdate() {
  const router = useRouter();
  const contentType = "application/json";
  // States for contact form fields
  const [email, setEmail] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setEmail(e.target.value);
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (email: string) => {
    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify({
          email,
        }),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error((await res.json()).message);
      }

      setMessage("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    }
  }; /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err: { email?: string } = {};
    if (!email) err.email = "Email is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      postData(email);
    } else {
      setErrors({ errs });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="email-form-container">
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="text"
          name="email"
          value={email}
          className="email-form"
          placeholder="hello@audreythefoodie.com"
          onChange={handleChange}
          required
        />
        <button type="submit" className="sign-up-button">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </div>
  );
}
