/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";

import styles from "./PostBody.module.css";
import { SanityImage } from "./SanityImage";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      return <SanityImage {...value} />;
    },
    span: ({ value }: any) => {
      return <span className={"text-5xl"}>{value}</span>;
    },
  },
};

export default function PostBody({ content }: any) {
  return (
    <div className={`mx-72  ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
}
