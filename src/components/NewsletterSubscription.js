import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useMailchimp, STATUSES } from "./useMailchimp";
const MAILCHIMP_URL =
  "https://webdeb.us1.list-manage.com/subscribe/post?u=ed2b84a97f5136ed93f7677ea&id=8fe745201e";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL} />;

export const NewsletterSubscription = ({ className }) => {
  const { subscribe, status, message } = useMailchimp(MAILCHIMP_URL);
  console.log(status, message);
  return (
    <div className={"flex flex-col p-8 rounded-xl bg-white " + className}>
      <h2 className="font-medium text-4xl mb-4">Subscribe to get updates!</h2>
      <p>
        This is very interesting technology with a high DX factor. <br />I am
        looking to secure and commercialize it. So feel free to subscribe
      </p>
      <Formik onSubmit={subscribe} initialValues={{ email: "" }}>
        <Form className="mt-2 w-full flex px-8">
          <Field
            id="EMAIL"
            name="EMAIL"
            className="p-2 bg-gray-200 mr-2 rounded-xl w-[400px] flex-1"
            placeholder="jane@acme.com"
            type="email"
          />
          <button
            className="p-2 px-4 rounded-xl bg-purple-400 hover:bg-purple-600 text-white w-[200px]"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
      {status === STATUSES.SUCCESS && (
        <p className="text-green-600 mt-2">Thank you for subscription 🎉</p>
      )}
      {status === STATUSES.ERROR && (
        <p className="text-red-400 mt-2">Somehing went wrong! 🤬</p>
      )}
    </div>
  );
};
