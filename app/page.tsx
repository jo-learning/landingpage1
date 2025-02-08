"use client";
// import Head from 'next/head';
import Image from "next/image";

import Head from "next/head";
import ImageSlider from "@/components/landingpage/imageslider";
import {
  Monitor,
  Wallet,
  HandCoins,
  Handshake,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  SaveIcon,
  Cpu,
  SquareKanban,
  ChartNoAxesColumnIncreasing,
  Banknote,
} from "lucide-react";
import { useState } from "react";
// import Image from "next/image";

interface Language {
  english: string;
  tigrigna: string;
}

export default function Home() {
  const [lang, setLang] = useState(0); // 0 for English, 1 for Tigrinya

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(parseInt(event.target.value));
  };
  const data: Language[] = [
    { english: "Kazna - Equb Reinvented", tigrigna: "Kazna" },
    {
      english: "Download Kazna Equb App",
      tigrigna: "ናይ ካዝና ዕቁብ መተግበሪ የውርዱ",
    },
    {
      english: "Secure and Flexible Equb Solutions",
      tigrigna: "ውሑስን ተዓጻጻፍን ዕቁብ",
    },
    {
      english:
        "Join Kazna to experience a new way of saving and managing your funds with added benefits.",
      tigrigna:
        "ተወሳኺ ረብሓታት ዘለዎ ሓድሽ ኣገባብ ምዕቃብን ምምሕዳርን ገንዘብኩም ንምምሃር ምስ ካዝና ተጸንበሩ።",
    },
    {
      english: "Revolutionizing Secure and Smart Community Savings",
      tigrigna: "ውሑስን ብልሕን ማሕበረሰባዊ ዕቋር ሰውራ ምግባር",
    },
    {
      english: `Kazna Equb is more than just a savings platform—it’s a comprehensive and secure financial management system designed to fit your lifestyle. Whether you’re an entrepreneur, a young professional, or part of a savings community, we provide secure and flexible Equb solutions tailored to your needs, with advanced encryption, fraud protection, and transparent transactions to ensure your funds are always safe.`,
      tigrigna: `ካዝና እኩብ ካብ ናይ ዕቋር መድረኽ ንላዕሊ’ዩ- ምስ ኣነባብራኻ ዝሰማማዕ ኩለመዳያውን ውሑስን ስርዓተ ምሕደራ ፋይናንስ’ዩ። በዓል ሃፍቲ ይኹን፡ መንእሰይ በዓል ሞያ፡ ወይ ኣካል ማሕበረሰብ ዕቋር፡ ገንዘብካ ኩሉ ግዜ ውሑስ ምዃኑ ንምርግጋጽ፡ ምስ ድሌታትካ ዝተመጣጠነ ውሑስን ተዓጻጻፍን ናይ Equb ፍታሕ ንህብ።`,
    },
    { english: "Why Kazna", tigrigna: "ስለምንታይ ካዝና" },
    {
      english:
        "Smart Equb Management – Digitally Track, Join, and Manage your Equb savings.",
      tigrigna: "ስማርት ምሕደራ – ብዲጂታል መንገዲ ን ዕቋርካ ክትከታተሎ፣ ተጸንበርን ኣመሓድሮን።",
    },
    { english: "Expense Tracking", tigrigna: "ምክትታል ወጻኢታት" },
    {
      english:
        "Monitor and control your spending with built-in tracking tools.",
      tigrigna: "ኣብ ውሽጡ ብዝተሃንጹ መሳርሒታት ምክትታል ወጻኢታትካ ክትከታተልን ክትቆጻጸርን ትኽእል።",
    },
    { english: "Integrated Wallet", tigrigna: "ዝተዋደደ ቦርሳ" },
    {
      english: "Use Kazna as your digital wallet for seamless transactions.",
      tigrigna: "ንዘይተሓላለኸ ትራንዛክሽን ካዝና ከም ዲጂታላዊ ቦርሳኻ ተጠቐመሉ።",
    },
    { english: "Tailored Equb Packages", tigrigna: "ንዓኻ ዝምጥን ናይ እኩብ ፓኬጃት" },
    {
      english: "Special plans for entrepreneurs, women, and youth.",
      tigrigna: "ፍሉይ ትልሚ ንሰብ ሃፍቲ፣ ደቂ ኣንስትዮ፣ መናእሰይ።",
    },
    { english: "Flexible & Locked Savings", tigrigna: "ተዓጻጻፊ & ዝተዓጽወ ዕቋር" },
    {
      english:
        "Manage your money wisely with options like Druj savings for futures",
      tigrigna: "ገንዘብካ ብጥበብ ከም ድሩጅ ዕቋር ንመጻኢ ዕድል ዝኣመሰሉ ኣማራጺታት ኣመሓድር",
    },
    {
      english: "All Your Money Needs in One App",
      tigrigna: "ኩሉ ገንዘብካ ዘድልየካ ኣብ ሓደ ኣፕሊኬሽን",
    },
    { english: "Seamless Savings", tigrigna: "ኣማራጺ ዘለዎ ዕቋር" },
    { english: "innovative & Tailored Solutions", tigrigna: "ምሕደራ ወጻኢታት" },
    { english: "Growth Opportunities", tigrigna: "ዕድላት ዕብየት" },
    { english: "Investment", tigrigna: "ኢንቨስትመንት" },
    { english: "About", tigrigna: "ብዛዕባና" },
    { english: "Why us", tigrigna: "ስለምንታይ ንዓና" },
    { english: "Contact us", tigrigna: "ርኸቡና" },
    { english: "Kazna", tigrigna: "ካዝና" },
    { english: "", tigrigna: "" },
    { english: "", tigrigna: "" },
    { english: "", tigrigna: "" },
  ];
  return (
      // <div className={`bg-white min-h-screen ${lang === 0 ? "font-poppins" : "font-abyssinica-sil"}`}>
      //   <Head>
      //     <title>{lang === 0 ? data[0].english : data[0].tigrigna}</title>
      //   </Head>

      //   {/* Navbar */}
      //   <header className="fixed w-full z-10  shadow-lg">
      //     <div className="bg-accent text-white items-center text-center">
      //       {lang === 0 ? data[1].english : data[1].tigrigna}
      //     </div>
      //     <div className="flex justify-between items-center px-20 py-4 bg-white text-primary">
      //       <h1 className="text-2xl font-bold">
      //         {lang === 0 ? data[24].english : data[24].tigrigna}
      //       </h1>
      //       <nav className="flex gap-4">
      //         <a href="#about" className=" hover:text-footer text-lg">
      //           {lang === 0 ? data[21].english : data[21].tigrigna}
      //         </a>
      //         {/* <a href="#features" className=" hover:text-footer text-lg">
      //           Features
      //         </a> */}
      //         <a href="#features" className=" hover:text-footer text-lg ">
      //           {lang === 0 ? data[22].english : data[22].tigrigna}
      //         </a>
      //         <a href="#footer" className=" hover:text-footer text-lg">
      //           {lang === 0 ? data[23].english : data[23].tigrigna}
      //         </a>
      //         <select
      //           value={lang}
      //           onChange={handleChange}
      //           className="w-fit text-lg font-medium bg-white "
      //         >
      //           <option value={0}>English</option>
      //           <option value={1}>ትግርኛ</option>
      //         </select>
      //       </nav>
      //     </div>
      //   </header>

      //   {/* Hero Section */}
      //   <section className="flex flex-col items-center justify-center text-center text-white py-[100px] ">
      //     <div className="flex flex-col lg:flex-row items-center gap-12">
      //       {/* Text Section */}
      //       <div className="flex flex-col items-center w-full md:w-1/2 lg:items-start text-black max-w-lg">
      //         <h2
      //           className={`text-4xl font-bold mb-4 text-start ${
      //             lang === 0 ? "" : "text-5xl"
      //           }`}
      //         >
      //           {lang === 0 ? data[2].english : data[2].tigrigna}
      //         </h2>
      //         <p className="text-[#8F8F8F] text-lg mb-6  text-start">
      //           {/* Join Kazna to experience a new way of saving and managing your
      //           funds with added benefits. */}
      //           {lang === 0 ? data[3].english : data[3].tigrigna}
      //         </p>
      //         <div className="flex flex-col gap-2">
      //           {/* <button className="whitespace-nowrap bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600">
      //             Get Started
      //           </button> */}
      //           <div className="flex gap-2">
      //             <button className="flex text-white items-center gap-2 bg-black px-6 py-2 rounded-lg shadow-lg">
      //               <Image
      //                 src="/images/image4.jpg"
      //                 width={40}
      //                 height={40}
      //                 alt="play"
      //                 className="bg-black"
      //               />
      //               <div className="text-start">
      //                 <p className="text-xs whitespace-nowrap">Comming Soon</p>
      //                 <p className="text-lg whitespace-nowrap">Google Play</p>
      //               </div>
      //             </button>
      //             <button className="flex text-white items-center gap-2 bg-black px-6 py-2 rounded-lg shadow-lg">
      //               <Image
      //                 src="/images/ipone.png"
      //                 width={40}
      //                 height={40}
      //                 alt="play"
      //               />
      //               <div className="text-start">
      //                 <p className="text-xs whitespace-nowrap">Comming Soon</p>
      //                 <p className="text-lg whitespace-nowrap">App Store</p>
      //               </div>
      //             </button>
      //           </div>
      //         </div>
      //       </div>

      //       {/* Phone Image */}
      //       {/* <div className="w-[500px] flex justify-center">
      //       <Image
      //         src="/images/slider/image_kazna_1.png"
      //         width={200}
      //         height={200}
      //         alt="App Display"
      //       />
      //       </div> */}
            


      //     <ImageSlider />
            
            
      //     </div>
      //   </section>

      //   {/*Topics Section*/}

      //   <section className="text-white py-20 px-60">
      //     <div className="max-w-6xl mx-auto text-center">
      //       <h2 className="text-4xl font-bold mb-6 text-black">
      //         {/* Revolutionizing Secure and Smart Community Savings */}
      //         {lang === 0 ? data[4].english : data[4].tigrigna}
      //       </h2>
      //       <div className="text-[#8F8F8F]">
      //         {/* Kazna Equb is more than just a savings platform—it’s a comprehensive
      //         and secure financial management system designed to fit your
      //         lifestyle. Whether you’re an entrepreneur, a young professional, or
      //         part of a savings community, we provide secure and flexible Equb
      //         solutions tailored to your needs, with advanced encryption, fraud
      //         protection, and transparent transactions to ensure your funds are
      //         always safe. */}
      //         {lang === 0 ? data[5].english : data[5].tigrigna}
      //       </div>
      //     </div>
      //   </section>

      //   {/* Features Section */}
      //   <section id="features" className=" text-white py-20">
      //     <div className="max-w-6xl mx-auto text-center">
      //       <h4 className="text-accent text-lg font-semibold mb-3">
      //         {lang === 0 ? data[6].english : data[6].tigrigna}
      //       </h4>
      //       <h2 className="text-4xl font-bold mb-8 px-4 text-black">
      //         {/* Smart Equb Management – Digitally Track, Join, and Manage your Equb
      //         savings. */}
      //         {lang === 0 ? data[7].english : data[7].tigrigna}
      //       </h2>
      //       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      //         <div className="bg-white text-teal-900 p-6 rounded-lg shadow-lg">
      //           <div className="p-2 rounded-lg bg-accent w-fit my-2">
      //             <Monitor className="text-white" />
      //           </div>

      //           <h3 className="font-semibold text-black text-lg mb-2 text-start">
      //             {/* Expense Tracking */}
      //             {lang === 0 ? data[8].english : data[8].tigrigna}
      //           </h3>
      //           <p className="text-[#8F8F8F] text-start">
      //             {/* Monitor and control your spending with built-in tracking tools. */}
      //             {lang === 0 ? data[9].english : data[9].tigrigna}
      //           </p>
      //         </div>
      //         <div className="bg-white text-teal-900 p-6 rounded-lg shadow-lg">
      //           <div className="p-2 rounded-lg bg-accent w-fit my-2">
      //             <Wallet className="text-white" />
      //           </div>
      //           <h3 className="font-semibold text-black text-lg mb-2 text-start">
      //             {/* Integrated Wallet */}
      //             {lang === 0 ? data[10].english : data[10].tigrigna}
      //           </h3>
      //           <p className="text-[#8F8F8F] text-start">
      //             {/* Use Kazna as your digital wallet for seamless transactions. */}
      //             {lang === 0 ? data[11].english : data[11].tigrigna}
      //           </p>
      //         </div>
      //         <div className="bg-white text-teal-900 p-6 rounded-lg shadow-lg">
      //           <div className="p-2 rounded-lg bg-accent w-fit my-2">
      //             <Handshake className="text-white" />
      //           </div>
      //           <h3 className="font-semibold text-black text-lg mb-2 text-start">
      //             {/* Tailored Equb Packages */}
      //             {lang === 0 ? data[12].english : data[12].tigrigna}
      //           </h3>
      //           <p className="text-[#8F8F8F] text-start">
      //             {/* Special plans for entrepreneurs, women, and youth. */}
      //             {lang === 0 ? data[13].english : data[13].tigrigna}
      //           </p>
      //         </div>
      //         <div className="bg-white text-teal-900 p-6 rounded-lg shadow-lg">
      //           <div className="p-2 rounded-lg bg-accent w-fit my-2">
      //             <HandCoins className="text-white" />
      //           </div>
      //           <h3 className="font-semibold text-black text-lg mb-2 text-start">
      //             {/* Flexible & Locked Savings */}
      //             {lang === 0 ? data[14].english : data[14].tigrigna}
      //           </h3>
      //           <p className="text-[#8F8F8F] text-start">
      //             {/* Manage your money wisely with options like Druj savings for
      //             futures */}
      //             {lang === 0 ? data[15].english : data[15].tigrigna}
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </section>

      //   {/* About Section */}
      //   <section id="about" className=" text-primary py-20 ">
      //     <div className="max-w-6xl mx-auto text-center">
      //       <h2 className="text-3xl font-bold mb-6 text-black">
      //         {/* All Your Money Needs in One App */}
      //         {lang === 0 ? data[16].english : data[16].tigrigna}
      //       </h2>
      //       <div className="flex justify-between">
      //         <div className="w-full">
      //           <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      //             {/* <div className="p-4 border rounded-lg shadow bg-accent">
      //           <h3 className="font-semibold text-white text-2xl">Expense Tracker</h3>
      //           <p className="text-sm text-gray-100">
      //             Track your contributions and payouts seamlessly.
      //           </p>
      //         </div> */}
      //             <div>
      //               <div className="p-2 rounded-lg my-2 flex items-center  justify-center">
      //                 <SaveIcon
      //                   className="text-accent font-bold text-3xl "
      //                   size={40}
      //                 />
      //               </div>
      //               <div className="bg-white px-1 py-3 text-black shadow-xl ">
      //                 {/* Seamless Savings */}
      //                 {lang === 0 ? data[17].english : data[17].tigrigna}
      //               </div>
      //             </div>
      //             <div>
      //               <div className="p-2 rounded-lg my-2 flex items-center  justify-center">
      //                 <Cpu
      //                   className="text-accent font-bold text-3xl "
      //                   size={40}
      //                 />
      //               </div>
      //               <div className="bg-white px-1 py-3 text-black shadow-xl ">
      //                 {/* innovative & Tailored Solutions */}
      //                 {lang === 0 ? data[18].english : data[18].tigrigna}
      //               </div>
      //             </div>
      //             <div>
      //               <div className="p-2 rounded-lg my-2 flex items-center  justify-center">
      //                 <HandCoins
      //                   className="text-accent font-bold text-3xl "
      //                   size={40}
      //                 />
      //               </div>
      //               <div className="bg-white px-1 py-3 text-black shadow-xl ">
      //                 {/* Seamless Savings */}
      //                 {lang === 0 ? data[17].english : data[17].tigrigna}
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         {/* <Image
      //         src="/images/image1.png"
      //         width={500}
      //         height={600}
      //         alt="App Display"
      //       /> */}
      //         {/* <div><ImageSlider /></div> */}
      //         <div className="flex-1"></div>
      //         {/* <ImageSlider /> */}
      //         <Image src={'/images/logo1.png'} width={470} height={270} alt="Logo" />
      //         <div className="flex-1"></div>

      //         <div className="w-full">
      //           <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      //             <div>
      //               <div className="p-2 rounded-lg my-2 flex items-center  justify-center">
      //                 <SquareKanban
      //                   className="text-accent font-bold text-3xl "
      //                   size={40}
      //                 />
      //               </div>
      //               <div className="bg-white px-1 py-3 text-black shadow-xl ">
      //                 {/* Expense Management */}
      //                 {lang === 0 ? data[18].english : data[18].tigrigna}
      //               </div>
      //             </div>
      //             <div>
      //               <div className="p-2 rounded-lg my-2 flex items-center  justify-center">
      //                 <ChartNoAxesColumnIncreasing
      //                   className="text-accent font-bold text-3xl "
      //                   size={40}
      //                 />
      //               </div>
      //               <div className="bg-white px-1 py-3 text-black shadow-xl ">
      //                 {/* Growth Opportunities */}
      //                 {lang === 0 ? data[19].english : data[19].tigrigna}
      //               </div>
      //             </div>
      //             <div>
      //               <div className="p-2 rounded-lg my-2 flex items-center  justify-center">
      //                 <Banknote
      //                   className="text-accent font-bold text-3xl "
      //                   size={40}
      //                 />
      //               </div>
      //               <div className="bg-white px-1 py-3 text-black shadow-xl ">
      //                 {/* Investment */}
      //                 {lang === 0 ? data[20].english : data[20].tigrigna}
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>

      //   {/* How It Works Section
      //   <section
      //     id="how-it-works"
      //     className="bg-gradient-to-b from-white via-white to-accent text-black py-20 px-6"
      //   >
      //     <div className="max-w-6xl mx-auto text-center">
      //       <h2 className="text-3xl font-bold mb-6">How Kazna Works</h2>
      //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      //         <div className="p-4 border rounded-lg shadow bg-white">
      //           <h3 className="font-semibold text-black">1. Create a Group</h3>
      //           <p className="text-gray-500">Start or join an equb group with trusted members.</p>
      //         </div>
      //         <div className="p-4 border rounded-lg shadow bg-white">
      //           <h3 className="font-semibold text-black">2. Save and Rotate</h3>
      //           <p className="text-gray-500">Contribute a set amount and take turns accessing funds.</p>
      //         </div>
      //         <div className="p-4 border rounded-lg shadow bg-white">
      //           <h3 className="font-semibold text-black">3. Secure Payouts</h3>
      //           <p className="text-gray-500">Receive your payout securely when it&apos;s your turn.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </section>

      //   Testimonials Section
      //   <section
      //     id="testimonials"
      //     className="bg-gradient-to-b from-accent via-accent to-white text-white py-20 px-6"
      //   >
      //     <div className="max-w-6xl mx-auto text-center">
      //       <h2 className="text-3xl font-bold mb-6 text-black">What Our Users Say</h2>
      //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      //         <div className="p-6 bg-white text-black rounded-lg shadow-lg">
      //           <p>
      //           &qout; Kazna has revolutionized the way I save money. The app is
      //             user-friendly and secure. Highly recommended! &qout; 
      //           </p>
      //           <p className="mt-4 font-semibold">- Sarah T.</p>
      //         </div>
      //         <div className="p-6 bg-white text-black rounded-lg shadow-lg">
      //           <p>
      //             &qout; Joining an equb with Kazna has been seamless and stress-free.
      //             I love the automated notifications!&qout;
      //           </p>
      //           <p className="mt-4 font-semibold">- Ahmed Y.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </section> */}

      //   {/* Contact Us Section */}
      //   {/* <section id="contact" className="bg-white text-black py-20 px-6">
      //     <div className="max-w-6xl mx-auto text-center">
      //       <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      //       <p className="mb-4">
      //         Have questions? Contact us at{" "}
      //         <span className="font-semibold">support@kazna.com</span>
      //       </p>
      //       <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600">
      //         Contact Us
      //       </button>
      //     </div>
      //   </section> */}

      //   {/* Footer */}
      //   <footer
      //     id="footer"
      //     className="bg-gradient-to-t from-accent to-accent text-white text-center pb-4 "
      //   >
      //     <div className="bg-accent">
      //       <div className="grid grid-cols-3 bg-accent pt-5 text-white mx-[0px] pb-3">
      //         <div className="flex flex-col justify-end">
      //           <div className="items-center justify-center flex mb-4">
      //             <Image
      //               src="/images/logo1.png"
      //               width={160}
      //               height={160}
      //               alt="Kazna"
      //             />
      //           </div>

      //           <div className="flex justify-center gap-2">
      //             <div className="hover:text-footer text-lg">
      //               <Linkedin />{" "}
      //             </div>
      //             <div className="hover:text-footer text-lg">
      //               <Facebook />{" "}
      //             </div>
      //             <div className="hover:text-footer text-lg">
      //               <Instagram />{" "}
      //             </div>
      //             <div className="hover:text-footer text-lg">
      //               {" "}
      //               <Twitter />
      //             </div>{" "}
      //             <svg
      //               width="23"
      //               height="23"
      //               viewBox="0 0 48 48"
      //               fill="none"
      //               xmlns="http://www.w3.org/2000/svg"
      //             >
      //               <circle cx="24" cy="24" r="24" fill="#0088CC" />
      //               <path
      //                 d="M34.22 14.34L10.79 23.32C9.83 23.68 9.84 24.56 10.66 24.82L16.36 26.64L30.98 17.84C31.63 17.45 32.24 17.72 31.73 18.17L19.3 29.39H19.29L19.3 29.4L18.91 35.58C19.48 35.58 19.73 35.33 20.05 35.03L23.92 31.28L30.38 36.23C31.46 36.83 32.23 36.53 32.49 35.29L35.84 15.89C36.22 14.33 35.35 13.66 34.22 14.34Z"
      //                 fill="white"
      //               />
      //             </svg>
      //           </div>
      //         </div>
      //         <div>
      //           <h2 className="text-3xl mb-2 flex text-start">Company</h2>
      //           <div className="flex flex-col justify-start items-start gap-3 pl-4">
      //             <a href="#about" className=" hover:text-footer text-lg">
      //               {lang === 0 ? data[21].english : data[21].tigrigna}
      //             </a>
      //             {/* <a href="#features" className=" hover:text-footer text-lg">
      //           Features
      //         </a> */}
      //             <a href="#features" className=" hover:text-footer text-lg">
      //               {lang === 0 ? data[22].english : data[22].tigrigna}
      //             </a>
      //             <a href="#footer" className=" hover:text-footer text-lg">
      //               {lang === 0 ? data[23].english : data[23].tigrigna}
      //             </a>
      //           </div>
      //         </div>
      //         <div className="flex flex-col text-lg">
      //           <h3 className="text-3xl mb-2 flex text-start">Contact us</h3>
      //           <div className="pl-4 flex flex-col gap-3">
      //             <div className="flex w-fit text-white gap-2 items-center">
      //               <Phone size={20} /> +2123456789
      //             </div>
      //             <div className="flex w-fit text-white gap-2 items-center">
      //               <Phone size={20} /> +2123456789
      //             </div>
      //             <div className="flex w-fit text-white gap-2 items-center">
      //               <Phone size={20} /> +2123456789
      //             </div>
      //             <div className="flex w-fit text-white gap-2 items-center">
      //               <svg
      //                 width="23"
      //                 height="23"
      //                 viewBox="0 0 48 48"
      //                 fill="none"
      //                 xmlns="http://www.w3.org/2000/svg"
      //               >
      //                 <circle cx="24" cy="24" r="24" fill="#0088CC" />
      //                 <path
      //                   d="M34.22 14.34L10.79 23.32C9.83 23.68 9.84 24.56 10.66 24.82L16.36 26.64L30.98 17.84C31.63 17.45 32.24 17.72 31.73 18.17L19.3 29.39H19.29L19.3 29.4L18.91 35.58C19.48 35.58 19.73 35.33 20.05 35.03L23.92 31.28L30.38 36.23C31.46 36.83 32.23 36.53 32.49 35.29L35.84 15.89C36.22 14.33 35.35 13.66 34.22 14.34Z"
      //                   fill="white"
      //                 />
      //               </svg>
      //               @kazna_support
      //             </div>
      //             <div className="flex w-fit text-white gap-2 items-center">
      //               <Mail size={20} /> contact@kazna.com
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <p>&copy; 2025 Kazna. All rights reserved.</p>
      //   </footer>
      // </div>



<div className={`min-h-screen ${lang === 0 ? "font-poppins" : "font-abyssinica-sil"} bg-blueblack`}>
  <Head>
    <title>{lang === 0 ? data[0].english : data[0].tigrigna}</title>
  </Head>

  {/* Navbar */}
  <header className="fixed w-full z-10 backdrop-blur-md bg-blueblack/50 shadow-lg">
    <div className="bg-gradient-to-r from-gold to-gold-light text-blueblack items-center text-center py-2">
      {lang === 0 ? data[1].english : data[1].tigrigna}
    </div>
    <div className="flex justify-between items-center px-20 py-4 bg-transparent text-white">
      <h1 className="text-2xl font-bold">
        {lang === 0 ? data[24].english : data[24].tigrigna}
      </h1>
      <nav className="flex gap-4">
        <a href="#about" className="hover:text-gold text-lg">
          {lang === 0 ? data[21].english : data[21].tigrigna}
        </a>
        <a href="#features" className="hover:text-gold text-lg">
          {lang === 0 ? data[22].english : data[22].tigrigna}
        </a>
        <a href="#footer" className="hover:text-gold text-lg">
          {lang === 0 ? data[23].english : data[23].tigrigna}
        </a>
        <select
          value={lang}
          onChange={handleChange}
          className="w-fit text-lg font-medium bg-transparent text-white border border-gold rounded"
        >
          <option value={0}>English</option>
          <option value={1}>ትግርኛ</option>
        </select>
      </nav>
    </div>
  </header>

  {/* Hero Section */}
  <section className="relative flex flex-col items-center justify-center text-center text-white py-[100px]  bg-image1 overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-[url('/images/abstract-bg.png')] bg-cover bg-center opacity-20"></div>
    <div className="relative flex flex-col lg:flex-row items-center gap-12">
      {/* Text Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 lg:items-start text-white max-w-lg">
        <h2 className={`text-5xl font-bold mb-4 text-start ${lang === 0 ? "" : "text-6xl"}`}>
          {lang === 0 ? data[2].english : data[2].tigrigna}
        </h2>
        <p className="text-gold-light text-lg mb-6 text-start">
          {lang === 0 ? data[3].english : data[3].tigrigna}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button className="flex text-white items-center gap-2 bg-blueblack px-6 py-2 rounded-lg shadow-lg border border-gold hover:bg-blue-900 transition-all">
              <Image
                src="/images/image4.jpg"
                width={40}
                height={40}
                alt="play"
                className="bg-transparent"
              />
              <div className="text-start">
                <p className="text-xs whitespace-nowrap">Coming Soon</p>
                <p className="text-lg whitespace-nowrap">Google Play</p>
              </div>
            </button>
            <button className="flex text-white items-center gap-2 bg-blueblack px-6 py-2 rounded-lg shadow-lg border border-gold hover:bg-blue-900 transition-all">
              <Image
                src="/images/ipone.png"
                width={40}
                height={40}
                alt="play"
              />
              <div className="text-start">
                <p className="text-xs whitespace-nowrap">Coming Soon</p>
                <p className="text-lg whitespace-nowrap">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Phone Image */}
      <div className="relative w-[500px] h-[500px] flex justify-center items-center">
        <div className="absolute w-full h-full bg-gradient-to-br from-gold to-gold-light rounded-full blur-3xl opacity-30"></div>
        <ImageSlider />
      </div>
    </div>
  </section>

  {/* Topics Section */}
  <section className="relative text-white py-20 px-60 bg-blueblack">
    <div className="absolute inset-0 bg-[url('/images/abstract-bg-2.png')] bg-cover bg-center opacity-10"></div>
    <div className="relative max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-gold">
        {lang === 0 ? data[4].english : data[4].tigrigna}
      </h2>
      <div className="text-gold-light">
        {lang === 0 ? data[5].english : data[5].tigrigna}
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section id="features" className="relative text-white py-20 bg-blueblack">
    <div className="absolute inset-0 bg-[url('/images/abstract-bg-3.png')] bg-cover bg-center opacity-10"></div>
    <div className="relative max-w-6xl mx-auto text-center">
      <h4 className="text-gold text-lg font-semibold mb-3">
        {lang === 0 ? data[6].english : data[6].tigrigna}
      </h4>
      <h2 className="text-4xl font-bold mb-8 px-4 text-gold">
        {lang === 0 ? data[7].english : data[7].tigrigna}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[8, 10, 12, 14].map((index) => (
          <div key={index} className="bg-blueblack/50 backdrop-blur-md text-white p-6 rounded-lg shadow-lg border border-gold/20 hover:border-gold transition-all">
            <div className="w-full items-center flex justify-center">
            <div className="p-6 rounded-full bg-gold w-fit my-2">
              {index === 8 ? <Monitor className="text-blueblack" /> :
               index === 10 ? <Wallet className="text-blueblack" /> :
               index === 12 ? <Handshake className="text-blueblack" /> :
               <HandCoins className="text-blueblack" />}
            </div>
            </div>
            <h3 className="font-semibold text-gold text-lg mb-2 text-start">
              {lang === 0 ? data[index].english : data[index].tigrigna}
            </h3>
            <p className="text-gold-light text-start">
              {lang === 0 ? data[index + 1].english : data[index + 1].tigrigna}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="relative text-white py-20 bg-blueblack">
    <div className="absolute inset-0 bg-[url('/images/abstract-bg-4.png')] bg-cover bg-center opacity-10"></div>
    <div className="relative max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-gold">
        {lang === 0 ? data[16].english : data[16].tigrigna}
      </h2>
      <div className="flex justify-between">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[17, 18, 19].map((index) => (
              <div key={index}>
                <div className="p-2 rounded-lg my-2 flex items-center justify-center">
                  {index === 17 ? <SaveIcon className="text-gold font-bold text-3xl" size={40} /> :
                   index === 18 ? <Cpu className="text-gold font-bold text-3xl" size={40} /> :
                   <HandCoins className="text-gold font-bold text-3xl" size={40} />}
                </div>
                <div className="bg-blueblack/50 backdrop-blur-md px-1 py-3 text-gold shadow-xl border border-gold/20 hover:border-gold transition-all">
                  {lang === 0 ? data[index].english : data[index].tigrigna}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1"></div>
        <Image src={'/images/logo1.png'} width={470} height={270} alt="Logo" />
        <div className="flex-1"></div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[18, 19, 20].map((index) => (
              <div key={index}>
                <div className="p-2 rounded-lg my-2 flex items-center justify-center">
                  {index === 18 ? <SquareKanban className="text-gold font-bold text-3xl" size={40} /> :
                   index === 19 ? <ChartNoAxesColumnIncreasing className="text-gold font-bold text-3xl" size={40} /> :
                   <Banknote className="text-gold font-bold text-3xl" size={40} />}
                </div>
                <div className="bg-blueblack/50 backdrop-blur-md px-1 py-3 text-gold shadow-xl border border-gold/20 hover:border-gold transition-all">
                  {lang === 0 ? data[index].english : data[index].tigrigna}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer id="footer" className="bg-blueblack text-white text-center pb-4">
    <div className="bg-transparent">
      <div className="grid grid-cols-3 bg-transparent pt-5 text-white mx-[0px] pb-3">
        <div className="flex flex-col justify-end">
          <div className="items-center justify-center flex mb-4">
            <Image
              src="/images/logo1.png"
              width={160}
              height={160}
              alt="Kazna"
            />
          </div>
          <div className="flex justify-center gap-2">
            {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
              <div key={i} className="hover:text-gold text-lg">
                <Icon />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-2 flex text-start">Company</h2>
          <div className="flex flex-col justify-start items-start gap-3 pl-4">
            {[21, 22, 23].map((index) => (
              <a key={index} href={`#${index === 21 ? 'about' : index === 22 ? 'features' : 'footer'}`} className="hover:text-gold text-lg">
                {lang === 0 ? data[index].english : data[index].tigrigna}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-lg">
          <h3 className="text-3xl mb-2 flex text-start">Contact us</h3>
          <div className="pl-4 flex flex-col gap-3">
            <div className="flex w-fit text-white gap-2 items-center">
              <Phone size={20} /> +2123456789
            </div>
            <div className="flex w-fit text-white gap-2 items-center">
              <Mail size={20} /> contact@kazna.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>&copy; 2025 Kazna. All rights reserved.</p>
  </footer>
</div>
  );
}
