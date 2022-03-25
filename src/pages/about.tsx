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
              {' '}
              I'm Ha. I'm originally from Hanoi, Vietnam, and am now at{' '}
              <a href="https://www.minerva.edu/">Minerva University</a>. In the past, I've been lucky enough to live in
              5 countries (Vietnam, Singapore, US, Germany and UK), and finger-crossed, 2 more (Argentina and Taiwan).
            </p>
            <p>
              I believe in the power of the tools we use to solve complex problems. My favourite tools currently
              include: <a href="https://figma.com/">Figma</a>, <a href="https://notion.so">Notion</a>, and{' '}
              <a href="https://projectmeta.netlify.app/">Project Meta</a> (that I'm somehow a part of ... strange).
            </p>
            <p>
              I think we need more people work on important things, such as solving climate change. I'm especially
              interested in carbon sequestration using enhanced weathering with olivine, and the intersection between
              web3 and regenerative finance. Shoot me an email if you want to chat!
            </p>
            <p>
              Lastly, I love reading and try to maintain an active list{' '}
              <a href="https://www.goodreads.com/user/show/50839792-ha-tran-nguyen-phuong">here</a>. I also plan to
              donate 10% of my income to{' '}
              <a href="https://www.givingwhatwecan.org/best-charities-to-donate-to-2021/">effective charities</a>, and
              write about software, climate, tools for thoughts and any other topic of interest here. So if you're
              interested in any of these things, you have come to the right place!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default about;
