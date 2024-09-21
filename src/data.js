import heroImgDesktop from "./assets/home/desktop/create-and-share.jpg";
import heroImgTablet from "./assets/home/tablet/create-and-share.jpg";
import heroImgMobile from "./assets/home/mobile/create-and-share.jpg";

import beautifulStoriesDesktop from "./assets/home/desktop/beautiful-stories.jpg";
import beautifulStoriesTablet from "./assets/home/tablet/beautiful-stories.jpg";
import beautifulStoriesMobile from "./assets/home/mobile/beautiful-stories.jpg";

import designForEveryoneDesktop from "./assets/home/desktop/designed-for-everyone.jpg";
import designForEveryoneTablet from "./assets/home/tablet/designed-for-everyone.jpg";
import designForEveryoneMobile from "./assets/home/mobile/designed-for-everyone.jpg";
import mountainImage from "./assets/stories/desktop/mountains.jpg";

export const homeSectionsData = [
  {
    textHeading: "Create and share your photo stories.",
    phrgh:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    btnText: "get an invite",
    bgDark: true,
    rowReverse: false,
    hasBefore: true,
    sectionImgDesktop: heroImgDesktop,
    sectionImgTablet: heroImgTablet,
    sectionImgMobile: heroImgMobile,
  },
  {
    textHeading: "beautiful stories every time",
    phrgh:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    btnText: "view the stories",
    bgDark: false,
    rowReverse: true,
    hasBefore: false,
    sectionImgDesktop: beautifulStoriesDesktop,
    sectionImgTablet: beautifulStoriesTablet,
    sectionImgMobile: beautifulStoriesMobile,
  },
  {
    textHeading: "design for everyone",
    phrgh:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
    btnText: "view the stories",
    bgDark: false,
    rowReverse: false,
    hasBefore: false,
    sectionImgDesktop: designForEveryoneDesktop,
    sectionImgTablet: designForEveryoneTablet,
    sectionImgMobile: designForEveryoneMobile,
  },
];

export const storiesCards = [
  {
    storyImage: mountainImage,
  },
];
