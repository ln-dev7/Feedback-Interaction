import "./style.scss";
import gsap from "gsap";

const buttons = document.querySelectorAll(".button");
const indicator = document.querySelector(".indicator");
const bg = document.querySelector(".bg");
const notes = document.querySelectorAll(".note");
const texts = document.querySelectorAll(".text");

const animations = [
  {
    bgColor: "#fc7359",
    indicatorColor: "#790b02",
    pathColor: "#fc7359",
    smileColor: "#790b02",
    titleColor: "#790b02",
    colorBg: "#fc5b3e",
    eyeWidth: 56,
    eyeHeight: 56,
    eyeBorderRadius: "100%",
    eyeBg: "#790b02",
    textColor: "#790b02",
  },
  {
    bgColor: "#dfa342",
    indicatorColor: "#482103",
    pathColor: "#dfa342",
    smileColor: "#482103",
    titleColor: "#482103",
    colorBg: "#b07615",
    eyeWidth: 100,
    eyeHeight: 20,
    eyeBorderRadius: "36px",
    eyeBg: "#482103",
    textColor: "#482103",
  },
  {
    bgColor: "#9fbe59",
    indicatorColor: "#0b2b03",
    pathColor: "#9fbe59",
    smileColor: "#0b2b03",
    titleColor: "#0b2b03",
    colorBg: "#698b1b",
    eyeWidth: 120,
    eyeHeight: 120,
    eyeBorderRadius: "100%",
    eyeBg: "#0b2b03",
    textColor: "#0b2b03",
  },
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    gsap.to(".note-container", { x: `${index * -100}%` });
    gsap.to(notes, { opacity: 0 });
    gsap.to(notes[index], { opacity: 1 });

    const anim = animations[index];

    gsap.to(bg, { backgroundColor: anim.bgColor });
    gsap.to(indicator, {
      rotate: index === 2 ? 0 : 180,
      left: button.offsetLeft + 16,
      backgroundColor: anim.indicatorColor,
    });
    gsap.to(".indicator svg path", { fill: anim.pathColor });
    gsap.to(".smile", { rotate: index === 2 ? 0 : 180 });
    gsap.to(".smile svg path", { fill: anim.smileColor });
    gsap.to(".title", { color: anim.titleColor });
    gsap.to(".color", { backgroundColor: anim.colorBg });
    gsap.to(".eye", {
      width: anim.eyeWidth,
      height: anim.eyeHeight,
      borderRadius: anim.eyeBorderRadius,
      backgroundColor: anim.eyeBg,
    });
    gsap.to(texts, { color: anim.textColor });
  });
});
