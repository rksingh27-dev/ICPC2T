<template>
  <div class="col-xl-8 col-md-12">
    <!-- Post -->
    <div class="row mt-2 mb-5 pb-3 mx-2">
      <!-- Cards -->
      <div class="card card-body mb-5" v-for="(destination, index) in destinations" :key="index">
        <h2 class="font-weight-bold mt-3">
          <strong>{{ destination.title }}</strong>
        </h2>
        <div class="speaker-card">
          <div class="right">
            <img class="destination-img" v-for="(image, imgIndex) in destination.images" :src="image" :key="imgIndex" />
          </div>
          <div class="left">
            <div v-html="destination.description"></div>
            <a :href="destination.link" target="_blank">{{ destination.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToursAndTravel",
  data() {
    return {
      destinations: [
        {
          title: "Dongargarh: The Land of Divine Serenity",
          images: ["Dongargarh1.jpg", "Dongargarh2.jpg"],
          description: `
              <p>
    Nestled amidst picturesque hills, <strong>Dongargarh</strong> is renowned for the majestic <strong>Maa Bambleshwari Temple</strong>, perched atop a 1,600-foot hill. A major pilgrimage site, it attracts devotees and tourists alike, offering breathtaking views and a tranquil ambiance. For adventure enthusiasts, the thrilling ropeway ride to the temple is a must-try experience. The serene surroundings and spiritual aura make Dongargarh a perfect blend of faith and nature.
  </p>
  <p>
    The temple holds immense religious significance and is especially crowded during the festivals of <strong>Navratri</strong>, when thousands of devotees gather to seek blessings. The vibrant festivities, coupled with the chanting of hymns, create a spiritually uplifting experience. 
  </p>
  <p>
    Dongargarh is not just a spiritual destination; it is also a nature lover's paradise. The lush greenery, tranquil lakes, and peaceful environment make it an ideal spot for meditation and relaxation. Visitors can also explore the nearby <strong>Pragyagiri Hill</strong>, which houses a magnificent Jain temple and offers panoramic views of the surrounding landscape.
  </p> 
            
          `,
          link: "https://en.wikipedia.org/wiki/Dongargarh",
          linkText: "Learn more about Dongargarh",
        },
        {
          title: "Jungle Safari, Naya Raipur",
          images: ["Jungle safari1.jpg", "Jungle safari2.jpg"],
          description: `
             <p>
    The <strong>Jungle Safari at Naya Raipur</strong> is an exhilarating experience for wildlife enthusiasts and nature lovers. Spanning over 800 acres, it is one of the largest man-made safaris in Asia, offering a unique opportunity to explore the rich biodiversity of Chhattisgarh. The safari is home to a wide variety of animals, including tigers, lions, bears, and herbivores like deer and antelope, all residing in their natural habitats.
  </p>
  <p>
    Visitors can enjoy guided tours through the dense greenery, spotting exotic flora and fauna, and experiencing the serenity of the wilderness. The safari also has designated zones for animals and a specialized interpretation center to educate visitors about wildlife conservation. The jungle is designed to resemble the animals’ natural environments, ensuring that both animals and visitors enjoy a safe and enriching experience.
  </p>
  <p>
    The <strong>Safari's unique features</strong> include opportunities for visitors to interact with wildlife experts who share fascinating insights into animal behavior, conservation efforts, and the region’s ecosystem. For bird watchers, the safari is a haven with various species of migratory and local birds nesting and soaring in the lush trees.
  </p>
          `,
          link: "https://raipur.gov.in/en/tourist-place/jungle-safari/",
          linkText: "Jungle Safari Naya Raipur - Official Website",
        },
        {
          title: "GhataRani Waterfall",
          images: ["Ghatarani1.jpg", "Ghatarani2.jpg"],
          description: `
      <p>
    <strong>Ghatarani Waterfall</strong>, located about 85 kilometers from Raipur, is a picturesque destination that captivates visitors with its natural beauty. Surrounded by lush green forests, the waterfall offers a serene and refreshing escape from the bustling city life. The cascading waters form a natural pool at the base, making it a perfect spot for picnics and a dip in the cool waters.
  </p>
  <p>
    The journey to Ghatarani is equally enchanting, with scenic landscapes and tranquil surroundings. The place is also home to the famous <strong>Ghatarani Mata Temple</strong>, a revered site for pilgrims and nature lovers alike. The temple, nestled amidst the verdant environment, adds a touch of spirituality to this natural wonder, attracting visitors seeking peace and blessings.
  </p>
  <p>
    For adventure enthusiasts, Ghatarani offers the thrill of trekking through its lush trails, providing an immersive experience of the region's biodiversity. The monsoon season enhances the waterfall's charm, with the gushing streams creating a mesmerizing sight. Visitors often enjoy photography sessions, capturing the vibrant flora and fauna along with the dramatic backdrop of the falls.
  </p>
  <p>
    Apart from its natural beauty, Ghatarani is a great spot for family outings and group excursions. The area provides ample space for relaxation and recreational activities, making it a favorite weekend getaway. Small food stalls and shops near the waterfall cater to visitors, offering local delicacies and refreshments.
  </p>
          `,
          link: "https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/raipur/ghatarani-waterfalls.html",
          linkText: "View more about Ghatarani Waterfall",
        },

        {
          title: "Mahant Ghasidas Memorial Museum,Raipur",
          images: ["Musieum1.jpg", "Musieum2.jpg"],
          description: `
         The <strong>Mahant Ghasidas Memorial Museum</strong> is one of the oldest and most prestigious museums in Chhattisgarh. Established in 1875, it was rebuilt in 1953 under the patronage of Raja Mahant Rajendra Bahadur Singh. The museum offers a glimpse into the rich history, culture, and heritage of the region.
  </p>
  <p>
    It houses an impressive collection of ancient sculptures, inscriptions, coins, tribal artifacts, and rare manuscripts. The museum's tribal gallery provides insight into the vibrant lifestyles and traditions of the indigenous communities of Chhattisgarh. Visitors can also explore its numismatic collection, showcasing coins from different eras, and its collection of intricate terracotta artifacts.
  </p>
  <p>
    The museum also hosts regular exhibitions and workshops, making it a hub for history enthusiasts and scholars. A visit to this museum is a journey through time, revealing the artistic and cultural brilliance of the state.
  </p>
          `,
          link: "https://chhattisgarhtourism.co.in/",
          linkText: "View more about musieum",
        },

        {
          title: "Gangrel Dam",
          images: ["Gangrel dam1.jpg", "Gangrel dam2.jpg"],
          description: `
          <p>
          <strong>Gangrel Dam</strong>, also known as <strong>Ravishankar Sagar Dam</strong>, is a prominent water reservoir located in the Dhamtari district of Chhattisgarh, India. Built across the <strong>Mahanadi River</strong>, it is one of the most significant dams in the state and serves multiple purposes, including irrigation, water supply, and hydroelectric power generation.
        </p>
        <p>
    Commissioned in 1978, the dam was named after India's first Prime Minister, <strong>Pandit Jawaharlal Nehru</strong>, reflecting his vision for harnessing natural resources for sustainable development. It has a storage capacity of approximately <strong>15.02 TMC</strong> (thousand million cubic feet) and irrigates a vast stretch of agricultural land, benefitting farmers in the region.
  </p>
  <p>
    Apart from its utility, Gangrel Dam is also a popular tourist destination. Surrounded by scenic beauty, the reservoir offers picturesque views and is a haven for nature lovers and photographers. Activities like <strong>boating</strong> and <strong>fishing</strong> are available, making it an excellent spot for recreation. The dam is particularly captivating during the monsoon season when the water levels are high, and the overflow creates a spectacular sight.
  </p>
          `,
          link: "https://en.wikipedia.org/wiki/Gangrel_Dam",
          linkText: "View more about Gangrel Dam",
        },

         
        {
          title: "Entartica SeaWorld by Mayfair",
          images: ["Entartica by May fair1.jpg", "Entartica by May fair2.jpg"],
          description: `
          <p> <strong>Entartica SeaWorld by Mayfair</strong> is a unique water-based adventure and recreation destination in India. Designed to provide an immersive experience combining water sports, entertainment, and relaxation, Entartica SeaWorld is a favorite getaway for families, thrill-seekers, and nature lovers alike.
        </p>
        <p>
    Located in serene environments, the park offers a wide range of exciting activities, such as <strong>jet skiing, paddle boating, water zorbing, and kayaking</strong>. Additionally, it boasts luxury dining experiences aboard floating restaurants, allowing visitors to enjoy meals with breathtaking views of the water.
  </p>
  <p>
    One of the highlights of Entartica SeaWorld is its commitment to offering a blend of adventure and relaxation. Visitors can explore <strong>houseboats</strong>, engage in <strong>aqua cycling</strong>, or unwind in scenic spaces designed for leisure. Its emphasis on safety and quality ensures that every guest has a secure and memorable experience.
  </p>
  <p>
    With its modern amenities and innovative offerings, Entartica SeaWorld by Mayfair is not just a water park but a destination that creates lasting memories for everyone who visits.
  </p>
          `,
          link: "https://entartica.com/",
          linkText: "View more about Entartica SeaWorld by Mayfair",
        },
         
        {
          title: "Chokhi Dhani",
          images: ["Chokar Dhani1.jpg", "Chokar Dhani2.jpg"],
          description: `
         <p>
    <strong>Chokhi Dhani</strong>, often referred to as <strong>Chokar Dhani</strong>, is a renowned cultural village-themed resort that offers an authentic taste of <strong>Rajasthani heritage and traditions</strong>. It is a popular destination for families, tourists, and cultural enthusiasts who wish to immerse themselves in the vibrant culture, cuisine, and artistry of Rajasthan.
  </p>
  <p>
    Located in various parts of India, including Jaipur, Chokhi Dhani showcases the essence of rural Rajasthan through its traditional architecture, folk performances, and ethnic decor. Guests can enjoy <strong>puppet shows, traditional Rajasthani dance performances like Ghoomar and Kalbelia, camel rides, and bullock cart rides</strong>.
  </p>
  <p>
    One of the highlights of Chokhi Dhani is its <strong>Rajasthani thali</strong>, a royal feast featuring a wide variety of authentic dishes served with warm hospitality. Visitors can also explore the village market (<em>Haat Bazaar</em>), where artisans display traditional crafts and souvenirs.
  </p>
  <p>
    The ambiance at Chokhi Dhani is designed to transport visitors to a rustic yet festive environment, making it a perfect blend of relaxation, entertainment, and cultural learning.
  </p>
    
          `,
          link: "https://www.chokhidhani.com/",
          linkText: "View more about Chokhi Dhani",
        },
        {
          title: "Purkhouti Muktangan",
          images: ["Muktangan1.jpg", "Muktangan2.jpg"],
          description: `
          <p>
    <strong>Purkhouti Muktangan</strong>, located in <strong>Naya Raipur, Chhattisgarh</strong>, is an open-air museum and cultural park that beautifully showcases the state's rich heritage, art, and tribal traditions. Inaugurated in <strong>2006</strong> by former President Dr. A.P.J. Abdul Kalam, the park is a vibrant representation of Chhattisgarh’s diverse culture and natural beauty.
  </p>
  <p>
    Spread over <strong>200 acres</strong>, Purkhouti Muktangan features life-sized tribal huts, sculptures, and exhibits that provide a glimpse into the lifestyle, rituals, and artistic expressions of the region's indigenous communities. Visitors can explore intricate tribal artworks, traditional tools, and vibrant murals that reflect the state’s cultural essence.
  </p>
  <p>
    The park is also known for its lush landscapes, adorned with medicinal plants, fountains, and pathways, offering a peaceful retreat for visitors. Educational tours and workshops conducted here aim to spread awareness about the preservation of local heritage and environmental conservation.
  </p>
  <p>
    Purkhouti Muktangan is not just a cultural showcase; it’s also a celebration of Chhattisgarh’s festivals and traditions. Seasonal events and folk dance performances add a dynamic element to the experience, making it a perfect destination for tourists, students, and art enthusiasts.
  </p>
    
          `,
          link: "https://en.wikipedia.org/wiki/Purkhouti_Muktangan",
          linkText: "View more about Muktangan",
        },
        {
          title: "Rebounce",
          images: ["Rebounce1.jpg", "Rebounce12.jpg"],
          description: `
                  <p>
    <strong>Rebounce</strong> is a popular trampoline park and entertainment center, offering a fun-filled experience for visitors of all ages. Located in <strong>Raipur, Chhattisgarh</strong>, it is the perfect destination for thrill-seekers, fitness enthusiasts, and families looking for an exciting day out. With a variety of attractions and activities, Rebounce combines physical activity with pure entertainment.
  </p>
  <p>
    The park features a range of trampolines where visitors can jump, flip, and bounce to their heart's content. In addition to trampolining, Rebounce offers other activities like <strong>dodgeball</strong>, <strong>foam pits</strong>, and interactive games, ensuring that there's something for everyone. It is a great place for kids to burn off energy, but it’s also popular among adults looking for a unique workout or a break from routine.
  </p>
  <p>
    Rebounce also hosts events such as <strong>birthday parties</strong>, <strong>corporate outings</strong>, and fitness sessions, making it a versatile destination. With trained staff ensuring safety and guidance, visitors can enjoy their time worry-free. The vibrant atmosphere, paired with modern facilities, makes Rebounce a must-visit spot for recreation in Raipur.
  </p>
     
          `,
          link: "https://rebounce.in/",
          linkText: "View more about Rebounce ",
        },




        // Add more destinations here as needed
      ],
    };
  },
};
</script>

<style scoped>
.card{
  margin-left: -150px;
  max-width: 1200px !important;
  padding: 0 20px;
}
.destination-img {
  height: 300px;
  width: 200px;
  padding-right: 10px;
}
.speaker-card {
  display: flex;
  gap: 15px;
}
.speaker-card .left {
  text-align: justify;
}
@media(max-width:1350px)
{
  .card{
    margin-left:-50px
  }
}
@media (max-width: 1000px) {
  .speaker-card {
    flex-direction: column;
  }
  .card{
    margin-left:0px;
   
  }
}
</style>

