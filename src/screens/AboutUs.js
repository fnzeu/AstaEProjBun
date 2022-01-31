import React from "react";

import styles from "./AboutUs.module.css";

const TITLE = "Started as a passion, continued as a dream, came out alive.";
const TEXT =
  "Cars are arguably one of the World’s most-loved material things. The question is why? And However, the answer is a perhaps so long and diverse that you’d struggle to fit it upon the longest piece of paper in the World. After all, individually, there are many reasons why people love cars so much. For instance, some love the bucket seat thrills of hurtling around a race track at 150mph, some see them as individual works of art and love them accordingly and others simply love them for the challenge that repairing and modifying them can be, and with many tire brands out in the market, there’s sure to be at least one set that fits your car. However, for us it’s a mixture of the freedom they bring, the awesome games that they’ve inspired and the objects of auto-art that they are.That is why we took the passion of motorsport and made it a dream about creating a platform where everyone can find the vehicle they are looking for.We have a variety of different brands and models from which you can chose. Our team is well trained and happy to assist you at any moment in time. ";
const ENJOYMENT =
  "Something that’s often forgotten in the conversation around cars is that many people drive not only for necessity, but for enjoyment too.Driving’s a skill, broadly speaking, and just like any other skill, some people enjoy practising and honing that skill – safely and responsibly of course!So whether it’s taking your convertible out on a sunny evening for a drive round the countryside, or taking the long way home from work, there’s driving pleasure to be had whenever and wherever the mood takes you.";
const FREEDOM =
  "There’s some overlap here, but the idea of ‘freedom’ covers many of the smaller reasons we love cars.Everyone likes to be independent, and having a car gives you the opportunity to go where you want, when you want.It’s more than just convenience, though. It’s a perk of the modern world that we have access to means of transportation that turns cross-country travel into a question of hours, rather than days.The advantage of a car over, say, a train is that your journey can be door-to-door, in your own time and on your own terms. Totally freeing.";

function AboutUs() {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcase_overlay}>
        <div className={styles.container}>
          <h1 className={styles.title}>{TITLE}</h1>
          <p className={styles.qoute}>{TEXT}</p>
          <h2 className={styles.title}>Freedom</h2>
          <p className={styles.qoute}>{FREEDOM}</p>
          <h2 className={styles.title}>Enjoyment Of Driving</h2>
          <p className={styles.qoute}>{ENJOYMENT}</p>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.qoute}>
            Please feel free to contact us at any given time.We will try to
            respod as soon as possible. Email: audromoFerrari@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
