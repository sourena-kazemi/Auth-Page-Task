"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { validateForm } from "@/lib/actions";
import { PhoneNumberFormState } from "@/types/types";
import Link from "next/link";
import styles from "./form.module.scss";

const initialActionState: PhoneNumberFormState = {
  success: false,
  user: null,
  error: null,
};
export default function Form() {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    validateForm,
    initialActionState
  );

  useEffect(() => {
    if (state.success && state.user) {
      localStorage.setItem("userData", JSON.stringify(state.user));
      router.push("/dashboard");
    }
  }, [state]);

  return (
    <form action={formAction} className={styles.form}>
      <h2 className={styles.title}>Enter Your Phone Number to Log In</h2>
      {/* client side validation for phone number to reduce server load*/}
      {/* server side validation is also implemented in the formAction function */}
      <input
        type="tel"
        name="phone-number"
        className={styles.input}
        placeholder="Your phone number"
        pattern="09[0-9]{9}"
        maxLength={11}
        required
      />
      {state.error && <p className={styles.errorText}>{state.error}</p>}
      {state.success && (
        <p className={styles.successText}>
          All set! Taking you to your dashboard.
        </p>
      )}
      <input
        type="submit"
        className={styles.button}
        value={pending ? "Submitting ..." : "Log In"}
        disabled={pending}
      />
      <Link href="/" className={styles.homeLink}>
        Back to Home
      </Link>
    </form>
  );
}
