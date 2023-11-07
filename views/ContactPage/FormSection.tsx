import { useState } from "react";
// import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { media } from "utils/media";

interface EmailPayload {
  name: string;
  email: string;
  description: string;
}

export default function FormSection() {
  // const [state, handleSubmit] = useForm("xaygvaow");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="email">Email Address</label>
  //     <input id="email" type="email" name="email" />
  //     <ValidationError prefix="Email" field="email" errors={state.errors} />
  //     <textarea id="message" name="message" />
  //     <ValidationError prefix="Message" field="message" errors={state.errors} />
  //     <button type="submit" disabled={state.submitting}>
  //       Submit
  //     </button>
  //   </form>
  // );

  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  // const [state, handleSubmit] = useForm("xaygvaow");
  // const { register, handleSubmit, formState } = useForm();
  // const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Email from contact form",
          ...payload,
        }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  // const isSent = isSubmitSuccessful && isSubmitted;
  // const isDisabled = isSubmitting || isSent;
  // const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  // if (hasSuccessfullySentMail) {
  //   return <MailSentState />;
  // }
  // if (state.succeeded) {
  //   return (
  //     <div className="flex w-screen h-96 justify-center align-middle">
  //       <Title>Form Submitted ✓</Title>
  //     </div>
  //   );
  // }
  return (
    <Wrapper>
      {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
      <Form
        action={
          "https://formsubmit.co/" + process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL
        }
        method="POST"
        encType="multipart/form-data"
      >
        <InputGroup>
          <InputStack>
            {/* {errors.name && <ErrorMessage>Name is required</ErrorMessage>} */}
            <Input
              placeholder="Your Name"
              id="name"
              name="name"
              // disabled={isDisabled}
              // {...register("name", { required: true })}
            />
          </InputStack>
          <InputStack>
            {/* {errors.email && <ErrorMessage>Email is required</ErrorMessage>} */}
            <Input
              placeholder="Your Email"
              id="email"
              name="email"
              // disabled={isDisabled}
              // {...register("email", { required: true })}
            />
          </InputStack>
          {/* phone number */}
          <InputStack>
            <Input
              placeholder="Your Phone Number"
              id="phone"
              name="phone"
              // disabled={isDisabled}
              // {...register("phone", { required: true })}
            />
          </InputStack>
          {/* {errors.phone && <ErrorMessage>Phone is required</ErrorMessage>} */}
        </InputGroup>
        <InputStack>
          <Input
            placeholder="Subject"
            id="subject"
            name="subject"
            // disabled={isDisabled}
            // {...register("subject", { required: false })}
          />
        </InputStack>
        <InputStack>
          {/* {errors.description && (
            <ErrorMessage>Description is required</ErrorMessage>
          )} */}
          <Textarea
            as="textarea"
            placeholder="How Can We Help you..."
            id="description"
            name="description"
            // disabled={isDisabled}
            // {...register("description", { required: true })}
          />
        </InputStack>
        <InputStack>
          {/* {errors.description && (
            <ErrorMessage>Description is required</ErrorMessage>
          )} */}

          <FileButton htmlFor="upload">
            {/* <FontAwesomeIcon
              className=" hover:text-[#f2bd28] mx-auto"
              icon={faPaperclip}
            /> */}
            <p className="text-2xl">Upload a file</p>
          </FileButton>
          <File
            id="upload"
            type="file"
            name="upload"
            // {...register("file", { required: false })}
          />
        </InputStack>
        <input type="hidden" name="_template" value="basic" />
        {/* <input type="hidden" name="_next" value="https://coremaestro.co.ke/contact" /> */}
        <Button
          as="button"
          type="submit"

          // disabled={isSubmitDisabled}
        >
          Send Message
        </Button>
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  margin: 0 10rem;
  text-align: center;
  ${media("<tablet")} {
    margin: 0 2rem;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.3rem;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const FileButton = styled.label`
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
  position: relative;
  margin-top: 1rem;
  &:hover {
    color: #f2bd28;
  }
`;
const File = styled.input`
  display: none;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:first-child) {
    margin-left: 0.5rem;
  }

  & > * {
    flex: 1;
  }

  ${media("<=tablet")} {
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:first-child) {
  }
`;

const ErrorMessage = styled.p`
  color: rgb(207, 34, 46);
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
