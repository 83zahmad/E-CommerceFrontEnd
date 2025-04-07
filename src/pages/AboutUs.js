import React from 'react';
import '../styles/App.css';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to Sustainable Fashion Marketplace, where style meets sustainability. We are a team of passionate individuals
        dedicated to promoting eco-friendly fashion and empowering consumers to make better, more sustainable choices. Our goal
        is to make sustainable fashion accessible to everyone, combining modern trends with eco-conscious materials, and offering
        a transparent, ethical alternative to fast fashion.
      </p>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to revolutionize the fashion industry by offering stylish, high-quality clothing made from 
          eco-friendly and sustainable materials. We believe fashion should never come at the cost of the planet, and we are 
          committed to ensuring that every garment we offer is produced with respect for both people and the environment.
        </p>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Sustainability:</strong> We prioritize using organic, recycled, and eco-friendly materials in all our products.</li>
          <li><strong>Transparency:</strong> We are open about our sourcing and production processes to ensure our customers can make informed decisions.</li>
          <li><strong>Ethical Practices:</strong> We partner with manufacturers who follow fair labor practices and provide fair wages to workers.</li>
          <li><strong>Innovation:</strong> We constantly look for ways to improve and innovate, ensuring that we offer the best in sustainable fashion.</li>
        </ul>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <p>
          We are a diverse team of designers, sustainability advocates, and entrepreneurs working together to bring you the best in 
          eco-friendly fashion. Our team believes in the power of change and strives to make a positive impact on the fashion 
          industry, one garment at a time.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2147.jpg" alt="Team Member 1" />
            <p><strong>Tajinder Kaur</strong> - Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://attic.sh/kaoyt7ypjtzkaeq7wcrt18ctdiss" alt="Team Member 2" />
            <p><strong>KaranPreet Singh</strong> - Head of Sustainability</p>
          </div>
          <div className="team-member">
            <img src="https://static.vecteezy.com/system/resources/previews/035/593/780/original/ai-generated-happy-boy-cartoon-ai-generative-free-png.png" alt="Team Member 3" />
            <p><strong>Zeeshaun Ahmad</strong> - Product Designer</p>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more? Get in touch with us! We’d love to hear from you.
        </p>
        <ul>
          <li><strong>Email:</strong> info@sustainablefashion.com</li>
          <li><strong>Phone:</strong> +1 234 567 890</li>
          <li><strong>Address:</strong> 123 Green Street, Eco City, Country</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
