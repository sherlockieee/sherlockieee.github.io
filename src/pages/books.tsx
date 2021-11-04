import React from 'react';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import './styles/index.scss';

function books() {
  return (
    <Layout>
      <SEO title="book-recommendations" />
      <div className="index-wrap">
        <Bio />
        <div className="index-post-list-wrap">
          <div className="index-about">
            <h2>Book Recommendations</h2>
            <p>
              A list of books I love. To have updates on my readings, reviews &amp; books read, follow me on{' '}
              <a href="https://www.goodreads.com/user/show/50839792-ha-tran-nguyen-phuong">Goodreads</a>.
            </p>
            <h3 id="-world-view-">
              🌏 <strong>World View</strong>
            </h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/23692271-sapiens">Sapiens: A Brief History of Humankind</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/39704901-homo-deus">
                  Homo Deus: A Brief History of Tomorrow
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/13530973-antifragile">
                  Antifragile: Things That Gain from Disorder
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/8496935-the-black-swan">The Black Swan</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/50485582-the-precipice">
                  The Precipice: Existential Risk and the Future of Humanity
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/10483171-the-beginning-of-infinity">
                  The Beginning of Infinity: Explanations That Transform the World
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/5597902-complexity?ac=1&amp;from_search=true&amp;qid=J0JwM9BRLy&amp;rank=1">
                  Complexity: A Guided Tour
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/30390901-the-selfish-gene">The Selfish Gene</a>
              </li>
            </ul>

            <h3 id="-life-philosophy">🧬 Life &amp; Philosophy</h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/23276781-c-ph-c-ng-tony">Cà Phê Cùng Tony</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/34536488-principles">Principles: Life and Work</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning">
                  Man&#39;s Search for Meaning
                </a>
              </li>
            </ul>
            <h3 id="-design-">
              🎨 <strong>Design</strong>
            </h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/18197267-don-t-make-me-think-revisited">
                  Don&#39;t Make Me Think
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/43190966-refactoring-ui">Refactoring UI</a>
              </li>
            </ul>
            <h3 id="-climate">🌡️ Climate</h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/31624481-drawdown">
                  Drawdown: The Most Comprehensive Plan Ever Proposed to Reverse Global Warming
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/6411373-whole-earth-discipline">
                  Whole Earth Discipline: An Ecopragmatist Manifesto
                </a>
              </li>
            </ul>
            <h3 id="-autobiography">🧑🏻 Autobiography</h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/11084145-steve-jobs">Steve Jobs</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/25541028-elon-musk">
                  Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/27220736-shoe-dog">
                  Shoe Dog: A Memoir by the Creator of NIKE
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/328802.Totto_chan">
                  Totto-chan: The Little Girl at the Window
                </a>
              </li>
            </ul>
            <h3 id="-productivity-">
              ⚒️ <strong>Productivity</strong>
            </h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/25744928-deep-work">Deep Work</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/44770129-ultralearning">Ultralearning</a>
              </li>
            </ul>
            <h3 id="-business-start-ups">💼 Business &amp; Start-ups</h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/10127019-the-lean-startup">The Lean Startup</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/18050143-zero-to-one">Zero to One</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/4122.Built_to_Last">Built to Last</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/76865.Good_to_Great?ac=1&amp;from_search=true&amp;qid=OejjIpC4i8&amp;rank=1">
                  Good to Great
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/49099937-no-rules-rules">
                  No Rules Rules: Netflix and the Culture of Reinvention
                </a>
              </li>
            </ul>
            <h3 id="-health-fitness">🥕 Health &amp; Fitness</h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/25663961-how-not-to-die">
                  How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/721609.Spark">
                  Spark: The Revolutionary New Science of Exercise and the Brain
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/25159044-first-bite">First Bite: How We Learn to Eat</a>
              </li>
            </ul>
            <h3 id="-fiction">☁️ Fiction</h3>
            <ul>
              <li>
                <a href="https://www.goodreads.com/book/show/77203.The_Kite_Runner">The Kite Runner</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/32068852-ng-y-x-a-c-m-t-chuy-n-t-nh">
                  Ngày Xưa Có Một Chuyện Tình
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/23302416-wonder">Wonder</a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/40961427-1984?ac=1&amp;from_search=true&amp;qid=CyjdB9FGJK&amp;rank=1">
                  1984
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone?from_search=true&amp;from_srp=true&amp;qid=Q5hunw0qrm&amp;rank=2">
                  Harry Potter Series
                </a>{' '}
                (but borrow it from a library because JK Rowling is problematic :))
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default books;
