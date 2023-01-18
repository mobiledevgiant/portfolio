/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yevhenii Rybalov",
  title: "Hi all, I'm Yevhenii",
  subTitle: emoji(
    "As the world becomes increasingly interconnected, staying ahead of technology is paramount in remaining competitive. It’s no surprise that mobile app development has emerged, as one of the most sort after career paths in tech today. Fortunately, I’m a developer who specialises in helping businesses create cutting-edge Android and iOS apps to stay ahead of the competition. With over ten years of experience crafting interactive experiences for a wide variety of industries, clients can trust me to design beautiful and efficient solutions that meet their needs and stand out among the crowd. From concepting through launch, i offer 360 degree service – perfect for entrepreneurs looking to bring their dream idea to life."),
  resumeLink:
    "https://drive.google.com/file/d/1UbWyF_Nv0KA1NYT7n7Ukkh8enJmRQJIp/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mobilespider",
  gmail: "yevheniirybalov90@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE full-stack developer who gained MULTIPLE tech stacks experience working on NUMBERS of projects",
  skills: [
    emoji(
      "⚡ Loves creating Mobile products that deliver exquisite user experiences."
    ),
    emoji("⚡ Build high qualified codes and automated workflows"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    ),
    emoji(
      "⚡ Gather requirements and specifications of projects and confirm dev cycle and workflows"
    ),
    emoji(
      "⚡ Etc"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "objective-c",
      fontAwesomeClassname: "fa fa-file-code"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "ios",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "appstore",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
    {
      skillName: "bluetooth",
      fontAwesomeClassname: "fab fa-bluetooth"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University Lviv",
      logo: require("./assets/images/university.jpeg"),
      subHeader: "Study Computer Science",
      duration: "2021 - present",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Swift/SwiftUI/RxSwift", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Objective-c", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kotlin/Java/RxJava/RxKotlin", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter/Dart",
      progressPercentage: "100%"
    },
    {
      Stack: "React Native/Xamarin",
      progressPercentage: "100%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Blockchain",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer",
      company: "CyberCraft",
      companylogo: require("./assets/images/cyberLogo.png"),
      date: "March 2021 – May 2021",
      desc: ""
    },
    {
      role: "Mobile Developer",
      company: "Skelia",
      companylogo: require("./assets/images/skeliaLogo.png"),
      date: "June 2021 – Sep 2022",
      desc: ""
    },
    {
      role: "Mobile Developer",
      company: "TrendLine Global",
      companylogo: require("./assets/images/trendLogo.png"),
      date: "October 2021 – Present",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/upliftLogo.png"),
      projectName: "AFI Uplift",
      projectDesc: "The AFI App has been designed to save you time, keep you updated and reward you for choosing to hire through AFI.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.afi-rentals.co.uk/"
        },
        {
          name: "Appstore",
          url: "https://apps.apple.com/gb/app/afi-app/id1527065848"
        },
        {
          name: "Playstore",
          url: "https://play.google.com/store/apps/details?id=co.uk.afiuplift&gl=GB"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/talkitoutLogo.png"),
      projectName: "TalkItOut",
      projectDesc: "Talk It Out takes you deeper to help you understand what's truly important, to you.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.talkitout.app/"
        },
        {
          name: "Appstore",
          url: "https://apps.apple.com/gb/app/talk-it-out/id1554393308"
        },
        {
          name: "Playstore",
          url: "https://play.google.com/store/apps/details?id=app.talkitout.android&gl=GB"
        }
      ]
    },
    {
      image: require("./assets/images/fbeLogo.png"),
      projectName: "Faunaspot",
      projectDesc: "With FaunaSpot, the North Holland Fauna Management Unit focuses on ease of use for the hunter and on reliable data.",
      footerLink: [
        {
          name: "Website",
          url: "https://faunaspot.nl/"
        },
        {
          name: "Appstore",
          url: "https://apps.apple.com/us/app/faunaspot/id1610523145"
        },
        {
          name: "Playstore",
          url: "https://play.google.com/store/apps/details?id=fbe.android.nl"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+380 993562981",
  email_address: "yevheniirybalov90@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
