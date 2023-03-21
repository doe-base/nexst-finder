import react, {useRef} from 'react'
import useStyles from "./page-style/home-style";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Container } from '@material-ui/core';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
// import CampaignOutlinedIcon from '@material-ui/icons/CampaignOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

// import HomeIcon from '@mui/icons-material/Home';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';




export default function Home(){
    const classes = useStyles();

    const menuData = [
        {
          id: 1,
          title: "buttermilk pancakes",
          category: "breakfast",
          price: 15.99,
          img: "./images/item-1.jpeg",
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
          id: 2,
          title: "diner double",
          category: "lunch",
          price: 13.99,
          img: "./images/item-2.jpeg",
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: "godzilla milkshake",
          category: "shakes",
          price: 6.99,
          img: "./images/item-3.jpeg",
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: "country delight",
          category: "breakfast",
          price: 20.99,
          img: "./images/item-4.jpeg",
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: "egg attack",
          category: "lunch",
          price: 22.99,
          img: "./images/item-5.jpeg",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: "oreo dream",
          category: "shakes",
          price: 18.99,
          img: "./images/item-6.jpeg",
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: "bacon overflow",
          category: "breakfast",
          price: 8.99,
          img: "./images/item-7.jpeg",
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: "american classic",
          category: "lunch",
          price: 12.99,
          img: "./images/item-8.jpeg",
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: "quarantine buddy",
          category: "shakes",
          price: 16.99,
          img: "./images/item-9.jpeg",
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
          id: 10,
          title: "bison steak",
          category: "dinner",
          price: 22.99,
          img: "./images/item-10.jpeg",
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ];
    
    const eventData = [
        {
          id: 1,
          title: "The Boardroom Conference",
          category: "Conference",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic.avif",
        },
        {
          id: 2,
          title: "Build Your First Website",
          category: "Learning",
          price: 0,
          desc: `Begin a career in web development or design! This workshop is designed for absolute beginners. There are no prerequisites`,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-2.avif",
        },
        {
          id: 3,
          title: "2023 IWD: DIGITAL ALL - INNOVATION & TECHNOLOGY FOR GENDER EQUALITY",
          category: "Serminar",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-3.avif",
        },
        {
          id: 4,
          title: "Aiivon Tech-Job Fair 1.0",
          category: "Learning",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-4.avif",
        },
        {
          id: 5,
          title: "ARM Labs Lagos Techstars Accelerator Demo Day",
          category: "Conference",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-5.avif",
        },
        {
          id: 6,
          title: "Founders' Camp Fire Networking Night",
          category: "Learning",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-6.avif",
        },
        {
          id: 7,
          title: "IOT West Africa",
          category: "Confrence",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-7.avif",
        },
        {
          id: 8,
          title: "Lagos Digital Marketing Training 2023",
          category: "Conference",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-8.avif",
        },
        {
          id: 9,
          title: "Women In Tech: Embracing Equity",
          category: "Learning",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-9.avif",
        },
        {
          id: 10,
          title: "NAITS BUK TECH SUMMIT 2023",
          category: "Festival",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/event-pic-10.avif",
        },
    ];


    const serivceData = [
        {
          id: 1,
          title: "Divine Grace Schools",
          category: "Day care",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-1.jpg",
        },
        {
          id: 2,
          title: "CARPENTARY WORKSHOP PANKSHIN",
          category: "Carpentary",
          price: 0,
          desc: `Begin a career in web development or design! This workshop is designed for absolute beginners. There are no prerequisites`,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-2.jpg",
        },
        {
          id: 3,
          title: "Green Revolution",
          category: "Laundry",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-3.jpg",
        },
        {
          id: 4,
          title: "Gaturco Limited",
          category: "Electrician",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-4.jpg",
        },
        {
          id: 5,
          title: "Dalyop Tailoring Services",
          category: "Tailor",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-5.jpg",
        },
        {
          id: 6,
          title: "Body bliss massage and scrubs",
          category: "Relaxation",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-6.jpg",
        },
        {
          id: 7,
          title: "Nenpin Nite Club",
          category: "Club",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-7.jpg",
        },
        {
          id: 8,
          title: "De real car wash",
          category: "Car wash",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-8.jpg",
        },
        {
          id: 9,
          title: "Kajon Hotel",
          category: "Lodge",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-9.jpg",
        },
        {
          id: 10,
          title: "Patty's beauty concept",
          category: "Salon",
          price: 0,
          desc: `The boardroomboss is back and this time, she's here for you! Sign up for THE BOARDROOM CONFERENCE and be a part this innovative meet-up! `,
          date: '25-03-2023',
          time: '10:00',
          location: {
            city: 'Abuja',
            country: 'Nigeria',
            postalCode: '900212'
          },
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis commodi quas, odit, distinctio, quo pariatur sit natus similique voluptates aliquid maiores eveniet esse. Ut, quas officiis magnam, laboriosam perspiciatis ducimus dolor tenetur maiores, non ipsum fuga vel eos debitis atque! Iste minus dolore quasi veniam. Dicta rem animi veniam recusandae, facilis rerum velit perspiciatis reiciendis possimus in repellat fuga nisi beatae nam officiis. Iste eligendi reprehenderit beatae necessitatibus quibusdam ipsam corporis accusantium? Molestias odio ad recusandae nulla nisi quisquam sit fugit quod! Ad, doloribus sunt? Soluta corporis ducimus sed cum porro eos tenetur unde vitae laborum magnam dolorum provident totam est harum, pariatur et. Blanditiis aut consectetur fugiat, vel, velit veniam voluptatum iste quis odio reiciendis explicabo corrupti, accusamus minima atque? Fugiat, dolore et impedit temporibus dolores',
          duration: '6',
          img: "./images/service-10.jpg",
        },
    ];
    

    return (
        <Container>
            <div className={classes.top}>
                <div className={classes.topHeading}><h2>Good evening</h2></div>

                <div className={classes.iconsHolder}>
                    <div><NotificationsNoneOutlinedIcon className={classes.icon}/></div>
                    <div><ThumbUpOutlinedIcon className={classes.icon}/></div>
                    <div><SettingsOutlinedIcon className={classes.icon}/></div>
                </div>
            </div>
            <div className="select-intrest">
                <button className={classes.filterBtn}>Event</button>
                <button className={classes.filterBtn}>Products</button>
                <button className={classes.filterBtn}>Service</button>
                <button className={classes.filterBtn}>Online</button>
            </div>
            <div className="more-info"></div>
            <div className={classes.firstSection}>
                <h2 className={classes.sectionTitle}>What do you crave</h2>
                <div className={classes.slide}>

                    {
                        menuData.map((item, index) =>{
                            return (

                                <div className={classes.card}>
                                    <div className={classes.imgHolder}>
                                        <div className={classes.cardOverlay}></div>
                                        <img src={item.img} alt="" className={classes.img}/>
                                        
                                            <h3 className={classes.cardTitle}>{item.category}</h3>
                                            <div className={classes.bottomLine}> </div>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <FastfoodOutlinedIcon className={classes.cardDescIcon}/>    
                                        <p className={classes.discription}>{item.title}</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        {/* <MoreOutlinedIcon className={classes.cardDescIcon}/> */}
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>{`${item.desc.substring(0, 40)}...`}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className={classes.firstSection}>
                <h2 className={classes.sectionTitle}>Go somewhere today</h2>
                <div className={classes.slide}>

                    {
                        eventData.map((item, index) =>{
                            return (

                                <div className={classes.card}>
                                    <div className={classes.imgHolder}>
                                        <div className={classes.cardOverlay}></div>
                                        <img src={item.img} alt="" className={classes.img}/>
                                        
                                            <h3 className={classes.cardTitle2}>{item.category}</h3>
                                            <div className={classes.bottomLine2}> </div>
                                    </div>
    
                                    <div className={classes.descHolder}>
                                        <p className={classes.discription} style={{textTransform: "capitalize"}}>{`${item.title.substring(0, 35)}...`}</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Sat, Mar 25, 10:00 AM</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className={classes.firstSection}>
                <h2 className={classes.sectionTitle}>Looking for a service</h2>
                <div className={classes.slide}>

                    {
                        serivceData.map((item, index) =>{
                            return (

                                <div className={classes.card}>
                                    <div className={classes.imgHolder}>
                                        <div className={classes.cardOverlay}></div>
                                        <img src={item.img} alt="" className={classes.img}/>
                                        
                                            <h3 className={classes.cardTitle}>{item.category}</h3>
                                            <div className={classes.bottomLine}> </div>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <p className={classes.discription}>{item.title}</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription}>OPEN: <span style={{color: '#51c151'}}>Opened</span></p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.navigation}>
                <div className={classes.navigationInner}>
                    <div className={classes.navIconHolder}>
                        <img src="./images/nav-icons/home.png" alt="" className={classes.navIcon}/> 
                    </div>
                    <div className={classes.navIconHolder}>
                        <img src="./images/nav-icons/search.png" alt="" className={classes.navIcon}/> 
                    </div>
                    <div className={classes.navIconHolder}>
                        <img src="./images/nav-icons/lib.png" alt="" className={classes.navIcon}/> 
                    </div>
                </div>
            </div>
        </Container>
    )
}