import { useFetcher } from "react-router";
import { useEffect, useRef } from "react";
import styles from './ContactForm.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import LoadingIcon from "../UI/LoadingIcon";

export default function ContactForm() {
  const fetcher = useFetcher();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data?.success) {
      formRef.current?.reset();
      recaptchaRef.current?.reset();
    }
  }, [fetcher.state, fetcher.data]);

  async function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    const captchaValue = recaptchaRef.current?.getValue();
    if (!captchaValue) {
      event.preventDefault();
      return window.alert("Please verify the reCAPTCHA!");
    }
    /*
    const response = await fetch('https://' + window.location.host + '/captcha', {
      method: 'POST',
      body: JSON.stringify({ captchaValue }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
      return { message: "🏆 We couldn't verify you're human. Please try again later!" };
    }
    const responseData = await response.json();
    if (!responseData.success) {
      return { message: "🏆 We couldn't verify you're human. Please try again later!" };
    }
    */
  }

  return (
    <fetcher.Form method="POST" onSubmit={(event) => handleFormSubmission(event)} ref={formRef} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required minLength={5} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" required />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Leave us a message"
        minLength={10}
        required
      />
      {fetcher.data?.message ? <p>{fetcher.data.message}</p>: undefined}
      <button type="submit" disabled={fetcher.state === "submitting"}>{fetcher.state === "submitting" ? <LoadingIcon text="Sending..." /> : "Send"}</button>
      <div><ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} /></div>
    </fetcher.Form>
  );
}