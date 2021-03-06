import React from "react";
import styles from "../modules/ThreeLetter.module.css";

export default function ThreeLetter() {
  const EmojisList = [
    {
      name: "r07",
      link: "https://www.namebase.io/domains/r07",
    },
    {
      name: "qvu",
      link: "https://www.namebase.io/domains/qvu",
    },
    {
      name: "qw5",
      link: "https://www.namebase.io/domains/qw5",
    },
    {
      name: "qu7",
      link: "https://www.namebase.io/domains/qu7",
    },
  ];

  return (
    <div className={styles.container}>
      {EmojisList.map((e, i) => {
        return (
          <a className={styles.item} key={i} href={e.link} target="_blank">
            {e.name}
          </a>
        );
      })}
    </div>
  );
}
