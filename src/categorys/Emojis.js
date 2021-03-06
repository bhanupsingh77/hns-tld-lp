import React from "react";
import styles from "../modules/Emojis.module.css";

export default function Emojis() {
  const EmojisList = [
    { emoji: "👬🏼", link: "https://www.namebase.io/domains/xn--nn8h5g" },
    {
      emoji: "👨🏼🎤",
      link: "https://www.namebase.io/domains/xn--4k8hpf0l",
    },
    {
      emoji: "🤐🤐🤐🤐🤐",
      link: "https://www.namebase.io/domains/xn--sp9haaaa",
    },
    {
      emoji: "😵😵😵😵😵",
      link: "https://www.namebase.io/domains/xn--w38haaaa",
    },
    {
      emoji: "😲😲😲",
      link: "https://www.namebase.io/domains/xn--t38haa",
    },
    {
      emoji: "₿🎈",
      link: "https://www.namebase.io/domains/xn--4zg2694p",
    },
    {
      emoji: "😊🎬",
      link: "https://www.namebase.io/domains/xn--dl8h11b",
    },
    {
      emoji: "🦍🪓",
      link: "https://www.namebase.io/domains/xn--dt9hmq",
    },
    {
      emoji: "大山雀",
      link: "https://www.namebase.io/domains/xn--pss89eqv8e",
    },
    {
      emoji: "🍟🍟",
      link: "https://www.namebase.io/domains/xn--5i8ha",
    },
    {
      emoji: "🍈🧀",
      link: "https://www.namebase.io/domains/xn--ii8hq7h",
    },
    {
      emoji: "🙁😕",
      link: "https://www.namebase.io/domains/xn--z28hxc",
    },
  ];

  return (
    <div className={styles.container}>
      {EmojisList.map((e, i) => {
        return (
          <a className={styles.item} key={i} href={e.link} target="_blank">
            {e.emoji}
          </a>
        );
      })}
    </div>
  );
}
