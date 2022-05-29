import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const question1 = " How will you improve the performance of a React Application";
  const answer1 =
    " একটি রিঅ্যাক্ট অ্যাপ তৈরী  ও কর্মক্ষমতা উন্নত করার জন্য , যেকোনো টিম বা ডেভেলপারকে যা করতে হবে তা হল পারফরম্যান্স পরীক্ষা করা এবং শেষ ব্যবহারকারীর অভিজ্ঞতার জন্য অ্যাপটিকে অপ্টিমাইজ করা। কোনো প্রতিক্রিয়া অ্যাপ্লিকেশন তৈরি করার সময়, অ্যাপ্লিকেশনটি কীভাবে কাজ করবে এবং শেষ পর্যন্ত দেখতে হবে তা নিয়ে অনেক চিন্তাভাবনা করা হয়। অন্তত যে কোনো দল বা বিকাশকারীকে যা করতে হবে তা হল কর্মক্ষমতা পরীক্ষা করা এবং শেষ ব্যবহারকারীর অভিজ্ঞতার জন্য অ্যাপটিকে অপ্টিমাইজ করার কৌশলগুলি সন্ধান করা। ";

  const question2 = "What are the different ways to manage a state in a React application? ";
  const answer2 =
    "Manage এর জন্য চার ধরণের React State রয়েছে। যখন আমরা আমাদের অ্যাপ্লিকেশানগুলিতে states সম্পর্কে কথা বলি, তখন কোন ধরনের states আসলে গুরুত্বপূর্ণ সে সম্পর্কে পরিষ্কার হওয়া গুরুত্বপূর্ণ. আপনার প্রতিক্রিয়া অ্যাপগুলিতে আপনাকে সঠিকভাবে পরিচালনা করার জন্য   যে চারটি প্রধান ধরণের রাষ্ট্র রয়েছে তা হলো Local state, Global, state, Server state, URL state. Local (UI) state- Local state  হল ডেটা যা আমরা এক বা অন্য উপাদানে পরিচালনা করি। local state প্রায়শই useState হুক ব্যবহার করে React পরিচালিত হয়।";

  const question3 = "How does prototypical inheritance work";
  const answer3 =
    "JavaScript একটি prototype  ভিত্তিক, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ভাষা। ES6 আপডেটের পরে, জাভাস্ক্রিপ্ট prototype  উত্তরাধিকার এর জন্য অনুমতি দিয়েছে, যার অর্থ বস্তু এবং পদ্ধতিগুলি ভাগ করা, প্রসারিত এবং অনুলিপি করা যেতে পারে। অবজেক্টের মধ্যে ভাগ করা কাঠামোর (ডেটা ক্ষেত্র), আচরণ (ফাংশন/পদ্ধতি), এবং অবস্থা (ডেটা মান) এর সহজ উত্তরাধিকার তৈরি করে। জাভাস্ক্রিপ্ট হল প্রোটোটাইপ-সক্ষম ভাষার মধ্যে সবচেয়ে সাধারণ, এবং এর ক্ষমতা তুলনামূলকভাবে অনন্য। যথাযথভাবে ব্যবহার করা হলে, জাভাস্ক্রিপ্টে প্রোটোটাইপিকাল উত্তরাধিকার একটি শক্তিশালী টুল.";

  const question4 = " What is a unit test? Why should write unit tests?";
  const answer4 =
    "একটি ইউনিট পরীক্ষা হল একটি ইউনিট পরীক্ষা করার একটি উপায় - কোডের ক্ষুদ্রতম অংশ যা একটি সিস্টেমে যৌক্তিকভাবে বিচ্ছিন্ন করা যেতে পারে। বেশিরভাগ প্রোগ্রামিং ভাষায়, এটি একটি ফাংশন, একটি সাবরুটিন, একটি পদ্ধতি বা সম্পত্তি। সংজ্ঞার বিচ্ছিন্ন অংশ গুরুত্বপূর্ণ। তার বই লেগ্যাসি কোডের সাথে কার্যকরভাবে কাজ করা লেখক মাইকেল ফেদারস বলেছেন যে এই ধরনের পরীক্ষাগুলি ইউনিট পরীক্ষা নয় যখন তারা বাহ্যিক সিস্টেমের উপর নির্ভর করে: যদি এটি ডাটাবেসের সাথে কথা বলে, এটি নেটওয়ার্ক জুড়ে কথা বলে, এটি ফাইল সিস্টেমকে স্পর্শ করে, এটি সিস্টেম কনফিগারেশন প্রয়োজন, অথবা এটি অন্য কোনো পরীক্ষার মতো একই সময়ে চালানো যাবে না। কারন লিখিত পরিক্ষা মনে থাকে";

  const question5 =
    "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?";
  const answer5 =
    "প্রথমে UI থেকে প্রডাক্ট এর নাম axios, react query দিয়ে বাক এন্ড এ পাঠাবো params মানে url দিয়ে অথবা বডি দিয়ে । তার পর সেই প্রডাক্ট নাম দিয়ে ফিল্টার করব তার পর তারপর কালেকশনের মধ্যে find পাঠিয়ে দিবো তখন সেই নাম দিয়ে যত গুলো আসে সেই গুলো রিট্রান করে দিবে তখন আবার UI তে res.send(..) করে পাঠিয়ে দিবো।";

  return (
    <div className="container mx-auto my-10">
      <div className="grid gap-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="px-2 mx-auto">
          <div class="card  w-96 px-10 bg-base-100 shadow-2xl">
            <h1 className="text-xl mb-2 font-bold">{question1}</h1>
            <hr className="py-[1px] my-2" />
            <p className="text-lg">{answer1}</p>
          </div>
        </div>
        <div className="px-2 mx-auto">
          <div class="card w-96 px-10 bg-base-100 shadow-2xl">
            <h1 className="text-xl mb-2 font-bold">{question2}</h1>
            <hr className="py-[1px] my-2" />
            <p className="text-lg">{answer2}</p>
          </div>
        </div>
        <div className="px-2 mx-auto">
          <div class="card w-96 px-10 bg-base-100 shadow-2xl">
            <h1 className="text-xl mb-2 font-bold">{question3}</h1>
            <hr className="py-[1px] my-2" />
            <p className="text-lg">{answer3}</p>
          </div>
        </div>
        <div className="px-2 mx-auto">
          <div class="card w-96 px-10 bg-base-100 shadow-2xl">
            <h1 className="text-xl my-4 font-bold">{question4}</h1>
            <hr className="py-[1px] my-2" />
            <p className="text-lg">{answer4}</p>
          </div>
        </div>
        <div className="px-2 mx-auto">
          <div class="card w-96 px-10 bg-base-100 shadow-2xl">
            <h1 className="text-xl my-4 font-bold">{question5}</h1>
            <hr className="py-[1px] my-2" />
            <p className="text-lg">{answer5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
