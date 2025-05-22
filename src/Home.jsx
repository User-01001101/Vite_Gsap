import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionOne from "./conponents/SectionOne";

const Homepage = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // 初期状態を設定
      gsap.set("#page1-page", { opacity: 0 });
      gsap.set("#header", { opacity: 0 });
      gsap.set("#header-nav", { opacity: 0 });
      
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

      .to("#header-nav", {
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
      
      <div>
        <nav className="h-20 flex items-center justify-between px-12 py-10 border-b border-b-[rgba(1,1,1,.1)]">
          <div>
            <p>Bingo</p>
          </div>
          <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>Strategy</li>
            <li>About</li>
            <li>Clients</li>
          </ul>
          <div className="flex items-center gap-10">Signup</div>
        </nav>
        <SectionOne />
      </div>
      
      {/* Welcomeページ */}
      <section id="welcome-page" className="h-screen w-full absolute top-0 left-0 flex bg-gray-950 justify-center items-center z-5">
        <h1 id="welcome" className="text-9xl font-bold text-gray-100 font-shareTech">
          Welcome
        </h1>
      </section>

    </div>
  );
};

export default Homepage;