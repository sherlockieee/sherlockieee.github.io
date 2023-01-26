import React from 'react';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import './styles/index.scss';

function about() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="index-wrap">
        <Bio />
        <div className="index-post-list-wrap">
          <div className="index-about">
            <h2>Hello, World!</h2>
            <p>
              I'm Ha. Originally from Hanoi, Vietnam, I am a Computer Science major @{' '}
              <a href="https://www.minerva.edu/">Minerva University</a>. In the past 4 years, I have traveled the world
              for my education and have lived in 7 countries (Vietnam, Singapore, US, Germany, UK, Argentina and
              Taiwan). I write about software, books, climate, friendship, growth and changes.
            </p>
            <p>
              I believe we need more people work on important things, such as solving climate change. I'm especially
              interested in carbon sequestration using enhanced weathering with olivine, how to solve the carbon credit
              industry, and awesome climate solutions in general. Shoot me an email if you want to chat!
            </p>
            <p>
              I believe in the power of the tools we use to solve complex problems. My favourite tools currently
              include: <a href="https://figma.com/">Figma</a>, <a href="https://notion.so">Notion</a>, and{' '}
              <a href="https://projectmeta.netlify.app/">Heptabase</a> (that I was somehow a part of ... strange).
            </p>

            <p>
              Lastly, I love reading and try to maintain an active list{' '}
              <a href="https://www.goodreads.com/user/show/50839792-ha-tran-nguyen-phuong">here</a>. I also plan to
              donate 10% of my income to{' '}
              <a href="https://www.givingwhatwecan.org/best-charities-to-donate-to-2021/">effective charities</a>. If
              you're interested in any of these things, you have come to the right place!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default about;
