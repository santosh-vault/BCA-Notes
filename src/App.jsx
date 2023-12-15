import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Home/Header';
import Navbar from './Home/Navbar';
import HeroSection from './Home/Hero';
import Feature from './Home/Feature';
import Footer from './Home/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>BCA Notes Nepal - Your Ultimate Resource for BCA Studies</title>
        <meta name="description" content="Explore comprehensive BCA notes and organize your study materials online with BCA Notes Nepal. Get insights into BCA syllabus, computer application, entrance exams, system security, online classes, and more. Access notes for students, exam schedules, and information about Bachelor of Computer Application at Tribhuvan University. Start your BCA journey with valuable resources and first-semester notes. Prepare for BCA entrance exams, learn about internet courses, and discover a wealth of information on BCA courses, examinations, and university updates. Join us for a seamless BCA learning experience." />
        <meta name="keyword" content="BCA notes, computer application, BCA syllabus, entrance exam, system security, online classes, BCA course, Tribhuvan University, internet of things course, education, first semester, examination, BCA entrance exam, BCA result, university notes, information security, BCA first year, online classes for BCA, BCA examination, BCA application form, BCA course information, BCA 1st semester notes, BCA exam schedule, BCA semester exams, BCA first semester syllabus, internet course, BCA entrance exam 2022, social sciences, humanities, BCA computer course, education bachelor" />
      </Helmet>
      <div className="app-container">
        <Header />
        <Navbar />
        <HeroSection />
        <Feature />
        <Footer />
      </div>
    </>
  );
};

export default App;
