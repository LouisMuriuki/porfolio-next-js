import React from "react";
import Head from "next/head";
import Image from "next/image";
import chefTuberImg from "../public/assests/common/chefTuber.png";
const chefTuber = () => {
  return (
    <>
      <Head>
        <title>Louis Muriuki MERN Full Stack Developer</title>
        <meta name="louis muriuki" content="louis muriuki's portfolio" />
        <link rel="icon" href="/Louis.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Kalam:wght@300&family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        id="work"
        className="w-full mx-auto h-screen p-2 flex pb-8 md:pb-16 "
      >
        <div className="max-w-[1240px] mx-auto flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#08d1d1] uppercase font-fuzzy-bubbles text-center text-4xl pt-20">
              Chef Tuber
            </h1>
            <div className="my-8">
              <Image
                src={chefTuberImg}
                className="rounded-full"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center text-lg font-kalam text-white p-4">
              Chef Tuber, your go-to GPT for transforming YouTube cooking videos
              into comprehensive, easy-to-follow recipes. Just provide me with a
              video link, and I'll extract the recipe, complete with
              ingredients, instructions, nutritional information, and any
              allergy warnings. Plus, I can even send these recipes directly to
              your email. My aim is to make cooking fun and accessible for
              everyone, using a bit of AI magic to bring delicious dishes from
              screen to table!
            </p>
          </div>
          <div className="privacypolicy">
            <h2 className="text-4xl text-white text-center font-fuzzy-bubbles my-10">
              Privacy Policy
            </h2>
            <div className="">
              <h2 className="text-2xl text-center font-poppins mb-5">
                Introduction Chef Tuber
              </h2>
              <p className="font-poppins mb-5 ">
                Chef Tuber, an AI-powered service, is committed to protecting
                your privacy. This Privacy Policy explains how your personal
                information is collected, used, and shared when you interact
                with Chef Tuber. Information Collection Chef Tuber collects
                information in the following ways:{" "}
              </p>
              1.YouTube Video Links: When you provide a YouTube video link, Chef
              Tuber processes this link to extract culinary recipes.
              <br />
              2.Email Addresses: If you opt to receive recipes via email, your
              email address will be collected.
              <br />
              <p className="my-5">we dont store amy of this information</p>
              <h2 className="text-2xl text-center font-poppins mb-5">
                Use of Information
              </h2>
              The information collected is used for: <br />
              Recipe Extraction: Processing YouTube video links to generate
              culinary recipes.
              <br />
              Communication: Sending recipes and related information to your
              provided email address.
              <br />
              <h2 className="text-2xl text-center font-poppins my-5">
                Service Data Sharing and Disclosure
              </h2>
              Chef Tuber does not share your personal information with third
              parties, except: Service Providers: To assist in sending emails
              and other communications.
              <h2 className="text-2xl text-center font-poppins my-5">
                Legal Requirements:
              </h2>{" "}
              If required by law or to protect the rights, property, or safety
              of Chef Tuber or others.
              <h2 className="text-2xl text-center font-poppins my-5">
                Data Security
              </h2>
              Chef Tuber employs a variety of security measures to protect your
              personal information from unauthorized access and disclosure.
              <h2 className="text-2xl text-center font-poppins my-5">
                Changes to This Policy
              </h2>
              Chef Tuber may update this Privacy Policy from time to time.
              Contact Us For any questions or concerns regarding this Privacy
              Policy,
              <br /> Please contact us at cheftuber1@gmail.com.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chefTuber;
