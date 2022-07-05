import React, { useEffect, useState } from 'react';

import { PageSpinner } from 'components/base/page-spinner';

import { Header } from 'components/base/header';
import { Footer } from 'components/base/footer';

import HomeSectionBanners from 'components/blocks/Home/SectionBanners';
import HomeSectionHours from 'components/blocks/Home/SectionHours';
import HomeSectionAboutUs from 'components/blocks/Home/SectionAboutUs';
import HomeSectionRooms from 'components/blocks/Home/SectionRooms';
import HomeSectionPremiumRoom from 'components/blocks/Home/SectionPremiumRoom';
import HomeSectionEventPromo from 'components/blocks/Home/SectionEventPromo';
import HomeSectionGalleries from 'components/blocks/Home/SectionGallery';
import HomeSectionPrivateEvents from 'components/blocks/Home/SectionPrivateEvents';

import SEO from 'components/seo';

// import LanguageApi from 'api/language';

export function Home() {
  // const [loadingPage, setLoadingPage] = useState(true);
  const [loadingLanguage, setLoadingLanguage] = useState(false);
  const [loadingImages, setLoadingImages] = useState(true);
  const [pageContent, setPageContent] = useState({
    title: '',
    logo_image: '',
    meta_header: '',
    meta_description: '',
    banners: [],
    about_us: '',
    about_us_background: '',
    rooms: [],
    premium_lounge_description: '',
    premium_lounge_background: '',
    current_event_image: '',
    current_event_title: '',
    current_event_description: '',
    events: [],
    private_event_description: '',
    private_event_background: '',
    location: '',
    google_map_link: '',
    hiring_description: '',
  });

  async function getLanguage() {
    try {
      // const { data } = await LanguageApi.getLanguage();

      setPageContent({
        title: 'Meeting',
        logo_image:
          'https://pbs.twimg.com/profile_images/1201192577912803328/6OIASH5H_200x200.jpg',
        meta_header: 'Meeting',
        meta_description: 'Meeting',
        banners: [
          {
            image:
              'https://images.squarespace-cdn.com/content/v1/52ccee75e4b00bc0dba03f46/1590734772098-05Z8N55H0Z65BRA1GDG3/Plaza+Premium+Taipei+Terminal+2+Review-4.jpg?format=1000w',
          },
          {
            image:
              'https://pix10.agoda.net/hotelImages/2012162/-1/b1cf0cf4c925b30cd4332e86bb5a3a0e.jpg?ca=9&ce=1&s=1024x768',
          },
          {
            image:
              'https://images.squarespace-cdn.com/content/v1/52ccee75e4b00bc0dba03f46/1590734739322-RZN1L944D88R165MWC26/image-asset.jpeg?format=1000w',
          },
        ],
        about_us:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        about_us_background:
          'https://cdn.wework.com/locations/image/6f1b93e6-5864-11ec-b7f5-0e6a5dc689cd/Web_150DPI-20210911_WeWork_2021_Q3_Sel16_Sinsa_-_Seoul_006.jpg',
        rooms: [
          {
            room_capacity: '40',
            title: 'Title 1',
            room_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            room_images: [
              'https://2.bp.blogspot.com/-86jjzcjdCc8/Xji0EVDQH-I/AAAAAAAAHdA/0poiKJR6j4Al5itEyDNB-eTNH7ie5hpXACLcBGAsYHQ/s1600/Premier%2BLounge%2BNovotel%2BManila%2B01.jpg',
              'https://2.bp.blogspot.com/-86jjzcjdCc8/Xji0EVDQH-I/AAAAAAAAHdA/0poiKJR6j4Al5itEyDNB-eTNH7ie5hpXACLcBGAsYHQ/s1600/Premier%2BLounge%2BNovotel%2BManila%2B01.jpg',
              'https://2.bp.blogspot.com/-86jjzcjdCc8/Xji0EVDQH-I/AAAAAAAAHdA/0poiKJR6j4Al5itEyDNB-eTNH7ie5hpXACLcBGAsYHQ/s1600/Premier%2BLounge%2BNovotel%2BManila%2B01.jpg',
            ],
          },
          {
            room_capacity: '60',
            title: 'Title 2',
            room_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            room_images: [
              'https://media-cdn.tripadvisor.com/media/photo-s/1c/98/56/8c/bar-lounge.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/1c/98/56/8c/bar-lounge.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/1c/98/56/8c/bar-lounge.jpg',
            ],
          },
          {
            room_capacity: '80',
            title: 'Title 3',
            room_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            room_images: [
              'https://media-cdn.tripadvisor.com/media/photo-s/0d/a4/cd/f9/di-desain-dengan-konsep.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/0d/a4/cd/f9/di-desain-dengan-konsep.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/0d/a4/cd/f9/di-desain-dengan-konsep.jpg',
            ],
          },
          {
            room_capacity: '100',
            title: 'Title 3',
            room_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            room_images: [
              'https://2.bp.blogspot.com/-eeqO5lvUQSA/Xjh81btZcZI/AAAAAAAAHa8/UjO6A-tKQ2gJfzYhqeLz6uBT4MPIP7EGACLcBGAsYHQ/s1600/Novotel%2BManila%2BAraneta%2BCity%2BSuite%2B03.jpg',
              'https://2.bp.blogspot.com/-eeqO5lvUQSA/Xjh81btZcZI/AAAAAAAAHa8/UjO6A-tKQ2gJfzYhqeLz6uBT4MPIP7EGACLcBGAsYHQ/s1600/Novotel%2BManila%2BAraneta%2BCity%2BSuite%2B03.jpg',
              'https://2.bp.blogspot.com/-eeqO5lvUQSA/Xjh81btZcZI/AAAAAAAAHa8/UjO6A-tKQ2gJfzYhqeLz6uBT4MPIP7EGACLcBGAsYHQ/s1600/Novotel%2BManila%2BAraneta%2BCity%2BSuite%2B03.jpg',
            ],
          },
        ],
        galleries: [
          {
            instagram_link: 'https://www.instagram.com/p/CAXYaU4FVcL/?hl=en',
            image_thumbnail:
              'https://3.bp.blogspot.com/-CgnLrkq_wTQ/Xjh81R6jTjI/AAAAAAAAHa0/crhkiMOfe2guTw-MANYhhZhNmBcDICHSQCLcBGAsYHQ/s1600/Novotel%2BManila%2BAraneta%2BCity%2BSuite%2B01.jpg',
          },
          {
            instagram_link: 'https://www.instagram.com/p/B7QenowFiAi/?hl=en',
            image_thumbnail:
              'https://media-cdn.tripadvisor.com/media/photo-s/0c/be/cb/b5/the-lounge.jpg',
          },
          {
            instagram_link: 'https://www.instagram.com/p/B5crlgepw9e/?hl=en',
            image_thumbnail:
              'https://media-cdn.tripadvisor.com/media/photo-s/04/a1/dc/bb/executive-lounge.jpg',
          },
        ],
        premium_lounge_description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        premium_lounge_background:
          'https://reisetopia.de/wp-content/uploads/2019/06/lufthansa-senator-lounge-frankfurt-a-sitze.jpg',
        current_event_image:
          'https://images.squarespace-cdn.com/content/v1/52ccee75e4b00bc0dba03f46/1590734815807-32BJCRQSDFNEMS4PU9Y6/image-asset.jpeg?format=1000w',
        current_event_title: 'Current Title Event',
        current_event_description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        events: [
          {
            title: 'Title 1',
            event_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            event_image:
              'https://cdn.onemileatatime.com/wp-content/uploads/2015/09/Lufthansa-First-Class-Lounge-Frankfurt-11.jpg?width=700&auto_optimize=low&quality=75&height=525&aspect_ratio=4%3A3',
          },
          {
            title: 'Title 2',
            event_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            event_image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8QjOXVsux1s79aEpwgrQNE1fuuYQIK3ORkoCL9pLg6fra3AY0JPst26xTjhwYmv_ilg&usqp=CAU',
          },
          {
            title: 'Title 3',
            event_description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            event_image:
              'https://cdn.onemileatatime.com/wp-content/uploads/2015/09/Lufthansa-First-Class-Lounge-Frankfurt-11.jpg?width=700&auto_optimize=low&quality=75&height=525&aspect_ratio=4%3A3',
          },
        ],
        private_event_description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        private_event_background:
          'https://www.lufthansagroup.com/media/_processed_/8/2/csm_20210531_First_Class_Lounge_A_001_489f61c51c.jpg',
        location:
          'MGK Kemayoran - Lower Ground (Basement, JL. Angkasa, Kavling B-6, RW.10, Gn. Sahari Sel., Kec. Kemayoran, Jakarta, Daerah Khusus Ibukota Jakarta 10160',
        google_map_link:
          'https://www.google.com/maps/place/de+Spectra+Executive+Club/@-6.1554681,106.8471859,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f59a63e62365:0xb89908ce56cf4be2!8m2!3d-6.1554681!4d106.8493746',
        hiring_description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      });
    } catch (error) {
      // setLoadingLanguage(false);
    }
  }

  useEffect(() => {
    getLanguage();

    return () => {
      setLoadingLanguage(true);
      setPageContent({});
    };
  }, []);

  useEffect(() => {
    if (!loadingLanguage && !loadingImages) {
      // setLoadingPage(false);
    }
  }, [loadingLanguage, loadingImages]);

  if (loadingLanguage) {
    return <PageSpinner />;
  }

  return (
    <PageSpinner loading={false}>
      <SEO
        titlePage={pageContent.meta_header}
        metaDescription={pageContent.meta_description}
      />
      <Header logo={pageContent.logo_image} />
      <div className="pd-home">
        <HomeSectionBanners
          id="home"
          banners={pageContent.banners}
          onImagesLoaded={() => setLoadingImages(false)}
        />
        <HomeSectionHours id="hours" />
        <HomeSectionAboutUs
          id="about-us"
          aboutUsContent={{
            backgroundUrl: pageContent.about_us_background,
            mobileBackgroundUrl: pageContent.about_us_mobile_background,
            description: pageContent.about_us,
          }}
        />
        <HomeSectionRooms id="rooms" rooms={pageContent.rooms} />
        <HomeSectionPremiumRoom
          id="premium-lounge"
          premiumRoomContent={{
            backgroundUrl: pageContent.premium_lounge_background,
            mobileBackgroundUrl: pageContent.premium_lounge_mobile_background,
            description: pageContent.premium_lounge_description,
          }}
        />
        <HomeSectionGalleries id="galleries" content={pageContent.galleries} />
        <HomeSectionEventPromo
          id="event-promo"
          eventPromoContent={{
            currentEventImage: pageContent.current_event_image,
            currentEventTitle: pageContent.current_event_title,
            currentEventDescription: pageContent.current_event_description,
            highlightImage: pageContent.event_highlight_image,
            events: pageContent.events,
          }}
        />
        <HomeSectionPrivateEvents
          id="private-events"
          eventPrivateContent={{
            backgroundUrl: pageContent.private_event_background,
            mobileBackgroundUrl: pageContent.private_event_mobile_background,
            description: pageContent.private_event_description,
          }}
        />
      </div>
      <Footer
        content={{
          location: pageContent.location,
          hiringDescription: pageContent.hiring_description,
          googleMapLink: pageContent.google_map_link,
          logo: pageContent.logo_image,
        }}
      />
    </PageSpinner>
  );
}

export default { Home };
