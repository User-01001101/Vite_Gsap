import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Homepage = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // 初期状態を設定
      gsap.set("#page1-page", { opacity: 0 });
      gsap.set("#header", { opacity: 0 });
      
      // イントロスライダーアニメーション
      tl.from("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      })
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
      })
      
      // Welcomeページアニメーション
      .from("#welcome", {
        opacity: 0,
        duration: 0.5,
      })
      .to("#welcome", {
        opacity: 0,
        duration: 0.8,
      })
      .to("#welcome-page", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          console.log("Welcome page animation completed");
        }
      })
      
      // ヘッダーロゴを表示
      .to("#header", {
        opacity: 1,
        duration: 0.5,
      })
      
      // ページ1表示
      .to("#page1-page", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          console.log("Page1 animation completed");
        }
      });
      
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      {/* イントロスライダー */}
      <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-shareTech z-10 w-full flex flex-col gap-10 tracking-tight">
        <h1 className="text-9xl" id="title-1">
          Un gruppo
        </h1>
        <h1 className="text-9xl" id="title-2">
          di
        </h1>
        <h1 className="text-9xl" id="title-3">
          idioti locali
        </h1>
      </div>
      
      {/* 共通ヘッダー要素（固定） */}
      <header id="header" className="fixed top-0 right-0 p-4 z-30">
        <div id="logo" className="w-16 h-16 bg-gray-800 text-white flex items-center justify-center rounded-full">
          LOGO
        </div>
      </header>
      
      {/* Welcomeページ */}
      <section id="welcome-page" className="h-screen w-full absolute top-0 left-0 flex bg-gray-950 justify-center items-center z-5">
        <h1 id="welcome" className="text-9xl font-bold text-gray-100 font-shareTech">
          Welcome
        </h1>
      </section>
      
      {/* ページ1 - 最初は非表示だがCSSでは指定せず、GSAPで制御 */}
      <section id="page1-page" className="h-screen w-full absolute top-0 left-0 flex bg-white justify-center items-center z-1">
        <h1 id="page1" className="text-9xl font-bold text-gray-950 font-shareTech">
          This is Page 1
        </h1>
      </section>
    </div>
  );
};

export default Homepage;